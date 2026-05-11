import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-border pt-16 pb-10 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-5 text-muted-foreground max-w-sm text-sm leading-relaxed">
              Storm Breakers is a brotherhood of athletes, families and fans bound by a single creed —
              <span className="text-foreground"> never bend, never break.</span>
            </p>
          </div>
          <div>
            <div className="font-display tracking-[0.25em] text-xs uppercase mb-4 text-[var(--electric)]">Team</div>
            <ul className="space-y-2">
              {["Squad","Jerseys","Memories"].map(i => (
                <li key={i}><a href={`#${i.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{i}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-display tracking-[0.25em] text-xs uppercase mb-4 text-[var(--electric)]">Connect</div>
            <ul className="space-y-2">
              <li>
                <a href="https://www.instagram.com/__storm_breakers?igsh=MWU4eTlpbmdhYXZobg==" target="_blank" rel="noopener noreferrer"
                   className="text-sm text-muted-foreground hover:text-foreground transition-colors">Instagram · @__storm_breakers</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-[10px] tracking-[0.4em] uppercase text-muted-foreground">© 2026 Storm Breakers · All Rights Reserved</div>
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--blood)]">We are the storm.</div>
        </div>
      </div>
    </footer>
  );
}
