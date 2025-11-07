import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

function AgendaDay({ agenda, index }) {
  return (
    <motion.div
      className="glass-card flex flex-col gap-6 p-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">{agenda.day}</p>
        <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{agenda.title}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-300">{agenda.date}</p>
      </div>
      <ul className="space-y-4">
        {agenda.sessions.map((session) => (
          <li key={session.time} className="flex gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/15 text-secondary">
              <Clock size={18} />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800 dark:text-white">{session.time}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">{session.activity}</p>
              {session.details ? (
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{session.details}</p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default AgendaDay;
