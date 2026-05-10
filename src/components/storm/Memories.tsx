import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useMemories, fileToDataURL } from "@/lib/storm-store";

export function Memories() {
  const { memories, add, remove } = useMemories();
  const [open, setOpen] = useState<string | null>(null);
  const [label, setLabel] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const onFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    for (const f of files) {
      const url = await fileToDataURL(f);
      add(url, label.trim() || f.name.replace(/\.[^.]+$/, ""));
    }
    setLabel("");
    if (fileRef.current) fileRef.current.value = "";
  };

  const openMem = open ? memories.find(m => m.id === open) : null;

  return (
    <section id="memories" className="relative py-28 md:py-40 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[var(--electric)]" />
              <span className="font-mono text-[11px] tracking-[0.3em] text-[var(--electric)] uppercase">04 — Memories</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">
              Moments<br/>that <span className="text-gradient-blade">made us.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">Match-day frames, locker-room laughs, trophy lifts. Add your own photos below — they live in this browser.</p>
        </div>

        {/* Uploader */}
        <div className="glass p-5 mb-10 flex flex-col md:flex-row gap-3 items-stretch md:items-center">
          <input
            value={label}
            onChange={e => setLabel(e.target.value)}
            placeholder="Optional caption (e.g. 'Final vs Hawks · 2026')"
            className="flex-1 bg-background/60 border border-border px-4 py-3 text-sm focus:outline-none focus:border-[var(--electric)] transition-colors"
          />
          <input ref={fileRef} type="file" accept="image/*" multiple onChange={onFiles} className="hidden" />
          <button
            onClick={() => fileRef.current?.click()}
            className="px-6 py-3 bg-[var(--electric)] text-background font-display tracking-[0.25em] text-xs uppercase hover:scale-[1.03] transition-transform">
            + Add Photos
          </button>
        </div>

        {memories.length === 0 ? (
          <div className="border border-dashed border-border p-16 text-center text-muted-foreground">
            <div className="font-display text-2xl text-foreground mb-2">No memories yet</div>
            <p className="text-sm">Tap “Add Photos” to upload match-day moments, team photos, or trophy shots.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
            {memories.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: Math.min(i, 8) * 0.04 }}
                className={`group relative overflow-hidden bg-card cursor-pointer ${i % 5 === 0 ? "row-span-2 col-span-2" : ""}`}>
                <button onClick={() => setOpen(p.id)} className="block w-full h-full">
                  <img src={p.src} alt={p.label} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-foreground/0 group-hover:ring-[var(--electric)]/60 transition-all" />
                  <div className="absolute bottom-0 inset-x-0 p-4 text-left">
                    <div className="font-display text-sm md:text-base text-foreground">{p.label}</div>
                  </div>
                </button>
                <button
                  onClick={() => remove(p.id)}
                  className="absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center bg-background/80 backdrop-blur border border-border text-muted-foreground hover:text-[var(--blood)] hover:border-[var(--blood)] opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Remove">
                  ✕
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {openMem && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-5">
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              src={openMem.src} alt={openMem.label}
              className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl" />
            <button className="absolute top-6 right-6 text-foreground/70 hover:text-foreground text-2xl">✕</button>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-display tracking-[0.25em] uppercase text-sm text-foreground">{openMem.label}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
