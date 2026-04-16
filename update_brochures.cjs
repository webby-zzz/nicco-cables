const fs = require('fs');

let content = fs.readFileSync('components/BrochuresPage.tsx', 'utf-8');

const imagesMap = {
    'Nicco Cables Corporate Catalogue': '/brochures/Thumbnails/Nicco Cables Corporate Catalogue.webp',
    'LT Cables Brochure': '/brochures/Thumbnails/LT Cables Brochure.webp',
    'Medium Voltage Covered Conductor (MVCC)': '/brochures/Thumbnails/Medium Voltage Covered Conductor (MVCC).webp',
    'Railway Cables': '/brochures/Thumbnails/Railway Cables.webp',
    'Wind Energy and Solar Cables': '/brochures/Thumbnails/Wind Energy and Solar Cables.webp',
    'Shipbuilding Cables': '/brochures/Thumbnails/Shipbuilding Cables.webp',
    'Automotive Cables': '/brochures/Thumbnails/Automotive Cables.webp',
    'Defense and Aerospace Cables': '/brochures/Thumbnails/Defense and Aerospace Cables.webp',
    'Elastomeric Insulated Cables': '/brochures/Thumbnails/Elastomeric Insulated Cables.webp',
    'Elastomeric Insulated Cables (Nicco X Cvl)': '/brochures/Thumbnails/Elastomeric Insulated Cables (Nicco X Cvl).webp',
    'LT Power & Control Cable Catalog': '/brochures/Thumbnails/LT Power & Control Cable Catalog.webp',
    'HT Cables upto 11KV': '/brochures/Thumbnails/HT Cables upto 11KV.webp',
    'Fire Survival Cables': '/brochures/Thumbnails/Fire Survival Cables.webp',
    'Instrumentation Cables': '/brochures/Thumbnails/Instrumentation Cables.webp'
};

for (const [title, imgPath] of Object.entries(imagesMap)) {
    // Escape string for regex if necessary (not really needed here as titles are plain english, but good practice if brackets used)
    const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    // Replace thumbnail
    const regexThumb = new RegExp(`(title:\\s*'${escapedTitle}'[\\s\\S]*?thumbnail:\\s*').*?(')`, 'g');
    content = content.replace(regexThumb, `$1${imgPath}$2`);
    
    // Replace previewImage
    const regexPrev = new RegExp(`(title:\\s*'${escapedTitle}'[\\s\\S]*?previewImage:\\s*').*?(')`, 'g');
    content = content.replace(regexPrev, `$1${imgPath}$2`);
}

if (!content.includes('import BrochureDownloadModal')) {
    content = content.replace(
        "import { useLocation } from 'react-router-dom';", 
        "import { useLocation } from 'react-router-dom';\nimport BrochureDownloadModal from './BrochureDownloadModal';"
    );
}

// Remove state definitions that we moved
content = content.replace(/const \[isSubmitted, setIsSubmitted\] = useState\(false\);\s*/, '');
content = content.replace(/const \[loading, setLoading\] = useState\(false\);\s*/, '');

// Empty handleFormSubmit (we'll replace its contents or the whole function)
content = content.replace(/const handleFormSubmit = async [\s\S]*?};\n/, '');

// Fix handleDownloadClick since we only need selectedBrochure and isModalOpen flags now
content = content.replace(/const handleDownloadClick = \(brochure: Brochure\) => {[\s\S]*?};\n/, 
`const handleDownloadClick = (brochure: Brochure) => {
    setSelectedBrochure(brochure);
    setIsModalOpen(true);
  };\n`);

// Replace AnimatePresence block with our reusable component
content = content.replace(/<AnimatePresence>[\s\S]*?<\/AnimatePresence>/, `<BrochureDownloadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        brochureTitle={selectedBrochure?.title || ''}
        pdfUrl={selectedBrochure?.pdfUrl || ''}
      />`);

fs.writeFileSync('components/BrochuresPage.tsx', content, 'utf-8');
console.log('Updated components/BrochuresPage.tsx');
