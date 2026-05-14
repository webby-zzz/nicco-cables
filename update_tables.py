import os
import re

components_dir = 'components'

old_pattern = re.compile(
    r'const TechnicalTable: React\.FC<\{ title: string; data: \{ label: string; value: React\.ReactNode \}\[\] \}> = \(\{ title, data \}\) => \(\s*<div className="bg-white rounded-\[2rem\] p-8 md:p-12 shadow-md border border-gray-100 overflow-hidden mb-12">\s*<h3 className="text-xl font-bold text-brand-dark mb-6 border-l-4 border-brand-secondary pl-4 inline-block uppercase tracking-widest">\s*\{title\}\s*</h3>\s*<div className="overflow-x-auto no-scrollbar">\s*<table className="w-full text-left border-collapse border border-brand-secondary/30">\s*<tbody>\s*\{data\.map\(\(item, index\) => \(\s*<tr key=\{index\} className="border-b border-brand-secondary/30 hover:bg-brand-secondary/\[0\.02\] transition-colors">\s*<th className="py-4 px-6 text-\[11px\] font-black text-brand-dark w-1/3 align-top bg-brand-secondary/\[0\.05\] uppercase tracking-\[0\.2em\] border-r border-brand-secondary/30">\s*\{item\.label\}\s*</th>\s*<td className="py-4 px-6 text-sm text-black font-medium align-top">\s*\{item\.value\}\s*</td>\s*</tr>\s*\)\)\}\s*</tbody>\s*</table>\s*</div>\s*</div>\s*\);',
    re.MULTILINE
)

new_content = """const TechnicalTable: React.FC<{ title: string; data: { label: string; value: React.ReactNode }[] }> = ({ title, data }) => (
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
