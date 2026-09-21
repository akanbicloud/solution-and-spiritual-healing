"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { useI18n } from "@/i18n/context";
import {
  Phone,
  MapPin,
  Clock,
  UsersThree,
  ShieldWarning,
  ArrowUpRight,
  FacebookLogo,
  TiktokLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="w-full bg-cream border-t border-gold-hairline pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-gold-hairline/60">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative w-48 sm:w-56 h-12">
                <Image
                  src="/images/logo.svg"
                  alt="Solution Spiritual Healing & Prayer"
                  fill
                  className="object-contain object-left rtl:object-right"
                />
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              Faith-rooted spiritual guidance, heartfelt prayer counselling, and traditional prayer-prepared botanical wellness from Owode Egba, Ogun State, serving seekers across Nigeria.
            </p>
            <div className="pt-2 flex items-center gap-3">
              {siteConfig.socials.facebook ? (
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white border border-gold-hairline flex items-center justify-center text-emerald-deep hover:bg-emerald-deep hover:text-white transition-colors shadow-soft-sm"
                  aria-label="Facebook (Alfa Cairo)"
                >
                  <FacebookLogo size={18} weight="bold" />
                </a>
              ) : null}
              {siteConfig.socials.tiktok ? (
                <a
                  href={siteConfig.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white border border-gold-hairline flex items-center justify-center text-emerald-deep hover:bg-emerald-deep hover:text-white transition-colors shadow-soft-sm"
                  aria-label="TikTok (Alfa Cairo)"
                >
                  <TiktokLogo size={18} weight="bold" />
                </a>
              ) : null}
              {siteConfig.socials.youtube ? (
                <a
                  href={siteConfig.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white border border-gold-hairline flex items-center justify-center text-emerald-deep hover:bg-emerald-deep hover:text-white transition-colors shadow-soft-sm"
                  aria-label="YouTube (Alfa Cairo)"
                >
                  <YoutubeLogo size={18} weight="bold" />
                </a>
              ) : null}
              {siteConfig.socials.instagram ? (
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white border border-gold-hairline flex items-center justify-center text-emerald-deep hover:bg-emerald-deep hover:text-white transition-colors shadow-soft-sm"
                  aria-label="Instagram (Alfa Cairo)"
                >
                  <InstagramLogo size={18} weight="bold" />
                </a>
              ) : null}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-charcoal font-serif">
              {t("footer", "quickLinks")}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-muted">
              <li>
                <Link href="/" className="hover:text-emerald-deep transition-colors">
                  {t("nav", "home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-deep transition-colors">
                  {t("nav", "about")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-emerald-deep transition-colors">
                  {t("nav", "services")}
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-emerald-deep transition-colors">
                  {t("nav", "products")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-emerald-deep transition-colors">
                  {t("nav", "blog")}
                </Link>
              </li>
              <li>
                <Link href="/videos" className="hover:text-emerald-deep transition-colors">
                  {t("nav", "videos")}
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-emerald-deep transition-colors font-semibold text-emerald-deep">
                  {t("nav", "bookCta")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Sanctuary Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-charcoal font-serif">
              {t("footer", "contactInfo")}
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-muted">
              <div className="flex items-start gap-2.5">
                <MapPin size={18} weight="fill" className="text-emerald-deep shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={18} weight="fill" className="text-emerald-deep shrink-0" />
                <a href={`tel:${siteConfig.phoneIntl}`} className="hover:text-emerald-deep">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock size={18} weight="fill" className="text-emerald-deep shrink-0 mt-0.5" />
                <span>{siteConfig.hours}</span>
              </div>
            </div>
          </div>

          {/* Column 4: WhatsApp Group & Community */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-charcoal font-serif">
              Community Connection
            </h4>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              Stay connected for weekly spiritual reminders, daily prayers, and updates from Alfacairo.
            </p>
            <a
              href={siteConfig.whatsappGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-deep text-white text-xs font-semibold hover:bg-emerald-forest transition-colors shadow-soft"
            >
              <UsersThree size={18} weight="bold" className="text-gold-light" />
              <span>Join our WhatsApp group</span>
              <ArrowUpRight size={14} weight="bold" />
            </a>
          </div>
        </div>

        {/* Mandatory Health Disclaimer Notice */}
        <div className="pt-8 pb-6 border-b border-gold-hairline/40">
          <div className="p-4 rounded-2xl bg-white/60 border border-gold-hairline/60 flex items-start gap-3">
            <ShieldWarning size={22} weight="fill" className="text-amber-700 shrink-0 mt-0.5" />
            <p className="text-xs text-muted leading-relaxed">
              <strong className="font-semibold text-charcoal">Important Notice: </strong>
              {siteConfig.disclaimer}
            </p>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div>
            © {new Date().getFullYear()} {siteConfig.brand}. {t("footer", "rights")}
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-emerald-deep transition-colors">
              {t("footer", "privacy")}
            </Link>
            <Link href="/terms" className="hover:text-emerald-deep transition-colors">
              {t("footer", "terms")}
            </Link>
            <Link href="/contact" className="hover:text-emerald-deep transition-colors">
              {t("nav", "contact")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
