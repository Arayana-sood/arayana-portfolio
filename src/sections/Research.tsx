import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { researchList } from '@/data/research';
import { BookOpen, ExternalLink } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────────────
   RESEARCH & PUBLICATIONS SECTION
   Renders automatically only when papers exist in researchList.
   Clean, academic, and restrained styling matching the portfolio aesthetic.
   ─────────────────────────────────────────────────────────────────────────*/

export function Research() {
  if (!researchList || researchList.length === 0) return null;

  return (
    <section
      id="research"
      aria-label="Research & Publications"
      className="py-14 sm:py-18 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-8 sm:gap-10">
        <AnimatedSection>
          <SectionHeading
            overline="Research & Publications"
            heading="Academic papers and research investigations."
          />
        </AnimatedSection>

        <div className="flex flex-col gap-4">
          {researchList.map((paper, idx) => (
            <AnimatedSection key={paper.id} delay={idx * 0.06}>
              <div className="p-6 rounded-xl bg-[--bg-surface] border border-[--border-subtle] flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded bg-[--bg-elevated] text-accent flex items-center justify-center">
                      <BookOpen size={13} aria-hidden />
                    </span>
                    <span className="text-xs font-mono-text text-accent font-semibold">
                      {paper.status}
                    </span>
                    <span className="text-xs font-mono-text text-muted">
                      · {paper.year}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-primary">
                    {paper.title}
                  </h3>
                  <p className="text-xs font-mono-text text-muted">
                    {paper.authors.join(', ')}
                  </p>
                  <p className="text-xs sm:text-sm text-secondary leading-relaxed mt-1">
                    {paper.description}
                  </p>
                </div>
                {paper.paperUrl && (
                  <a
                    href={paper.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-accent hover:underline font-mono-text shrink-0"
                  >
                    <span>Read Paper</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
