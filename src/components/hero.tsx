"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowDown, Cpu, FileCheck } from "lucide-react";

interface HeroProps {
  videoSrc?: string;
  posterSrc?: string;
}

/**
 * Hero Component with Decorative Stock Video Background
 * 
 * LICENSE & LABELING NOTICE:
 * The background video (/videos/hero-bg.mp4) is royalty-free ambient stock footage 
 * from Pexels ("Scan" category, free commercial license). It serves as decorative 
 * mood texture only and is NOT live product or pipeline analysis output.
 */
export function Hero({ 
  videoSrc = "/videos/hero-bg.mp4", 
  posterSrc = "/videos/hero-bg-poster.jpg" 
}: HeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const [mousePos, setMousePos] = React.useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
  };

  const scrollToShowcase = () => {
    const el = document.getElementById("showcase");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[var(--background)]">
      {/* Background Video / Poster Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {!shouldReduceMotion && videoSrc ? (
          <video
            src={videoSrc}
            poster={posterSrc}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover object-center scale-[1.03]"
          />
        ) : (
          /* Reduced-Motion Poster Frame Fallback */
          <div
            className="h-full w-full bg-cover bg-center transition-opacity"
            style={{
              backgroundImage: `url(${posterSrc})`,
            }}
          >
            <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[radial-gradient(var(--foreground)_1px,transparent_1px)] [background-size:24px_24px]" />
          </div>
        )}

        {/* Overlay: rgba(0,0,0,0.55) light mode / rgba(0,0,0,0.75) dark mode for text legibility */}
        <div className="absolute inset-0 bg-black/55 dark:bg-black/75 backdrop-blur-[1px] transition-colors" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center text-white">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1 text-xs mono-label text-[var(--accent)] mb-6 shadow-sm">
          <FileCheck className="h-3.5 w-3.5" />
          <span>AI Document Forgery Detection</span>
        </div>

        {/* Thin Fraunces Display Cover-Line H1 */}
        <h1 className="display-headline text-white max-w-4xl tracking-tight mb-6 font-light drop-shadow-sm">
          Catch forged IDs before they reach payroll.
        </h1>

        {/* Honest, Audited Subhead */}
        <p className="subhead-text text-zinc-300 max-w-2xl font-normal mb-10 leading-relaxed">
          Built on EfficientNet-B4 spatial anomaly analysis and PaddleOCR structural extraction to flag inconsistencies in candidate documents before they reach payroll.
        </p>

        {/* Single Primary CTA with Pointer Radial Glow */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            ref={buttonRef}
            type="button"
            onClick={scrollToShowcase}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative group overflow-hidden inline-flex items-center justify-center gap-2.5 rounded-lg bg-[var(--accent)] px-8 py-4 text-sm font-semibold text-[var(--accent-foreground)] shadow-xl transition-all duration-200 ease-out hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer"
          >
            <div
              className="pointer-events-none absolute inset-0 transition-opacity duration-200"
              style={{
                opacity: mousePos.opacity,
                background: `radial-gradient(120px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.35), transparent 80%)`,
              }}
            />
            <span className="relative z-10">Explore Verification Pipeline</span>
            <ArrowDown className="relative z-10 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </button>
        </div>

        {/* Architectural Transparency Note */}
        <div className="mt-14 flex items-center gap-2 text-xs mono-label text-zinc-400 border-t border-white/15 pt-4 max-w-md w-full justify-center">
          <Cpu className="h-3.5 w-3.5 text-[var(--accent)] shrink-0" />
          <span>Deterministic analysis • Zero synthetic hallucination</span>
        </div>
      </div>
    </section>
  );
}
