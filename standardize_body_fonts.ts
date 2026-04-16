import fs from 'fs';
import path from 'path';

const componentsDir = path.join(process.cwd(), 'components');

const replaceInFile = (filePath: string) => {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  // Standardize Body Text in <p> tags
  // We want to replace text-sm, text-lg, text-xl, text-2xl with text-base
  // But ONLY in <p> tags that are not accents (which use text-xs)
  
  // A regex to find <p className="..."> and replace size classes
  content = content.replace(/<p\s+className="([^"]*)"/g, (match, classNames) => {
    let classes = classNames.split(' ');
    
    // If it's an accent, leave it as text-xs
    if (classes.includes('text-xs') || classes.includes('text-[9px]') || classes.includes('text-[10px]')) {
      // Ensure it's text-xs
      classes = classes.filter(c => !['text-[9px]', 'text-[10px]'].includes(c));
      if (!classes.includes('text-xs')) classes.push('text-xs');
      return `<p className="${classes.join(' ')}"`;
    }
    
    // Otherwise, it's body text. Remove other sizes and add text-base
    classes = classes.filter(c => !['text-sm', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'md:text-base', 'md:text-lg', 'md:text-xl', 'md:text-2xl'].includes(c));
    if (!classes.includes('text-base')) {
      classes.push('text-base');
    }
    
    return `<p className="${classes.join(' ')}"`;
  });

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
