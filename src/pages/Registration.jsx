import SectionHeading from '../components/SectionHeading.jsx';
import RegistrationCard from '../components/RegistrationCard.jsx';

const registrationOptions = [
  {
    eyebrow: 'Individual Delegates',
    title: 'Register as Participant',
    description: 'Choose your preferred committee, submit a statement of purpose, and receive curated prep resources from the academic team.',
    highlights: [
      'Early-bird discounts for the first 50 delegates',
      'Individual mentorship with committee chairs',
      'Eligibility for Best Delegate, High Commendation, Special Mention'
    ],
    formLink: 'https://cforms.in/formview/CHMUN2025_PARTREG_FRM_002',
    embedSrc: 'https://cforms.in/formview/CHMUN2025_PARTREG_FRM_002'
  }
];

function Registration() {
  return (
    <div className="space-y-16 section-max">
      <SectionHeading
        eyebrow="Registration"
        title="Secure your seat at Cyber Hygiene MUN 2025"
        description="Complete the participant registration form to confirm your interest. You will receive confirmation and payment instructions within 3 working days."
        alignment="left"
      />
      <div className="grid gap-6">
        {registrationOptions.map((option, index) => (
          <RegistrationCard key={option.title} option={option} index={index} />
        ))}
      </div>
      <div className="grid gap-6">
        {registrationOptions.map((option) => (
          <div key={option.title} className="glass-card space-y-4 p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{option.title} – Google Form Preview</h3>
            <iframe
              title={`${option.title} Registration Form`}
              src={option.embedSrc}
              className="h-96 w-full rounded-2xl border-0 shadow-inner"
              loading="lazy"
            />
            <p className="text-xs text-slate-500 dark:text-slate-400">
              The embedded registration form is powered by CForms. Replace the link once the official form is live, if required.
            </p>
          </div>
        ))}
      </div>
      <div className="glass-card grid gap-10 p-8 md:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Need a customised registration process?</h3>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
            Institutions hosting intra-MUN qualifiers or NGOs nominating delegates can request bespoke registration support, invoice-based payments, and dedicated pre-conference workshops.
          </p>
        </div>
        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
          <p><span className="font-semibold text-secondary">Delegate Support Desk:</span> +91 98765 12345</p>
          <p><span className="font-semibold text-secondary">Email:</span> registrations.cyberhygiene@acpce.edu.in</p>
          <p><span className="font-semibold text-secondary">Office Hours:</span> Monday to Friday, 10 AM – 6 PM</p>
        </div>
      </div>
    </div>
  );
}

export default Registration;
