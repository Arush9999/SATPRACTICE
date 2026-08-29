import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate('/dashboard', { replace: true });
    }
  }, [user, loading, navigate]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-sage">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,#4b7d2f_0%,transparent_45%),radial-gradient(ellipse_at_90%_20%,#a3c139_0%,transparent_35%),radial-gradient(ellipse_at_50%_90%,#1a2f16_0%,#0d1b0a_70%)]" />
        <div className="hero-mesh absolute -left-24 top-16 h-80 w-80 rounded-full bg-lime/20 blur-3xl" />
        <div className="hero-mesh-delay absolute bottom-10 right-0 h-96 w-96 rounded-full bg-canopy/25 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'linear-gradient(135deg, transparent 40%, #c0d725 40.5%, transparent 41%), linear-gradient(135deg, transparent 62%, #6b8e23 62.5%, transparent 63%)',
            backgroundSize: '100% 100%',
          }}
        />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="flex items-center justify-between px-6 py-5 md:px-10">
          <p className="font-display text-2xl font-bold tracking-tight text-chartreuse md:text-3xl">
            SAT Practice
          </p>
          <div className="flex items-center gap-3">
            <ThemeToggle className="border-sage/30 text-sage hover:border-lime hover:bg-forest/40 hover:text-chartreuse" />
            <Link
              to="/login"
              className="rounded-xl border border-sage/30 px-4 py-2 text-sm font-medium text-sage transition hover:border-lime hover:text-chartreuse"
            >
              Log in
            </Link>
          </div>
        </header>

        <main className="flex flex-1 flex-col justify-center px-6 py-16 md:px-10">
          <div className="max-w-2xl">
            <h1 className="fade-up font-display text-5xl font-bold leading-[1.05] text-chartreuse md:text-7xl">
              Grow your score
            </h1>
            <p className="fade-up-delay mt-5 max-w-lg text-lg leading-8 text-sage md:text-xl">
              Official SAT Suite practice with full tests, targeted drills, and vocab — tracked day by day.
            </p>
            <div className="fade-up-delay-2 mt-8 flex flex-wrap gap-3">
              <Link
                to="/signup"
                className="rounded-xl bg-lime px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-chartreuse"
              >
                Sign up
              </Link>
              <Link
                to="/login"
                className="rounded-xl border border-sage/40 px-6 py-3.5 text-sm font-semibold text-sage transition hover:border-lime hover:text-chartreuse"
              >
                Log in
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
