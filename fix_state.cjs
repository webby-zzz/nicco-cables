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

for (const file of files) {
    const filePath = path.join(components_dir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    if (!content.includes('const [isModalOpen')) {
        const stateToAdd = `\n  const [isModalOpen, setIsModalOpen] = useState(false);\n  const [modalProps, setModalProps] = useState({ title: '', url: '' });\n`;
        
        // Find where to insert it. We'll insert it right after the component declaration and its opening brace.
        // It's safer to just inject it right before `return (` or after `window.scrollTo(0, 0); }, []);`
        const injectionPoint = 'window.scrollTo(0, 0);\n  }, []);';
        if (content.includes(injectionPoint)) {
            content = content.replace(injectionPoint, injectionPoint + stateToAdd);
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log(`Added state to ${file}`);
        } else {
            console.log(`Could not find injection point in ${file}`);
        }
    }
}
