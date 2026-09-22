import React from "react";
import { BookingForm } from "@/components/BookingForm";
import { WhatsAppGroupBanner } from "@/components/WhatsAppGroupBanner";
import { siteConfig } from "@/config/site";
import {
  CalendarBlank,
  Phone,
  WhatsappLogo,
  MapPin,
  Clock,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Consultation with Alfacairo",
  description:
    "Schedule an in-person spiritual consultation at Alfa Cairo House in Owode Egba, Ogun State, or arrange a direct phone session.",
};

export default async function BookPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;

  return (
    <div className="w-full flex flex-col py-8 sm:py-16">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-light border border-emerald-deep/20 text-emerald-deep text-xs font-bold uppercase tracking-wider mb-4">
          <CalendarBlank size={14} weight="bold" className="text-gold" />
          Private Spiritual Sessions
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold font-serif text-charcoal tracking-tight">
          Book a Consultation with Alfacairo
        </h1>
        <div className="mt-2 font-arabic text-lg sm:text-xl text-emerald-deep font-bold" dir="rtl">
          حجز جلسة استشارة ودعاء مباركة
        </div>
        <p className="mt-4 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          In-person at Alfa Cairo House, Owode Egba, Ogun State, or via direct phone consultation. Open every day.
        </p>

        {/* Quick direct contact shortcuts */}
        <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
          <a
            href={`tel:${siteConfig.phoneIntl}`}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 sm:py-2.5 rounded-xl bg-white border border-gold-hairline text-charcoal text-xs sm:text-sm font-bold shadow-soft-sm hover:bg-cream transition-colors min-h-[44px]"
          >
            <Phone size={16} weight="fill" className="text-emerald-deep" />
            <span>Call: {siteConfig.phoneDisplay}</span>
          </a>

          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
              "Assalamu alaikum Alfacairo, I would like to arrange an urgent consultation."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 sm:py-2.5 rounded-xl bg-emerald-light border border-emerald-deep/20 text-emerald-deep text-xs sm:text-sm font-bold hover:bg-emerald-light/80 transition-colors min-h-[44px]"
          >
            <WhatsappLogo size={16} weight="fill" />
            <span>Quick WhatsApp Message</span>
          </a>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <BookingForm initialService={service} />
      </section>

      {/* Reassurance Cards */}
      <section className="max-w-4xl mx-auto px-4 mb-12 sm:mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-gold-hairline shadow-soft-sm">
            <ShieldCheck size={28} weight="fill" className="text-emerald-deep mx-auto mb-2" />
            <h4 className="text-sm font-bold font-serif text-charcoal">Complete Privacy</h4>
            <p className="text-xs text-muted mt-1">All prayer requests and family matters are kept strictly confidential.</p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-gold-hairline shadow-soft-sm">
            <Clock size={28} weight="fill" className="text-emerald-deep mx-auto mb-2" />
            <h4 className="text-sm font-bold font-serif text-charcoal">All Hours Welcome</h4>
            <p className="text-xs text-muted mt-1">Available 7 days a week for both daytime and evening prayers.</p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-gold-hairline shadow-soft-sm">
            <MapPin size={28} weight="fill" className="text-emerald-deep mx-auto mb-2" />
            <h4 className="text-sm font-bold font-serif text-charcoal">Owode Egba Sanctuary</h4>
            <p className="text-xs text-muted mt-1">Comfortable, serene prayer sanctuary with easy road access in Ogun State.</p>
          </div>
        </div>
      </section>

      <WhatsAppGroupBanner />
    </div>
  );
}
