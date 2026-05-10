import { motion } from "framer-motion";
import p1 from "@/assets/player1.jpg";
import p2 from "@/assets/player2.jpg";
import p3 from "@/assets/player3.jpg";
import p4 from "@/assets/player4.jpg";

const players = [
  { img: p3, n: "07", name: "Marcus Vale", nick: "The Captain", role: "Forward / Leader", goals: 142, assists: 88, mvp: 4 },
  { img: p1, n: "10", name: "Kai Nakamura", nick: "Lightning", role: "Playmaker", goals: 98, assists: 121, mvp: 3 },
  { img: p2, n: "09", name: "Diego Cruz", nick: "El Toro", role: "Striker", goals: 168, assists: 42, mvp: 5 },
  { img: p4, n: "01", name: "Anton Reyes", nick: "The Wall", role: "Goalkeeper", goals: 0, assists: 6, mvp: 2 },
];

export function Squad() {
  return (
    <section id="squad" className="relative py-28 md:py-40 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[var(--electric)]" />
              <span className="font-mono text-[11px] tracking-[0.3em] text-[var(--electric)] uppercase">02 — The Squad</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">
              Meet the <span className="text-gradient-blade">storm.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">Eleven on the pitch. One heart pounding. The names that carry the badge.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {players.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden bg-card border border-border hover-lift">
              <div className="relative aspect-[3/4] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--electric)]/30 via-transparent to-[var(--blood)]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay z-10" />
                <img src={p.img} alt={p.name} loading="lazy" width={1024} height={1280}
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1200ms]" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute top-4 left-4 z-20">
                  <div className="font-display text-[5rem] leading-none text-foreground/90 drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">{p.n}</div>
                </div>
                <div className="absolute bottom-4 right-4 z-20 text-right">
                  <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[var(--electric)]">{p.role}</div>
                </div>
              </div>
              <div className="p-5 relative">
                <h3 className="font-display text-2xl text-foreground">{p.name}</h3>
                <p className="text-sm text-[var(--blood)] italic">"{p.nick}"</p>
                <div className="mt-4 grid grid-cols-3 gap-2 pt-4 border-t border-border">
                  {[["G", p.goals], ["A", p.assists], ["MVP", p.mvp]].map(([k,v]) => (
                    <div key={k as string}>
                      <div className="text-[9px] font-mono tracking-[0.3em] uppercase text-muted-foreground">{k}</div>
                      <div className="font-display text-xl text-foreground">{v}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none border border-[var(--electric)]/0 group-hover:border-[var(--electric)]/60 transition-colors duration-500" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
