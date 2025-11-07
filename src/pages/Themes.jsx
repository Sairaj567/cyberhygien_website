import SectionHeading from '../components/SectionHeading.jsx';
import ThemeCard from '../components/ThemeCard.jsx';
import themes from '../data/themes.js';

function Themes() {
  return (
    <section className="section-max space-y-16">
      <SectionHeading
        eyebrow="Themes"
        title="Cyber hygiene conversations shaping the future"
        description="Delegates conduct research, debate, and draft resolutions around eight curated themes spanning protection, policy, and human-centred design."
        alignment="left"
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {themes.map((theme, index) => (
          <ThemeCard key={theme.title} theme={theme} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Themes;
