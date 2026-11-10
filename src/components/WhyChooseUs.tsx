import React from 'react';
import { motion } from 'framer-motion';
import { Workflow, ShieldCheck, Cpu, Target } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Workflow,
      title: 'Unified Technology & Cinema',
      desc: 'Eliminate fragmented vendor management. Software engineering and 8K cinema production operated by one unified team.',
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise-Grade SLAs',
      desc: 'Type-safe TypeScript architectures, sub-30ms P99 latency profiles, and 99.999% availability standards.',
    },
    {
      icon: Cpu,
      title: 'Modern Toolchains',
      desc: 'Built exclusively on modern stacks: React 18, Rust, Next.js, WebSockets, RED Cinema optics, and Octane CGI.',
    },
    {
      icon: Target,
      title: 'Attributed Performance',
      desc: 'Direct focus on commercial outcomes: verified ROAS, user acquisition pipelines, and robust operational uptime.',
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-block text-xs font-mono tracking-widest text-chrome-300 uppercase px-3 py-1 rounded-full bg-white/[0.04] mb-3">
            The Kravinoffs Standard
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase leading-tight mb-4">
            WHY VISIONARY TEAMS <br />
            <span className="text-chrome-400">PARTNER WITH US.</span>
          </h2>
          <p className="text-sm sm:text-base text-chrome-300 leading-relaxed font-normal">
            Direct executive access, zero vendor bloat, and uncompromising engineering standards.
          </p>
        </div>

        {/* 4 Clean Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25, delay: index * 0.08 }}
                className="rounded-2xl p-6 bg-white/[0.02] border border-white/10 hover:border-white/30 flex flex-col justify-between transition-colors shadow-lg hover:shadow-2xl hover:shadow-white/5 group cursor-pointer"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center text-white mb-5 group-hover:scale-105 transition-all">
                    <Icon className="w-5 h-5 text-chrome-200" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2 leading-snug">
                    {diff.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-chrome-300 leading-relaxed font-normal">
                    {diff.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/5 text-[10px] font-mono text-chrome-400 tracking-widest uppercase">
                  Pillar 0{index + 1}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
