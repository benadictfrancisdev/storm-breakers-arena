import { useEffect, useState, useCallback } from "react";
// Note: file names are historical — actual photo contents are swapped on disk.
// Identity.tsx maps these correctly; mirror the same mapping here.
import prakashImg from "@/assets/leaders/nanda-captain.jpg";
import nandaImg from "@/assets/leaders/prakash-coach.jpg";
import charanImg from "@/assets/charan-vice-captain.jpg.asset.json";
import jaiImg from "@/assets/jai-2nd-vice-captain.png.asset.json";
import navnithImg from "@/assets/players/navnith.jpeg.asset.json";
import princeImg from "@/assets/players/prince.png.asset.json";
import veeraImg from "@/assets/players/veera.png.asset.json";
import subashImg from "@/assets/players/subash.png.asset.json";
import jeyakumarImg from "@/assets/players/jeyakumar.png.asset.json";
import jaishwalImg from "@/assets/players/jaishwal.jpeg.asset.json";
import charanPortraitImg from "@/assets/players/charan.png.asset.json";
import sunilImg from "@/assets/players/sunil.png.asset.json";
import monishImg from "@/assets/players/monish.png.asset.json";
import yuhendharImg from "@/assets/players/yuhendhar.png.asset.json";

// ---- Players ----
export type Player = {
  id: string;
  name: string;
  number: string; // string to allow "ND"
  role: string;
  image: string | null; // data URL or null
  badge?: string; // Captain / Vice Captain
};

const PLAYERS_KEY = "sb_players_v8";
const MEMORIES_KEY = "sb_memories_v1";

// Order: Head Coach → Batsmen → WK-Batsman → All-Rounders → Bowler → ND players
export const defaultPlayers: Player[] = [
  // Head Coach
  { id: "prakash",  name: "Prakash",   number: "22", role: "Head Coach",       image: prakashImg, badge: "Coach" },

  // Batsmen
  { id: "nanda",    name: "Nanda",     number: "6",  role: "Batsman",          image: nandaImg, badge: "Captain" },
  { id: "vimal",    name: "Vimal",     number: "18", role: "Batsman",          image: null },
  { id: "vishwa",   name: "Vishwa",    number: "17", role: "Batsman",          image: null },
  { id: "monish",   name: "Monish",    number: "41", role: "Batsman",          image: monishImg.url },

  // Wicket-Keeper Batsman
  { id: "bharath",  name: "Bharath",   number: "3",  role: "WK / Batsman",     image: null },

  // All-Rounders
  { id: "felix",    name: "Felix",     number: "33", role: "All-Rounder",      image: null },
  { id: "navnith",  name: "Navnith",   number: "7",  role: "All-Rounder",      image: navnithImg.url },
  { id: "yuhendhar",name: "Yuhendhar", number: "1",  role: "All-Rounder",      image: yuhendharImg.url },
  { id: "charan",   name: "Charan",    number: "30", role: "All-Rounder",      image: charanPortraitImg.url, badge: "Vice Captain" },
  { id: "sam",      name: "Sam",       number: "25", role: "All-Rounder",      image: null },
  { id: "benadict", name: "Benadict",  number: "4",  role: "All-Rounder",      image: null },
  { id: "veera",    name: "Veera",     number: "27", role: "All-Rounder",      image: veeraImg.url },
  { id: "jai",      name: "Jaishwal",  number: "8",  role: "All-Rounder",      image: jaishwalImg.url, badge: "2nd Vice Captain" },
  { id: "kanna",    name: "Kanna",     number: "33", role: "All-Rounder",      image: null },
  { id: "sunil",    name: "Sunil",     number: "5",  role: "Spin / All-Rounder", image: sunilImg.url },
  { id: "subash",   name: "Subash",    number: "9",  role: "Spin / All-Rounder", image: subashImg.url },

  // Bowler
  { id: "madhan",   name: "Madhan",    number: "45", role: "Bowler",           image: null },

  // ND players
  { id: "jaikumar", name: "Jeya Kumar", number: "44", role: "Batsman",          image: jeyakumarImg.url },
  { id: "prince",   name: "Prince",    number: "ND", role: "All-Rounder",      image: princeImg.url },
];

function readJSON<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function usePlayers() {
  const [players, setPlayers] = useState<Player[]>(defaultPlayers);

  useEffect(() => {
    setPlayers(readJSON(PLAYERS_KEY, defaultPlayers));
    const onStorage = (e: StorageEvent) => {
      if (e.key === PLAYERS_KEY) setPlayers(readJSON(PLAYERS_KEY, defaultPlayers));
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const update = useCallback((id: string, patch: Partial<Player>) => {
    setPlayers(prev => {
      const next = prev.map(p => (p.id === id ? { ...p, ...patch } : p));
      localStorage.setItem(PLAYERS_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    localStorage.removeItem(PLAYERS_KEY);
    setPlayers(defaultPlayers);
  }, []);

  return { players, update, reset };
}

// ---- Memories ----
export type Memory = { id: string; src: string; label: string };

export function useMemories() {
  const [memories, setMemories] = useState<Memory[]>([]);
  useEffect(() => { setMemories(readJSON<Memory[]>(MEMORIES_KEY, [])); }, []);

  const add = useCallback((src: string, label: string) => {
    setMemories(prev => {
      const next = [{ id: crypto.randomUUID(), src, label }, ...prev];
      localStorage.setItem(MEMORIES_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const remove = useCallback((id: string) => {
    setMemories(prev => {
      const next = prev.filter(m => m.id !== id);
      localStorage.setItem(MEMORIES_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  return { memories, add, remove };
}

export async function fileToDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result as string);
    r.onerror = reject;
    r.readAsDataURL(file);
  });
}
