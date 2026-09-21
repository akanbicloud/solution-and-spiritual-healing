"use client";

import React, { useState } from "react";
import { ArabicPassageBlock as ArabicPassageBlockType } from "@/content/posts";
import { Copy, Check, BookOpen } from "@phosphor-icons/react";
import confetti from "canvas-confetti";

export function ArabicPassageBlock({ block }: { block: ArabicPassageBlockType }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = `${block.arabicText}\n\nTransliteration: ${block.transliteration}\n\nTranslation: ${block.translation}\n\nSource: ${block.source}\n\nShared from Solution Spiritual Healing & Prayer (Alfacairo)`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    try {
      confetti({ particleCount: 20, spread: 50, origin: { y: 0.8 } });
    } catch {
      // ignore
    }
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="my-8 rounded-3xl bg-gradient-to-br from-white via-cream-light/60 to-cream border border-gold/40 p-6 sm:p-8 shadow-soft relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl pointer-events-none" />

      {/* Arabic Script */}
      <div
        dir="rtl"
        lang="ar"
        className="font-arabic text-2xl sm:text-3xl text-emerald-deep font-bold leading-loose text-center py-2"
      >
        {block.arabicText}
      </div>

      {/* Transliteration */}
      {block.transliteration && (
        <div className="mt-4 text-xs sm:text-sm text-charcoal/80 italic text-center font-medium leading-relaxed max-w-2xl mx-auto">
          {block.transliteration}
        </div>
      )}

      {/* Translation */}
      <div className="mt-3 text-sm sm:text-base text-charcoal font-serif text-center leading-relaxed py-2 border-t border-b border-gold-hairline/40 max-w-2xl mx-auto">
        “{block.translation}”
      </div>

      {/* Source and Copy Button */}
      <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="inline-flex items-center gap-1.5 text-muted font-medium">
          <BookOpen size={15} weight="fill" className="text-gold" />
          <span>{block.source}</span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-emerald-light border border-emerald-deep/20 text-emerald-deep text-xs font-bold transition-all shadow-soft-sm active:scale-95"
        >
          {copied ? (
            <>
              <Check size={14} weight="bold" className="text-emerald-600" />
              <span>Copied text!</span>
            </>
          ) : (
            <>
              <Copy size={14} weight="bold" />
              <span>Copy Arabic &amp; Meaning</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
