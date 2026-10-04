import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/utils/cn';

/* ─────────────────────────────────────────────────────────────────────────
   THEME TOGGLE
   
   A clean icon button that switches between dark and light modes.
   • Shows Sun icon in dark mode (click → switch to light)
   • Shows Moon icon in light mode (click → switch to dark)
   • Smooth icon crossfade via CSS opacity transition
   • Proper aria-label updated dynamically
   ─────────────────────────────────────────────────────────────────────────*/

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(
        'relative w-9 h-9 rounded-md flex items-center justify-center',
        'text-secondary transition-all duration-[150ms]',
        'hover:bg-[--bg-hover] hover:text-primary',
        'focus-visible:outline-none focus-visible:ring-2',
        'focus-visible:ring-[--accent] focus-visible:ring-offset-2',
        'focus-visible:ring-offset-[--bg]',
        className,
      )}
    >
      {/* Sun — visible in dark mode */}
      <Sun
        size={17}
        strokeWidth={1.75}
        className={cn(
          'absolute transition-all duration-200',
          isDark
            ? 'opacity-100 rotate-0 scale-100'
            : 'opacity-0 -rotate-90 scale-75',
        )}
        aria-hidden
      />

      {/* Moon — visible in light mode */}
      <Moon
        size={17}
        strokeWidth={1.75}
        className={cn(
          'absolute transition-all duration-200',
          isDark
            ? 'opacity-0 rotate-90 scale-75'
            : 'opacity-100 rotate-0 scale-100',
        )}
        aria-hidden
      />
    </button>
  );
}
