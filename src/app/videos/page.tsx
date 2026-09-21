import React from "react";
import Image from "next/image";
import { getMediaItems, getGalleryPhotos } from "@/lib/cms";
import { WhatsAppGroupBanner } from "@/components/WhatsAppGroupBanner";
import { WeeklyPrayerInvitation } from "@/components/WeeklyPrayerInvitation";
import { siteConfig } from "@/config/site";
import {
  VideoCamera,
  Images,
  Sparkle,
  YoutubeLogo,
  TiktokLogo,
  FacebookLogo,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos & Photo Gallery — Alfacairo",
  description:
    "Watch video lectures, spiritual reminders, and explore photos of Alfa Cairo House and traditional wellness preparations.",
};

export default async function VideosPage() {
  const mediaItems = await getMediaItems();
  const gallery = getGalleryPhotos();

  return (
    <div className="w-full flex flex-col py-12 sm:py-16">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-light border border-emerald-deep/20 text-emerald-deep text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkle size={14} weight="fill" className="text-gold" />
          Spiritual Media &amp; Archive
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold font-serif text-charcoal tracking-tight">
          Videos &amp; Gallery
        </h1>
        <div className="mt-2 font-arabic text-xl text-emerald-deep font-bold" dir="rtl">
          المرئيات ومعرض الصور التذكارية
        </div>
        <p className="mt-4 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          Recordings of Quranic supplications, spiritual teachings, and a visual journey through Alfa Cairo House in Owode Egba.
        </p>
      </section>

      {/* Official Channel Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* YouTube */}
          <a
            href={siteConfig.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl bg-white border border-gold-hairline p-6 shadow-soft hover:shadow-soft-lg hover:border-emerald-deep/40 transition-all flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200/60 flex items-center justify-center text-[#FF0000] shrink-0 group-hover:scale-110 transition-transform">
              <YoutubeLogo size={28} weight="fill" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-1">
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal/60">YouTube Channel</span>
                <ArrowUpRight size={16} weight="bold" className="text-muted group-hover:text-emerald-deep group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <h3 className="font-serif font-bold text-lg text-charcoal group-hover:text-emerald-deep transition-colors mt-0.5">
                @ismyl89
              </h3>
              <p className="text-xs text-muted mt-1 leading-relaxed">
                Full-length Quranic recitations, spiritual counsel lectures, and special prayer recordings.
              </p>
            </div>
          </a>

          {/* TikTok */}
          <a
            href={siteConfig.socials.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl bg-white border border-gold-hairline p-6 shadow-soft hover:shadow-soft-lg hover:border-emerald-deep/40 transition-all flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-zinc-100 border border-zinc-300/60 flex items-center justify-center text-charcoal shrink-0 group-hover:scale-110 transition-transform">
              <TiktokLogo size={28} weight="fill" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-1">
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal/60">TikTok Official</span>
                <ArrowUpRight size={16} weight="bold" className="text-muted group-hover:text-emerald-deep group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <h3 className="font-serif font-bold text-lg text-charcoal group-hover:text-emerald-deep transition-colors mt-0.5">
                @alhismailadewunmi
              </h3>
              <p className="text-xs text-muted mt-1 leading-relaxed">
                Daily Adhkar clips, short Quranic spiritual reminders, and live prayer broadcasts.
              </p>
            </div>
          </a>

          {/* Facebook */}
          <a
            href={siteConfig.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl bg-white border border-gold-hairline p-6 shadow-soft hover:shadow-soft-lg hover:border-emerald-deep/40 transition-all flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#1877F2] shrink-0 group-hover:scale-110 transition-transform">
              <FacebookLogo size={28} weight="fill" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-1">
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal/60">Facebook Community</span>
                <ArrowUpRight size={16} weight="bold" className="text-muted group-hover:text-emerald-deep group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <h3 className="font-serif font-bold text-lg text-charcoal group-hover:text-emerald-deep transition-colors mt-0.5">
                Alfa Cairo Official
              </h3>
              <p className="text-xs text-muted mt-1 leading-relaxed">
                Community prayer announcements, programme schedules, and fellowship updates.
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* Featured Weekly Live Prayer Invitation */}
      <WeeklyPrayerInvitation />

      {/* Videos Section (Embeds media items, hidden when empty) */}
      {mediaItems.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="flex items-center gap-2.5 mb-8">
            <VideoCamera size={24} weight="fill" className="text-emerald-deep" />
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-charcoal">
              Video Reminders &amp; Teachings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaItems.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl bg-white border border-gold-hairline overflow-hidden shadow-soft-lg p-4"
              >
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black/90">
                  <iframe
                    src={item.url}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
                <div className="p-4">
                  <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-emerald-light text-emerald-deep">
                    {item.type}
                  </span>
                  <h3 className="text-base font-bold font-serif text-charcoal mt-2">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Photo Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center gap-2.5 mb-8">
          <Images size={24} weight="fill" className="text-emerald-deep" />
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-charcoal">
            Sanctuary Photo Gallery
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((photo) => (
            <div
              key={photo.id}
              className="group rounded-3xl bg-white border border-gold-hairline overflow-hidden shadow-soft hover:shadow-soft-lg transition-all"
            >
              <div className="relative aspect-[4/3] w-full bg-cream-light overflow-hidden">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-sm font-bold font-serif text-charcoal">
                  {photo.title}
                </h3>
                {photo.caption && (
                  <p className="text-xs text-muted mt-1 leading-relaxed">
                    {photo.caption}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <WhatsAppGroupBanner />
    </div>
  );
}
