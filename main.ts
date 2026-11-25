import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Best Meal You Ever Had — winner draft D26, 25/25 (26 drafts scored).
// One sentence, 172 characters: a named dish, a place, a time, a texture,
// a smell, and one specific moment — the ending reframes the whole meal.
// Tie-break note: D26 beat D04/D11 (24/25) because only D26 scores 5/5 on
// the landing turn — the tears are joy, not the smoke.
const ENTRY =
  "A plate of nasi goreng from the cart outside the hospital at 2 a.m., the egg still runny, the smoke stinging my eyes, and I cried into it because my son had just been born.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
