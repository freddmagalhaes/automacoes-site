import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'EduGestão Pro', path: '/educacional' },
    { name: 'SmartMaint', path: '/industrial' },
    { name: 'Preços', path: '/precos' },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass' : 'py-6 bg-transparent'}`}>
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 flex-shrink-0">
            <img src="/assets/logo.png" alt="AutomaçõesTec" className="w-full h-full object-contain" />
          </div>
          <span className="text-xl font-extrabold tracking-tight hidden lg:block">
            Automações<span className="text-grad">Tec</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-semibold transition-colors hover:text-grad ${
                location.pathname === link.path ? 'text-grad' : 'text-secondary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contato"
            className="grad-primary px-6 py-2.5 rounded-full text-sm font-bold shadow-lg hover:shadow-primary/20 transition-all hover:scale-105 text-white"
          >
            Agendar Demonstração
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass border-t border-accent md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between text-lg font-semibold border-b border-accent pb-2"
                >
                  {link.name}
                  <ChevronRight size={18} className="text-brand-primary" />
                </Link>
              ))}
              <Link
                to="/contato"
                onClick={() => setIsOpen(false)}
                className="grad-primary w-full py-4 rounded-2xl text-center font-bold text-lg shadow-xl text-white"
              >
                Solicitar Demonstração
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
