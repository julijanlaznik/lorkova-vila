import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../../constants';
import { Link } from 'react-router-dom';

const ContactSection: React.FC = () => {
  return (
    <section className="bg-stone-900 py-24 border-b border-stone-800 relative overflow-hidden">
      {/* Background Detail */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-stone-800/20 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-16">
          
          {/* Left: Heading & Intro */}
          <div className="lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-500 text-xs uppercase tracking-[0.2em] font-medium block mb-6"
            >
              Personal Concierge
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-6xl text-stone-100 leading-tight mb-8"
            >
              Máte specifické přání? <br />
              <span className="text-stone-500">Jsme tu pro vás.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-stone-400 font-light text-lg max-w-md leading-relaxed mb-10"
            >
              Ať už plánujete výročí, firemní retreat nebo potřebujete zajistit dopravu. Zavolejte nám nebo napište, zbytek zařídíme my.
            </motion.p>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="flex flex-col sm:flex-row gap-6"
            >
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-4 text-stone-100 hover:text-gold-400 transition-colors group">
                <div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center group-hover:border-gold-400 transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-stone-500 mb-1">Zavolejte nám</span>
                  <span className="font-display text-xl">{CONTACT_INFO.phone}</span>
                </div>
              </a>

              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 text-stone-100 hover:text-gold-400 transition-colors group">
                <div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center group-hover:border-gold-400 transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-stone-500 mb-1">Napište nám</span>
                  <span className="font-display text-xl">{CONTACT_INFO.email}</span>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right: Newsletter / CTA Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:w-5/12 w-full bg-stone-800/50 p-8 md:p-12 rounded-3xl border border-stone-700/50"
          >
            <h3 className="font-display text-2xl text-stone-100 mb-2">Zůstaňte v obraze</h3>
            <p className="text-stone-400 text-sm mb-8 font-light">
              Občas posíláme novinky o sezónních balíčcích a eventech. Žádný spam, jen Beskydy.
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Váš email" 
                className="w-full bg-stone-900/80 border border-stone-700 rounded-lg px-6 py-4 text-stone-100 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all placeholder:text-stone-600"
              />
              <Button variant="secondary" fullWidth className="justify-between group">
                Odebírat novinky <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-stone-700 flex items-center justify-between">
               <span className="text-stone-500 text-xs uppercase tracking-widest">Sledujte nás</span>
               <div className="flex gap-4 text-stone-400">
                 <Link to="#" className="hover:text-white transition-colors">Instagram</Link>
                 <Link to="#" className="hover:text-white transition-colors">Facebook</Link>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;