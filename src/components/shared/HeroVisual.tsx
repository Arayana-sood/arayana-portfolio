import { useRef, useCallback, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, Terminal, Activity, BarChart2, ArrowUpRight } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

/* ─────────────────────────────────────────────────────────────────────────
   HERO VISUAL — Clean Project Ecosystem Panel
   
   ONE coherent visual composition:
   • No overlapping floating circles
   • No intersecting circular badges cutting through cards
   • Cleanly contained header with personal greeting and academic stage
   • 4 real projects with subtle interactive hover states
   • Contained within a refined architectural frame with generous internal spacing
   ─────────────────────────────────────────────────────────────────────────*/

interface ProjectItem {
  id: string;
  name: string;
  category: string;
  tech: string;
  highlight: string;
  icon: React.ElementType;
  url: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: 'nutriai',
    name: 'NutriAI',
    category: 'AI & Healthcare',
    tech: 'Python · FastAPI · Scikit-learn',
    highlight: '6 ML Models + Gemini API',
    icon: Sparkles,
    url: 'https://github.com/Arayana-sood/NutriAI-personalized-diet-generation',
  },
  {
    id: 'shellquest',
    name: 'ShellQuest',
    category: 'Systems & Education',
    tech: 'React · Socket.IO · xterm.js',
    highlight: 'Interactive Linux Terminal',
    icon: Terminal,
    url: 'https://github.com/Arayana-sood/ShellQuest',
  },
  {
    id: 'process-viz',
    name: 'Process Scheduler',
    category: 'Operating Systems',
    tech: 'C · React · Canvas',
    highlight: '5 CPU Algorithms & Gantt',
    icon: Activity,
    url: 'https://github.com/Arayana-sood/Process-Lifecycle-visualization-tool',
  },
  {
    id: 'tourism-analytics',
    name: 'Tourism Analytics',
    category: 'Business Intelligence',
    tech: 'Power BI · DAX · SQL',
    highlight: 'Interactive Tourism Dashboard',
    icon: BarChart2,
    url: 'https://app.powerbi.com/view?r=eyJrIjoiOGY5OGI5ZmYtODA1ZC00NmIwLThlYjAtY2VkMjUxOTMyMzhjIiwidCI6ImUxNGU3M2ViLTUyNTEtNDM4OC04ZDY3LThmOWYyZTJkNWE0NiIsImMiOjEwfQ%3D%3D',
  },
];

export function HeroVisual({ className }: { className?: string }) {
  const shouldReduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Subtle 3D spring tilt on mouse hover
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2, -2]), {
    stiffness: 260,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2, 2]), {
    stiffness: 260,
    damping: 24,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (shouldReduce || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [shouldReduce, mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
    setHoveredId(null);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={containerRef}
      className={cn('relative w-full max-w-[400px] select-none', className)}
      style={
        shouldReduce
          ? {}
          : {
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }
      }
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
      aria-label="Project ecosystem panel"
    >
      {/* ── Single Coherent Architectural Frame ───────────────────── */}
      <div
        className={cn(
          'w-full rounded-2xl overflow-hidden',
          'bg-[--bg-surface] border border-[--border-subtle]',
          'shadow-warm-md flex flex-col'
        )}
      >
        {/* Frame Top Header — Greeting & Context cleanly integrated INSIDE */}
        <div className="px-4 sm:px-5 py-3.5 sm:py-4 border-b border-[--border-subtle] flex items-center justify-between bg-[--bg-elevated]/40">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[--accent]" aria-hidden />
            <span className="text-xs font-editorial text-primary tracking-tight font-medium">
              Arayana Sood
            </span>
          </div>
          <span className="text-[10px] sm:text-[11px] font-mono-text text-muted uppercase tracking-wider">
            3rd-Year · 2028
          </span>
        </div>

        {/* Frame Subtitle */}
        <div className="px-4 sm:px-5 pt-3.5 pb-2 flex items-center justify-between text-xs font-mono-text text-muted">
          <span className="uppercase tracking-widest text-[10px]">Project Work</span>
          <span className="text-[10px] text-accent">04 Selected</span>
        </div>

        {/* 4 Projects List — clean, spacious, zero overlapping */}
        <div className="p-2.5 sm:p-3.5 flex flex-col gap-2">
          {PROJECTS.map((item) => {
            const Icon = item.icon;
            const isHovered = hoveredId === item.id;

            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredId(item.id)}
                className={cn(
                  'group p-2.5 sm:p-3 rounded-xl transition-all duration-150 cursor-pointer block',
                  'border',
                  isHovered
                    ? 'bg-[--bg-elevated] border-[--border]'
                    : 'bg-transparent border-transparent hover:bg-[--bg-elevated]/50'
                )}
                aria-label={`Open ${item.name} (${item.highlight})`}
              >
                <div className="flex items-start justify-between gap-2 min-w-0">
                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                    <span
                      className={cn(
                        'w-7 h-7 rounded-lg flex items-center justify-center transition-colors shrink-0',
                        isHovered
                          ? 'bg-[--accent] text-[--accent-fg]'
                          : 'bg-[--bg-elevated] text-accent'
                      )}
                    >
                      <Icon size={14} aria-hidden />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-xs text-primary truncate">
                          {item.name}
                        </span>
                        <ArrowUpRight
                          size={11}
                          className={cn(
                            'text-muted transition-opacity shrink-0',
                            isHovered ? 'opacity-100 text-accent' : 'opacity-0'
                          )}
                          aria-hidden
                        />
                      </div>
                      <p className="text-[10px] sm:text-[11px] font-mono-text text-muted mt-0.5 truncate">
                        {item.tech}
                      </p>
                    </div>
                  </div>

                  <span className="text-[9px] sm:text-[10px] font-mono-text text-accent text-right shrink-0 pt-0.5">
                    {item.highlight}
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Subtle Footer Note Inside the Frame */}
        <div className="px-4 sm:px-5 py-3 border-t border-[--border-subtle] bg-[--bg-elevated]/30 flex flex-wrap items-center justify-between gap-1 text-[10px] sm:text-[11px] font-mono-text text-muted">
          <span>Machine Learning · Systems · BI</span>
          <span className="text-secondary font-medium">B.Tech Portfolio</span>
        </div>
      </div>
    </motion.div>
  );
}
