import { motion } from 'framer-motion';
import { Shield, Users, Globe2, Network, BrainCircuit, Sparkles } from 'lucide-react';

const iconCycle = [Shield, Users, Globe2, Network, BrainCircuit, Sparkles];

function ThemeCard({ theme, index }) {
  const Icon = iconCycle[index % iconCycle.length];
  return (
    <motion.div
      className="glass-card flex flex-col gap-4 p-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
    >
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-secondary/15 p-3 text-secondary">
          <Icon size={20} />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{theme.title}</h3>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-300">{theme.description}</p>
    </motion.div>
  );
}

export default ThemeCard;
