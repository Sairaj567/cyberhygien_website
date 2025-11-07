import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.jsx';
import AgendaDay from '../components/AgendaDay.jsx';
import agenda from '../data/agenda.js';

function Agenda() {
  return (
    <section className="section-max space-y-16">
      <SectionHeading
        eyebrow="Agenda"
        title="Two days of collaborative diplomacy and cyber resilience"
        description="The simulation is structured to immerse delegates in research, negotiation, crisis response, and policy drafting experiences."
        alignment="left"
      />
      <motion.div
        className="grid gap-6 lg:grid-cols-2"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {agenda.map((day, index) => (
          <AgendaDay key={day.day} agenda={day} index={index} />
        ))}
      </motion.div>
      <div className="glass-card p-8 text-sm text-slate-600 dark:text-slate-300">
        <p>
          Detailed timings and committee-specific breakout rooms will be shared with registered delegates via email. Download the official briefing document for preparation guidelines, position paper templates, and crisis simulation protocols.
        </p>
        <a
          href="https://drive.google.com"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex text-sm font-semibold text-secondary transition hover:text-secondary/80"
        >
          View full agenda PDF →
        </a>
      </div>
    </section>
  );
}

export default Agenda;
