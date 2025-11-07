import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const intervalMs = 1000;

function getTimeRemaining(eventDate) {
  const total = eventDate.getTime() - Date.now();
  const clamped = Math.max(total, 0);
  const seconds = Math.floor((clamped / 1000) % 60);
  const minutes = Math.floor((clamped / 1000 / 60) % 60);
  const hours = Math.floor((clamped / (1000 * 60 * 60)) % 24);
  const days = Math.floor(clamped / (1000 * 60 * 60 * 24));
  return { total: clamped, days, hours, minutes, seconds };
}

function CountdownTimer({ eventDate }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeRemaining(eventDate));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeRemaining(eventDate));
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [eventDate]);

  const blocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {blocks.map((block) => (
        <motion.div
          key={block.label}
          className="rounded-2xl border border-white/30 bg-white/40 p-4 text-center shadow-lg backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-3xl font-bold text-primary dark:text-secondary">
            {String(block.value).padStart(2, '0')}
          </div>
          <p className="mt-1 text-xs font-medium uppercase tracking-widest text-slate-600/90 dark:text-slate-300/80">
            {block.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export default CountdownTimer;
