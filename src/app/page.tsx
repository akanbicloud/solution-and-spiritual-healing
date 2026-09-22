import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  getProducts,
  getDuaOfTheDay,
  getPosts,
  getSiteSettings,
  getTestimonials,
} from "@/lib/cms";
import { siteConfig } from "@/config/site";
import { ProductCard } from "@/components/ProductCard";
import { DuaOfTheDayCard } from "@/components/DuaOfTheDayCard";
import { WhatsAppGroupBanner } from "@/components/WhatsAppGroupBanner";
import { WeeklyPrayerInvitation } from "@/components/WeeklyPrayerInvitation";
import {
  ShieldCheck,
  Truck,
  Clock,
  Sparkle,
  CalendarBlank,
  WhatsappLogo,
  ArrowRight,
  Handshake,
  CheckCircle,
  Compass,
  MapPin,
  Flame,
  Phone,
  BookOpen,
} from "@phosphor-icons/react/dist/ssr";

export default async function HomePage() {
  const [products, duaOfTheDay, posts, settings, testimonials] = await Promise.all([
    getProducts(),
    getDuaOfTheDay(),
    getPosts(),
    getSiteSettings(),
    getTestimonials(),
  ]);

  const featuredProducts = products.slice(0, 6);
  const latestPosts = posts.slice(0, 3);

  // 7 services preview
  const servicesList = [
    {
      title: "Spiritual Neutralization & Cleansing",
      description: "Prayer-infused traditional cleansing to relieve spiritual heaviness, negative energy, and persistent obstacles.",
      icon: Sparkle,
    },
    {
      title: "Prayer & Spiritual Guidance",
      description: "Heartfelt Quranic supplication and one-on-one faith counselling for clarity, tranquility, and divine direction.",
      icon: BookOpen,
    },
    {
      title: "Protection from Evil Eye & Envy",
      description: "Fortifying spiritual shields through authentic morning and evening adhkar, Ruqyah, and traditional botanicals.",
      icon: ShieldCheck,
    },
    {
      title: "Life Breakthrough Prayer",
      description: "Focused prayer support for career elevation, business revival, financial ease, and overcoming stagnation.",
      icon: Flame,
    },
    {
      title: "Family & Marital Support",
      description: "Faith-centered spiritual guidance to bring mutual affection, peace, and reconciliation into marriages and homes.",
      icon: Handshake,
    },
    {
      title: "Peace of Mind & Tranquility",
      description: "Relief from nocturnal disturbances, sudden fear, anxiety, and restlessness through continuous spiritual counsel.",
      icon: Compass,
    },
    {
      title: "Success & Life Improvement",
      description: "Prayer-prepared formulations and spiritual mentoring to unlock favor, open doors, and fruitful connections.",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* 1. LIGHT CINEMATIC HERO SECTION */}
      <section className="relative overflow-hidden pt-10 pb-16 sm:pt-20 sm:pb-32 bg-gradient-to-b from-cream-light via-ivory to-white">
        {/* Subtle Islamic Background Pattern with very low opacity */}
        <div className="absolute inset-0 bg-islamic-pattern opacity-5 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[700px] h-[320px] sm:h-[500px] bg-gradient-to-tr from-gold/10 via-emerald-deep/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left rtl:lg:text-right">
              {/* Gold Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white border border-gold-hairline shadow-soft-sm text-xs font-bold text-emerald-deep mb-5 sm:mb-6">
                <span className="uppercase tracking-widest text-[11px] text-gold-primary">
                  {settings.heroHeadline}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif text-charcoal tracking-tight leading-[1.18] sm:leading-[1.15]">
                Faith. Hope. Healing.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-deep via-emerald-forest to-gold-primary">
                  Transformation.
                </span>
              </h1>

              {/* Sub-headline / Arabic Calligraphy Line */}
              <div className="mt-3 font-arabic text-lg sm:text-2xl text-emerald-deep font-bold" dir="rtl">
                حلول الشفاء والدعاء • دار ألفا قاهرة
              </div>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-lg text-muted max-w-xl leading-relaxed">
                {settings.heroDescription}
              </p>

              {/* CTA Buttons */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-3.5 w-full sm:w-auto">
                <Link
                  href="/book"
                  id="hero-book-consultation-cta"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-emerald-deep hover:bg-emerald-forest text-white font-bold text-sm sm:text-base shadow-soft hover:shadow-soft-lg hover-lift transition-all min-h-[48px]"
                >
                  <CalendarBlank size={18} weight="bold" className="text-gold-light" />
                  <span>Book a Consultation</span>
                </Link>

                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                    "Assalamu alaikum, I would like to make an enquiry."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-whatsapp-chat-cta"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white hover:bg-cream border border-gold-hairline text-emerald-deep font-bold text-sm sm:text-base shadow-soft-sm hover-lift transition-all min-h-[48px]"
                >
                  <WhatsappLogo size={18} weight="fill" className="text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Hours reassurance */}
              <div className="mt-5 sm:mt-6 flex items-center gap-2 text-xs text-muted">
                <Clock size={15} weight="fill" className="text-emerald-deep" />
                <span>{siteConfig.hours} • Alfa Cairo House, Owode Egba</span>
              </div>
            </div>

            {/* Right Hero Visual Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-soft-lg border-2 border-gold/40 p-2 bg-white/70 backdrop-blur-md">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/alfacairo-hero.jpg"
                    alt="Sheikh Ismail Adewunmi (Alfacairo) in green scarf and prayer cap"
                    fill
                    priority
                    className="object-cover object-top"
                  />
                  {/* Glassmorphic Corner Card */}
                  <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-gold-hairline shadow-soft text-left rtl:text-right">
                    <div className="text-xs font-bold text-emerald-deep uppercase tracking-wider">
                      Alfacairo
                    </div>
                    <div className="text-xs text-charcoal font-serif font-bold">
                      Spiritual Healer &amp; Prayer Counsellor
                    </div>
                    <div className="text-[11px] text-muted mt-0.5">
                      Owode Egba, Ogun State • Serving Nationwide
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="w-full bg-cream border-y border-gold-hairline py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x rtl:sm:divide-x-reverse divide-gold-hairline/60">
            <div className="flex items-center justify-center gap-3 pt-2 sm:pt-0">
              <div className="p-2 rounded-xl bg-emerald-light text-emerald-deep">
                <ShieldCheck size={22} weight="fill" />
              </div>
              <div className="text-left rtl:text-right">
                <div className="text-xs sm:text-sm font-bold text-charcoal">100% Natural Herbs</div>
                <div className="text-[11px] text-muted">Traditional Herbal Formulations</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-4 sm:pt-0">
              <div className="p-2 rounded-xl bg-emerald-light text-emerald-deep">
                <Truck size={22} weight="fill" />
              </div>
              <div className="text-left rtl:text-right">
                <div className="text-xs sm:text-sm font-bold text-charcoal">Prompt Dispatch</div>
                <div className="text-[11px] text-muted">Nationwide Delivery</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-4 sm:pt-0">
              <div className="p-2 rounded-xl bg-emerald-light text-emerald-deep">
                <Clock size={22} weight="fill" />
              </div>
              <div className="text-left rtl:text-right">
                <div className="text-xs sm:text-sm font-bold text-charcoal">Open Every Day</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS */}
      <section className="py-20 bg-white" id="featured-products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-light border border-emerald-deep/20 text-emerald-deep text-xs font-bold uppercase tracking-wider mb-3">
                Featured Preparations
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-charcoal tracking-tight">
                Traditional Herbal &amp; Spiritual Remedies
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted max-w-2xl">
                Prayer-prepared herbal tonics, wellness capsules, and spiritual cleansing kits crafted to support physical vitality and spiritual harmony.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-cream hover:bg-cream-light border border-gold-hairline text-emerald-deep font-bold text-xs sm:text-sm shadow-soft-sm transition-all hover-lift shrink-0"
            >
              <span>View All 12 Products</span>
              <ArrowRight size={14} weight="bold" className="rtl:rotate-180" />
            </Link>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Nationwide delivery notice bar */}
          <div className="mt-12 p-4 rounded-2xl bg-cream-light border border-gold-hairline/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left rtl:sm:text-right">
            <div className="flex items-center gap-3">
              <Truck size={22} weight="fill" className="text-emerald-deep" />
              <span className="text-xs sm:text-sm font-semibold text-charcoal">
                We deliver safely and reliably across Nigeria. Combine items into your order list for a single WhatsApp inquiry.
              </span>
            </div>
            <Link
              href="/products"
              className="text-xs font-bold text-emerald-deep hover:underline shrink-0"
            >
              Explore Catalog →
            </Link>
          </div>
        </div>
      </section>

      {/* 4. DUA OF THE DAY CARD */}
      <section className="py-12 bg-ivory border-t border-gold-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DuaOfTheDayCard dua={duaOfTheDay} />
        </div>
      </section>

      {/* 4B. WEEKLY LIVE PRAYER INVITATION */}
      <WeeklyPrayerInvitation />

      {/* 5. SERVICES PREVIEW */}
      <section className="py-20 bg-white" id="services-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-light border border-emerald-deep/20 text-emerald-deep text-xs font-bold uppercase tracking-wider mb-3">
              Spiritual Counselling
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-charcoal tracking-tight">
              Spiritual Guidance &amp; Prayer Services
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
              Every challenge has a spiritual answer grounded in sincere supplication and divine remembrance. We provide private, compassionate spiritual counselling without false promises or sensationalism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesList.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-cream-light/60 border border-gold-hairline/60 p-6 sm:p-8 shadow-soft hover:shadow-soft-lg hover-lift transition-all flex flex-col"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-light text-emerald-deep flex items-center justify-center mb-5 border border-emerald-deep/20">
                    <IconComp size={24} weight="fill" />
                  </div>
                  <h3 className="text-lg font-bold font-serif text-charcoal mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <div className="mt-6 pt-4 border-t border-gold-hairline/40">
                    <Link
                      href="/book"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-deep hover:text-emerald-forest transition-colors"
                    >
                      <span>Book Guidance</span>
                      <ArrowRight size={12} weight="bold" className="rtl:rotate-180" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. ABOUT TEASER WITH PORTRAIT */}
      <section className="py-20 bg-cream border-t border-gold-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Portrait Image Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden shadow-soft-lg border-2 border-gold/40 p-2 bg-white">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/alfacairo-portrait.jpg"
                    alt="Alfacairo in maroon kaftan holding microphone with open Quran"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Bio Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-gold-hairline text-emerald-deep text-xs font-bold uppercase tracking-wider">
                About Alfacairo
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-charcoal tracking-tight">
                Dedicated Spiritual Healer &amp; Prayer Counsellor
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                {settings.bio}
              </p>
              <div className="p-4 rounded-2xl bg-white/70 border border-gold-hairline/60">
                <p className="text-xs sm:text-sm text-charcoal font-medium italic">
                  “We dedicate our days and nights to praying alongside seekers of truth, offering prophetic guidance and botanical support so that peace and breakthroughs may enter their homes.”
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-deep hover:bg-emerald-forest text-white font-bold text-xs sm:text-sm shadow-soft transition-all hover-lift"
                >
                  <span>Read Full Biography</span>
                  <ArrowRight size={14} weight="bold" className="rtl:rotate-180" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white hover:bg-cream-light border border-gold-hairline text-charcoal font-bold text-xs sm:text-sm shadow-soft-sm transition-all hover-lift"
                >
                  <span>Visit Alfa Cairo House</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-light border border-emerald-deep/20 text-emerald-deep text-xs font-bold uppercase tracking-wider mb-3">
              Simple &amp; Respectful Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-charcoal tracking-tight">
              How Your Journey Begins
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted">
              Four straightforward steps to receiving spiritual counselling and remedies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Contact Us",
                desc: "Book online, reach out on WhatsApp, or place a phone call anytime of day.",
              },
              {
                step: "02",
                title: "Consultation",
                desc: "Share your life challenge in confidence with Alfacairo, in person or by phone.",
              },
              {
                step: "03",
                title: "Prayer & Treatment",
                desc: "Receive focused supplications (Ruqyah) and prayer-prepared botanical remedies.",
              },
              {
                step: "04",
                title: "Follow-Up",
                desc: "Stay connected for ongoing spiritual support and testimony of breakthrough.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative rounded-3xl bg-ivory border border-gold-hairline/60 p-6 shadow-soft hover:shadow-soft-lg transition-all"
              >
                <div className="text-3xl font-black text-gold/60 font-serif mb-3">
                  {item.step}
                </div>
                <h3 className="text-base font-bold font-serif text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LATEST 3 BLOG POSTS */}
      <section className="py-20 bg-cream-light/60 border-t border-gold-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-light border border-emerald-deep/20 text-emerald-deep text-xs font-bold uppercase tracking-wider mb-3">
                Spiritual Knowledge
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-charcoal tracking-tight">
                Reminders &amp; Spiritual Guidance
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted max-w-xl">
                Articles and reflections by Alfacairo on supplications, patience, and household protection.
              </p>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white hover:bg-cream border border-gold-hairline text-emerald-deep font-bold text-xs sm:text-sm shadow-soft-sm transition-all hover-lift shrink-0"
            >
              <span>Visit the Blog</span>
              <ArrowRight size={14} weight="bold" className="rtl:rotate-180" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
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
                  <div className="text-[11px] text-muted mb-2">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    • {post.readingTimeMinutes} min read
                  </div>

                  <h3 className="text-lg font-bold font-serif text-charcoal group-hover:text-emerald-deep transition-colors line-clamp-2 mb-2">
                    <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-muted line-clamp-3 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 pt-3 border-t border-gold-hairline/40">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-deep group-hover:text-emerald-forest"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight size={12} weight="bold" className="rtl:rotate-180" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS (AUTO-HIDES IF NONE APPROVED) */}
      {testimonials.length > 0 && (
        <section className="py-20 bg-white border-t border-gold-hairline">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold font-serif text-charcoal">
                Testimonies of Hope
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((test) => (
                <div
                  key={test.id}
                  className="p-6 rounded-3xl bg-ivory border border-gold-hairline shadow-soft"
                >
                  <p className="text-xs sm:text-sm text-charcoal italic mb-4 leading-relaxed">
                    “{test.text}”
                  </p>
                  <div className="font-bold text-xs text-emerald-deep">
                    {test.name} {test.location && `• ${test.location}`}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. LOCATION MAP TEASER */}
      <section className="py-20 bg-cream border-t border-gold-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-gold-hairline text-emerald-deep text-xs font-bold uppercase tracking-wider">
                Sanctuary Location
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-charcoal tracking-tight">
                Visit Alfa Cairo House
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Located in Owode Egba, Ogun State, Alfa Cairo House is open every day to welcome visitors seeking prayers, spiritual counselling, and traditional wellness formulations.
              </p>
              <div className="p-4 rounded-2xl bg-white border border-gold-hairline shadow-soft-sm space-y-2 text-xs sm:text-sm text-charcoal">
                <div>
                  <strong>Address: </strong>
                  {siteConfig.address}
                </div>
                <div>
                  <strong>Hours: </strong>
                  {siteConfig.hours}
                </div>
                <div>
                  <strong>Phone / WhatsApp: </strong>
                  <a href={`tel:${siteConfig.phoneIntl}`} className="text-emerald-deep font-bold">
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-emerald-deep hover:bg-emerald-forest text-white font-bold text-xs sm:text-sm shadow-soft transition-all hover-lift min-h-[44px]"
                >
                  <MapPin size={16} weight="fill" className="text-gold-light" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] rounded-3xl overflow-hidden shadow-soft-lg border-2 border-gold/40">
                <iframe
                  title="Alfa Cairo House Location Map"
                  src={siteConfig.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. REUSABLE WHATSAPP GROUP BANNER */}
      <WhatsAppGroupBanner />

      {/* 12. FINAL CALL-TO-ACTION SECTION */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-emerald-deep via-emerald-forest to-emerald-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-islamic-pattern opacity-10 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/10 text-gold-light text-xs font-bold uppercase tracking-widest mb-4 border border-gold/30">
            Take The First Step Today
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
            Your Healing &amp; Breakthrough Is One Prayer Away
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            Reach out in complete confidence. Whether you need spiritual direction, Ruqyah prayers, or traditional herbal wellness, Alfacairo is here to support you.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              href="/book"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gold hover:bg-gold-light text-charcoal font-bold text-sm sm:text-base shadow-soft hover-lift transition-all min-h-[48px]"
            >
              <CalendarBlank size={18} weight="bold" className="text-charcoal" />
              <span>Book Your Consultation</span>
            </Link>
            <a
              href={`tel:${siteConfig.phoneIntl}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-sm sm:text-base transition-all min-h-[48px]"
            >
              <Phone size={18} weight="fill" className="text-gold-light" />
              <span>Call {siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
