import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import {
  ShieldCheck,
  Clock,
  MapPin,
  Handshake,
  CheckCircle,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";

export function LandingTrust() {
  const trustPoints = [
    {
      icon: Clock,
      title: "15+ Years of Devoted Guidance",
      description:
        "Over a decade and a half offering compassionate pastoral counselling, prophetic Ruqyah supplications, and traditional wellness preparation.",
    },
    {
      icon: ShieldCheck,
      title: "100% Sincere & Ethical Practice",
      description:
        "Grounded strictly in authentic Quranic prayers, sincere remembrance (Adhkar), and pure traditional botanicals. No superstitions, fear-mongering, or hidden agendas.",
    },
    {
      icon: Handshake,
      title: "Absolute Discretion & Dignity",
      description:
        "Your private challenges, family concerns, and personal circumstances remain strictly confidential. A safe, non-judgmental sanctuary for your heart.",
    },
    {
      icon: MapPin,
      title: "Accessible Across Nigeria & Worldwide",
      description:
        "Visit our peaceful sanctuary at Alfa Cairo House in Owode Egba, Ogun State, or schedule a focused phone / WhatsApp consultation from anywhere in the world.",
    },
  ];

  return (
    <section id="trust-signals" className="py-12 sm:py-16 bg-cream/30 border-b border-gold-hairline/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight">
            Why Seekers Turn to Alfacairo For Peace &amp; Breakthrough
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted">
            When modern medical solutions, physical hustle, or routine advice fail to ease a persistent heavy burden, 
            spiritual discernment and heartfelt prayer provide the missing compass.
          </p>
        </div>

        {/* 4 Trust Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-gold-hairline shadow-soft-sm hover:shadow-soft transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-light border border-emerald-deep/20 flex items-center justify-center text-emerald-deep mb-4">
                  <Icon size={24} weight="fill" />
                </div>
                <h3 className="text-base font-serif font-bold text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Portrait & Sanctuary Banner */}
        <div className="mt-8 sm:mt-10 p-5 sm:p-8 rounded-3xl bg-white border border-gold-hairline shadow-soft flex flex-col md:flex-row items-center gap-6">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-gold/40 shadow-soft-sm">
            <Image
              src="/images/alfacairo-portrait.jpg"
              alt="Sheikh Ismail Adewunmi (Alfacairo)"
              fill
              className="object-cover"
              sizes="112px"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-sand-100 text-charcoal text-xs font-semibold uppercase tracking-wider mb-2">
              <UsersThree size={14} weight="fill" className="text-emerald-deep" />
              <span>Personal One-On-One Attention</span>
            </div>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-charcoal">
              Sheikh Ismail Adewunmi (Alfacairo)
            </h3>
            <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed">
              Respected spiritual counsellor and healer serving thousands of families, professionals, and seekers across Lagos, Abeokuta, 
              the UK, the US, and nationwide from Alfa Cairo House in Owode Egba, Ogun State.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <a
              href="#book-consultation"
              className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 rounded-xl bg-emerald-deep text-white font-bold text-sm hover:bg-emerald-forest transition-colors shadow-soft-sm"
            >
              <span>Schedule Your Session</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
