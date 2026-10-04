import { cn } from '@/utils/cn';

/* ─────────────────────────────────────────────────────────────────────────
   BUTTON COMPONENT
   
   Variants:
   • primary — amber fill, dark text (the main CTA)
   • ghost   — transparent, text-primary color, subtle hover
   • outline — bordered, subtle hover → amber border + text on hover
   
   Renders as <button> by default, as <a> when href is provided.
   ─────────────────────────────────────────────────────────────────────────*/

/* Shared base classes */
const BASE =
  'inline-flex items-center justify-center gap-2 font-medium rounded-md ' +
  'transition-all duration-[150ms] ease-[var(--ease-smooth)] ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--accent] ' +
  'focus-visible:ring-offset-2 focus-visible:ring-offset-[--bg] ' +
  'disabled:opacity-50 disabled:pointer-events-none select-none';

/* Variant classes */
const VARIANTS = {
  primary:
    'bg-[--accent] text-[--accent-fg] hover:bg-[--accent-hover] ' +
    'active:scale-[0.97] active:brightness-95',
  ghost:
    'bg-transparent text-primary hover:bg-[--bg-hover] ' +
    'active:bg-[--bg-elevated]',
  outline:
    'bg-transparent border border-[--border] text-primary ' +
    'hover:border-[--accent] hover:text-accent ' +
    'active:bg-[--bg-surface]',
} as const;

/* Size classes */
const SIZES = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-11 px-6 text-base',
} as const;

type Variant = keyof typeof VARIANTS;
type Size = keyof typeof SIZES;

/* ── Shared props ────────────────────────────────────────────────────── */
interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
  className?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  /** Disables pointer events and reduces opacity */
  disabled?: boolean;
}

/* ── As <button> ─────────────────────────────────────────────────────── */
interface ButtonAsButton
  extends ButtonBaseProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> {
  href?: undefined;
}

/* ── As <a> ──────────────────────────────────────────────────────────── */
interface ButtonAsLink
  extends ButtonBaseProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> {
  href: string;
  /** Adds target="_blank" rel="noopener noreferrer" */
  external?: boolean;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  iconLeft,
  iconRight,
  disabled,
  ...props
}: ButtonProps) {
  const styles = cn(BASE, VARIANTS[variant], SIZES[size], className);

  /* Render as anchor */
  if ('href' in props && props.href !== undefined) {
    const { href, external, ...rest } = props as ButtonAsLink;
    return (
      <a
        href={href}
        className={styles}
        aria-disabled={disabled}
        {...(external
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {iconLeft && (
          <span className="shrink-0 inline-flex" aria-hidden>
            {iconLeft}
          </span>
        )}
        {children}
        {iconRight && (
          <span className="shrink-0 inline-flex" aria-hidden>
            {iconRight}
          </span>
        )}
      </a>
    );
  }

  /* Render as button */
  const { ...rest } = props as ButtonAsButton;
  return (
    <button
      className={styles}
      disabled={disabled}
      {...rest}
    >
      {iconLeft && (
        <span className="shrink-0 inline-flex" aria-hidden>
          {iconLeft}
        </span>
      )}
      {children}
      {iconRight && (
        <span className="shrink-0 inline-flex" aria-hidden>
          {iconRight}
        </span>
      )}
    </button>
  );
}
