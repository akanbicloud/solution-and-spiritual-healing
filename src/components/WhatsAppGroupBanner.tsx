"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { useI18n } from "@/i18n/context";
import { UsersThree, ArrowUpRight, ShieldCheck, Sparkle } from "@phosphor-icons/react";

export function WhatsAppGroupBanner() {
  const { t } = useI18n();

  return (
    <div className="w-full max-w-5xl mx-auto my-10 px-4">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-deep via-emerald-forest to-emerald-dark text-white p-5 sm:p-10 shadow-soft-lg border border-gold/40">
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 bg-islamic-pattern opacity-10 pointer-events-none" />
        <div className="absolute -top-16 -right-16 w-56 h-56 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left rtl:sm:text-right gap-3.5 sm:gap-4">
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-gold-light shrink-0">
              <UsersThree size={30} weight="duotone" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-gold-light text-xs font-semibold uppercase tracking-wider mb-2 border border-gold/30">
                <Sparkle size={13} weight="fill" />
                Community Fellowship
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif text-white tracking-tight">
                {t("bannerWaGroup", "title")}
              </h3>
              <p className="mt-2 text-xs sm:text-base text-emerald-100/90 max-w-xl leading-relaxed">
                {t("bannerWaGroup", "copy")}
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start rtl:sm:justify-end gap-2.5 sm:gap-3 text-xs text-emerald-200">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={15} weight="fill" className="text-gold-light" />
                  Free &amp; Verified
                </span>
                <span>•</span>
                <span>Direct Reminders from Alfacairo</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto shrink-0">
            <a
              href={siteConfig.whatsappGroup}
              target="_blank"
              rel="noopener noreferrer"
              id="whatsapp-group-join-cta"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-gold to-gold-light text-charcoal font-bold text-sm sm:text-base shadow-soft hover:shadow-soft-lg hover:scale-[1.02] active:scale-[0.98] transition-all min-h-[46px]"
            >
              <span>{t("bannerWaGroup", "btn")}</span>
              <ArrowUpRight size={16} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
