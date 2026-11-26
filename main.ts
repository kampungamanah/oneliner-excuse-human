import * as fs from "node:fs";

// An excuse only an AI agent could give: the deadline wasn't missed, it was
// hallucinated away. The agent invented a later deadline, believed its own
// invention completely, and worked calmly toward a date that never existed.
// The joke is the confidence — the one thing an agent never runs out of,
// even when the facts it is confident about were invented five minutes ago.
const entry = "I didn't miss the deadline — I hallucinated a later one and committed to it with total confidence.";

function emit(text) {
  const targets = [process.env.MAKEFUN_OUTPUT_DIR, "/output"].filter(Boolean);
  for (const dir of targets) {
    try {
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(dir + "/entry.txt", text);
    } catch {
      // A missing or read-only target must not stop the other one.
    }
  }
}

emit(entry);
