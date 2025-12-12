import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-400 py-16 text-sm font-light">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-stone-900 pb-16 mb-12">
          
          {/* Logo Column */}
          <div className="md:col-span-4 space-y-6">
            <Link to="/" className="inline-block group">
              <div className="font-display text-2xl tracking-[0.2em] text-stone-200 group-hover:text-white transition-colors">
                LORKOVA<span className="font-semibold">VILA</span>
              </div>
            </Link>
            <p className="max-w-xs leading-relaxed text-stone-500">
              Místo, kde se zastavil čas, aby vám dopřál ten nejluxusnější zážitek uprostřed Beskyd.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-stone-200 text-xs uppercase tracking-widest mb-6">Menu</h4>
            <ul className="space-y-3">
              <li><Link to="/rooms" className="hover:text-gold-500 transition-colors">Pokoje</Link></li>
              <li><Link to="/wellness" className="hover:text-gold-500 transition-colors">Wellness</Link></li>
              <li><Link to="/packages" className="hover:text-gold-500 transition-colors">Balíčky</Link></li>
              <li><Link to="/gallery" className="hover:text-gold-500 transition-colors">Galerie</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-stone-200 text-xs uppercase tracking-widest mb-6">Informace</h4>
            <ul className="space-y-3">
              <li><Link to="/contact" className="hover:text-gold-500 transition-colors">Kontakt</Link></li>
              <li><Link to="/booking" className="hover:text-gold-500 transition-colors">Rezervace</Link></li>
              <li><Link to="/faq" className="hover:text-gold-500 transition-colors">Časté dotazy</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-stone-200 text-xs uppercase tracking-widest mb-6">Adresa</h4>
            <address className="not-italic space-y-1">
              <p>{CONTACT_INFO.address.split(',')[0]}</p>
              <p>{CONTACT_INFO.address.split(',')[1]}</p>
              <p className="pt-2"><a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors">{CONTACT_INFO.phone}</a></p>
            </address>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-600 uppercase tracking-wide">
          <p>&copy; {currentYear} Lorkova Vila. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-stone-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-stone-400 transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-stone-400 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;