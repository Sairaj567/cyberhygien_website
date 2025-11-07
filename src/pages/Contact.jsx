import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';

const socials = [
  { label: 'Email', icon: Mail, value: 'cyberhygiene.mun@acpce.edu.in', href: 'mailto:cyberhygiene.mun@acpce.edu.in' },
  { label: 'Phone', icon: Phone, value: '+91 98765 43210', href: 'tel:+919876543210' },
  { label: 'WhatsApp', icon: Send, value: 'Join WhatsApp Community', href: 'https://chat.whatsapp.com/sample' }
];

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('Thanks for reaching out! Our team will revert within 48 hours.');
    event.target.reset();
  };

  return (
    <section className="section-max space-y-16">
      <SectionHeading
        eyebrow="Connect"
        title="We are here to support your Cyber Hygiene MUN journey"
        description="Reach out for registration assistance, partnership inquiries, press coverage, or academic clarifications."
        alignment="left"
      />
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.form
          onSubmit={handleSubmit}
          className="glass-card flex flex-col gap-6 p-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Delegate or coordinator name"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/40 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="name@example.com"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/40 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Share your query or collaboration idea"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/40 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100"
            />
          </div>
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-secondary/90"
          >
            Send Message
            <Send size={18} />
          </button>
          {status ? <p className="text-sm font-medium text-secondary">{status}</p> : null}
        </motion.form>
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <div className="glass-card space-y-4 p-8 text-sm text-slate-600 dark:text-slate-300">
            <p className="flex items-start gap-3">
              <MapPin className="mt-1 text-secondary" size={18} />
              A. C. Patil College of Engineering, Plot 17, Sector 4, Kharghar, Navi Mumbai, Maharashtra 410210
            </p>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="flex items-center gap-3 text-sm font-medium text-secondary transition hover:text-secondary/80"
              >
                <social.icon size={18} />
                {social.value}
              </a>
            ))}
          </div>
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <iframe
              title="A.C. Patil College of Engineering"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2335.241358612534!2d73.061959!3d19.030898!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24052e100f3%3A0xb6e3e4259b43a898!2sA.%20C.%20Patil%20College%20of%20Engineering!5e1!3m2!1sen!2sin!4v1762519583363!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
