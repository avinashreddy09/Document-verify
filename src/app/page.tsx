import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TechMarquee } from "@/components/tech-marquee";
import { ProductShowcase } from "@/components/product-showcase";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)] selection:text-[var(--accent-foreground)]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TechMarquee />
        <ProductShowcase />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
