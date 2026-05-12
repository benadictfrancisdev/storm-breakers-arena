import { useEffect, useState, useCallback } from "react";
// Note: file names are historical — actual photo contents are swapped on disk.
// Identity.tsx maps these correctly; mirror the same mapping here.
import prakashImg from "@/assets/leaders/nanda-captain.jpg";
import felixImg from "@/assets/leaders/felix-vc.jpg";
import nandaImg from "@/assets/leaders/prakash-coach.jpg";

// ---- Players ----
export type Player = {
  id: string;
  name: string;
  number: string; // string to allow "ND"
  role: string;
  image: string | null; // data URL or null
  badge?: string; // Captain / Vice Captain
};

const PLAYERS_KEY = "sb_players_v2";
const MEMORIES_KEY = "sb_memories_v1";

export const defaultPlayers: Player[] = [
  { id: "nanda",    name: "Nanda",     number: "6",  role: "All-Rounder",  image: nandaImg, badge: "Captain" },
  { id: "felix",    name: "Felix",     number: "33", role: "Batsman",      image: felixImg, badge: "Vice Captain" },
  { id: "navnith",  name: "Navnith",   number: "7",  role: "All-Rounder",  image: null },
  { id: "yuhendhar",name: "Yuhendhar", number: "1",  role: "Wicket-Keeper",image: null },
  { id: "charan",   name: "Charan",    number: "30", role: "Batsman",      image: null },
  { id: "bharath",  name: "Bharath",   number: "3",  role: "Bowler",       image: null },
  { id: "sam",      name: "Sam",       number: "25", role: "All-Rounder",  image: null },
  { id: "vimal",    name: "Vimal",     number: "18", role: "Batsman",      image: null },
  { id: "vishwa",   name: "Vishwa",    number: "17", role: "Bowler",       image: null },
  { id: "prakash",  name: "Prakash",   number: "22", role: "Head Coach",   image: prakashImg, badge: "Coach" },
  { id: "madhan",   name: "Madhan",    number: "45", role: "Bowler",       image: null },
  { id: "benadict", name: "Benadict",  number: "4",  role: "Batsman",      image: null },
  { id: "jai",      name: "Jai",       number: "8",  role: "All-Rounder",  image: null },
  { id: "kanna",    name: "Kanna",     number: "2",  role: "Bowler",       image: null },
  { id: "sunil",    name: "Sunil",     number: "5",  role: "Batsman",      image: null },
  { id: "monish",   name: "Monish",    number: "41", role: "All-Rounder",  image: null },
  { id: "prince",   name: "Prince",    number: "27", role: "Bowler",       image: null },
  { id: "jaikumar", name: "Jai Kumar", number: "ND", role: "All-Rounder",  image: null },
  { id: "slot19",   name: "Player 19", number: "—",  role: "TBA",          image: null },
  { id: "slot20",   name: "Player 20", number: "—",  role: "TBA",          image: null },
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
