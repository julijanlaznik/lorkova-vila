import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  // Luxury styles: sharper corners (rounded-sm), wider tracking, refined transitions
  const baseStyles = "inline-flex items-center justify-center font-sans uppercase tracking-widest transition-all duration-500 ease-luxury focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group";
  
  const variants = {
    // Primary: Dark background, light text, slight lift
    primary: "bg-stone-900 text-white hover:bg-stone-800 border border-stone-900 hover:shadow-xl",
    
    // Secondary: Gold accent, elegant
    secondary: "bg-gold-500 text-white border border-gold-500 hover:bg-gold-600 hover:border-gold-600",
    
    // Outline: Minimalist border, fill on hover
    outline: "border border-stone-900 text-stone-900 hover:text-white hover:bg-stone-900 backdrop-blur-sm",
    
    // Link: Text with animated underline
    link: "text-stone-900 hover:text-gold-600 p-0 bg-transparent after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-gold-600 after:origin-bottom-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:after:origin-bottom-left",
  };

  const sizes = {
    sm: "px-6 py-3 text-[10px]",
    md: "px-8 py-4 text-xs",
    lg: "px-10 py-5 text-sm",
  };

  // Link variant overrides size padding
  const activeSize = variant === 'link' ? "text-sm pb-1" : sizes[size];
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${activeSize} ${widthClass} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default Button;