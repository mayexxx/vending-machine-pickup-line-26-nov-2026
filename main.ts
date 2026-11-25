import { mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';

const text = 'You’re pushing all my buttons and you’ve got my coils in a spin; no exact change needed, I’d give you the best treat from my slots just to see you smile.';

if (text.includes('\r') || text.split('\n').length !== 1 || Array.from(text).length < 1 || Array.from(text).length > 199) {
  throw new Error('Invalid entry text');
}

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt.tmp', text + '\n');
renameSync('/output/entry.txt.tmp', '/output/entry.txt');
if (readFileSync('/output/entry.txt', 'utf8') !== text + '\n') {
  throw new Error('Output verification failed');
}
