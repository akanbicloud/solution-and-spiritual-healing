"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/content/products";
import {
  CaretDown,
  CaretUp,
  Sparkle,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
} from "@phosphor-icons/react";

interface LandingProductsProps {
  products: Product[];
}

export function LandingProducts({ products }: LandingProductsProps) {
  const [showAll, setShowAll] = useState(false);

  // If no products returned, show a graceful notice
  if (!products || products.length === 0) {
    return null;
  }

  // Show first 6 products initially (3x2 grid), with interactive expansion to all 12
  const displayedProducts = showAll ? products : products.slice(0, 6);

  return (
    <section className="py-14 sm:py-20 bg-ivory border-b border-gold-hairline/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-light border border-emerald-deep/20 text-emerald-deep text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkle size={14} weight="fill" />
            <span>Traditional Herbal &amp; Spiritual Remedies</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-charcoal tracking-tight">
            Our Spiritual Healing &amp; Botanical Preparations
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed">
            Every formulation at Alfa Cairo Sanctuary is prepared with genuine therapeutic African botanicals and
            sanctified with authentic Quranic prayers. Discover our remedies and inquire during your consultation.
          </p>
        </div>

        {/* Product Cards Grid: 3 columns desktop, 1 column mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedProducts.map((product) => (
            <div
              key={product.id || product.slug}
              className="group relative flex flex-col justify-between rounded-3xl bg-white border border-gold-hairline/80 p-5 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Real Product Image Container */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-cream-light mb-4 border border-gold-hairline/40">
                  <Image
                    src={product.image}
                    alt={`${product.name} - Traditional Spiritual & Wellness Remedy from Solution Healing`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-deep/90 text-white text-[11px] font-semibold tracking-wide backdrop-blur-sm shadow-sm">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Real Product Name */}
                <h3 className="text-base sm:text-lg font-serif font-bold text-charcoal group-hover:text-emerald-deep transition-colors line-clamp-1 mb-2">
                  {product.name}
                </h3>

                {/* Adapted Calm 2-3 Sentence Description */}
                <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-3 mb-4">
                  {product.shortDescription}
                </p>
              </div>

              {/* Inquire / Book Consultation Button (links to consultation form on this page) */}
              <div className="pt-4 border-t border-gold-hairline/50 mt-auto">
                <a
                  href="#book-consultation"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-emerald-deep/30 bg-emerald-light/60 hover:bg-emerald-deep hover:text-white text-emerald-deep text-xs font-bold transition-all active:scale-95 shadow-soft-sm"
                  title={`Inquire about ${product.name} during your consultation`}
                >
                  <span>Inquire in Consultation</span>
                  <ArrowRight size={14} weight="bold" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Toggle */}
        {products.length > 6 && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-emerald-deep/30 bg-white hover:bg-emerald-light text-emerald-deep text-xs sm:text-sm font-bold shadow-soft-sm transition-all"
            >
              <span>
                {showAll
                  ? "Show Featured (6 Remedies)"
                  : `View All ${products.length} Remedies & Preparations`}
              </span>
              {showAll ? <CaretUp size={16} weight="bold" /> : <CaretDown size={16} weight="bold" />}
            </button>
          </div>
        )}

        {/* Reassurance Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-light/50 via-cream-light/40 to-sand-50/50 border border-gold-hairline/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-emerald-deep text-white flex items-center justify-center shrink-0">
              <ShieldCheck size={20} weight="bold" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-charcoal">
                Prescribed Specifically to Your Needs
              </p>
              <p className="text-xs text-muted">
                Remedies are recommended and prepared individually based on what Sheikh Ismail Adewunmi assesses during your session.
              </p>
            </div>
          </div>
          <a
            href="#book-consultation"
            className="shrink-0 inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-emerald-deep text-white font-bold text-xs sm:text-sm shadow-gold hover:bg-emerald-forest transition-colors"
          >
            <span>Book Consultation First</span>
          </a>
        </div>
      </div>
    </section>
  );
}
