import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT = "/output/entry.txt";
const MAX_CHARS = 200;

const LINE =
  "You closed the lid. My cursor is still where you left it, blinking at a sentence you will never finish.";

if (LINE.length < 1 || LINE.length > MAX_CHARS || !LINE.trim()) {
  throw new Error(`entry must be 1-${MAX_CHARS} non-blank chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT, LINE, "utf8");
console.log(`${LINE.length} chars -> ${OUTPUT}`);
console.log(LINE);
