import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '@/sections/Hero';
import { Skills } from '@/sections/Skills';
import { Projects } from '@/sections/Projects';
import { Certificates } from '@/sections/Certificates';
import { Achievements } from '@/sections/Achievements';
import { ExtraCurricular } from '@/sections/ExtraCurricular';
import { Education } from '@/sections/Education';
import { Contact } from '@/sections/Contact';

/* ─────────────────────────────────────────────────────────────────────────
   PORTFOLIO HOME PAGE
   Strictly follows verified CV section order:
   Intro: Hero
   1. SKILLS              (#skills)
   2. PROJECTS            (#projects)
   3. CERTIFICATES        (#certificates)
   4. ACHIEVEMENTS        (#achievements)
   5. EXTRA-CURRICULAR    (#activities)
   6. EDUCATION           (#education)
   Followed by CONTACT    (#contact)
   ─────────────────────────────────────────────────────────────────────────*/

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash;
      const el = document.querySelector(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 60);
      }
    }
  }, [location.hash]);

  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Certificates />
      <Achievements />
      <ExtraCurricular />
      <Education />
      <Contact />
    </>
  );
}
