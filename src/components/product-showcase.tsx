"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { 
  AlertTriangle, 
  Layers, 
  Scan, 
  FileText, 
  SlidersHorizontal,
  ShieldCheck
} from "lucide-react";

export function ProductShowcase() {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = React.useState<"spatial" | "ocr">("spatial");

  // Cinematic 0.85s Expo-Out Easing (cubic-bezier(0.19, 1, 0.22, 1))
  const motionVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 36 },
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
    <section id="showcase" className="py-16 md:py-24 bg-[var(--muted)]/40 border-y border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs mono-label text-[var(--accent)] mb-3">
            <Scan className="h-4 w-4" />
            <span>Interactive Pipeline Inspection</span>
          </div>
          <h2 className="section-headline text-[var(--foreground)] mb-3 font-light">
            Dual-Model Verification Pipeline
          </h2>
          <p className="text-sm md:text-base text-[var(--muted-foreground)] max-w-xl mx-auto">
            Inspect document anomalies flagged by spatial convolutional layer analysis alongside extracted OCR structural fields.
          </p>
        </div>

        {/* The Scroll-Reveal Container with 0.85s Expo-Out Easing */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={motionVariants}
          className="rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-2xl overflow-hidden transition-all duration-200 ease-out hover:scale-[1.015] hover:border-[var(--accent)]/50"
        >
          {/* Browser Chrome Header */}
          <div className="flex flex-wrap items-center justify-between border-b border-[var(--border)] bg-[var(--muted)] px-4 py-3 gap-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="ml-2 hidden sm:flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-xs text-[var(--muted-foreground)] font-mono">
                <span className="text-[var(--accent)]">docuverify://</span>pipeline-inspector/sample-id-w2-892.pdf
              </div>
            </div>

            {/* Model Layer View Switcher */}
            <div className="flex items-center rounded-lg border border-[var(--border)] bg-[var(--card)] p-1 text-xs font-medium">
              <button
                type="button"
                onClick={() => setActiveTab("spatial")}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all duration-200 cursor-pointer ${
                  activeTab === "spatial"
                    ? "bg-[var(--accent)] text-[var(--accent-foreground)] shadow-xs"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                }`}
              >
                <Layers className="h-3.5 w-3.5" />
                <span>EfficientNet-B4 Anomaly</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("ocr")}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all duration-200 cursor-pointer ${
                  activeTab === "ocr"
                    ? "bg-[var(--accent)] text-[var(--accent-foreground)] shadow-xs"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                }`}
              >
                <FileText className="h-3.5 w-3.5" />
                <span>PaddleOCR Extraction</span>
              </button>
            </div>
          </div>

          {/* Inspection Viewport */}
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Left Column: Document Canvas Frame */}
              <div className="lg:col-span-7 rounded-lg border border-[var(--border)] bg-[var(--code-bg)] p-4 sm:p-6 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[var(--border)] text-xs text-[var(--muted-foreground)] font-mono">
                  <span>INPUT: passport_candidate_sample.png</span>
                  <span>RES: 2400 x 1560 • RGB</span>
                </div>

                {/* Document Canvas Visualization */}
                <div className="relative rounded-md border border-[var(--border)] bg-[var(--card)] p-5 text-left shadow-sm">
                  {/* Document Header */}
                  <div className="flex items-center justify-between border-b border-[var(--border)] pb-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-md bg-[var(--muted)] flex items-center justify-center font-bold text-xs text-[var(--muted-foreground)] border border-[var(--border)] font-mono">
                        USA
                      </div>
                      <div>
                        <div className="text-xs font-semibold tracking-wide text-[var(--foreground)] uppercase">
                          State Identification Card
                        </div>
                        <div className="text-[10px] text-[var(--muted-foreground)] font-mono">
                          ID #: DL-9840219-X
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--muted)] text-[var(--muted-foreground)]">
                      Form W-9 / ID
                    </span>
                  </div>

                  {/* Document Content Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {/* Photo Block */}
                    <div className="col-span-1 rounded border border-[var(--border)] bg-[var(--muted)] h-24 flex flex-col items-center justify-center text-center p-2">
                      <div className="w-10 h-10 rounded-full bg-[var(--border)] mb-1" />
                      <span className="text-[9px] text-[var(--muted-foreground)] font-mono">Portrait</span>
                    </div>

                    {/* Form Text Content */}
                    <div className="col-span-2 space-y-2 text-xs">
                      <div>
                        <span className="text-[10px] text-[var(--muted-foreground)] uppercase block font-mono">Full Name</span>
                        <span className="font-medium text-[var(--foreground)]">SARAH ELEANOR VANCE</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[var(--muted-foreground)] uppercase block font-mono">Date of Birth</span>
                        <span className="font-mono text-[var(--foreground)]">1992-04-14</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[var(--muted-foreground)] uppercase block font-mono">Issue Date</span>
                        <span className={`font-mono transition-colors ${
                          activeTab === "spatial" 
                            ? "bg-[var(--anomaly-bg)] text-[var(--anomaly-text)] px-1.5 py-0.5 rounded border border-[var(--anomaly-border)] font-bold inline-block" 
                            : "text-[var(--foreground)]"
                        }`}>
                          2023-11-02 {activeTab === "spatial" && "⚠ [Pixel Noise Mismatch]"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Anomaly Indicator */}
                  {activeTab === "spatial" && (
                    <div className="mt-3 rounded border border-[var(--anomaly-border)] bg-[var(--anomaly-bg)] p-3 text-xs text-[var(--anomaly-text)] flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-[var(--anomaly-text)]" />
                      <div>
                        <div className="font-semibold text-xs mb-0.5 font-mono">Spatial Anomaly Flagged (Block 4 Layer)</div>
                        <div className="text-[11px] opacity-90">
                          High frequency DCT quantization step detected around issue date string. Indicates potential local text insertion.
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "ocr" && (
                    <div className="mt-3 rounded border border-[var(--ocr-border)] bg-[var(--ocr-bg)] p-3 text-xs text-[var(--ocr-text)] flex items-start gap-2">
                      <ShieldCheck className="h-4 w-4 shrink-0 mt-0.5 text-[var(--ocr-text)]" />
                      <div>
                        <div className="font-semibold text-xs mb-0.5 font-mono">PaddleOCR Extraction Complete</div>
                        <div className="text-[11px] opacity-90">
                          Character confidence average: 98.6%. 4 textual key-value boundaries isolated and cross-referenced.
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Diagnostics */}
              <div className="lg:col-span-5 space-y-4 text-left">
                <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 sm:p-5">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-[var(--border)]">
                    <span className="text-xs font-semibold mono-label text-[var(--muted-foreground)]">
                      {activeTab === "spatial" ? "EfficientNet-B4 Feature Map" : "PaddleOCR Field Bounding"}
                    </span>
                    <span className="text-xs font-mono text-[var(--accent)] font-semibold">
                      {activeTab === "spatial" ? "Anomaly Confidence: 87.4%" : "Extracted Fields: 6/6"}
                    </span>
                  </div>

                  {activeTab === "spatial" ? (
                    <div className="space-y-3 text-xs">
                      <div className="flex justify-between items-center py-1.5 border-b border-[var(--border)]/50">
                        <span className="text-[var(--muted-foreground)]">Layer ResNet Block 4 Noise</span>
                        <span className="font-mono text-red-500 font-medium">Variance Detected</span>
                      </div>
                      <div className="flex justify-between items-center py-1.5 border-b border-[var(--border)]/50">
                        <span className="text-[var(--muted-foreground)]">JPEG Compression Mismatch</span>
                        <span className="font-mono text-amber-500 font-medium">High (0.82)</span>
                      </div>
                      <div className="flex justify-between items-center py-1.5 border-b border-[var(--border)]/50">
                        <span className="text-[var(--muted-foreground)]">Font Edge Smoothing Profile</span>
                        <span className="font-mono text-[var(--muted-foreground)]">Uniform</span>
                      </div>
                      <div className="flex justify-between items-center py-1.5">
                        <span className="text-[var(--muted-foreground)]">EXIF Editing Metadata</span>
                        <span className="font-mono text-[var(--foreground)] font-medium">Adobe Photoshop 24.1</span>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3 text-xs">
                      <div className="flex justify-between items-center py-1.5 border-b border-[var(--border)]/50 font-mono">
                        <span className="text-[var(--muted-foreground)]">FULL_NAME</span>
                        <span className="text-[var(--ocr-text)] font-semibold">SARAH ELEANOR VANCE (99.2%)</span>
                      </div>
                      <div className="flex justify-between items-center py-1.5 border-b border-[var(--border)]/50 font-mono">
                        <span className="text-[var(--muted-foreground)]">DOC_NUMBER</span>
                        <span className="text-[var(--ocr-text)] font-semibold">DL-9840219-X (98.9%)</span>
                      </div>
                      <div className="flex justify-between items-center py-1.5 border-b border-[var(--border)]/50 font-mono">
                        <span className="text-[var(--muted-foreground)]">DOB</span>
                        <span className="text-[var(--ocr-text)] font-semibold">1992-04-14 (99.7%)</span>
                      </div>
                      <div className="flex justify-between items-center py-1.5 font-mono">
                        <span className="text-[var(--muted-foreground)]">ISSUE_DATE</span>
                        <span className="text-amber-500 font-semibold">2023-11-02 (84.1%)</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Verdict Logic Box */}
                <div className="rounded-lg border border-[var(--border)] bg-[var(--pill-bg)] p-4 text-xs text-[var(--muted-foreground)]">
                  <div className="font-semibold text-[var(--foreground)] mb-1 flex items-center gap-1.5">
                    <SlidersHorizontal className="h-3.5 w-3.5 text-[var(--accent)]" />
                    <span>Audit Verdict Logic</span>
                  </div>
                  <span>
                    When spatial anomaly threshold exceeds 0.75, document is automatically flagged for secondary HR manual review rather than silent auto-rejection.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
