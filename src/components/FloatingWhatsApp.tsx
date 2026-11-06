import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <div className="hidden sm:flex flex-col items-end mr-3 px-3.5 py-2 rounded-xl bg-obsidian-900 border border-white/15 shadow-xl opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none">
        <span className="text-xs font-bold text-white">Chat with Hamza Malik</span>
        <span className="text-[10px] text-emerald-400 font-semibold">+92 316 0442304 • Online</span>
      </div>

      {/* Floating Button with Pulse Aura */}
      <a
        href="https://wa.me/923160442304?text=Hello%20Kravinoffs!%20I'm%20interested%20in%20your%20services.%20I'd%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-obsidian-950 flex items-center justify-center shadow-2xl shadow-emerald-500/40 transition-transform duration-300 hover:scale-110 focus:outline-none"
        aria-label="Chat with Kravinoffs on WhatsApp (+92 316 0442304)"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-25" />
        <MessageCircle className="w-7 h-7 text-obsidian-950 relative z-10" />
      </a>
    </aside>
  );
};
