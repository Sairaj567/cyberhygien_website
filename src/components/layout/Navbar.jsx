import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../ThemeProvider.jsx';

const links = [
  { label: 'Home', to: '/', end: true },
  { label: 'About', to: '/about' },
  { label: 'Committees', to: '/committees' },
  { label: 'Themes', to: '/themes' },
  { label: 'Agenda', to: '/agenda' },
  { label: 'Team', to: '/team' },
  { label: 'Registration', to: '/registration' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' }
];

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-40 transition-shadow ${
        scrolled ? 'bg-white/80 shadow-lg backdrop-blur dark:bg-slate-900/80' : 'bg-transparent'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-6">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-primary dark:text-secondary">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary dark:bg-primary/20 dark:text-primary">CH</span>
          <span className="leading-tight">
            <span className="block">Cyber Hygiene</span>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">MUN 2025</span>
          </span>
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          <div className="flex items-center gap-4 text-sm font-medium">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={Boolean(link.end)}
                className={({ isActive }) =>
                  `relative transition-colors hover:text-secondary ${
                    isActive ? 'text-secondary' : 'text-slate-600 dark:text-slate-300'
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="inline-flex items-center gap-1">
                    {link.label}
                    {isActive ? (
                      <motion.span
                        layoutId="nav-dot"
                        className="h-1 w-1 rounded-full bg-secondary"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    ) : null}
                  </span>
                )}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full border border-slate-200 bg-white/80 p-2 text-slate-600 transition hover:border-secondary hover:text-secondary dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link
              to="/registration"
              className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-secondary/90"
            >
              Register
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-slate-200 bg-white/80 p-2 text-slate-600 transition hover:border-secondary hover:text-secondary dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="rounded-full border border-slate-200 bg-white/80 p-2 text-slate-700 transition hover:border-secondary hover:text-secondary dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            className="md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="space-y-4 bg-white/95 px-4 pb-8 pt-4 shadow-lg backdrop-blur dark:bg-slate-900/95">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={Boolean(link.end)}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 text-base font-medium transition hover:bg-secondary/10 hover:text-secondary ${
                      isActive ? 'bg-secondary/10 text-secondary' : 'text-slate-700 dark:text-slate-200'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/registration"
                onClick={() => setMobileOpen(false)}
                className="flex w-full justify-center rounded-full bg-secondary px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-secondary/90"
              >
                Register Now
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
