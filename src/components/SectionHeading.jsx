import { motion } from 'framer-motion';

function SectionHeading({ eyebrow, title, description, alignment = 'center' }) {
  const alignClass = alignment === 'left' ? 'items-start text-left' : 'items-center text-center';
  return (
    <motion.div
      className={`flex flex-col gap-4 ${alignClass}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary/80">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">{title}</h2>
      {description ? <p className="max-w-2xl text-base text-slate-600 dark:text-slate-300">{description}</p> : null}
    </motion.div>
  );
}

export default SectionHeading;
