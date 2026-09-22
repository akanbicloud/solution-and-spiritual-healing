import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "@/lib/cms";
import { siteConfig } from "@/config/site";
import { ArabicPassageBlock } from "@/components/ArabicPassageBlock";
import { PostShareButtons } from "@/components/PostShareButtons";
import { WhatsAppGroupBanner } from "@/components/WhatsAppGroupBanner";
import {
  CalendarBlank,
  Clock,
  ArrowLeft,
  Sparkle,
  Quotes,
  Globe,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Alfacairo Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [siteConfig.name],
      images: [{ url: post.coverImage }],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  // JSON-LD Article Schema
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.brand,
      logo: {
        "@type": "ImageObject",
        url: "https://alfacairo.com/images/logo.svg",
      },
    },
  };

  return (
    <article className="w-full flex flex-col py-6 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6 sm:mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-muted hover:text-emerald-deep transition-colors py-1.5"
          >
            <ArrowLeft size={16} weight="bold" className="rtl:rotate-180" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8 text-center sm:text-left rtl:sm:text-right">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-light border border-emerald-deep/20 text-emerald-deep text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkle size={13} weight="fill" className="text-gold" />
            {post.category}
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif text-charcoal tracking-tight leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center sm:justify-start rtl:sm:justify-end gap-x-4 gap-y-2 text-xs text-muted pb-6 border-b border-gold-hairline/60">
            <span className="flex items-center gap-1 font-medium">
              <CalendarBlank size={15} weight="bold" className="text-gold" />
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1 font-medium">
              <Clock size={15} weight="bold" />
              {post.readingTimeMinutes} min read
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="font-semibold text-emerald-deep">By {siteConfig.name}</span>
          </div>

          {/* Multilingual Notice */}
          <div className="mt-4 p-3 rounded-2xl bg-cream-light border border-gold-hairline/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 text-xs text-muted">
            <div className="flex items-center gap-2">
              <Globe size={16} weight="regular" className="text-emerald-deep flex-shrink-0" />
              <span>This article is available in English.</span>
            </div>
            <span className="text-[11px] text-emerald-deep font-semibold self-end sm:self-auto">
              Verified Original
            </span>
          </div>
        </header>

        {/* Featured Cover Image */}
        <div className="relative aspect-[16/10] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-soft-lg mb-8 sm:mb-12 border border-gold-hairline">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt || post.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Article Body Content */}
        <div className="prose prose-lg max-w-none space-y-6 text-charcoal leading-relaxed font-sans">
          {post.body.map((block, idx) => {
            if (block.type === "paragraph") {
              return (
                <p key={idx} className="text-base sm:text-lg text-charcoal/90 leading-relaxed">
                  {block.content}
                </p>
              );
            }
            if (block.type === "heading") {
              const HeadingTag = block.level === 2 ? "h2" : "h3";
              return (
                <HeadingTag
                  key={idx}
                  className="text-2xl sm:text-3xl font-bold font-serif text-charcoal pt-6 pb-2 border-b border-gold-hairline/40"
                >
                  {block.content}
                </HeadingTag>
              );
            }
            if (block.type === "arabicPassage") {
              return <ArabicPassageBlock key={idx} block={block} />;
            }
            if (block.type === "list") {
              return (
                <ul key={idx} className="space-y-2.5 my-4 list-disc list-inside text-sm sm:text-base text-charcoal/85">
                  {block.items.map((item, liIdx) => (
                    <li key={liIdx} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            if (block.type === "quote") {
              return (
                <blockquote
                  key={idx}
                  className="my-6 p-6 rounded-3xl bg-cream border-l-4 rtl:border-l-0 rtl:border-r-4 border-gold italic text-charcoal font-serif text-lg leading-relaxed relative"
                >
                  <Quotes size={24} weight="fill" className="text-gold/60 mb-2" />
                  <p>“{block.quote}”</p>
                  {block.author && (
                    <cite className="block mt-2 text-xs font-sans font-bold text-emerald-deep uppercase tracking-wider not-italic">
                      — {block.author}
                    </cite>
                  )}
                </blockquote>
              );
            }
            return null;
          })}
        </div>

        {/* Share Buttons and Divider */}
        <div className="mt-10 sm:mt-12 pt-6 pb-8 border-t border-b border-gold-hairline/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <PostShareButtons title={post.title} slug={post.slug} />

          <Link
            href="/book"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 sm:py-2.5 rounded-xl bg-emerald-deep hover:bg-emerald-forest text-white text-xs sm:text-sm font-bold shadow-soft transition-all min-h-[44px]"
          >
            <CalendarBlank size={16} weight="bold" className="text-gold-light" />
            <span>Book Consultation</span>
          </Link>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="my-12 sm:my-16">
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-charcoal mb-6">
              Related Reminders &amp; Guidance
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.id}
                  className="p-5 rounded-2xl bg-white border border-gold-hairline shadow-soft flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-emerald-deep uppercase">
                      {rel.category}
                    </span>
                    <h4 className="text-sm font-bold font-serif text-charcoal mt-1 line-clamp-2">
                      <Link href={`/blog/${rel.slug}`} className="hover:text-emerald-deep">
                        {rel.title}
                      </Link>
                    </h4>
                  </div>
                  <Link
                    href={`/blog/${rel.slug}`}
                    className="mt-4 text-xs font-bold text-emerald-deep inline-flex items-center gap-1"
                  >
                    <span>Read</span>
                    <ArrowRight size={12} weight="bold" className="rtl:rotate-180" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <WhatsAppGroupBanner />
    </article>
  );
}
