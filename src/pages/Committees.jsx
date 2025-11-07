import SectionHeading from '../components/SectionHeading.jsx';
import CommitteeCard from '../components/CommitteeCard.jsx';
import committees from '../data/committees.js';

function Committees() {
  return (
    <section className="section-max space-y-16">
      <SectionHeading
        eyebrow="Committees"
        title="Strategic councils leading the cyber hygiene discourse"
        description="Each committee is curated to spotlight distinct communities vulnerable to cyber threats while rehearsing multi-stakeholder diplomacy."
        alignment="left"
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {committees.map((committee) => (
          <CommitteeCard key={committee.abbr} committee={committee} />
        ))}
      </div>
    </section>
  );
}

export default Committees;
