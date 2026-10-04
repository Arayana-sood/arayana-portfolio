import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { aboutData } from '@/data/about';

/* ─────────────────────────────────────────────────────────────────────────
   ABOUT SECTION
   Clean editorial layout communicating Arayana's real perspective:
   A student building practical tools where data, software, and interfaces meet.
   Reduced borders, strong typography, comfortable vertical rhythm.
   ─────────────────────────────────────────────────────────────────────────*/

export function About() {
  return (
    <section
      id="about"
      aria-label="About Arayana Sood"
      className="py-14 sm:py-18 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10 sm:gap-12">
        <AnimatedSection>
          <SectionHeading
            overline="About Me"
            heading="Building where data, software, and usability connect."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Narrative Column (7 cols) */}
          <AnimatedSection delay={0.08} className="lg:col-span-7 flex flex-col gap-5">
            <h3 className="text-xl sm:text-2xl font-editorial font-normal text-primary leading-snug">
              {aboutData.headline}
            </h3>

            <div className="flex flex-col gap-3.5 text-secondary leading-relaxed text-sm sm:text-base">
              {aboutData.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono-text text-muted">
              <span className="px-3 py-1 rounded-full bg-[--bg-surface] border border-[--border-subtle]">
                3rd-Year B.Tech
              </span>
              <span className="px-3 py-1 rounded-full bg-[--bg-surface] border border-[--border-subtle]">
                Data Science Minor
              </span>
              <span className="px-3 py-1 rounded-full bg-[--bg-surface] border border-[--border-subtle]">
                Graduating 2028
              </span>
            </div>
          </AnimatedSection>

          {/* Context Information Blocks (5 cols) — Clean editorial details without heavy boxes */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {aboutData.contextCards.map((item, idx) => (
              <AnimatedSection key={item.label} delay={0.1 + idx * 0.04}>
                <div className="p-3.5 rounded-xl bg-[--bg-surface] border border-[--border-subtle] flex flex-col gap-1 transition-colors hover:border-[--border]">
                  <span className="text-[10px] font-mono-text uppercase tracking-widest text-accent font-medium">
                    {item.label}
                  </span>
                  <span className="text-sm font-semibold text-primary">
                    {item.value}
                  </span>
                  <span className="text-xs text-secondary leading-normal">
                    {item.detail}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
