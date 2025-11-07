import SectionHeading from '../components/SectionHeading.jsx';

function Credits() {
  return (
    <section className="section-max space-y-8">
      <SectionHeading
        eyebrow="Acknowledgements"
        title="Credits"
        description="Cyber Hygiene MUN 2025 is a collaborative effort supported by dedicated faculty, student volunteers, and industry mentors."
        alignment="left"
      />
      <div className="glass-card space-y-4 p-8 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        <p>
          Website design & build: ACPCE Web Development Collective, guided by the C-DAC Mumbai outreach team.
        </p>
        <p>
          Visual references: Photography courtesy of previous Cyber Hygiene MUN editions and royalty-free imagery from Unsplash (used for placeholders).
        </p>
        <p>
          Icons: Lucide React icon set. Animations powered by Framer Motion. Built with Vite, React, and Tailwind CSS.
        </p>
      </div>
    </section>
  );
}

export default Credits;
