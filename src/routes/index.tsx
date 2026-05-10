import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/storm/Nav";
import { Hero } from "@/components/storm/Hero";
import { Marquee } from "@/components/storm/Marquee";
import { Identity } from "@/components/storm/Identity";
import { Squad } from "@/components/storm/Squad";
import { Jerseys } from "@/components/storm/Jerseys";
import { Memories } from "@/components/storm/Memories";
import { Community } from "@/components/storm/Community";
import { Footer } from "@/components/storm/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Storm Breakers — Official Team · Brotherhood. Legacy. Thunder." },
      { name: "description", content: "Step into the Storm Breakers arena. Meet the squad, witness the trophies, and join the brotherhood behind one of the most fearless teams in the game." },
      { property: "og:title", content: "Storm Breakers — Enter The Arena" },
      { property: "og:description", content: "Cinematic home of the Storm Breakers squad. Players, jerseys, fixtures, memories and legacy." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Identity />
      <Squad />
      <Jerseys />
      <Memories />
      <Community />
      <Footer />
    </main>
  );
}
