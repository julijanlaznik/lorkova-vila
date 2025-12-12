
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Determine default text color based on the current page background
  const getNavTheme = () => {
    const path = location.pathname;
    // Dark routes requiring light text
    if (path === '/' || path === '/wellness' || path === '/packages' || path.startsWith('/rooms/')) {
      return 'light';
    }
    return 'dark';
  };

  const navTheme = getNavTheme();
  
  // Logic for the Main Navbar (Top)
  let textColorClass = 'text-stone-100'; 
  let logoColor = 'text-stone-100';
  let hoverLineColor = 'bg-white';

  if (navTheme === 'dark') {
      textColorClass = 'text-stone-900';
      logoColor = 'text-stone-900';
      hoverLineColor = 'bg-stone-900';
  } else {
      textColorClass = 'text-stone-100'; 
      logoColor = 'text-stone-100';
      hoverLineColor = 'bg-white';
  }

  const navLinks = [
    { name: 'Pokoje', path: '/rooms' },
    { name: 'Wellness', path: '/wellness' },
    // Gastronomie removed as per request
    { name: 'Balíčky', path: '/packages' },
    { name: 'Galerie', path: '/gallery' },
    { name: 'Kontakt', path: '/contact' },
  ];

  return (
    <>
      {/* 
        MAIN NAVBAR 
        Absolute positioning means it scrolls away with the page.
        Mobile/Tablet: w-full px-3 (edges)
        Desktop: px-24 (luxury spacing)
      */}
      <nav 
        className={`absolute top-0 left-0 right-0 z-50 py-4 md:py-10 transition-opacity duration-500 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <div className="w-full px-3 md:px-8 lg:px-24"> 
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="relative z-50 group block">
              <div className={`font-display text-lg md:text-2xl tracking-[0.2em] transition-colors duration-500 ${logoColor} group-hover:text-gold-500`}>
                LORKOVA<span className="font-semibold">VILA</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-12 xl:space-x-16">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`text-[11px] uppercase tracking-widest-xl font-medium transition-all duration-300 hover:text-gold-500 relative group ${textColorClass}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 left-0 w-0 h-px ${hoverLineColor} transition-all duration-500 group-hover:w-full group-hover:bg-gold-500`}></span>
                </Link>
              ))}
            </div>

            {/* Desktop Right */}
            <div className="hidden lg:flex items-center">
               <Link to="/booking" className={`group flex items-center gap-2 text-xs uppercase tracking-widest font-semibold transition-colors ${textColorClass} hover:text-gold-500`}>
                 <span>Rezervace</span>
                 <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
               </Link>
            </div>

            {/* Mobile Toggle */}
            <button 
              className={`lg:hidden relative z-50 p-2 -mr-2 transition-colors ${textColorClass}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* 
        FLOATING MENU BUTTON 
        Appears when scrolled down.
      */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isScrolled ? 0 : -100, opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 right-4 z-[60]"
      >
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="bg-stone-900/90 backdrop-blur text-white px-5 py-3 rounded-full shadow-lg hover:bg-gold-500 hover:text-stone-900 transition-all duration-300 flex items-center gap-3 group"
        >
          <span className="text-[10px] uppercase tracking-widest font-bold">Menu</span>
          <Menu size={16} className="group-hover:rotate-180 transition-transform duration-500"/>
        </button>
      </motion.div>

      {/* Full Screen Mobile/Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-stone-950 z-[70] flex flex-col justify-center px-6 md:px-24"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-stone-400 hover:text-white transition-colors p-2"
            >
              <X size={32} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full items-center">
              
              {/* Left: Navigation */}
              <div className="flex flex-col space-y-6">
                <span className="text-gold-500 text-xs uppercase tracking-widest mb-4">Navigace</span>
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                  >
                    <Link 
                      to={link.path}
                      className="font-display text-4xl md:text-7xl text-stone-300 hover:text-white hover:ml-4 transition-all duration-300 block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Right: Info (Desktop Only) */}
              <div className="hidden md:block text-stone-400 space-y-8 border-l border-stone-800 pl-12">
                 <div>
                   <h3 className="text-white font-display text-2xl mb-2">Rezervace</h3>
                   <p className="text-lg hover:text-gold-500 transition-colors cursor-pointer">+420 558 123 456</p>
                   <p className="text-lg hover:text-gold-500 transition-colors cursor-pointer">recepce@lorkovavila.cz</p>
                 </div>
                 <div>
                   <h3 className="text-white font-display text-2xl mb-2">Adresa</h3>
                   <p>Čeladná 123<br/>739 12 Beskydy<br/>Česká republika</p>
                 </div>
                 <Link 
                    to="/booking"
                    onClick={() => setIsMobileMenuOpen(false)} 
                    className="inline-block mt-8 text-gold-500 text-sm uppercase tracking-widest border-b border-gold-500 pb-1 hover:text-white hover:border-white transition-all"
                  >
                    Rezervovat pobyt
                 </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
