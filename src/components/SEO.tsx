import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  image?: string;
  schemaData?: Record<string, any>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  keywords,
  image = 'https://kravinoffs.agency/logo.svg',
  schemaData
}) => {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Update meta title
    let metaTitle = document.querySelector('meta[name="title"]');
    if (metaTitle) {
      metaTitle.setAttribute('content', title);
    }

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Update keywords if provided
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }

    // Update OpenGraph title, description, and image
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage && image) {
      ogImage.setAttribute('content', image);
    }

    // Update Twitter title, description, and image
    let twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) {
      twTitle.setAttribute('content', title);
    }
    let twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) {
      twDesc.setAttribute('content', description);
    }
    let twImage = document.querySelector('meta[name="twitter:image"]');
    if (twImage && image) {
      twImage.setAttribute('content', image);
    }

    // Update Canonical URL
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (linkCanonical) {
        linkCanonical.setAttribute('href', canonical);
      }
    }

    // Dynamic JSON-LD structured data injection for page-level schema
    const existingScript = document.getElementById('dynamic-page-schema');
    if (existingScript) {
      existingScript.remove();
    }

    if (schemaData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'dynamic-page-schema';
      script.text = JSON.stringify(schemaData);
      document.head.appendChild(script);
    }

    return () => {
      const scriptToRemove = document.getElementById('dynamic-page-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, canonical, keywords, image, schemaData]);

  return null;
};
