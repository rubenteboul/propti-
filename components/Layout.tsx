import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleCallRequest = () => {
    navigate('/contact');
    closeMenu();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-text font-sans">
      {/* Header */}
      <header className="fixed w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
            <div className="w-8 h-8 md:w-9 md:h-9 bg-primary rounded flex items-center justify-center shadow-sm relative overflow-hidden transition-transform group-hover:scale-105">
              <span className="text-white font-bold text-lg md:text-xl relative z-10 -mt-0.5">P</span>
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-accent"></div>
            </div>
            <span className="text-xl md:text-2xl font-bold text-primary tracking-tight uppercase">
              PROPTIMISATION<span className="text-accent">.COM</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium hover:text-secondary transition-colors">Accueil</Link>
            <Link to="/offres" className="text-sm font-medium hover:text-secondary transition-colors">Offres</Link>
            <Link to="/recrutement" className="text-sm font-medium hover:text-secondary transition-colors">Recrutement</Link>
            <Link to="/a-propos" className="text-sm font-medium hover:text-secondary transition-colors">À propos</Link>
            <Link to="/contact" className="text-sm font-medium hover:text-secondary transition-colors">Contact</Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block group relative">
            <button 
              onClick={handleCallRequest}
              className="bg-accent hover:bg-orange-600 text-white font-semibold py-2.5 px-5 rounded-lg transition-colors shadow-sm text-sm"
            >
              Être rappelé
            </button>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Gratuit et sans engagement
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-primary p-2" onClick={toggleMenu} aria-label="Menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-4 flex flex-col gap-4">
            <Link to="/" className="text-base font-medium py-2 border-b border-gray-50" onClick={closeMenu}>Accueil</Link>
            <Link to="/offres" className="text-base font-medium py-2 border-b border-gray-50" onClick={closeMenu}>Offres</Link>
            <Link to="/recrutement" className="text-base font-medium py-2 border-b border-gray-50" onClick={closeMenu}>Recrutement</Link>
            <Link to="/a-propos" className="text-base font-medium py-2 border-b border-gray-50" onClick={closeMenu}>À propos</Link>
            <Link to="/contact" className="text-base font-medium py-2" onClick={closeMenu}>Contact</Link>
            <button 
              onClick={handleCallRequest}
              className="w-full bg-accent text-white font-semibold py-3 rounded-lg mt-2 shadow-sm text-center"
            >
              Être rappelé
            </button>
            <p className="text-center text-xs text-slate-500">Gratuit et sans engagement</p>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-16 md:pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-slate-300 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center relative overflow-hidden">
                  <span className="text-white font-bold text-xs relative z-10 -mt-0.5">P</span>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-accent"></div>
                </div>
                <h3 className="text-xl font-bold text-white">Proptimisation</h3>
              </div>
              <p className="text-base leading-relaxed mb-6">
                Optimisez votre entreprise, simplement.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
              <ul className="space-y-3">
                <li><Link to="/offres" className="hover:text-white transition-colors">Nos offres</Link></li>
                <li><Link to="/recrutement" className="hover:text-white transition-colors">Rejoindre l'équipe</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Nous contacter</Link></li>
                <li><Link to="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-accent" />
                  <a href="mailto:contact@proptimisation.com" className="hover:text-white transition-colors">contact@proptimisation.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-accent" />
                  <a href="tel:+33685019697" className="hover:text-white transition-colors">06 85 01 96 97</a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={18} className="text-accent" />
                  <span>Paris, France</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Proptimisation. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;