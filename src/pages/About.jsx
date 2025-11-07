import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.jsx';

const pillars = [
  {
    title: 'Collaborative Diplomacy',
    text: 'Cyber Hygiene MUN brings together students, educators, and industry experts to simulate multilateral negotiations that address cyber threats and digital inclusion.'
  },
  {
    title: 'Actionable Awareness',
    text: 'Delegates design campaigns, policies, and solutions tailored to diverse communities — from school learners to senior citizens.'
  },
  {
    title: 'Innovation Backed by Experts',
    text: 'Mentored by C-DAC cybersecurity professionals and ACPCE faculty, participants learn to balance innovation, ethics, and resilience in the digital age.'
  }
];

const reasons = [
  'Cyber incidents disproportionately impact vulnerable populations without foundational cyber hygiene knowledge.',
  'Human-centred awareness narrows the gap between sophisticated cyber policies and everyday behaviour.',
  'Collaborative diplomacy equips youth to advocate for inclusive, rights-respecting digital ecosystems.'
];

function About() {
  return (
    <div className="space-y-24">
      <section className="section-max">
        <SectionHeading
          eyebrow="About the summit"
          title="Cyber Hygiene Model United Nations 2025"
          description="An academic simulation crafted by C-DAC Mumbai and ACPCE to drive policy-informed, human-centric cyber hygiene advocacy across colleges, schools, and communities."
          alignment="left"
        />
        <div className="mt-12 grid gap-8 text-sm leading-7 text-slate-600 dark:text-slate-300 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              className="glass-card p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
              <p className="mt-4">{pillar.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50/70 py-24 dark:bg-slate-900/40">
        <div className="section-max space-y-12">
          <SectionHeading
            eyebrow="Why it matters"
            title="Why Cyber Hygiene Awareness Matters"
            description="Cyber risks evolve faster than policy frameworks. Cyber Hygiene MUN equips delegates to champion practical safeguards for every digital citizen."
            alignment="center"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <motion.div
                key={reason}
                className="glass-card p-6 text-sm text-slate-600 dark:text-slate-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                {reason}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-max">
        <div className="glass-card p-10 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Our Mission</h3>
          <p className="mt-6">
            Cyber Hygiene MUN 2025 aims to build a youth-led movement that champions secure, inclusive, and ethical digital practices. Delegates collaborate to draft resolutions, launch awareness campaigns, and co-create digital innovations aligned with Sustainable Development Goals and India’s National Cyber Security Policy.
          </p>
          <p className="mt-4">
            The conference nurtures empathetic leadership, cross-disciplinary collaboration, and evidence-based policymaking — preparing delegates to influence cyber narratives in educational institutions, startups, NGOs, and public sector organisations.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
