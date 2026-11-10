import assert from "node:assert/strict";
import { test } from "node:test";
import { matchesCareerFilter, toggleCareerFilter } from "./career.ts";

test("Featured is a preset replaced by category selection", () => {
  assert.deepEqual(toggleCareerFilter(["featured"], "systems"), ["systems"]);
  assert.deepEqual(toggleCareerFilter(["systems", "ML"], "featured"), [
    "featured",
  ]);
  assert.deepEqual(toggleCareerFilter(["featured"], "featured"), []);
});

test("categories toggle independently and match any selected category", () => {
  const selected = toggleCareerFilter(["databases"], "systems");
  assert.deepEqual(selected, ["databases", "systems"]);
  assert.equal(matchesCareerFilter(["systems"], selected), true);
  assert.equal(matchesCareerFilter(["ML"], selected), false);
  assert.deepEqual(toggleCareerFilter(selected, "databases"), ["systems"]);
});

test("empty selection shows everything; featured matches only featured entries", () => {
  assert.equal(matchesCareerFilter(["misc"], []), true);
  assert.equal(matchesCareerFilter(["misc", "featured"], ["featured"]), true);
  assert.equal(matchesCareerFilter(["misc"], ["featured"]), false);
});
