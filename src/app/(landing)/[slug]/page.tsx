import React from "react";
import Script from "next/script";
import type { Metadata } from "next";
import { getProducts } from "@/lib/cms";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingTrust } from "@/components/landing/LandingTrust";
import { LandingBenefits } from "@/components/landing/LandingBenefits";
import { LandingSpiritualProblems } from "@/components/landing/LandingSpiritualProblems";
import { LandingProducts } from "@/components/landing/LandingProducts";
import { LandingSocialProof } from "@/components/landing/LandingSocialProof";
import { LandingForm } from "@/components/landing/LandingForm";
import { LandingStickyCTA } from "@/components/landing/LandingStickyCTA";
import { LandingFooter } from "@/components/landing/LandingFooter";

// REPLACE WITH YOUR ACTUAL META (FACEBOOK/INSTAGRAM) PIXEL ID
// You can also set NEXT_PUBLIC_META_PIXEL_ID in your .env or Vercel Environment Variables
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "YOUR_PIXEL_ID";

export async function generateStaticParams() {
  return [
    { slug: "consultation" },
    { slug: "spiritual-consultation" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return {
    title: "Book a Consultation | Solution Spiritual Healing & Prayer",
    description:
      "Confidential, one-on-one spiritual consultation with Alfacairo to help you resolve spiritual difficulties, unexplained stagnation, and family distress.",
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
      },
    },
  };
}

export default async function AdLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const products = await getProducts();

  return (
    <>
      {/* 
        ========================================================================
        META PIXEL (FACEBOOK / INSTAGRAM ADS TRACKING)
        Scoped exclusively to this landing page.
        Strategy: "afterInteractive" for fast page load without blocking rendering.
        ========================================================================
      */}
      <Script
        id="meta-pixel-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>

      {/* Main Landing Page Sections in exact order */}
      <main className="w-full min-h-screen flex flex-col bg-ivory">
        {/* 1. Hero Section: Logo, Headline, Subheadline, Primary CTA above the fold */}
        <LandingHero />

        {/* 2. Trust / Credibility Section: Bullet points, credentials, years practicing */}
        <LandingTrust />

        {/* 3. Offer / Benefits Section: Spiritual problems addressed & outcomes you receive */}
        <LandingBenefits />

        {/* NEW SECTION 1: Spiritual Problems We Help With (Real list from /services and homepage) */}
        <LandingSpiritualProblems />

        {/* NEW SECTION 2: Our Spiritual Healing Products (Real products & images via Sanity/CMS) */}
        <LandingProducts products={products} />

        {/* 4. Social Proof Section: 3 Styled testimonial cards */}
        <LandingSocialProof />

        {/* 5. Contact / Lead Capture Section: Working booking form & direct WhatsApp/phone options */}
        <LandingForm />

        {/* 6. Sticky CTA Bar: Appears on scroll for easy mobile conversion */}
        <LandingStickyCTA />

        {/* 7. Simple Footer: Logo, business name, contact info, privacy policy link only */}
        <LandingFooter />
      </main>
    </>
  );
}

