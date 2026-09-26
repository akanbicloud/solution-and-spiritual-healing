import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
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

export default function LandingRouteGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full min-h-screen bg-ivory text-charcoal font-sans antialiased selection:bg-gold-light/30 selection:text-charcoal">
      {children}
    </div>
  );
}
