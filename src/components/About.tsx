import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Palette, TrendingUp, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  const principles = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      tagline: 'Technical Precision',
      desc: 'We turn ambitious ideas into practical digital solutions with enterprise-grade architectures that scale seamlessly.',
    },
    {
      icon: Palette,
      title: 'Creativity',
      tagline: 'Artistic Monopoly',
      desc: 'We create meaningful experiences and cinematic visuals that capture human attention and trigger lasting resonance.',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      tagline: 'Measurable Value',
      desc: 'We focus on solutions that deliver measurable business value, sustainable revenue expansion, and market authority.',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-block text-xs font-bold tracking-[0.2em] text-chrome-300 uppercase px-3.5 py-1.5 rounded-full bg-white/[0.04] mb-4">
            About Kravinoffs
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase leading-tight mb-6">
            WE BUILD MORE THAN JUST <br className="hidden sm:inline" />
            <span className="text-gradient-chrome">DIGITAL PRODUCTS.</span>
          </h2>
          <p className="text-base sm:text-lg text-chrome-300 leading-relaxed font-normal">
            Kravinoffs is a creative technology and digital growth company helping businesses transform their ideas into impactful digital experiences. We combine software engineering, strategic marketing, social media expertise, advertising, and professional video production to help brands grow with confidence.
          </p>
        </div>

        {/* Brand Core Grid with Emblem & Principles - Borderless & Seamless */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Emblem & Heritage Card */}
          <div className="lg:col-span-5 rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-black p-1 shadow-2xl mb-8">
                <img src="/k.jpeg" alt="Kravinoffs Official Emblem" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-3">
                Architecting The Future Of Digital Agencies
              </h3>
              <p className="text-sm text-chrome-300 leading-relaxed">
                Founded with an uncompromising commitment to titanium-grade execution. Rather than outsourcing or delivering generic agency templates, Kravinoffs functions as an elite in-house partner for visionary leaders.
              </p>
            </div>

            <div className="pt-8 mt-8 flex items-center justify-between">
              <div>
                <span className="text-xs text-chrome-400 uppercase tracking-widest block">Core Standard</span>
                <span className="text-sm font-semibold text-white">Zero Compromise on Quality</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Standards</span>
              </div>
            </div>
          </div>

          {/* Three Brand Principles - Borderless Clean Minimal */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {principles.map((p, index) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:translate-y-[-4px]"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.05] flex items-center justify-center text-white mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold tracking-widest text-chrome-400 uppercase block mb-1">
                      {p.tagline}
                    </span>
                    <h4 className="font-heading text-xl font-bold text-white mb-3">
                      {p.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-chrome-300 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 text-[11px] font-bold text-chrome-400 tracking-wider">
                    0{index + 1} — PRINCIPLE
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
