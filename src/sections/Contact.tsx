import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { personal } from '@/data/personal';
import { Mail, Github, Linkedin, Phone, ArrowUpRight } from 'lucide-react';
import { cn } from '@/utils/cn';

/* ─────────────────────────────────────────────────────────────────────────
   CONTACT SECTION
   Open to internships, technical discussions, and collaborations.
   Direct, calm, and professional. Consistent vertical spacing.
   ─────────────────────────────────────────────────────────────────────────*/

export function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact and Inquiries"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[--border-subtle]"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6 sm:gap-8">
        <AnimatedSection>
          <SectionHeading
            overline="Contact & Inquiries"
            heading="Have an interesting problem, project or opportunity?"
            align="center"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <p className="text-secondary text-sm sm:text-base max-w-lg leading-relaxed">
            I'm currently open to internships, technical projects, and collaborations across Data Science, Machine Learning, and software engineering.
          </p>
        </AnimatedSection>

        {/* Primary CTA */}
        <AnimatedSection delay={0.12}>
          <a
            href={`mailto:${personal.email}`}
            className={cn(
              'inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-medium',
              'bg-[--accent] text-[--accent-fg] hover:bg-[--accent-hover]',
              'transition-all duration-150 active:scale-[0.98] shadow-warm-sm',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--accent] focus-visible:ring-offset-2'
            )}
          >
            <Mail size={16} aria-hidden />
            <span>Get in touch</span>
          </a>
        </AnimatedSection>

        {/* Social / Connect Options */}
        <AnimatedSection delay={0.16}>
          <div className="flex flex-wrap items-center justify-center gap-5 pt-2 text-xs font-mono-text text-secondary">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Github size={14} aria-hidden />
              <span>GitHub</span>
              <ArrowUpRight size={11} className="opacity-60" aria-hidden />
            </a>

            <span className="text-[--border-subtle] hidden sm:inline">·</span>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Linkedin size={14} aria-hidden />
              <span>LinkedIn</span>
              <ArrowUpRight size={11} className="opacity-60" aria-hidden />
            </a>

            <span className="text-[--border-subtle] hidden sm:inline">·</span>

            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Mail size={14} aria-hidden />
              <span>{personal.email}</span>
            </a>

            <span className="text-[--border-subtle] hidden sm:inline">·</span>

            <a
              href={`tel:${personal.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Phone size={14} aria-hidden />
              <span>{personal.phone}</span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
