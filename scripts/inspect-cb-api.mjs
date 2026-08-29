import { writeFileSync } from 'fs';

const res = await fetch('https://raw.githubusercontent.com/sharthak-sev/sat-qb-exporter/main/background.js');
const text = await res.text();
const urls = [...new Set(text.match(/https?:\/\/[^\s'"`]+/g) || [])].sort();
console.log(urls.join('\n'));

const apiPatterns = [...new Set(text.match(/['"`]\/[^'"`]{5,}['"`]/g) || [])]
  .filter((p) => p.includes('question') || p.includes('api') || p.includes('bank'))
  .slice(0, 30);
console.log('\n--- paths ---\n', apiPatterns.join('\n'));

writeFileSync('scripts/cb-background-snippet.txt', text.slice(0, 15000));
