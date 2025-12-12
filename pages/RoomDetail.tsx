
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Play, Maximize2, Users, Square } from 'lucide-react';
import { ROOMS } from '../constants';
import Button from '../components/ui/Button';

const RoomDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const room = ROOMS.find(r => r.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!room) {
    return (
      <div className="h-screen flex items-center justify-center bg-stone-950 text-white">
        <div className="text-center">
           <h1 className="text-4xl font-display mb-4">Pokoj nenalezen</h1>
           <Button onClick={() => navigate('/rooms')} variant="outline" className="text-white border-white">Zpět na přehled</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 min-h-screen">
      
      {/* --- HERO: VIDEO SHOWREEL --- */}
      <div className="relative h-[85vh] w-full overflow-hidden bg-stone-900">
         {room.videoUrl ? (
           <video 
             autoPlay 
             loop 
             muted 
             playsInline 
             className="absolute inset-0 w-full h-full object-cover opacity-80"
           >
             <source src={room.videoUrl} type="video/mp4" />
           </video>
         ) : (
           <img src={room.coverImage} alt={room.title} className="absolute inset-0 w-full h-full object-cover opacity-80" />
         )}
         
         <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/30"></div>

         <div className="absolute top-32 left-6 md:left-12 z-20">
           <Link to="/rooms" className="text-white/70 hover:text-white flex items-center gap-2 text-xs uppercase tracking-widest transition-colors">
             <ArrowLeft size={16} /> Zpět na pokoje
           </Link>
         </div>

         <div className="absolute bottom-12 left-6 md:left-12 right-6 z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="font-display text-5xl md:text-8xl text-white mb-6">{room.title}</h1>
              <div className="flex flex-wrap gap-6 text-stone-300 text-sm uppercase tracking-widest">
                 <span className="flex items-center gap-2"><Users size={16}/> {room.capacity} Osob</span>
                 <span className="flex items-center gap-2"><Square size={16}/> {room.area} m²</span>
                 <span className="flex items-center gap-2"><Maximize2 size={16}/> Výhled na hory</span>
              </div>
            </motion.div>
         </div>
      </div>

      {/* --- CONTENT GRID --- */}
      <div className="container mx-auto px-6 md:px-12 py-24">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Description & Amenities */}
            <div className="lg:col-span-7">
               <h2 className="font-display text-4xl text-stone-900 mb-8">Příběh pokoje</h2>
               <p className="text-xl text-stone-600 font-light leading-relaxed mb-12">
                 {room.longDesc}
               </p>
               
               <h3 className="font-display text-2xl text-stone-900 mb-6">Vybavení</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {room.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-stone-500 border-b border-stone-200 py-3">
                       <Check size={16} className="text-gold-500" />
                       <span>{feature}</span>
                    </div>
                  ))}
               </div>
            </div>

            {/* Right: Booking Card (Sticky) */}
            <div className="lg:col-span-5 relative">
               <div className="sticky top-32 bg-stone-900 text-white p-8 md:p-12 rounded-3xl">
                  <span className="text-stone-400 text-xs uppercase tracking-widest block mb-2">Cena za noc</span>
                  <div className="flex items-baseline gap-2 mb-8">
                     <span className="font-display text-4xl md:text-5xl">od {room.priceFrom} Kč</span>
                  </div>
                  
                  <div className="space-y-4 mb-8 text-sm text-stone-300">
                     <p className="flex justify-between"><span>Check-in</span> <span>14:00</span></p>
                     <p className="flex justify-between"><span>Check-out</span> <span>10:00</span></p>
                     <p className="flex justify-between"><span>Snídaně</span> <span>V ceně</span></p>
                     <p className="flex justify-between"><span>Wellness</span> <span>Privátní vstup</span></p>
                  </div>

                  <Link to={`/booking?room=${room.id}`}>
                    <Button variant="secondary" fullWidth className="bg-gold-500 hover:bg-gold-400 text-stone-900 border-none font-bold">
                       Rezervovat termín
                    </Button>
                  </Link>
                  <p className="text-[10px] text-stone-500 text-center mt-4">
                    Nejlepší cena garantována při rezervaci přes web.
                  </p>
               </div>
            </div>
         </div>
      </div>

      {/* --- GALLERY MASONRY --- */}
      <div className="bg-stone-100 py-24">
         <div className="container mx-auto px-6 md:px-12">
            <h2 className="font-display text-4xl text-stone-900 mb-12 text-center">Galerie</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
               {room.galleryImages.map((img, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`rounded-xl overflow-hidden shadow-lg ${idx === 0 ? 'md:col-span-2 h-[50vh]' : 'h-[40vh]'}`}
                  >
                     <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                  </motion.div>
               ))}
            </div>
         </div>
      </div>

    </div>
  );
};

export default RoomDetail;
