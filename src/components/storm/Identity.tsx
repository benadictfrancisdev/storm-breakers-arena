import { motion } from "framer-motion";

const timeline = [
  { y: "2014", t: "Founded", d: "Six brothers, one dream. The first thunder strikes." },
  { y: "2017", t: "Regional Champions", d: "Our first silver. The hunger only grew." },
  { y: "2020", t: "National Title", d: "An undefeated season. The storm arrived." },
  { y: "2023", t: "Continental Cup", d: "Lifted under the lights. Cemented the legacy." },
  { y: "2026", t: "The Next Strike", d: "We rebuild. We reload. We return." },
];

export function Identity() {
  return (
    <section id="identity" className="relative py-28 md:py-40 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[var(--blood)]" />
              <span className="font-mono text-[11px] tracking-[0.3em] text-[var(--blood)] uppercase">01 — Identity</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">
              Forged in <span className="text-gradient-blade">thunder.</span><br/>
              Bound by <span className="text-gradient-blade">blood.</span>
            </h2>
            <div className="mt-8 space-y-5 text-muted-foreground text-base leading-relaxed max-w-md">
              <p>Storm Breakers is not a roster. It's a covenant. A promise made in dim locker rooms before the floodlights ever rise.</p>
              <p className="text-foreground/90">When the world calls us underdogs, we answer in scorelines. When they doubt the brotherhood, we answer with silverware.</p>
              <p>Every jersey we wear carries the names of those who built this house. Every match, we play for them.</p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {[["Mission","Dominate"], ["Values","Loyalty"], ["Code","Brotherhood"]].map(([k,v]) => (
                <div key={k} className="glass p-4">
                  <div className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">{k}</div>
                  <div className="font-display text-lg mt-1 text-[var(--electric)]">{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-10">
            <div className="relative">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--electric)] via-border to-[var(--blood)]" />
              <div className="space-y-7">
                {timeline.map((e, i) => (
                  <motion.div
                    key={e.y}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="relative pl-12">
                    <div className="absolute left-0 top-2 w-6 h-6 flex items-center justify-center">
                      <div className="absolute inset-0 rotate-45 border border-[var(--electric)]" />
                      <div className="w-2 h-2 bg-[var(--electric)] rotate-45 glow-blue" />
                    </div>
                    <div className="glass p-6 hover-lift group">
                      <div className="flex items-baseline justify-between flex-wrap gap-2">
                        <h3 className="font-display text-2xl text-foreground">{e.t}</h3>
                        <span className="font-mono text-sm text-[var(--electric)]">{e.y}</span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{e.d}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
