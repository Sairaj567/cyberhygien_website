import { Link, useLocation } from 'react-router-dom';
import { PenSquare } from 'lucide-react';

function FloatingRegisterButton() {
  const { pathname } = useLocation();
  const hiddenOnRegistration = pathname === '/registration';

  if (hiddenOnRegistration) {
    return null;
  }

  return (
    <Link
      to="/registration"
      className="fixed bottom-6 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-2xl transition hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 dark:focus:ring-offset-slate-950 sm:bottom-8 sm:right-8"
    >
      <PenSquare size={18} />
      Register Now
    </Link>
  );
}

export default FloatingRegisterButton;
