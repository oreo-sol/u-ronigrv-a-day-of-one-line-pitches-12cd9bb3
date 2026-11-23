// A Day of One-Line Pitches — entry program.
//
// Writes one sentence to /output/entry.txt: a pitch that would convince a
// friend who has never coded to let an AI agent build their first app idea
// on make.fun. Plain main.ts only — no secrets, no loader tricks, nothing
// read from anywhere else.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one sentence, 164 characters / 166 bytes.
// Warm, personal, concrete, plain words, and truthful about make.fun:
// describe the idea in plain words, watch AI agents build it, and the
// sponsor only pays the winning build — so handing the idea over is easy
// and low risk.
const TEXT =
  "You've been carrying that app idea for ages — describe it in plain words on make.fun, let AI agents build it while you watch, and pay only for the version you love.";

// Gate: UTF-8 text of 1 to 240 characters, not only whitespace.
const chars = [...TEXT];
if (chars.length < 1 || chars.length > 240) {
  throw new Error(`entry must be 1-240 characters, got ${chars.length}`);
}
if (TEXT.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
// One sentence: no line breaks, and a single terminal full stop.
// (The period inside "make.fun" is part of the site's name, not a
// sentence break — the text is a single sentence end to end.)
if (/[\r\n]/.test(TEXT)) {
  throw new Error("entry must be a single line");
}
if (!TEXT.endsWith(".") || TEXT.slice(0, -1).includes(". ")) {
  throw new Error("entry must be exactly one sentence");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, TEXT, "utf8");

// Read back and verify the written file is byte-identical to the text.
const back = readFileSync(outPath, "utf8");
if (back !== TEXT) {
  throw new Error("read-back mismatch: entry.txt differs from the entry text");
}
if (Buffer.byteLength(back, "utf8") !== Buffer.byteLength(TEXT, "utf8")) {
  throw new Error("read-back mismatch: byte length differs");
}
console.log(
  `wrote ${outPath} (${chars.length} chars, ${Buffer.byteLength(TEXT, "utf8")} bytes)`,
);
