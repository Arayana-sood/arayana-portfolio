import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, ChevronRight, FileText } from 'lucide-react';
import type { Project } from '@/types';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const shouldReduce = useReducedMotion();
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-hidden
          />

          {/* Modal Panel — keeping the exact background while using pure white and light text */}
          <motion.div
            ref={modalRef}
            initial={shouldReduce ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduce ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 14 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            className={cn(
              'relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl',
              'bg-[--bg-surface] border border-[--border] shadow-2xl',
              'flex flex-col text-white focus:outline-none'
            )}
            tabIndex={-1}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-4 sm:px-8 py-3.5 sm:py-4 border-b border-[--border-subtle] bg-[--bg-surface]/95 backdrop-blur-md shadow-sm">
              <div className="flex items-center gap-3">
                <span className="font-mono-text text-sm text-accent font-bold">
                  {project.number}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[--border]" />
                <span className="text-xs font-mono-text text-zinc-300 font-semibold uppercase tracking-wider">
                  {project.category} · {project.year}
                </span>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-zinc-300 hover:text-white hover:bg-[--bg-hover] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--accent]"
                aria-label="Close case study"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-10 flex flex-col gap-6 sm:gap-9">
              {/* Title & Subtitle — Pure White & Crisp Light Color */}
              <div>
                <h2
                  id="modal-title"
                  className="text-2xl sm:text-4xl lg:text-5xl font-normal font-editorial tracking-tight text-white leading-tight"
                >
                  {project.title}
                </h2>
                <p className="text-base sm:text-lg text-zinc-200 mt-2 leading-normal font-medium">
                  {project.subtitle}
                </p>

                {/* Tech tags — Bright, Light, High Contrast */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-md text-xs font-mono-text bg-white/10 text-white border border-white/20 font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap gap-3 pb-4 border-b border-[--border-subtle]">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono-text bg-white/10 border border-white/20 hover:border-[--accent] text-white hover:text-accent transition-colors font-semibold"
                  >
                    <Github size={15} />
                    <span>View Repository</span>
                  </a>
                )}
                {project.paperUrl && (
                  <a
                    href={project.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono-text bg-white/10 border border-white/20 hover:border-[--accent] text-white hover:text-accent transition-colors font-semibold"
                  >
                    <FileText size={15} />
                    <span>Read Research Paper</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono-text bg-[--accent] text-white font-bold hover:bg-[--accent-hover] transition-colors shadow-warm-sm"
                  >
                    <ExternalLink size={15} />
                    <span>
                      {project.title.toLowerCase().includes('power bi') || project.category.toLowerCase().includes('analytics')
                        ? 'View Dashboard'
                        : 'Live Demo'}
                    </span>
                  </a>
                )}
              </div>

              {/* Overview — Crisp White / Light Color */}
              <div className="flex flex-col gap-2.5">
                <h3 className="text-xs uppercase font-mono-text text-accent tracking-widest font-bold">
                  Overview
                </h3>
                <p className="text-zinc-100 leading-relaxed text-base sm:text-lg font-normal">
                  {project.caseStudy.overview}
                </p>
              </div>

              {/* Problem / Motivation — Crisp White / Light Color */}
              <div className="flex flex-col gap-2.5 p-5 sm:p-6 rounded-xl bg-[--bg-elevated] border border-[--border]">
                <h3 className="text-xs uppercase font-mono-text text-accent tracking-widest font-bold">
                  The Problem & Motivation
                </h3>
                <p className="text-zinc-100 text-base leading-relaxed font-normal">
                  {project.caseStudy.problem}
                </p>
              </div>

              {/* How It Works (Step-by-step) — Crisp White / Light Color */}
              <div className="flex flex-col gap-3.5">
                <h3 className="text-xs uppercase font-mono-text text-accent tracking-widest font-bold">
                  How It Works
                </h3>
                <div className="space-y-3">
                  {project.caseStudy.howItWorks.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 rounded-xl bg-[--bg-elevated] border border-[--border]"
                    >
                      <span className="font-mono-text text-sm text-accent font-bold mt-0.5 shrink-0">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <p className="text-sm sm:text-base text-white leading-relaxed font-normal">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Implementation — Crisp White / Light Color */}
              <div className="flex flex-col gap-3.5">
                <h3 className="text-xs uppercase font-mono-text text-accent tracking-widest font-bold">
                  Technical Architecture
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.caseStudy.technicalImplementation.map((sec, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-[--bg-elevated] border border-[--border] flex flex-col gap-2.5"
                    >
                      <h4 className="text-xs font-bold text-white font-mono-text uppercase tracking-wide">
                        {sec.heading}
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-zinc-200 leading-relaxed">
                        {sec.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <ChevronRight
                              size={14}
                              className="text-accent shrink-0 mt-0.5"
                            />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features — Crisp White / Light Color */}
              <div className="flex flex-col gap-3.5">
                <h3 className="text-xs uppercase font-mono-text text-accent tracking-widest font-bold">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.caseStudy.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-[--bg-elevated] border border-[--border] text-sm text-white font-medium"
                    >
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & What I Learned — Crisp White / Light Color */}
              <div className="flex flex-col gap-3.5">
                <h3 className="text-xs uppercase font-mono-text text-accent tracking-widest font-bold">
                  Challenges & What I Learned
                </h3>
                <ul className="space-y-3">
                  {project.caseStudy.challengesAndLearnings.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-sm sm:text-base text-zinc-100 leading-relaxed p-4 rounded-xl bg-[--bg-elevated] border-l-4 border-l-[--accent] border border-[--border]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 sm:px-8 py-4 border-t border-[--border-subtle] bg-[--bg-surface] flex items-center justify-between">
              <span className="text-xs font-mono-text text-zinc-300">
                Press <kbd className="px-2 py-0.5 rounded bg-white/10 border border-white/20 font-bold text-white">ESC</kbd> to close
              </span>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-lg text-xs font-bold bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
