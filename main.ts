// news-image-20261119 entry: copies the pre-made entry.png beside this module to
// <MAKEFUN_OUTPUT_DIR or /output>/entry.png. No network, no clock, no randomness.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const source = fileURLToPath(new URL('./entry.png', import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const target = join(outDir, 'entry.png');

try {
  mkdirSync(outDir, { recursive: true });
  copyFileSync(source, target);
} catch (err) {
  throw new Error(`could not copy ${source} to ${target}: ${(err as Error).message}`, { cause: err });
}
