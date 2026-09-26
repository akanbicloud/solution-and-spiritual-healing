import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { LockKey, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

export function LandingFooter() {
  return (
    <footer className="w-full bg-cream border-t border-gold-hairline py-8 sm:py-12 pb-24 sm:pb-24 text-charcoal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        {/* Small Logo */}
        <div className="flex justify-center">
          <div className="p-1.5 rounded-xl bg-white/70 border border-gold-hairline/60 inline-flex">
            <Image
              src="/logo.png"
              alt="Solution Spiritual Healing & Prayer Logo"
              width={120}
              height={42}
              className="h-9 w-auto object-contain"
            />
          </div>
        </div>

        {/* Business Name */}
        <div>
          <h4 className="text-sm sm:text-base font-serif font-bold text-charcoal">
            {siteConfig.brand}
          </h4>
          <p className="text-xs text-muted mt-0.5">
            Sheikh Ismail Adewunmi (Alfacairo) • Spiritual Sanctuary &amp; Pastoral Guidance
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-xs text-muted space-y-1">
          <p>{siteConfig.address}</p>
          <p>
            Phone / WhatsApp: <span className="font-semibold text-charcoal">{siteConfig.phoneDisplay}</span> • Email: <span className="font-semibold text-charcoal">{siteConfig.email}</span>
          </p>
        </div>

        {/* Legal Link Only - No site navigation */}
        <div className="pt-3 border-t border-gold-hairline/40 flex items-center justify-center gap-4 text-xs text-muted">
          <Link
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-charcoal underline transition-colors"
          >
            Privacy Policy
          </Link>
          <span>•</span>
          <Link
            href="/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-charcoal underline transition-colors"
          >
            Terms of Service
          </Link>
        </div>

        <p className="text-[11px] text-muted/70">
          © {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
