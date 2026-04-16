import os
import re

components_dir = 'components'
pages = [
    ('LTPowerControlPage.tsx', 'LT Power & Control Cable'),
    ('InstrumentationCablesPage.tsx', 'Instrumentation Cables'),
    ('ElastomericSiliconPage.tsx', 'Elastomeric and Silicon Cables'),
    ('SolarCablesPage.tsx', 'Wind Energy and Solar Cables'),
    ('WindEnergyCablesPage.tsx', 'Wind Energy and Solar Cables'),
    ('OverheadConductorsPage.tsx', 'Medium Voltage Covered Conductor (MVCC)'),
    ('HTPowerCablesPage.tsx', 'HT Cables upto 11KV'),
    ('MVCCPage.tsx', 'Medium Voltage Covered Conductor (MVCC)')
]

for file_name, brochure_title in pages:
    file_path = os.path.join(components_dir, file_name)
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Imports
    if '{ useState }' not in content:
        content = content.replace("import React", "import React, { useState }")
        
    if 'import BrochureDownloadModal' not in content:
        # Add import after the last import line
        last_import = content.rfind('import')
        end_of_last_import = content.find('\\n', last_import)
        content = content[:end_of_last_import] + "\\nimport BrochureDownloadModal from './BrochureDownloadModal';" + content[end_of_last_import:]

    # 2. State hooks
    comp_name = file_name.replace('.tsx', '')
    pattern_comp = re.compile(rf'(const {comp_name}\s*=\s*\([^)]*\)\s*=>\s*{{)')
    
    state_to_add = r"""
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState({ title: '', url: '' });
"""
    if 'const [isModalOpen' not in content:
        content = pattern_comp.sub(r'\1' + state_to_add, content)

    # 3. Replace <a> tag with <button>
    a_tag_pattern = re.compile(r'<a href="([^"]+)"[^>]*>([\s\S]*?Download Brochure[\s\S]*?)</a>', re.IGNORECASE)
    
    def replacer(match):
        pdf_url = match.group(1)
        inner = match.group(2)
        return f"""<button onClick={{() => {{ setModalProps({{ title: '{brochure_title}', url: '{pdf_url}' }}); setIsModalOpen(true); }}}} className="bg-brand-dark text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap">{inner}</button>"""
        
    content = a_tag_pattern.sub(replacer, content)

    # 4. Insert Modal at the end of the return statement, before last </div>
    # Usually pages end with </div>\n    </div>\n  );\n};
    if '<BrochureDownloadModal' not in content:
        modal_jsx = r"""
      <BrochureDownloadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        brochureTitle={modalProps.title} 
        pdfUrl={modalProps.url} 
      />
    </div>
  );"""
        content = re.sub(r'\s*</div>\s*\);\s*};*\s*$', modal_jsx + r"\n};\n", content, flags=re.MULTILINE)
        if '<BrochureDownloadModal' not in content: # Fallback if matching failed
             content = content.replace("    </div>\n  );\n};\n", modal_jsx + "\n};\n")


    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Updated {file_name}')


# For ElectronBeamCablesPage.tsx which has 3 buttons
file_name = 'ElectronBeamCablesPage.tsx'
file_path = os.path.join(components_dir, file_name)
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

if '{ useState }' not in content:
    content = content.replace("import React", "import React, { useState }")
    
if 'import BrochureDownloadModal' not in content:
    last_import = content.rfind('import')
    end_of_last_import = content.find('\\n', last_import)
    content = content[:end_of_last_import] + "\\nimport BrochureDownloadModal from './BrochureDownloadModal';" + content[end_of_last_import:]

if 'const [isModalOpen' not in content:
    state_to_add = r"""
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState({ title: '', url: '' });
"""
    content = re.sub(r'(const ElectronBeamCablesPage\s*=\s*\([^)]*\)\s*=>\s*{{)', r'\1' + state_to_add, content)

content = re.sub(
    r'<a href="([^"]+)"[^>]*>\s*Solar Brochure[^\n]*</a>',
    r"""<button onClick={() => { setModalProps({ title: 'Wind Energy and Solar Cables', url: '\g<1>' }); setIsModalOpen(true); }} className="bg-brand-dark text-white px-6 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap">Solar Brochure <ArrowRight className="w-4 h-4" /></button>""",
    content
)
content = re.sub(
    r'<a href="([^"]+)"[^>]*>\s*Railway Brochure[^\n]*</a>',
    r"""<button onClick={() => { setModalProps({ title: 'Railway Cables', url: '\g<1>' }); setIsModalOpen(true); }} className="bg-brand-dark text-white px-6 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap">Railway Brochure <ArrowRight className="w-4 h-4" /></button>""",
    content
)
content = re.sub(
    r'<a href="([^"]+)"[^>]*>\s*Auto Brochure[^\n]*</a>',
    r"""<button onClick={() => { setModalProps({ title: 'Automotive Cables', url: '\g<1>' }); setIsModalOpen(true); }} className="bg-brand-dark text-white px-6 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap">Auto Brochure <ArrowRight className="w-4 h-4" /></button>""",
    content
)

if '<BrochureDownloadModal' not in content:
    modal_jsx = r"""
      <BrochureDownloadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        brochureTitle={modalProps.title} 
        pdfUrl={modalProps.url} 
      />
    </div>
  );"""
    content = re.sub(r'\s*</div>\s*\);\s*};*\s*$', modal_jsx + r"\n};\n", content, flags=re.MULTILINE)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print(f'Updated {file_name}')
