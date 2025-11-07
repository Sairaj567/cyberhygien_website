import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.jsx';
import awards from '../data/awards.js';

const groups = [
  {
    id: 'delegates',
    title: 'Delegate & Press Corps Distinctions',
    description:
      'Recognising delegates and press reporters who demonstrate rigorous research, collaborative leadership, and cyber hygiene advocacy in committee rooms and the newsroom.'
  },
  {
    id: 'jury',
    title: 'Jury Excellence Felicitations',
    description:
      'Honouring the judges whose expertise, mentorship, and inclusive evaluation shaped the Cyber Hygiene MUN learning journey for every participant.'
  },
  {
    id: 'host',
    title: 'Host School Recognitions',
    description:
      'Appreciating the initiative, leadership, and hospitality of host institutions that powered the Cyber Hygiene MUN 2025 experience.'
  },
  {
    id: 'participating',
    title: 'Participating School Accolades',
    description:
      'Celebrating delegations that amplified cyber hygiene awareness, teamwork, and impact beyond their committee mandates.'
  },
  {
    id: 'mentors',
    title: 'Educator & Mentor Honors',
    description:
      'Thanking the teachers and mentors who championed digital citizenship, nurtured confidence, and guided students towards responsible tech leadership.'
  }
];

function Awards() {
  return (
    <section className="section-max space-y-20">
      <div className="space-y-8">
        <SectionHeading
          eyebrow="Awards"
          title="Honouring excellence in diplomacy, storytelling, and delegation culture"
          description="Cyber Hygiene MUN 2025 features 25 recognition categories celebrating delegates, press reporters, jurors, educators, and schools that translate cyber policy commitments into action. Each award is underpinned by transparent evaluation rubrics shared ahead of the conference."
          alignment="left"
        />
        <p className="max-w-3xl text-sm text-slate-600 dark:text-slate-300">
          Detailed scoring matrices, sample score sheets, and jury guidelines are available in the{' '}
          <Link to="/resources" className="font-semibold text-secondary transition hover:text-secondary/80">
            delegate toolkit
          </Link>
          .
        </p>
      </div>

      <div className="space-y-16">
        {groups.map((group, groupIndex) => {
          const groupItems = awards.filter((award) => award.group === group.id);
          return (
            <div key={group.id} className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{group.title}</h2>
                <p className="max-w-3xl text-sm text-slate-600 dark:text-slate-300">{group.description}</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {groupItems.map((award, index) => {
                  const Icon = award.icon;
                  return (
                    <motion.article
                      key={award.id}
                      className="glass-card flex h-full flex-col gap-5 p-8"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: groupIndex * 0.1 + index * 0.05, duration: 0.6 }}
                    >
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
                        <Icon size={22} />
                      </div>
                      <div className="space-y-2">
                        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary/70">{award.audience}</div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{award.title}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{award.description}</p>
                      </div>
                      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                        {award.criteria.map((criterion) => (
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
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Awards;
