import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULT_TITLE = 'Aquasol Energy | Solar Rooftop PV, PM Surya Ghar Subsidy & Solar Water Heaters Pune';
const DEFAULT_DESC = "Aquasol Energy is Pune's leading solar provider for PM Surya Ghar Rooftop Solar (up to ₹78,000 subsidy), Solar Panels, Stainless Steel Water Heaters, Heat Pumps & AMC repair services in Pune & PCMC, Maharashtra.";
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

  useEffect(() => {
    // 1. Set Document Title
    const finalTitle = title
      ? `${title} | Aquasol Energy Pune`
      : DEFAULT_TITLE;
    document.title = finalTitle;

    // 2. Set Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description || DEFAULT_DESC);
    }

    // 3. Set Meta Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords || DEFAULT_KEYWORDS);
    }

    // 4. Set Canonical Link
    const currentUrl = canonical || `${SITE_URL}${location.pathname === '/' ? '' : location.pathname}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute('href', currentUrl);
    }

    // 5. Open Graph Meta
    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) ogTitleTag.setAttribute('content', finalTitle);

    const ogDescTag = document.querySelector('meta[property="og:description"]');
    if (ogDescTag) ogDescTag.setAttribute('content', description || DEFAULT_DESC);

    const ogUrlTag = document.querySelector('meta[property="og:url"]');
    if (ogUrlTag) ogUrlTag.setAttribute('content', currentUrl);

    const ogTypeTag = document.querySelector('meta[property="og:type"]');
    if (ogTypeTag) ogTypeTag.setAttribute('content', ogType);

    const ogImgTag = document.querySelector('meta[property="og:image"]');
    if (ogImgTag && ogImage) ogImgTag.setAttribute('content', ogImage);

    // 6. Dynamic JSON-LD schema (if passed)
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
  }, [title, description, keywords, canonical, schema, ogType, ogImage, location.pathname]);

  return null;
}
