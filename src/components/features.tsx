"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Cpu, FileText, Binary, FileCheck2 } from "lucide-react";

export function Features() {
  const shouldReduceMotion = useReducedMotion();

  const capabilities = [
    {
      icon: Cpu,
      title: "EfficientNet-B4 Spatial Analysis",
      description: "Identifies local pixel noise variations, compression grid mismatches, and font edge tampering across uploaded documents.",
    },
    {
      icon: FileText,
      title: "PaddleOCR Structural Parsing",
      description: "Extracts text fields, document IDs, and dates with character-level confidence scoring for precise field verification.",
    },
    {
      icon: Binary,
      title: "EXIF & Compression Analysis",
      description: "Detects post-processing software signatures, resave timestamps, and image matrix alterations in candidate files.",
    },
    {
      icon: FileCheck2,
      title: "Structured HR Record Export",
      description: "Generates audit-ready JSON data and standardized summary reports formatted for internal HR compliance recordkeeping.",
    },
  ];

  // Staggered Container Motion (90ms stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.09,
        delayChildren: 0.1,
      },
    },
  };

  // Card Child Motion (0.85s Expo-Out Easing)
  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.85,
        ease: [0.19, 1, 0.22, 1] as const,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-[var(--background)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with Layered/Offset Duplicate Heading */}
        <div className="mb-12 text-center">
          <div className="relative inline-block mb-3">
            <span
              aria-hidden="true"
              className="section-headline text-[var(--foreground)] opacity-15 absolute top-2.5 left-2.5 pointer-events-none w-full select-none font-light"
            >
              Built for precision, not hype.
            </span>
            <h2 className="section-headline text-[var(--foreground)] relative z-10 font-light">
              Built for precision, not hype.
            </h2>
          </div>
          <p className="text-sm md:text-base text-[var(--muted-foreground)] max-w-xl mx-auto">
            Four specialized pipeline capabilities focused on structural document analysis and candidate verification transparency.
          </p>
        </div>

        {/* Feature Cards Grid with Staggered 0.85s Reveal Motion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="group relative rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8 transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-2xl hover:border-[var(--accent)]/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent)]/20">
                    <Icon className="h-5 w-5 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
