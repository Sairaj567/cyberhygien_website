import SectionHeading from '../components/SectionHeading.jsx';
import TeamCard from '../components/TeamCard.jsx';
import team from '../data/team.js';

const grouped = team.reduce((acc, member) => {
  const group = acc.find((item) => item.category === member.category);
  if (group) {
    group.members.push(member);
  } else {
    acc.push({ category: member.category, members: [member] });
  }
  return acc;
}, []);

function Team() {
  return (
    <div className="section-max space-y-16">
      <SectionHeading
        eyebrow="Organising Committee"
        title="Mentors and leaders behind Cyber Hygiene MUN"
        description="A collaborative taskforce from C-DAC Mumbai and ACPCE guiding academic strategy, delegate experience, and jury deliberations."
        alignment="left"
      />
      <div className="space-y-12">
        {grouped.map((group) => (
          <div key={group.category} className="space-y-6">
            <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-secondary/80">{group.category}</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.members.map((member, index) => (
                <TeamCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
