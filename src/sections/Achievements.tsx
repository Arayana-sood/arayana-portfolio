import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { Award, Trophy, CheckCircle2 } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────────────
   ACHIEVEMENTS SECTION
   Follows exact CV order (Section 4 after Certificates).
   Directly from Arayana Sood's verified CV:
   • 24-Hour Web-a-thon — Top 10 Finalist
   ─────────────────────────────────────────────────────────────────────────*/

export function Achievements() {
  return (
    <section
      id="achievements"
      aria-label="Achievements and Competitions"
      className="py-14 sm:py-18 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-8 sm:gap-10">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-[--border-subtle]">
            <SectionHeading
              overline="Honors & Recognition"
              heading="Achievements"
              description="Competitive hackathons and validated technical problem-solving milestones."
            />
            <span className="text-xs font-mono-text text-muted">
              Section 04 · Verified CV Standing
            </span>
          </div>
        </AnimatedSection>

        {/* Achievement Card */}
        <AnimatedSection delay={0.06}>
          <div className="p-6 sm:p-8 rounded-xl bg-[--bg-surface] border border-[--border-subtle] transition-all hover:border-[--border] hover:shadow-warm-sm flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-[--border-subtle] pb-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[--bg-elevated] text-accent flex items-center justify-center shrink-0 border border-[--border-subtle]">
                  <Trophy size={20} aria-hidden />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono-text text-accent font-semibold px-2 py-0.5 rounded bg-[--bg-elevated] border border-[--border-subtle]">
                      Competitive Hackathon
                    </span>
                    <span className="text-xs font-mono-text text-muted">
                      March 2024
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-editorial font-normal text-primary mt-1">
                    24-Hour Web-a-thon — Top 10 Finalist
                  </h3>
                  <p className="text-xs font-mono-text text-secondary mt-0.5">
                    Hackathon Collaborator · <span className="text-muted">Web-a-thon</span>
                  </p>
                </div>
              </div>

              <div className="sm:self-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-text bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                  <Award size={13} />
                  <span>Top 10 Finalist</span>
                </span>
              </div>
            </div>

            {/* Bullets */}
            <ul className="space-y-2 text-xs sm:text-sm text-secondary leading-relaxed pl-1">
              <li className="flex items-start gap-2.5">
                <span className="text-accent mt-0.5 shrink-0 font-bold">•</span>
                <span>
                  Collaborated on a hand-signal recognition concept aimed at making mobile communication accessible, ranking in the top 10 teams.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accent mt-0.5 shrink-0 font-bold">•</span>
                <span>
                  Prototyped interactive frontend and computer vision signal processing logic under strict 24-hour time constraints.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accent mt-0.5 shrink-0 font-bold">•</span>
                <span>
                  Pitched technical accessibility architecture to a panel of engineering judges and mentors.
                </span>
              </li>
            </ul>

            {/* Highlights bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[--border-subtle]">
              <div className="flex flex-wrap gap-2 text-xs">
                {['Top 10 Finalist', 'Hand-Signal Concept', '24h Rapid Prototyping'].map((hl, i) => (
                  <span key={i} className="font-mono-text text-[11px] text-accent flex items-center gap-1">
                    <CheckCircle2 size={12} className="text-emerald-400" />
                    <span>{hl}</span>
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 ml-auto">
                {['Accessibility', 'Computer Vision / ML', 'Rapid Prototyping', 'Hackathon'].map((tag) => (
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
      </div>
    </section>
  );
}
