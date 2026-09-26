import React from "react";
import { Quotes, Star, CheckCircle } from "@phosphor-icons/react/dist/ssr";

export function LandingSocialProof() {
  const testimonials = [
    {
      initials: "B.A.",
      name: "Alhaji B. A.",
      location: "Lagos / Commercial Real Estate",
      situation: "Persistent Business Stagnation & Delayed Approvals",
      quote:
        "For nearly two years, major government contract approvals were stalled without logical reason. I arranged an in-person session at Alfa Cairo House in Owode Egba. Alfacairo’s spiritual diagnosis was precise and compassionate. Following the recommended Ruqyah supplications and cleansing, the approvals came through within a month. Alhamdullilah.",
      verified: "Verified In-Person Consultation",
    },
    {
      initials: "M.O.",
      name: "Sister M. O.",
      location: "United Kingdom (Virtual Session)",
      situation: "Chronic Nighttime Anxiety & Heavy Chest Tightness",
      quote:
        "Living in the UK, I was having sudden episodes of panic, waking up at 3 AM drenched in cold sweat, and feeling a suffocating spiritual heaviness. We conducted a phone/WhatsApp consultation. Alfacairo prescribed specific Quranic passages and morning/evening Adhkar routines. My peace of mind returned within days.",
      verified: "Verified Virtual Consultation",
    },
    {
      initials: "K.T.",
      name: "Mr. & Mrs. K. T.",
      location: "Abeokuta, Ogun State",
      situation: "Severe Marital Tension & Unwarranted Conflict",
      quote:
        "Our marriage of seven years suddenly began deteriorating over petty arguments that felt spiritually unnatural. Alfacairo provided wise pastoral advice and guided us through protective home prayers and traditional botanical cleansing. The constant friction vanished, and serenity was restored to our household.",
      verified: "Verified Couple Consultation",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-cream/40 border-b border-gold-hairline/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-light border border-emerald-deep/20 text-emerald-deep text-xs font-bold uppercase tracking-wider mb-3">
            Real Transformations
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight">
            Hear From Those Who Found Peace &amp; Clarity
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted">
            Read authentic feedback from individuals and families who sought spiritual guidance at Alfa Cairo House.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-gold-hairline shadow-soft flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Quote icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} weight="fill" />
                    ))}
                  </div>
                  <Quotes size={24} weight="fill" className="text-sand-300" />
                </div>

                {/* Situation Tag */}
                <div className="inline-block px-2.5 py-1 rounded-md bg-sand-50 text-charcoal text-[11px] font-semibold mb-3 border border-sand-200/50">
                  {item.situation}
                </div>

                {/* Quote Text */}
                <blockquote className="text-xs sm:text-sm text-charcoal/90 leading-relaxed italic mb-6">
                  “{item.quote}”
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-gold-hairline/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-deep text-white font-serif font-bold text-xs flex items-center justify-center shrink-0">
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-charcoal font-serif">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-muted">{item.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-emerald-deep text-[11px] font-semibold">
                  <CheckCircle size={14} weight="fill" />
                  <span className="hidden sm:inline">Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pastoral Guarantee Banner */}
        <div className="mt-10 sm:mt-12 p-6 rounded-2xl bg-white border border-gold-hairline/80 text-center max-w-2xl mx-auto shadow-soft-sm">
          <p className="text-xs sm:text-sm text-muted">
            <strong className="text-charcoal font-semibold">Privacy Commitment:</strong> Client identities and details are kept strictly confidential in accordance with Islamic pastoral care standards. Names above are abbreviated for seeker discretion.
          </p>
        </div>
      </div>
    </section>
  );
}
