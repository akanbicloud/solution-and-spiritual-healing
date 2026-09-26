"use client";

import React, { useState } from "react";
import {
  Sparkle,
  BookOpen,
  ShieldCheck,
  Flame,
  Handshake,
  Compass,
  CheckCircle,
  CaretDown,
  CaretUp,
  ArrowRight,
} from "@phosphor-icons/react";

interface SpiritualProblemItem {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  outcome: string;
  tag: string;
}

// Real list of spiritual challenges drawn directly from the main site (/services and homepage)
const spiritualProblems: SpiritualProblemItem[] = [
  {
    id: "cleansing",
    title: "Spiritual Heaviness & Stagnation",
    icon: Sparkle,
    description:
      "When persistent obstacles, unexplainable bad luck, or a heavy atmosphere linger despite your sincere hard work.",
    outcome:
      "Cleansing prayers and traditional neutralization help restore spiritual lightness, clarity, and renewed forward momentum.",
    tag: "Spiritual Cleansing",
  },
  {
    id: "prayer-guidance",
    title: "Uncertainty & Seeking Divine Direction",
    icon: BookOpen,
    description:
      "Facing confusing life transitions, troubled decisions, or an inner spiritual dryness that clouds your judgment.",
    outcome:
      "Confidential Quranic counsel and structured daily supplications bring tranquility, confidence, and peace of mind.",
    tag: "Spiritual Guidance",
  },
  {
    id: "evil-eye",
    title: "Envy & The Evil Eye (Hasad)",
    icon: ShieldCheck,
    description:
      "Sudden setbacks following success, hostile jealousy, or unexplainable distress disrupting your personal accomplishments.",
    outcome:
      "Fortifying spiritual shields through authentic Adhkar, Ruqyah, and traditional botanicals establish lasting protection.",
    tag: "Spiritual Protection",
  },
  {
    id: "breakthrough",
    title: "Blocked Breakthroughs & Career Delays",
    icon: Flame,
    description:
      "Experiencing repeated closed doors in business, missed career promotions, or stalled financial endeavors without physical cause.",
    outcome:
      "Focused prayer support targets spiritual delays, cultivating divine opening (Fath) so your lawful efforts bear fruit.",
    tag: "Life Breakthrough",
  },
  {
    id: "marital",
    title: "Marital & Household Disharmony",
    icon: Handshake,
    description:
      "Unexplained tension between spouses, unprovoked quarrels, or negative energy disturbing the warmth and sanctity of home life.",
    outcome:
      "Compassionate faith-based mediation and family protection prayers nurture mutual affection, patience, and home serenity.",
    tag: "Family Harmony",
  },
  {
    id: "peace-of-mind",
    title: "Fear, Restlessness & Night Disturbances",
    icon: Compass,
    description:
      "Relentless inner anxiety, sudden panic, distressing dreams, or waking up exhausted even when medical health is sound.",
    outcome:
      "Gentle Quranic reassurance and calming evening remedies anchor your heart, granting restorative sleep and mental calm.",
    tag: "Peace of Mind",
  },
  {
    id: "success",
    title: "Elevation, Goodwill & Open Doors",
    icon: CheckCircle,
    description:
      "Preparing for high-stakes milestones, business expansions, overseas travel, or crucial job interviews requiring divine favor.",
    outcome:
      "Prayer-backed spiritual mentoring and traditional kits prepare your spirit to attract goodwill and fruitful opportunities.",
    tag: "Elevation & Favor",
  },
];

export function LandingSpiritualProblems() {
  const [showAll, setShowAll] = useState(false);

  // Show first 6 by default for a neat 3x2 grid, expand to all 7 on toggle
  const displayedProblems = showAll ? spiritualProblems : spiritualProblems.slice(0, 6);

  return (
    <section className="py-14 sm:py-20 bg-cream-light/60 border-b border-gold-hairline/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-light border border-emerald-deep/20 text-emerald-deep text-xs font-bold uppercase tracking-wider mb-3">
            Core Areas of Practice
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-charcoal tracking-tight">
            Spiritual Challenges We Help You Overcome
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed">
            Spiritual trials are a natural part of human life. With compassionate listening, authentic Quranic prayer,
            and ethical traditional remedies, you do not have to carry the burden alone.
          </p>
        </div>

        {/* 3-Column Desktop Grid / 1-Column Mobile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedProblems.map((problem) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.id}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white border border-gold-hairline/80 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-light border border-emerald-deep/20 text-emerald-deep flex items-center justify-center shadow-soft-sm group-hover:bg-emerald-deep group-hover:text-white transition-colors duration-300">
                      <Icon size={24} weight="duotone" />
                    </div>
                    <span className="text-[11px] font-bold text-emerald-deep/80 px-2.5 py-1 rounded-full bg-emerald-light/60">
                      {problem.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-charcoal group-hover:text-emerald-deep transition-colors mb-2.5">
                    {problem.title}
                  </h3>

                  {/* Calm, Dignified Description */}
                  <p className="text-xs sm:text-sm text-muted leading-relaxed mb-4">
                    {problem.description}
                  </p>
                </div>

                {/* Outcome Focus */}
                <div className="pt-3.5 border-t border-gold-hairline/50">
                  <p className="text-xs text-charcoal leading-relaxed">
                    <strong className="text-emerald-deep font-semibold">Expected Outcome:</strong>{" "}
                    {problem.outcome}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More / Show Less Toggle (especially useful on mobile) */}
        {spiritualProblems.length > 6 && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-emerald-deep/30 bg-white hover:bg-emerald-light text-emerald-deep text-xs sm:text-sm font-bold shadow-soft-sm transition-all"
            >
              <span>{showAll ? "Show Fewer Areas" : "Show All 7 Focus Areas"}</span>
              {showAll ? <CaretUp size={16} weight="bold" /> : <CaretDown size={16} weight="bold" />}
            </button>
          </div>
        )}

        {/* Micro CTA underneath grid */}
        <div className="mt-10 sm:mt-12 text-center p-6 rounded-2xl bg-white/80 border border-gold-hairline/60 max-w-2xl mx-auto shadow-soft-sm">
          <p className="text-xs sm:text-sm text-muted mb-3">
            Do you recognize your situation in one of these areas? Share your concerns in confidence.
          </p>
          <a
            href="#book-consultation"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-deep hover:text-emerald-forest transition-colors"
          >
            <span>Discuss your specific case in a private consultation</span>
            <ArrowRight size={14} weight="bold" />
          </a>
        </div>
      </div>
    </section>
  );
}
