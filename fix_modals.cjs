const fs = require('fs');
const path = require('path');

const components_dir = 'components';
const files = [
    'LTPowerControlPage.tsx',
    'InstrumentationCablesPage.tsx',
    'ElastomericSiliconPage.tsx',
    'SolarCablesPage.tsx',
    'WindEnergyCablesPage.tsx',
    'OverheadConductorsPage.tsx',
    'HTPowerCablesPage.tsx',
    'MVCCPage.tsx',
    'ElectronBeamCablesPage.tsx'
];

for (const file_name of files) {
    const file_path = path.join(components_dir, file_name);
    let content = fs.readFileSync(file_path, 'utf-8');

    if (!content.includes('<BrochureDownloadModal')) {
        const modal_jsx = `\n      <BrochureDownloadModal \n        isOpen={isModalOpen} \n        onClose={() => setIsModalOpen(false)} \n        brochureTitle={modalProps.title} \n        pdfUrl={modalProps.url} \n      />\n    </div>\n  );\n};\n`;
        
        // Find the last occurrence of "    </div>\n  );\n};"
        const lastDivIndex = content.lastIndexOf('    </div>\n  );\n};');
        if (lastDivIndex !== -1) {
            content = content.substring(0, lastDivIndex) + modal_jsx + content.substring(lastDivIndex + '    </div>\n  );\n};'.length);
            fs.writeFileSync(file_path, content, 'utf-8');
            console.log(`Updated ${file_name}`);
        } else {
            console.log(`Could not find the insertion point in ${file_name}`);
        }
    } else {
        console.log(`Modal already exists in ${file_name}`);
    }
}
