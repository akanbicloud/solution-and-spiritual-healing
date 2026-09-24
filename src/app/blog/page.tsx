import React from "react";
import { getPosts } from "@/lib/cms";
import { BlogIndexClient } from "@/components/BlogIndexClient";
import { WhatsAppGroupBanner } from "@/components/WhatsAppGroupBanner";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { Rss } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spiritual Guidance and Wellness Blog | Solution Healing",
  description:
    "Read practical articles on spiritual guidance, patience, family peace and wellness from Spiritual and Solution Healing in Owode Egba.",
  openGraph: {
    title: "Spiritual Guidance and Wellness Blog | Solution Healing",
    description:
      "Read practical articles on spiritual guidance, patience, family peace and wellness from Spiritual and Solution Healing in Owode Egba.",
    url: `${siteConfig.url}/blog`,
  },
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const posts = await getPosts();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: posts.map((post, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `${siteConfig.url}/blog/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <div className="w-full flex flex-col py-8 sm:py-16">
        {/* Header Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-light border border-emerald-deep/20 text-emerald-deep text-xs font-bold uppercase tracking-wider mb-4">
            Spiritual Reflections &amp; Guidance
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-charcoal tracking-tight">
            The Alfacairo Blog — Reminders and Guidance
          </h1>
          <div className="mt-2 font-arabic text-lg sm:text-xl text-emerald-deep font-bold" dir="rtl">
            مدونة التذكير والإرشاد النبوي
          </div>
          <p className="mt-4 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Timely reminders on authentic morning and evening adhkar, patient perseverance during life delays, household protection, and traditional botanical guides.
          </p>

          <div className="mt-4 inline-flex items-center gap-2">
            <a
              href="/rss.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1.5 min-h-[36px] rounded-full hover:bg-amber-100 transition-colors"
            >
              <Rss size={14} weight="bold" />
              <span>Subscribe via RSS Feed</span>
            </a>
          </div>
        </section>

        {/* Main Blog Client Container */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <BlogIndexClient posts={posts} />
        </section>

        <WhatsAppGroupBanner />
      </div>
    </>
  );
}

