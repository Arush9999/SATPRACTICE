import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcryptjs';
import pool from '../db/pool.js';

export function configurePassport() {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const { rows } = await pool.query(
        'SELECT id, email, name, avatar_url FROM users WHERE id = $1',
        [id],
      );
      done(null, rows[0] || null);
    } catch (err) {
      done(err);
    }
  });

  passport.use(
    new LocalStrategy(
      { usernameField: 'email', passwordField: 'password' },
      async (email, password, done) => {
        try {
          const normalized = String(email || '').trim().toLowerCase();
          const { rows } = await pool.query(
            'SELECT * FROM users WHERE LOWER(email) = $1',
            [normalized],
          );
          const user = rows[0];

          if (!user || !user.password_hash) {
            return done(null, false, { message: 'Invalid email or password' });
          }

          const ok = await bcrypt.compare(password, user.password_hash);
          if (!ok) {
            return done(null, false, { message: 'Invalid email or password' });
          }

          return done(null, user);
        } catch (err) {
          return done(err);
        }
      },
    ),
  );

  if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
    console.warn('Google OAuth not configured — set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET');
    return;
  }

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
      },
      async (_accessToken, _refreshToken, profile, done) => {
        try {
          const googleId = profile.id;
          const email = profile.emails?.[0]?.value?.toLowerCase();
          const name = profile.displayName;
          const avatarUrl = profile.photos?.[0]?.value;

          const byGoogle = await pool.query('SELECT * FROM users WHERE google_id = $1', [googleId]);
          if (byGoogle.rows[0]) {
            return done(null, byGoogle.rows[0]);
          }

          if (email) {
            const byEmail = await pool.query('SELECT * FROM users WHERE LOWER(email) = $1', [email]);
            if (byEmail.rows[0]) {
              const linked = await pool.query(
                `UPDATE users SET google_id = $1, avatar_url = COALESCE(avatar_url, $2)
                 WHERE id = $3 RETURNING *`,
                [googleId, avatarUrl, byEmail.rows[0].id],
              );
              return done(null, linked.rows[0]);
            }
          }

          const inserted = await pool.query(
            `INSERT INTO users (google_id, email, name, avatar_url)
             VALUES ($1, $2, $3, $4)
             RETURNING *`,
            [googleId, email, name, avatarUrl],
          );

          return done(null, inserted.rows[0]);
        } catch (err) {
          return done(err);
        }
      },
    ),
  );
}
