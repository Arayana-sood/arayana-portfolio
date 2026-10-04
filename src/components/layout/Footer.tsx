import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { personal } from '@/data/personal';

/* ─────────────────────────────────────────────────────────────────────────
   MINIMAL EDITORIAL FOOTER
   No template attributions or framework credit.
   Quiet, elegant, and personal.
   ─────────────────────────────────────────────────────────────────────────*/

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[--border-subtle] bg-[--bg]" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">

          {/* Left: Name & Quiet closing line */}
          <div className="flex flex-col gap-1">
            <span className="font-editorial text-xl sm:text-2xl text-primary tracking-tight">
              {personal.name}<span className="text-accent">.</span>
            </span>
            <span className="text-xs text-muted font-mono-text">
              Always learning. Always building.
            </span>
          </div>

          {/* Right: Social links */}
          <div className="flex items-center gap-5 text-xs font-mono-text text-secondary">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-accent transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={14} aria-hidden />
              <span>GitHub</span>
              <ArrowUpRight size={11} className="opacity-60" aria-hidden />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-accent transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={14} aria-hidden />
              <span>LinkedIn</span>
              <ArrowUpRight size={11} className="opacity-60" aria-hidden />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-1 hover:text-accent transition-colors"
              aria-label="Email Arayana"
            >
              <Mail size={14} aria-hidden />
              <span>Email</span>
            </a>

            <a
              href={`tel:${personal.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1 hover:text-accent transition-colors"
              aria-label="Call Arayana"
            >
              <span>{personal.phone}</span>
            </a>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-6 border-t border-[--border-subtle] text-[11px] font-mono-text text-muted">
          <span>© {currentYear} {personal.name}. All rights reserved.</span>
          <span>B.Tech · Data Science Minor · 2028</span>
        </div>
      </div>
    </footer>
  );
}
