import React from 'react';
import { motion } from 'framer-motion';
import { 
  Workflow, 
  TrendingUp, 
  Sparkles, 
  Cpu, 
  Crosshair, 
  MessageSquareCode, 
  Maximize2, 
  ShieldCheck 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const differentiators = [
    {
      icon: Workflow,
      title: 'One Creative & Technology Partner',
      desc: 'Eliminate fragmented vendor chaos. We engineer the software, execute the marketing funnels, and produce the cinema-grade creative under one roof.',
    },
    {
      icon: TrendingUp,
      title: 'Business-Focused Solutions',
      desc: 'We prioritize tangible commercial outcomes—conversions, revenue velocity, and operating efficiency—over vanity design metrics.',
    },
    {
      icon: Sparkles,
      title: 'Creative Thinking',
      desc: 'Daring aesthetic concepts designed to pierce through modern digital noise and establish an emotional monopoly with your audience.',
    },
    {
      icon: Cpu,
      title: 'Modern Technologies',
      desc: 'We build with state-of-the-art frameworks, clean architectural patterns, and future-proof tech stacks that ensure long-term agility.',
    },
    {
      icon: Crosshair,
      title: 'Strategic Execution',
      desc: 'Every sprint begins with systematic research and competitive analysis, ensuring that each digital asset has a clear purpose.',
    },
    {
      icon: MessageSquareCode,
      title: 'Transparent Communication',
      desc: 'Direct founder and senior-level accessibility with clear sprint roadmaps, regular progress updates, and zero agency bureaucracy.',
    },
    {
      icon: Maximize2,
      title: 'Scalable Solutions',
      desc: 'From lean initial MVPs to enterprise infrastructure, our codebases and marketing campaigns are built to scale effortlessly with your growth.',
    },
    {
      icon: ShieldCheck,
      title: 'Quality-Driven Delivery',
      desc: 'Obsessive quality control across frontend responsiveness, browser compatibility, conversion tracking, and color-graded video output.',
    },
  ];

  return (
    <section id="why-us" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-block text-xs font-bold tracking-[0.2em] text-chrome-300 uppercase px-3.5 py-1.5 rounded-full bg-white/[0.04] mb-4">
            The Kravinoffs Standard
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase mb-6">
            WHY BRANDS CHOOSE <br className="hidden sm:inline" />
            <span className="text-gradient-chrome">KRAVINOFFS.</span>
          </h2>
          <p className="text-base sm:text-lg text-chrome-300 leading-relaxed font-normal">
            We operate as an agile, high-caliber creative technology powerhouse committed to precision execution and compounding competitive advantages.
          </p>
        </div>

        {/* 8 Differentiators Grid - Borderless & Clean */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 hover:translate-y-[-4px] group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.05] flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-all">
                    <Icon className="w-5 h-5 text-chrome-100" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2.5 leading-snug">
                    {diff.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-chrome-300 leading-relaxed font-normal">
                    {diff.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 text-[10px] font-bold text-chrome-400 tracking-widest uppercase">
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
