import fs from 'fs';
import path from 'path';

function walk(dir: string, callback: (filePath: string) => void) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

walk('./components', (filePath) => {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content
      .replace(/text-brand-muted\/[0-9]+/g, 'text-black')
      .replace(/text-brand-muted/g, 'text-black')
      .replace(/text-white\/[0-9]+/g, 'text-white')
      .replace(/text-gray-500/g, 'text-black')
      .replace(/text-gray-600/g, 'text-black')
      .replace(/text-gray-400/g, 'text-black')
      .replace(/text-gray-300/g, 'text-black')
      .replace(/text-gray-200/g, 'text-black')
      .replace(/opacity-[0-9]+/g, 'opacity-100');
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent);
      console.log('Updated', filePath);
    }
  }
});
