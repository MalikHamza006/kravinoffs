import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { PortfolioItem } from '../types';
import { ArrowUpRight, X } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioItem | null>(null);

  const categories = [
    'All',
    'Software & Web Development',
    'Digital Experiences',
    'Marketing & Branding',
    'Video Production',
  ];

  const filteredProjects = portfolioData.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="work" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-block text-xs font-bold tracking-[0.2em] text-chrome-300 uppercase px-3.5 py-1.5 rounded-full bg-white/[0.04] mb-4">
              Featured Showcase
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase leading-tight">
              SELECTED WORK. <br />
              <span className="text-gradient-chrome">REAL CREATIVITY.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-chrome-300 max-w-md font-normal leading-relaxed">
            A glimpse into our technical craftsmanship and aesthetic direction across software engineering, digital performance, and cinematic media.
          </p>
        </div>

        {/* Category Filters - Borderless */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-white text-obsidian-950 shadow-md shadow-white/10'
                  : 'bg-white/[0.04] text-chrome-400 hover:text-white hover:bg-white/[0.08]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid - Borderless & Clean */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveModalProject(project)}
              className="group rounded-3xl bg-transparent overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 hover:translate-y-[-6px]"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-black shadow-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] font-bold tracking-wider text-white uppercase px-3 py-1 rounded-full bg-black/60 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white text-obsidian-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-xl">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Details */}
                <div className="py-6 px-1">
                  <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-chrome-100 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-chrome-300 font-normal leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2.5 py-1 rounded-full bg-white/[0.05] text-chrome-400 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-1 flex items-center justify-between text-xs font-semibold text-chrome-400 group-hover:text-white transition-colors">
                <span>View Project Blueprint</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-obsidian-900 rounded-3xl shadow-2xl overflow-hidden z-10"
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative h-64 overflow-hidden">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-transparent to-transparent" />
              </div>

              <div className="p-6 sm:p-8">
                <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase block mb-1">
                  {activeModalProject.category}
                </span>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  {activeModalProject.title}
                </h3>
                <p className="text-sm text-chrome-200 leading-relaxed font-normal mb-6">
                  {activeModalProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {activeModalProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-white/[0.05] text-chrome-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-6 flex items-center justify-between">
                  <a
                    href="https://wa.me/923160442304?text=Hello%20Hamza!%20I'm%20interested%20in%20a%20project%20similar%20to%20your%20showcase."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl bg-white text-obsidian-950 font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 hover:bg-chrome-100 transition-colors shadow-lg"
                  >
                    <span>Request Similar Project Blueprint</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
