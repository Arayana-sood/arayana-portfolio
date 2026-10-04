import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { experiences } from '@/data/experience';
import { Users, Award, HeartHandshake } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────────────
   EXPERIENCE / ACHIEVEMENTS SECTION
   Highlights hackathon achievements and volunteering from Arayana's CV.
   House Captain has been completely removed.
   ─────────────────────────────────────────────────────────────────────────*/

const ICONS = {
  Leadership: Users,
  Hackathon: Award,
  Volunteering: HeartHandshake,
};

export function Experience() {
  return (
    <section
      id="experience"
      aria-label="Achievements and Activities"
      className="py-14 sm:py-18 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-8 sm:gap-10">
        {/* Section Heading */}
        <AnimatedSection>
          <SectionHeading
            overline="Achievements & Activities"
            heading="Hackathons & Extra-Curriculars"
            description="Competitive hackathon participation and digital safety volunteering."
          />
        </AnimatedSection>

        {/* Timeline / List with subtle dividers */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {experiences.map((item, index) => {
            const Icon = ICONS[item.type] || Users;

            return (
              <AnimatedSection key={item.id} delay={index * 0.06}>
                <div className="p-5 sm:p-6 rounded-xl bg-[--bg-surface] border border-[--border-subtle] flex flex-col gap-3.5 transition-colors hover:border-[--border]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[--border-subtle] pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[--bg-elevated] text-accent flex items-center justify-center shrink-0">
                        <Icon size={16} aria-hidden />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-primary">
                          {item.title}
                        </h3>
                        <p className="text-xs font-mono-text text-secondary">
                          {item.role} · <span className="text-muted">{item.organization}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto">
                      <span className="text-[11px] font-mono-text text-accent font-medium px-2 py-0.5 rounded bg-[--bg-elevated] border border-[--border-subtle]">
                        {item.type}
                      </span>
                      <span className="text-xs font-mono-text text-muted">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-1.5 text-xs sm:text-sm text-secondary leading-relaxed pl-1">
                    {item.description.map((desc, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-accent mt-0.5 shrink-0">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Key Highlights & Tags */}
                  <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2.5 border-t border-[--border-subtle]">
                    {item.highlights && (
                      <div className="flex flex-wrap gap-2 text-xs">
                        {item.highlights.map((h, hIdx) => (
                          <span
                            key={hIdx}
                            className="font-mono-text text-[11px] text-accent"
                          >
                            ✓ {h}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5 ml-auto">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-mono-text bg-[--bg-elevated] text-muted border border-[--border-subtle]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
