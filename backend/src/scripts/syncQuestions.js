import dotenv from 'dotenv';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import pool from '../db/pool.js';
import { syncAllQuestions, getSyncStatus } from '../services/questionSync.js';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
  const schema = readFileSync(join(__dirname, '../db/schema.sql'), 'utf8');
  await pool.query(schema);

  console.log('Syncing questions from College Board SAT Suite Question Bank...');
  console.log('This may take several minutes on the first run.\n');

  const report = await syncAllQuestions({
    onProgress: (progress) => {
      if (progress.phase === 'metadata') {
        console.log(`Listing metadata: ${progress.domain}`);
      } else if (progress.phase === 'details') {
        console.log(`Fetching details: ${progress.done || 0}/${progress.total || '?'}`);
      }
    },
  });

  const status = await getSyncStatus();
  console.log('\nSync complete.');
  console.log(`Metadata listed: ${report.metadataListed}`);
  console.log(`Details synced: ${report.detailsSynced}`);
  console.log(`Skipped: ${report.skipped}`);
  console.log(`In database: ${status.synced_count} MCQ questions`);
  if (report.errors.length) {
    console.log(`Errors (${report.errors.length}):`);
    report.errors.slice(0, 10).forEach((error) => console.log(`  - ${error}`));
  }

  await pool.end();
}

main().catch(async (error) => {
  console.error('Sync failed:', error);
  await pool.end();
  process.exit(1);
});
