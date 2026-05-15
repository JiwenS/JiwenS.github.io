const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

const dayFormatter = new Intl.DateTimeFormat("en", {
  day: "numeric",
  timeZone: "UTC",
});

const monthYearFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export function formatDate(date: Date): string {
  return dateFormatter.format(date);
}

export function formatDateDay(date: Date): string {
  return dayFormatter.format(date);
}

export function formatDateMonthYear(date: Date): string {
  return monthYearFormatter.format(date);
}
