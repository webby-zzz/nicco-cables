import os
import re

components_dir = 'components'

old_pattern = re.compile(
    r'const TechnicalTable: React\.FC<\{ title: string; data: \{ label: string; value: React\.ReactNode \}\[\] \}> = \(\{ title, data \}\) => \(\s*<div className="mb-12">\s*<h3 className="text-2xl font-bold text-brand-dark mb-6">\s*\{title\}\s*</h3>\s*<div className="overflow-x-auto no-scrollbar">\s*<table className="w-full text-left border-collapse border border-gray-200 bg-white">\s*<tbody>\s*\{data\.map\(\(item, index\) => \(\s*<tr key=\{index\} className="border-b border-gray-200">\s*<th className="py-4 px-6 text-base font-bold text-brand-dark w-1/3 align-top border-r border-gray-200">\s*\{item\.label\}\s*</th>\s*<td className="py-4 px-6 text-base text-gray-700 font-normal align-top leading-relaxed">\s*\{item\.value\}\s*</td>\s*</tr>\s*\)\)\}\s*</tbody>\s*</table>\s*</div>\s*</div>\s*\);',
    re.MULTILINE
)

new_content = """const TechnicalTable: React.FC<{ title: string; data: { label: string; value: React.ReactNode }[] }> = ({ title, data }) => (
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
);"""

files_changed = 0

for root, dirs, files in os.walk(components_dir):
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            if old_pattern.search(content):
                new_file_content = old_pattern.sub(new_content, content)
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_file_content)
                files_changed += 1
                print(f"Updated {file}")

print(f"Total files updated: {files_changed}")
