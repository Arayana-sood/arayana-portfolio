import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  BookOpen,
  FileText,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { CaseStudyModal } from '@/components/shared/CaseStudyModal';
import { projects } from '@/data/projects';
import type { Project } from '@/types';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

/* ─────────────────────────────────────────────────────────────────────────
   PROJECTS SECTION
   Section 02 in exact CV order.
   Features numbered editorial project cards with prominent:
   • "View Documentation" button (routes to /projects/:id)
   • "GitHub Repository" action
   • "Live Demo" / "View Dashboard" action
   • "Read Paper" action (NutriAI)
   • Quick Case Study Modal preview
   ─────────────────────────────────────────────────────────────────────────*/

export function Projects() {
  const shouldReduce = useReducedMotion();
  const [modalProject, setModalProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      aria-label="Technical Projects"
      className="py-14 sm:py-18 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-8 sm:gap-10">
        {/* Section Header */}
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-[--border-subtle]">
            <SectionHeading
              overline="Technical Portfolio"
              heading="Projects & Case Studies"
              description="Full-stack applications, machine learning systems, and interactive tools."
            />
            <span className="text-xs font-mono-text text-muted">
              Section 02 · Each project features comprehensive documentation
            </span>
          </div>
        </AnimatedSection>

        {/* ── Project Cards List ───────────────────────────────────── */}
        <div
          role="list"
          aria-label="Projects list"
          className="flex flex-col gap-4 sm:gap-6"
        >
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.07}>
              <motion.div
                whileHover={shouldReduce ? {} : { y: -3 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  'group relative p-5 sm:p-7 rounded-2xl bg-[--bg-surface] border border-[--border-subtle]',
                  'transition-all duration-200',
                  'hover:border-[--border] hover:shadow-warm-sm'
                )}
              >
                <div className="flex flex-col gap-4">
                  {/* Top Bar: Number + Title + Subtitle + Year */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-[--border-subtle] pb-3.5">
                    <div className="flex items-start gap-3.5">
                      <span className="w-8 h-8 rounded-lg bg-[--bg-elevated] text-accent font-mono-text text-xs sm:text-sm font-bold flex items-center justify-center shrink-0 border border-[--border-subtle]">
                        {project.number}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono-text text-muted uppercase tracking-wider">
                            {project.category}
                          </span>
                          <span className="text-muted text-xs">·</span>
                          <span className="text-xs font-mono-text text-muted">
                            {project.year}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-editorial font-normal text-primary tracking-tight mt-0.5 group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-secondary font-medium mt-0.5">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Quick Preview trigger */}
                    <button
                      type="button"
                      onClick={() => setModalProject(project)}
                      className="self-start sm:self-auto text-xs font-mono-text text-muted hover:text-accent flex items-center gap-1 transition-colors py-1 px-2 rounded hover:bg-[--bg-elevated]"
                      title="Quick glance modal"
                    >
                      <span>Quick Glance</span>
                      <ArrowUpRight size={13} />
                    </button>
                  </div>

                  {/* Middle: Description */}
                  <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono-text bg-[--bg-elevated] text-secondary border border-[--border-subtle]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom: Explicit Action Buttons Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2.5 pt-3.5 border-t border-[--border-subtle]">
                    {/* Primary Action: View Documentation (Routes to dedicated doc page) */}
                    <div className="flex flex-wrap items-center gap-2">
                      <Link
                        to={`/projects/${project.id}`}
                        className={cn(
                          'inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono-text font-medium',
                          'bg-[--accent] text-[--accent-fg] hover:bg-[--accent-hover]',
                          'transition-all duration-150 active:scale-[0.98] shadow-warm-xs'
                        )}
                      >
                        <BookOpen size={13} />
                        <span>View Documentation</span>
                        <ArrowUpRight size={12} className="opacity-70" />
                      </Link>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono-text border border-[--border] text-primary hover:border-[--accent] hover:text-accent transition-colors bg-[--bg-surface]"
                        >
                          <ExternalLink size={13} />
                          <span>
                            {project.title.toLowerCase().includes('power bi') ||
                            project.category.toLowerCase().includes('analytics')
                              ? 'View Dashboard'
                              : 'Live Demo'}
                          </span>
                        </a>
                      )}

                      {project.paperUrl && (
                        <a
                          href={project.paperUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono-text border border-[--border] text-accent hover:border-[--accent] transition-colors bg-[--bg-surface]"
                        >
                          <FileText size={13} />
                          <span>Read Paper</span>
                        </a>
                      )}
                    </div>

                    {/* Secondary Action: GitHub Repo (if available) */}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono-text text-muted hover:text-accent hover:border-[--accent] transition-colors"
                      >
                        <Github size={13} />
                        <span>GitHub Repo</span>
                        <ArrowUpRight size={11} className="opacity-50" />
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono-text text-muted italic">
                        {project.title.toLowerCase().includes('power bi')
                          ? 'Public BI App'
                          : 'Repository Private / Internal'}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Quick Glance Case Study Modal */}
      <CaseStudyModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
}
