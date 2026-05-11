import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { usePlayers } from "@/lib/storm-store";
import logo from "@/assets/storm-logo.png";

export function Squad() {
  const { players } = usePlayers();
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
              Twenty names. <br/>One <span className="text-gradient-blade">storm.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            The brotherhood that takes the pitch. Tap any player to open their card and edit name, jersey number or photo.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {players.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 10) * 0.04 }}>
              <Link
                to="/squad/$playerId"
                params={{ playerId: p.id }}
                className="group block relative overflow-hidden bg-card border border-border hover-lift">
                <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-[var(--electric)]/15 via-card to-[var(--blood)]/15">
                  {p.image ? (
                    <img src={p.image} alt={p.name} loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1200ms]" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
                      <img src={logo} alt="" className="w-24 h-24 object-contain" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute top-3 left-3 z-10">
                    <div className="font-display text-4xl leading-none text-foreground/95 drop-shadow-[0_3px_12px_rgba(0,0,0,0.7)]">{p.number}</div>
                  </div>
                  {p.badge && (
                    <div className="absolute top-3 right-3 z-10 px-2 py-0.5 bg-[var(--blood)] text-[9px] font-mono tracking-[0.2em] uppercase text-foreground">
                      {p.badge === "Captain" ? "C" : p.badge === "Vice Captain" ? "VC" : p.badge === "Coach" ? "COACH" : p.badge}
                    </div>
                  )}
                </div>
                <div className="p-3 relative">
                  <h3 className="font-display text-lg text-foreground leading-tight truncate">{p.name}</h3>
                  <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-[var(--electric)] mt-1 truncate">{p.role}</div>
                </div>
                <div className="absolute inset-0 pointer-events-none border border-[var(--electric)]/0 group-hover:border-[var(--electric)]/60 transition-colors duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
