import React from "react";
import {
  Sparkle,
  ShieldCheck,
  House,
  HeartBreak,
  Flame,
  CheckCircle,
  Eye,
  ArrowsClockwise,
  Key,
} from "@phosphor-icons/react/dist/ssr";

export function LandingBenefits() {
  const problemsAndOutcomes = [
    {
      problem: "Unexplained Stagnation & Blocked Milestones",
      symptom:
        "You labor tirelessly, yet business contracts collapse at the eleventh hour, finances leak without explanation, or marriage proposals repeatedly fail.",
      outcome:
        "Spiritual neutralization of hidden blockages, focused prayer intervention, and divine opening (Fath) so your rightful endeavors finally bear fruit.",
      tag: "Career & Financial Elevation",
    },
    {
      problem: "Chronic Heaviness, Dread & Sleepless Nights",
      symptom:
        "Internal burning heat, sudden inexplicable panic, disturbing dreams, or waking up exhausted even when medical reports show clean health.",
      outcome:
        "Profound Ruqyah cleansing, peace of mind, restorative sleep, and total release from the spiritual heaviness weighing upon your spirit.",
      tag: "Mental Calm & Restful Sleep",
    },
    {
      problem: "Persistent Marital & Household Conflict",
      symptom:
        "Trivial disagreements exploding into destructive quarrels, emotional coldness between spouses, or negative energy permeating the atmosphere at home.",
      outcome:
        "Compassionate faith-based marital counsel, protective household prayers, and traditional cleansing remedies to restore love and serenity.",
      tag: "Family Harmony & Unity",
    },
    {
      problem: "The Evil Eye (Hasad) & Spiritual Attacks",
      symptom:
        "Sudden downward spiral following achievements, feelings of being watched or spiritually drained, and vulnerability to hostile intentions.",
      outcome:
        "Personalized spiritual shielding (Tahseen), tailored daily Adhkar regimens, and traditional wash protocols to establish enduring divine protection.",
      tag: "Spiritual Defense & Shielding",
    },
  ];

  const whatYouGet = [
    {
      icon: Key,
      title: "Unhurried, Attentive Listening",
      desc: "A completely safe, non-judgmental space where your full personal history and concerns are heard with genuine pastoral empathy.",
    },
    {
      icon: Sparkle,
      title: "Spiritual Discernment & Diagnosis",
      desc: "Clarity on whether your obstacles stem from spiritual interference, unseen envy, natural trial, or needed lifestyle adjustments.",
    },
    {
      icon: ShieldCheck,
      title: "Tailored Spiritual Prescription",
      desc: "Direct, practical instructions: specific Quranic passages, targeted supplications, and guidance on prayer-prepared botanical remedies.",
    },
    {
      icon: ArrowsClockwise,
      title: "Follow-Up Prayer Dedication",
      desc: "Continued supplication and sincere prayers dedicated on your behalf by Alfacairo following your session.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-ivory border-b border-gold-hairline/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-light border border-emerald-deep/20 text-emerald-deep text-xs font-bold uppercase tracking-wider mb-3">
            Outcomes &amp; Breakthrough
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-charcoal tracking-tight">
            What Kinds of Spiritual Challenges Are You Facing?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted">
            Spiritual distress rarely announces itself plainly. It usually manifests as relentless friction that no amount 
            of ordinary effort seems to overcome. Here is how your consultation brings clarity and relief:
          </p>
        </div>

        {/* 4 Outcome-Driven Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {problemsAndOutcomes.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-gold-hairline shadow-soft hover:shadow-soft-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-lg bg-emerald-light text-emerald-deep text-xs font-bold mb-4">
                  {item.tag}
                </span>

                <h3 className="text-lg sm:text-xl font-serif font-bold text-charcoal mb-3">
                  {item.problem}
                </h3>

                <div className="mb-4 p-3.5 rounded-xl bg-sand-50/60 border border-sand-200/50">
                  <p className="text-xs sm:text-sm text-muted">
                    <strong className="text-charcoal font-semibold">The burden:</strong> “{item.symptom}”
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-gold-hairline/40 flex items-start gap-2.5">
                <CheckCircle size={20} weight="fill" className="text-emerald-deep shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-charcoal font-medium leading-relaxed">
                  <strong className="text-emerald-deep font-bold">Your outcome:</strong> {item.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* What You Receive from Booking a Consultation */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-emerald-light/40 via-white to-cream/40 border border-emerald-deep/20 shadow-soft">
          <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-3xl font-serif font-bold text-charcoal">
              What You Receive During Your Private Consultation
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted">
              Every consultation is an intimate, dedicated session structured to give you answers, spiritual peace, and a clear path forward.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatYouGet.map((benefit, bIdx) => {
              const Icon = benefit.icon;
              return (
                <div key={bIdx} className="p-5 rounded-2xl bg-white border border-gold-hairline/70 shadow-soft-sm">
                  <div className="w-10 h-10 rounded-xl bg-emerald-deep text-white flex items-center justify-center mb-3.5 shadow-soft-sm">
                    <Icon size={22} weight="bold" />
                  </div>
                  <h4 className="text-sm sm:text-base font-serif font-bold text-charcoal mb-1.5">
                    {benefit.title}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Quick CTA inside section */}
          <div className="mt-8 sm:mt-10 text-center">
            <a
              href="#book-consultation"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-emerald-deep text-white font-bold text-sm sm:text-base shadow-gold hover:bg-emerald-forest transition-colors"
            >
              <span>Reserve Your Consultation Slot</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
