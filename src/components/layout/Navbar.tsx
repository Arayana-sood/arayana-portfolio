import { useState, useCallback, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { personal } from '@/data/personal';
import { cn } from '@/utils/cn';

/* ─────────────────────────────────────────────────────────────────────────
   MINIMAL EDITORIAL NAVBAR
   Inspired by the reference image:
   Left: Arayana Sood.
   Right: Work, About, Skills, Experience, Certificates, Contact, CV
   ─────────────────────────────────────────────────────────────────────────*/

const NAV_LINKS = [
  { href: '#work',         label: 'Work' },
  { href: '#about',        label: 'About' },
  { href: '#skills',       label: 'Skills' },
  { href: '#experience',   label: 'Experience' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact',      label: 'Contact' },
] as const;

const SECTION_IDS = ['hero', ...NAV_LINKS.map((l) => l.href.slice(1))];

export function Navbar() {
  const { direction, atTop } = useScrollDirection();
  const activeSection = useActiveSection(SECTION_IDS);
  const shouldReduce = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const isHidden = direction === 'down' && !atTop && !menuOpen;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMenuOpen(false);
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: shouldReduce ? 'auto' : 'smooth' });
      }
    },
    [shouldReduce]
  );

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-[--accent] focus:text-[--accent-fg] focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-medium shadow-warm-md"
      >
        Skip to main content
      </a>

      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'transition-colors duration-300',
          atTop
            ? 'bg-transparent border-b border-transparent'
            : 'bg-[--bg]/90 backdrop-blur-md border-b border-[--border-subtle]'
        )}
        animate={{ y: isHidden ? -80 : 0 }}
        transition={
          shouldReduce
            ? { duration: 0 }
            : { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
        }
        role="banner"
      >
        <nav
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo / Brand Name */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: shouldReduce ? 'auto' : 'smooth',
              });
            }}
            className="text-lg sm:text-xl font-editorial tracking-tight text-primary hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--accent] rounded"
          >
            Arayana Sood<span className="text-accent">.</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            <ul className="flex items-center gap-6" role="list">
              {NAV_LINKS.map(({ href, label }) => {
                const sectionId = href.slice(1);
                const isActive = activeSection === sectionId;

                return (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={(e) => handleNavClick(e, href)}
                      className={cn(
                        'text-xs font-mono-text tracking-wide transition-colors relative py-1',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--accent] rounded',
                        isActive
                          ? 'text-accent font-medium'
                          : 'text-secondary hover:text-primary'
                      )}
                      aria-current={isActive ? 'location' : undefined}
                    >
                      {label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-dot"
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[--accent]"
                          transition={{ duration: 0.2 }}
                          aria-hidden
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-3 pl-4 border-l border-[--border-subtle]">
              <ThemeToggle />
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono-text border border-[--border] text-secondary hover:text-accent hover:border-[--accent] transition-colors"
              >
                <FileText size={13} aria-hidden />
                <span>CV</span>
              </a>
            </div>
          </div>

          {/* Mobile hamburger & theme toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="w-9 h-9 rounded-md flex items-center justify-center text-secondary hover:text-primary hover:bg-[--bg-hover] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--accent]"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Slide-down Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed inset-0 z-40 lg:hidden bg-[--bg]/95 backdrop-blur-md pt-24 px-6 pb-10 flex flex-col justify-between"
            initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduce ? { opacity: 1 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map(({ href, label }, idx) => {
                const sectionId = href.slice(1);
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={href}
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className={cn(
                      'py-3 px-4 rounded-xl text-lg font-editorial transition-colors flex items-center justify-between',
                      isActive
                        ? 'bg-[--accent-muted] text-accent font-medium'
                        : 'text-secondary hover:text-primary hover:bg-[--bg-hover]'
                    )}
                  >
                    <span>{label}</span>
                    <span className="font-mono-text text-xs text-muted">
                      0{idx + 1}
                    </span>
                  </a>
                );
              })}
            </nav>

            <div className="pt-6 border-t border-[--border-subtle] flex flex-col gap-3">
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-[--border] text-primary font-mono-text text-sm hover:border-[--accent] transition-colors"
              >
                <FileText size={15} />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
