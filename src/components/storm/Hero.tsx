import { motion } from "framer-motion";
import heroImg from "@/assets/hero-team.jpg";

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

        <motion.h1
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}
          className="font-display text-[clamp(3.5rem,12vw,11rem)] leading-[0.85] tracking-tight">
          <span className="block text-gradient-metal">Storm</span>
          <span className="block text-gradient-blade -mt-2">Breakers</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
          Bat. Ball. Brotherhood. <span className="text-foreground">We are the storm.</span>{" "}
          Twenty brothers. One badge. Every boundary fought for together.
        </motion.p>

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
