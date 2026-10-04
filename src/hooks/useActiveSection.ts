import { useEffect, useState } from 'react';

/**
 * Tracks which section ID is currently in view, based on IntersectionObserver.
 *
 * Uses a "center-zone" root margin so a section becomes active when its
 * content crosses the middle third of the viewport — feels natural on scroll.
 *
 * @param sectionIds - Array of element IDs matching section[id] in the DOM
 * @returns The ID of the currently visible section
 */
export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '');

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        {
          // Section becomes "active" when it occupies the centre 35% of screen
          rootMargin: '-30% 0px -60% 0px',
          threshold: 0,
        },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [sectionIds]);

  return activeId;
}
