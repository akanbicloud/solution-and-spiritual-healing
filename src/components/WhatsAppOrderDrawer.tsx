"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useI18n } from "@/i18n/context";
import {
  X,
  Trash,
  Plus,
  Minus,
  WhatsappLogo,
  Truck,
  ShieldCheck,
  ArrowRight,
} from "@phosphor-icons/react";

export function WhatsAppOrderDrawer() {
  const {
    items,
    isDrawerOpen,
    closeDrawer,
    removeItem,
    updateQuantity,
    getWhatsAppOrderUrl,
    totalCount,
  } = useCart();
  const { t } = useI18n();

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={closeDrawer}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 rtl:right-auto rtl:left-0 max-w-full flex pl-0 sm:pl-10 rtl:pl-0 rtl:pr-0 rtl:sm:pr-10">
        <div className="w-full sm:w-screen max-w-md bg-ivory shadow-soft-lg flex flex-col border-l rtl:border-l-0 rtl:border-r border-gold-hairline animate-in slide-in-from-right rtl:slide-in-from-left duration-300">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-gold-hairline/60 bg-white/70 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-emerald-light text-emerald-deep font-bold">
                <WhatsappLogo size={22} weight="fill" />
              </span>
              <div>
                <h2 className="text-base sm:text-lg font-bold font-serif text-charcoal">
                  {t("drawer", "title")}
                </h2>
                <p className="text-xs text-muted">
                  {totalCount} item{totalCount === 1 ? "" : "s"} selected
                </p>
              </div>
            </div>
            <button
              type="button"
              id="close-order-drawer-btn"
              onClick={closeDrawer}
              className="p-2 rounded-xl text-muted hover:text-charcoal hover:bg-cream transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
              aria-label="Close drawer"
            >
              <X size={20} weight="bold" />
            </button>
          </div>

          {/* Delivery banner */}
          <div className="px-4 sm:px-5 py-2.5 bg-emerald-deep text-white text-xs font-medium flex items-center gap-2">
            <Truck size={18} weight="fill" className="text-gold-light shrink-0" />
            <span>{t("drawer", "deliveryBanner")}</span>
          </div>

          {/* Body items list */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center text-emerald-deep mb-3">
                  <WhatsappLogo size={32} weight="duotone" className="opacity-60" />
                </div>
                <p className="text-sm text-muted mb-4 max-w-xs leading-relaxed">
                  {t("drawer", "empty")}
                </p>
                <Link
                  href="/products"
                  onClick={closeDrawer}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-deep text-white text-xs font-semibold shadow-soft"
                >
                  <span>{t("drawer", "continueShopping")}</span>
                  <ArrowRight size={14} weight="bold" className="rtl:rotate-180" />
                </Link>
              </div>
            ) : (
              items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="p-3.5 rounded-2xl bg-white border border-gold-hairline/50 shadow-soft-sm flex gap-3.5 items-center"
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-cream shrink-0 border border-gold-hairline/40">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-charcoal truncate">
                      {product.name}
                    </h4>
                    <p className="text-[11px] text-muted font-medium mt-0.5">
                      {product.category}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="inline-flex items-center border border-gray-200 rounded-lg bg-gray-50/50">
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="p-1.5 sm:p-1 text-gray-500 hover:text-charcoal hover:bg-gray-100 rounded-l-lg min-w-[28px] min-h-[28px] flex items-center justify-center"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} weight="bold" />
                        </button>
                        <span className="px-2 text-xs font-bold text-charcoal">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="p-1.5 sm:p-1 text-gray-500 hover:text-charcoal hover:bg-gray-100 rounded-r-lg min-w-[28px] min-h-[28px] flex items-center justify-center"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} weight="bold" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(product.id)}
                        className="p-1.5 sm:p-1 text-gray-400 hover:text-crimson transition-colors min-w-[28px] min-h-[28px] flex items-center justify-center"
                        title={t("drawer", "remove")}
                        aria-label={`Remove ${product.name} from list`}
                      >
                        <Trash size={15} weight="regular" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer CTA */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-gold-hairline/60 bg-white/95 space-y-3">
              <div className="flex items-start gap-2 text-[11px] text-muted">
                <ShieldCheck size={16} weight="fill" className="text-emerald-deep shrink-0 mt-0.5" />
                <span>{t("drawer", "note")}</span>
              </div>
              <a
                href={getWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="drawer-whatsapp-checkout-btn"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-soft hover:shadow-soft-lg transition-all active:scale-[0.98]"
              >
                <WhatsappLogo size={20} weight="fill" />
                <span>{t("drawer", "checkoutBtn")}</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
