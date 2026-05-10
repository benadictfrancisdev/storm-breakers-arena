import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "#identity", label: "Identity" },
  { href: "#squad", label: "Squad" },
  { href: "#jerseys", label: "Jerseys" },
  { href: "#memories", label: "Memories" },
  { href: "#trophies", label: "Trophies" },
  { href: "#matches", label: "Matches" },
  { href: "#community", label: "Community" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2 backdrop-blur-xl bg-background/70 border-b border-border" : "py-4"}`}>
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href}
               className="relative px-3 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors group">
              {l.label}
              <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-[var(--electric)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a href="#matches" className="text-xs uppercase tracking-[0.2em] px-4 py-2 border border-[var(--electric)]/40 text-[var(--electric)] hover:bg-[var(--electric)]/10 transition-colors">
            Next Match
          </a>
        </div>
        <button onClick={() => setOpen(o => !o)} className="lg:hidden p-2 text-foreground" aria-label="menu">
          <div className={`w-6 h-0.5 bg-current transition-all ${open ? "rotate-45 translate-y-[5px]" : ""}`} />
          <div className={`w-6 h-0.5 bg-current my-1 transition-all ${open ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-current transition-all ${open ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="lg:hidden mt-3 mx-5 glass-strong p-5 flex flex-col gap-3">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
               className="text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-[var(--electric)]">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
