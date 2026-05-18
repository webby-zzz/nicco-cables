const fs = require('fs');
const path = require('path');
const componentsDir = 'components';
const oldStr = '<div className="w-full sm:w-1/3 bg-gray-50 py-3 px-4 sm:px-6 font-bold text-brand-dark text-sm sm:text-base border-b sm:border-b-0 sm:border-r border-gray-200">';
const newStr = '<div className="w-full sm:w-1/3 bg-gray-50 py-3 px-4 sm:px-6 font-bold text-brand-dark text-sm sm:text-base border-b sm:border-b-0 sm:border-r border-gray-200 sm:border-l-4 sm:border-l-brand-secondary">';
let count = 0;
fs.readdirSync(componentsDir).forEach(file => {
  if (file.endsWith('.tsx')) {
    const p = path.join(componentsDir, file);
    let content = fs.readFileSync(p, 'utf-8');
    if (content.includes(oldStr)) {
      content = content.replaceAll(oldStr, newStr);
      fs.writeFileSync(p, content, 'utf-8');
      count++;
    }
  }
});
console.log('Updated ' + count + ' files.');
