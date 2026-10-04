import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

/* ─────────────────────────────────────────────────────────────────────────
   ANIMATED SECTION WRAPPER
   
   Wraps any content with a scroll-triggered fade-up entrance.
   • Plays once — not every time the element re-enters the viewport.
   • Respects prefers-reduced-motion — skips animation entirely.
   • delay prop allows staggering sibling sections.
   ─────────────────────────────────────────────────────────────────────────*/

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  /** Delay in seconds before the animation starts — for staggered groups */
  delay?: number;
  /** Y offset in pixels for the slide-up (default: 20) */
  distance?: number;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  distance = 20,
}: AnimatedSectionProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduce ? false : { opacity: 0, y: distance }}
      whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
