import React, { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  schema?: Record<string, any> | Record<string, any>[];
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
}

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  keywords,
  canonical,
  schema,
  ogImage = '/brand identity/Logo.png',
  ogType = 'website'
}) => {
  useEffect(() => {
    // 1. Update document title
    const fullTitle = title.includes('Nicco Cables') ? title : `${title} | Nicco Cables`;
    document.title = fullTitle;

    // 2. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // 3. Update Meta Keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // 4. Update Canonical Link
    const currentUrl = canonical || window.location.href;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', currentUrl);

    // 5. Update OpenGraph Tags
    const ogTags = [
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:type', content: ogType },
      { property: 'og:url', content: currentUrl },
      { property: 'og:image', content: window.location.origin + ogImage },
      { property: 'og:site_name', content: 'Nicco Cables' }
    ];
    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // 6. Update Twitter Card Tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: window.location.origin + ogImage }
    ];
    twitterTags.forEach(({ name, content }) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // 7. Inject JSON-LD Schema
    const existingSchemaScripts = document.querySelectorAll('script[type="application/ld+json"].dynamic-schema');
    existingSchemaScripts.forEach(script => script.remove());

    if (schema) {
      const schemasArray = Array.isArray(schema) ? schema : [schema];
      schemasArray.forEach(schemaObj => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.className = 'dynamic-schema';
        script.text = JSON.stringify(schemaObj);
        document.head.appendChild(script);
      });
    }
  }, [title, description, keywords, canonical, schema, ogImage, ogType]);

  return null;
};

export default Seo;
