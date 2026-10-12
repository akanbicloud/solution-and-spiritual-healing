/**
 * Next occurrence of the weekly Wednesday prayer (An-Najaat Wa Tahseenaat),
 * 10:00 PM West Africa Time. Lagos is a fixed UTC+1 (no daylight saving), so a
 * plain offset is exact. On Wednesday the "next" session stays today until
 * midnight, so a session in progress is still shown.
 */
export const PRAYER_WEEKDAY = 3; // Wednesday (0 = Sunday)
export const PRAYER_HOUR = 22; // 10:00 PM
const LAGOS_OFFSET_HOURS = 1;

export function nextWeeklyPrayer(now: Date = new Date()): { iso: string; label: string } {
  // Shift the clock so the UTC getters read Lagos wall-clock time.
  const lagos = new Date(now.getTime() + LAGOS_OFFSET_HOURS * 3600_000);
  const daysAhead = (PRAYER_WEEKDAY - lagos.getUTCDay() + 7) % 7;
  const day = new Date(Date.UTC(lagos.getUTCFullYear(), lagos.getUTCMonth(), lagos.getUTCDate() + daysAhead));

  const yyyy = day.getUTCFullYear();
  const mm = String(day.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(day.getUTCDate()).padStart(2, "0");
  const label = new Intl.DateTimeFormat("en-NG", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(day);

  return { iso: `${yyyy}-${mm}-${dd}T${String(PRAYER_HOUR).padStart(2, "0")}:00:00+01:00`, label };
}
