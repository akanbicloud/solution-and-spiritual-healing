import type { Metadata } from "next";
import Link from "next/link";
import { LockKey, EnvelopeSimple, Phone, ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Solution Spiritual Healing & Prayer (Alfacairo). Learn how we handle your personal consultation requests and contact information under Nigerian data protection principles.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="py-8 sm:py-16 bg-sand-50/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6 sm:mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-deep hover:underline py-1.5"
          >
            <ArrowLeft size={16} weight="bold" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-12 border border-gold-hairline/60 shadow-soft mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-light/60 text-emerald-deep text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Data Protection & Confidentiality</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-muted">
            Last Updated: September 2026 • Compliant with the Nigeria Data Protection Act (NDPA) and NDPR
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-12 border border-gold-hairline/60 shadow-soft space-y-8 text-sm sm:text-base text-charcoal/80 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-charcoal flex items-center gap-2">
              <LockKey size={20} weight="fill" className="text-emerald-deep" />
              1. Our Spiritual Commitment to Your Confidentiality
            </h2>
            <p>
              At <strong>{siteConfig.brand}</strong> (Alfacairo), we hold your trust, spiritual dilemmas, and personal information in the highest sanctity and reverence. Spiritual consultation, prayer counseling, and holistic herbal inquiries inherently touch upon intimate aspects of your life. We are committed to safeguarding every piece of data you share with us.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-charcoal">
              2. Information We Collect
            </h2>
            <p>
              When you interact with our website, request consultation sessions, or place herbal inquiries, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-muted">
              <li>
                <strong>Contact Identifiers:</strong> Your full name, telephone / WhatsApp number, and email address.
              </li>
              <li>
                <strong>Consultation Details:</strong> Preferred appointment date, preferred prayer consultation type (in-person at Owode Egba sanctuary or virtual via phone/WhatsApp), and notes you voluntarily provide describing your spiritual inquiry.
              </li>
              <li>
                <strong>Product Order Inquiries:</strong> Selected herbal wellness items added to your WhatsApp order drawer.
              </li>
              <li>
                <strong>Technical Information:</strong> Standard anonymized server logs, browser type, and language preference cookies to remember your display choices (English, Arabic, Yoruba, or Hausa).
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-charcoal">
              3. No Financial Information Collection
            </h2>
            <p className="bg-emerald-light/30 p-4 rounded-2xl border border-emerald-deep/10 text-emerald-900 font-medium">
              Important: We do not process credit cards, debit cards, or bank payments on this website. No bank account numbers or financial details are ever stored or requested through our web forms. All consultations and herbal discussions are confirmed directly with Alfacairo via verified WhatsApp or in person.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-charcoal">
              4. How We Use Your Information
            </h2>
            <p>We use your information strictly for legitimate pastoral and service purposes:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-muted">
              <li>To confirm your appointment schedule and send consultation notifications via email and WhatsApp.</li>
              <li>To prepare personalized Quranic prayer sessions and traditional herbal recommendations.</li>
              <li>To respond to your inquiries submitted via our contact and booking forms.</li>
              <li>To provide seamless multilingual browsing experience.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-charcoal">
              5. Non-Disclosure & Third Parties
            </h2>
            <p>
              We will <strong>never sell, rent, or trade</strong> your personal information or consultation disclosures to third parties or marketing brokers. Spiritual discussions remain confidential between you and Alfacairo, protected by traditional pastoral ethics and Nigerian privacy laws.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-charcoal">
              6. Your Rights
            </h2>
            <p>
              Under the Nigeria Data Protection Act (NDPA), you have the right to request access to any personal data we hold about you, request corrections, or ask for complete deletion of your booking history from our contact records at any time.
            </p>
          </section>

          <section className="space-y-3 border-t border-gold-hairline/60 pt-6">
            <h2 className="text-xl font-serif font-bold text-charcoal">
              7. Contact Our Privacy Administrator
            </h2>
            <p>
              For any questions regarding this Privacy Policy or your personal information, please reach out to us directly:
            </p>
            <div className="space-y-2 text-muted">
              <div className="flex items-start sm:items-center gap-2">
                <EnvelopeSimple size={18} weight="fill" className="text-emerald-deep shrink-0 mt-0.5 sm:mt-0" />
                <span className="break-all sm:break-normal">Email: contact@alfacairoprayer.com / alfacairo01@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} weight="fill" className="text-emerald-deep shrink-0" />
                <span>Phone / WhatsApp: {siteConfig.phoneDisplay}</span>
              </div>
              <p className="mt-2 text-xs">
                Physical Sanctuary: {siteConfig.address}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
