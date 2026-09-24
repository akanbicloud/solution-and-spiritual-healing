import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Amiri } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { I18nProvider } from "@/i18n/context";
import { CartProvider } from "@/context/CartContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { WhatsAppOrderDrawer } from "@/components/WhatsAppOrderDrawer";

import { generateLocalBusinessAndOrganizationSchema } from "@/lib/schema";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B5D3B",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.brand} | ${siteConfig.name} — Owode Egba`,
    template: `%s | ${siteConfig.brand}`,
  },
  description: `${siteConfig.subline}. Dedicated Islamic spiritual counselling, prophetic Ruqyah prayer support, and traditional prayer-prepared botanical wellness at Alfa Cairo House in Owode Egba, Ogun State, Nigeria.`,
  keywords: [
    "Alfacairo",
    "Solution Spiritual Healing and Prayer",
    "Sheikh Ismail Adewunmi",
    "Spiritual Healer Ogun State",
    "Prayer Counsellor Nigeria",
    "Owode Egba spiritual sanctuary",
    "Abeokuta spiritual healing",
    "Islamic spiritual guidance Lagos",
    "Traditional herbal remedies Nigeria",
    "Ruqyah healing and prayers",
    "An-Najaat Wa Tahseenaat",
    "Dua of the day",
  ],
  authors: [{ name: `${siteConfig.name} (Sheikh Ismail Adewunmi)` }],
  creator: siteConfig.brand,
  publisher: siteConfig.brand,
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: `${siteConfig.brand} | ${siteConfig.name}`,
    description: `${siteConfig.subline}. Dedicated Islamic spiritual counselling, Ruqyah prayers, and natural botanical remedies at Alfa Cairo House, Owode Egba, Ogun State.`,
    url: siteConfig.url,
    siteName: siteConfig.brand,
    images: [
      {
        url: `${siteConfig.url}/images/house.jpg`,
        width: 1200,
        height: 630,
        alt: "Alfa Cairo House in Owode Egba, Ogun State — Solution Spiritual Healing & Prayer",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brand} | ${siteConfig.name}`,
    description: `${siteConfig.subline}. Spiritual guidance and traditional herbal wellness at Alfa Cairo House in Owode Egba, Ogun State.`,
    images: [`${siteConfig.url}/images/house.jpg`],
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: {
      ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
        ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
        : {}),
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaJsonLd = generateLocalBusinessAndOrganizationSchema();

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${amiri.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
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
