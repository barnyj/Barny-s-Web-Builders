// File: app/components/JsonLdSchemas.tsx

import Script from "next/script";
import React from "react";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Barny’s Web Builders",
  "image": ["https://barnyswebbuilders.site/BWB-logo.png"],
  "@id": "https://barnyswebbuilders.site/",
  "url": "https://barnyswebbuilders.site/",
  "telephone": "+1-240-818-5809",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "43 hammock dr",
    "addressLocality": "Inwood",
    "addressRegion": "WV",
    "postalCode": "25428",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 39.3042,
    "longitude": -78.0399
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61573036815002",
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://barnyswebbuilders.site/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://barnyswebbuilders.site/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Case Study: Minimalist Brand Identity",
      "item": "https://barnyswebbuilders.site/case-studies/eclipse-coffee"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Case Study: Sleek Web Experience",
      "item": "https://barnyswebbuilders.site/case-studies/arcframe"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Case Study: Intuitive Mobile App",
      "item": "https://barnyswebbuilders.site/case-studies/pulsefit"
    },
  ]
};

export function JsonLdSchemas() {
  return (
    <>
      <Script
        id="schema-local-business"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
