const fs = require('fs');
const path = require('path');

const componentsDir = 'components';

const oldPattern = /const TechnicalTable: React\.FC<\{ title: string; data: \{ label: string; value: React\.ReactNode \}\[\] \}> = \(\{ title, data \}\) => \(\s*<div className="mb-12">\s*<h3 className="text-2xl font-bold text-brand-dark mb-6">\s*\{title\}\s*<\/h3>\s*<div className="overflow-x-auto no-scrollbar">\s*<table className="w-full text-left border-collapse border border-gray-200 bg-white">\s*<tbody>\s*\{data\.map\(\(item, index\) => \(\s*<tr key=\{index\} className="border-b border-gray-200">\s*<th className="py-4 px-6 text-base font-bold text-brand-dark w-1\/3 align-top border-r border-gray-200">\s*\{item\.label\}\s*<\/th>\s*<td className="py-4 px-6 text-base text-gray-700 font-normal align-top leading-relaxed">\s*\{item\.value\}\s*<\/td>\s*<\/tr>\s*\)\)\}\s*<\/tbody>\s*<\/table>\s*<\/div>\s*<\/div>\s*\);/m;

const newContent = `const TechnicalTable: React.FC<{ title: string; data: { label: string; value: React.ReactNode }[] }> = ({ title, data }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-bold text-brand-dark mb-6">
      {title}
    </h3>
    <div className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col sm:flex-row border-b last:border-b-0 border-gray-200">
          <div className="w-full sm:w-1/3 bg-gray-50 py-3 px-4 sm:px-6 font-bold text-brand-dark text-sm sm:text-base border-b sm:border-b-0 sm:border-r border-gray-200">
            {item.label}
          </div>
          <div className="w-full sm:w-2/3 py-3 px-4 sm:px-6 text-sm sm:text-base text-gray-700 font-normal leading-relaxed break-words">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  </div>
);`;

let filesChanged = 0;

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);
    if (stat.isDirectory()) {
      walk(filepath);
    } else if (file.endsWith('.tsx')) {
      const content = fs.readFileSync(filepath, 'utf-8');
      if (oldPattern.test(content)) {
        const newFileContent = content.replace(oldPattern, newContent);
        fs.writeFileSync(filepath, newFileContent, 'utf-8');
        filesChanged++;
        console.log(`Updated ${file}`);
      }
    }
  }
}

walk(componentsDir);
console.log(`Total files updated: ${filesChanged}`);
