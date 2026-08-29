import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ThemeToggle from '../components/ThemeToggle';
import { api, googleLoginUrl } from '../lib/api';

export default function Signup() {
  const { user, loading, refresh } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) navigate('/dashboard', { replace: true });
  }, [user, loading, navigate]);

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await api.signup({ name, email, password });
      await refresh();
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AuthShell
      title="Sign up"
      subtitle="Start practicing with official SAT Suite questions."
      footer={(
        <p>
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-leaf hover:text-moss">Log in</Link>
        </p>
      )}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <Field label="Name" type="text" value={name} onChange={setName} autoComplete="name" required />
        <Field label="Email" type="email" value={email} onChange={setEmail} autoComplete="email" required />
        <Field
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
          autoComplete="new-password"
          required
          hint="At least 8 characters"
        />

        {error && <ErrorBanner message={error} />}

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-xl bg-leaf px-4 py-3 font-semibold text-grove transition hover:bg-moss disabled:opacity-60"
        >
          {submitting ? 'Signing up...' : 'Sign up'}
        </button>
      </form>

      <Divider />

      <a
        href={googleLoginUrl()}
        className="flex w-full items-center justify-center gap-3 rounded-xl border border-haze/50 bg-grove px-4 py-3 font-medium text-ink transition hover:border-leaf hover:bg-mist-soft"
      >
        <GoogleIcon />
        Continue with Google
      </a>
    </AuthShell>
  );
}

export function AuthShell({ title, subtitle, children, footer }) {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center py-8">
      <div className="mb-8 flex items-center justify-between gap-4">
        <Link to="/" className="font-display text-2xl font-bold text-leaf">
          SAT Practice
        </Link>
        <ThemeToggle />
      </div>
      <div className="rounded-3xl border border-sage/60 bg-surface p-8 shadow-sm backdrop-blur-sm">
        <h1 className="font-display text-3xl font-bold text-ink">{title}</h1>
        <p className="mt-2 text-sm leading-6 text-mist">{subtitle}</p>
        <div className="mt-8">{children}</div>
      </div>
      {footer && <div className="mt-6 text-center text-sm text-mist">{footer}</div>}
    </div>
  );
}

export function Field({ label, type, value, onChange, autoComplete, required, hint }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-shadow">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-xl border border-sage bg-surface-solid px-4 py-3 text-ink outline-none transition focus:border-leaf focus:ring-2 focus:ring-lime/40"
      />
      {hint && <span className="mt-1 block text-xs text-haze">{hint}</span>}
    </label>
  );
}

export function Divider() {
  return (
    <div className="my-6 flex items-center gap-3 text-xs font-medium uppercase tracking-wide text-haze">
      <div className="h-px flex-1 bg-sage" />
      or
      <div className="h-px flex-1 bg-sage" />
    </div>
  );
}

export function ErrorBanner({ message }) {
  return (
    <p className="rounded-xl border border-earth/30 bg-earth/10 px-4 py-3 text-sm text-earth">
      {message}
    </p>
  );
}

export function GoogleIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4B7D2F" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#6B8E23" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#A3C139" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#1A2F16" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}
