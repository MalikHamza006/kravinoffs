import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Video, Sparkles, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-14 overflow-hidden bg-obsidian-950 text-white"
    >
      {/* Dynamic Ambient Background Illumination */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[550px] lg:w-[650px] h-[550px] lg:h-[650px] bg-gradient-to-tr from-white/[0.07] via-cyan-500/[0.04] to-transparent rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -left-24 bottom-10 w-[450px] h-[450px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center my-auto relative z-10">
        
        {/* Left Column: Proportional Typography & Multi-Page Action Triggers */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          {/* Eyebrow Pill Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-chrome-300 uppercase mb-6 self-start"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>ENTERPRISE SOFTWARE • 8K CINEMA • PERFORMANCE MARKETING</span>
          </motion.div>

          {/* Balanced Editorial Headline (Harmonized with sculpture scale) */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl lg:text-[3.8rem] xl:text-[4.4rem] font-bold tracking-tight leading-[1.05] text-white uppercase mb-6"
          >
            ENGINEERED TO LEAD. <br />
            <span className="text-gradient-silver">BUILT TO SCALE.</span> <br />
            TESTED UNDER FIRE.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-chrome-300 max-w-xl leading-relaxed font-normal mb-8"
          >
            Kravinoffs builds mission-critical web & desktop applications, produces broadcast-grade commercial cinema, and executes algorithmic paid marketing systems that dominate competitive markets.
          </motion.p>

          {/* Dual Multi-Page Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            {/* Primary Action Button */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-white text-black hover:bg-neutral-200 font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-xl shadow-white/10 hover:scale-105 active:scale-95 group"
            >
              <span>Work With Us</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            {/* Software Portfolio Button */}
            <Link
              to="/software-portfolio"
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/15 hover:border-white/30 font-medium text-xs tracking-wider uppercase transition-all duration-200"
            >
              <Code2 className="w-4 h-4 text-chrome-300" />
              <span>Software Builds</span>
            </Link>

            {/* Video Showcase Button */}
            <Link
              to="/video-portfolio"
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/15 hover:border-white/30 font-medium text-xs tracking-wider uppercase transition-all duration-200"
            >
              <Video className="w-4 h-4 text-emerald-400" />
              <span>Video & ROAS</span>
            </Link>
          </motion.div>

          {/* Trust Guarantees */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex items-center gap-6 mt-8 pt-6 border-t border-white/[0.08] text-xs font-mono text-chrome-400"
          >
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Zero-Downtime SLA</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>8K RED / ARRI Optics</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>5.4x Verified Avg ROAS</span>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Floating 3D Liquid Chrome Sculpture (Background Removed) */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          {/* Subtle Ambient Radial Backlight Glow for the sculpture */}
          <div className="absolute inset-0 bg-radial-glow opacity-40 blur-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [-8, 8, -8],
              rotate: [-1, 1, -1]
            }}
            transition={{ 
              opacity: { duration: 0.9 },
              scale: { duration: 0.9 },
              y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
              rotate: { repeat: Infinity, duration: 8, ease: "easeInOut" }
            }}
            className="relative w-full max-w-[400px] sm:max-w-[440px] lg:max-w-[480px] aspect-square flex items-center justify-center"
          >
            {/* Pure transparent PNG with zero background artifact */}
            <img
              src="/assets/hero-sculpture.png"
              alt="Kravinoffs 3D Liquid Chrome Sculpture - Software & Cinema Precision"
              className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(255,255,255,0.12)] select-none pointer-events-none"
            />
          </motion.div>
        </div>

      </div>

      {/* Bottom Bar: "TRUSTED BY AMBITIOUS BRANDS" */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-7xl mx-auto px-6 sm:px-8 w-full pt-8 border-t border-white/[0.08] mt-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
      >
        <div className="text-[11px] font-mono tracking-[0.2em] text-neutral-400 uppercase shrink-0">
          TRUSTED BY <br className="hidden sm:inline" />GLOBAL ENTERPRISES & INNOVATORS
        </div>

        <div className="flex flex-wrap items-center gap-8 sm:gap-12 opacity-70 hover:opacity-100 transition-opacity">
          <span className="font-heading font-bold text-sm tracking-widest text-neutral-300 uppercase">
            APEX CAPITAL
          </span>
          <span className="font-heading font-bold text-sm tracking-widest text-neutral-300 uppercase">
            VELOCE HYPERCAR
          </span>
          <span className="font-heading font-bold text-sm tracking-widest text-neutral-300 uppercase">
            CYBERSHIELD
          </span>
          <span className="font-heading font-bold text-sm tracking-widest text-neutral-300 uppercase">
            NEUROLOGIX
          </span>
          <span className="font-heading font-bold text-sm tracking-widest text-neutral-300 uppercase">
            KRAVITZ RETAIL
          </span>
        </div>
      </motion.div>
    </section>
  );
};
