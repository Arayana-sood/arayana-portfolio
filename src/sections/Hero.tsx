import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, ArrowUpRight, FileText, ChevronDown } from 'lucide-react';
import { HeroVisual } from '@/components/shared/HeroVisual';
import { ArayanaConstellation } from '@/components/shared/ArayanaConstellation';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { personal } from '@/data/personal';
import { cn } from '@/utils/cn';

/* ─────────────────────────────────────────────────────────────────────────
   HERO SECTION
   Polished editorial introduction with intentional, restrained animations.
   Features:
   • Staggered fade-up entrance
   • Subtle role rotating badge
   • Smooth scroll indicator
   • Links directly to #projects (CV Section 02)
   ─────────────────────────────────────────────────────────────────────────*/

const ROLES = [
  '3rd-Year B.Tech CSE · Graduating 2028',
  'Data Science Minor · Lovely Professional University',
  'Machine Learning & Systems Developer',
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

export function Hero() {
  const shouldReduce = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  // Subtle role rotation interval
  useEffect(() => {
    if (shouldReduce) return;
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [shouldReduce]);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({
      behavior: shouldReduce ? 'auto' : 'smooth',
    });
  };

  const handleScrollToSkills = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('skills')?.scrollIntoView({
      behavior: shouldReduce ? 'auto' : 'smooth',
    });
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative pt-8 pb-14 sm:pt-12 sm:pb-18 lg:pt-14 lg:pb-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* ── Left column: editorial typography and intro ──────────── */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-5 max-w-2xl"
            variants={shouldReduce ? {} : containerVariants}
            initial={shouldReduce ? false : 'hidden'}
            animate="show"
          >
            {/* Name & Personal Constellation Signature */}
            <motion.div variants={shouldReduce ? {} : itemVariants} className="flex flex-wrap items-center gap-x-4 gap-y-2.5">
              <div className="inline-flex items-center gap-2.5">
                <span className="text-xl sm:text-2xl font-editorial tracking-tight text-primary font-normal">
                  Arayana Sood
                </span>
                <ArayanaConstellation />
              </div>

              {/* Tagline with subtle role rotator */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[--bg-surface] border border-[--border-subtle]">
                <span className="w-1.5 h-1.5 rounded-full bg-[--accent] animate-pulse" aria-hidden />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={shouldReduce ? { opacity: 0 } : { opacity: 0, y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="text-xs font-mono-text uppercase tracking-wider text-accent font-medium truncate"
                  >
                    {ROLES[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Large Statement Headline */}
            <motion.h1
              variants={shouldReduce ? {} : itemVariants}
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-primary tracking-tight leading-[1.18] sm:leading-[1.14] break-words"
            >
              Turning ideas and data into software that{' '}
              <span className="font-editorial italic font-normal text-accent">
                works
              </span>
              .
            </motion.h1>

            {/* Grounded Bio Paragraph */}
            <motion.p
              variants={shouldReduce ? {} : itemVariants}
              className="text-sm sm:text-lg text-secondary leading-relaxed max-w-xl font-normal"
            >
              {personal.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={shouldReduce ? {} : itemVariants}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1"
            >
              {/* Primary: See my work */}
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className={cn(
                  'inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium',
                  'bg-[--accent] text-[--accent-fg] hover:bg-[--accent-hover]',
                  'transition-all duration-150 active:scale-[0.98]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--accent] focus-visible:ring-offset-2'
                )}
              >
                See my projects
              </a>

              {/* Secondary: Skills index */}
              <a
                href="#skills"
                onClick={handleScrollToSkills}
                className={cn(
                  'inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium',
                  'border border-[--border] text-primary hover:border-[--accent] hover:text-accent',
                  'bg-transparent transition-all duration-150 active:bg-[--bg-surface]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--accent] focus-visible:ring-offset-2'
                )}
              >
                Skills index
              </a>

              {/* Secondary: Download CV */}
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium',
                  'border border-[--border] text-primary hover:border-[--accent] hover:text-accent',
                  'bg-transparent transition-all duration-150 active:bg-[--bg-surface]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--accent] focus-visible:ring-offset-2'
                )}
              >
                <FileText size={14} aria-hidden />
                <span>Download CV</span>
              </a>
            </motion.div>

            {/* Social quick links */}
            <motion.div
              variants={shouldReduce ? {} : itemVariants}
              className="flex items-center gap-4 text-xs font-mono-text text-muted pt-1"
            >
              <span className="uppercase tracking-wider text-[11px]">Connect:</span>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-secondary hover:text-accent transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={13} aria-hidden />
                <span>GitHub</span>
                <ArrowUpRight size={11} className="opacity-60" aria-hidden />
              </a>
              <span className="text-[--border-subtle]">/</span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-secondary hover:text-accent transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={13} aria-hidden />
                <span>LinkedIn</span>
                <ArrowUpRight size={11} className="opacity-60" aria-hidden />
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right column: visual ecosystem panel ─────────────────── */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroVisual />
          </div>

        </div>

        {/* ── Subtle bottom scroll hint ──────────────────────────────── */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0 }}
          animate={shouldReduce ? false : { opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 sm:mt-16 flex items-center justify-center gap-2 text-xs font-mono-text text-muted select-none"
        >
          <a
            href="#skills"
            onClick={handleScrollToSkills}
            className="inline-flex items-center gap-1 hover:text-accent transition-colors py-1"
          >
            <span>Scroll to explore</span>
            <motion.span
              animate={shouldReduce ? {} : { y: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              <ChevronDown size={14} />
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
