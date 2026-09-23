"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/content/products";
import { useCart } from "@/context/CartContext";
import { useI18n } from "@/i18n/context";
import { WhatsappLogo, Plus, ArrowRight } from "@phosphor-icons/react";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { t } = useI18n();

  return (
    <div className="group relative flex flex-col rounded-3xl bg-white border border-gold-hairline/70 p-4 sm:p-5 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover-lift">
      {/* Product Image Container */}
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-cream-light mb-4 border border-gold-hairline/30">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category Pill */}
        <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3">
          <span className="px-2.5 py-1 rounded-full bg-emerald-deep/90 text-white text-[10px] font-semibold backdrop-blur-sm">
            {product.category}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-base sm:text-lg font-bold font-serif text-charcoal group-hover:text-emerald-deep transition-colors line-clamp-1">
          <Link href={`/products/${product.slug}`} className="focus:outline-none">
            {product.name}
          </Link>
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-muted line-clamp-2 leading-relaxed flex-1">
          {product.shortDescription}
        </p>

        {/* Action Buttons */}
        <div className="mt-5 pt-4 border-t border-gold-hairline/50 flex flex-col sm:flex-row items-center gap-2">
          {/* Add to list */}
          <button
            type="button"
            id={`add-to-cart-${product.slug}`}
            onClick={() => addItem(product)}
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-emerald-deep/30 bg-emerald-light/50 hover:bg-emerald-light text-emerald-deep text-xs font-bold transition-colors active:scale-95 min-h-[40px]"
            title="Add to WhatsApp multi-product order list"
          >
            <Plus size={14} weight="bold" />
            <span>{t("productsSection", "addToOrder")}</span>
          </button>

          {/* Direct WhatsApp Order */}
          <a
            href={`https://wa.me/2348035948898?text=${encodeURIComponent(product.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            id={`order-wa-${product.slug}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-xl bg-emerald-deep hover:bg-emerald-forest text-white text-xs font-bold shadow-soft-sm transition-all active:scale-95 shrink-0 min-h-[40px]"
            title="Order directly on WhatsApp"
          >
            <WhatsappLogo size={16} weight="fill" className="text-gold-light" />
            <span>Order</span>
          </a>
        </div>

        {/* View Details Link */}
        <div className="mt-2 text-center">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-gold-primary hover:text-emerald-deep transition-colors"
          >
            <span>{t("productsSection", "viewDetails")}</span>
            <ArrowRight size={12} weight="bold" className="rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
}
