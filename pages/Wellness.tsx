
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Droplets, Wind, Sparkles, Flame, Snowflake } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const Wellness: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Immersive Dark Mode for Wellness Page only
  return (
    <div ref={containerRef} className="bg-stone-950 text-stone-200 min-h-screen selection:bg-gold-500 selection:text-white">
      
      {/* --- HERO: Minimalist Dark Zen --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           {/* Darker, steamier image */}
           <img src="/images/wellness-hero.webp" className="w-full h-full object-cover" alt="Dark Spa" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/20 via-stone-950/50 to-stone-950"></div>
        
        <div className="relative z-10 text-center space-y-8 px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h1 className="font-display text-5xl md:text-8xl text-stone-100 tracking-tight mb-2">
              INNER SILENCE
            </h1>
            <p className="text-gold-500 text-xs md:text-sm uppercase tracking-[0.4em]">
              Wellness & Spa Sanctuary
            </p>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-stone-500">Breathe</span>
          <div className="w-px h-12 bg-gradient-to-b from-stone-500 to-transparent"></div>
        </motion.div>
      </section>

      {/* --- CONCEPT: Floating Text --- */}
      <section className="py-32 md:py-48 px-6 container mx-auto text-center max-w-4xl">
        <p className="font-display text-3xl md:text-5xl leading-tight text-stone-400">
          "V šeru a tichu <span className="text-white">nalézáme to,</span> co v hluku dne přehlížíme."
        </p>
      </section>

      {/* --- THE RITUALS (Horizontal/Vertical Flow) --- */}
      <div className="space-y-32 pb-32">
        
        {/* Element 1: Water */}
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1 }}
          >
             <div className="text-stone-500 mb-4 flex items-center gap-2 text-xs uppercase tracking-widest">
               <Droplets size={14} /> Hydroterapie
             </div>
             <h2 className="font-display text-4xl md:text-5xl text-white mb-6">Hloubka Vody</h2>
             <p className="text-stone-400 font-light text-lg leading-relaxed mb-8">
               Ponořte se do našeho infinity bazénu s vodou z místních pramenů. 
               Teplota 28°C uvolňuje svalové napětí, zatímco výhled do tmavého lesa zklidňuje mysl.
             </p>
             <ul className="space-y-2 text-stone-500 font-light">
               <li className="flex items-center gap-3"><div className="w-1 h-1 bg-gold-500 rounded-full"></div> Protiproud pro kondiční plavání</li>
               <li className="flex items-center gap-3"><div className="w-1 h-1 bg-gold-500 rounded-full"></div> Masážní trysky</li>
               <li className="flex items-center gap-3"><div className="w-1 h-1 bg-gold-500 rounded-full"></div> Venkovní vířivka pod hvězdami</li>
             </ul>
          </motion.div>
          <motion.div 
            className="aspect-square relative overflow-hidden rounded-full md:rounded-none md:rounded-t-full border border-stone-800"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <img src="/images/wellness-water.webp" className="w-full h-full object-cover opacity-80" alt="Water" />
          </motion.div>
        </div>

        {/* Element 2: Heat */}
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
          <motion.div 
             className="order-2 md:order-1 aspect-[3/4] md:aspect-square relative overflow-hidden"
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.2 }}
          >
             <img src="/images/wellness-sauna.webp" className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-1000" alt="Heat" />
          </motion.div>
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1 }}
          >
             <div className="text-stone-500 mb-4 flex items-center gap-2 text-xs uppercase tracking-widest">
               <Flame size={14} /> Saunový svět
             </div>
             <h2 className="font-display text-4xl md:text-5xl text-white mb-6">Očistný Žár</h2>
             <p className="text-stone-400 font-light text-lg leading-relaxed mb-8">
               Rituál tepla a následného ochlazení. Finská sauna provoněná cedrem, 
               bylinná biosauna pro jemnější prohřátí a parní lázeň s eukalyptem.
             </p>
             <div className="grid grid-cols-2 gap-4">
               <div className="bg-stone-900 p-4 border border-stone-800">
                 <span className="block text-2xl text-gold-500 mb-1">90°C</span>
                 <span className="text-xs text-stone-500 uppercase">Finská Sauna</span>
               </div>
               <div className="bg-stone-900 p-4 border border-stone-800">
                 <span className="block text-2xl text-gold-500 mb-1">60°C</span>
                 <span className="text-xs text-stone-500 uppercase">Bio Sauna</span>
               </div>
             </div>
          </motion.div>
        </div>

        {/* Element 3: Rest */}
        <div className="container mx-auto px-6 md:px-12 text-center">
           <div className="max-w-2xl mx-auto mb-16">
             <div className="flex justify-center text-stone-500 mb-4"><Sparkles size={20} /></div>
             <h2 className="font-display text-4xl md:text-5xl text-white mb-6">Tichá Zóna</h2>
             <p className="text-stone-400 font-light text-lg">
               Místo, kde se nespěchá. Vyhřívaná lehátka, krb, tlumené světlo a čajový bar.
             </p>
           </div>
           <motion.div 
             className="w-full h-[60vh] overflow-hidden relative"
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
           >
             <img src="/images/wellness-rest.webp" className="w-full h-full object-cover opacity-70" alt="Rest" />
             <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent"></div>
           </motion.div>
        </div>

      </div>

      {/* --- SPA MENU (Dark Table) --- */}
      <section className="bg-stone-900 py-32 border-t border-stone-800">
         <div className="container mx-auto px-6 md:px-12">
           <h3 className="text-center font-display text-3xl text-stone-300 mb-16">Spa Menu</h3>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12 max-w-4xl mx-auto">
              {[
                { name: "Signature Lorkova Masáž", price: "2 400 Kč", duration: "90 min" },
                { name: "Hloubková Sportovní", price: "1 900 Kč", duration: "60 min" },
                { name: "Aromaterapie Beskyd", price: "1 800 Kč", duration: "60 min" },
                { name: "Peeling z Horských Bylin", price: "1 200 Kč", duration: "45 min" },
                { name: "Reflexní Terapie", price: "950 Kč", duration: "30 min" },
                { name: "Masáž Hlavy a Šíje", price: "950 Kč", duration: "30 min" }
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-end border-b border-stone-800 pb-4 group">
                   <div>
                     <h4 className="text-stone-200 text-lg group-hover:text-gold-500 transition-colors">{item.name}</h4>
                     <span className="text-stone-600 text-sm">{item.duration}</span>
                   </div>
                   <span className="text-gold-500 font-display text-xl">{item.price}</span>
                </div>
              ))}
           </div>

           <div className="text-center mt-20">
             <Link to="/booking">
                <Button variant="outline" className="text-stone-200 border-stone-700 hover:bg-stone-200 hover:text-stone-900">
                  Rezervovat Proceduru
                </Button>
             </Link>
           </div>
         </div>
      </section>

    </div>
  );
};

export default Wellness;
