import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

export default function SEOHead({
  title = "Red Shield Engineering - Fire Protection Engineering Solutions",
  description = "Leading fire protection system engineering, estimation, design, and drafting solutions for System Integrators, MEP Contractors, and Consultants across GCC and international markets.",
  keywords = "fire protection engineering, fire protection system design, estimation, technical drafting, NFPA certified, System Integrators, MEP Contractors, Red Shield Engineering",
  ogImage = "/fire-shield.svg",
  ogType = "website",
  canonicalUrl,
  structuredData
}: SEOHeadProps) {
  const fullTitle = title.includes("Red Shield Engineering") ? title : `${title} | Red Shield Engineering`;
  const fullDescription = description.length > 160 ? description.substring(0, 157) + "..." : description;
  const fullCanonicalUrl = canonicalUrl || "https://redshieldengineering.com";

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Red Shield Engineering",
    "url": "https://redshieldengineering.com",
    "logo": "https://redshieldengineering.com/fire-shield.svg",
    "description": "Leading fire protection system engineering, estimation, design, and drafting solutions",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12-1-17, Vinayagar Street, Surandai",
      "addressLocality": "Tenkasi District",
      "addressRegion": "Tamil Nadu",
      "postalCode": "627859",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8015019219",
      "contactType": "customer service",
      "email": "sales@redshieldengineering.com"
    },
    "sameAs": [
      "https://www.redshieldengineering.com"
    ]
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Red Shield Engineering" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={`https://redshieldengineering.com${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Red Shield Engineering" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={`https://redshieldengineering.com${ogImage}`} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#CE2029" />
      <meta name="msapplication-TileColor" content="#CE2029" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData || defaultStructuredData)
        }}
      />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
    </Head>
  );
} 