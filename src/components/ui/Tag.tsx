import { cn } from '@/utils/cn';

/* ─────────────────────────────────────────────────────────────────────────
   TAG COMPONENT
   
   Technology/keyword chips. Used in project cards, skill sections, etc.
   Intentionally distinct from Badge — meant for tech stack labelling.
   Font: JetBrains Mono for a "technical" feel, smaller and tighter.
   ─────────────────────────────────────────────────────────────────────────*/

interface TagProps {
  children: React.ReactNode;
  className?: string;
  /** 'mono' — JetBrains Mono font (default, for tech labels)
   *  'sans' — Inter font (for non-technical tags) */
  font?: 'mono' | 'sans';
}

export function Tag({ children, className, font = 'mono' }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded text-xs',
        'bg-[--bg-elevated] text-secondary border border-[--border-subtle]',
        'transition-colors duration-[150ms]',
        font === 'mono' && 'font-mono-text tracking-tight',
        font === 'sans' && 'font-medium',
        className,
      )}
    >
      {children}
    </span>
  );
}
