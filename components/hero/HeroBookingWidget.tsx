
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, ChevronDown, ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Utility for Custom Calendar
const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay(); // 0 = Sun

const HeroBookingWidget: React.FC = () => {
  const navigate = useNavigate();
  
  // State
  const today = new Date();
  const [checkIn, setCheckIn] = useState<Date>(today);
  const [checkOut, setCheckOut] = useState<Date>(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1));
  const [guests, setGuests] = useState("2");

  // Calendar Modal State
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [calendarMode, setCalendarMode] = useState<'checkIn' | 'checkOut'>('checkIn');

  // Format date for display
  const formatDateDisplay = (date: Date) => {
    const months = ["Led", "Úno", "Bře", "Dub", "Kvě", "Čvn", "Čvc", "Srp", "Zář", "Říj", "Lis", "Pro"];
    return `${date.getDate()}. ${months[date.getMonth()]}`;
  };

  const handleSearch = () => {
    const formatDate = (d: Date) => d.toISOString().split('T')[0];
    navigate(`/booking?checkIn=${formatDate(checkIn)}&checkOut=${formatDate(checkOut)}&guests=${guests}`);
  };

  const openCalendar = (mode: 'checkIn' | 'checkOut') => {
    setCalendarMode(mode);
    setIsCalendarOpen(true);
  };

  return (
    <div className="relative z-30">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[90%] md:max-w-5xl mx-auto bg-stone-900/40 backdrop-blur-xl border border-white/10 p-1 rounded-2xl md:rounded-full overflow-visible shadow-2xl relative"
      >
        <div className="flex flex-col md:flex-row w-full relative">
          
          {/* Check In Button */}
          <button 
            onClick={() => openCalendar('checkIn')}
            className="relative flex-1 group border-b border-white/10 md:border-b-0 md:border-r border-white/10 transition-colors text-left"
          >
            <div className="p-4 md:py-4 md:px-8 flex flex-col justify-center h-full">
              <span className="text-[10px] uppercase tracking-widest text-stone-400 mb-1 flex items-center gap-2">
                <Calendar size={10} /> Příjezd
              </span>
              <div className="font-display text-xl md:text-2xl text-white flex items-center justify-between">
                <span>{formatDateDisplay(checkIn)}</span>
                <ChevronDown size={14} className="text-white/30 group-hover:text-gold-400 transition-colors" />
              </div>
            </div>
          </button>

          {/* Check Out Button */}
          <button 
            onClick={() => openCalendar('checkOut')}
            className="relative flex-1 group border-b border-white/10 md:border-b-0 md:border-r border-white/10 transition-colors text-left"
          >
            <div className="p-4 md:py-4 md:px-8 flex flex-col justify-center h-full">
              <span className="text-[10px] uppercase tracking-widest text-stone-400 mb-1 flex items-center gap-2">
                <Calendar size={10} /> Odjezd
              </span>
              <div className="font-display text-xl md:text-2xl text-white flex items-center justify-between">
                <span>{formatDateDisplay(checkOut)}</span>
                <ChevronDown size={14} className="text-white/30 group-hover:text-gold-400 transition-colors" />
              </div>
            </div>
          </button>

          {/* Guests */}
          <div className="relative flex-1 group transition-colors">
            <div className="p-4 md:py-4 md:px-8 flex flex-col justify-center h-full relative z-10 pointer-events-none">
              <span className="text-[10px] uppercase tracking-widest text-stone-400 mb-1 flex items-center gap-2">
                <Users size={10} /> Hosté
              </span>
              <div className="font-display text-xl md:text-2xl text-white flex items-center justify-between">
                <span>{guests} {parseInt(guests) > 4 ? 'Hostů' : parseInt(guests) > 1 ? 'Hosté' : 'Host'}</span>
                <ChevronDown size={14} className="text-white/30 group-hover:text-gold-400 transition-colors" />
              </div>
            </div>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-pointer appearance-none text-black"
            >
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Osoba' : 'Osob'}</option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className="p-1">
            <button 
              onClick={handleSearch}
              className="w-full h-16 md:h-full md:w-auto md:px-10 bg-white hover:bg-gold-500 text-stone-900 hover:text-white font-sans uppercase text-xs tracking-widest font-bold transition-all duration-500 rounded-xl md:rounded-full flex items-center justify-center gap-3 group shadow-lg"
            >
              <span>Ověřit</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </motion.div>

      {/* --- CUSTOM CALENDAR POPUP (FIXED CENTER) --- */}
      <AnimatePresence>
        {isCalendarOpen && (
           <>
             {/* Backdrop */}
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setIsCalendarOpen(false)}
               className="fixed inset-0 bg-stone-950/80 backdrop-blur-md z-[9998] flex items-center justify-center p-4"
             >
                {/* Calendar Container */}
                 <motion.div
                   initial={{ opacity: 0, scale: 0.9, y: 20 }}
                   animate={{ opacity: 1, scale: 1, y: 0 }}
                   exit={{ opacity: 0, scale: 0.9, y: 20 }}
                   onClick={(e) => e.stopPropagation()}
                   className="w-full max-w-md bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl p-8 relative"
                 >
                    <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                      <div>
                        <span className="text-gold-500 text-xs uppercase tracking-widest block mb-1">Rezervace</span>
                        <h3 className="text-white font-display text-2xl">
                          {calendarMode === 'checkIn' ? 'Datum příjezdu' : 'Datum odjezdu'}
                        </h3>
                      </div>
                      <button 
                        onClick={() => setIsCalendarOpen(false)} 
                        className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-stone-700 hover:text-white transition-colors"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    <CustomCalendar 
                       selectedDate={calendarMode === 'checkIn' ? checkIn : checkOut}
                       minDate={calendarMode === 'checkOut' ? checkIn : new Date()}
                       onSelect={(date) => {
                         if (calendarMode === 'checkIn') {
                           setCheckIn(date);
                           // Auto move to checkout logic
                           if (date >= checkOut) {
                             const newCheckout = new Date(date);
                             newCheckout.setDate(date.getDate() + 1);
                             setCheckOut(newCheckout);
                           }
                           // Slight delay for UX before switching
                           setTimeout(() => setCalendarMode('checkOut'), 300);
                         } else {
                           setCheckOut(date);
                           setIsCalendarOpen(false);
                         }
                       }}
                    />
                    
                    <div className="mt-6 pt-4 border-t border-white/10 text-center">
                       <p className="text-stone-500 text-xs">
                         {calendarMode === 'checkIn' 
                           ? 'Vyberte den, kdy chcete začít svůj pobyt.' 
                           : 'Vyberte den, kdy se s námi rozloučíte.'}
                       </p>
                    </div>
                 </motion.div>
             </motion.div>
           </>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Custom Internal Calendar Component ---
const CustomCalendar: React.FC<{ selectedDate: Date, minDate: Date, onSelect: (date: Date) => void }> = ({ selectedDate, minDate, onSelect }) => {
  const [viewYear, setViewYear] = useState(selectedDate.getFullYear());
  const [viewMonth, setViewMonth] = useState(selectedDate.getMonth());

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);
  
  // CZ standard: Monday start
  const startOffset = firstDay === 0 ? 6 : firstDay - 1; 

  const handlePrev = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const handleNext = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  const monthNames = ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"];

  return (
    <div>
      <div className="flex justify-between items-center mb-6 text-white bg-stone-800/50 p-2 rounded-lg">
        <button onClick={handlePrev} className="p-2 hover:text-gold-500 transition-colors"><ChevronLeft size={20}/></button>
        <span className="font-display text-xl tracking-wide">{monthNames[viewMonth]} {viewYear}</span>
        <button onClick={handleNext} className="p-2 hover:text-gold-500 transition-colors"><ChevronRight size={20}/></button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center mb-4">
        {["Po", "Út", "St", "Čt", "Pá", "So", "Ne"].map(day => (
          <div key={day} className="text-stone-500 text-[10px] font-bold uppercase tracking-wider">{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {/* Empty slots */}
        {Array.from({ length: startOffset }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        
        {/* Days */}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const current = new Date(viewYear, viewMonth, day);
          const isSelected = current.toDateString() === selectedDate.toDateString();
          const isDisabled = current < new Date(minDate.setHours(0,0,0,0));

          return (
            <button
              key={day}
              disabled={isDisabled}
              onClick={() => onSelect(current)}
              className={`
                h-10 w-full rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300
                ${isSelected ? 'bg-gold-500 text-stone-900 shadow-glow scale-110 font-bold' : 'text-stone-300 hover:bg-stone-800 hover:text-white'}
                ${isDisabled ? 'opacity-20 cursor-not-allowed hover:bg-transparent' : ''}
              `}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HeroBookingWidget;
