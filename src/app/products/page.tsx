import React from "react";
import { getProducts } from "@/lib/cms";
import { ProductCatalog } from "@/components/ProductCatalog";
import { WhatsAppGroupBanner } from "@/components/WhatsAppGroupBanner";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Traditional Herbal Products & Spiritual Preparations",
  description:
    "Explore our complete range of 12 traditional herbal formulations and spiritual preparations, prepared under traditional wellness wisdom, with Nationwide Delivery.",
  alternates: {
    canonical: "/products",
  },
};

export default async function ProductsPage() {
  const products = await getProducts();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
  ]);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((prod, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `${siteConfig.url}/products/${prod.slug}`,
      name: prod.name,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <div className="w-full flex flex-col py-8 sm:py-16">
        {/* Header Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-emerald-light border border-emerald-deep/20 text-emerald-deep text-xs font-bold uppercase tracking-wider mb-4">
            Traditional Herbal Dispensary
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-charcoal tracking-tight">
            Traditional Products &amp; Spiritual Remedies
          </h1>
          <div className="mt-2 font-arabic text-lg sm:text-xl text-emerald-deep font-bold" dir="rtl">
            المستحضرات العشبية والأدوية التقليدية
          </div>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Crafted with pure botanical roots, therapeutic herbs, and prayer infusions. Delivered reliably with Nationwide Delivery. Add items to your WhatsApp list to order seamlessly.
          </p>
        </section>

        {/* Main Catalog Container */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <ProductCatalog products={products} />
        </section>

        <WhatsAppGroupBanner />
      </div>
    </>
  );
}

