import fs from 'fs';
import path from 'path';

const componentsDir = path.join(process.cwd(), 'components');

const replaceInFile = (filePath: string) => {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  // Standardize Headers
  content = content.replace(/text-5xl md:text-7xl/g, 'text-4xl md:text-6xl');
  content = content.replace(/text-3xl md:text-5xl/g, 'text-4xl md:text-6xl');
  content = content.replace(/text-4xl md:text-5xl/g, 'text-4xl md:text-6xl');
  
  // Standardize Sub Headers
  content = content.replace(/text-2xl md:text-4xl/g, 'text-3xl md:text-4xl');
  content = content.replace(/text-2xl md:text-3xl/g, 'text-3xl md:text-4xl');
  
  // Standardize leading
  content = content.replace(/leading-\[0\.\d+\]/g, 'leading-tight');
  content = content.replace(/leading-none/g, 'leading-tight');

  // Standardize Accents
  content = content.replace(/text-\[10px\]/g, 'text-xs');
  content = content.replace(/tracking-\[0\.4em\]/g, 'tracking-widest');
  content = content.replace(/tracking-\[0\.6em\]/g, 'tracking-widest');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
};

const walkSync = (dir: string) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walkSync(filePath);
    } else if (filePath.endsWith('.tsx')) {
      replaceInFile(filePath);
    }
  }
};

walkSync(componentsDir);
console.log('Standardization complete.');
