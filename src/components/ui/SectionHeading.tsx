import { cn } from '@/utils/cn';

/* ─────────────────────────────────────────────────────────────────────────
   SECTION HEADING COMPONENT
   
   Used to introduce each section of the portfolio.
   Structure:
     [OVERLINE — small caps, amber, monospace]
     [Main Heading — large, Inter 600]
     [Description — optional, muted text]
   ─────────────────────────────────────────────────────────────────────────*/

interface SectionHeadingProps {
  /** Small label above the heading — rendered in JetBrains Mono, accent color */
  overline?: string;
  heading: string;
  /** Optional supporting description */
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  /** HTML heading level — defaults to h2 (correct for sections) */
  level?: 2 | 3;
}

export function SectionHeading({
  overline,
  heading,
  description,
  align = 'left',
  className,
  level = 2,
}: SectionHeadingProps) {
  const Heading = `h${level}` as 'h2' | 'h3';

  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {overline && (
        <span
          className={cn(
            'font-mono-text text-xs tracking-widest uppercase text-accent',
            'inline-flex items-center gap-2',
          )}
          aria-hidden="true"
        >
          {/* Decorative line before overline text */}
          <span className="inline-block w-6 h-px bg-[--accent]" />
          {overline}
        </span>
      )}

      <Heading
        className={cn(
          'text-3xl sm:text-4xl font-semibold text-primary tracking-tight',
        )}
      >
        {heading}
      </Heading>

      {description && (
        <p
          className={cn(
            'text-secondary text-base leading-relaxed',
            align === 'left' && 'max-w-xl',
            align === 'center' && 'max-w-2xl',
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
