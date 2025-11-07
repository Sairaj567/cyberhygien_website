import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import cdacLogo from '../../assets/cdac-logo.png';
import acpceLogo from '../../assets/acpce-logo.png';

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/cdacmumbai', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/cdacmumbai', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/c-dac', label: 'LinkedIn' }
];

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
        <div>
          <div className="flex items-center gap-4">
            <img src={cdacLogo} alt="C-DAC Mumbai" className="h-12 w-auto" />
            <img src={acpceLogo} alt="ACPCE" className="h-12 w-auto" />
          </div>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
            Cyber Hygiene Model United Nations 2025 brings together young diplomats to champion safe, inclusive, and resilient digital ecosystems.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-secondary">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li><Link to="/committees" className="transition hover:text-secondary">Committees</Link></li>
            <li><Link to="/themes" className="transition hover:text-secondary">Themes</Link></li>
            <li><Link to="/agenda" className="transition hover:text-secondary">Agenda</Link></li>
            <li><Link to="/registration" className="transition hover:text-secondary">Registration</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-secondary">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-1 text-secondary" />
              A. C. Patil College of Engineering, Plot 17, Sector 4, Kharghar, Navi Mumbai, Maharashtra 410210
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-secondary" />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-secondary" />
              cyberhygiene.mun@acpce.edu.in
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-secondary">Join the Community</h4>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
            Stay connected with fellow delegates and mentors. Join the official WhatsApp group for updates.
          </p>
          <a
            href="https://chat.whatsapp.com/sample"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-secondary/90"
            target="_blank"
            rel="noreferrer"
          >
            Join WhatsApp
          </a>
          <div className="mt-6 flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-secondary hover:text-secondary dark:border-slate-700 dark:text-slate-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-white/70 py-4 text-center text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-900/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-xs sm:flex-row">
          <p>© 2025 Cyber Hygiene MUN. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="transition hover:text-secondary">Privacy Policy</Link>
            <Link to="/credits" className="transition hover:text-secondary">Credits</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
