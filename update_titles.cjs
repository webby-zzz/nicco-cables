const fs = require('fs');
const path = require('path');

const replacements = [
  {
    file: 'RenewableEnergyPage.tsx',
    target: '<SplitTitle title="Renewable Energy Cables — Solar & Wind" />',
    replacement: '<SplitTitle title="Renewable Energy" />'
  },
  {
    file: 'PowerGenerationPage.tsx',
    target: '<SplitTitle title="Power Generation - Nuclear, Hydro & Thermal Power" />',
    replacement: '<SplitTitle title="Power Generation" />'
  },
  {
    file: 'ExplorationPage.tsx',
    target: '<SplitTitle title="Exploration - Oil & Gas, Mining" />',
    replacement: '<SplitTitle title="Exploration" />'
  },
  {
    file: 'MobilityPage.tsx',
    target: '<SplitTitle title="Mobility (Rolling Stock, Marine, Automotive, Aerospace)" />',
    replacement: '<SplitTitle title="Mobility" />'
  },
  {
    file: 'DefencePage.tsx',
    target: '<SplitTitle title="Defence (Submarine, Warships & Tanks)" />',
    replacement: '<SplitTitle title="Defence" />'
  },
  {
    file: 'InfrastructurePage.tsx',
    target: '<SplitTitle title="Infrastructure — Building Management Systems, Data Centers, Tunnels, Metro & High Speed" />',
    replacement: '<SplitTitle title="Infrastructure" />'
  },
  {
    file: 'HarnessingPage.tsx',
    target: '<SplitTitle title="Cable Harnessing" />',
    replacement: '<SplitTitle title="Harnessing" />'
  },
  {
    file: 'Breadcrumbs.tsx',
    target: "'overhead-conductors': 'Overhead Conductors',",
    replacement: "'overhead-conductors': 'Overhead Transmission Conductors (Bare Conductors)',"
  }
];

replacements.forEach(({ file, target, replacement }) => {
  const filePath = path.join('components', file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    if (content.includes(target)) {
      content = content.replace(target, replacement);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated ${file}`);
    } else {
      console.log(`Target text not found in ${file}.`);
    }
  } else {
    console.log(`File ${file} not found.`);
  }
});
