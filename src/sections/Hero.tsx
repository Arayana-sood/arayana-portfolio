import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowUpRight, FileText } from 'lucide-react';
import { HeroVisual } from '@/components/shared/HeroVisual';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { personal } from '@/data/personal';
import { cn } from '@/utils/cn';

/* ─────────────────────────────────────────────────────────────────────────
   HERO SECTION
   Spacious but purposeful layout without excessive vertical gaps.
   Clear typography hierarchy, grounded student perspective, no buzzwords.
   ─────────────────────────────────────────────────────────────────────────*/

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
  },
};

export function Hero() {
  const shouldReduce = useReducedMotion();

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('work')?.scrollIntoView({
      behavior: shouldReduce ? 'auto' : 'smooth',
    });
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-18 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* ── Left column: editorial typography and intro ──────────── */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-5 max-w-2xl"
            variants={shouldReduce ? {} : container}
            initial={shouldReduce ? false : 'hidden'}
            animate="show"
          >
            {/* Tagline / Overline */}
            <motion.div variants={shouldReduce ? {} : item}>
              <span className="text-xs font-mono-text uppercase tracking-widest text-accent font-medium">
                3rd-Year B.Tech · Data Science Minor · 2028
              </span>
            </motion.div>

            {/* Large Statement Headline */}
            <motion.h1
              variants={shouldReduce ? {} : item}
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
              variants={shouldReduce ? {} : item}
              className="text-sm sm:text-lg text-secondary leading-relaxed max-w-xl font-normal"
            >
              {personal.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={shouldReduce ? {} : item}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1"
            >
              {/* Primary: See my work */}
              <a
                href="#work"
                onClick={handleScrollToProjects}
                className={cn(
                  'inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium',
                  'bg-[--accent] text-[--accent-fg] hover:bg-[--accent-hover]',
                  'transition-all duration-150 active:scale-[0.98]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--accent] focus-visible:ring-offset-2'
                )}
              >
                See my work
              </a>

              {/* Secondary: Contact Me */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({
                    behavior: shouldReduce ? 'auto' : 'smooth',
                  });
                }}
                className={cn(
                  'inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium',
                  'border border-[--border] text-primary hover:border-[--accent] hover:text-accent',
                  'bg-transparent transition-all duration-150 active:bg-[--bg-surface]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--accent] focus-visible:ring-offset-2'
                )}
              >
                Contact Me
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
              variants={shouldReduce ? {} : item}
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
      </div>
    </section>
  );
}
