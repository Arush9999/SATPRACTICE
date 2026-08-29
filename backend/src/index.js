import express from 'express';
import session from 'express-session';
import connectPgSimple from 'connect-pg-simple';
import cors from 'cors';
import passport from 'passport';
import dotenv from 'dotenv';
import pool from './db/pool.js';
import { configurePassport } from './config/passport.js';
import authRoutes from './routes/auth.js';
import questionRoutes from './routes/questions.js';
import statsRoutes from './routes/stats.js';
import vocabRoutes from './routes/vocab.js';
import syncRoutes from './routes/sync.js';

dotenv.config();

const app = express();
const PgSession = connectPgSimple(session);
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));

app.use(express.json());

app.use(
  session({
    store: new PgSession({
      pool,
      tableName: 'session',
      createTableIfMissing: true,
    }),
    secret: process.env.SESSION_SECRET || 'dev-secret-change-me',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    },
  }),
);

configurePassport();
app.use(passport.initialize());
app.use(passport.session());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.use('/api/auth', authRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/stats', statsRoutes);
app.use('/api/vocab', vocabRoutes);
app.use('/api/sync', syncRoutes);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: err.message || 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`SAT Practice API running on http://localhost:${PORT}`);
});
