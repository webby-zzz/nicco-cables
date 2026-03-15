const fs = require('fs');
const path = require('path');

const map = {
  'duration-300': 'duration-200',
  'duration-500': 'duration-300',
  'duration-700': 'duration-500',
  'duration-1000': 'duration-700',
  'duration-\\[1.5s\\]': 'duration-1000',
  'duration-\\[3s\\]': 'duration-\\[2s\\]'
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  for (const [key, value] of Object.entries(map)) {
    const regex = new RegExp(key, 'g');
    content = content.replace(regex, value);
  }
  
  content = content.replace(/duration:\s*([0-9.]+)/g, (match, p1) => {
    const newDuration = (parseFloat(p1) * 0.7).toFixed(2).replace(/\.?0+$/, '');
    return `duration: ${newDuration}`;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist' && !file.startsWith('.')) {
        walk(fullPath);
      }
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      processFile(fullPath);
    }
  }
}

walk('.');
