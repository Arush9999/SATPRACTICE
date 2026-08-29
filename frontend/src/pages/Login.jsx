import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { api, googleLoginUrl } from '../lib/api';
import {
  AuthShell,
  Divider,
  ErrorBanner,
  Field,
  GoogleIcon,
} from './Signup';

export default function Login() {
  const { user, loading, refresh } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(() => {
    const queryError = new URLSearchParams(window.location.search).get('error');
    return queryError ? 'Log in failed. Please try again.' : '';
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) navigate('/dashboard', { replace: true });
  }, [user, loading, navigate]);

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await api.login({ email, password });
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
      title="Welcome back"
      subtitle="Log in to continue your SAT practice."
      footer={(
        <p>
          New here?{' '}
          <Link to="/signup" className="font-semibold text-leaf hover:text-moss">Sign up</Link>
        </p>
      )}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <Field label="Email" type="email" value={email} onChange={setEmail} autoComplete="email" required />
        <Field
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
          autoComplete="current-password"
          required
        />

        {error && <ErrorBanner message={error} />}

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-xl bg-leaf px-4 py-3 font-semibold text-grove transition hover:bg-moss disabled:opacity-60"
        >
          {submitting ? 'Logging in...' : 'Log in'}
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
