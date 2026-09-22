import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getSiteSettings } from "@/lib/cms";
import { siteConfig } from "@/config/site";
import { WhatsAppGroupBanner } from "@/components/WhatsAppGroupBanner";
import {
  CalendarBlank,
  WhatsappLogo,
  MapPin,
  Clock,
  Phone,
  ShieldCheck,
  Handshake,
  BookOpen,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Alfacairo — Spiritual Healer & Prayer Counsellor",
  description:
    "Learn about Alfacairo, dedicated spiritual healer and prayer counsellor serving individuals and families across Nigeria from Alfa Cairo House in Owode Egba, Ogun State.",
  alternates: {
    canonical: "/about",
  },
};

export default async function AboutPage() {
  const settings = await getSiteSettings();

  return (
    <div className="w-full flex flex-col py-8 sm:py-16">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-emerald-light border border-emerald-deep/20 text-emerald-deep text-xs font-bold uppercase tracking-wider mb-4">
          Spiritual Leadership &amp; Calling
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold font-serif text-charcoal tracking-tight">
          About Alfacairo
        </h1>
        <div className="mt-2 font-arabic text-lg sm:text-xl text-emerald-deep font-bold" dir="rtl">
          فضيلة الشيخ ألفا قاهرة • حلول الشفاء والدعاء
        </div>
        <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          Offering sincere prayer, Quranic supplication, and traditional botanical remedies rooted in faith, compassion, and truth.
        </p>
      </section>

      {/* Main Profile Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait Container */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-soft-lg border-2 border-gold/40 p-2 bg-white">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/alfacairo-portrait.jpg"
                  alt="Alfacairo in maroon kaftan holding microphone with open Quran at Alfa Cairo House"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Bio & Philosophy Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-5 sm:p-8 rounded-3xl bg-white border border-gold-hairline shadow-soft space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-charcoal">
                Life &amp; Spiritual Calling
              </h2>
              <p className="text-sm sm:text-base text-charcoal/90 leading-relaxed">
                {settings.bio}
              </p>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Operating under the brand name <strong className="font-semibold text-emerald-deep">Solution Spiritual Healing &amp; Prayer</strong> (Arabic: <span className="font-arabic font-bold">حلول الشفاء والدعاء</span>), Alfacairo believes that human afflictions—whether physical discomfort, spiritual stagnation, emotional burdens, or family unrest—can find relief when touched by genuine supplication and time-honored traditional remedies.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-cream-light border border-gold-hairline/60 flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-emerald-light text-emerald-deep shrink-0">
                  <BookOpen size={20} weight="fill" />
                </div>
                <div>
                  <h3 className="text-sm font-bold font-serif text-charcoal">
                    Faith-Rooted Guidance
                  </h3>
                  <p className="text-xs text-muted mt-1 leading-relaxed">
                    Strict reliance on authentic Quranic supplications, prophetic adhkar, and sincere prayers.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-cream-light border border-gold-hairline/60 flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-emerald-light text-emerald-deep shrink-0">
                  <Handshake size={20} weight="fill" />
                </div>
                <div>
                  <h3 className="text-sm font-bold font-serif text-charcoal">
                    Confidential &amp; Compassionate
                  </h3>
                  <p className="text-xs text-muted mt-1 leading-relaxed">
                    A safe, private sanctuary where individuals and families share their trials in complete trust.
                  </p>
                </div>
              </div>
            </div>

            {/* Credentials Section — Auto-hides if empty */}
            {settings.credentials && settings.credentials.length > 0 && (
              <div className="p-5 sm:p-6 rounded-3xl bg-white border border-gold-hairline shadow-soft-sm">
                <h3 className="text-lg font-bold font-serif text-charcoal mb-3">
                  Certifications &amp; Credentials
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-charcoal">
                  {settings.credentials.map((cred, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <ShieldCheck size={16} weight="fill" className="text-emerald-deep shrink-0" />
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/book"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-emerald-deep hover:bg-emerald-forest text-white font-bold text-xs sm:text-sm shadow-soft transition-all hover-lift min-h-[44px]"
              >
                <CalendarBlank size={16} weight="bold" className="text-gold-light" />
                <span>Book a Consultation</span>
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-white hover:bg-cream border border-gold-hairline text-emerald-deep font-bold text-xs sm:text-sm shadow-soft-sm transition-all hover-lift min-h-[44px]"
              >
                <WhatsappLogo size={18} weight="fill" className="text-emerald-600" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sanctuary Location Section with Green Building Photo */}
      <section className="py-16 bg-cream border-t border-gold-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gold-hairline text-emerald-deep text-xs font-bold uppercase tracking-wider">
                Alfa Cairo House
              </div>
              <h2 className="text-3xl font-bold font-serif text-charcoal tracking-tight">
                Our Physical Sanctuary in Owode Egba
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                Alfa Cairo House is a peaceful two-storey residence and prayer center situated in Owode Egba, Ogun State. Here, seekers arrive from Lagos, Abeokuta, Ibadan, and across the federation for private consultations, personal prayer sessions, and to pick up fresh traditional remedies.
              </p>
              <div className="space-y-2 text-xs sm:text-sm text-charcoal">
                <div className="flex items-center gap-2">
                  <MapPin size={16} weight="fill" className="text-emerald-deep shrink-0" />
                  <span>{siteConfig.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} weight="fill" className="text-emerald-deep shrink-0" />
                  <span>{siteConfig.hours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} weight="fill" className="text-emerald-deep shrink-0" />
                  <span>{siteConfig.phoneDisplay}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-soft-lg border-2 border-gold/40">
                <Image
                  src="/images/house.jpg"
                  alt="Alfa Cairo House in Owode Egba, Ogun State"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppGroupBanner />
    </div>
  );
}
