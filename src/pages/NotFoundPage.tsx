import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Terminal } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-obsidian-950 text-white flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-3xl bg-white/[0.02] border border-white/10">
        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-chrome-300">
          <Terminal className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-chrome-400">404 — Route Not Found</span>
          <h1 className="text-3xl font-display font-medium text-white">System Signal Lost</h1>
          <p className="text-xs sm:text-sm text-chrome-300">
            The architectural endpoint you navigated to does not exist in the Kravinoffs deployment index.
          </p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black hover:bg-chrome-100 font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Headquarters</span>
        </Link>
      </div>
    </div>
  );
};
