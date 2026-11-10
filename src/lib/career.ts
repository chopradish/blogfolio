export const careerCategories = ["databases", "systems", "ML", "misc"] as const;
export type CareerCategory = (typeof careerCategories)[number];
export type CareerFilter = CareerCategory | "featured";

export function toggleCareerFilter(
  selected: readonly CareerFilter[],
  filter: CareerFilter,
): CareerFilter[] {
  if (filter === "featured") {
    return selected.includes("featured") ? [] : ["featured"];
  }
  const categories = selected.filter((value) => value !== "featured");
  return categories.includes(filter)
    ? categories.filter((value) => value !== filter)
    : [...categories, filter];
}

export function matchesCareerFilter(
  tags: readonly string[],
  selected: readonly CareerFilter[],
): boolean {
  return (
    selected.length === 0 || selected.some((filter) => tags.includes(filter))
  );
}
