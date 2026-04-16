import fs from 'fs';

const filePath = 'components/Navbar.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

content = content.replace(/text-brand-dark\/80/g, 'text-black');

fs.writeFileSync(filePath, content);
console.log('Fixed Navbar.tsx');
