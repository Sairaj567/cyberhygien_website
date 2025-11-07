import SectionHeading from '../components/SectionHeading.jsx';

function Privacy() {
  return (
    <section className="section-max space-y-8">
      <SectionHeading
        eyebrow="Policies"
        title="Privacy Policy"
        description="Cyber Hygiene MUN 2025 respects your privacy. This summary outlines how delegate information is collected and used during the conference lifecycle."
        alignment="left"
      />
      <div className="glass-card space-y-6 p-8 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        <p>
          Registration data (name, institution, contact details, committee preferences) is collected through secure Google Forms managed jointly by C-DAC Mumbai and ACPCE. Information is used solely for delegate allocation, communication, and certification.
        </p>
        <p>
          We store personal data on encrypted drives accessible only to the academic secretariat. No information is shared with third parties without prior consent. Delegates may request data removal by writing to privacy.cyberhygiene@acpce.edu.in.
        </p>
        <p>
          During the event, photos and videos may be captured for documentation and promotional purposes. Delegates may opt out by notifying the media team at the venue.
        </p>
      </div>
    </section>
  );
}

export default Privacy;
