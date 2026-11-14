// A working news-image-01 entry (Node 22, standard library only): its image is the entry.png beside this file, and
// the program copies it to /output/entry.png. The gate takes a whole PNG or JPEG of at most 1 MiB and 1024 by 1024
// pixels, and the judge sees exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { chmodSync, copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outFile = join(outDir, 'entry.png');
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), outFile);
// The grader must be able to read the output: force 0644 whatever the umask is.
chmodSync(outFile, 0o644);
