import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, MessageCircle, Mail, Phone, Menu, Code2, Video, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // ALL pages unified directly into the main navigation
  const allNavLinks = [
    { name: 'Home', href: '/' },
    { name: 'Software', href: '/software-portfolio', badge: 'Builds' },
    { name: 'Video & Media', href: '/video-portfolio', badge: 'ROAS' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-xl py-2.5 sm:py-3 border-b border-white/[0.08] shadow-2xl'
            : 'bg-transparent py-3 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* ZONE 1: Brand Logo & Wordmark (Left - Fluid on mobile) */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group shrink min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-black flex items-center justify-center p-0.5 shadow-lg border border-white/15 transition-all duration-300 group-hover:scale-105 group-hover:border-white/40 shrink-0">
              <img
                src="/k.jpeg"
                alt="Kravinoffs Emblem Logo"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex items-baseline gap-1 truncate">
              <span className="font-heading text-base sm:text-xl font-bold tracking-[0.08em] sm:tracking-[0.12em] text-white uppercase group-hover:text-neutral-100 transition-colors truncate">
                KRAVINOFFS
              </span>
              <span className="text-[9px] sm:text-[10px] text-neutral-400 font-sans font-medium shrink-0">
                ®
              </span>
            </div>
          </Link>

          {/* ZONE 2: Unified Floating Nav Capsule (Center - All Pages Visible on Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-2xl border border-white/10 shadow-lg shadow-black/40">
            {allNavLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative flex items-center gap-2 px-3.5 xl:px-4 py-2 rounded-full text-[13px] font-medium tracking-wide transition-all duration-200 ${
                    active
                      ? 'bg-white text-black font-semibold shadow-md'
                      : 'text-neutral-300 hover:text-white hover:bg-white/[0.08]'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span
                      className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider ${
                        active
                          ? 'bg-black text-white'
                          : 'bg-white/10 text-neutral-200 border border-white/10'
                      }`}
                    >
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ZONE 3: Action Buttons (Right - Guaranteed to never overflow on mobile) */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Live WhatsApp Direct Line (Hidden on Mobile/Phablet, Visible from md upwards) */}
            <a
              href="https://wa.me/923160442304?text=Hello%20Kravinoffs!%20I'm%20interested%20in%20your%20services.%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 hover:bg-emerald-500/20 text-xs font-medium tracking-wide transition-all group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[11px]">+92 316 0442304</span>
            </a>

            {/* Inquire CTA Button */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-md shadow-white/10 hover:scale-105 active:scale-95 shrink-0"
            >
              <span>INQUIRE</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </Link>

            {/* Mobile-Only Hamburger Toggle (Always cleanly positioned within viewport) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 sm:p-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 text-white transition-colors shrink-0 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white/40"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer (Only for mobile/tablet screens when viewport is small) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 lg:hidden bg-black/98 backdrop-blur-3xl flex flex-col justify-between p-4 sm:p-8 overflow-y-auto"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 sm:pb-6">
              <Link 
                to="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-black flex items-center justify-center p-0.5 border border-white/15 shadow-md shrink-0">
                  <img
                    src="/k.jpeg"
                    alt="Kravinoffs Emblem Logo"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-lg sm:text-xl font-bold tracking-[0.1em] text-white uppercase">
                    KRAVINOFFS
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-neutral-400 font-sans">®</span>
                </div>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 sm:p-2.5 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors shrink-0"
                aria-label="Close mobile navigation"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Links List */}
            <div className="py-8 space-y-3">
              {allNavLinks.map((link, idx) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-4 rounded-2xl transition-all ${
                      active
                        ? 'bg-white text-black font-semibold'
                        : 'bg-white/[0.03] text-neutral-200 border border-white/5 hover:bg-white/[0.08]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-mono ${active ? 'text-neutral-600' : 'text-neutral-500'}`}>
                        0{idx + 1}
                      </span>
                      <span className="font-heading text-xl font-medium tracking-tight">
                        {link.name}
                      </span>
                    </div>

                    {link.badge && (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        active ? 'bg-black text-white' : 'bg-white/10 text-white'
                      }`}>
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Drawer Footer Contact Info */}
            <div className="border-t border-white/10 pt-6 space-y-4 text-xs font-sans text-neutral-400">
              <a
                href="https://wa.me/923160442304"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Founder: +92 316 044 2304</span>
              </a>
              <div className="text-neutral-500 text-[11px]">
                © {new Date().getFullYear()} Kravinoffs International.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
