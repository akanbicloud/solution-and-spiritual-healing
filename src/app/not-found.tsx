import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { House, ArrowRight, Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Page Not Found (404)",
  description: "The page you are looking for does not exist. Explore Solution Spiritual Healing & Prayer (Alfacairo) services, herbal remedies, and prayer resources.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full text-center bg-white rounded-3xl border border-gold-hairline/80 p-8 sm:p-12 shadow-soft-lg relative overflow-hidden">
        {/* Subtle background ornamentation */}
        <div className="absolute inset-0 bg-islamic-pattern opacity-5 pointer-events-none" />
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-gold/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-light text-emerald-deep font-serif font-black text-2xl mb-6 border border-emerald-deep/20 shadow-soft-sm">
            404
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold font-serif text-charcoal tracking-tight">
            Page Not Found
          </h1>

          <div className="mt-2 font-arabic text-lg sm:text-xl text-emerald-deep font-bold" dir="rtl">
            الصفحة غير موجودة • نعتذر عن هذا الخطأ
          </div>

          <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed">
            The page you requested may have been moved, renamed, or is temporarily unavailable. You can return to our sanctuary homepage or explore our core offerings below.
          </p>

          {/* Direct Navigation Links */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <Link
              href="/"
              className="flex items-center justify-between p-3.5 rounded-xl bg-cream-light/60 hover:bg-cream border border-gold-hairline/60 text-xs font-bold text-charcoal transition-all group"
            >
              <div className="flex items-center gap-2">
                <House size={16} weight="fill" className="text-emerald-deep" />
                <span>Return to Home</span>
              </div>
              <ArrowRight size={14} weight="bold" className="text-muted group-hover:text-emerald-deep transition-colors" />
            </Link>

            <Link
              href="/services"
              className="flex items-center justify-between p-3.5 rounded-xl bg-cream-light/60 hover:bg-cream border border-gold-hairline/60 text-xs font-bold text-charcoal transition-all group"
            >
              <span className="font-medium text-emerald-deep">Spiritual Services</span>
              <ArrowRight size={14} weight="bold" className="text-muted group-hover:text-emerald-deep transition-colors" />
            </Link>

            <Link
              href="/products"
              className="flex items-center justify-between p-3.5 rounded-xl bg-cream-light/60 hover:bg-cream border border-gold-hairline/60 text-xs font-bold text-charcoal transition-all group"
            >
              <span className="font-medium text-emerald-deep">Herbal Formulations</span>
              <ArrowRight size={14} weight="bold" className="text-muted group-hover:text-emerald-deep transition-colors" />
            </Link>

            <Link
              href="/book"
              className="flex items-center justify-between p-3.5 rounded-xl bg-cream-light/60 hover:bg-cream border border-gold-hairline/60 text-xs font-bold text-charcoal transition-all group"
            >
              <span className="font-medium text-emerald-deep">Book Consultation</span>
              <ArrowRight size={14} weight="bold" className="text-muted group-hover:text-emerald-deep transition-colors" />
            </Link>
          </div>

          {/* Quick Direct Help */}
          <div className="mt-8 pt-6 border-t border-gold-hairline/50 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                "Assalamu alaikum Alfacairo, I encountered an issue while browsing your website."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-deep hover:bg-emerald-forest text-white text-xs font-bold transition-all shadow-soft-sm"
            >
              <WhatsappLogo size={16} weight="fill" />
              <span>Contact on WhatsApp</span>
            </a>

            <a
              href={`tel:${siteConfig.phoneIntl}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-cream-light border border-gold-hairline text-charcoal text-xs font-bold transition-all"
            >
              <Phone size={15} weight="fill" className="text-emerald-deep" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
