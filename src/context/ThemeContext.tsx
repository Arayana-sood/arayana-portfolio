import { createContext, useContext, useEffect, useState } from 'react';
import type { Theme, ThemeContextValue } from '@/types';

/* ── Constants ───────────────────────────────────────────────────────── */

const STORAGE_KEY = 'arayana-theme';

/* ── Context ─────────────────────────────────────────────────────────── */

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  setTheme: () => undefined,
  toggleTheme: () => undefined,
});

/* ── Helpers ─────────────────────────────────────────────────────────── */

/**
 * Reads stored preference → falls back to system preference → defaults dark.
 * Must match the inline script in index.html to prevent flash.
 */
function resolveInitialTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
  } catch {
    // localStorage unavailable (private browsing, etc.)
  }
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
  return 'dark';
}

/**
 * Applies the theme to the document root.
 * The data-theme attribute is what CSS variables key off of.
 */
function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme);
  // Update the meta theme-color for browser chrome (address bar on mobile)
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute(
      'content',
      theme === 'dark' ? '#1B1917' : '#F4F1EB',
    );
  }
}

/* ── Provider ────────────────────────────────────────────────────────── */

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(resolveInitialTheme);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    applyTheme(newTheme);
    try {
      localStorage.setItem(STORAGE_KEY, newTheme);
    } catch {
      // Ignore storage errors
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Apply on mount to sync React state with the DOM (set by inline script)
  useEffect(() => {
    applyTheme(theme);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Also listen for system preference changes
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only follow system changes if user hasn't manually set a preference
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, [theme]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/* ── Hook ────────────────────────────────────────────────────────────── */

/**
 * Consumes the ThemeContext.
 * Must be used inside <ThemeProvider>.
 */
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
}
