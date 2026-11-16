import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Video, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Code2,
      title: 'Engineering Excellence',
      tagline: 'Functional & Scalable',
      desc: 'Building functional, scalable and maintainable digital products that streamline business operations and deliver effortless user experiences.',
    },
    {
      icon: Video,
      title: 'Creative Production',
      tagline: 'Visual Storytelling',
      desc: 'Creating engaging commercial content, product showcases, and high-retention visual stories delivered up to 4K UHD resolution.',
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Digital Growth',
      tagline: 'Measurable Impact',
      desc: 'Helping businesses improve visibility, connect with audiences and strengthen their digital presence through structured SEO and transparent marketing.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-block text-xs font-mono tracking-widest text-chrome-300 uppercase px-3 py-1 rounded-full bg-white/[0.04] mb-3">
            About Lightyear Studios
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase leading-tight mb-4">
            A STUDIO BUILT AROUND <br />
            <span className="text-chrome-400">IDEAS, TECHNOLOGY AND EXECUTION.</span>
          </h2>
          <p className="text-sm sm:text-base text-chrome-300 leading-relaxed font-normal">
            Lightyear Studios is a digital engineering and creative production studio focused on helping businesses build, communicate and grow. We bring software development, commercial video production and digital marketing together under one creative and technical direction. Our goal is simple: understand the business, create the right solution and deliver work that makes a meaningful difference.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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
                  <span>Pillar 0{index + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Founder Card Strip */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/15 flex items-center justify-center text-white font-heading font-bold text-lg">
              HM
            </div>
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <span>Hamza Malik</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-cyan-300 border border-white/15">
                  Founder & Studio Director
                </span>
              </div>
              <p className="text-xs text-chrome-300 mt-1">
                Technology and creative business professional leading software architecture, video standards, and digital growth.
              </p>
            </div>
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-mono font-semibold tracking-wider uppercase transition-all shadow-md shrink-0"
          >
            <span>Learn About Our Studio</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};
