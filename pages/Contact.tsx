
import React from 'react';
import { motion } from 'framer-motion';
import BookingForm from '../components/BookingForm';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Star, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
  return (
    <div className="bg-stone-950 min-h-screen relative overflow-hidden text-stone-200">
      
      {/* --- ATMOSPHERIC BACKGROUND --- */}
      <div className="fixed inset-0 z-0">
         <img src="/images/bg-contact.webp" className="w-full h-full object-cover opacity-20" alt="Dark Atmosphere" />
         <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-950/80 to-stone-950"></div>
         {/* Gold glow effect */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      </div>

      <div className="relative z-10 pt-40 pb-20 container mx-auto px-6 md:px-12">
        
        {/* --- HEADER: MOTIVATIONAL --- */}
        <div className="text-center max-w-4xl mx-auto mb-24">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
           >
             <span className="text-gold-500 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Začněte svůj příběh</span>
             <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight">
               Jsme tu, abychom splnili <br/><span className="italic text-stone-500">vaše sny.</span>
             </h1>
             <p className="text-stone-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
               Každý pobyt v Lorkově vile je originál. Napište nám své představy a my se postaráme o zbytek. 
               Od šampaňského na pokoji po soukromý výšlap s průvodcem.
             </p>
           </motion.div>
        </div>

        <div className="flex flex-col xl:flex-row gap-16 lg:gap-24">
          
          {/* --- LEFT: LUXURY CONTACT TILES --- */}
          <div className="xl:w-5/12 space-y-8">
            
            {/* Direct Contact Card */}
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.2, duration: 0.8 }}
               className="bg-stone-900/50 backdrop-blur-md border border-stone-800 p-8 md:p-10 rounded-3xl hover:border-gold-500/30 transition-colors group"
            >
               <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center text-gold-500 mb-6 group-hover:bg-gold-500 group-hover:text-stone-900 transition-colors duration-500">
                 <Phone size={24} />
               </div>
               <h3 className="text-stone-500 uppercase tracking-widest text-xs font-bold mb-2">Okamžitá asistence</h3>
               <a href={`tel:${CONTACT_INFO.phone}`} className="font-display text-3xl md:text-4xl text-white block hover:text-gold-500 transition-colors">
                 {CONTACT_INFO.phone}
               </a>
               <p className="text-stone-500 text-sm mt-4">K dispozici denně 8:00 – 22:00</p>
            </motion.div>

            {/* Email Card */}
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.3, duration: 0.8 }}
               className="bg-stone-900/50 backdrop-blur-md border border-stone-800 p-8 md:p-10 rounded-3xl hover:border-gold-500/30 transition-colors group"
            >
               <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center text-gold-500 mb-6 group-hover:bg-gold-500 group-hover:text-stone-900 transition-colors duration-500">
                 <Mail size={24} />
               </div>
               <h3 className="text-stone-500 uppercase tracking-widest text-xs font-bold mb-2">Recepce & Rezervace</h3>
               <a href={`mailto:${CONTACT_INFO.email}`} className="font-display text-2xl md:text-3xl text-white block hover:text-gold-500 transition-colors break-words">
                 {CONTACT_INFO.email}
               </a>
            </motion.div>

            {/* Address & Socials */}
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.4, duration: 0.8 }}
               className="flex flex-col md:flex-row gap-8"
            >
               <div className="flex-1 bg-stone-900/50 backdrop-blur-md border border-stone-800 p-8 rounded-3xl">
                  <MapPin size={24} className="text-gold-500 mb-6" />
                  <p className="text-white font-medium text-lg leading-relaxed mb-4">
                    {CONTACT_INFO.address.split(',')[0]} <br/>
                    <span className="text-stone-500">{CONTACT_INFO.address.split(',')[1]}</span>
                  </p>
                  <a href={CONTACT_INFO.mapsLink} target="_blank" rel="noreferrer" className="text-xs uppercase tracking-widest text-gold-500 hover:text-white transition-colors flex items-center gap-2">
                    Navigovat <ArrowRight size={12}/>
                  </a>
               </div>
               
               <div className="flex-1 flex flex-col justify-center gap-4">
                  <a href="#" className="flex items-center gap-4 p-4 rounded-2xl bg-stone-900/30 border border-stone-800 hover:bg-stone-800 hover:text-white text-stone-400 transition-all">
                    <Instagram size={20} /> <span className="uppercase tracking-widest text-xs font-bold">Instagram</span>
                  </a>
                  <a href="#" className="flex items-center gap-4 p-4 rounded-2xl bg-stone-900/30 border border-stone-800 hover:bg-stone-800 hover:text-white text-stone-400 transition-all">
                    <Facebook size={20} /> <span className="uppercase tracking-widest text-xs font-bold">Facebook</span>
                  </a>
               </div>
            </motion.div>

          </div>

          {/* --- RIGHT: FORM (GLASS DARK) --- */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="xl:w-7/12"
          >
            <div className="bg-stone-900/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-stone-700/50 shadow-2xl relative overflow-hidden">
               {/* Decorative Gradient Blob inside form */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-gold-600/10 blur-[80px] pointer-events-none rounded-full -translate-y-1/2 translate-x-1/2"></div>

               <BookingForm />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
