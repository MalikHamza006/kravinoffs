import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';
import { Code2, Video, TrendingUp, UtensilsCrossed, ShieldAlert, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ElementType> = {
  'software-dev': Code2,
  'restaurant-tech': UtensilsCrossed,
  'video-production': Video,
  'digital-marketing': TrendingUp,
  'technical-consulting': ShieldAlert,
};

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-20 sm:py-28 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-block text-xs font-mono tracking-widest text-chrome-300 uppercase px-3 py-1 rounded-full bg-white/[0.04] mb-3">
              Core Capabilities
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
              WHAT WE BUILD & DELIVER.
            </h2>
            <p className="text-sm sm:text-base text-chrome-300 mt-2 max-w-xl font-normal">
              Specialized software development, hospitality technology, commercial video production, and transparent digital marketing.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white hover:text-chrome-200 transition-colors self-start md:self-auto"
          >
            <span>All Capabilities & Pricing</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 5 Clean Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.id] || Code2;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25, delay: index * 0.06 }}
                className="rounded-2xl p-6 bg-white/[0.02] border border-white/10 hover:border-white/30 flex flex-col justify-between transition-colors shadow-lg hover:shadow-2xl hover:shadow-white/5 group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs text-chrome-400">
                      {service.number}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4 text-chrome-200" />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-chrome-100 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-chrome-300 leading-relaxed font-normal mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Bullet Offerings */}
                  <div className="space-y-1.5 pt-4 border-t border-white/5">
                    {service.keyOfferings.slice(0, 4).map((offering, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-mono text-chrome-300">
                        <span className="w-1 h-1 rounded-full bg-emerald-400" />
                        <span className="truncate">{offering}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-300 font-semibold">{service.startingPrice}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedService(service);
                    }}
                    className="text-white hover:text-chrome-200 transition-colors flex items-center gap-1"
                  >
                    <span>Details →</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};
