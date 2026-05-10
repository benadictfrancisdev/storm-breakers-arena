import { motion } from "framer-motion";

const upcoming = [
  { date: "MAY 18", time: "20:00", opp: "Iron Wolves FC", venue: "Thunder Arena · Home", tag: "League" },
  { date: "MAY 25", time: "19:30", opp: "Crimson United", venue: "Estadio Norte · Away", tag: "Cup QF" },
  { date: "JUN 02", time: "21:00", opp: "Phantom XI",      venue: "Thunder Arena · Home", tag: "League" },
];

const results = [
  { date: "MAY 04", opp: "Northern Vipers", score: "3 — 1", w: true },
  { date: "APR 27", opp: "Atlas Real",      score: "2 — 2", w: null },
  { date: "APR 20", opp: "Granite SC",      score: "4 — 0", w: true },
];

export function Matches() {
  return (
    <section id="matches" className="relative py-28 md:py-40 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-10 bg-[var(--electric)]" />
          <span className="font-mono text-[11px] tracking-[0.3em] text-[var(--electric)] uppercase">06 — Fixtures</span>
        </div>
        <h2 className="font-display text-5xl md:text-7xl leading-[0.9] mb-14">
          The road <span className="text-gradient-blade">ahead.</span>
        </h2>

        <div className="grid lg:grid-cols-3 gap-6 mb-14">
          {upcoming.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative p-7 border border-border bg-card hover-lift group overflow-hidden ${i === 0 ? "ring-1 ring-[var(--electric)]/40" : ""}`}>
              {i === 0 && (
                <div className="absolute top-4 right-4 flex items-center gap-2 text-[10px] font-mono tracking-[0.3em] uppercase text-[var(--electric)]">
                  <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--electric)]" /><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--electric)]" /></span>
                  Next
                </div>
              )}
              <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-muted-foreground">{m.tag}</div>
              <div className="font-display text-4xl mt-2 text-foreground">{m.date}</div>
              <div className="font-mono text-sm text-[var(--electric)] mt-1">{m.time}</div>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="text-xs text-muted-foreground uppercase tracking-[0.2em]">vs</div>
                <div className="font-display text-2xl mt-1">{m.opp}</div>
                <div className="text-xs text-muted-foreground mt-2">{m.venue}</div>
              </div>
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[var(--electric)] via-[var(--blood)] to-[var(--electric)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

        <div className="glass-strong p-6 md:p-8">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-display text-xl tracking-[0.2em]">Recent Results</h3>
            <span className="text-xs text-muted-foreground font-mono">2026 Season</span>
          </div>
          <div className="divide-y divide-border">
            {results.map((r, i) => (
              <div key={i} className="grid grid-cols-12 items-center gap-4 py-4">
                <div className="col-span-3 md:col-span-2 font-mono text-xs text-muted-foreground">{r.date}</div>
                <div className="col-span-5 md:col-span-7 font-display tracking-[0.1em]">{r.opp}</div>
                <div className="col-span-3 md:col-span-2 font-display text-lg text-foreground">{r.score}</div>
                <div className="col-span-1 text-right">
                  <span className={`inline-block px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest ${r.w === true ? "bg-[var(--electric)]/15 text-[var(--electric)]" : r.w === false ? "bg-[var(--blood)]/15 text-[var(--blood)]" : "bg-muted text-muted-foreground"}`}>
                    {r.w === true ? "W" : r.w === false ? "L" : "D"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
