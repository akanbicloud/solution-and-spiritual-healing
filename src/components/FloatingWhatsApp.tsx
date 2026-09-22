"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { WhatsappLogo, X } from "@phosphor-icons/react";

export function FloatingWhatsApp() {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);
  const defaultMessage = encodeURIComponent("Assalamu alaikum, I would like to make an enquiry.");
  const waUrl = `https://wa.me/${siteConfig.whatsapp}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 rtl:right-auto rtl:left-4 rtl:sm:left-6 z-50 flex flex-col items-end rtl:items-start group">
      {/* Friendly floating speech bubble */}
      {!tooltipDismissed && (
        <div className="mb-2 hidden sm:flex items-center gap-2 px-3 py-2 bg-white rounded-2xl shadow-soft border border-gold-hairline animate-bounce text-xs font-semibold text-charcoal">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Chat with Alfacairo</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setTooltipDismissed(true);
            }}
            className="text-muted hover:text-charcoal p-0.5 rounded-full"
            aria-label="Dismiss message bubble"
          >
            <X size={14} weight="bold" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-soft-lg transition-transform duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        aria-label="Chat directly with Alfacairo on WhatsApp"
        title="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25" />
        <WhatsappLogo size={28} weight="fill" className="relative z-10 sm:scale-110" />
      </a>
    </div>
  );
}
