const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'components');

function replaceInFile(filePath) {
    const origContent = fs.readFileSync(filePath, 'utf-8');
    let content = origContent;
    
    // Contact Us replacements
    content = content.replace(/Contact Us/g, 'Connect with Us');
    content = content.replace(/CONTACT US/g, 'CONNECT WITH US');
    
    // HT Cables replacements
    content = content.replace(/HT Cables\s*(?:—|-)?\s*Up\s*to\s*11\s*kV/gi, 'HT Cables upto 33kV');
    content = content.replace(/HT Cables\s*upto\s*11KV/gi, 'HT Cables upto 33kV');
    content = content.replace(/HT cables up to 33kV/gi, 'HT Cables upto 33kV');
    content = content.replace(/HT Cables upto 11kV/gi, 'HT Cables upto 33kV');
    content = content.replace(/HT cables up to 11kV/gi, 'HT Cables upto 33kV');
    
    // KV replacements
    // Match "kv" or "KV" standalone or after a number, but ignore if it's already "kV"
    // Wait, replacing \bkv\b with kV, \bKV\b with kV, and \b(\d+)\s*kv\b with $1 kV
    content = content.replace(/\bkv\b/g, 'kV');
    content = content.replace(/\bKV\b/g, 'kV');
    content = content.replace(/(\d+)\s*kv/gi, '$1 kV');
    
    // Product Title Case
    content = content.replace(/fire survival/g, 'Fire Survival');
    content = content.replace(/fire-survival/g, 'Fire-Survival');
    content = content.replace(/elastomeric and silicon/g, 'Elastomeric and Silicon');
    content = content.replace(/elastomeric/g, 'Elastomeric'); // might be risky, check later
    // Just target the specific phrases:
    content = content.replace(/electron beam/g, 'Electron Beam');
    content = content.replace(/electron-beam/g, 'Electron-Beam');
    content = content.replace(/overhead conductors/g, 'Overhead Conductors');
    content = content.replace(/instrumentation cables/g, 'Instrumentation Cables');
    content = content.replace(/solar cables/g, 'Solar Cables');
    content = content.replace(/control cables/g, 'Control Cables');
    content = content.replace(/lt power/g, 'LT Power');
    content = content.replace(/ht power/g, 'HT Power');
    content = content.replace(/coaxial cables/g, 'Coaxial Cables');
    content = content.replace(/railway signaling/g, 'Railway Signaling');
    content = content.replace(/power cables/g, 'Power Cables');
    content = content.replace(/wind energy/g, 'Wind Energy');

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

// Also process App.tsx
const appPath = path.join(__dirname, 'App.tsx');
if (fs.existsSync(appPath)) {
    replaceInFile(appPath);
}
