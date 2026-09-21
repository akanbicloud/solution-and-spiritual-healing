"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { useI18n } from "@/i18n/context";
import { useCart } from "@/context/CartContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import {
  List,
  X,
  ShoppingBag,
  PhoneCall,
  CalendarBlank,
  WhatsappLogo,
  Broadcast,
} from "@phosphor-icons/react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useI18n();
  const { totalCount, openDrawer } = useCart();

  const navLinks = [
    { href: "/", label: t("nav", "home") },
    { href: "/about", label: t("nav", "about") },
    { href: "/services", label: t("nav", "services") },
    { href: "/products", label: t("nav", "products") },
    { href: "/blog", label: t("nav", "blog") },
    { href: "/videos", label: t("nav", "videos") },
    { href: "/contact", label: t("nav", "contact") },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-header transition-colors">
      {/* Top micro-bar for direct contact & hours */}
      <div className="hidden md:block bg-emerald-deep text-white text-[11px] py-1 px-4 tracking-wide font-medium border-b border-emerald-forest">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
              {siteConfig.hours}
            </span>
            <span className="text-emerald-300">•</span>
            <Link
              href="/#weekly-prayer-session"
              className="flex items-center gap-1.5 text-gold-light hover:underline font-semibold"
            >
              <Broadcast size={13} weight="bold" className="text-crimson animate-pulse" />
              <span>Live Prayer: Wed 10PM (An-Najaat)</span>
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${siteConfig.phoneIntl}`}
              className="flex items-center gap-1.5 hover:text-gold-light transition-colors"
            >
              <PhoneCall size={14} weight="fill" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-gold-light transition-colors text-emerald-200"
            >
              <WhatsappLogo size={14} weight="fill" />
              <span>WhatsApp Live</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Solution Spiritual Healing & Prayer — Home"
          >
            <div className="relative w-44 sm:w-56 h-12 transition-transform duration-200 group-hover:scale-[1.02]">
              <Image
                src="/images/logo.svg"
                alt="Solution Spiritual Healing & Prayer Logo"
                fill
                priority
                className="object-contain object-left rtl:object-right"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? "text-emerald-deep bg-emerald-light/60 font-semibold"
                      : "text-charcoal/80 hover:text-emerald-deep hover:bg-cream/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Order Drawer Trigger */}
            <button
              type="button"
              id="header-order-drawer-btn"
              onClick={openDrawer}
              className="relative p-2 rounded-full border border-gold-hairline bg-white/70 hover:bg-white text-charcoal hover:text-emerald-deep transition-all shadow-soft-sm focus:outline-none focus:ring-2 focus:ring-emerald-deep/30"
              aria-label="Open Order Drawer"
              title="View your WhatsApp order list"
            >
              <ShoppingBag size={18} weight="bold" />
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-1 rtl:-left-1 rtl:-right-auto w-4 h-4 rounded-full bg-crimson text-white text-[10px] font-bold flex items-center justify-center animate-pulse">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Consultation CTA Button */}
            <Link
              href="/book"
              id="header-book-cta"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-deep hover:bg-emerald-forest shadow-soft transition-all hover-lift focus:outline-none focus:ring-2 focus:ring-emerald-deep/40"
            >
              <CalendarBlank size={16} weight="bold" className="text-gold-light" />
              <span>{t("nav", "bookCta")}</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl border border-gold-hairline bg-white/80 text-charcoal hover:text-emerald-deep focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="lg:hidden fixed inset-x-0 top-20 bg-ivory/95 backdrop-blur-xl border-b border-gold-hairline shadow-soft-lg px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? "bg-emerald-deep text-white font-semibold"
                      : "text-charcoal hover:bg-cream hover:text-emerald-deep"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 mt-2 border-t border-gold-hairline/60 flex flex-col gap-2">
              <Link
                href="/book"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-white bg-emerald-deep shadow-soft"
              >
                <CalendarBlank size={18} weight="bold" className="text-gold-light" />
                {t("nav", "bookCta")}
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                  "Assalamu alaikum, I would like to make an enquiry."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-sm text-emerald-deep bg-emerald-light border border-emerald-deep/20"
              >
                <WhatsappLogo size={18} weight="fill" className="text-emerald-deep" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
