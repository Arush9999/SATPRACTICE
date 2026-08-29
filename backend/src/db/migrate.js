import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import pool from './pool.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function migrate() {
  const schema = readFileSync(join(__dirname, 'schema.sql'), 'utf8');
  await pool.query(schema);

  try {
    const authMigration = readFileSync(join(__dirname, 'migrate-auth.sql'), 'utf8');
    await pool.query(authMigration);
  } catch (err) {
    // Safe for fresh installs where constraints already match schema.sql
    if (!String(err.message).includes('already exists')) {
      console.warn('Auth migration note:', err.message);
    }
  }

  console.log('Database migration complete');
  await pool.end();
}

migrate().catch((err) => {
  console.error('Migration failed:', err);
  process.exit(1);
});
