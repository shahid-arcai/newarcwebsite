// Schema.org Structured Data for SEO
// This component provides JSON-LD structured data for search engines

import React from 'react';

interface SchemaOrgProps {
  type?: 'home' | 'about' | 'services' | 'portfolio' | 'blog' | 'contact' | 'service-page';
  pageTitle?: string;
  pageDescription?: string;
  pageUrl?: string;
  serviceName?: string;
  serviceDescription?: string;
  blogTitle?: string;
  blogDescription?: string;
  blogImage?: string;
  blogDatePublished?: string;
  blogDateModified?: string;
  blogAuthor?: string;
}

export default function SchemaOrg({
  type = 'home',
  pageTitle,
  pageDescription,
  pageUrl,
  serviceName,
  serviceDescription,
  blogTitle,
  blogDescription,
  blogImage,
  blogDatePublished,
  blogDateModified,
  blogAuthor = 'ARC Digital Canvas',
}: SchemaOrgProps) {
  
  // Organization Schema (appears on all pages)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://arcai.agency/#organization",
    "name": "ARC Digital Canvas",
    "alternateName": "ARC AI Agency",
    "url": "https://arcai.agency",
    "logo": {
      "@type": "ImageObject",
      "url": "https://arcai.agency/logo.png",
      "width": 512,
      "height": 512
    },
    "description": "Leading AI-powered digital agency specializing in web design, branding, AI automation, chatbots, and digital marketing services in UK and Sri Lanka.",
    "email": "hello@arcai.agency",
    "address": [
      {
        "@type": "PostalAddress",
        "addressCountry": "GB",
        "addressRegion": "England",
        "addressLocality": "United Kingdom"
      },
      {
        "@type": "PostalAddress",
        "addressCountry": "LK",
        "addressRegion": "Western Province",
        "addressLocality": "Sri Lanka"
      }
    ],
    "geo": [
      {
        "@type": "GeoCoordinates",
        "addressCountry": "GB"
      },
      {
        "@type": "GeoCoordinates",
        "addressCountry": "LK"
      }
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "United Kingdom"
      },
      {
        "@type": "Country",
        "name": "Sri Lanka"
      },
      {
        "@type": "Place",
        "name": "Global"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/arcdigitalcanvas",
      "https://twitter.com/arcdigitalcanvas",
      "https://www.facebook.com/arcdigitalcanvas",
      "https://www.instagram.com/arcdigitalcanvas"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+44-xxx-xxx-xxxx",
        "contactType": "customer service",
        "areaServed": "GB",
        "availableLanguage": ["en"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+94-xxx-xxx-xxxx",
        "contactType": "customer service",
        "areaServed": "LK",
        "availableLanguage": ["en"]
      }
    ]
  };

  // Local Business Schema for UK
  const localBusinessSchemaUK = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://arcai.agency/#localbusiness-uk",
    "name": "ARC Digital Canvas - UK",
    "image": "https://arcai.agency/logo.png",
    "url": "https://arcai.agency",
    "telephone": "+44-xxx-xxx-xxxx",
    "priceRange": "£££",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB",
      "addressRegion": "England",
      "addressLocality": "United Kingdom"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "GB"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/company/arcdigitalcanvas",
      "https://twitter.com/arcdigitalcanvas"
    ]
  };

  // Local Business Schema for Sri Lanka
  const localBusinessSchemaSL = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://arcai.agency/#localbusiness-sl",
    "name": "ARC Digital Canvas - Sri Lanka",
    "image": "https://arcai.agency/logo.png",
    "url": "https://arcai.agency",
    "telephone": "+94-xxx-xxx-xxxx",
    "priceRange": "LKR",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "LK",
      "addressRegion": "Western Province",
      "addressLocality": "Sri Lanka"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "LK"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/company/arcdigitalcanvas",
      "https://www.facebook.com/arcdigitalcanvas"
    ]
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://arcai.agency/#website",
    "url": "https://arcai.agency",
    "name": "ARC Digital Canvas",
    "description": "Leading AI-powered digital agency in UK & Sri Lanka",
    "publisher": {
      "@id": "https://arcai.agency/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://arcai.agency/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Service Schema
  const serviceSchema = serviceName ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "provider": {
      "@id": "https://arcai.agency/#organization"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "United Kingdom"
      },
      {
        "@type": "Country",
        "name": "Sri Lanka"
      },
      {
        "@type": "Place",
        "name": "Global"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": serviceName,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": serviceName,
            "description": serviceDescription || ""
          }
        }
      ]
    }
  } : null;

  // Blog Article Schema
  const blogArticleSchema = blogTitle ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blogTitle,
    "description": blogDescription,
    "image": blogImage || "https://arcai.agency/logo.png",
    "datePublished": blogDatePublished,
    "dateModified": blogDateModified || blogDatePublished,
    "author": {
      "@type": "Person",
      "name": blogAuthor,
      "url": "https://arcai.agency"
    },
    "publisher": {
      "@id": "https://arcai.agency/#organization"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl || "https://arcai.agency"
    }
  } : null;

  // Breadcrumb Schema
  const breadcrumbSchema = pageUrl && pageTitle ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://arcai.agency"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": pageTitle,
        "item": pageUrl
      }
    ]
  } : null;

  // Combine schemas based on page type
  const schemas = [organizationSchema, websiteSchema];
  
  if (type === 'home' || type === 'about' || type === 'contact') {
    schemas.push(localBusinessSchemaUK, localBusinessSchemaSL);
  }
  
  if (serviceSchema) {
    schemas.push(serviceSchema);
  }
  
  if (blogArticleSchema) {
    schemas.push(blogArticleSchema);
  }
  
  if (breadcrumbSchema) {
    schemas.push(breadcrumbSchema);
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
