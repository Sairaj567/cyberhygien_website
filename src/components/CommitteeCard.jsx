import { motion } from 'framer-motion';
import { Gavel, Globe2, ShieldCheck } from 'lucide-react';

const icons = {
  UNGA: Globe2,
  UNHCR: ShieldCheck,
  'International Press': Gavel
};

function CommitteeCard({ committee }) {
  const Icon = icons[committee.abbr] || Globe2;
  return (
    <motion.article
      className="glass-card flex h-full flex-col gap-6 p-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
        <Icon size={16} />
        {committee.abbr}
      </div>
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{committee.name}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">{committee.description}</p>
      </div>
      <div className="rounded-2xl border border-secondary/20 bg-secondary/10 p-4 text-sm text-slate-700 dark:border-secondary/30 dark:bg-secondary/10 dark:text-slate-200">
        <p className="font-semibold text-secondary dark:text-secondary/90">Theme</p>
        <p className="mt-1">{committee.theme}</p>
      </div>
      <div className="mt-auto text-sm text-slate-600 dark:text-slate-300">
        <p className="font-semibold text-slate-800 dark:text-white">Secretariat</p>
        <ul className="mt-2 space-y-1">
          {committee.roles.map((role) => (
            <li key={role.title}>
              <span className="font-medium text-secondary">{role.title}:</span> {role.name}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export default CommitteeCard;
