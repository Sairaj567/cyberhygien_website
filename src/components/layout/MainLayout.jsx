import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import FloatingRegisterButton from './FloatingRegisterButton.jsx';

function MainLayout() {
  return (
    <div className="min-h-screen bg-light text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <main className="pt-24 pb-16">
        <Outlet />
      </main>
      <Footer />
      <FloatingRegisterButton />
    </div>
  );
}

export default MainLayout;
