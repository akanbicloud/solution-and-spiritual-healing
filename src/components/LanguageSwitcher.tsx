"use client";

import React, { useState, useRef, useEffect } from "react";
import { useI18n } from "@/i18n/context";
import { supportedLocales, Locale } from "@/i18n/translations";
import { Globe, Check, CaretDown } from "@phosphor-icons/react";

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLocale = supportedLocales.find((l) => l.code === locale) || supportedLocales[0];

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        type="button"
        id="language-switcher-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold-hairline bg-white/70 hover:bg-white text-xs font-medium text-charcoal shadow-soft-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-deep/30"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Change Language"
      >
        <Globe size={15} weight="regular" className="text-emerald-deep" />
        <span className="font-semibold text-emerald-deep">{currentLocale.nativeLabel}</span>
        <CaretDown size={12} weight="bold" className={`text-muted transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-44 rounded-xl bg-white border border-gold-hairline shadow-soft-lg py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="px-3 py-1 text-[11px] font-medium text-muted uppercase tracking-wider border-b border-gray-100">
            Select Language
          </div>
          {supportedLocales.map((item) => {
            const isSelected = item.code === locale;
            return (
              <button
                key={item.code}
                id={`lang-option-${item.code}`}
                onClick={() => {
                  setLocale(item.code as Locale);
                  setIsOpen(false);
                }}
                className={`w-full text-left rtl:text-right px-3 py-2 text-xs flex items-center justify-between transition-colors ${
                  isSelected
                    ? "bg-emerald-light text-emerald-deep font-bold"
                    : "text-charcoal hover:bg-cream-light"
                }`}
                role="menuitem"
              >
                <div className="flex items-center gap-2">
                  <span>{item.flag}</span>
                  <span>{item.nativeLabel}</span>
                  {item.code === "ar" && (
                    <span className="text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded font-normal">
                      RTL
                    </span>
                  )}
                </div>
                {isSelected && <Check size={14} weight="bold" className="text-emerald-deep" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
