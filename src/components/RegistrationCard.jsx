import QRCode from 'react-qr-code';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

function RegistrationCard({ option, index }) {
  return (
    <motion.div
      className="glass-card flex flex-col gap-6 p-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">{option.eyebrow}</p>
        <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{option.title}</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{option.description}</p>
      </div>
      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
        {option.highlights.map((line) => (
          <li key={line} className="leading-relaxed">{line}</li>
        ))}
      </ul>
      <div className="flex flex-col-reverse items-center justify-between gap-6 sm:flex-row">
        <a
          href={option.formLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-secondary/90"
        >
          Proceed to Form
          <ArrowUpRight size={18} />
        </a>
        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-inner dark:border-slate-700 dark:bg-slate-900">
          <QRCode
            value={option.formLink}
            size={140}
            bgColor="transparent"
            fgColor="#0A3D62"
            className="h-auto w-36"
          />
          <p className="mt-2 text-center text-xs font-medium text-slate-500 dark:text-slate-400">Scan to register</p>
        </div>
      </div>
    </motion.div>
  );
}

export default RegistrationCard;
