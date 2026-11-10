import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Camera, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Terminal,
      title: 'Enterprise Architecture',
      tagline: 'Zero-Debt Engineering',
      desc: 'Type-safe distributed systems, low-latency microservices, and audited cloud security built to scale without refactoring.',
    },
    {
      icon: Camera,
      title: 'Precision Media',
      tagline: '8K Cinema Optics',
      desc: 'Broadcast-grade commercial cinema, 3D CGI procedural visuals, and algorithmic video assets engineered for immediate resonance.',
    },
    {
      icon: ShieldCheck,
      title: 'Verified Performance',
      tagline: 'Measurable Outcomes',
      desc: 'Every system is backed by clear performance metrics: 99.999% SLAs, sub-30ms latencies, and verified campaign returns.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header — Systems Limited Minimal Authority */}
        <div className="max-w-3xl mb-14">
          <div className="inline-block text-xs font-mono tracking-widest text-chrome-300 uppercase px-3 py-1 rounded-full bg-white/[0.04] mb-3">
            About Kravinoffs
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase leading-tight mb-4">
            ENGINEERING & MEDIA <br />
            <span className="text-chrome-400">WITHOUT COMPROMISE.</span>
          </h2>
          <p className="text-sm sm:text-base text-chrome-300 leading-relaxed font-normal">
            Kravinoffs is an elite engineering and media studio. We build mission-critical software architectures and broadcast-tier commercial visual assets for high-growth enterprises.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, index) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25, delay: index * 0.08 }}
                className="rounded-2xl p-6 bg-white/[0.02] border border-white/10 hover:border-white/30 flex flex-col justify-between transition-colors shadow-lg hover:shadow-2xl hover:shadow-white/5 cursor-pointer"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center text-white mb-5">
                    <Icon className="w-5 h-5 text-chrome-200" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-chrome-400 uppercase block mb-1">
                    {p.tagline}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-chrome-300 leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-chrome-400">
                  <span>Standard 0{index + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
