import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { CaseStudyModal } from '@/components/shared/CaseStudyModal';
import { projects } from '@/data/projects';
import type { Project } from '@/types';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

/* ─────────────────────────────────────────────────────────────────────────
   SELECTED WORK — Numbered Editorial Rows
   Spacious, clean, and restrained, matching the reference portfolio.
   Clicking any row opens the detailed Case Study Modal.
   ─────────────────────────────────────────────────────────────────────────*/

export function Work() {
  const shouldReduce = useReducedMotion();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="work"
      aria-label="Selected Projects"
      className="py-14 sm:py-18 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-8 sm:gap-10">
        {/* Section Header */}
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-[--border-subtle]">
            <SectionHeading
              overline="Selected Work"
              heading="Projects & Case Studies"
            />
            <span className="text-xs font-mono-text text-muted">
              Click any project to view full case study ↗
            </span>
          </div>
        </AnimatedSection>

        {/* ── Editorial Numbered Project Rows ───────────────────────── */}
        <div
          role="list"
          aria-label="Projects list"
          className="flex flex-col divide-y divide-[--border-subtle]"
        >
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.06}>
              <motion.div
                role="button"
                tabIndex={0}
                aria-label={`Open case study for ${project.title}`}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                whileHover={shouldReduce ? {} : { x: 3 }}
                transition={{ duration: 0.15 }}
                className={cn(
                  'group relative py-6 sm:py-7 px-2 sm:px-4 rounded-xl cursor-pointer',
                  'transition-all duration-150',
                  'hover:bg-[--bg-surface] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--accent]'
                )}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-center">

                  {/* Left: Number + Title (4 cols) */}
                  <div className="md:col-span-4 flex items-baseline gap-4">
                    <span className="font-mono-text text-xs sm:text-sm text-accent font-semibold shrink-0">
                      {project.number}
                    </span>
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-2xl sm:text-3xl font-editorial font-normal text-primary tracking-tight group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight
                        size={14}
                        className="text-muted opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-accent transition-all duration-150"
                        aria-hidden
                      />
                    </div>
                  </div>

                  {/* Middle: Description (5 cols) */}
                  <div className="md:col-span-5">
                    <p className="text-xs sm:text-sm text-secondary leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Right: Technologies (3 cols) */}
                  <div className="md:col-span-3 flex md:justify-end">
                    <span className="text-[11px] font-mono-text text-muted md:text-right line-clamp-1">
                      {project.tags.slice(0, 3).join(', ')}
                      {project.tags.length > 3 ? '...' : ''}
                    </span>
                  </div>

                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
