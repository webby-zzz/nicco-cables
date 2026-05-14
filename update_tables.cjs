const fs = require('fs');
const path = require('path');

const componentsDir = 'components';

const oldPattern = /const TechnicalTable: React\.FC<\{ title: string; data: \{ label: string; value: React\.ReactNode \}\[\] \}> = \(\{ title, data \}\) => \(\s*<div className="bg-white rounded-\[2rem\] p-8 md:p-12 shadow-md border border-gray-100 overflow-hidden mb-12">\s*<h3 className="text-xl font-bold text-brand-dark mb-6 border-l-4 border-brand-secondary pl-4 inline-block uppercase tracking-widest">\s*\{title\}\s*<\/h3>\s*<div className="overflow-x-auto no-scrollbar">\s*<table className="w-full text-left border-collapse border border-brand-secondary\/30">\s*<tbody>\s*\{data\.map\(\(item, index\) => \(\s*<tr key=\{index\} className="border-b border-brand-secondary\/30 hover:bg-brand-secondary\/\[0\.02\] transition-colors">\s*<th className="py-4 px-6 text-\[11px\] font-black text-brand-dark w-1\/3 align-top bg-brand-secondary\/\[0\.05\] uppercase tracking-\[0\.2em\] border-r border-brand-secondary\/30">\s*\{item\.label\}\s*<\/th>\s*<td className="py-4 px-6 text-sm text-black font-medium align-top">\s*\{item\.value\}\s*<\/td>\s*<\/tr>\s*\)\)\}\s*<\/tbody>\s*<\/table>\s*<\/div>\s*<\/div>\s*\);/m;

const newContent = `const TechnicalTable: React.FC<{ title: string; data: { label: string; value: React.ReactNode }[] }> = ({ title, data }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-bold text-brand-dark mb-6">
      {title}
    </h3>
    <div className="overflow-x-auto no-scrollbar">
      <table className="w-full text-left border-collapse border border-gray-200 bg-white">
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b border-gray-200">
              <th className="py-4 px-6 text-base font-bold text-brand-dark w-1/3 align-top border-r border-gray-200">
                {item.label}
              </th>
              <td className="py-4 px-6 text-base text-gray-700 font-normal align-top leading-relaxed">
                {item.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
