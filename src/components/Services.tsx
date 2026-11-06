import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';
import { 
  Code, 
  TrendingUp, 
  Share2, 
  Target, 
  Video, 
  ArrowUpRight, 
  MessageCircle,
  Layers
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  'software-dev': Code,
  'digital-marketing': TrendingUp,
  'social-media': Share2,
  'paid-advertising': Target,
  'video-production': Video,
};

export const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'technology' | 'marketing' | 'creative'>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filteredServices = servicesData.filter((service) => {
    if (activeCategory === 'all') return true;
    return service.category === activeCategory;
  });

  return (
    <section id="services" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-block text-xs font-bold tracking-[0.2em] text-chrome-300 uppercase px-3.5 py-1.5 rounded-full bg-white/[0.04] mb-4">
            Our Core Pillars
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase mb-6">
            OUR <span className="text-gradient-chrome">SERVICES.</span>
          </h2>
          <p className="text-base sm:text-lg text-chrome-300 leading-relaxed font-normal">
            Five specialized divisions engineered to work independently or synchronize seamlessly as an unfair competitive advantage for your brand.
          </p>
        </div>

        {/* Filter Navigation - Borderless */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-16">
          {[
            { label: 'All Services', value: 'all' },
            { label: 'Technology & Code', value: 'technology' },
            { label: 'Growth & Marketing', value: 'marketing' },
            { label: 'Creative & Video', value: 'creative' },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveCategory(tab.value as any)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === tab.value
                  ? 'bg-white text-obsidian-950 shadow-lg shadow-white/15'
                  : 'bg-white/[0.05] text-chrome-400 hover:text-white hover:bg-white/[0.1]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid (5 Premium Cards - Borderless & Clean) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredServices.map((service, index) => {
            const Icon = iconMap[service.id] || Layers;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-3xl bg-transparent overflow-hidden flex flex-col justify-between transition-all duration-300 hover:translate-y-[-6px]"
              >
                <div>
                  {/* Card Media Preview */}
                  <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-black shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-bold tracking-widest text-white uppercase px-3 py-1 rounded-full bg-black/60 backdrop-blur-md">
                        {service.number}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 flex items-center justify-center text-white backdrop-blur-md">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Card Body - Seamless */}
                  <div className="py-6 px-1">
                    <div className="text-xs font-semibold text-emerald-400 mb-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{service.kpi}</span>
                    </div>

                    <h3 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-chrome-100 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-chrome-300 font-normal leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>

                    {/* Key Offerings Quick Badges - Borderless */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.keyOfferings.slice(0, 4).map((offering) => (
                        <span
                          key={offering}
                          className="text-[11px] px-3 py-1 rounded-full bg-white/[0.05] text-chrome-300 font-medium"
                        >
                          {offering}
                        </span>
                      ))}
                      {service.keyOfferings.length > 4 && (
                        <span className="text-[11px] px-3 py-1 rounded-full bg-white/[0.1] text-chrome-200 font-bold">
                          +{service.keyOfferings.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer - Borderless */}
                <div className="px-1 pt-2 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/[0.08] hover:bg-white/[0.16] transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Explore Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>

                  <a
                    href={`https://wa.me/923160442304?text=Hello%20Hamza!%20I'm%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service%20at%20Kravinoffs.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 transition-colors"
                    title="Inquire directly on WhatsApp"
                    aria-label={`Inquire about ${service.title} on WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>

      {/* Interactive Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};
