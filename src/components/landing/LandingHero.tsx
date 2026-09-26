import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import {
  ShieldCheck,
  WhatsappLogo,
  ArrowDown,
  CalendarCheck,
  CheckCircle,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";

export function LandingHero() {
  const directWhatsAppUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Assalamu alaikum Alfacairo, I would like to book a confidential consultation regarding a spiritual matter."
  )}`;

  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-20 border-b border-gold-hairline/60 bg-gradient-to-b from-cream/60 via-ivory to-ivory">
      {/* Decorative subtle ambient glows */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-gold-light/10 via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Brand Logo - Top of Hero, sized appropriately, non-clickable (no link away) */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="relative inline-flex items-center justify-center p-2 rounded-2xl bg-white/80 shadow-soft-sm border border-gold-hairline/80 backdrop-blur-xs">
            <Image
              src="/logo.png"
              alt="Solution Spiritual Healing & Prayer Logo"
              width={160}
              height={56}
              priority
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </div>
        </div>

        {/* Credibility Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-light border border-emerald-deep/20 text-emerald-deep text-xs sm:text-sm font-semibold tracking-wide mb-5 sm:mb-6">
          <Sparkle size={15} weight="fill" className="text-gold" />
          <span>Private &amp; Confidential Spiritual Consultations</span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-charcoal tracking-tight leading-[1.18] sm:leading-[1.15]">
          Break Free From Unseen Burdens, Stagnant Seasons, &amp; Heavy Turmoil.
        </h1>

        {/* Sacred Arabic Assurance */}
        <div
          className="mt-4 sm:mt-5 font-arabic text-base sm:text-xl text-emerald-deep font-bold"
          dir="rtl"
        >
          وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ
        </div>
        <p className="text-xs sm:text-sm text-muted/80 italic mt-1 font-serif">
          “And We send down of the Quran that which is healing and mercy.”
        </p>

        {/* Clear Subheadline */}
        <p className="mt-5 sm:mt-7 text-base sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
          Book a private, one-on-one consultation with <strong>Alfacairo (Sheikh Ismail Adewunmi)</strong>. 
          Grounded in authentic prophetic supplication, sincere Ruqyah prayers, and discerning spiritual guidance 
          to help you restore peace, clarity, and life momentum.
        </p>

        {/* Primary Call-To-Action Button - Above The Fold */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 max-w-md mx-auto">
          <a
            href="#book-consultation"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-emerald-deep text-white font-bold text-base sm:text-lg shadow-gold hover:bg-emerald-forest transition-all duration-300 transform active:scale-[0.99] min-h-[52px]"
          >
            <CalendarCheck size={22} weight="fill" />
            <span>Book a Consultation</span>
          </a>

          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white border border-emerald-deep/20 text-emerald-deep font-bold text-sm sm:text-base hover:bg-emerald-light transition-colors shadow-soft-sm min-h-[52px]"
          >
            <WhatsappLogo size={20} weight="fill" />
            <span>Message on WhatsApp</span>
          </a>
        </div>

        {/* Micro-Trust Badges */}
        <div className="mt-8 sm:mt-10 pt-6 border-t border-gold-hairline/40 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-charcoal font-medium">
          <div className="flex items-center justify-center gap-1.5 text-center">
            <CheckCircle size={16} weight="fill" className="text-emerald-deep shrink-0" />
            <span>100% Confidential Pastoral Care</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-center">
            <CheckCircle size={16} weight="fill" className="text-emerald-deep shrink-0" />
            <span>In-Person or Phone / WhatsApp</span>
          </div>
          <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-1.5 text-center">
            <ShieldCheck size={16} weight="fill" className="text-emerald-deep shrink-0" />
            <span>15+ Years Trusted Guidance</span>
          </div>
        </div>

        {/* Smooth Scroll Indicator */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <a
            href="#trust-signals"
            className="inline-flex items-center gap-1 text-xs text-muted hover:text-charcoal transition-colors py-1 px-3 rounded-full hover:bg-cream/80"
            aria-label="Scroll to discover why thousands trust Alfacairo"
          >
            <span>Learn what happens during your session</span>
            <ArrowDown size={12} weight="bold" />
          </a>
        </div>
      </div>
    </section>
  );
}
