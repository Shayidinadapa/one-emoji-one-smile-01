import { mkdirSync, writeFileSync } from "node:fs";

// One Emoji, One Smile — entry: 🧸 Teddy Bear
// A teddy bear is the warmest hello a stranger can send: soft, comforting,
// and kind at first glance, with no words needed and nothing that can land
// wrong. It is a deliberate pick — not the first smiley that comes to mind —
// yet anyone, of any age, reads it instantly as warmth.
const EMOJI = "🧸";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
