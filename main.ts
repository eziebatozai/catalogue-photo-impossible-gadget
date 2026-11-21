// SPDX-License-Identifier: MIT
// FrostToast — catalogue photo entry for make.fun.
// The photograph is baked into the repository as entry.png; this program
// simply copies it to /output/entry.png. No network, no dependencies.

import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const targetDir = "/output";
const target = join(targetDir, "entry.png");

if (!existsSync(source)) {
  throw new Error(`Missing catalogue photograph: ${source}`);
}

mkdirSync(targetDir, { recursive: true });
copyFileSync(source, target);
console.log(`Wrote ${target} (${statSync(target).size} bytes)`);
