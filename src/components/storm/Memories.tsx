import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const VIDEOS = [
  { src: "/memories/storm-1.mp4", label: "Storm in motion · Match clip" },
  { src: "/memories/storm-2.mp4", label: "Boundary moments · Storm XI" },
  { src: "/memories/storm-3.mp4", label: "On the ground · Brotherhood" },
];

import huddle1 from "@/assets/memories/team-huddle-1.jpg";
import huddle2 from "@/assets/memories/team-huddle-2.jpg";
import lineup1 from "@/assets/memories/team-lineup-1.jpg";
import lineup2 from "@/assets/memories/team-lineup-2.jpg";
import lineup3 from "@/assets/memories/team-lineup-3.jpg";
import lineup4 from "@/assets/memories/team-lineup-4.jpg";
import felix from "@/assets/memories/felix-33.jpg";
import kanna from "@/assets/memories/kanna-2.jpg";
import bat from "@/assets/memories/player-bat.jpg";
import ball from "@/assets/memories/player-ball.jpg";
import groupField1 from "@/assets/memories/group-field-1.jpg";
import groupField2 from "@/assets/memories/group-field-2.jpg";
import familyCircle from "@/assets/memories/family-circle.jpg";
import squadBench from "@/assets/memories/squad-bench.jpg";
import batKnockIn from "@/assets/memories/bat-knock-in.jpg";
import bowlerGround from "@/assets/memories/bowler-ground.jpg";
import turfNight from "@/assets/memories/turf-night.jpg";
import cageNightTeam from "@/assets/memories/cage-night-team.jpg";
import groundSquad1 from "@/assets/memories/ground-squad-1.jpg";
import groundSquad2 from "@/assets/memories/ground-squad-2.jpg";
import coachPortrait from "@/assets/memories/coach-portrait.jpg";
import batPickup from "@/assets/memories/bat-pickup.jpg";
import palmGround from "@/assets/memories/palm-ground.jpg";
import benadict4 from "@/assets/memories/benadict-4.jpg";
import cageVictory from "@/assets/memories/cage-victory.jpg";

type Memory = { src: string; label: string };

const MEMORIES: Memory[] = [
  { src: benadict4,     label: "Benadict · #4 walks the crease" },
  { src: cageNightTeam, label: "Turf cage · Night squad" },
  { src: cageVictory,   label: "Inside the cage · Brothers" },
  { src: groundSquad1,  label: "Ground day · Blue army" },
  { src: groundSquad2,  label: "Sunset selfie · Storm XI" },
  { src: coachPortrait, label: "On the field · Game face" },
  { src: palmGround,    label: "Palm grove pitch · Home ground" },
  { src: batPickup,     label: "Picking the willow · Bat day" },
  { src: familyCircle, label: "In that circle · We were FAMILY" },
  { src: turfNight,    label: "Turf nights · Storm Breakers XI" },
  { src: groupField1,  label: "Ground day · Squad selfie" },
  { src: groupField2,  label: "Brothers in blue · Match ready" },
  { src: squadBench,   label: "After the game · Bench laughs" },
  { src: batKnockIn,   label: "Knocking in · Bat ritual" },
  { src: bowlerGround, label: "Walk back · Bowler's mark" },
  { src: huddle1, label: "Pre-match huddle · Brotherhood" },
  { src: lineup1, label: "Squad lined up · Match day" },
  { src: felix,   label: "Felix · #33 Vice Captain" },
  { src: lineup2, label: "Eight strong · One storm" },
  { src: huddle2, label: "Locked in · Final over" },
  { src: kanna,   label: "Kanna · #2 ready to swing" },
  { src: lineup3, label: "Backs to the world" },
  { src: bat,     label: "On the crease" },
  { src: lineup4, label: "Storm Breakers XI" },
  { src: ball,    label: "Bowler in blue" },
];

export function Memories() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const open = openIdx !== null ? MEMORIES[openIdx] : null;

  return (
    <section id="memories" className="relative py-28 md:py-40 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[var(--electric)]" />
              <span className="font-mono text-[11px] tracking-[0.3em] text-[var(--electric)] uppercase">04 — Memories</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">
              Moments<br/>that <span className="text-gradient-blade">made us.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Match-day frames, locker-room laughs, trophy lifts. Tap any image to see it full-size.
          </p>
        </div>

        {/* Video reels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {VIDEOS.map((v, i) => (
            <motion.div
              key={v.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden bg-card aspect-video">
              <video
                src={v.src}
                className="w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
              />
              <div className="absolute bottom-0 inset-x-0 p-3 pointer-events-none bg-gradient-to-t from-background/90 to-transparent">
                <div className="font-display text-sm text-foreground">{v.label}</div>
              </div>
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-[var(--electric)]/30 group-hover:ring-[var(--electric)]/70 transition-all" />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
          {MEMORIES.map((p, i) => (
            <motion.button
              key={p.src}
              onClick={() => setOpenIdx(i)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: Math.min(i, 8) * 0.04 }}
              className={`group relative overflow-hidden bg-card text-left ${i % 5 === 0 ? "row-span-2 col-span-2" : ""}`}>
              <img src={p.src} alt={p.label} loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 ring-1 ring-inset ring-foreground/0 group-hover:ring-[var(--electric)]/60 transition-all" />
              <div className="absolute bottom-0 inset-x-0 p-4">
                <div className="font-display text-sm md:text-base text-foreground">{p.label}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpenIdx(null)}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-5">
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              src={open.src} alt={open.label}
              className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl" />
            <button className="absolute top-6 right-6 text-foreground/70 hover:text-foreground text-2xl" aria-label="Close">✕</button>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-display tracking-[0.25em] uppercase text-sm text-foreground">{open.label}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}