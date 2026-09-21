"use client";

import React, { useState } from "react";
import { Dua } from "@/content/duas";
import { useI18n } from "@/i18n/context";
import { siteConfig } from "@/config/site";
import { Copy, Check, ShareNetwork, Sparkle, BookOpen } from "@phosphor-icons/react";
import confetti from "canvas-confetti";

export function DuaOfTheDayCard({ dua }: { dua: Dua | null }) {
  const [copied, setCopied] = useState(false);
  const { t } = useI18n();

  if (!dua) return null;

  const handleCopy = () => {
    const textToCopy = `${dua.arabic}\n\nTransliteration: ${dua.transliteration}\n\nTranslation: ${dua.translation}\n\nSource: ${dua.source}\n\nVia Solution Spiritual Healing & Prayer (Alfacairo)`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    try {
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch {
      // ignore
    }
    setTimeout(() => setCopied(false), 2500);
  };

  const getWhatsAppShareUrl = () => {
    const text = `*Dua of the Day — Alfacairo*\n\n${dua.arabic}\n\n_${dua.transliteration}_\n\n"${dua.translation}"\n\n📌 *Source:* ${dua.source}\n\nJoin our community: ${siteConfig.whatsappGroup}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-ivory to-cream border border-gold/40 shadow-soft-lg p-6 sm:p-10 max-w-4xl mx-auto my-12">
      {/* Decorative Islamic Background Pattern */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-5 pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Top category & badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-light border border-emerald-deep/20 text-emerald-deep text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkle size={15} weight="fill" className="text-gold" />
          <span>{dua.category}</span>
          <span className="text-emerald-300">•</span>
          <span>{t("duaSection", "badge")}</span>
        </div>

        {/* Section title */}
        <h3 className="text-2xl sm:text-3xl font-bold font-serif text-charcoal tracking-tight mb-6">
          {t("duaSection", "title")}
        </h3>

        {/* Arabic passage (large, RTL, Arabic font) */}
        <div
          dir="rtl"
          lang="ar"
          className="my-4 py-4 px-6 sm:px-8 rounded-2xl bg-cream-light/60 border border-gold-hairline/60 w-full font-arabic text-2xl sm:text-3xl lg:text-4xl text-emerald-deep font-bold leading-loose text-center shadow-inner"
        >
          {dua.arabic}
        </div>

        {/* Transliteration */}
        <div className="mt-4 max-w-2xl text-xs sm:text-sm text-charcoal/80 font-medium italic leading-relaxed">
          {dua.transliteration}
        </div>

        {/* Translation */}
        <div className="mt-4 max-w-2xl text-sm sm:text-base text-charcoal font-serif leading-relaxed px-4 py-2 border-t border-b border-gold-hairline/40">
          “{dua.translation}”
        </div>

        {/* Source reference */}
        <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted font-medium">
          <BookOpen size={15} weight="fill" className="text-gold" />
          <span>{dua.source}</span>
        </div>

        {/* Copy & WhatsApp Share Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            id="copy-dua-btn"
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-emerald-deep/30 bg-white hover:bg-emerald-light text-emerald-deep text-xs sm:text-sm font-semibold shadow-soft-sm transition-all hover-lift active:scale-95"
          >
            {copied ? (
              <>
                <Check size={16} weight="bold" className="text-emerald-600" />
                <span>{t("duaSection", "copied")}</span>
              </>
            ) : (
              <>
                <Copy size={16} weight="bold" className="text-emerald-deep" />
                <span>{t("duaSection", "copyBtn")}</span>
              </>
            )}
          </button>

          <a
            href={getWhatsAppShareUrl()}
            target="_blank"
            rel="noopener noreferrer"
            id="share-dua-whatsapp-btn"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-deep hover:bg-emerald-forest text-white text-xs sm:text-sm font-semibold shadow-soft transition-all hover-lift active:scale-95"
          >
            <ShareNetwork size={16} weight="bold" className="text-gold-light" />
            <span>{t("duaSection", "shareWaBtn")}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
