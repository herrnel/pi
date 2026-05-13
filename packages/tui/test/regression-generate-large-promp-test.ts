// generate-large-markdown.js
import { createWriteStream } from "node:fs";

const outputFile = "large-markdown-bug-repro.md";

// Adjust these as needed.
// WARNING: 200000 blocks × 70000 lines is astronomically huge.
const blockCount = 10;
const xLinesPerBlock = 70000;

const stream = createWriteStream(outputFile, { encoding: "utf8" });

stream.write("# Large Markdown Bug Repro\n\n");
stream.write("This file intentionally contains repeated huge fenced code blocks.\n\n");

for (let i = 0; i < blockCount; i++) {
	stream.write(`<!-- block ${i + 1} -->\n`);
	stream.write("```\n");
	stream.write("x\n".repeat(xLinesPerBlock));
	stream.write("```\n\n");
}

stream.end(() => {
	console.log(`Created ${outputFile}`);
	console.log(`Blocks: ${blockCount}`);
	console.log(`Lines per block: ${xLinesPerBlock}`);
});
