import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

function TeamCard({ member, index }) {
  return (
    <motion.div
      className="glass-card flex h-full flex-col overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
    >
      <div className="relative h-60 w-full overflow-hidden bg-slate-200">
        <img
          src={member.photo}
          alt={member.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6 text-slate-700 dark:text-slate-300">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary/90">{member.category}</span>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{member.name}</h3>
        <p className="text-sm">{member.role}</p>
        {member.org && (
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{member.org}</p>
        )}
        {member.linkedin ? (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noreferrer"
            className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-secondary/80"
          >
            <Linkedin size={16} />
            Connect
          </a>
        ) : null}
      </div>
    </motion.div>
  );
}

export default TeamCard;
