import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

/* ─────────────────────────────────────────────────────────────────────────
   NAME CONSTELLATION COMPONENT
   An elegant, delicate constellation animation forming "Arayana Sood".
   Tiny glowing amber stars connected by thin geometric lines.
   • Responsive & proportional (compact accent, not an overpowering banner)
   • Gentle initial drawing animation on page load
   • Soft ambient shimmer once formed
   • 100% accessible with screen-reader text & reduced-motion support
   • Completely isolated for easy toggling / removal
   ─────────────────────────────────────────────────────────────────────────*/

interface Point {
  x: number;
  y: number;
  r?: number;
  twinkleDelay?: number;
  isKeyStar?: boolean;
}

interface LetterDef {
  char: string;
  stars: Point[];
  lines: [number, number][]; // pairs of indices into stars array
}

// Letter definitions crafted on a 24px height grid (y: 3 to 23)
const LETTERS_DATA: { char: string; width: number; make: (startX: number) => LetterDef }[] = [
  // A
  {
    char: 'A',
    width: 15,
    make: (x) => ({
      char: 'A',
      stars: [
        { x: x + 1, y: 22, r: 1.4 },
        { x: x + 4, y: 14, r: 1.4 },
        { x: x + 7.5, y: 4, r: 2.1, isKeyStar: true, twinkleDelay: 0.2 },
        { x: x + 11, y: 14, r: 1.4 },
        { x: x + 14, y: 22, r: 1.4 },
      ],
      lines: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 3], // crossbar
      ],
    }),
  },
  // R
  {
    char: 'R',
    width: 15,
    make: (x) => ({
      char: 'R',
      stars: [
        { x: x + 1, y: 22, r: 1.4 },
        { x: x + 1, y: 13, r: 1.3 },
        { x: x + 1, y: 4, r: 1.8, isKeyStar: true, twinkleDelay: 0.8 },
        { x: x + 9, y: 4, r: 1.3 },
        { x: x + 13, y: 8.5, r: 1.7, isKeyStar: true, twinkleDelay: 1.4 },
        { x: x + 9, y: 13, r: 1.3 },
        { x: x + 14, y: 22, r: 1.6, isKeyStar: true, twinkleDelay: 2.1 },
      ],
      lines: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 1], // loop back
        [5, 6], // leg
      ],
    }),
  },
  // A
  {
    char: 'A',
    width: 15,
    make: (x) => ({
      char: 'A',
      stars: [
        { x: x + 1, y: 22, r: 1.4 },
        { x: x + 4, y: 14, r: 1.4 },
        { x: x + 7.5, y: 4, r: 2.0, isKeyStar: true, twinkleDelay: 1.1 },
        { x: x + 11, y: 14, r: 1.4 },
        { x: x + 14, y: 22, r: 1.4 },
      ],
      lines: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 3],
      ],
    }),
  },
  // Y
  {
    char: 'Y',
    width: 14,
    make: (x) => ({
      char: 'Y',
      stars: [
        { x: x + 1, y: 4, r: 1.7, isKeyStar: true, twinkleDelay: 0.5 },
        { x: x + 13, y: 4, r: 1.7, isKeyStar: true, twinkleDelay: 1.9 },
        { x: x + 7, y: 13, r: 1.5 },
        { x: x + 7, y: 22, r: 1.6 },
      ],
      lines: [
        [0, 2],
        [1, 2],
        [2, 3],
      ],
    }),
  },
  // A
  {
    char: 'A',
    width: 15,
    make: (x) => ({
      char: 'A',
      stars: [
        { x: x + 1, y: 22, r: 1.4 },
        { x: x + 4, y: 14, r: 1.4 },
        { x: x + 7.5, y: 4, r: 2.1, isKeyStar: true, twinkleDelay: 1.6 },
        { x: x + 11, y: 14, r: 1.4 },
        { x: x + 14, y: 22, r: 1.4 },
      ],
      lines: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 3],
      ],
    }),
  },
  // N
  {
    char: 'N',
    width: 14,
    make: (x) => ({
      char: 'N',
      stars: [
        { x: x + 1, y: 22, r: 1.4 },
        { x: x + 1, y: 4, r: 1.9, isKeyStar: true, twinkleDelay: 0.4 },
        { x: x + 13, y: 22, r: 1.8, isKeyStar: true, twinkleDelay: 1.2 },
        { x: x + 13, y: 4, r: 1.5 },
      ],
      lines: [
        [0, 1],
        [1, 2],
        [2, 3],
      ],
    }),
  },
  // A
  {
    char: 'A',
    width: 15,
    make: (x) => ({
      char: 'A',
      stars: [
        { x: x + 1, y: 22, r: 1.4 },
        { x: x + 4, y: 14, r: 1.4 },
        { x: x + 7.5, y: 4, r: 2.0, isKeyStar: true, twinkleDelay: 2.3 },
        { x: x + 11, y: 14, r: 1.4 },
        { x: x + 14, y: 22, r: 1.4 },
      ],
      lines: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 3],
      ],
    }),
  },
  // SPACE
  {
    char: ' ',
    width: 12,
    make: () => ({ char: ' ', stars: [], lines: [] }),
  },
  // S
  {
    char: 'S',
    width: 14,
    make: (x) => ({
      char: 'S',
      stars: [
        { x: x + 12, y: 6, r: 1.4 },
        { x: x + 6.5, y: 4, r: 1.7, isKeyStar: true, twinkleDelay: 0.7 },
        { x: x + 1.5, y: 8, r: 1.4 },
        { x: x + 7, y: 13, r: 1.9, isKeyStar: true, twinkleDelay: 1.5 },
        { x: x + 12.5, y: 18, r: 1.4 },
        { x: x + 7.5, y: 22, r: 1.8, isKeyStar: true, twinkleDelay: 2.4 },
        { x: x + 2, y: 20, r: 1.3 },
      ],
      lines: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 6],
      ],
    }),
  },
  // O
  {
    char: 'O',
    width: 15,
    make: (x) => ({
      char: 'O',
      stars: [
        { x: x + 4.5, y: 4, r: 1.4 },
        { x: x + 10.5, y: 4, r: 1.7, isKeyStar: true, twinkleDelay: 0.3 },
        { x: x + 14, y: 13, r: 1.4 },
        { x: x + 10.5, y: 22, r: 1.6 },
        { x: x + 4.5, y: 22, r: 1.8, isKeyStar: true, twinkleDelay: 1.8 },
        { x: x + 1, y: 13, r: 1.4 },
      ],
      lines: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 0],
      ],
    }),
  },
  // O
  {
    char: 'O',
    width: 15,
    make: (x) => ({
      char: 'O',
      stars: [
        { x: x + 4.5, y: 4, r: 1.7, isKeyStar: true, twinkleDelay: 1.0 },
        { x: x + 10.5, y: 4, r: 1.4 },
        { x: x + 14, y: 13, r: 1.8, isKeyStar: true, twinkleDelay: 2.2 },
        { x: x + 10.5, y: 22, r: 1.4 },
        { x: x + 4.5, y: 22, r: 1.5 },
        { x: x + 1, y: 13, r: 1.4 },
      ],
      lines: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 0],
      ],
    }),
  },
  // D
  {
    char: 'D',
    width: 15,
    make: (x) => ({
      char: 'D',
      stars: [
        { x: x + 1, y: 22, r: 1.5 },
        { x: x + 1, y: 4, r: 2.1, isKeyStar: true, twinkleDelay: 0.6 },
        { x: x + 8.5, y: 4, r: 1.4 },
        { x: x + 14, y: 13, r: 1.9, isKeyStar: true, twinkleDelay: 1.7 },
        { x: x + 8.5, y: 22, r: 1.4 },
      ],
      lines: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 0],
      ],
    }),
  },
];

interface NameConstellationProps {
  className?: string;
}

export function NameConstellation({ className }: NameConstellationProps) {
  const shouldReduce = useReducedMotion();

  // Compute all stars and line segments with cumulative X positions
  const { totalWidth, allLines, allStars } = useMemo(() => {
    let currentX = 2;
    const letterList: LetterDef[] = [];
    const linesList: { id: string; x1: number; y1: number; x2: number; y2: number; delay: number }[] = [];
    const starsList: { id: string; x: number; y: number; r: number; isKeyStar?: boolean; delay: number; twinkleDelay?: number }[] = [];

    const charGap = 4.5;
    let globalDelay = 0.15;

    LETTERS_DATA.forEach((item, lIdx) => {
      const def = item.make(currentX);
      letterList.push(def);

      // Lines for this letter
      def.lines.forEach(([startIdx, endIdx], lineIdx) => {
        const p1 = def.stars[startIdx];
        const p2 = def.stars[endIdx];
        if (p1 && p2) {
          linesList.push({
            id: `l-${lIdx}-${lineIdx}`,
            x1: p1.x,
            y1: p1.y,
            x2: p2.x,
            y2: p2.y,
            delay: globalDelay + lineIdx * 0.04,
          });
        }
      });

      // Stars for this letter
      def.stars.forEach((star, sIdx) => {
        starsList.push({
          id: `s-${lIdx}-${sIdx}`,
          x: star.x,
          y: star.y,
          r: star.r || 1.5,
          isKeyStar: star.isKeyStar,
          delay: globalDelay + sIdx * 0.05,
          twinkleDelay: star.twinkleDelay || (lIdx * 0.2 + sIdx * 0.1),
        });
      });

      currentX += item.width + charGap;
      globalDelay += 0.08;
    });

    return {
      letters: letterList,
      totalWidth: currentX + 4,
      allLines: linesList,
      allStars: starsList,
    };
  }, []);

  const totalHeight = 26;

  return (
    <div
      className={cn(
        'relative inline-flex items-center select-none py-1 group',
        className
      )}
      aria-label="Arayana Sood constellation graphic"
    >
      <span className="sr-only">Arayana Sood</span>

      <svg
        viewBox={`0 0 ${totalWidth} ${totalHeight}`}
        className="w-auto h-6 sm:h-7 md:h-8 max-w-full overflow-visible"
        aria-hidden="true"
        style={{ filter: 'drop-shadow(0 0 6px rgba(244, 181, 158, 0.35))' }}
      >
        <defs>
          {/* Subtle warm amber star glow */}
          <radialGradient id="star-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F4B59E" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#F59E0B" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>

          <filter id="amber-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Constellation Lines ─────────────────────────────────────── */}
        <g stroke="#F4B59E" strokeWidth="0.9" strokeLinecap="round" strokeOpacity="0.6">
          {allLines.map((line) => (
            <motion.line
              key={line.id}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              initial={shouldReduce ? { opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
              animate={shouldReduce ? { opacity: 0.6 } : { pathLength: 1, opacity: 0.6 }}
              transition={
                shouldReduce
                  ? { duration: 0 }
                  : {
                      pathLength: { duration: 0.45, delay: line.delay, ease: 'easeOut' },
                      opacity: { duration: 0.2, delay: line.delay },
                    }
              }
            />
          ))}
        </g>

        {/* ── Constellation Stars ─────────────────────────────────────── */}
        <g>
          {allStars.map((star) => (
            <g key={star.id} transform={`translate(${star.x}, ${star.y})`}>
              {/* Soft radial glow halo for key major stars */}
              {star.isKeyStar && (
                <circle
                  cx={0}
                  cy={0}
                  r={star.r * 2.8}
                  fill="url(#star-halo)"
                  className={shouldReduce ? '' : 'animate-pulse'}
                  style={{
                    animationDuration: `${3.5 + (star.twinkleDelay || 0)}s`,
                  }}
                />
              )}

              {/* Core Star Circle */}
              <motion.circle
                cx={0}
                cy={0}
                r={star.r}
                fill={star.isKeyStar ? '#FDE68A' : '#F4B59E'}
                filter="url(#amber-glow)"
                initial={shouldReduce ? { opacity: 1 } : { scale: 0, opacity: 0 }}
                animate={shouldReduce ? { opacity: 1 } : { scale: 1, opacity: 1 }}
                transition={
                  shouldReduce
                    ? { duration: 0 }
                    : {
                        duration: 0.35,
                        delay: star.delay,
                        ease: [0.34, 1.56, 0.64, 1],
                      }
                }
              />

              {/* Delicate 4-point micro cross twinkle on major constellation stars */}
              {star.isKeyStar && !shouldReduce && (
                <motion.path
                  d="M 0 -2.6 L 0 2.6 M -2.6 0 L 2.6 0"
                  stroke="#FDE68A"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeOpacity="0.75"
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{
                    opacity: [0.4, 0.9, 0.4],
                    rotate: [0, 45, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4.2 + (star.twinkleDelay || 0),
                    ease: 'easeInOut',
                    delay: star.delay + 0.5,
                  }}
                />
              )}
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
