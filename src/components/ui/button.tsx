import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'glow' | 'cyber';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    const variants = {
      default: 'bg-white text-black hover:bg-neutral-200 shadow-xl shadow-white/10 active:scale-95',
      outline: 'border border-white/20 bg-white/[0.03] hover:bg-white/10 text-white hover:border-white/40 active:scale-95',
      secondary: 'bg-neutral-800 text-white hover:bg-neutral-700 active:scale-95',
      ghost: 'hover:bg-white/10 text-neutral-300 hover:text-white',
      glow: 'bg-white text-black hover:bg-neutral-100 shadow-[0_0_25px_rgba(255,255,255,0.35)] hover:shadow-[0_0_35px_rgba(255,255,255,0.6)] active:scale-95',
      cyber: 'border border-cyan-400/50 bg-cyan-500/15 text-cyan-300 hover:bg-cyan-400 hover:text-black shadow-[0_0_25px_rgba(6,182,212,0.4)] active:scale-95',
    };

    const sizes = {
      default: 'h-11 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider',
      sm: 'h-9 rounded-md px-3 text-xs',
      lg: 'h-13 rounded-full px-8 text-sm font-semibold uppercase tracking-wider',
      icon: 'h-10 w-10 p-0',
    };

    return (
      <Comp
        className={cn(
          'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 disabled:pointer-events-none disabled:opacity-50 select-none',
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
