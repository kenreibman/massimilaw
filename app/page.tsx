import Hero from "./sections/Hero";
import Marquee from "./sections/Marquee";
import Services from "./sections/Services";
import About from "./sections/About";
import CaseEvaluation from "./sections/CaseEvaluation";
import Process from "./sections/Process";
import FAQ from "./sections/FAQ";

export default function Home() {
  return (
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <CaseEvaluation />
        <Process />
        <FAQ />
      </main>
  );
}
