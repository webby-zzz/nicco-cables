const fs = require('fs');
const path = require('path');

const components_dir = 'components';
const pages = [
    ['LTPowerControlPage.tsx', 'LT Power & Control Cable Catalog'],
    ['InstrumentationCablesPage.tsx', 'Instrumentation Cables'],
    ['ElastomericSiliconPage.tsx', 'Elastomeric Insulated Cables'],
    ['SolarCablesPage.tsx', 'Wind Energy and Solar Cables'],
    ['WindEnergyCablesPage.tsx', 'Wind Energy and Solar Cables'],
    ['OverheadConductorsPage.tsx', 'Medium Voltage Covered Conductor (MVCC)'],
    ['HTPowerCablesPage.tsx', 'HT Cables upto 11KV'],
    ['MVCCPage.tsx', 'Medium Voltage Covered Conductor (MVCC)']
];

for (const [file_name, brochure_title] of pages) {
    const file_path = path.join(components_dir, file_name);
    let content = fs.readFileSync(file_path, 'utf-8');

    // 1. Imports
    if (!content.includes('{ useState }')) {
        content = content.replace("import React", "import React, { useState }");
    }
        
    if (!content.includes('import BrochureDownloadModal')) {
        const last_import = content.lastIndexOf('import');
        const end_of_last_import = content.indexOf('\n', last_import);
        content = content.substring(0, end_of_last_import) + "\\nimport BrochureDownloadModal from './BrochureDownloadModal';" + content.substring(end_of_last_import);
        content = content.replace('\\n', '\n'); // fix the escaped newline
    }

    // 2. State hooks
    const comp_name = file_name.replace('.tsx', '');
    const state_to_add = `\n  const [isModalOpen, setIsModalOpen] = useState(false);\n  const [modalProps, setModalProps] = useState({ title: '', url: '' });\n`;
    if (!content.includes('const [isModalOpen')) {
        const regexNode = new RegExp(`(const ${comp_name}\\s*=\\s*\\([^)]*\\)\\s*=>\\s*{)`);
        content = content.replace(regexNode, `$1${state_to_add}`);
    }

    // 3. Replace <a> tag with <button>
    const aTagRegex = /<a href="([^"]+)"[^>]*>([\s\S]*?Download Brochure[\s\S]*?)<\/a>/i;
    content = content.replace(aTagRegex, (match, pdf_url, inner) => {
        return `<button onClick={() => { setModalProps({ title: '${brochure_title}', url: '${pdf_url}' }); setIsModalOpen(true); }} className="bg-brand-dark text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap">${inner}</button>`;
    });

    // 4. Insert Modal
    if (!content.includes('<BrochureDownloadModal')) {
        const modal_jsx = `\n      <BrochureDownloadModal \n        isOpen={isModalOpen} \n        onClose={() => setIsModalOpen(false)} \n        brochureTitle={modalProps.title} \n        pdfUrl={modalProps.url} \n      />\n    </div>\n  );\n};\n`;
        content = content.replace(/\s*<\/div>\s*\);\s*};*\s*$/, modal_jsx);
    }

    fs.writeFileSync(file_path, content, 'utf-8');
    console.log(`Updated ${file_name}`);
}

// For ElectronBeamCablesPage.tsx which has 3 buttons
{
    const file_name = 'ElectronBeamCablesPage.tsx';
    const file_path = path.join(components_dir, file_name);
    let content = fs.readFileSync(file_path, 'utf-8');

    if (!content.includes('{ useState }')) {
        content = content.replace("import React", "import React, { useState }");
    }
        
    if (!content.includes('import BrochureDownloadModal')) {
        const last_import = content.lastIndexOf('import');
        const end_of_last_import = content.indexOf('\n', last_import);
        content = content.substring(0, end_of_last_import) + "\\nimport BrochureDownloadModal from './BrochureDownloadModal';" + content.substring(end_of_last_import);
        content = content.replace('\\n', '\n');
    }

    if (!content.includes('const [isModalOpen')) {
        const state_to_add = `\n  const [isModalOpen, setIsModalOpen] = useState(false);\n  const [modalProps, setModalProps] = useState({ title: '', url: '' });\n`;
        content = content.replace(/(const ElectronBeamCablesPage\s*=\s*\([^)]*\)\s*=>\s*{)/, `$1${state_to_add}`);
    }

    content = content.replace(/<a href="([^"]+)"[^>]*>\s*Solar Brochure[^\n]*<\/a>/i, (match, p1) => {
        return `<button onClick={() => { setModalProps({ title: 'Wind Energy and Solar Cables', url: '${p1}' }); setIsModalOpen(true); }} className="bg-brand-dark text-white px-6 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap">Solar Brochure <ArrowRight className="w-4 h-4" /></button>`;
    });

    content = content.replace(/<a href="([^"]+)"[^>]*>\s*Railway Brochure[^\n]*<\/a>/i, (match, p1) => {
        return `<button onClick={() => { setModalProps({ title: 'Railway Cables', url: '${p1}' }); setIsModalOpen(true); }} className="bg-brand-dark text-white px-6 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap">Railway Brochure <ArrowRight className="w-4 h-4" /></button>`;
    });

    content = content.replace(/<a href="([^"]+)"[^>]*>\s*Auto Brochure[^\n]*<\/a>/i, (match, p1) => {
        return `<button onClick={() => { setModalProps({ title: 'Automotive Cables', url: '${p1}' }); setIsModalOpen(true); }} className="bg-brand-dark text-white px-6 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap">Auto Brochure <ArrowRight className="w-4 h-4" /></button>`;
    });

    if (!content.includes('<BrochureDownloadModal')) {
        const modal_jsx = `\n      <BrochureDownloadModal \n        isOpen={isModalOpen} \n        onClose={() => setIsModalOpen(false)} \n        brochureTitle={modalProps.title} \n        pdfUrl={modalProps.url} \n      />\n    </div>\n  );\n};\n`;
        content = content.replace(/\s*<\/div>\s*\);\s*};*\s*$/, modal_jsx);
    }

    fs.writeFileSync(file_path, content, 'utf-8');
    console.log(`Updated ${file_name}`);
}
