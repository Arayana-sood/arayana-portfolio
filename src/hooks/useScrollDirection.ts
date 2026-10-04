import { useEffect, useRef, useState } from 'react';

type ScrollDirection = 'up' | 'down' | null;

interface ScrollState {
  direction: ScrollDirection;
  /** True when the page is scrolled to (or near) the very top */
  atTop: boolean;
}

/**
 * Tracks the user's scroll direction and whether they are at the page top.
 *
 * Used by the Navbar to hide on scroll-down and reappear on scroll-up.
 * A small delta threshold (5px) prevents jitter on tiny scroll movements.
 */
export function useScrollDirection(): ScrollState {
  const [state, setState] = useState<ScrollState>({
    direction: null,
    atTop: true,
  });

  const lastScrollY = useRef(0);

  useEffect(() => {
    // Capture initial position
    lastScrollY.current = window.scrollY;

    const handler = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      // Ignore micro-scrolls to prevent jitter
      if (Math.abs(delta) < 5) return;

      setState({
        direction: delta > 0 ? 'down' : 'up',
        atTop: currentY < 10,
      });

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return state;
}
