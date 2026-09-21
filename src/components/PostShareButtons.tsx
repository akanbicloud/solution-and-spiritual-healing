"use client";

import React, { useState } from "react";
import { WhatsappLogo, FacebookLogo, Link as LinkIcon, Check } from "@phosphor-icons/react";

export function PostShareButtons({
  title,
  slug,
}: {
  title: string;
  slug: string;
}) {
  const [copied, setCopied] = useState(false);
  const siteUrl = typeof window !== "undefined" ? window.location.origin : "https://alfacairo.com";
  const postUrl = `${siteUrl}/blog/${slug}`;

  const copyUrl = () => {
    navigator.clipboard.writeText(postUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
    `*${title}*\n\nRead this spiritual guidance from Alfacairo:\n${postUrl}`
  )}`;

  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    postUrl
  )}`;

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-semibold text-muted mr-1">Share:</span>

      {/* WhatsApp Share */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] text-xs font-bold transition-colors"
        title="Share to WhatsApp"
      >
        <WhatsappLogo size={16} weight="fill" />
        <span>WhatsApp</span>
      </a>

      {/* Facebook Share */}
      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2] text-xs font-bold transition-colors"
        title="Share on Facebook"
      >
        <FacebookLogo size={16} weight="fill" />
        <span>Facebook</span>
      </a>

      {/* Copy Link */}
      <button
        type="button"
        onClick={copyUrl}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-charcoal text-xs font-bold transition-colors"
        title="Copy article link"
      >
        {copied ? (
          <>
            <Check size={14} weight="bold" className="text-emerald-600" />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <LinkIcon size={14} weight="bold" />
            <span>Copy Link</span>
          </>
        )}
      </button>
    </div>
  );
}
