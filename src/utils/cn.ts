import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind CSS class names safely, resolving conflicts.
 * Combines clsx (conditional logic) with tailwind-merge (deduplication).
 *
 * Usage: cn('px-4 py-2', isActive && 'bg-accent-fill', className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
