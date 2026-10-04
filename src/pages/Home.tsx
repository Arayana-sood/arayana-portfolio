import { Hero } from '@/sections/Hero';
import { Work } from '@/sections/Work';
import { About } from '@/sections/About';
import { Skills } from '@/sections/Skills';
import { Experience } from '@/sections/Experience';
import { Certificates } from '@/sections/Certificates';
import { Education } from '@/sections/Education';
import { Research } from '@/sections/Research';
import { Contact } from '@/sections/Contact';

/* ─────────────────────────────────────────────────────────────────────────
   COMPLETE HOME PAGE
   Flow: Hero → Work → About → Skills → Experience → Certificates → Research (if any) → Education → Contact
   Continuous, spacious editorial flow with no artificial line dividers.
   ─────────────────────────────────────────────────────────────────────────*/

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <About />
      <Skills />
      <Experience />
      <Certificates />
      <Research />
      <Education />
      <Contact />
    </>
  );
}
