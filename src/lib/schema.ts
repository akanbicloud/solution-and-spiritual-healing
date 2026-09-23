import { siteConfig } from "@/config/site";
import { Product } from "@/content/products";
import { Post } from "@/content/posts";

/**
 * Reusable Schema.org JSON-LD Generators
 * Strictly uses authentic site information with no invented claims.
 */

export function generateLocalBusinessAndOrganizationSchema() {
  const siteUrl = siteConfig.url;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "Organization"],
        "@id": `${siteUrl}/#organization`,
        name: siteConfig.brand,
        alternateName: [
          "Alfacairo",
          "Alfa Cairo Sanctuary",
          "Solution Spiritual Healing",
          siteConfig.brandArabic,
        ],
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          "@id": `${siteUrl}/#logo`,
          url: `${siteUrl}/images/logo.svg`,
          caption: siteConfig.brand,
        },
        image: {
          "@type": "ImageObject",
          "@id": `${siteUrl}/#image`,
          url: `${siteUrl}/images/house.jpg`,
          caption: "Alfa Cairo House in Owode Egba, Ogun State",
        },
        description: `${siteConfig.subline}. Spiritual guidance, prophetic prayers (Ruqyah), and traditional botanical preparations provided by Sheikh Ismail Adewunmi (Alfacairo) in Owode Egba, Ogun State, Nigeria.`,
        telephone: siteConfig.phoneIntl,
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Alfa Cairo House",
          addressLocality: siteConfig.city,
          addressRegion: siteConfig.region,
          addressCountry: siteConfig.countryCode,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.geo.latitude,
          longitude: siteConfig.geo.longitude,
        },
        hasMap: siteConfig.googleMapsUrl,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "08:00",
            closes: "20:00",
          },
        ],
        priceRange: "₦",
        currenciesAccepted: "NGN",
        paymentAccepted: "Cash, Bank Transfer",
        areaServed: siteConfig.areaServed.map((area) => ({
          "@type": "AdministrativeArea",
          name: area,
        })),
        sameAs: [
          siteConfig.socials.facebook,
          siteConfig.socials.tiktok,
          siteConfig.socials.youtube,
          siteConfig.whatsappGroup,
        ].filter(Boolean),
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteConfig.brand,
        description: siteConfig.subline,
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: ["en-NG", "ar", "yo", "ha"],
      },
    ],
  };
}

export function generateBreadcrumbSchema(items: { name: string; path: string }[]) {
  const siteUrl = siteConfig.url;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path.startsWith("http") ? item.path : `${siteUrl}${item.path}`,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateServiceSchema(service: {
  id: string;
  name: string;
  description: string;
  path: string;
}) {
  const siteUrl = siteConfig.url;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}${service.path}#${service.id}`,
    name: service.name,
    description: service.description,
    provider: {
      "@id": `${siteUrl}/#organization`,
    },
    areaServed: siteConfig.areaServed.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    url: `${siteUrl}${service.path}`,
  };
}

export function generateProductSchema(product: Product) {
  const siteUrl = siteConfig.url;
  const productUrl = `${siteUrl}/products/${product.slug}`;
  const imageUrl = product.image.startsWith("http")
    ? product.image
    : `${siteUrl}${product.image}`;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": productUrl,
    name: product.name,
    description: product.shortDescription,
    image: [imageUrl],
    category: product.category,
    brand: {
      "@type": "Brand",
      name: siteConfig.brand,
    },
    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: "NGN",
      price: "0.00",
      priceValidUntil: "2027-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  };
}

export function generateArticleSchema(post: Post) {
  const siteUrl = siteConfig.url;
  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const imageUrl = post.coverImage.startsWith("http")
    ? post.coverImage
    : `${siteUrl}${post.coverImage}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": postUrl,
    headline: post.title,
    description: post.excerpt,
    image: [imageUrl],
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: "en-NG",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: `${siteUrl}/about`,
    },
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
  };
}
