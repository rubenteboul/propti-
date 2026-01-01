import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Offers from './pages/Offers';
import Recruitment from './pages/Recruitment';
import About from './pages/About';
import Contact from './pages/Contact';
import Legal from './pages/Legal';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offres" element={<Offers />} />
          <Route path="/recrutement" element={<Recruitment />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<Legal />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;