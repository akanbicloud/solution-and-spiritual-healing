import type { Metadata } from "next";
import { Playfair_Display, Inter, Amiri } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { I18nProvider } from "@/i18n/context";
import { CartProvider } from "@/context/CartContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { WhatsAppOrderDrawer } from "@/components/WhatsAppOrderDrawer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://alfacairo.com"),
  title: {
    default: `${siteConfig.brand} | ${siteConfig.name} — Owode Egba`,
    template: `%s | ${siteConfig.brand}`,
  },
  description: `${siteConfig.subline}. Spiritual guidance, prayer counselling, and traditional prayer-prepared botanical wellness at Alfa Cairo House in Owode Egba, Ogun State, Nigeria.`,
  keywords: [
    "Alfacairo",
    "Solution Spiritual Healing",
    "Prayer Counsellor Nigeria",
    "Owode Egba",
    "Ogun State",
    "Islamic spiritual guidance",
    "Traditional herbal remedies",
    "Ruqyah",
    "Dua of the day",
  ],
  authors: [{ name: siteConfig.name }],
  icons: {
    icon: "/images/emblem.svg",
    apple: "/images/emblem.svg",
  },
  openGraph: {
    title: `${siteConfig.brand} — Alfacairo`,
    description: siteConfig.subline,
    url: "https://alfacairo.com",
    siteName: siteConfig.brand,
    images: [
      {
        url: "/images/alfacairo-portrait.jpg",
        width: 800,
        height: 1067,
        alt: "Alfacairo holding Quran and microphone at Alfa Cairo House",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brand} — Alfacairo`,
    description: siteConfig.subline,
    images: ["/images/alfacairo-portrait.jpg"],
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/?lang=en",
      ar: "/?lang=ar",
      yo: "/?lang=yo",
      ha: "/?lang=ha",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // LocalBusiness structured data
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.brand,
    alternateName: "Alfacairo Spiritual Healing & Prayer",
    description: siteConfig.subline,
    telephone: siteConfig.phoneIntl,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Alfa Cairo House",
      addressLocality: "Owode Egba",
      addressRegion: "Ogun State",
      addressCountry: "NG",
    },
    openingHours: "Mo-Su 00:00-23:59",
    url: "https://alfacairo.com",
    image: "https://alfacairo.com/images/house.jpg",
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${amiri.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-ivory text-charcoal selection:bg-gold-light/30 selection:text-charcoal font-sans">
        <I18nProvider>
          <CartProvider>
            <Header />
            <WhatsAppOrderDrawer />
            <main className="flex-1">{children}</main>
            <FloatingWhatsApp />
            <Footer />
          </CartProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
