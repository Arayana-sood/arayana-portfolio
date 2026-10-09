import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

/* ─────────────────────────────────────────────────────────────────────────
   ARAYANA'S CONSTELLATION
   A unique, minimal personal visual signature.
   
   Concept:
   An abstract six-point constellation representing Arayana's approach to
   problem-solving: connecting disparate pieces of data, logic, and systems
   into a cohesive, purposeful outcome.

   Animation Flow:
   1. Six delicate nodes appear sequentially.
   2. Fine vector lines draw in to connect the nodes.
   3. Subtle warm amber/peach bloom on completion.
   4. Rests calmly with an occasional, very gentle shimmer every 6s.
   5. Strict reduced-motion fallback (instant static render).
   ─────────────────────────────────────────────────────────────────────────*/

interface ArayanaConstellationProps {
  className?: string;
  /** Size width in pixels (proportional aspect ratio 64:30) */
  width?: number;
}

// Six intentional abstract nodes
const NODES = [
  { id: 'n0', x: 6,  y: 19, r: 1.8, delay: 0.1 },  // Initial observation
  { id: 'n1', x: 19, y: 7,  r: 2.1, delay: 0.22 }, // Conceptual hypothesis
  { id: 'n2', x: 29, y: 23, r: 2.4, delay: 0.36 }, // Core data transformation
  { id: 'n3', x: 42, y: 8,  r: 2.0, delay: 0.5 },  // Algorithmic synthesis
  { id: 'n4', x: 53, y: 21, r: 2.2, delay: 0.64 }, // System architecture
  { id: 'n5', x: 60, y: 11, r: 1.8, delay: 0.78 }, // Practical impact
];

// Connecting lines forming the problem-solving graph
const EDGES = [
  { id: 'e01', x1: 6,  y1: 19, x2: 19, y2: 7,  delay: 0.4 },
  { id: 'e12', x1: 19, y1: 7,  x2: 29, y2: 23, delay: 0.55 },
  { id: 'e02', x1: 6,  y1: 19, x2: 29, y2: 23, delay: 0.68 },
  { id: 'e23', x1: 29, y1: 23, x2: 42, y2: 8,  delay: 0.8 },
  { id: 'e34', x1: 42, y1: 8,  x2: 53, y2: 21, delay: 0.92 },
  { id: 'e24', x1: 29, y1: 23, x2: 53, y2: 21, delay: 1.05 },
  { id: 'e45', x1: 53, y1: 21, x2: 60, y2: 11, delay: 1.18 },
];

export function ArayanaConstellation({
  className,
  width = 54,
}: ArayanaConstellationProps) {
  const shouldReduce = useReducedMotion();

  // Reduced motion: instantaneous static representation
  if (shouldReduce) {
    return (
      <span
        className={cn('inline-flex items-center align-middle select-none', className)}
        role="img"
        aria-label="Arayana's Constellation signature"
      >
        <svg
          viewBox="0 0 66 30"
          width={width}
          height={(width * 30) / 66}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          {EDGES.map((edge) => (
            <line
              key={edge.id}
              x1={edge.x1}
              y1={edge.y1}
              x2={edge.x2}
              y2={edge.y2}
              stroke="var(--accent, #F4B59E)"
              strokeWidth="0.8"
              strokeOpacity="0.45"
            />
          ))}
          {NODES.map((node) => (
            <circle
              key={node.id}
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill="var(--accent, #F4B59E)"
              fillOpacity="0.85"
            />
          ))}
        </svg>
      </span>
    );
  }

  return (
    <motion.span
      className={cn('inline-flex items-center align-middle select-none', className)}
      role="img"
      aria-label="Arayana's Constellation signature"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <svg
        viewBox="0 0 66 30"
        width={width}
        height={(width * 30) / 66}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <defs>
          {/* Subtle warm glow filter applied on completion */}
          <filter id="constellation-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Connecting Vector Lines ─────────────────────────────── */}
        {EDGES.map((edge) => (
          <motion.line
            key={edge.id}
            x1={edge.x1}
            y1={edge.y1}
            x2={edge.x2}
            y2={edge.y2}
            stroke="var(--accent, #F4B59E)"
            strokeWidth="0.85"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0, 0.5, 0.45],
            }}
            transition={{
              pathLength: { delay: edge.delay, duration: 0.45, ease: 'easeOut' },
              opacity: { delay: edge.delay, duration: 0.3 },
            }}
          />
        ))}

        {/* ── Abstract Nodes ──────────────────────────────────────── */}
        {NODES.map((node) => (
          <g key={node.id}>
            {/* Occasional restrained shimmer aura on central node */}
            {node.id === 'n2' && (
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.r + 2}
                fill="none"
                stroke="var(--accent, #F4B59E)"
                strokeWidth="0.5"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: [0, 0, 0.35, 0],
                  scale: [0.8, 1, 1.4, 1.6],
                }}
                transition={{
                  delay: 2.0,
                  duration: 2.8,
                  repeat: Infinity,
                  repeatDelay: 5.5,
                  ease: 'easeInOut',
                }}
              />
            )}

            {/* Core Node Dot */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill="var(--accent, #F4B59E)"
              filter="url(#constellation-glow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.25, 1],
                opacity: [0, 1, 0.85],
              }}
              transition={{
                delay: node.delay,
                duration: 0.35,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            />
          </g>
        ))}
      </svg>
    </motion.span>
  );
}
