"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import {
  Broadcast,
  CalendarBlank,
  Clock,
  FacebookLogo,
  WhatsappLogo,
  ShareNetwork,
  Copy,
  Check,
  Sparkle,
  ArrowUpRight,
  ShieldCheck,
  Heart,
} from "@phosphor-icons/react";

export function WeeklyPrayerInvitation() {
  const [copied, setCopied] = useState(false);

  const invitationShareText = `🌟 YOU'RE INVITED TO AN-NAJAAT WA TAHSEENAAT! 🌟
Weekly Success & Divine Protection Prayer with Sheikh Ismail Adewunmi (Alfacairo)

🕊️ TONIGHT'S THE NIGHT! Join us for a life-transforming prayer session.
"وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا" — And whoever fears Allah, He will make for him a way out!

📆 Every Wednesday Night
⏰ 10:00 PM (Lagos / West Africa Time, GMT+1)
📺 Live Stream on Facebook: ${siteConfig.weeklyPrayer.streamUrl}

Come with your beautiful intentions — Success is your portion, protection is your covering! 🙏✨`;

  const handleCopy = () => {
    navigator.clipboard.writeText(invitationShareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(invitationShareText)}`;

  return (
    <section
      id="weekly-prayer-session"
      className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-b from-cream via-sand-50/70 to-ivory border-y border-gold-hairline/80"
    >
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-deep/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-crimson/10 border border-crimson/20 text-crimson text-xs font-bold uppercase tracking-widest mb-4 animate-pulse">
            <span className="w-2.5 h-2.5 rounded-full bg-crimson inline-block animate-ping" />
            <Broadcast size={16} weight="bold" />
            <span>Weekly Live Gathering • Every Wednesday 10:00 PM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-charcoal tracking-tight leading-tight">
            An-Najaat Wa Tahseenaat
          </h2>

          <div className="mt-2 font-arabic text-2xl sm:text-3xl text-emerald-deep font-bold" dir="rtl">
            النجاة والتحصينات • دعاء النجاح والحفظ الإلهي
          </div>

          <p className="mt-3 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed">
            Weekly live spiritual gathering for breakthrough, divine shielding from negative energy, and experiencing answered prayers under the guidance of Sheikh Ismail Adewunmi (Alfacairo).
          </p>
        </div>

        {/* Main Feature Card */}
        <div className="rounded-3xl bg-white border border-gold-hairline shadow-soft-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Column: Real Flyer Presentation */}
          <div className="lg:col-span-5 bg-cream p-6 sm:p-8 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-gold-hairline/70 relative">
            <div className="relative w-full max-w-sm aspect-[2/3] rounded-2xl overflow-hidden shadow-soft-lg border-2 border-gold/40 group">
              <Image
                src={siteConfig.weeklyPrayer.flyerImage}
                alt="An-Najaat Wa Tahseenaat Official Weekly Prayer Flyer — Sheikh Ismail Adewunmi (Alfacairo)"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-xs font-bold flex items-center gap-1.5">
                  <Broadcast size={16} weight="fill" className="text-crimson" />
                  Live Every Wednesday • 10:00 PM
                </span>
              </div>
            </div>

            {/* Flyer Quick Caption */}
            <div className="mt-4 text-center">
              <span className="text-xs font-bold text-emerald-deep uppercase tracking-wider block">
                Official Programme Flyer
              </span>
              <p className="text-[11px] text-muted mt-0.5">
                Sheikh Ismail Adewunmi (Alfacairo) • Nakeebul Ashraaf awis
              </p>
            </div>
          </div>

          {/* Right Column: High-Impact Compelling Invite Write-up */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              {/* Salutation / Friendly Hook */}
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-primary">
                <Sparkle size={16} weight="fill" className="text-gold" />
                <span>You Are Warmly Invited • Tonight’s The Night!</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-charcoal leading-snug">
                Step into Your Season of Answered Prayers &amp; Divine Covering
              </h3>

              <div className="text-xs sm:text-sm text-charcoal/80 space-y-3 leading-relaxed">
                <p>
                  <strong>New to our community?</strong> Welcome to a home of faith, peace, and spiritual transformation. Follow our page today, turn on notifications, and never walk through life’s trials alone!
                </p>
                <p>
                  Whether you are seeking <strong>success in your business, spiritual protection over your children, relief from unexplained heavy burdens, or marital peace</strong>, tonight is your appointed time.
                </p>
              </div>

              {/* Quranic Anchor Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-cream border border-gold/30 space-y-2">
                <div className="flex items-center justify-between text-xs text-emerald-deep font-bold">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck size={16} weight="fill" />
                    Spiritual Anchor
                  </span>
                  <span>{siteConfig.weeklyPrayer.quranVerseSurah}</span>
                </div>
                <div
                  className="font-arabic text-xl sm:text-2xl text-charcoal font-bold text-right pt-1 leading-relaxed"
                  dir="rtl"
                >
                  {siteConfig.weeklyPrayer.quranVerseArabic}
                </div>
                <p className="text-xs sm:text-sm text-muted italic">
                  “{siteConfig.weeklyPrayer.quranVerseTranslation}”
                </p>
              </div>

              {/* Schedule Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-ivory border border-gold-hairline/60 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-light text-emerald-deep shrink-0">
                    <CalendarBlank size={20} weight="fill" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase text-muted">Gathering Day</div>
                    <div className="text-xs sm:text-sm font-bold text-charcoal">
                      Every Wednesday Night
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-ivory border border-gold-hairline/60 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-light text-emerald-deep shrink-0">
                    <Clock size={20} weight="fill" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase text-muted">Broadcast Time</div>
                    <div className="text-xs sm:text-sm font-bold text-charcoal">
                      10:00 PM (GMT+1)
                    </div>
                  </div>
                </div>
              </div>

              {/* Faith Motto */}
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-deep bg-emerald-light/40 px-3.5 py-2 rounded-xl border border-emerald-deep/10">
                <Heart size={16} weight="fill" className="text-crimson shrink-0" />
                <span>
                  “Come with your beautiful intentions — Success is your portion, protection is your covering!”
                </span>
              </div>
            </div>

            {/* Action Buttons & Share Bar */}
            <div className="pt-4 border-t border-gold-hairline/60 space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* Primary CTA: Facebook Live Link */}
                <a
                  href={siteConfig.weeklyPrayer.streamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="weekly-prayer-facebook-live-btn"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#1877F2] hover:bg-[#0c63d4] text-white font-bold text-sm shadow-soft hover:shadow-soft-lg hover-lift transition-all"
                >
                  <FacebookLogo size={20} weight="fill" />
                  <span>Join Live on Facebook</span>
                  <ArrowUpRight size={16} weight="bold" />
                </a>

                {/* Secondary CTA: WhatsApp Group */}
                <a
                  href={siteConfig.whatsappGroup}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="weekly-prayer-whatsapp-group-btn"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-emerald-deep hover:bg-emerald-forest text-white font-bold text-sm shadow-soft hover-lift transition-all"
                >
                  <WhatsappLogo size={20} weight="fill" className="text-gold-light" />
                  <span>Join WhatsApp Prayer Group</span>
                </a>
              </div>

              {/* Quick Copy & Share Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted pt-1">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cream hover:bg-cream-light border border-gold-hairline text-charcoal font-semibold transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check size={14} weight="bold" className="text-emerald-deep" />
                        <span className="text-emerald-deep">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} weight="bold" />
                        <span>Copy Invitation Text</span>
                      </>
                    )}
                  </button>

                  <a
                    href={whatsappShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cream hover:bg-cream-light border border-gold-hairline text-charcoal font-semibold transition-colors"
                  >
                    <ShareNetwork size={14} weight="bold" className="text-emerald-deep" />
                    <span>Share on WhatsApp</span>
                  </a>
                </div>

                <span className="text-[11px] text-muted italic">
                  Live broadcast links open directly in Facebook
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
