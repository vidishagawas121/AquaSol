import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const DEFAULT_TITLE = 'Solar Rooftop & Water Heaters in Pune | Aquasol Energy';
const DEFAULT_DESC = 'Rooftop solar, PM Surya Ghar subsidy help, solar water heaters, repair and AMC in Pune. Book a free site survey with Aquasol Energy.';
const DEFAULT_KEYWORDS = 'Solar Rooftop Pune, PM Surya Ghar Pune, PM Surya Ghar Muft Bijli Yojana Pune, Solar Panel Installation Pune, Solar Water Heater Pune, Solar Water Heater Repair Pune, Solar AMC Pune, Commercial Solar Rooftop Pune, Heat Pump Water Heater Pune, MSEDCL Solar Net Metering, Aquasol Energy Chandan Nagar';
const SITE_URL = 'https://aquasolenergy.in';

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  schema,
  ogType = 'website',
  ogImage = 'https://aquasolenergy.in/aqua_sol_logo.png',
}) {
  const location = useLocation();

  // 1. Determine final title
  let finalTitle = DEFAULT_TITLE;
  if (title) {
    if (title.includes('Aquasol Energy')) {
      finalTitle = title;
    } else {
      finalTitle = `${title} | Aquasol Energy`;
    }
  }

  // 2. Determine final description
  const finalDesc = description || DEFAULT_DESC;

  // 3. Determine final canonical & OG URL
  let finalCanonical = canonical;
  if (!finalCanonical) {
    const cleanPath = location.pathname === '/' ? '/' : location.pathname.replace(/\/+$/, '');
    finalCanonical = `${SITE_URL}${cleanPath}`;
  }

  // 4. Determine keywords
  const finalKeywords = keywords || DEFAULT_KEYWORDS;

  // 5. DOM Sync Fallback for complete resilience across all crawlers & browsers
  useEffect(() => {
    // Title
    document.title = finalTitle;

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', finalDesc);

    // Meta Keywords
    let metaKw = document.querySelector('meta[name="keywords"]');
    if (!metaKw) {
      metaKw = document.createElement('meta');
      metaKw.name = 'keywords';
      document.head.appendChild(metaKw);
    }
    metaKw.setAttribute('content', finalKeywords);

    // Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', finalCanonical);

    // Open Graph Title
    let ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (!ogTitleTag) {
      ogTitleTag = document.createElement('meta');
      ogTitleTag.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleTag);
    }
    ogTitleTag.setAttribute('content', finalTitle);

    // Open Graph Description
    let ogDescTag = document.querySelector('meta[property="og:description"]');
    if (!ogDescTag) {
      ogDescTag = document.createElement('meta');
      ogDescTag.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescTag);
    }
    ogDescTag.setAttribute('content', finalDesc);

    // Open Graph URL
    let ogUrlTag = document.querySelector('meta[property="og:url"]');
    if (!ogUrlTag) {
      ogUrlTag = document.createElement('meta');
      ogUrlTag.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrlTag);
    }
    ogUrlTag.setAttribute('content', finalCanonical);

    // Open Graph Type
    let ogTypeTag = document.querySelector('meta[property="og:type"]');
    if (!ogTypeTag) {
      ogTypeTag = document.createElement('meta');
      ogTypeTag.setAttribute('property', 'og:type');
      document.head.appendChild(ogTypeTag);
    }
    ogTypeTag.setAttribute('content', ogType);

    // Open Graph Image
    let ogImgTag = document.querySelector('meta[property="og:image"]');
    if (!ogImgTag && ogImage) {
      ogImgTag = document.createElement('meta');
      ogImgTag.setAttribute('property', 'og:image');
      document.head.appendChild(ogImgTag);
    }
    if (ogImgTag && ogImage) ogImgTag.setAttribute('content', ogImage);

    // Twitter Card Title
    let twTitleTag = document.querySelector('meta[name="twitter:title"]');
    if (twTitleTag) twTitleTag.setAttribute('content', finalTitle);

    // Twitter Card Description
    let twDescTag = document.querySelector('meta[name="twitter:description"]');
    if (twDescTag) twDescTag.setAttribute('content', finalDesc);

    // Twitter Card URL
    let twUrlTag = document.querySelector('meta[name="twitter:url"]');
    if (twUrlTag) twUrlTag.setAttribute('content', finalCanonical);

    // Dynamic JSON-LD Schema
    let schemaScript = document.getElementById('dynamic-page-schema');
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'dynamic-page-schema';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.text = JSON.stringify(schema);
    } else if (schemaScript) {
      schemaScript.remove();
    }
  }, [finalTitle, finalDesc, finalKeywords, finalCanonical, ogType, ogImage, schema]);

  return (
    <Helmet>
      {/* Title */}
      <title>{finalTitle}</title>

      {/* Meta Tags */}
      <meta name="description" content={finalDesc} />
      <meta name="keywords" content={finalKeywords} />
      <link rel="canonical" href={finalCanonical} />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:type" content={ogType} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter Card */}
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
      <meta name="twitter:url" content={finalCanonical} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Structured Data (Schema.org JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
