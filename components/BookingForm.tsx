import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from './ui/Button';
import { ROOMS } from '../constants';

type BookingInputs = {
  checkIn: string;
  checkOut: string;
  guests: number;
  roomType: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
};

interface BookingFormProps {
  className?: string;
  isDark?: boolean; // Prop to force dark mode styling if needed
}

const BookingForm: React.FC<BookingFormProps> = ({ className = '', isDark = false }) => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<BookingInputs>();

  const onSubmit: SubmitHandler<BookingInputs> = async (data) => {
    // Simulate API call
    console.log("Booking Data:", data);
    await new Promise(resolve => setTimeout(resolve, 2000));
    alert("Děkujeme za poptávku. Brzy se Vám ozveme s potvrzením.");
    reset();
  };

  // Luxury Input Styles (Glassmorphism friendly)
  const inputClasses = "w-full bg-stone-800/50 border border-stone-700 rounded-lg px-4 py-4 text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all";
  const labelClasses = "block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2";

  return (
    <div className={` ${className}`}>
      <h3 className="font-display text-3xl mb-8 text-white">Nezávazná rezervace</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelClasses}>Příjezd</label>
            <input 
              type="date" 
              {...register("checkIn", { required: true })}
              className={`${inputClasses} [color-scheme:dark]`}
            />
            {errors.checkIn && <span className="text-red-500 text-xs mt-1 block">Povinné pole</span>}
          </div>
          <div>
            <label className={labelClasses}>Odjezd</label>
            <input 
              type="date" 
              {...register("checkOut", { required: true })}
              className={`${inputClasses} [color-scheme:dark]`}
            />
            {errors.checkOut && <span className="text-red-500 text-xs mt-1 block">Povinné pole</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div>
            <label className={labelClasses}>Počet osob</label>
            <select 
              {...register("guests", { required: true })}
              className={`${inputClasses} appearance-none`}
            >
              {[1, 2, 3, 4, 5, 6].map(num => <option key={num} value={num} className="bg-stone-900">{num} {num === 1 ? 'Osoba' : num < 5 ? 'Osoby' : 'Osob'}</option>)}
            </select>
          </div>
          <div>
            <label className={labelClasses}>Typ pokoje</label>
            <select 
              {...register("roomType", { required: true })}
              className={`${inputClasses} appearance-none`}
            >
              <option value="" className="bg-stone-900">Vyberte pokoj</option>
              {ROOMS.map(room => (
                <option key={room.id} value={room.id} className="bg-stone-900">{room.title}</option>
              ))}
            </select>
            {errors.roomType && <span className="text-red-500 text-xs mt-1 block">Prosím vyberte pokoj</span>}
          </div>
        </div>

        <div>
            <label className={labelClasses}>Jméno a Příjmení</label>
            <input 
              type="text" 
              {...register("name", { required: true })}
              placeholder="Jan Novák"
              className={inputClasses}
            />
            {errors.name && <span className="text-red-500 text-xs mt-1 block">Povinné pole</span>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelClasses}>Email</label>
            <input 
              type="email" 
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              placeholder="jan@email.cz"
              className={inputClasses}
            />
            {errors.email && <span className="text-red-500 text-xs mt-1 block">Platný email nutný</span>}
          </div>
          <div>
            <label className={labelClasses}>Telefon</label>
            <input 
              type="tel" 
              {...register("phone", { required: true })}
              placeholder="+420 777 888 999"
              className={inputClasses}
            />
            {errors.phone && <span className="text-red-500 text-xs mt-1 block">Povinné pole</span>}
          </div>
        </div>

        <div>
          <label className={labelClasses}>Poznámka</label>
          <textarea 
            {...register("notes")}
            rows={3}
            placeholder="Specifické požadavky, alergie..."
            className={inputClasses}
          ></textarea>
        </div>

        <div className="pt-4">
          <Button 
            type="submit" 
            variant="secondary" 
            fullWidth 
            disabled={isSubmitting}
            className="bg-gold-500 hover:bg-gold-400 text-stone-900 font-bold border-none"
          >
            {isSubmitting ? 'Odesílám...' : 'Odeslat rezervaci'}
          </Button>
          <p className="text-[10px] text-stone-500 text-center mt-4">
            Odesláním formuláře souhlasíte se zpracováním osobních údajů.
          </p>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;