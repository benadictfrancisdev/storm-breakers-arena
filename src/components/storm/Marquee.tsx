export function Marquee() {
  const items = ["Brotherhood", "Loyalty", "Aggression", "Victory", "Legacy", "Passion", "Honor", "Fearless"];
  return (
    <div className="relative border-y border-border bg-background overflow-hidden">
      <div className="flex marquee-track py-5 whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((w, i) => (
          <span key={i} className="font-display text-3xl md:text-5xl tracking-[0.15em] uppercase mx-8 text-foreground/80 flex items-center gap-8">
            {w}
            <span className="text-[var(--blood)]">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
