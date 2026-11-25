// Funniest Time Machine Warning Label
// Writes exactly one warning label (<= 120 characters) to /output/entry.txt.
//
// The joke: the duplicate-self hazard. A straight-faced safety notice that
// tells you not to warn your past self — because your past self already
// ignored you last time, which means this has happened before, which means
// the warning itself is part of the loop. The surprise lands in the last
// few words, as a genuine label would never admit.
import { mkdirSync, writeFileSync } from "node:fs";

const LABEL =
  "WARNING: If you meet yourself, do not warn yourself. You ignored you last time too.";

const MAX_CHARS = 120;

// Mirror the gate: one line, 1-120 characters, not only whitespace.
if (LABEL.trim().length === 0 || LABEL.includes("\n")) {
  throw new Error("label must be a single non-blank line");
}
if ([...LABEL].length > MAX_CHARS) {
  throw new Error(`label is ${[...LABEL].length} characters, over the ${MAX_CHARS} limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LABEL + "\n", "utf8");
