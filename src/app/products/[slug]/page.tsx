import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, getProducts } from "@/lib/cms";
import { siteConfig } from "@/config/site";
import { ProductCard } from "@/components/ProductCard";
import { WhatsAppGroupBanner } from "@/components/WhatsAppGroupBanner";
import {
  Truck,
  WhatsappLogo,
  ArrowLeft,
  CheckCircle,
  Clock,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      url: `${siteConfig.url}/products/${product.slug}`,
      images: [{ url: product.image }],
    },
    alternates: {
      canonical: `/products/${product.slug}`,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const allProducts = await getProducts();
  const relatedProducts = allProducts
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .slice(0, 3);

  // Structured Data Schema for Product
  const productJsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: product.image.startsWith("http") ? product.image : `${siteConfig.url}${product.image}`,
    description: product.shortDescription,
    category: product.category,
    brand: {
      "@type": "Brand",
      name: siteConfig.brand,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "NGN",
      url: `${siteConfig.url}/products/${product.slug}`,
    },
  };

  return (
    <div className="w-full flex flex-col py-6 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6 sm:mb-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-bold text-muted hover:text-emerald-deep transition-colors min-h-[36px]"
          >
            <ArrowLeft size={16} weight="bold" className="rtl:rotate-180" />
            <span>Back to All Products</span>
          </Link>
        </div>

        {/* Main Product Showcase Card */}
        <div className="bg-white rounded-3xl border border-gold-hairline/80 shadow-soft-lg p-4 sm:p-10 lg:p-12 mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left Image View */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden bg-cream-light border border-gold-hairline/50 shadow-soft">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Product Information */}
            <div className="lg:col-span-6 flex flex-col space-y-5 sm:space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-light border border-emerald-deep/20 text-emerald-deep text-xs font-bold uppercase tracking-wider mb-3">
                  {product.category}
                </div>
                <h1 className="text-2xl sm:text-4xl font-bold font-serif text-charcoal tracking-tight">
                  {product.name}
                </h1>
                <p className="mt-2.5 sm:mt-3 text-sm sm:text-lg text-emerald-deep font-medium leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              {/* Delivery info chip */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-cream-light border border-gold-hairline/60 flex items-center gap-3">
                <Truck size={22} weight="fill" className="text-emerald-deep shrink-0" />
                <div className="text-xs sm:text-sm text-charcoal">
                  <strong>Nationwide Delivery: </strong>
                  Prompt and discreet Nationwide Delivery.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/2348035948898?text=${encodeURIComponent(product.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="product-detail-wa-btn"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 sm:py-4 px-6 rounded-2xl bg-emerald-deep hover:bg-emerald-forest text-white font-bold text-sm shadow-soft hover:shadow-soft-lg transition-all active:scale-95 min-h-[48px]"
                >
                  <WhatsappLogo size={20} weight="fill" className="text-gold-light" />
                  <span>Order Directly on WhatsApp</span>
                </a>
              </div>

              {/* Long Description & Guidance */}
              <div className="pt-6 border-t border-gold-hairline/60 space-y-4">
                <h2 className="text-lg font-bold font-serif text-charcoal">
                  About This Formulation
                </h2>
                {product.longDescription.map((paragraph, i) => (
                  <p key={i} className="text-sm text-charcoal/80 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Traditional Standard Points */}
              <div className="pt-4 space-y-2 text-xs text-muted">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} weight="fill" className="text-emerald-deep" />
                  <span>100% natural botanical ingredients rooted in African herbal heritage</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} weight="fill" className="text-emerald-deep" />
                  <span>Prepared with dedicated prayer and spiritual intentionality</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} weight="fill" className="text-emerald-deep" />
                  <span>Available for same-day dispatch or in-person pickup in Owode Egba</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-charcoal mb-8">
              Related Formulations in {product.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>

      <WhatsAppGroupBanner />
    </div>
  );
}
