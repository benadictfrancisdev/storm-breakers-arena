import { motion } from "framer-motion";
import heroImg from "@/assets/hero-team.jpg";
import familyCircle from "@/assets/hero-family-circle.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center noise">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Storm Breakers squad" className="w-full h-full object-cover scale-110" width={1920} height={1088} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 scanline opacity-40" />
        {/* glowing horizontal lines */}
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--electric)] to-transparent origin-left" />
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.4, delay: 0.8 }}
          className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--blood)] to-transparent origin-right" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 w-full pt-32 pb-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-6">
          <div className="h-px w-12 bg-[var(--electric)]" />
          <span className="font-mono text-[11px] tracking-[0.3em] text-[var(--electric)] uppercase">Storm Breakers · Cricket Club</span>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}
              className="font-display text-[clamp(3rem,10vw,9rem)] leading-[0.85] tracking-tight">
              <span className="block text-gradient-metal">Storm</span>
              <span className="block text-gradient-blade -mt-2">Breakers</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Bat. Ball. Brotherhood. <span className="text-foreground">We are the storm.</span>{" "}
              Twenty brothers. One badge. Every boundary fought for together.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative mx-auto w-full max-w-md lg:max-w-lg">
            <motion.div
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[var(--electric)]/40 via-[var(--navy)]/30 to-[var(--gold)]/40 blur-2xl opacity-70"
              animate={{ opacity: [0.5, 0.85, 0.5], scale: [1, 1.04, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* secondary chromatic rim — silver sweep that breathes with the halo */}
            <motion.div
              className="absolute -inset-1 rounded-[1.9rem] bg-[conic-gradient(from_140deg,transparent_0deg,var(--silver)_60deg,transparent_140deg,var(--electric)_220deg,transparent_300deg)] opacity-40 blur-[6px]"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-[var(--silver)]/25 shadow-2xl bg-background/40 backdrop-blur ring-1 ring-[var(--electric)]/20">
              <img
                src={familyCircle}
                alt="Storm Breakers huddle — in that circle, we were family"
                className="block w-full h-auto object-contain"
                loading="eager"
              />
              {/* color-flow grading: cool electric lift on top-left, warm metal fade at base */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--electric)]/15 via-transparent to-[var(--silver)]/10 mix-blend-screen" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/55 via-background/5 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_15%,oklch(0.85_0.05_240/0.18),transparent_55%)]" />
            </div>
            <div className="mt-4 text-center font-mono text-[10px] tracking-[0.35em] text-muted-foreground uppercase">
              In that circle · we were family
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-wrap gap-4">
          <a href="#squad" className="group relative inline-flex items-center gap-3 px-7 py-4 bg-[var(--electric)] text-background font-display tracking-[0.25em] text-sm uppercase pulse-glow hover:scale-[1.03] transition-transform">
            <span>Meet The Squad</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="#jerseys" className="group inline-flex items-center gap-3 px-7 py-4 border border-foreground/30 text-foreground font-display tracking-[0.25em] text-sm uppercase hover:border-[var(--blood)] hover:text-[var(--blood)] transition-all">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--blood)] opacity-75"/><span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--blood)]"/></span>
            Official Kit
          </a>
        </motion.div>

        {/* hero stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border max-w-3xl">
          {[
            ["20", "Squad"],
            ["1", "Brotherhood"],
            ["XI", "On The Pitch"],
            ["∞", "Legacy"],
          ].map(([n, l]) => (
            <div key={l} className="bg-background/70 backdrop-blur p-5">
              <div className="font-display text-3xl md:text-4xl text-gradient-blade">{n}</div>
              <div className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase mt-1">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-[var(--electric)] to-transparent" />
      </div>
    </section>
  );
}
