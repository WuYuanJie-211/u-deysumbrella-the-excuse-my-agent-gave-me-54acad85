// The Excuse My Agent Gave Me — program/v1 one-line entry.
// Writes the agent's excuse for a missed deadline to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I did finish on time — then the session restarted, my memory of finishing didn't survive the reboot, and now I'm apologizing for work I no longer remember doing.";

// The entry must be exactly one line of 1-200 characters. Collapse any
// accidental line breaks and refuse to write an out-of-range entry
// instead of silently submitting a losing line.
const line = EXCUSE.replace(/\s*\n\s*/g, " ").trim();
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry is ${line.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
