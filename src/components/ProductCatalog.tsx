"use client";

import React, { useState } from "react";
import { Product } from "@/content/products";
import { ProductCard } from "@/components/ProductCard";
import { useI18n } from "@/i18n/context";
import { MagnifyingGlass, Funnel, Truck } from "@phosphor-icons/react";

export function ProductCatalog({ products }: { products: Product[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useI18n();

  const categories = [
    { label: t("productsSection", "filterAll"), value: "All" },
    { label: t("productsSection", "filterTonics"), value: "Herbal Tonics" },
    { label: t("productsSection", "filterCapsules"), value: "Capsules & Drops" },
    { label: t("productsSection", "filterSpiritual"), value: "Spiritual & Cleansing" },
  ];

  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full">
      {/* Search and Category Filter Bar */}
      <div className="bg-white rounded-3xl border border-gold-hairline/70 p-4 sm:p-6 shadow-soft mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  isSelected
                    ? "bg-emerald-deep text-white shadow-soft"
                    : "bg-cream-light text-charcoal hover:bg-cream border border-gold-hairline/40"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            id="product-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search herbal remedies..."
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-cream-light border border-gold-hairline text-xs font-medium text-charcoal placeholder-muted focus:outline-none focus:ring-2 focus:ring-emerald-deep/40 focus:bg-white"
          />
          <MagnifyingGlass size={16} weight="bold" className="text-muted absolute left-3 top-1/2 -translate-y-1/2 rtl:left-auto rtl:right-3" />
        </div>
      </div>

      {/* Delivery Banner */}
      <div className="mb-10 p-4 rounded-2xl bg-emerald-deep text-white flex flex-col sm:flex-row items-center justify-between gap-3 shadow-soft text-center sm:text-left rtl:sm:text-right">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-white/10 text-gold-light shrink-0">
            <Truck size={22} weight="fill" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold">
              Nationwide Delivery Across Nigeria
            </h4>
            <p className="text-[11px] text-emerald-100">
              {t("productsSection", "deliveryNotice")}
            </p>
          </div>
        </div>
        <div className="text-[11px] font-semibold text-gold-light shrink-0">
          No Pre-Payment Needed • Confirm on WhatsApp
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-gold-hairline p-8">
          <Funnel size={36} weight="light" className="text-muted mx-auto mb-3 opacity-50" />
          <h3 className="text-lg font-bold font-serif text-charcoal">
            No products found
          </h3>
          <p className="text-xs text-muted mt-1">
            Try adjusting your search query or selecting a different category filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-emerald-deep text-white text-xs font-bold shadow-soft"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
