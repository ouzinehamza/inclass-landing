"use client";

import { useState } from "react";
import { Check, Copy, Share2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { RollingText } from "@/components/gsap/rolling-text";

export default function ArticleShareActions({ title, url }: { title: string; url?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const shareWhatsApp = () => {
    if (typeof window !== "undefined") {
      const shareUrl = `https://wa.me/?text=${encodeURIComponent(`${title} — ${window.location.href}`)}`;
      window.open(shareUrl, "_blank");
    }
  };

  const shareLinkedin = () => {
    if (typeof window !== "undefined") {
      const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
      window.open(shareUrl, "_blank");
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ink-soft dark:text-white/60">
        <Share2 className="h-3.5 w-3.5" />
        Partager :
      </span>

      {/* WhatsApp Button */}
      <button
        type="button"
        onClick={shareWhatsApp}
        className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-1.5 text-xs font-bold text-emerald-800 transition-colors hover:bg-emerald-100 dark:border-emerald-500/30 dark:bg-emerald-950/60 dark:text-emerald-300"
      >
        <WhatsAppIcon className="h-3.5 w-3.5" />
        WhatsApp
      </button>

      {/* LinkedIn Button */}
      <button
        type="button"
        onClick={shareLinkedin}
        className="inline-flex items-center gap-1.5 rounded-full border border-blue-300 bg-blue-50 px-3.5 py-1.5 text-xs font-bold text-blue-800 transition-colors hover:bg-blue-100 dark:border-blue-500/30 dark:bg-blue-950/60 dark:text-blue-300"
      >
        <span className="font-serif font-black text-xs">in</span>
        LinkedIn
      </button>

      {/* Copy link button */}
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-bold text-ink transition-colors hover:bg-sand dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
            <span className="text-emerald-600 dark:text-emerald-400">Lien copié !</span>
          </>
        ) : (
          <>
            <Copy className="h-3.5 w-3.5" />
            <span>Copier le lien</span>
          </>
        )}
      </button>
    </div>
  );
}
