import { Instagram } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/__storm_breakers?igsh=MWU4eTlpbmdhYXZobg==";

export function Community() {
  return (
    <section id="community" className="relative py-28 md:py-40 px-5">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-px w-10 bg-[var(--blood)]" />
          <span className="font-mono text-[11px] tracking-[0.3em] text-[var(--blood)] uppercase">07 — Family</span>
          <div className="h-px w-10 bg-[var(--blood)]" />
        </div>
        <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">
          Walk with us, <br/>off the <span className="text-gradient-blade">field.</span>
        </h2>
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
          Locker room laughs. Last-ball thrillers. The brothers behind the badge — every story drops first on our gram.
        </p>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex items-center gap-4 px-8 py-5 bg-gradient-to-r from-[var(--electric)] to-[var(--blood)] text-background font-display tracking-[0.25em] text-sm uppercase pulse-glow hover:scale-[1.04] transition-transform">
          <Instagram className="w-5 h-5" />
          <span>Follow us on Instagram</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
        <div className="mt-4 font-mono text-xs text-muted-foreground tracking-[0.2em]">@__storm_breakers</div>
      </div>
    </section>
  );
}
