"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Shield, Cpu } from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link 
          href="/" 
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent)]/20 transition-transform group-hover:scale-105">
            <Shield className="h-4 w-4 stroke-[2.25]" />
          </div>
          <span className="font-serif text-xl font-semibold tracking-tight text-[var(--foreground)]">
            DocuVerify
          </span>
        </Link>

        {/* Technical Architecture Badge (Desktop) & Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--pill-bg)] px-3.5 py-1 text-xs mono-label text-[var(--muted-foreground)]">
            <Cpu className="h-3.5 w-3.5 text-[var(--accent)]" />
            <span>EfficientNet-B4 + PaddleOCR</span>
          </div>

          {/* GitHub Repo Link */}
          <a
            href="https://github.com/docuverify/pipeline-spec"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            aria-label="View source repository on GitHub"
          >
            <GithubIcon className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
