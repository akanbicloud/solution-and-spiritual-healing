import React from "react";
import Link from "next/link";
import { WhatsAppGroupBanner } from "@/components/WhatsAppGroupBanner";
import { siteConfig } from "@/config/site";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateServiceSchema,
} from "@/lib/schema";
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
  title: "Spiritual Healing Services in Owode Egba | Solution Healing",
  description:
    "Explore the spiritual healing and guidance services from Spiritual and Solution Healing in Owode Egba, Ogun State. Book a session today.",
  openGraph: {
    title: "Spiritual Healing Services in Owode Egba | Solution Healing",
    description:
      "Explore the spiritual healing and guidance services from Spiritual and Solution Healing in Owode Egba, Ogun State. Book a session today.",
    url: `${siteConfig.url}/services`,
  },
  alternates: {
    canonical: "/services",
  },
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

const serviceFaqs = [
  {
    question: "How do spiritual consultations with Alfacairo work?",
    answer:
      "Consultations begin with a confidential assessment of your life circumstances, personal challenges, or spiritual burdens. Sheikh Ismail Adewunmi listens attentively and prescribes tailored Quranic supplications (Ruqyah), daily adhkar regimens, or natural traditional botanical preparations according to authentic Islamic ethics.",
  },
  {
    question: "Can I book a consultation if I live outside Ogun State or outside Nigeria?",
    answer:
      "Yes. Remote spiritual consultations are conducted via phone calls and WhatsApp audio sessions for clients across Nigeria (Lagos, Abuja, Port Harcourt, Ibadan, etc.) as well as international clients in the UK, United States, Canada, Saudi Arabia, and Europe. Distance is no barrier to heartfelt prayer.",
  },
  {
    question: "Are the remedies and prayers strictly compliant with Islamic teachings?",
    answer:
      "Yes. All supplications, Ruqyah recitations, and botanical preparations provided at Alfa Cairo Sanctuary are strictly grounded in Quranic teachings, authentic prophetic traditions, and lawful natural herbs. We never practice superstitious charms, sorcery, or un-Islamic rituals.",
  },
  {
    question: "How do I schedule an in-person session at Alfa Cairo House in Owode Egba?",
    answer:
      "You can reserve an appointment directly through our online booking page or by reaching out to our administrative WhatsApp line at +234 803 594 8898. Our sanctuary is located at Alfa Cairo House, Owode Egba, Ogun State, easily accessible from Lagos, Sagamu, and Abeokuta.",
  },
];

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]);

  const serviceSchemas = {
    "@context": "https://schema.org",
    "@graph": services.map((svc) =>
      generateServiceSchema({
        id: svc.id,
        name: svc.title,
        description: svc.shortDesc,
        path: "/services",
      })
    ),
  };

  const faqSchema = generateFAQSchema(serviceFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="w-full flex flex-col py-8 sm:py-16">
        {/* Header Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-emerald-light border border-emerald-deep/20 text-emerald-deep text-xs font-bold uppercase tracking-wider mb-4">
            Compassionate Spiritual Counselling
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-charcoal tracking-tight">
            Our Spiritual Services
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Rooted in prophetic supplication, Quranic remembrance, and time-honored traditional remedies. We guide you through life’s seasons with compassion, humility, and prayer.
          </p>
        </section>

        {/* Services Detailed Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((svc) => {
              const IconComp = svc.icon;
              return (
                <div
                  key={svc.id}
                  id={svc.id}
                  className="rounded-3xl bg-white border border-gold-hairline/80 p-5 sm:p-8 shadow-soft hover:shadow-soft-lg hover-lift transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-light text-emerald-deep flex items-center justify-center mb-5 sm:mb-6 border border-emerald-deep/20">
                      <IconComp size={26} weight="fill" />
                    </div>

                    <h2 className="text-lg sm:text-xl font-bold font-serif text-charcoal mb-2.5 sm:mb-3">
                      {svc.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-muted leading-relaxed mb-5 sm:mb-6">
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

                  <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gold-hairline/50 flex items-center gap-2.5 sm:gap-3">
                    <Link
                      href={`/book?service=${encodeURIComponent(svc.title)}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-deep hover:bg-emerald-forest text-white text-xs sm:text-sm font-bold shadow-soft transition-all min-h-[44px]"
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
                      className="p-3 rounded-xl bg-white hover:bg-cream border border-gold-hairline text-emerald-deep transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
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
          <div className="p-5 sm:p-8 rounded-3xl bg-cream border border-gold-hairline/70 text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-charcoal">
              Our Commitment to Spiritual Integrity
            </h3>
            <p className="text-xs sm:text-sm text-muted max-w-2xl mx-auto leading-relaxed">
              We do not manufacture miracles or make extravagant guarantees. Spiritual counsel is an act of sincere faith and supplication, trusting in God’s supreme decree while applying lawful traditional wellness remedies.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/book"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-deep text-white text-xs sm:text-sm font-bold shadow-soft min-h-[44px]"
              >
                <span>Schedule In-Person or Phone Session</span>
                <ArrowRight size={14} weight="bold" className="rtl:rotate-180" />
              </Link>
              <a
                href={`tel:${siteConfig.phoneIntl}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-gold-hairline text-charcoal text-xs sm:text-sm font-bold shadow-soft-sm min-h-[44px]"
              >
                <Phone size={16} weight="fill" className="text-emerald-deep" />
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </section>

        {/* Section: Service FAQs & GEO Direct Answers */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-emerald-light border border-emerald-deep/20 text-emerald-deep text-xs font-bold uppercase tracking-wider mb-3">
              Questions & Answers
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-charcoal">
              Frequently Asked Questions About Our Services
            </h2>
            <p className="mt-2 text-sm text-muted max-w-xl mx-auto">
              Clear, factual answers regarding consultations, confidentiality, remote prayer support, and Islamic spiritual principles.
            </p>
          </div>

          <div className="space-y-4">
            {serviceFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-gold-hairline/80 p-5 sm:p-6 shadow-soft"
              >
                <h3 className="text-base sm:text-lg font-bold font-serif text-charcoal mb-2">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <WhatsAppGroupBanner />
      </div>
    </>
  );
}

