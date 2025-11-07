import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Users2, Award } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import awards from '../data/awards.js';
import themes from '../data/themes.js';

const highlights = [
  {
    title: 'Immersive Diplomacy',
    description: 'Lively committees guided by seasoned chairs from C-DAC Mumbai and ACPCE to simulate cyber policy negotiations.',
    icon: ShieldCheck
  },
  {
    title: 'Experiential Learning',
    description: 'Crisis simulations, skill labs, and press conferences to build confidence, leadership, and situational awareness.',
    icon: Users2
  },
  {
    title: 'Prestige & Recognition',
    description: 'Exclusive awards, certificates, and mentoring from cybersecurity practitioners and academic leaders.',
    icon: Award
  }
];

const spotlightAwards = awards.filter((award) => award.spotlight).slice(0, 3);

function Home() {
  return (
    <div className="space-y-24">
      <Hero />

      <section className="section-max">
        <SectionHeading
          eyebrow="Why Join"
          title="A summit at the intersection of cyber resilience and diplomacy"
          description="Cyber Hygiene MUN empowers young delegates to craft human-centric policies that protect digital citizens across age groups and geographies."
          alignment="left"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              className="glass-card flex flex-col gap-4 p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
                <highlight.icon size={22} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{highlight.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary/10 via-white to-primary/5 dark:from-secondary/20 dark:via-slate-950 dark:to-primary/15"
          aria-hidden="true"
        />
        <div className="section-max space-y-12">
          <SectionHeading
            eyebrow="Awards"
            title="Celebrating diplomacy, research, and storytelling"
            description="A 25-category recognition framework honours persuasive delegates, insightful jurors, and schools championing cyber hygiene beyond committee halls."
            alignment="left"
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {spotlightAwards.map((awardItem, index) => {
              const Icon = awardItem.icon;
              return (
                <motion.article
                  key={awardItem.title}
                  className="glass-card flex h-full flex-col gap-5 p-8"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
                    <Icon size={22} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{awardItem.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{awardItem.description}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {awardItem.criteria.map((criterion) => (
                      <li key={criterion} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden="true" />
                        <span>{criterion}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
          <div className="flex justify-end">
            <Link
              to="/awards"
              className="inline-flex items-center text-sm font-semibold text-secondary transition hover:text-secondary/80"
            >
              Explore detailed awards →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50/60 py-24 dark:bg-slate-900/30">
        <div className="section-max flex flex-col gap-16 lg:flex-row lg:items-center">
          <div className="lg:w-2/5">
            <SectionHeading
              eyebrow="Focus Areas"
              title="Cyber hygiene themes that matter right now"
              description="The conference spotlights the most pressing cyber hygiene debates shaping education, governance, business, and civil society."
              alignment="left"
            />
            <Link
              to="/themes"
              className="mt-8 inline-flex items-center text-sm font-semibold text-secondary transition hover:text-secondary/80"
            >
              Explore all themes →
            </Link>
          </div>
          <div className="grid flex-1 gap-6 sm:grid-cols-2">
            {themes.slice(0, 4).map((theme, index) => (
              <motion.div
                key={theme.title}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <p className="text-sm font-semibold uppercase tracking-widest text-secondary/80">Theme {index + 1}</p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{theme.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{theme.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-max">
        <SectionHeading
          eyebrow="Partners"
          title="Powered by C-DAC Mumbai and ACPCE"
          description="Cyber Hygiene MUN is a strategic outreach initiative by the Centre for Development of Advanced Computing (C-DAC) Mumbai and A. C. Patil College of Engineering. Together, we build secure digital futures through youth leadership."
          alignment="center"
        />
        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card p-8 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Centre for Development of Advanced Computing (C-DAC) Mumbai</h3>
            <p className="mt-4">
              C-DAC drives national cyber resilience through research, awareness, and capacity building. Cyber Hygiene MUN extends its mission by mobilising students as ambassadors for safe digital practices.
            </p>
          </div>
          <div className="glass-card p-8 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">A. C. Patil College of Engineering (ACPCE)</h3>
            <p className="mt-4">
              ACPCE fosters technology leadership and social responsibility. Hosting Cyber Hygiene MUN aligns with its vision to empower engineers as ethical digital citizens and policy influencers.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
