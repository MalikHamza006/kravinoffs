import React from 'react';
import { ArrowUp, MessageCircle, Mail, Phone, Code2, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-obsidian-950 pt-20 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-lg overflow-hidden bg-black flex items-center justify-center p-0.5 shadow-md border border-white/10">
                <img
                  src="/k.jpeg"
                  alt="Kravinoffs Emblem"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold tracking-[0.15em] text-white">
                  KRAVINOFFS
                </span>
                <span className="text-[10px] tracking-[0.25em] text-chrome-400 uppercase">
                  Digital Agency & Engineering Labs
                </span>
              </div>
            </Link>

            <p className="text-sm text-chrome-300 max-w-sm leading-relaxed font-normal">
              Kravinoffs engineers mission-critical enterprise software and broadcast-grade commercial cinema. Built for scale, delivered without compromise.
            </p>

            <div className="pt-2 text-xs text-chrome-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Leadership Active: <strong className="text-white">Hamza Malik</strong></span>
            </div>
          </div>

          {/* Dedicated Portfolios Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Flagship Portfolios
            </h4>
            <ul className="space-y-3 text-sm text-chrome-300">
              <li>
                <Link to="/software-portfolio" className="hover:text-white transition-colors flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5 text-white/70" />
                  <span>Software & Cloud Portfolio</span>
                </Link>
              </li>
              <li>
                <Link to="/video-portfolio" className="hover:text-white transition-colors flex items-center gap-2">
                  <Video className="w-3.5 h-3.5 text-white/70" />
                  <span>Video & Marketing Showcase</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  5 Core Capabilities
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Production Arsenal & Gear
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-chrome-300">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/software-portfolio" className="hover:text-white transition-colors">Software</Link></li>
              <li><Link to="/video-portfolio" className="hover:text-white transition-colors">Videos</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Direct Founder Line */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs text-chrome-300">
              <li>
                <a
                  href="https://wa.me/923160442304"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>WhatsApp Line</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hamzamalik789890@gmail.com"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span>hamzamalik789890@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-chrome-400">
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  <span>+92 316 0442304</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-chrome-400">
          <div>
            © {new Date().getFullYear()} Kravinoffs International. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-emerald-400/80">
              ● Vercel Fullstack Deployment Ready
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors flex items-center gap-1.5"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
