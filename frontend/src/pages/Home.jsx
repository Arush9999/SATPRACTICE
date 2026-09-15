import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate('/dashboard', { replace: true });
    }
  }, [user, loading, navigate]);

  return (
    <div className="home-hero relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="home-gradient absolute inset-0" />
        <div className="hero-mesh absolute -left-24 top-16 h-80 w-80 rounded-full bg-lime/25 blur-3xl" />
        <div className="hero-mesh-delay absolute bottom-10 right-0 h-96 w-96 rounded-full bg-canopy/20 blur-3xl" />
        <div className="home-stripes absolute inset-0 opacity-[0.12]" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="flex items-center justify-between px-6 py-5 md:px-10">
          <p className="font-display text-2xl font-bold tracking-tight text-chartreuse md:text-3xl">
            SAT Practice
          </p>
          <Link
            to="/login"
            className="rounded-xl border border-white/20 px-4 py-2 text-sm font-medium text-mist transition hover:border-lime hover:text-chartreuse"
          >
            Log in
          </Link>
        </header>

        <main className="flex flex-1 flex-col justify-center px-6 py-16 md:px-10">
          <div className="max-w-2xl">
            <h1 className="fade-up font-display text-5xl font-bold leading-[1.05] text-chartreuse md:text-7xl">
              Grow your score
            </h1>
            <p className="fade-up-delay mt-5 max-w-lg text-lg leading-8 text-mist md:text-xl">
              Official SAT Suite practice with full tests, targeted drills, and vocab — tracked day by day.
            </p>
            <div className="fade-up-delay-2 mt-8 flex flex-wrap gap-3">
              <Link
                to="/signup"
                className="rounded-xl bg-lime px-6 py-3.5 text-sm font-semibold text-forest transition hover:bg-chartreuse"
              >
                Sign up
              </Link>
              <Link
                to="/login"
                className="rounded-xl border border-white/25 px-6 py-3.5 text-sm font-semibold text-mist transition hover:border-lime hover:text-chartreuse"
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
