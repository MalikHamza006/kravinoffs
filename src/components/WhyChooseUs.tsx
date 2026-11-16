import React from 'react';
import { motion } from 'framer-motion';
import { Workflow, Target, MessageSquare, ShieldCheck, HeartHandshake } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const differentiators = [
    {
      icon: Workflow,
      title: 'One Creative & Technical Partner',
      desc: 'Software, media, and digital marketing unified under one single studio. No fragmented vendor handoffs or misaligned communication.',
    },
    {
      icon: Target,
      title: 'Business-Focused Solutions',
      desc: 'We prioritise actual commercial requirements and operational utility instead of unnecessary features or vanity metrics.',
    },
    {
      icon: MessageSquare,
      title: 'Transparent Communication',
      desc: 'Clear scopes, documented milestones, and regular progress updates. You always know what is being built and when it will ship.',
    },
    {
      icon: ShieldCheck,
      title: 'Quality-Led Execution',
      desc: 'Every web application, commercial video, and marketing campaign is rigorously reviewed and tested against agreed specifications.',
    },
    {
      icon: HeartHandshake,
      title: 'Long-Term Partnerships',
      desc: 'We aim to build lasting commercial relationships through reliable delivery, post-launch maintenance, and continuous improvement.',
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-block text-xs font-mono tracking-widest text-chrome-300 uppercase px-3 py-1 rounded-full bg-white/[0.04] mb-3">
            The Lightyear Studios Standard
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase leading-tight mb-4">
            WHY BUSINESSES <br />
            <span className="text-chrome-400">CHOOSE LIGHTYEAR STUDIOS.</span>
          </h2>
          <p className="text-sm sm:text-base text-chrome-300 leading-relaxed font-normal">
            Direct access to senior talent, commercially sensible scopes, and dependable execution without corporate bloat.
          </p>
        </div>

        {/* 5 Differentiator Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25, delay: index * 0.07 }}
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

                <div className="pt-4 mt-6 border-t border-white/5 text-[10px] font-mono text-chrome-400 tracking-widest uppercase flex items-center justify-between">
                  <span>Differentiator 0{index + 1}</span>
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
