import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { educationList } from '@/data/education';
import { GraduationCap } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/* ─────────────────────────────────────────────────────────────────────────
   EDUCATION SECTION
   Section 06 in exact CV order.
   Concise and strictly verified from Arayana Sood's CV:
   • Lovely Professional University (B.Tech CSE, CGPA 8.27, Minor: Data Science)
   • Sagar Public School (Intermediate - 82%)
   • Asia Pacific International School (Matriculation - 78%)
   ─────────────────────────────────────────────────────────────────────────*/

export function Education() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="education"
      aria-label="Education"
      className="py-14 sm:py-18 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-6 sm:gap-8">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-[--border-subtle]">
            <SectionHeading
              overline="Academics"
              heading="Education"
              description="Academic milestones and foundational education."
            />
            <span className="text-xs font-mono-text text-muted">
              Section 06 · Academic History
            </span>
          </div>
        </AnimatedSection>

        <div className="flex flex-col gap-4">
          {educationList.map((item, idx) => (
            <AnimatedSection key={item.id} delay={idx * 0.05}>
              <motion.div
                whileHover={shouldReduce ? {} : { y: -2 }}
                transition={{ duration: 0.18 }}
                className="p-5 sm:p-6 rounded-xl bg-[--bg-surface] border border-[--border-subtle] transition-all duration-200 hover:border-[--border] hover:shadow-warm-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-[--border-subtle] pb-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[--bg-elevated] text-accent flex items-center justify-center shrink-0 border border-[--border-subtle]">
                      <GraduationCap size={16} aria-hidden />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-primary">
                        {item.degree}
                      </h3>
                      <p className="text-xs font-mono-text text-secondary mt-0.5">
                        {item.institution} · <span className="text-muted">{item.location}</span>
                        {item.minor && (
                          <> · <span className="text-accent">{item.minor} (Minor)</span></>
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-start gap-0.5">
                    <span className="text-xs sm:text-sm font-mono-text text-accent font-semibold">
                      {item.score}
                    </span>
                    <span className="text-[11px] font-mono-text text-muted">
                      {item.period}
                    </span>
                  </div>
                </div>

                {item.details && item.details.length > 0 && (
                  <div className="pt-2.5 flex flex-col gap-1">
                    <ul className="space-y-1 text-xs text-secondary">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span className="text-accent mt-0.5">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
