import { useState } from "react";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { CosmicBackground } from "@/components/portfolio/CosmicBackground";
import { Education } from "@/components/portfolio/Education";
import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { Navbar } from "@/components/portfolio/Navbar";
import { Preloader } from "@/components/portfolio/Preloader";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { PointerEffects } from "@/components/portfolio/effects/PointerEffects";

export default function Landing() {
  const [booted, setBooted] = useState(false);

  return (
    <div className="relative min-h-screen text-slate-800">
      <SmoothScroll />
      <CosmicBackground />
      <PointerEffects />

      {!booted && <Preloader onComplete={() => setBooted(true)} />}

      <Navbar booted={booted} />

      <main className="relative z-10">
        <Hero booted={booted} />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
