import { motion } from "framer-motion";
import { useState } from "react";
import jf from "@/assets/jersey-front.jpg";
import jb from "@/assets/jersey-back.jpg";

export function Jerseys() {
  const [flipped, setFlipped] = useState(false);
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
              Wear the <br/><span className="text-gradient-blade">thunder.</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              Onyx black. Electric blue strike. Crimson edge. The 2026 home kit is more than fabric — it's a flag you carry into battle.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-px bg-border max-w-md">
              {[["Color","Onyx / Electric"], ["Material","Hex-Pro Mesh"], ["Tech","ThermoFlow™"], ["Number","#07 STORM"]].map(([k,v]) => (
                <div key={k} className="bg-background p-4">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{k}</div>
                  <div className="font-display text-base text-foreground mt-1">{v}</div>
                </div>
              ))}
            </div>
            <button onClick={() => setFlipped(f => !f)}
              className="mt-8 inline-flex items-center gap-3 px-6 py-3 border border-[var(--electric)]/50 text-[var(--electric)] hover:bg-[var(--electric)]/10 transition-colors font-display tracking-[0.25em] text-xs uppercase">
              <span>{flipped ? "View Front" : "View Back"}</span>
              <span>↻</span>
            </button>
          </motion.div>

          <div className="relative h-[520px] md:h-[640px] flex items-center justify-center [perspective:1500px]">
            {/* halo */}
            <div className="absolute inset-10 rounded-full bg-gradient-to-br from-[var(--electric)]/20 via-transparent to-[var(--blood)]/20 blur-3xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="font-display text-[18rem] md:text-[22rem] leading-none text-gradient-blade opacity-10 select-none">07</div>
            </div>
            <motion.div
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
              className="relative w-[320px] md:w-[420px] aspect-[4/5] [transform-style:preserve-3d]">
              <div className="absolute inset-0 [backface-visibility:hidden]">
                <img src={jf} alt="Jersey front" loading="lazy" width={1024} height={1280} className="w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)]" />
              </div>
              <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <img src={jb} alt="Jersey back" loading="lazy" width={1024} height={1280} className="w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)]" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
