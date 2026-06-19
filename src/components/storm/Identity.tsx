import { motion } from "framer-motion";
import prakashImg from "@/assets/leaders/nanda-captain.jpg";
import nandaImg from "@/assets/leaders/prakash-coach.jpg";
import charanImg from "@/assets/charan-vice-captain.jpg.asset.json";
import logo from "@/assets/storm-logo.png";
import kannaImg from "@/assets/memories/kanna-2.jpg";
import benadictImg from "@/assets/memories/benadict-4.jpg";
import felixMemImg from "@/assets/memories/felix-33.jpg";
import coachPortrait from "@/assets/memories/coach-portrait.jpg";
import bat from "@/assets/memories/player-bat.jpg";
import ball from "@/assets/memories/player-ball.jpg";

const avatars = [
  { img: nandaImg,      label: "Nanda · C" },
  { img: charanImg.url, label: "Charan · VC" },
  { img: prakashImg,    label: "Coach" },
  { img: kannaImg,      label: "Kanna · 2" },
  { img: benadictImg,   label: "Benadict · 4" },
  { img: felixMemImg,   label: "Felix · 33" },
  { img: coachPortrait, label: "On field" },
  { img: bat,           label: "Crease" },
  { img: ball,          label: "Bowler" },
];

const leaders = [
  { img: nandaImg,      name: "Nanda",   number: "6",  role: "Captain",      tagline: "Leads from the front. Bats with the team on his shoulders." },
  { img: prakashImg,    name: "Prakash", number: "22", role: "Head Coach",   tagline: "The voice in every huddle. The plan behind every win." },
  { img: charanImg.url, name: "Charan",  number: "30", role: "Vice Captain", tagline: "All-rounder. The spark when the game needs lifting." },
];

export function Identity() {
  return (
    <section id="identity" className="relative py-28 md:py-40 px-5">
      <div className="max-w-7xl mx-auto">
        {/* About + Fans */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24 items-center">
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[var(--blood)]" />
              <span className="font-mono text-[11px] tracking-[0.3em] text-[var(--blood)] uppercase">01 — About Us</span>
            </div>
            <div className="relative mb-8">
              <div className="absolute inset-0 blur-3xl bg-[var(--electric)]/30 rounded-full" />
              <img src={logo} alt="Storm Breakers official crest" className="relative w-56 md:w-72 object-contain drop-shadow-[0_0_30px_oklch(0.68_0.22_245/0.6)]" />
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">
              For the team. <br/>
              For the <span className="text-gradient-blade">fans.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pl-10 space-y-6 text-base md:text-lg leading-relaxed">
            <p className="text-foreground/90">
              Storm Breakers Cricket Club is a brotherhood built on local grounds, late evenings and the love of the game. Eighteen players, one badge, one home crowd.
            </p>
            <p className="text-muted-foreground">
              To the families on the boundary, the friends on the bench, and every fan who shows up in blue — this club is yours too. Your cheers carry every shot, every wicket, every win.
            </p>
            <p className="text-[var(--electric)] font-display tracking-[0.2em] uppercase text-sm">
              Storm Breakers · For the fans, always.
            </p>
          </div>
        </div>

        {/* Circular player avatars — the brothers */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-[var(--gold)]" />
            <span className="font-mono text-[11px] tracking-[0.3em] text-[var(--gold)] uppercase">The Brothers</span>
          </div>
          <div className="flex flex-wrap gap-5 md:gap-7">
            {avatars.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group flex flex-col items-center gap-2">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[var(--electric)] via-[var(--navy)] to-[var(--gold)] opacity-70 group-hover:opacity-100 blur-[2px] transition-opacity" />
                  <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden ring-2 ring-background">
                    <img src={a.img} alt={a.label} loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                </div>
                <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground group-hover:text-foreground transition-colors">
                  {a.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[var(--electric)]" />
            <span className="font-mono text-[11px] tracking-[0.3em] text-[var(--electric)] uppercase">02 — The Leaders</span>
          </div>
          <h3 className="font-display text-4xl md:text-6xl leading-[0.9]">
            The men who <span className="text-gradient-blade">hold the line.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {leaders.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-card border border-border overflow-hidden hover-lift">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={l.img} alt={`${l.name} — ${l.role}`} loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1400ms]" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute top-4 left-4 px-2 py-0.5 bg-[var(--blood)] text-[10px] font-mono tracking-[0.25em] uppercase">
                  {l.role}
                </div>
                <div className="absolute top-4 right-4 font-display text-5xl text-foreground/95 drop-shadow-[0_3px_12px_rgba(0,0,0,0.7)]">
                  {l.number}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="font-display text-3xl text-foreground">{l.name}</div>
                  <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[var(--electric)] mt-1">Storm Breakers · CC</div>
                </div>
              </div>
              <div className="p-5 border-t border-border/60">
                <p className="text-sm text-muted-foreground leading-relaxed">{l.tagline}</p>
              </div>
              <div className="absolute inset-0 pointer-events-none border border-[var(--electric)]/0 group-hover:border-[var(--electric)]/60 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
