import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Terminal } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-obsidian-950 text-white flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-3xl bg-white/[0.02] border border-white/10">
        <div className="w-16 h-16 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center mx-auto text-cyan-300">
          <Terminal className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-300">404 — Route Not Found</span>
          <h1 className="text-3xl font-heading font-bold text-white uppercase">Page Not Found</h1>
          <p className="text-xs sm:text-sm text-chrome-300">
            The page you requested could not be found. Please check the address or return to the Lightyear Studios homepage.
          </p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-neutral-200 text-black font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-lg active:scale-95"
        >
          <ArrowLeft className="w-4 h-4 text-black" />
          <span>Return to Home</span>
        </Link>
      </div>
    </div>
  );
};
