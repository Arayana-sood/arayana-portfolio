import { useEffect, useState } from 'react';

/**
 * Returns true if the user has enabled "prefers-reduced-motion".
 * All Framer Motion animations should check this before animating.
 *
 * Usage:
 *   const shouldReduce = useReducedMotion();
 *   <motion.div animate={shouldReduce ? {} : { opacity: 1 }} />
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return reduced;
}
