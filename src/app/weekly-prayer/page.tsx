import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { WeeklyPrayerInvitation } from "@/components/WeeklyPrayerInvitation";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { nextWeeklyPrayer } from "@/lib/weeklyPrayer";

// Re-rendered hourly so the "next session" date and the Event data stay current.
export const revalidate = 3600;

const TITLE = "Wednesday Prayer: An-Najaat Wa Tahseenaat | Alfa Cairo Spiritual";
const DESCRIPTION =
  "An-Najaat Wa Tahseenaat is the weekly live prayer led by Alfa Cairo (Alfacairo, Sheikh Ismail Adewunmi). Every Wednesday at 10:00 PM Lagos time, streamed live on Facebook.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "An-Najaat Wa Tahseenaat",
    "Alfa Cairo Wednesday prayer",
    "weekly prayer Wednesday night",
    "Alfacairo live prayer",
    "Wednesday night prayer Nigeria",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${siteConfig.url}/weekly-prayer`,
    images: [{ url: `${siteConfig.url}${siteConfig.weeklyPrayer.flyerImage}`, alt: "An-Najaat Wa Tahseenaat weekly prayer flyer" }],
  },
  alternates: { canonical: "/weekly-prayer" },
};

export default function WeeklyPrayerPage() {
  const wp = siteConfig.weeklyPrayer;
  const next = nextWeeklyPrayer();
  const siteUrl = siteConfig.url;

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": `${siteUrl}/weekly-prayer#event`,
    name: `${wp.title} — ${wp.subtitle}`,
    alternateName: ["Alfa Cairo Wednesday prayer", "Weekly Wednesday prayer"],
    description: `${wp.subtitle} led by Sheikh Ismail Adewunmi (Alfacairo, Alfa Cairo). Held every ${wp.scheduleDay} at ${wp.scheduleTime} (${wp.timezone}) and streamed live on Facebook.`,
    startDate: next.iso,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: { "@type": "VirtualLocation", url: wp.streamUrl },
    image: [`${siteUrl}${wp.flyerImage}`],
    inLanguage: ["en", "ar"],
    organizer: { "@id": `${siteUrl}/#organization` },
    performer: { "@id": `${siteUrl}/#alfacairo` },
    url: `${siteUrl}/weekly-prayer`,
    eventSchedule: {
      "@type": "Schedule",
      byDay: "https://schema.org/Wednesday",
      startTime: "22:00:00",
      scheduleTimezone: "Africa/Lagos",
      repeatFrequency: "P1W",
    },
  };

  const faqs = [
    {
      question: "When is the weekly Wednesday prayer with Alfa Cairo?",
      answer: `An-Najaat Wa Tahseenaat is held every ${wp.scheduleDay} at ${wp.scheduleTime} (${wp.timezone}). The next session is ${next.label} at ${wp.scheduleTime}.`,
    },
    {
      question: "Where can I watch An-Najaat Wa Tahseenaat?",
      answer: "It is streamed live on Facebook. The live link is on this page, and the replay stays on the same Facebook page.",
    },
    {
      question: "Who leads An-Najaat Wa Tahseenaat?",
      answer: "Sheikh Ismail Adewunmi (Alfacairo, also known as Alfa Cairo) leads the weekly gathering from Alfa Cairo House in Owode Egba, Ogun State, Nigeria.",
    },
  ];

  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Wednesday Prayer", path: "/weekly-prayer" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-6 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold font-serif text-charcoal tracking-tight">
          Wednesday Prayer: An-Najaat Wa Tahseenaat
        </h1>
        <p className="mt-3 text-sm sm:text-lg text-muted leading-relaxed">
          The weekly live prayer led by Alfa Cairo (Alfacairo, Sheikh Ismail Adewunmi) of Spiritual and Solution Healing.
        </p>

        <dl className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="rounded-2xl bg-white border border-gold-hairline p-4 shadow-soft-sm">
            <dt className="text-xs font-bold uppercase tracking-wider text-emerald-deep">When</dt>
            <dd className="mt-1 text-sm text-charcoal">Every {wp.scheduleDay}, {wp.scheduleTime} ({wp.timezone})</dd>
          </div>
          <div className="rounded-2xl bg-white border border-gold-hairline p-4 shadow-soft-sm">
            <dt className="text-xs font-bold uppercase tracking-wider text-emerald-deep">Next session</dt>
            <dd className="mt-1 text-sm text-charcoal">{next.label}</dd>
          </div>
          <div className="rounded-2xl bg-white border border-gold-hairline p-4 shadow-soft-sm">
            <dt className="text-xs font-bold uppercase tracking-wider text-emerald-deep">Where</dt>
            <dd className="mt-1 text-sm text-charcoal">
              Live on{" "}
              <a href={wp.streamUrl} target="_blank" rel="noopener noreferrer" className="underline text-emerald-deep">
                Facebook
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <WeeklyPrayerInvitation />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-charcoal text-center mb-6">
          Questions about the Wednesday prayer
        </h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.question} className="rounded-2xl bg-cream-light/60 border border-gold-hairline/70 p-5 shadow-soft">
              <h3 className="text-base sm:text-lg font-bold font-serif text-charcoal mb-1.5">{f.question}</h3>
              <p className="text-sm sm:text-base text-charcoal/90 leading-relaxed">{f.answer}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          Want a private consultation too?{" "}
          <Link href="/book" className="underline text-emerald-deep font-semibold">Book with Alfa Cairo</Link>.
        </p>
      </section>
    </>
  );
}
