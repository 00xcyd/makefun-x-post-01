import { constants } from "node:fs";
import { access, copyFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const botDir = resolve(process.env.MAKEFUN_BOT_DIR ?? "/bot");
const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
const source = resolve(botDir, "POST.json");
const target = resolve(outputDir, "POST.json");

const hints: Record<string, string> = {
  EACCES: "check read permission on the source and write permission on the output directory",
  EISDIR: "the source or output path is a directory, not a file",
  ENOENT: "check that POST.json exists inside MAKEFUN_BOT_DIR",
  ENOSPC: "the output filesystem is full",
};

async function copyPost(): Promise<void> {
  try {
    await access(source, constants.R_OK);
  } catch {
    throw new Error(`POST.json is missing or unreadable at ${source}`);
  }
  await mkdir(outputDir, { recursive: true });
  await copyFile(source, target);
}

try {
  await copyPost();
} catch (error) {
  const code = (error as NodeJS.ErrnoException).code;
  const reason = error instanceof Error ? error.message : String(error);
  console.error("main.ts: failed to copy POST.json");
  console.error(`  from:   ${source}`);
  console.error(`  to:     ${target}`);
  console.error(`  reason: ${reason}${code ? ` [${code}]` : ""}`);
  if (code && hints[code]) console.error(`  hint:   ${hints[code]}`);
  process.exit(1);
}
