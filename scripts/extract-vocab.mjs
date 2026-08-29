import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = readFileSync(join(__dirname, '..', 'cards.js'), 'utf8');
const match = src.match(/const CARDS = (\[[\s\S]*\]);/);
if (!match) throw new Error('Could not parse CARDS');
const cards = eval(match[1]);
const vocab = cards.filter((c) => c.category === 'vocabulary');
mkdirSync(join(__dirname, '..', 'data'), { recursive: true });
writeFileSync(join(__dirname, '..', 'data', 'vocab.json'), JSON.stringify(vocab, null, 2));
console.log(`Extracted ${vocab.length} vocabulary cards`);
