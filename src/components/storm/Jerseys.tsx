import { motion } from "framer-motion";
import jersey from "@/assets/storm-jersey.jpg";

export function Jerseys() {
  return (
    <section id="jerseys" className="relative py-28 md:py-40 px-5 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[var(--electric)]/5 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[var(--blood)]" />
              <span className="font-mono text-[11px] tracking-[0.3em] text-[var(--blood)] uppercase">03 — Official Kit</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">
              The official <span className="text-gradient-blade">jersey.</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              Royal blue, gold lightning, crested SB. The Storm Breakers home kit — worn by every brother who steps onto the pitch.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-px bg-border max-w-md">
              {[
                ["Colour", "Royal Blue / Gold"],
                ["Sponsor", "TIME FALL GAME"],
                ["Back", "alpha.iox"],
                ["Crest", "SB Lightning"],
              ].map(([k, v]) => (
                <div key={k} className="bg-background p-4">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{k}</div>
                  <div className="font-display text-base text-foreground mt-1">{v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative">
            <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-[var(--electric)]/30 via-transparent to-[var(--blood)]/20 blur-3xl" />
            <div className="relative overflow-hidden border border-border bg-card">
              <img
                src={jersey}
                alt="Storm Breakers official jersey — front and back"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-[10px] font-mono tracking-[0.3em] uppercase text-muted-foreground">
              <span>Front · Sponsor Side</span>
              <span>Back · Player Name</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
