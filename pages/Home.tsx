
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star, Wind, Clock, ChefHat, CalendarDays, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import HeroBookingWidget from '../components/hero/HeroBookingWidget';
import { PACKAGES, NEWS, CONTACT_INFO } from '../constants';

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 800], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="flex flex-col bg-stone-50">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[100dvh] w-full overflow-hidden flex flex-col">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full"
          >
             {/* Using a darker, moodier image for better text contrast */}
             <img 
              src="/hero-home.webp" 
              alt="Lorkova Vila Mood" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-stone-950/90"></div>
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 flex-grow flex flex-col justify-center items-center text-center px-6">
          
          <motion.div 
            style={{ opacity }}
            className="space-y-4"
          >
            <motion.div 
               initial={{ opacity: 0, letterSpacing: '0.5em' }}
               animate={{ opacity: 1, letterSpacing: '0.2em' }}
               transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
               className="text-stone-300 uppercase text-xs md:text-sm tracking-[0.2em] font-medium mb-4"
            >
              Beskydy Mountains • Est. 2024
            </motion.div>

            <div className="flex flex-col items-center leading-none">
              <motion.h1 
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-7xl md:text-9xl text-white tracking-tight mix-blend-overlay"
              >
                LORKOVA
              </motion.h1>
              
              <motion.h2 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1.2, delay: 0.4 }}
                 className="font-display text-6xl md:text-8xl text-white font-light italic tracking-widest mt-2"
              >
                VILA
              </motion.h2>
            </div>
          </motion.div>

        </div>

        {/* Booking Widget Container - Anchored at bottom */}
        <div className="relative z-20 pb-12 md:pb-24 px-6 w-full">
          <HeroBookingWidget />
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="hidden md:flex justify-center mt-6 gap-8 text-[10px] text-stone-400 uppercase tracking-widest"
          >
             <span className="flex items-center gap-2"><Wind size={12}/> Klimatické lázně</span>
             <span className="flex items-center gap-2"><Star size={12}/> 5-Star Experience</span>
          </motion.div>
        </div>
      </section>

      {/* --- PHILOSOPHY / ATMOSPHERE --- */}
      <section className="py-32 container mx-auto px-6 md:px-12 bg-stone-50">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative">
             <motion.div 
               style={{ y: y2 }}
               className="aspect-[3/4] overflow-hidden"
             >
               <img src="/images/home-philosophy.webp" alt="Interior Detail" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
             </motion.div>
          </div>
          <div className="md:col-span-7 md:pl-12">
            <motion.div
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-10%" }}
               transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl md:text-6xl text-stone-900 leading-tight mb-8">
                Nejen hotel. <br />
                <span className="text-stone-400">Místo pro nadechnutí.</span>
              </h2>
              <p className="font-sans text-lg md:text-xl text-stone-600 leading-relaxed font-light max-w-xl mb-12">
                Daleko od hluku města, vysoko nad všedními starostmi. Lorkova vila nabízí prostor, kde se čas zpomalí. Minimalistický luxus se zde snoubí s divokou krásou Beskyd.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <Wind className="w-8 h-8 text-gold-500 mb-4" />
                  <h3 className="font-display text-xl mb-2">Čistý vzduch</h3>
                  <p className="text-sm text-stone-500">Klimatické lázně v srdci hor.</p>
                </div>
                <div>
                  <Star className="w-8 h-8 text-gold-500 mb-4" />
                  <h3 className="font-display text-xl mb-2">Prémiový servis</h3>
                  <p className="text-sm text-stone-500">Diskrétní a osobní přístup.</p>
                </div>
              </div>

              <Link to="/wellness">
                 <Button variant="link">Objevit Wellness</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SELECTED ROOMS (Large Scale) --- */}
      <section className="py-20 bg-stone-950 text-stone-100 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 mb-16 flex justify-between items-end">
          <h2 className="font-display text-5xl md:text-7xl">Ubytování</h2>
          <Link to="/rooms" className="hidden md:block text-sm uppercase tracking-widest hover:text-gold-400 transition-colors">Všechny pokoje</Link>
        </div>

        <div className="container mx-auto px-6 md:px-12">
          {/* Room 1 */}
          <div className="relative group mb-32 last:mb-0">
             <Link to="/rooms" className="block">
               <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 ease-luxury">
                 <img src="/images/room-lorka-cover.webp" alt="Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-luxury" />
                 <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700"></div>
                 
                 {/* Floating Content */}
                 <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16">
                    <h3 className="font-display text-4xl md:text-6xl text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">Apartmá Lorka</h3>
                    <p className="text-stone-300 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      Naše nejprestižnější apartmá s privátní terasou a panoramatickým výhledem.
                    </p>
                 </div>
                 
                 <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <div className="w-16 h-16 rounded-full bg-white text-stone-900 flex items-center justify-center">
                      <ArrowRight />
                    </div>
                 </div>
               </div>
             </Link>
          </div>

          {/* Room 2 */}
          <div className="relative group">
             <Link to="/rooms" className="block">
               <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 ease-luxury">
                 <img src="/images/room-superior-cover.webp" alt="Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-luxury" />
                 <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700"></div>
                 
                 <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16">
                    <h3 className="font-display text-4xl md:text-6xl text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">Double Superior</h3>
                    <p className="text-stone-300 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      Moderní design, přírodní materiály a dokonalý klid pro váš odpočinek.
                    </p>
                 </div>

                 <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <div className="w-16 h-16 rounded-full bg-white text-stone-900 flex items-center justify-center">
                      <ArrowRight />
                    </div>
                 </div>
               </div>
             </Link>
          </div>
        </div>
      </section>

      {/* --- RESTAURANT SECTION (Replaced Chutě Beskyd) --- */}
      <section className="bg-stone-900 text-stone-100 py-32 relative overflow-hidden">
        {/* Dark Background Texture */}
        <div className="absolute inset-0 z-0 opacity-30">
           <img src="/images/restaurant-bg.webp" className="w-full h-full object-cover" alt="Wine texture" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-stone-950/70 z-0"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left: Content */}
              <div className="order-2 lg:order-1">
                 <span className="text-gold-500 uppercase tracking-widest text-xs font-semibold mb-4 block flex items-center gap-2">
                   <Star size={12} fill="currentColor" /> Fine Dining Experience
                 </span>
                 <h2 className="font-display text-5xl md:text-7xl mb-8 leading-tight">
                   Restaurace <br />
                   <span className="italic text-stone-500">Lorkova</span>
                 </h2>
                 <p className="text-stone-300 text-lg font-light leading-relaxed mb-10 max-w-xl">
                   Nejsme jen hotelová restaurace. Jsme cílovou destinací pro všechny milovníky výjimečného jídla. 
                   Náš šéfkuchař sestavuje menu podle rytmu přírody – co ráno sklidíme, to večer s úctou servírujeme.
                 </p>

                 <div className="space-y-8 border-l border-gold-500/30 pl-8 mb-12">
                    <div className="group cursor-default">
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="font-display text-2xl text-white group-hover:text-gold-500 transition-colors">Snídaně</h4>
                        <span className="text-stone-500 font-mono text-xs">08:00 – 10:30</span>
                      </div>
                      <p className="text-stone-500 text-sm">Bohatý bufet z lokálních farem, domácí pečivo a káva výběrové kvality.</p>
                    </div>
                    
                    <div className="group cursor-default">
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="font-display text-2xl text-white group-hover:text-gold-500 transition-colors">Večerní Menu</h4>
                        <span className="text-stone-500 font-mono text-xs">17:00 – 22:00</span>
                      </div>
                      <p className="text-stone-500 text-sm">Sezónní A la carte a 5-chodové degustační menu párované s víny.</p>
                    </div>
                 </div>

                 <div className="flex gap-6">
                   {/* Changed to Direct Call Button */}
                   <a href={`tel:${CONTACT_INFO.phone}`}>
                     <Button variant="secondary" className="bg-gold-500 text-stone-900 font-bold border-none hover:bg-white px-8">
                       <Phone size={16} className="mr-2" /> Zavolat a rezervovat
                     </Button>
                   </a>
                 </div>
              </div>

              {/* Right: Visuals */}
              <div className="order-1 lg:order-2 relative">
                 <div className="aspect-[4/5] rounded-sm overflow-hidden relative z-10 border border-stone-800">
                    <img 
                      src="/images/restaurant-chef.webp" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" 
                      alt="Chef plating" 
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                       <div className="flex items-center gap-4 text-white/90">
                         <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                            <ChefHat size={20} />
                         </div>
                         <div>
                            <p className="font-display text-lg">Šéfkuchař</p>
                            <p className="text-xs text-gold-500 uppercase tracking-widest">Martin Kovář</p>
                         </div>
                       </div>
                    </div>
                 </div>
                 
                 {/* Decorative elements behind */}
                 <div className="absolute -top-12 -right-12 w-64 h-64 border border-stone-800 rounded-full opacity-50 hidden lg:block animate-pulse"></div>
                 <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gold-600/10 rounded-full blur-2xl"></div>
              </div>

           </div>
        </div>
      </section>

      {/* --- NEWS / AKTUALITY SECTION --- */}
      <section className="py-24 bg-white border-y border-stone-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <span className="text-gold-500 uppercase tracking-widest text-xs font-semibold">Deník Lorkovy Vily</span>
              <h2 className="font-display text-4xl md:text-5xl text-stone-900 mt-2">Aktuálně</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEWS.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="group flex flex-col h-full bg-stone-50 border border-stone-100 hover:border-gold-200 transition-colors duration-500"
              >
                 <div className="aspect-[16/9] overflow-hidden relative">
                   <img 
                     src={item.image} 
                     alt={item.title} 
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-luxury grayscale-[20%] group-hover:grayscale-0" 
                   />
                   <div className="absolute top-4 left-4">
                     <span className="bg-white/90 backdrop-blur text-stone-900 text-[10px] uppercase tracking-widest px-3 py-1.5 font-semibold">
                       {item.tag}
                     </span>
                   </div>
                 </div>
                 <div className="p-8 flex flex-col flex-grow">
                   <div className="flex items-center gap-2 text-stone-400 text-xs uppercase tracking-widest mb-4">
                     <CalendarDays size={12} />
                     <span>{item.date}</span>
                   </div>
                   <h3 className="font-display text-2xl text-stone-900 mb-4 group-hover:text-gold-600 transition-colors">
                     {item.title}
                   </h3>
                   <p className="text-stone-500 text-sm leading-relaxed mb-6 line-clamp-3">
                     {item.excerpt}
                   </p>
                   {/* Updated Link to Internal Page */}
                   <div className="mt-auto pt-6 border-t border-stone-100">
                     <Link to={`/journal/${item.id}`} className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone-900 hover:text-gold-600 transition-colors font-semibold">
                       Více Info <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                     </Link>
                   </div>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PACKAGES (Editorial Style) --- */}
      <section className="py-32 container mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
           <span className="text-gold-500 uppercase tracking-widest text-xs font-semibold">Exkluzivní nabídky</span>
           <h2 className="font-display text-5xl md:text-6xl mt-4 text-stone-900">Vyberte si svůj zážitek</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg, idx) => (
             <motion.div 
               key={pkg.id}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1, duration: 0.8 }}
               className="group cursor-pointer"
             >
               <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                 <img src={pkg.promoImage} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-luxury" />
                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-stone-900 px-3 py-1 text-xs uppercase tracking-wider">
                   {pkg.duration}
                 </div>
               </div>
               <h3 className="font-display text-2xl text-stone-900 group-hover:text-gold-600 transition-colors mb-2">{pkg.title}</h3>
               <p className="text-stone-500 text-sm mb-4 line-clamp-2">{pkg.summary}</p>
               <span className="text-stone-900 font-medium border-b border-stone-200 pb-1 group-hover:border-gold-600 transition-colors">
                 od {pkg.price} Kč
               </span>
             </motion.div>
          ))}
        </div>
      </section>

      {/* --- MOOD VIDEO/CTA --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/home-cta-relax.webp" className="w-full h-full object-cover" alt="Relax" />
          <div className="absolute inset-0 bg-stone-900/40"></div>
        </div>
        <div className="relative z-10 text-center">
          <h2 className="font-display text-5xl md:text-7xl text-white mb-8">Jste připraveni?</h2>
          <Link to="/booking">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-stone-900">
              Rezervovat pobyt
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
