import type { Metadata } from "next";
import Link from "next/link";
import { ShieldWarning, Handshake, ArrowLeft, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service, spiritual counseling disclaimers, and traditional herbal guidance disclosures for Solution Spiritual Healing & Prayer (Alfacairo).",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
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
            <span>Pastoral & Wellness Terms</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-xs sm:text-sm text-muted">
            Last Updated: September 2026 • Please read carefully before booking or ordering
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-12 border border-gold-hairline/60 shadow-soft space-y-8 text-sm sm:text-base text-charcoal/80 leading-relaxed">
          {/* Section 1: Nature of Services */}
          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-charcoal flex items-center gap-2">
              <Handshake size={20} weight="fill" className="text-emerald-deep" />
              1. Nature of Spiritual & Prayer Counseling
            </h2>
            <p>
              <strong>{siteConfig.brand}</strong>, guided by Alfacairo, provides traditional Islamic prayer (Dua), Quranic recitation, spiritual counseling, and herbal wellness remedies based on long-standing natural traditions. All spiritual advice and consultations are intended for moral support, spiritual comfort, and inner tranquility.
            </p>
          </section>

          {/* Section 2: Medical Disclaimer */}
          <section className="space-y-3 bg-amber-50/70 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-amber-200">
            <h2 className="flex items-center gap-2 text-amber-900 font-serif font-bold text-lg">
              <ShieldWarning size={22} weight="fill" className="text-amber-700" />
              2. Important Health & Medical Disclaimer
            </h2>
            <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed font-medium">
              {siteConfig.disclaimer}
            </p>
            <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
              Spiritual prayers and herbal preparations are complementary traditions and are not intended to diagnose, cure, or treat clinical medical conditions. If you are experiencing acute medical emergencies or taking prescribed pharmaceutical medications, you must always consult qualified medical practitioners or visit a certified hospital.
            </p>
          </section>

          {/* Section 3: Consultation Appointments */}
          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-charcoal flex items-center gap-2">
              <CheckCircle size={20} weight="fill" className="text-emerald-deep" />
              3. Appointments & Sanctuary Visits
            </h2>
            <p>
              Consultations can be booked for in-person attendance at our physical sanctuary in Owode Egba, Ogun State, or virtually via phone and WhatsApp. Submitting a booking request via this website acts as a reservation inquiry. An appointment is confirmed once acknowledged directly by Alfacairo or our administrative assistant.
            </p>
            <p>
              Please notify us at least 24 hours in advance if you need to reschedule your appointment.
            </p>
          </section>

          {/* Section 4: Traditional Remedies & Orders */}
          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-charcoal flex items-center gap-2">
              <CheckCircle size={20} weight="fill" className="text-emerald-deep" />
              4. Traditional Herbal Remedies & Orders
            </h2>
            <p>
              Product descriptions on this website describe traditional uses and botanical properties. In accordance with consumer guidance, product pricing and delivery arrangements are handled on an individual consultation basis via direct WhatsApp communication to ensure appropriate guidance is given before any remedy is dispensed.
            </p>
            <p>
              Always store herbal preparations in cool, dry conditions out of reach of children. Discontinue use and contact us or a physician if any unexpected personal sensitivity occurs.
            </p>
          </section>

          {/* Section 5: Code of Respect & Conduct */}
          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-charcoal flex items-center gap-2">
              <CheckCircle size={20} weight="fill" className="text-emerald-deep" />
              5. Respect & Code of Conduct
            </h2>
            <p>
              Our sanctuary is a sacred place of prayer, healing, and peace. All seekers and visitors are expected to maintain respect, modesty, and sincere intentions when visiting our physical sanctuary in Owode Egba or when participating in our community WhatsApp group.
            </p>
          </section>

          {/* Section 6: Contact Information */}
          <section className="space-y-3 border-t border-gold-hairline/60 pt-6">
            <h2 className="text-xl font-serif font-bold text-charcoal">
              6. Inquiries Regarding Terms
            </h2>
            <p className="text-muted">
              If you have any questions regarding these terms, please contact:
            </p>
            <div className="text-muted space-y-1 text-xs sm:text-sm">
              <p><strong>{siteConfig.brand}</strong> (Alfacairo)</p>
              <p>Owode Egba, Ogun State, Nigeria</p>
              <p>Telephone: {siteConfig.phoneDisplay}</p>
              <p>WhatsApp: {siteConfig.phoneDisplay}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
