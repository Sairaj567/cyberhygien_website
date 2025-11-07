import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer.jsx';

const EVENT_START = new Date('2025-12-05T09:00:00+05:30');

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-glow">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#05213d] via-primary to-[#018c90] dark:from-slate-950 dark:via-slate-950 dark:to-primary/60" />
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="mx-auto h-full max-w-5xl bg-[radial-gradient(circle_600px_at_0%_0%,rgba(255,255,255,0.2),transparent)]" />
      </div>
      <div className="section-max relative flex flex-col gap-12 py-24 lg:flex-row lg:items-center lg:gap-16 lg:py-32">
        <motion.div
          className="max-w-2xl text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)] dark:text-secondary"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#22d3ee] to-[#6366f1] dark:from-secondary dark:via-light dark:to-white">
            C-DAC Mumbai × ACPCE
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] via-[#22d3ee] to-[#6366f1] md:text-5xl lg:text-6xl dark:from-secondary dark:via-light dark:to-white" style={{ lineHeight: 1.1 }}>
            Cyber Hygiene Model United Nations 2025
          </h1>

          <p className="mt-6 text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#22d3ee] to-[#7c3aed] md:text-xl dark:from-slate-200 dark:via-light dark:to-white">
            Promoting safe digital behaviour through global diplomacy. Experience two transformative days of collaborative problem-solving on cybersecurity and digital ethics.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/registration"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-xl transition hover:bg-slate-100"
            >
              Register Now
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-full border border-white/60 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20 dark:border-secondary/50 dark:bg-secondary/15 dark:text-secondary dark:hover:bg-secondary/25"
            >
              Know More
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="glass-card w-full max-w-md px-8 py-10 text-slate-900 shadow-2xl dark:text-slate-100"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-secondary">Countdown to Conference</h2>
          <CountdownTimer eventDate={EVENT_START} />
          <div className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <p>
              Venue: A. C. Patil College of Engineering, Navi Mumbai
            </p>
            <p>
              Hosted by ACPCE in collaboration with the Centre for Development of Advanced Computing (C-DAC) Mumbai.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
