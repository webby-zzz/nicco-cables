const fs = require('fs');
const path = require('path');

const filePath = path.join('components', 'ContactPage.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

const originalBlock = `<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {regionalOffices.map((office, idx) => (
                    <div key={idx} className="bg-brand-ash/30 p-6 rounded-[1.5rem] border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 mt-1 shadow-sm overflow-hidden p-1.5">
                        <img src={office.icon} alt={office.city} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <div className="flex flex-col mb-2">
                          <h4 className="text-lg font-black text-brand-dark tracking-tighter uppercase">{office.city}</h4>
                        </div>
                        <a 
                          href={\`https://www.google.com/maps/search/?api=1&query=\${encodeURIComponent(\`\${office.city} \${office.address.join(' ')}\`)}\`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-black leading-relaxed font-medium hover:text-brand-secondary transition-colors block"
                        >
                          {office.address.map((line, i) => (
                            <React.Fragment key={i}>
                              {line}<br />
                            </React.Fragment>
                          ))}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>`;

const newBlock = `<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {regionalOffices.map((office, idx) => (
                    <div key={idx} className="bg-brand-ash/30 p-6 rounded-[1.5rem] border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col gap-6">
                      <div className="flex gap-4 items-start">
                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden p-2 mt-1">
                          <img src={office.icon} alt={office.city} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                        </div>
                        <div>
                          <div className="flex flex-col mb-1">
                            <h4 className="text-lg font-black text-brand-dark tracking-tighter uppercase">{office.city}</h4>
                          </div>
                          <a 
                            href={\`https://www.google.com/maps/search/?api=1&query=\${encodeURIComponent(\`\${office.city} \${office.address.join(' ')}\`)}\`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-black leading-relaxed font-medium hover:text-brand-secondary transition-colors block"
                          >
                            {office.address.map((line, i) => (
                              <React.Fragment key={i}>
                                {line}<br />
                              </React.Fragment>
                            ))}
                          </a>
                        </div>
                      </div>
                      <div className="w-full h-48 rounded-xl overflow-hidden shadow-inner border border-gray-200">
                        <iframe 
                          src={\`https://maps.google.com/maps?q=\${encodeURIComponent(\`\${office.address.join(', ')}, \${office.city}\`)}&t=&z=15&ie=UTF8&iwloc=&output=embed\`}
                          width="100%" 
                          height="100%" 
                          style={{ border: 0 }} 
                          allowFullScreen 
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade"
                          title={\`\${office.city} Office Map\`}
                        ></iframe>
                      </div>
                    </div>
                  ))}
                </div>`;

if (content.includes(originalBlock)) {
    content = content.replace(originalBlock, newBlock);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log("Successfully updated ContactPage.tsx layout and iframes.");
} else {
    console.log("Error: Could not find the exact target block in ContactPage.tsx. Regex update required.");
    // try a more manual target
    let fallback = content.replace(/<div className="grid grid-cols-1 md:grid-cols-2 gap-6">[\s\S]*?<\/div>\n\s*<\/div>\n\s*<\/div>\n\s*<\/div>\n\s*<\/motion\.section>/, newBlock + `\n              </div>\n\n            </motion.div>\n          </div>\n        </div>\n      </motion.section>`);
    
    // Check if it's there
    if(fallback !== content) {
      fs.writeFileSync(filePath, fallback, 'utf-8');
      console.log("Successfully updated using regex fallback.");
    }
}
