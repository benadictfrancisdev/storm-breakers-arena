import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Nav } from "@/components/storm/Nav";
import { Footer } from "@/components/storm/Footer";
import { usePlayers, fileToDataURL, defaultPlayers } from "@/lib/storm-store";
import logo from "@/assets/storm-logo.png";

export const Route = createFileRoute("/squad/")({
  head: ({ params }) => {
    const p = defaultPlayers.find(pl => pl.id === params.playerId);
    const title = p ? `${p.name} · #${p.number} — Storm Breakers` : "Player — Storm Breakers";
    return {
      meta: [
        { title },
        { name: "description", content: p ? `${p.name} (#${p.number}) — ${p.role} for Storm Breakers Cricket Club.` : "Storm Breakers player profile." },
        { property: "og:title", content: title },
      ],
    };
  },
  component: PlayerPage,
});

function PlayerPage() {
  const { playerId } = Route.useParams();
  const navigate = useNavigate();
  const { players, update } = usePlayers();
  const player = players.find(p => p.id === playerId);
  const fileRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [role, setRole] = useState("");
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (player) {
      setName(player.name);
      setNumber(player.number);
      setRole(player.role);
    }
  }, [player?.id]);

  if (!player) {
    return (
      <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-5">
        <div className="text-center">
          <h1 className="font-display text-5xl">Player not found</h1>
          <Link to="/" className="mt-6 inline-block text-[var(--electric)] underline">Back home</Link>
        </div>
      </main>
    );
  }

  const onUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const dataUrl = await fileToDataURL(f);
    update(player.id, { image: dataUrl });
  };

  const save = () => {
    update(player.id, { name: name.trim() || player.name, number: number.trim() || player.number, role: role.trim() || player.role });
    setEditing(false);
  };

  return (
    <main className="relative bg-background text-foreground overflow-x-hidden min-h-screen">
      <Nav />
      <section className="pt-32 pb-20 px-5">
        <div className="max-w-6xl mx-auto">
          <button onClick={() => navigate({ to: "/", hash: "squad" })}
            className="mb-8 text-xs tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground">
            ← Back to Squad
          </button>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
              className="relative aspect-[3/4] bg-card border border-border overflow-hidden group">
              {player.image ? (
                <img src={player.image} alt={player.name} className="w-full h-full object-cover" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--electric)]/20 via-card to-[var(--blood)]/20">
                  <img src={logo} alt="" className="w-48 h-48 object-contain opacity-40" />
                </div>
              )}
              <div className="absolute top-4 left-4 font-display text-7xl text-foreground drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)]">
                {player.number}
              </div>
              <button
                onClick={() => fileRef.current?.click()}
                className="absolute bottom-4 right-4 px-4 py-2 bg-background/80 backdrop-blur border border-[var(--electric)]/50 text-[var(--electric)] text-xs tracking-[0.25em] uppercase hover:bg-[var(--electric)]/10 transition-colors">
                {player.image ? "Change Photo" : "Upload Photo"}
              </button>
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={onUpload} />
            </motion.div>

            {/* Details / Edit */}
            <div>
              {player.badge && (
                <div className="inline-block px-3 py-1 mb-4 bg-[var(--blood)] text-foreground text-[10px] font-mono tracking-[0.3em] uppercase">
                  {player.badge}
                </div>
              )}

              {!editing ? (
                <>
                  <h1 className="font-display text-6xl md:text-8xl leading-[0.85] text-gradient-blade">{player.name}</h1>
                  <div className="mt-4 font-mono text-sm tracking-[0.3em] uppercase text-[var(--electric)]">
                    #{player.number} · {player.role}
                  </div>
                  <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
                    Part of the Storm Breakers brotherhood. Edit this profile to add a real photo, change the jersey number, or update the role.
                  </p>
                  <button
                    onClick={() => setEditing(true)}
                    className="mt-8 inline-flex items-center gap-3 px-6 py-3 border border-[var(--electric)]/50 text-[var(--electric)] hover:bg-[var(--electric)]/10 transition-colors font-display tracking-[0.25em] text-xs uppercase">
                    Edit Player
                  </button>
                </>
              ) : (
                <div className="space-y-5 max-w-md">
                  <h2 className="font-display text-3xl">Edit Player</h2>
                  <Field label="Name" value={name} onChange={setName} />
                  <Field label="Jersey Number" value={number} onChange={setNumber} />
                  <Field label="Role" value={role} onChange={setRole} />
                  <div className="flex gap-3 pt-2">
                    <button onClick={save}
                      className="px-6 py-3 bg-[var(--electric)] text-background font-display tracking-[0.25em] text-xs uppercase hover:scale-[1.03] transition-transform">
                      Save
                    </button>
                    <button onClick={() => setEditing(false)}
                      className="px-6 py-3 border border-border text-muted-foreground hover:text-foreground font-display tracking-[0.25em] text-xs uppercase">
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              <div className="mt-10 grid grid-cols-3 gap-px bg-border max-w-md">
                {[["Number", `#${player.number}`], ["Role", player.role], ["Club", "Storm Breakers"]].map(([k,v]) => (
                  <div key={k} className="bg-background p-4">
                    <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{k}</div>
                    <div className="font-display text-base text-foreground mt-1 truncate">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="block">
      <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">{label}</div>
      <input value={value} onChange={e => onChange(e.target.value)}
        className="w-full bg-card border border-border px-4 py-3 text-foreground focus:outline-none focus:border-[var(--electric)] transition-colors" />
    </label>
  );
}
