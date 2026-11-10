import React from 'react';
import { motion } from 'framer-motion';
import { Compass, FileCode2, Rocket, TrendingUp } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Discovery',
      icon: Compass,
      desc: 'Technical audit of existing systems, market positioning, and performance objectives.',
    },
    {
      icon: FileCode2,
      step: '02',
      title: 'Architecture',
      desc: 'System schema blueprints, UI/UX interaction models, and cinema production storyboards.',
    },
    {
      step: '03',
      title: 'Execution',
      icon: Rocket,
      desc: 'Agile sprint development, 8K RED filming, and continuous integration pipeline testing.',
    },
    {
      step: '04',
      title: 'Scale',
      icon: TrendingUp,
      desc: 'Production deployment, real-time telemetry monitoring, and ongoing conversion tuning.',
    },
  ];

  return (
    <section id="process" className="py-20 sm:py-28 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-block text-xs font-mono tracking-widest text-chrome-300 uppercase px-3 py-1 rounded-full bg-white/[0.04] mb-3">
            Execution Lifecycle
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase leading-tight mb-4">
            FROM CONCEPT <br />
            <span className="text-chrome-400">TO PRODUCTION SLA.</span>
          </h2>
          <p className="text-sm sm:text-base text-chrome-300 leading-relaxed font-normal">
            A linear four-phase execution framework designed for speed, clarity, and zero-defect delivery.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25, delay: index * 0.08 }}
                className="rounded-2xl p-6 bg-white/[0.02] border border-white/10 hover:border-white/30 flex flex-col justify-between transition-colors shadow-lg hover:shadow-2xl hover:shadow-white/5 group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading text-3xl font-black text-chrome-500 group-hover:text-white transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4 text-chrome-200" />
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-chrome-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-chrome-400">
                  <span>Phase {item.step}</span>
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
