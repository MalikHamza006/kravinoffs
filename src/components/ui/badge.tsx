import * as React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'cyan' | 'emerald' | 'violet' | 'amber' | 'rose' | 'lime';
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const variantStyles = {
    default: 'border-white/20 bg-white/10 text-white shadow-sm',
    secondary: 'border-white/10 bg-white/5 text-neutral-300',
    outline: 'border-white/20 text-neutral-200',
    cyan: 'border-cyan-500/40 bg-cyan-500/15 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]',
    emerald: 'border-emerald-500/40 bg-emerald-500/15 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.3)]',
    violet: 'border-violet-500/40 bg-violet-500/15 text-violet-300 shadow-[0_0_15px_rgba(139,92,246,0.3)]',
    amber: 'border-amber-500/40 bg-amber-500/15 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.3)]',
    rose: 'border-rose-500/40 bg-rose-500/15 text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.3)]',
    lime: 'border-lime-400/40 bg-lime-400/15 text-lime-300 shadow-[0_0_15px_rgba(204,255,0,0.3)]',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-mono font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
