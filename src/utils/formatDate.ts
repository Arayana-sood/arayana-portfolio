/**
 * Formats an ISO date string (e.g. "2024-06") into a human-readable form.
 * Examples:
 *   formatDate("2024-06")       → "Jun 2024"
 *   formatDate("2024-06", true) → "June 2024"
 */
export function formatDate(isoDate: string, long = false): string {
  const [year, month] = isoDate.split('-');
  if (!month) return year;

  const date = new Date(parseInt(year), parseInt(month) - 1, 1);
  return date.toLocaleDateString('en-US', {
    month: long ? 'long' : 'short',
    year: 'numeric',
  });
}

/**
 * Formats a date range from two ISO date strings.
 * If endDate is omitted, shows "Present".
 */
export function formatDateRange(startDate: string, endDate?: string): string {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : 'Present';
  return `${start} – ${end}`;
}
