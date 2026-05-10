import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const val = useMotionValue(0);
  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(val, to, { duration: 2, ease: [0.2, 0.7, 0.2, 1] });
    const unsub = val.on("change", v => {
      if (ref.current) ref.current.textContent = Math.round(v) + suffix;
    });
    return () => { ctrl.stop(); unsub(); };
  }, [inView, to, val, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { n: 12, s: "", label: "Trophies Lifted", sub: "since 2014" },
  { n: 8,  s: "", label: "Tournament Wins", sub: "domestic & abroad" },
  { n: 14, s: "", label: "MVP Awards", sub: "across the squad" },
  { n: 89, s: "%", label: "Win Rate", sub: "last 36 months" },
];

export function Trophies() {
  return (
    <section id="trophies" className="relative py-28 md:py-40 px-5 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-[0.04]">
        <div className="font-display text-[28rem] leading-none whitespace-nowrap absolute -top-20 -left-20 text-foreground">CHAMPIONS</div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-[var(--blood)]" />
            <span className="font-mono text-[11px] tracking-[0.3em] text-[var(--blood)] uppercase">05 — Achievements</span>
            <div className="h-px w-10 bg-[var(--blood)]" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">
            Carved in <span className="text-gradient-blade">silver.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-background p-8 md:p-10 group hover:bg-card transition-colors relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--electric)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="font-display text-6xl md:text-7xl text-gradient-blade leading-none">
                <Counter to={s.n} suffix={s.s} />
              </div>
              <div className="mt-4 font-display tracking-[0.2em] text-sm uppercase">{s.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
