const monthFormatter = new Intl.DateTimeFormat('es', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

export function formatMonth(value: string): string {
  const [year, month] = value.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, 1));
  const formatted = monthFormatter.format(date).replace('.', '');
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

export function formatRange(start: string, end: string | null): string {
  const endLabel = end ? formatMonth(end) : 'Actualidad';
  return `${formatMonth(start)} — ${endLabel}`;
}
