"use client";

import React, { useState, useTransition } from "react";
import { siteConfig } from "@/config/site";
import { submitLandingBooking, LandingBookingResponse } from "@/app/actions/landing-booking";
import {
  WhatsappLogo,
  PhoneCall,
  EnvelopeSimple,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle,
  PaperPlaneTilt,
  LockKey,
  CalendarCheck,
  WarningCircle,
} from "@phosphor-icons/react";

export function LandingForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<LandingBookingResponse | null>(null);

  const directWhatsAppUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Assalamu alaikum Alfacairo, I would like to book a spiritual consultation."
  )}`;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    startTransition(async () => {
      const res = await submitLandingBooking(result, formData);
      setResult(res);
      if (res.success) {
        form.reset();
      }
    });
  }

  return (
    <section id="book-consultation" className="py-14 sm:py-20 bg-ivory scroll-mt-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-light border border-emerald-deep/20 text-emerald-deep text-xs font-bold uppercase tracking-wider mb-3">
            <LockKey size={14} weight="fill" />
            <span>Confidential &amp; Private Consultation</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-charcoal tracking-tight">
            Reserve Your Consultation With Alfacairo
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted">
            Take the first step toward releasing unseen burdens and discovering spiritual peace. 
            Fill out the confidential form below, or reach out to us directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-gold-hairline shadow-soft">
            {result?.success ? (
              /* Success State */
              <div className="py-6 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-light border border-emerald-deep/30 text-emerald-deep flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={36} weight="fill" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal mb-2">
                  Consultation Request Received
                </h3>
                <p className="text-sm text-muted max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you for reaching out. We treat every spiritual inquiry with solemn confidentiality. 
                  Our office will contact you promptly to confirm your scheduled slot.
                </p>

                {result.whatsappUrl && (
                  <div className="p-5 rounded-2xl bg-emerald-light/60 border border-emerald-deep/20 mb-6">
                    <p className="text-xs font-semibold text-charcoal mb-3">
                      ⚡ Need an immediate response? Fast-track your confirmation directly with Alfacairo:
                    </p>
                    <a
                      href={result.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-emerald-deep text-white font-bold text-sm sm:text-base shadow-soft hover:bg-emerald-forest transition-colors"
                    >
                      <WhatsappLogo size={22} weight="fill" />
                      <span>Confirm Now on WhatsApp</span>
                    </a>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setResult(null)}
                  className="text-xs text-muted hover:text-charcoal underline"
                >
                  Submit another consultation request
                </button>
              </div>
            ) : (
              /* Booking Form */
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Honeypot field for anti-spam (hidden from users) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="honeypot-field">Do not fill this field</label>
                  <input
                    type="text"
                    id="honeypot-field"
                    name="honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {result && !result.success && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2.5">
                    <WarningCircle size={18} weight="fill" className="shrink-0 mt-0.5" />
                    <span>{result.message}</span>
                  </div>
                )}

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="landing-fullName"
                    className="block text-xs sm:text-sm font-bold text-charcoal mb-1.5"
                  >
                    Your Full Name <span className="text-crimson">*</span>
                  </label>
                  <input
                    type="text"
                    id="landing-fullName"
                    name="fullName"
                    required
                    placeholder="e.g. Alhaji Babatunde / Sister Fatima"
                    className="w-full px-4 py-3 rounded-xl bg-sand-50/50 border border-gold-hairline focus:border-emerald-deep focus:bg-white focus:outline-none transition-colors text-charcoal text-sm"
                  />
                  {result?.fieldErrors?.fullName && (
                    <p className="mt-1 text-xs text-crimson font-medium">
                      {result.fieldErrors.fullName[0]}
                    </p>
                  )}
                </div>

                {/* Phone & WhatsApp Number */}
                <div>
                  <label
                    htmlFor="landing-phone"
                    className="block text-xs sm:text-sm font-bold text-charcoal mb-1.5"
                  >
                    Phone / WhatsApp Number <span className="text-crimson">*</span>
                  </label>
                  <input
                    type="tel"
                    id="landing-phone"
                    name="phone"
                    required
                    placeholder="e.g. 0803 594 8898 or +234..."
                    className="w-full px-4 py-3 rounded-xl bg-sand-50/50 border border-gold-hairline focus:border-emerald-deep focus:bg-white focus:outline-none transition-colors text-charcoal text-sm"
                  />
                  {result?.fieldErrors?.phone && (
                    <p className="mt-1 text-xs text-crimson font-medium">
                      {result.fieldErrors.phone[0]}
                    </p>
                  )}
                </div>

                {/* Email Address (Optional) */}
                <div>
                  <label
                    htmlFor="landing-email"
                    className="block text-xs sm:text-sm font-bold text-charcoal mb-1.5"
                  >
                    Email Address <span className="text-muted font-normal text-xs">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    id="landing-email"
                    name="email"
                    placeholder="e.g. yourname@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-sand-50/50 border border-gold-hairline focus:border-emerald-deep focus:bg-white focus:outline-none transition-colors text-charcoal text-sm"
                  />
                </div>

                {/* Challenge Type */}
                <div>
                  <label
                    htmlFor="landing-challengeType"
                    className="block text-xs sm:text-sm font-bold text-charcoal mb-1.5"
                  >
                    Nature of Spiritual Challenge <span className="text-crimson">*</span>
                  </label>
                  <select
                    id="landing-challengeType"
                    name="challengeType"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-xl bg-sand-50/50 border border-gold-hairline focus:border-emerald-deep focus:bg-white focus:outline-none transition-colors text-charcoal text-sm"
                  >
                    <option value="" disabled>Select the primary reason for consultation...</option>
                    <option value="Unexplained Stagnation & Delayed Breakthrough">Unexplained Stagnation &amp; Delayed Breakthrough</option>
                    <option value="Chronic Restlessness, Heaviness & Bad Sleep">Chronic Restlessness, Heaviness &amp; Bad Sleep</option>
                    <option value="Marriage, Relationship & Family Peace">Marriage, Relationship &amp; Family Peace</option>
                    <option value="Spiritual Cleansing & Ruqyah Neutralization">Spiritual Cleansing &amp; Ruqyah Neutralization</option>
                    <option value="Protection from Evil Eye (Hasad) & Attacks">Protection from Evil Eye (Hasad) &amp; Attacks</option>
                    <option value="General Spiritual Guidance & Dua">General Spiritual Guidance &amp; Dua</option>
                  </select>
                </div>

                {/* Preferred Mode */}
                <div>
                  <label
                    htmlFor="landing-consultationMode"
                    className="block text-xs sm:text-sm font-bold text-charcoal mb-1.5"
                  >
                    Preferred Consultation Mode <span className="text-crimson">*</span>
                  </label>
                  <select
                    id="landing-consultationMode"
                    name="consultationMode"
                    required
                    defaultValue="Direct Phone / WhatsApp Consultation"
                    className="w-full px-4 py-3 rounded-xl bg-sand-50/50 border border-gold-hairline focus:border-emerald-deep focus:bg-white focus:outline-none transition-colors text-charcoal text-sm"
                  >
                    <option value="Direct Phone / WhatsApp Consultation">Direct Phone / WhatsApp Consultation (Worldwide)</option>
                    <option value="In-Person Consultation at Alfa Cairo House (Owode Egba)">In-Person Visit at Alfa Cairo House (Owode Egba, Ogun State)</option>
                  </select>
                </div>

                {/* Brief Message / Description */}
                <div>
                  <label
                    htmlFor="landing-message"
                    className="block text-xs sm:text-sm font-bold text-charcoal mb-1.5"
                  >
                    Briefly Describe the Situation <span className="text-muted font-normal text-xs">(Confidential)</span>
                  </label>
                  <textarea
                    id="landing-message"
                    name="message"
                    rows={3}
                    placeholder="Share any key background, symptoms, or how long this has been going on..."
                    className="w-full px-4 py-3 rounded-xl bg-sand-50/50 border border-gold-hairline focus:border-emerald-deep focus:bg-white focus:outline-none transition-colors text-charcoal text-sm resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full py-4 px-6 rounded-xl bg-emerald-deep text-white font-bold text-base sm:text-lg shadow-gold hover:bg-emerald-forest disabled:opacity-75 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 min-h-[52px]"
                >
                  {isPending ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting Request...</span>
                    </>
                  ) : (
                    <>
                      <PaperPlaneTilt size={20} weight="fill" />
                      <span>Confirm My Consultation Request</span>
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-muted flex items-center justify-center gap-1.5 pt-1">
                  <ShieldCheck size={14} weight="fill" className="text-emerald-deep" />
                  <span>Your submission is encrypted and kept 100% confidential.</span>
                </p>
              </form>
            )}
          </div>

          {/* Direct Contact Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Instant Contact Options Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-cream/70 border border-gold-hairline shadow-soft-sm">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-charcoal mb-2">
                Prefer Immediate Direct Contact?
              </h3>
              <p className="text-xs sm:text-sm text-muted mb-6 leading-relaxed">
                If your situation is urgent, you can reach out directly via WhatsApp, telephone, or visit our physical sanctuary.
              </p>

              <div className="space-y-3.5">
                {/* WhatsApp Direct */}
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-emerald-deep/20 hover:border-emerald-deep hover:bg-emerald-light/40 transition-all shadow-soft-sm group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-light text-emerald-deep flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <WhatsappLogo size={24} weight="fill" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-muted font-medium">WhatsApp Direct Line</div>
                    <div className="text-sm font-bold text-charcoal">{siteConfig.phoneDisplay}</div>
                  </div>
                </a>

                {/* Telephone Call */}
                <a
                  href={`tel:${siteConfig.phoneIntl}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-gold-hairline hover:border-emerald-deep hover:bg-cream transition-all shadow-soft-sm group"
                >
                  <div className="w-10 h-10 rounded-xl bg-sand-100 text-charcoal flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <PhoneCall size={22} weight="fill" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-muted font-medium">Telephone Call</div>
                    <div className="text-sm font-bold text-charcoal">{siteConfig.phoneDisplay}</div>
                  </div>
                </a>

                {/* Email Address */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-gold-hairline hover:border-emerald-deep hover:bg-cream transition-all shadow-soft-sm group"
                >
                  <div className="w-10 h-10 rounded-xl bg-sand-100 text-charcoal flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <EnvelopeSimple size={22} weight="fill" />
                  </div>
                  <div className="min-w-0 truncate">
                    <div className="text-xs text-muted font-medium">Email Inquiries</div>
                    <div className="text-sm font-bold text-charcoal truncate">{siteConfig.email}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Sanctuary Location Details */}
            <div className="p-6 rounded-3xl bg-white border border-gold-hairline shadow-soft-sm space-y-3.5">
              <div className="flex items-start gap-3">
                <MapPin size={22} weight="fill" className="text-emerald-deep shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-charcoal">Physical Prayer Sanctuary</h4>
                  <p className="text-xs text-muted mt-0.5 leading-relaxed">
                    {siteConfig.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-gold-hairline/40">
                <Clock size={20} weight="fill" className="text-emerald-deep shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-charcoal">Consultation Hours</h4>
                  <p className="text-xs text-muted mt-0.5">
                    {siteConfig.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
