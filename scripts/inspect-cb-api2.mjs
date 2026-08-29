import { writeFileSync } from 'fs';

const res = await fetch('https://raw.githubusercontent.com/sharthak-sev/sat-qb-exporter/main/background.js');
const text = await res.text();

const keywords = ['get-questions', 'get-question', 'digitalpractice-api', 'assessment', 'domain', 'difficulty', 'section', 'Authorization', 'cookie', 'headers'];
for (const kw of keywords) {
  let idx = 0;
  let count = 0;
  while ((idx = text.indexOf(kw, idx)) !== -1 && count < 5) {
    console.log(`\n=== ${kw} @ ${idx} ===`);
    console.log(text.slice(Math.max(0, idx - 200), idx + 400));
    idx += kw.length;
    count += 1;
  }
}

writeFileSync('scripts/cb-background-full.js', text);
