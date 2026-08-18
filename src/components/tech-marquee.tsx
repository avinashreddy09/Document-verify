"use client";

import * as React from "react";
import { Cpu, FileText, Code2, ShieldCheck, Layers, Terminal, Sparkles } from "lucide-react";

export function TechMarquee() {
  const stackItems = [
    { name: "EfficientNet-B4", category: "Spatial Anomaly Detection", icon: Cpu },
    { name: "PaddleOCR", category: "Structural Text Extraction", icon: FileText },
    { name: "Next.js 15 App Router", category: "React Framework", icon: Code2 },
    { name: "TypeScript 5", category: "Strict Type Safety", icon: Terminal },
    { name: "Tailwind CSS v4", category: "Fluid Design System", icon: Layers },
    { name: "Framer Motion", category: "Restrained Motion Engine", icon: Sparkles },
    { name: "PyTorch Runtime", category: "Model Inference Engine", icon: ShieldCheck },
  ];

  const marqueeList = [...stackItems, ...stackItems, ...stackItems];

  return (
    <div className="w-full border-y border-[var(--border)] bg-[var(--pill-bg)] py-3.5 overflow-hidden select-none">
      <div className="mx-auto max-w-7xl px-4 mb-2 text-center">
        <span className="text-[10px] mono-label text-[var(--muted-foreground)] opacity-80">
          Open Technical Pipeline Stack • Zero Synthetic Social Proof
        </span>
      </div>

      <div className="relative w-full flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap gap-6 group-hover:[animation-play-state:paused] ease-linear">
          {marqueeList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.name}-${idx}`}
                className="inline-flex items-center gap-2.5 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-1.5 text-xs font-medium text-[var(--foreground)] shadow-xs transition-colors hover:border-[var(--accent)]"
              >
                <Icon className="h-3.5 w-3.5 text-[var(--accent)] shrink-0" />
                <span className="font-semibold text-[var(--foreground)]">{item.name}</span>
                <span className="text-[10px] text-[var(--muted-foreground)] border-l border-[var(--border)] pl-2 font-mono">
                  {item.category}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
