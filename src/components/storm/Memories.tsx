import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import m1 from "@/assets/mem1.jpg";
import m2 from "@/assets/mem2.jpg";
import m3 from "@/assets/mem3.jpg";
import m4 from "@/assets/mem4.jpg";
import m5 from "@/assets/mem5.jpg";
import m6 from "@/assets/mem6.jpg";

const photos = [
  { src: m1, label: "Champions Cup · 2023", span: "row-span-2" },
  { src: m2, label: "Locker Room · Brotherhood", span: "" },
  { src: m3, label: "The Goal That Won It All", span: "" },
  { src: m4, label: "Night Run · Stadium 7", span: "row-span-2" },
  { src: m5, label: "Silver In Our Hands", span: "" },
  { src: m6, label: "Arrival · Game Day", span: "" },
];

export function Memories() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="memories" className="relative py-28 md:py-40 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[var(--electric)]" />
              <span className="font-mono text-[11px] tracking-[0.3em] text-[var(--electric)] uppercase">04 — Memories</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">
              Moments<br/>that <span className="text-gradient-blade">made us.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">Frames stolen from history. Sweat, smoke, and silver — etched forever.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
          {photos.map((p, i) => (
            <motion.button
              key={i}
              onClick={() => setOpen(i)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className={`group relative overflow-hidden bg-card cursor-pointer ${p.span} ${i === 0 ? "col-span-2" : ""}`}>
              <img src={p.src} alt={p.label} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 ring-1 ring-inset ring-foreground/0 group-hover:ring-[var(--electric)]/60 transition-all" />
              <div className="absolute bottom-0 inset-x-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[var(--electric)] opacity-0 group-hover:opacity-100 transition-opacity">View</div>
                <div className="font-display text-sm md:text-base text-foreground">{p.label}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-5">
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              src={photos[open].src} alt={photos[open].label}
              className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl" />
            <button className="absolute top-6 right-6 text-foreground/70 hover:text-foreground text-2xl">✕</button>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-display tracking-[0.25em] uppercase text-sm text-foreground">{photos[open].label}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
