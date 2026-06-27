/**
 * Career start - earliest entry in `ExperienceSection.tsx`
 * (Freelance Software Developer, July 2020).
 */
export const CAREER_START = new Date("2020-07-01");

/**
 * Total years of experience, rounded up, computed from {@link CAREER_START}.
 * Recomputes on each ISR revalidate so it never needs manual updating.
 */
export function getYearsOfExperience(now = new Date()): number {
  const ms = now.getTime() - CAREER_START.getTime();
  const years = ms / (365.25 * 24 * 60 * 60 * 1000);
  return Math.ceil(years);
}

/**
 * Display form, e.g. `"5+"`.
 */
export function formatExperience(now = new Date()): string {
  return `${getYearsOfExperience(now)}+`;
}
