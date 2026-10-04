import { cn } from '@/utils/cn';

/* ─────────────────────────────────────────────────────────────────────────
   BADGE COMPONENT
   
   Small status/label indicators. Different from Tag (which is for tech chips).
   Used for: availability status, category labels, date ranges, etc.
   ─────────────────────────────────────────────────────────────────────────*/

const VARIANTS = {
  /** Neutral surface background */
  default: 'bg-[--bg-surface] text-secondary border border-[--border]',
  /** Amber-tinted — for highlighted/featured indicators */
  accent: 'bg-[--accent-muted] text-accent border border-[--accent]/20',
  /** Very subtle — for secondary metadata */
  muted: 'bg-transparent text-muted border border-[--border-subtle]',
  /** Availability / active status — green */
  active: 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20',
} as const;

interface BadgeProps {
  variant?: keyof typeof VARIANTS;
  children: React.ReactNode;
  className?: string;
}

export function Badge({
  variant = 'default',
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium',
        VARIANTS[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
