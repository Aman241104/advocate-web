import { siteConfig } from "@/config/site";

export default function JsonLd() {
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "telephone": siteConfig.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.0225, // Placeholder for Ahmedabad center
      "longitude": 72.5714
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "19:00"
      }
    ],
    "sameAs": [
      siteConfig.links.linkedin,
      siteConfig.links.twitter
    ]
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": siteConfig.shortName,
    "url": siteConfig.url,
    "jobTitle": "Advocate & Notary",
    "description": "Advocate with 29+ years of experience and author of 200+ legal articles in Divya Bhaskar.",
    "worksFor": {
      "@type": "Organization",
      "name": siteConfig.name
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Gujarat University" // Logical assumption for the region
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
