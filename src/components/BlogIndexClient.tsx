"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/content/posts";
import {
  MagnifyingGlass,
  ArrowRight,
  BookOpen,
  Clock,
  CalendarBlank,
} from "@phosphor-icons/react";
import { siteConfig } from "@/config/site";

export function BlogIndexClient({ posts }: { posts: Post[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Dua and adhkar",
    "Ruqyah and protection",
    "Patience and hope",
    "Family and home",
    "Product guides",
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts.find((p) => p.featured) || filteredPosts[0];
  const remainingPosts = featuredPost
    ? filteredPosts.filter((p) => p.id !== featuredPost.id)
    : filteredPosts;

  return (
    <div className="w-full">
      {/* Category Pills & Search */}
      <div className="bg-white rounded-3xl border border-gold-hairline/70 p-4 sm:p-6 shadow-soft mb-8 sm:mb-12 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 sm:gap-6">
        <div className="flex items-center gap-2 w-full lg:w-auto overflow-x-auto pb-1.5 lg:pb-0 lg:flex-wrap">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 min-h-[38px] flex items-center ${
                  isSelected
                    ? "bg-emerald-deep text-white shadow-soft"
                    : "bg-cream-light text-charcoal hover:bg-cream border border-gold-hairline/40"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="relative w-full lg:w-72">
          <input
            type="text"
            id="blog-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles and duas..."
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-cream-light border border-gold-hairline text-xs font-medium text-charcoal placeholder-muted focus:outline-none focus:ring-2 focus:ring-emerald-deep/40 focus:bg-white min-h-[42px]"
          />
          <MagnifyingGlass size={16} weight="bold" className="text-muted absolute left-3 top-1/2 -translate-y-1/2 rtl:left-auto rtl:right-3" />
        </div>
      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-gold-hairline p-8 max-w-xl mx-auto">
          <BookOpen size={48} weight="light" className="text-muted mx-auto mb-4 opacity-40" />
          <h3 className="text-xl font-bold font-serif text-charcoal">
            No articles match your selection
          </h3>
          <p className="text-sm text-muted mt-2 leading-relaxed">
            We regularly post new spiritual reminders and guides. In the meantime, join our WhatsApp group to receive weekly updates directly from Alfacairo.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="px-5 py-2.5 rounded-xl bg-emerald-deep text-white text-xs font-bold shadow-soft"
            >
              Reset Filters
            </button>
            <a
              href={siteConfig.whatsappGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gold text-charcoal text-xs font-bold shadow-soft"
            >
              Join WhatsApp Group
            </a>
          </div>
        </div>
      ) : (
        <>
          {/* Large Featured Post Banner */}
          {featuredPost && (
            <div className="mb-14">
              <div className="group rounded-3xl bg-white border border-gold-hairline overflow-hidden shadow-soft-lg hover:shadow-soft-lg transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[280px] lg:min-h-[420px] bg-cream">
                    <Image
                      src={featuredPost.coverImage}
                      alt={featuredPost.coverImageAlt || featuredPost.title}
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-deep text-white text-xs font-bold shadow-md">
                        Featured Article
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-5 sm:p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-muted mb-3">
                        <span className="font-semibold text-emerald-deep">
                          {featuredPost.category}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <CalendarBlank size={14} weight="bold" className="text-gold" />
                          {new Date(featuredPost.publishedAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} weight="bold" />
                          {featuredPost.readingTimeMinutes} min read
                        </span>
                      </div>

                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif text-charcoal group-hover:text-emerald-deep transition-colors leading-tight mb-3 sm:mb-4">
                        <Link href={`/blog/${featuredPost.slug}`}>
                          {featuredPost.title}
                        </Link>
                      </h2>

                      <p className="text-xs sm:text-base text-muted leading-relaxed line-clamp-3 sm:line-clamp-4">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gold-hairline/60">
                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-deep hover:bg-emerald-forest text-white font-bold text-xs sm:text-sm shadow-soft transition-all w-full sm:w-auto min-h-[40px]"
                      >
                        <span>Read Full Guide</span>
                        <ArrowRight size={14} weight="bold" className="rtl:rotate-180" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid of Remaining Posts */}
          {remainingPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {remainingPosts.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col rounded-3xl bg-white border border-gold-hairline/70 overflow-hidden shadow-soft hover:shadow-soft-lg hover-lift transition-all"
                >
                  <div className="relative aspect-[16/10] w-full bg-cream">
                    <Image
                      src={post.coverImage}
                      alt={post.coverImageAlt || post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3">
                      <span className="px-3 py-1 rounded-full bg-emerald-deep/90 text-white text-[10px] font-semibold backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-[11px] text-muted mb-2">
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span>•</span>
                      <span>{post.readingTimeMinutes} min read</span>
                    </div>

                    <h3 className="text-lg font-bold font-serif text-charcoal group-hover:text-emerald-deep transition-colors line-clamp-2 mb-2">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-muted line-clamp-3 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>

                    <div className="mt-5 pt-3 border-t border-gold-hairline/40">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-deep group-hover:text-emerald-forest transition-colors"
                      >
                        <span>Read Article</span>
                        <ArrowRight size={13} weight="bold" className="rtl:rotate-180" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
