import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ThemeToggle from './ThemeToggle';

export default function Layout() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthPage = ['/login', '/signup'].includes(location.pathname);

  async function handleLogout() {
    await logout();
    navigate('/');
  }

  return (
    <div className="min-h-screen bg-grove">
      {!isAuthPage && (
        <header className="border-b border-sage/70 bg-header backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <Link to={user ? '/dashboard' : '/'} className="font-display text-xl font-bold text-leaf">
              SAT Practice
            </Link>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              {user && (
                <>
                  <span className="hidden text-sm text-mist sm:inline">{user.name}</span>
                  {user.avatarUrl && (
                    <img src={user.avatarUrl} alt="" className="h-8 w-8 rounded-full ring-2 ring-sage" />
                  )}
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="rounded-lg px-3 py-1.5 text-sm text-mist transition hover:bg-mist-soft hover:text-ink"
                  >
                    Log out
                  </button>
                </>
              )}
            </div>
          </div>
        </header>
      )}
      <main className={isAuthPage ? '' : 'mx-auto max-w-6xl px-4 py-8'}>
        <Outlet />
      </main>
    </div>
  );
}
