import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import { ThemeProvider } from './components/ThemeProvider.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Committees from './pages/Committees.jsx';
import Themes from './pages/Themes.jsx';
import Agenda from './pages/Agenda.jsx';
import Registration from './pages/Registration.jsx';
import Team from './pages/Team.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import Privacy from './pages/Privacy.jsx';
import Credits from './pages/Credits.jsx';

function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/themes" element={<Themes />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
