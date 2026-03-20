const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'components');

function processDir(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace bg-white in section tags
      content = content.replace(/<section([^>]*)bg-white([^>]*)>/g, '<section$1bg-brand-ash$2>');
      
      // Replace bg-white in main wrapper divs
      content = content.replace(/<div([^>]*)className="([^"]*)bg-white([^"]*)"([^>]*)>/g, (match, p1, p2, p3, p4) => {
        // Only replace if it's a top-level looking div like min-h-screen or just bg-white
        if (p2.includes('min-h-screen') || p3.includes('min-h-screen') || (p2.trim() === '' && p3.trim() === '')) {
          return `<div${p1}className="${p2}bg-brand-ash${p3}"${p4}>`;
        }
        if (p2.includes('py-') || p3.includes('py-')) {
            return `<div${p1}className="${p2}bg-brand-ash${p3}"${p4}>`;
        }
        return match;
      });

      fs.writeFileSync(fullPath, content);
    }
  }
}

processDir(dir);
console.log('Done');
