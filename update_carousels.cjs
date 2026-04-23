const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, 'components');
const imageBasePath = path.join(__dirname, 'public', 'Product Images', 'Industry Solution');

const mapping = [
    { page: 'HarnessingPage.tsx', folder: 'Cable Harnessing' },
    { page: 'DefencePage.tsx', folder: 'Defence (Submarine, Warships & Tanks)' },
    { page: 'ExplorationPage.tsx', folder: 'Exploration - Oil & Gas, Mining' },
    { page: 'InfrastructurePage.tsx', folder: 'Infrastructure — Building Management Systems, Data Centers, Tunnels, Metro & High Speed' },
    { page: 'ManufacturingPage.tsx', folder: 'Manufacturing' },
    { page: 'MobilityPage.tsx', folder: 'Mobility (Rolling Stock, Marine, Automotive, Aerospace)' },
    { page: 'PowerGenerationPage.tsx', folder: 'Nuclear, Hydro & Thermal Power' },
    { page: 'RenewableEnergyPage.tsx', folder: 'Renewable energy - solar & wind' },
    { page: 'TransmissionDistributionPage.tsx', folder: 'Transmission & Distribution' },
];

mapping.forEach(item => {
    const pagePath = path.join(basePath, item.page);
    const folderPath = path.join(imageBasePath, item.folder);

    if (fs.existsSync(pagePath) && fs.existsSync(folderPath)) {
        const images = fs.readdirSync(folderPath).filter(f => f.endsWith('.webp') || f.endsWith('.jpg') || f.endsWith('.png'));
        const imagePaths = images.map(img => `"/Product Images/Industry Solution/${item.folder}/${img}"`);
        
        let content = fs.readFileSync(pagePath, 'utf8');
        
        const regex = /<ImageCarousel\s+images=\{\[[\s\S]*?\]\}\s*\/>/g;
        const replacement = `<ImageCarousel \n              images={[\n                ${imagePaths.join(',\n                ')}\n              ]} \n            />`;
        
        if (regex.test(content)) {
            content = content.replace(regex, replacement);
            fs.writeFileSync(pagePath, content, 'utf8');
            console.log(`Updated ${item.page}`);
        } else {
            console.log(`ImageCarousel not found in ${item.page}`);
        }
    } else {
        console.log(`Missing file or folder for ${item.page}`);
    }
});
