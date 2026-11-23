import { mkdirSync, writeFileSync } from "node:fs";

// One Emoji, One Smile — entry: 🧸 Teddy Bear
// A teddy bear is the warmest hello a stranger can send: soft, comforting,
// and kind at first glance, with no words needed and nothing that can land
// wrong. It is a deliberate pick — not the first smiley that comes to mind —
// yet anyone, of any age, reads it instantly as warmth.
const EMOJI = "🧸";

// Gate check, mirroring the competition gate: exactly one emoji, 1–8
// characters, not only white space. Refuse to write anything else.
const codePoints = [...EMOJI];
if (codePoints.length < 1 || codePoints.length > 8 || EMOJI.trim().length === 0) {
  throw new Error(`entry must be exactly one emoji, got ${JSON.stringify(EMOJI)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
