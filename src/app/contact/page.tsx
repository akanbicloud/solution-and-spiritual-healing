import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { WhatsAppGroupBanner } from "@/components/WhatsAppGroupBanner";
import {
  MapPin,
  Phone,
  WhatsappLogo,
  UsersThree,
  Clock,
  ArrowUpRight,
  FacebookLogo,
  TiktokLogo,
  InstagramLogo,
  YoutubeLogo,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Alfacairo & Visit Alfa Cairo House",
  description:
    "Get directions to Alfa Cairo House in Owode Egba, Ogun State. Call, WhatsApp, or join our community group for spiritual guidance and prayers.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col py-8 sm:py-16">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-light border border-emerald-deep/20 text-emerald-deep text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkle size={14} weight="fill" className="text-gold" />
          Reach Out In Confidence
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold font-serif text-charcoal tracking-tight">
          Contact &amp; Location
        </h1>
        <div className="mt-2 font-arabic text-lg sm:text-xl text-emerald-deep font-bold" dir="rtl">
          معلومات التواصل والعنوان • أودي إيغبا
        </div>
        <p className="mt-4 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          We welcome visitors from across Nigeria at Alfa Cairo House in Owode Egba, Ogun State. Reach out by phone, WhatsApp, or visit in person.
        </p>
      </section>

      {/* Main Contact Grid: Cards + Prominent House Photo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct Communication Cards */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            {/* Phone Card */}
            <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-gold-hairline shadow-soft flex items-start gap-3.5 sm:gap-4">
              <div className="p-2.5 sm:p-3 rounded-2xl bg-emerald-light text-emerald-deep shrink-0">
                <Phone size={22} weight="fill" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-base font-bold font-serif text-charcoal">
                  Direct Telephone
                </h2>
                <p className="text-xs text-muted mt-0.5">
                  Direct call line to Alfacairo and his prayer counsellors.
                </p>
                <div className="mt-3">
                  <a
                    href={`tel:${siteConfig.phoneIntl}`}
                    className="inline-flex items-center gap-1.5 text-base font-bold text-emerald-deep hover:underline"
                  >
                    <span>{siteConfig.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-gold-hairline shadow-soft flex items-start gap-3.5 sm:gap-4">
              <div className="p-2.5 sm:p-3 rounded-2xl bg-emerald-light text-emerald-deep shrink-0">
                <WhatsappLogo size={22} weight="fill" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-base font-bold font-serif text-charcoal">
                  WhatsApp Direct Message
                </h2>
                <p className="text-xs text-muted mt-0.5">
                  Instant inquiries, consultation scheduling, and product orders.
                </p>
                <div className="mt-3">
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                      "Assalamu alaikum Alfacairo, I would like to make an enquiry."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-soft hover:bg-emerald-500 transition-all min-h-[42px]"
                  >
                    <WhatsappLogo size={16} weight="fill" />
                    <span>Chat on WhatsApp ({siteConfig.phoneDisplay})</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Address & Hours */}
            <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-gold-hairline shadow-soft flex items-start gap-3.5 sm:gap-4">
              <div className="p-2.5 sm:p-3 rounded-2xl bg-emerald-light text-emerald-deep shrink-0">
                <MapPin size={22} weight="fill" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-base font-bold font-serif text-charcoal">
                  Physical Sanctuary
                </h2>
                <p className="text-sm font-semibold text-charcoal mt-1">
                  {siteConfig.address}
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-muted">
                  <Clock size={15} weight="fill" className="text-emerald-deep shrink-0" />
                  <span>{siteConfig.hours}</span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-cream-light border border-gold-hairline/60">
              <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal mb-3">
                Official Social Channels (Alfa Cairo)
              </h3>
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                {siteConfig.socials.facebook ? (
                  <a
                    href={siteConfig.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-gold-hairline text-xs font-bold text-charcoal hover:text-emerald-deep transition-colors shadow-soft-sm min-h-[40px]"
                  >
                    <FacebookLogo size={16} weight="bold" className="text-[#1877F2]" />
                    <span>Facebook</span>
                  </a>
                ) : null}
                {siteConfig.socials.tiktok ? (
                  <a
                    href={siteConfig.socials.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-gold-hairline text-xs font-bold text-charcoal hover:text-emerald-deep transition-colors shadow-soft-sm min-h-[40px]"
                  >
                    <TiktokLogo size={16} weight="bold" className="text-black" />
                    <span>TikTok</span>
                  </a>
                ) : null}
                {siteConfig.socials.youtube ? (
                  <a
                    href={siteConfig.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-gold-hairline text-xs font-bold text-charcoal hover:text-emerald-deep transition-colors shadow-soft-sm min-h-[40px]"
                  >
                    <YoutubeLogo size={16} weight="bold" className="text-[#FF0000]" />
                    <span>YouTube</span>
                  </a>
                ) : null}
                {siteConfig.socials.instagram ? (
                  <a
                    href={siteConfig.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-gold-hairline text-xs font-bold text-charcoal hover:text-emerald-deep transition-colors shadow-soft-sm min-h-[40px]"
                  >
                    <InstagramLogo size={16} weight="bold" className="text-[#E1306C]" />
                    <span>Instagram</span>
                  </a>
                ) : null}
              </div>
            </div>
          </div>

          {/* Right Column: Prominent Photo of His House */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/3] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-soft-lg border-2 border-gold/40">
              <Image
                src="/images/house.jpg"
                alt="Alfa Cairo House in Owode Egba, Ogun State — green two-storey building with ornamental gate"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute bottom-3 sm:bottom-4 inset-x-3 sm:inset-x-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-gold-hairline text-xs sm:text-sm">
                <div className="font-bold font-serif text-charcoal text-xs sm:text-sm">
                  Alfa Cairo House — Owode Egba, Ogun State
                </div>
                <div className="text-muted text-[11px] mt-0.5 leading-snug">
                  Green two-storey building with dark ornamental security gate. Search “Alfa Cairo house” on Google Maps.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LARGE VISIBLE GOOGLE MAP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-gold-hairline/80 p-4 sm:p-8 shadow-soft-lg">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between mb-6 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-light text-emerald-deep shrink-0">
                <MapPin size={24} weight="fill" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-serif text-charcoal">
                  Interactive Google Map
                </h2>
                <p className="text-xs text-muted">
                  Easy navigation to Alfa Cairo house in Owode Egba, Ogun State
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps?q=Alfa+Cairo+house+Owode+Egba+Ogun+State"
              target="_blank"
              rel="noopener noreferrer"
              id="get-directions-btn"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-deep hover:bg-emerald-forest text-white font-bold text-xs sm:text-sm shadow-soft transition-all shrink-0 min-h-[44px]"
            >
              <span>Get Directions</span>
              <ArrowUpRight size={14} weight="bold" />
            </a>
          </div>

          <div className="relative w-full h-[300px] sm:h-[450px] md:h-[520px] rounded-xl sm:rounded-2xl overflow-hidden border border-gold-hairline">
            <iframe
              title="Alfa Cairo House Google Map Location"
              src="https://www.google.com/maps?q=Alfa+Cairo+house+Owode+Egba+Ogun+State&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      <WhatsAppGroupBanner />
    </div>
  );
}
