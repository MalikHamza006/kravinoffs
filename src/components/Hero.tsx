import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Video, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-14 overflow-hidden bg-[#020408] text-white"
    >
      {/* Saturated Ambient Lighting Orbs */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/15 rounded-full blur-[150px] pointer-events-none animate-orb-1" />
      <div className="absolute -left-20 bottom-10 w-[500px] h-[500px] bg-violet-600/12 rounded-full blur-[140px] pointer-events-none animate-orb-2" />

      {/* Main Content Area: Left Text + Right 3D Sculpture Image (Without BG) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center my-auto relative z-10">
        
        {/* Left Column: Systems Limited Minimal Authority */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-xs font-mono tracking-widest text-cyan-300 uppercase mb-6 self-start shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10B981]" />
            <span>ENTERPRISE ENGINEERING & HIGH-IMPACT MEDIA</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl lg:text-[4.2rem] font-bold tracking-tight leading-[1.05] text-white uppercase mb-6 drop-shadow-xl"
          >
            BUILT FOR SCALE. <br />
            <span className="text-gradient-cyan">ENGINEERED TO LEAD.</span>
          </motion.h1>

          {/* Subtitle — 1 Concise High-Contrast Sentence */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-xl text-slate-200 max-w-xl leading-relaxed font-normal mb-8"
          >
            We build mission-critical enterprise software and produce broadcast-tier commercial cinema. Minimal overhead, maximum impact.
          </motion.p>

          {/* Dual Action Triggers with Shadcn Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link to="/software-portfolio">
              <Button variant="glow" size="lg" className="gap-2.5 font-bold">
                <Code2 className="w-4 h-4" />
                <span>Software Systems</span>
              </Button>
            </Link>

            <Link to="/video-portfolio">
              <Button variant="cyber" size="lg" className="gap-2.5 font-bold">
                <Video className="w-4 h-4 text-cyan-400" />
                <span>Video & Media</span>
              </Button>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white px-4 py-3 transition-colors font-semibold"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          {/* Verified Metrics Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-5 mt-10 pt-6 border-t border-white/15 text-xs font-mono text-slate-300"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-white font-semibold">99.999% SLA Uptime</span>
            </div>
            <div>•</div>
            <div>
              <span className="text-white font-semibold">Sub-30ms P99 Latency</span>
            </div>
            <div>•</div>
            <div>
              <span className="text-white font-semibold">8K RED Monstro Fleet</span>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Floating 3D Liquid Chrome Sculpture (Background Removed) */}
        <div className="lg:col-span-5 flex items-center justify-center relative mt-8 lg:mt-0">
          {/* Subtle Ambient Radial Backlight Glow */}
          <div className="absolute inset-0 bg-cyan-500/15 opacity-50 blur-3xl pointer-events-none rounded-full" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [-8, 8, -8],
              rotate: [-1, 1, -1]
            }}
            transition={{ 
              opacity: { duration: 0.8 },
              scale: { duration: 0.8 },
              y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
              rotate: { repeat: Infinity, duration: 8, ease: "easeInOut" }
            }}
            className="relative w-full max-w-[380px] sm:max-w-[440px] aspect-square flex items-center justify-center"
          >
            {/* Pure transparent PNG without background */}
            <img
              src="/assets/hero-sculpture.png"
              alt="Kravinoffs 3D Liquid Chrome Sculpture"
              className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(6,182,212,0.25)] select-none pointer-events-none"
            />
          </motion.div>
        </div>

      </div>

      {/* Bottom Bar: Institutional Trust Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-8 w-full pt-8 border-t border-white/10 mt-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
      >
        <div className="text-[11px] font-mono tracking-[0.2em] text-slate-400 uppercase shrink-0 font-semibold">
          ENTERPRISE ARCHITECTURES & GLOBAL CLIENTELE
        </div>

        <div className="flex flex-wrap items-center gap-6 sm:gap-10 opacity-80 hover:opacity-100 transition-opacity">
          <span className="font-heading font-bold text-xs sm:text-sm tracking-widest text-slate-200 uppercase">
            APEX CAPITAL
          </span>
          <span className="font-heading font-bold text-xs sm:text-sm tracking-widest text-slate-200 uppercase">
            VELOCE HYPERCAR
          </span>
          <span className="font-heading font-bold text-xs sm:text-sm tracking-widest text-slate-200 uppercase">
            CYBERSHIELD
          </span>
          <span className="font-heading font-bold text-xs sm:text-sm tracking-widest text-slate-200 uppercase">
            NEUROLOGIX
          </span>
        </div>
      </motion.div>
    </section>
  );
};
