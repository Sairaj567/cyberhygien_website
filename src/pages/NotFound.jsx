import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function NotFound() {
  return (
    <section className="section-max flex flex-col items-center justify-center gap-6 text-center py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card max-w-md p-10"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">404</p>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">Page not found</h1>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
          The page you are looking for may have been moved or renamed. Let us guide you back to the summit homepage.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-secondary/90"
        >
          Return home
        </Link>
      </motion.div>
    </section>
  );
}

export default NotFound;
