import { motion } from "framer-motion";

const chants = [
  "WE ARE THE STORM!",
  "LIGHTNING IN OUR VEINS!",
  "BREAKERS — TILL I DIE!",
];

export function Community() {
  return (
    <section id="community" className="relative py-28 md:py-40 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[var(--blood)]" />
              <span className="font-mono text-[11px] tracking-[0.3em] text-[var(--blood)] uppercase">07 — Family</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">
              The 12th <span className="text-gradient-blade">player.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">Without you in the stands, the thunder is just noise. You are the storm we ride into.</p>
        </div>

        {/* chants strip */}
        <div className="grid md:grid-cols-3 gap-4 mb-14">
          {chants.map((c, i) => (
            <motion.div key={c}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-5 flex items-center gap-4 group hover:border-[var(--electric)]/50 transition-colors">
              <div className="font-display text-3xl text-[var(--electric)] group-hover:flicker">♪</div>
              <div className="font-display tracking-[0.15em] text-foreground">{c}</div>
            </motion.div>
          ))}
        </div>

        <div className="text-center glass-strong p-10 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--electric)]/10 via-transparent to-[var(--blood)]/10" />
          <h3 className="font-display text-3xl md:text-5xl">Join the Brotherhood</h3>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">Get matchday alerts, exclusive squad drops, and the inside frame from the locker room.</p>
          <form className="mt-7 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
            <input type="email" required placeholder="your@email.com"
              className="flex-1 bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-[var(--electric)] transition-colors" />
            <button className="px-6 py-3 bg-[var(--electric)] text-background font-display tracking-[0.25em] text-xs uppercase hover:scale-[1.03] transition-transform">
              Enlist
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
