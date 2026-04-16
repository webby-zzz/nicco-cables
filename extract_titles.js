const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'components');
const industryPages = [
    'TransmissionDistributionPage.tsx', 'ShipbuildingMarinePage.tsx', 
    'RenewableEnergyPage.tsx', 'PowerGenerationPage.tsx', 'MobilityPage.tsx', 
    'ManufacturingPage.tsx', 'InfrastructurePage.tsx', 'HarnessingPage.tsx', 
    'ExplorationPage.tsx', 'DefencePage.tsx'
];

industryPages.forEach(page => {
    const filePath = path.join(componentsDir, page);
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf-8');
        const matches = [...content.matchAll(/title:\s*"(.*?)"/g)];
        console.log(`=== ${page} ===`);
        matches.forEach(match => {
            const t = match[1];
            if (!['Technical Details', 'Sizes & Variants', 'Industry & Applications'].includes(t)) {
                console.log('  - ' + t);
            }
        });
    }
});
