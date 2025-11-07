import SectionHeading from '../components/SectionHeading.jsx';
import { motion } from 'framer-motion';
import { Download, FileText, Medal } from 'lucide-react';

const resources = [
  {
    id: 'debate-flow',
    title: 'Debate Flow & Selection Criteria',
    description:
      'Detailed overview of the Cyber Hygiene MUN debate procedures, assessment rubrics for school delegations, and guidance for faculty advisors running qualifiers.',
    bulletPoints: [
      'Step-by-step debate timeline from roll call to moderated caucuses',
      'Scoring matrix covering content, diplomacy, crisis handling, and leadership',
      'Checklist for schools hosting intra-campus selections'
    ],
    ctaLabel: 'Download Debate Handbook',
    href: 'https://drive.google.com/file/d/1uwpCi4nXFzxGypOczF40zFZW33zw-Wn4/view?usp=drive_link',
    icon: FileText
  },
  {
    id: 'awards-brief',
    title: 'Awards & Recognition Framework',
    description:
      'Breakdown of awards, commendations, and special mentions presented at Cyber Hygiene MUN 2025, along with expectations for each category.',
    bulletPoints: [
      'Best Delegate, High Commendation, Special Mention criteria',
      'Press Corps recognitions and special citations',
      'Tie-breaker methodology and jury deliberation process'
    ],
    ctaLabel: 'View Awards Overview',
    href: 'https://drive.google.com/file/d/1iJputW5mRm7-5-612zrqEB1J6tjxLyr6/view?usp=drive_link',
    icon: Medal
  },
  {
    id: 'position-paper',
    title: 'Position Paper Template',
    description:
      'Official template to help delegates structure research, national policy positions, stakeholder analysis, and proposed solutions before committee sessions.',
    bulletPoints: [
      'Editable sections for background, problem statement, actionable proposals',
      'Formatting guidance aligned with Cyber Hygiene MUN standards',
      'Submission checklist to streamline mentor reviews'
    ],
    ctaLabel: 'Download Template',
    href: 'https://drive.google.com/file/d/1QqRg_7G6D6UPVcWLGBuTZBNEEE7934bV/view?usp=drive_link',
    icon: Download
  }
];

function Resources() {
  return (
    <section className="section-max space-y-16">
      <SectionHeading
        eyebrow="Delegate Toolkit"
        title="Essential resources for Cyber Hygiene MUN 2025"
        description="Prepare your delegation with handbooks, evaluation rubrics, and editable templates curated by the academic team."
        alignment="left"
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {resources.map((resource, index) => {
          const Icon = resource.icon;
          return (
            <motion.article
              key={resource.id}
              className="glass-card flex h-full flex-col gap-6 p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-secondary/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
                <Icon size={16} />
                Resource
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{resource.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{resource.description}</p>
              </div>
              <ul className="flex-1 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {resource.bulletPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <a
                href={resource.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-secondary/90"
              >
                {resource.ctaLabel}
                <Download size={18} />
              </a>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default Resources;
