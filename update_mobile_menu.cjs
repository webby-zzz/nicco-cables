const fs = require('fs');
const path = require('path');

const navbarPath = path.join(__dirname, 'components', 'Navbar.tsx');
let content = fs.readFileSync(navbarPath, 'utf-8');

const mobileMenuStart = content.indexOf('<ul className="space-y-3 text-[14px] font-bold text-black pl-5 border-l border-brand-dark/10">');
// Find the next </ul> which closes this list
const mobileMenuEnd = content.indexOf('</ul>', mobileMenuStart) + 5;

const products = [
  { name: 'Data & Ethernet Cables (Cat 5, Cat 6, Cat 7)', link: '/products/data-ethernet' },
  { name: 'Elastomeric and Silicon Cables (upto 15 kV)', link: '/products/Elastomeric-silicon' },
  { name: 'Electron Beam Cables', link: '/products/Electron-Beam' },
  { name: 'Fire Resistant and Fire Survival Cables', link: '/products/Fire-Survival' },
  { name: 'High Temperature Cables (ETFE, FEP, PTFE)', link: '/products/high-temperature' },
  { name: 'HT Cables upto 33kV', link: '/products/ht-power-cables' },
  { name: 'Instrumentation Cables', link: '/products/instrumentation' },
  { name: 'LT Power & Control', link: '/products/lt-power-control' },
  { name: 'Medium Voltage Covered Conductors/Tree Spacer Cables', link: '/products/mvcc' },
  { name: 'Overhead Conductors', link: '/products/overhead-conductors' },
  { name: 'RF & Thermocouple Cables', link: '/products/rf-thermocouple' }
];

let newMobileMenuList = '<ul className="space-y-3 text-[14px] font-bold text-black pl-5 border-l border-brand-dark/10">\n';
products.forEach(p => {
  newMobileMenuList += `                          <li>
                            <Link 
                              to="${p.link}" 
                              className="block hover:text-brand-secondary transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIsMegaMenuOpen(false);
                              }}
                            >
                              ${p.name}
                            </Link>
                          </li>\n`;
});
newMobileMenuList += '                        </ul>';

content = content.substring(0, mobileMenuStart) + newMobileMenuList + content.substring(mobileMenuEnd);

fs.writeFileSync(navbarPath, content, 'utf-8');
console.log('Mobile menu updated in Navbar.tsx');
