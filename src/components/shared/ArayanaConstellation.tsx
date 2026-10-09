import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/* ─────────────────────────────────────────────────────────────────────────
   ARAYANA'S CONSTELLATION
   A unique, minimal personal visual signature.
   
   Concept:
   An abstract six-point constellation symbolizing problem-solving:
   diverse inputs converging through a central synthesis hub into structured,
   meaningful outcomes.
   
   Phases:
   1. Staggered fade & scale entrance of 6 discrete data nodes.
   2. Thin, elegant lines draw sequentially to bridge the nodes.
   3. Subtle warm amber glow upon completion.
   4. Gentle occasional shimmer while remaining mostly still.
   ─────────────────────────────────────────────────────────────────────────*/

// 6 curated abstract nodes (viewBox: 0 0 56 28)
const NODES = [
  { id: 'n1', cx: 6,  cy: 14, r: 1.8, delay: 0.1 },  // Left origin
  { id: 'n2', cx: 18, cy: 5,  r: 1.6, delay: 0.25 }, // Upper-left premise
  { id: 'n4', cx: 20, cy: 23, r: 1.6, delay: 0.4 },  // Lower anchor
  { id: 'n3', cx: 28, cy: 14, r: 2.2, delay: 0.55 }, // Central synthesis hub
  { id: 'n5', cx: 40, cy: 7,  r: 1.6, delay: 0.7 },  // Upper-right branch
  { id: 'n6', cx: 50, cy: 18, r: 1.8, delay: 0.85 }, // Right outcome apex
];

// Connecting edges representing flow of thought
const EDGES = [
  { x1: 6,  y1: 14, x2: 18, y2: 5,  delay: 0.3 },  // n1 -> n2
  { x1: 6,  y1: 14, x2: 20, y2: 23, delay: 0.45 }, // n1 -> n4
  { x1: 18, y1: 5,  x2: 28, y2: 14, delay: 0.6 },  // n2 -> n3
  { x1: 20, y1: 23, x2: 28, y2: 14, delay: 0.7 },  // n4 -> n3
  { x1: 28, y1: 14, x2: 40, y2: 7,  delay: 0.85 }, // n3 -> n5
  { x1: 28, y1: 14, x2: 50, y2: 18, delay: 0.95 }, // n3 -> n6
  { x1: 40, y1: 7,  x2: 50, y2: 18, delay: 1.1 },  // n5 -> n6
];

export function ArayanaConstellation({ className = '' }: { className?: string }) {
  const shouldReduce = useReducedMotion();

  // Instant static render for reduced-motion accessibility
  if (shouldReduce) {
    return (
      <svg
        viewBox="0 0 56 28"
        width="54"
        height="27"
        className={`inline-block overflow-visible align-middle ${className}`}
        aria-hidden="true"
        role="presentation"
      >
        {EDGES.map((e, idx) => (
          <line
            key={idx}
            x1={e.x1}
            y1={e.y1}
            x2={e.x2}
            y2={e.y2}
            stroke="var(--accent)"
            strokeWidth="0.8"
            strokeOpacity="0.45"
          />
        ))}
        {NODES.map((n) => (
          <circle
            key={n.id}
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            fill="var(--accent)"
            fillOpacity="0.85"
          />
        ))}
      </svg>
    );
  }

  return (
    <motion.svg
      viewBox="0 0 56 28"
      width="54"
      height="27"
      className={`inline-block overflow-visible align-middle select-none ${className}`}
      aria-hidden="true"
      role="presentation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <defs>
        {/* Subtle amber / peach ambient glow filter */}
        <filter id="constellation-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* ── 1. Connecting Edges (Draw smoothly from left to right) ── */}
      <g filter="url(#constellation-glow)">
        {EDGES.map((edge, idx) => (
          <motion.line
            key={`edge-${idx}`}
            x1={edge.x1}
            y1={edge.y1}
            x2={edge.x2}
            y2={edge.y2}
            stroke="var(--accent)"
            strokeWidth="0.85"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.45 }}
            transition={{
              pathLength: { delay: edge.delay, duration: 0.65, ease: [0.4, 0, 0.2, 1] },
              opacity: { delay: edge.delay, duration: 0.3 },
            }}
          />
        ))}
      </g>

      {/* ── 2. Discrete Information Nodes (Appear with staggered pop) ── */}
      {NODES.map((node) => {
        const isCenterHub = node.id === 'n3';

        return (
          <g key={node.id}>
            {/* Center hub gentle occasional shimmer aura */}
            {isCenterHub && (
              <motion.circle
                cx={node.cx}
                cy={node.cy}
                r={node.r + 2.5}
                fill="var(--accent)"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.15, 0],
                  scale: [0.9, 1.25, 0.9],
                }}
                transition={{
                  delay: 2.2,
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 6,
                  ease: 'easeInOut',
                }}
              />
            )}

            {/* Core Node */}
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill="var(--accent)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: isCenterHub ? 0.95 : 0.8,
              }}
              transition={{
                delay: node.delay,
                duration: 0.35,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            />
          </g>
        );
      })}
    </motion.svg>
  );
}
