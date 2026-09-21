import React from "react";
import Link from "next/link";
import { WhatsAppGroupBanner } from "@/components/WhatsAppGroupBanner";
import { siteConfig } from "@/config/site";
import {
  Sparkle,
  BookOpen,
  ShieldCheck,
  Flame,
  Handshake,
  Compass,
  CheckCircle,
  CalendarBlank,
  WhatsappLogo,
  Phone,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spiritual Services & Prayer Counselling",
  description:
    "Compassionate, faith-inspired spiritual guidance and prayer counselling with Alfacairo for life breakthrough, protection, and family harmony.",
};

const services = [
  {
    id: "cleansing",
    title: "Spiritual Neutralization & Cleansing",
    icon: Sparkle,
    shortDesc: "Prayer-infused traditional cleansing to relieve spiritual heaviness, negative energy, and persistent obstacles.",
    details: [
      "Targeted Ruqyah supplications recited over traditional botanical cleansing preparations.",
      "Aimed at clearing unseen burdens, stagnation, and feelings of constant bad luck.",
      "Personalized bath and cleansing guidance prescribed during your consultation.",
    ],
  },
  {
    id: "prayer-guidance",
    title: "Prayer & Spiritual Guidance",
    icon: BookOpen,
    shortDesc: "Heartfelt Quranic supplication and one-on-one faith counselling for clarity, tranquility, and divine direction.",
    details: [
      "In-depth discussions about your spiritual state and personal aspirations.",
      "Structured daily prayer regimens and specific adhkar tailored to your current season.",
      "Dedicated tahajjud and congregational prayer backing from Alfacairo.",
    ],
  },
  {
    id: "evil-eye",
    title: "Protection from Evil Eye & Envy",
    icon: ShieldCheck,
    shortDesc: "Fortifying spiritual shields through authentic morning and evening adhkar, Ruqyah, and traditional botanicals.",
    details: [
      "Defensive spiritual prayers against envy (hasad), witchcraft, and hidden enmity.",
      "Guidance on preserving household sanctity and shielding young children.",
      "Prescription of traditional Harmal incense and protective herbal waters.",
    ],
  },
  {
    id: "breakthrough",
    title: "Life Breakthrough Prayer",
    icon: Flame,
    shortDesc: "Focused prayer support for career elevation, business revival, financial ease, and overcoming stagnation.",
    details: [
      "Specialized prayer support for persistent delays in employment, promotion, and business contracts.",
      "Spiritual encouragement and actionable wisdom to rebuild confidence and focus.",
      "Holistic approach combining sincere supplication with righteous effort in the physical world.",
    ],
  },
  {
    id: "marital",
    title: "Family & Marital Support",
    icon: Handshake,
    shortDesc: "Faith-centered spiritual guidance to bring mutual affection, peace, and reconciliation into marriages and homes.",
    details: [
      "Mediation rooted in Islamic compassion and traditional marital wisdom.",
      "Prayers for peace of mind, mutual respect, and patience between spouses.",
      "Guidance for parents seeking spiritual shielding for children and extended relatives.",
    ],
  },
  {
    id: "peace-of-mind",
    title: "Peace of Mind (Fear & Restlessness)",
    icon: Compass,
    shortDesc: "Relief from nocturnal disturbances, sudden fear, anxiety, and restlessness through continuous spiritual counsel.",
    details: [
      "Soothing spiritual remedies for persistent nightmares and sudden panic.",
      "Techniques for anchoring the heart in remembrance before sleep.",
      "Restoration of inner calm, mental clarity, and spiritual security.",
    ],
  },
  {
    id: "success",
    title: "Success & Life Improvement",
    icon: CheckCircle,
    shortDesc: "Prayer-prepared formulations and spiritual mentoring to unlock favor, open doors, and fruitful connections.",
    details: [
      "Divine favor supplications for interviews, exams, travel, and business expansions.",
      "Spiritual companions and kits prepared to cultivate goodwill and open doors.",
      "Continual spiritual follow-up and accountability as your life improves.",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="w-full flex flex-col py-12 sm:py-16">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-light border border-emerald-deep/20 text-emerald-deep text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkle size={14} weight="fill" className="text-gold" />
          Compassionate Spiritual Counselling
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold font-serif text-charcoal tracking-tight">
          Our Spiritual Services
        </h1>
        <p className="mt-4 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          Rooted in prophetic supplication, Quranic remembrance, and time-honored traditional remedies. We guide you through life’s seasons with compassion, humility, and prayer.
        </p>
      </section>

      {/* Services Detailed Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => {
            const IconComp = svc.icon;
            return (
              <div
                key={svc.id}
                id={svc.id}
                className="rounded-3xl bg-white border border-gold-hairline/80 p-8 shadow-soft hover:shadow-soft-lg hover-lift transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-emerald-light text-emerald-deep flex items-center justify-center mb-6 border border-emerald-deep/20">
                    <IconComp size={28} weight="fill" />
                  </div>

                  <h2 className="text-xl font-bold font-serif text-charcoal mb-3">
                    {svc.title}
                  </h2>

                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {svc.shortDesc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-gold-hairline/50">
                    {svc.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-charcoal/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-deep shrink-0 mt-1.5" />
                        <span className="leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gold-hairline/50 flex items-center gap-3">
                  <Link
                    href={`/book?service=${encodeURIComponent(svc.title)}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-deep hover:bg-emerald-forest text-white text-xs sm:text-sm font-bold shadow-soft transition-all"
                  >
                    <CalendarBlank size={16} weight="bold" className="text-gold-light" />
                    <span>Book Guidance</span>
                  </Link>

                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                      `Assalamu alaikum Alfacairo, I am interested in inquiring about your "${svc.title}" service.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white hover:bg-cream border border-gold-hairline text-emerald-deep transition-colors"
                    aria-label={`Inquire about ${svc.title} on WhatsApp`}
                    title="Inquire on WhatsApp"
                  >
                    <WhatsappLogo size={18} weight="fill" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Reassurance Banner */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <div className="p-8 rounded-3xl bg-cream border border-gold-hairline/70 text-center space-y-4">
          <h3 className="text-2xl font-bold font-serif text-charcoal">
            Our Commitment to Spiritual Integrity
          </h3>
          <p className="text-sm text-muted max-w-2xl mx-auto leading-relaxed">
            We do not manufacture miracles or make extravagant guarantees. Spiritual counsel is an act of sincere faith and supplication, trusting in God’s supreme decree while applying lawful traditional wellness remedies.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-deep text-white text-xs sm:text-sm font-bold shadow-soft"
            >
              <span>Schedule In-Person or Phone Session</span>
              <ArrowRight size={14} weight="bold" className="rtl:rotate-180" />
            </Link>
            <a
              href={`tel:${siteConfig.phoneIntl}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-gold-hairline text-charcoal text-xs sm:text-sm font-bold shadow-soft-sm"
            >
              <Phone size={16} weight="fill" className="text-emerald-deep" />
              <span>Call {siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      <WhatsAppGroupBanner />
    </div>
  );
}
