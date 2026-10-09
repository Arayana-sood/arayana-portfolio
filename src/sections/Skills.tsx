import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { skillCategories } from '@/data/skills';
import { cn } from '@/utils/cn';

/* ─────────────────────────────────────────────────────────────────────────
   SKILLS SECTION — Editorial Index Layout (Option B)
   
   Completely replaces SaaS tabs and boxed card grids with an editorial index:
   • Left column: Category name & number
   • Right column: Clean inline technologies with subtle dot separators
   • Interactive hover: Quiet contextual indicator reveals where each technology
     was applied across projects (NutriAI, ShellQuest, Process Viz, etc.)
   • Zero fake percentages. Zero progress bars. Minimal borders.
   ─────────────────────────────────────────────────────────────────────────*/

export function Skills() {
  const [activeSkill, setActiveSkill] = useState<{
    name: string;
    usedIn: string[];
  } | null>(null);

  return (
    <section
      id="skills"
      aria-label="Technical Skills"
      className="py-14 sm:py-18 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10 sm:gap-12">
        {/* Section Heading */}
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[--border-subtle]">
            <SectionHeading
              overline="Skills Index"
              heading="Technical Skills"
              description="Languages, frameworks, databases, and developer tooling."
            />
            <span className="text-xs font-mono-text text-muted">
              Section 01 · Hover any technology to see applied context
            </span>
          </div>
        </AnimatedSection>

        {/* ── Two-Column Editorial Index ────────────────────────────── */}
        <div
          role="list"
          aria-label="Skill categories index"
          className="flex flex-col divide-y divide-[--border-subtle]"
        >
          {skillCategories.map((cat, idx) => (
            <AnimatedSection key={cat.id} delay={idx * 0.06}>
              <div className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">

                {/* Left Column: Number + Category Name (4 cols) */}
                <div className="md:col-span-4 flex items-baseline gap-3">
                  <span className="font-mono-text text-xs text-accent font-semibold shrink-0">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-medium text-primary tracking-tight">
                    {cat.label}
                  </h3>
                </div>

                {/* Right Column: Inline Technologies List (8 cols) */}
                <div className="md:col-span-8 flex flex-wrap items-center gap-x-3 gap-y-2.5">
                  {cat.skills.map((skill, sIdx) => {
                    const isHovered = activeSkill?.name === skill.name;

                    return (
                      <div
                        key={skill.name}
                        className="relative inline-flex items-center"
                        onMouseEnter={() =>
                          setActiveSkill({
                            name: skill.name,
                            usedIn: skill.usedIn || [],
                          })
                        }
                        onMouseLeave={() => setActiveSkill(null)}
                      >
                        <span
                          tabIndex={0}
                          role="button"
                          aria-label={`${skill.name}${skill.usedIn ? `: applied in ${skill.usedIn.join(', ')}` : ''}`}
                          className={cn(
                            'text-sm sm:text-base transition-colors duration-150 cursor-default select-none py-0.5',
                            'focus-visible:outline-none focus-visible:text-accent',
                            isHovered
                              ? 'text-accent font-medium'
                              : 'text-secondary hover:text-primary'
                          )}
                        >
                          {skill.name}
                        </span>

                        {/* Dot separator if not last in row */}
                        {sIdx < cat.skills.length - 1 && (
                          <span
                            className="ml-3 text-[--border] select-none text-xs"
                            aria-hidden
                          >
                            ·
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* ── Context Discovery Banner ──────────────────────────────── */}
        {/* Calmly displays applied evidence when hovering a technology */}
        <div className="min-h-[44px] flex items-center justify-between px-4 py-2.5 rounded-lg bg-[--bg-surface] border border-[--border-subtle]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[--accent]" aria-hidden />
            <span className="text-xs font-mono-text text-muted uppercase tracking-wider">
              {activeSkill ? activeSkill.name : 'Contextual Evidence'}
            </span>
          </div>

          <AnimatePresence mode="wait">
            {activeSkill && activeSkill.usedIn.length > 0 ? (
              <motion.div
                key={activeSkill.name}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="flex items-center gap-2 text-xs font-mono-text"
              >
                <span className="text-muted hidden sm:inline">Applied in:</span>
                <span className="text-accent font-medium">
                  {activeSkill.usedIn.join(' · ')}
                </span>
              </motion.div>
            ) : (
              <span className="text-xs font-mono-text text-muted">
                Move cursor over any skill above to view projects
              </span>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
