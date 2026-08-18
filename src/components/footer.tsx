import { Shield } from "lucide-react";

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

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)] py-12 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Technical Note */}
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-[var(--accent)]" />
              <span className="font-serif font-semibold text-sm tracking-tight text-[var(--foreground)]">
                DocuVerify
              </span>
            </div>
            <p className="text-xs text-[var(--muted-foreground)] max-w-md">
              AI document-forgery detection engineered for HR ops teams. Open pipeline specification based on EfficientNet-B4 & PaddleOCR architectures.
            </p>
          </div>

          {/* Links & Repository Transparency */}
          <div className="flex items-center gap-6 text-xs text-[var(--muted-foreground)] flex-wrap justify-center">
            <a
              href="https://github.com/docuverify/pipeline-spec"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[var(--foreground)] transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
              <span>GitHub Repository</span>
            </a>
            <span className="text-[var(--border)]">•</span>
            <span>Technical Spec v1.4</span>
            <span className="text-[var(--border)]">•</span>
            <span>Ambient media via Pexels license</span>
            <span className="text-[var(--border)]">•</span>
            <span>© {new Date().getFullYear()} DocuVerify</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
