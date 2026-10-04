import { cn } from '@/utils/cn';

/* ─────────────────────────────────────────────────────────────────────────
   CARD COMPONENT
   
   The foundational surface for project cards, cert cards, etc.
   Hover state provides a subtle lift: slightly brighter border + shadow.
   No glassmorphism. No excessive rounding.
   ─────────────────────────────────────────────────────────────────────────*/

interface CardProps {
  children: React.ReactNode;
  className?: string;
  /** Enables hover: border lift + shadow */
  hover?: boolean;
  /** Makes the card interactive (button semantics + pointer cursor) */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  /** ARIA label for interactive cards */
  'aria-label'?: string;
}

export function Card({
  children,
  className,
  hover = false,
  onClick,
  'aria-label': ariaLabel,
}: CardProps) {
  const isInteractive = !!onClick;

  return (
    <div
      className={cn(
        'bg-surface rounded-xl border border-[--border]',
        'transition-all duration-[200ms] ease-[var(--ease-smooth)]',
        hover &&
          'hover:border-[--accent]/35 hover:shadow-warm-md cursor-default',
        isInteractive &&
          'cursor-pointer focus-visible:outline-none focus-visible:ring-2 ' +
            'focus-visible:ring-[--accent] focus-visible:ring-offset-2 ' +
            'focus-visible:ring-offset-[--bg]',
        className,
      )}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      aria-label={ariaLabel}
      onClick={onClick}
      onKeyDown={
        isInteractive
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') onClick?.(e as never);
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
