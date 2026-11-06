import React from 'react';
import { motion } from 'framer-motion';
import { Compass, FileCode2, Rocket, TrendingUp } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Discover',
      icon: Compass,
      desc: 'Understanding your business, goals, challenges, and vision.',
      details: 'We begin with an in-depth strategic briefing to map existing bottlenecks, user demographics, competitive moats, and technical requirements.',
    },
    {
      step: '02',
      title: 'Strategize',
      icon: FileCode2,
      desc: 'Developing the right technical, creative, and marketing strategy.',
      details: 'Architecture blueprints, UI/UX design prototypes, conversion funnel wireframes, and production timelines are synthesized into a coherent plan.',
    },
    {
      step: '03',
      title: 'Execute',
      icon: Rocket,
      desc: 'Turning the strategy into high-quality digital solutions and campaigns.',
      details: 'Clean, performant code is engineered; commercial cinema assets are captured and edited; and paid ad campaigns are launched with strict tracking.',
    },
    {
      step: '04',
      title: 'Grow',
      icon: TrendingUp,
      desc: 'Improving, optimizing, and supporting your business as it evolves.',
      details: 'Continuous optimization through data telemetry, A/B testing, infrastructure scaling, and dedicated founder-level operational support.',
    },
  ];

  return (
    <section id="process" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-block text-xs font-bold tracking-[0.2em] text-chrome-300 uppercase px-3.5 py-1.5 rounded-full bg-white/[0.04] mb-4">
            Our Blueprint
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase mb-6">
            FROM CONCEPT TO <br className="hidden sm:inline" />
            <span className="text-gradient-chrome">EXECUTION.</span>
          </h2>
          <p className="text-base sm:text-lg text-chrome-300 leading-relaxed font-normal">
            A frictionless four-stage lifecycle designed for high execution speed, complete transparency, and flawless delivery.
          </p>
        </div>

        {/* 4 Connected Process Cards - Borderless & Seamless */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:translate-y-[-4px] group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-heading text-4xl font-black text-chrome-500 group-hover:text-white transition-colors">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.05] flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 text-chrome-100" />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-chrome-200 mb-3 leading-snug">
                    {item.desc}
                  </p>

                  <p className="text-xs text-chrome-400 leading-relaxed font-normal">
                    {item.details}
                  </p>
                </div>

                <div className="pt-6 mt-6 flex items-center justify-between text-[11px] font-bold text-chrome-400 tracking-wider">
                  <span>STAGE {item.step}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
