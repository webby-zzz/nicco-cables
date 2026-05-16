const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'components');

function replaceInFile(filePath) {
    const origContent = fs.readFileSync(filePath, 'utf-8');
    let content = origContent;
    
    // Remaining HT Cables replacements
    content = content.replace(/HT Power Cables - Up to 11 kV/g, 'HT Power Cables upto 33kV');
    content = content.replace(/up to 11 kV/g, 'upto 33kV');
    content = content.replace(/Up to 11 kV/g, 'upto 33kV');
    content = content.replace(/3\.3 kV to 11 kV/g, '3.3 kV to 33 kV');
    content = content.replace(/11 kV \(earthed and unearthed systems\)/g, '33 kV (earthed and unearthed systems)');
    // In Industries.tsx:
    content = content.replace(/Globally compliant UL listed and High Tension cables up to 11 kV./g, 'Globally compliant UL listed and High Tension cables upto 33kV.');
    
    // In BrochuresPage.tsx:
    content = content.replace(/Specifications for High Tension \(HT\) cables up to 11 kV\./g, 'Specifications for High Tension (HT) cables upto 33kV.');
    
    if (content !== origContent) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated ${filePath}`);
    }
}

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            replaceInFile(fullPath);
        }
    }
}

processDir(dirPath);
