"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { CalendarCheck, WhatsappLogo } from "@phosphor-icons/react";

export function LandingStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past 400px (hero section)
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const directWhatsAppUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Assalamu alaikum Alfacairo, I would like to book a spiritual consultation."
  )}`;

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-40 p-3 sm:p-4 bg-white/95 backdrop-blur-md border-t border-gold-hairline shadow-[0_-4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
      role="region"
      aria-label="Quick Consultation Booking Action Bar"
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3 sm:gap-6">
        <div className="hidden sm:block min-w-0">
          <p className="text-xs sm:text-sm font-bold text-charcoal truncate">
            Ready to release spiritual burdens and stagnation?
          </p>
          <p className="text-[11px] text-muted truncate">
            Private consultations with Sheikh Ismail Adewunmi (Alfacairo)
          </p>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0 justify-end">
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-3 rounded-xl bg-emerald-light border border-emerald-deep/30 text-emerald-deep hover:bg-emerald-deep hover:text-white transition-colors"
            title="Chat on WhatsApp"
            aria-label="Direct WhatsApp message"
          >
            <WhatsappLogo size={20} weight="fill" />
          </a>

          <a
            href="#book-consultation"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 rounded-xl bg-emerald-deep text-white font-bold text-sm sm:text-base shadow-soft hover:bg-emerald-forest transition-colors text-center"
          >
            <CalendarCheck size={18} weight="fill" />
            <span>Book Consultation</span>
          </a>
        </div>
      </div>
    </div>
  );
}
