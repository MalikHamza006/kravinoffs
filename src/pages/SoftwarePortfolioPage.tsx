import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Code2, Search, ArrowRight } from 'lucide-react';
import { SoftwareProject } from '../types';
import { softwareProjects as fallbackProjects, SOFTWARE_CATEGORIES } from '../data/softwareProjects';
import { SoftwareModal } from '../components/SoftwareModal';
import { SEO } from '../components/SEO';

export const SoftwarePortfolioPage: React.FC = () => {
  const [projects] = useState<SoftwareProject[]>(fallbackProjects);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<SoftwareProject | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        project.category.toLowerCase().includes(selectedCategory.toLowerCase());

      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        project.title.toLowerCase().includes(query) ||
        (project.type && project.type.toLowerCase().includes(query)) ||
        (project.quality && project.quality.toLowerCase().includes(query)) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <div className="pt-28 pb-32 min-h-screen bg-[#020408] text-white relative selection:bg-cyan-400 selection:text-black">
      <SEO
        title="Custom Software, Web Apps, SaaS & Restaurant POS Portfolio | Lightyear Studios"
        description="Explore Lightyear Studios custom software engineering builds: Restaurant POS systems, commission-free food ordering web apps, multi-tenant SaaS platforms, and modern ERPs."
        canonical="https://kravinoffs.agency/software-portfolio"
        keywords="Custom Software Development Australia, Web Application Development Australia, SaaS Development, PaaS Architecture, ERP Development, Restaurant POS Systems, Restaurant Management Software, Commission-Free Food Ordering Web App, Online Ordering Tech, Cloud POS Australia, Hamza Malik"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Custom Software, SaaS & Restaurant POS Portfolio",
          "description": "Showcase of high-performance custom web applications, SaaS platforms, ERP systems, and restaurant POS technologies engineered by Lightyear Studios.",
          "url": "https://kravinoffs.agency/software-portfolio",
          "provider": {
            "@type": "Organization",
            "name": "Lightyear Studios"
          }
        }}
      />

      {/* Saturated Ambient Light Orbs */}
      <div className="fixed top-20 right-10 w-[550px] h-[550px] rounded-full bg-cyan-600/15 blur-[150px] pointer-events-none animate-orb-1" />
      <div className="fixed bottom-20 left-10 w-[500px] h-[500px] rounded-full bg-emerald-600/15 blur-[140px] pointer-events-none animate-orb-3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-4 shadow-sm">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            Software Engineering & Digital Platforms
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tight leading-[1.05] drop-shadow-xl uppercase">
            Software Systems. <br />
            <span className="text-gradient-cyan">Engineered to Grow.</span>
          </h1>

          <p className="mt-4 text-slate-200 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
            From specialized restaurant POS platforms and commission-free ordering systems to scalable multi-tenant SaaS tools and modern e-commerce storefronts.
          </p>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/15">
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="text-2xl sm:text-3xl font-heading font-bold text-white">Hospitality</div>
              <div className="text-[11px] font-mono text-cyan-300 uppercase mt-0.5 font-semibold">POS & KDS Systems</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="text-2xl sm:text-3xl font-heading font-bold text-white">0% Fees</div>
              <div className="text-[11px] font-mono text-emerald-300 uppercase mt-0.5 font-semibold">Direct Food Ordering</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="text-2xl sm:text-3xl font-heading font-bold text-white">TypeScript</div>
              <div className="text-[11px] font-mono text-violet-300 uppercase mt-0.5 font-semibold">Full-Stack Stacks</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="text-2xl sm:text-3xl font-heading font-bold text-white">AUD Pricing</div>
              <div className="text-[11px] font-mono text-amber-300 uppercase mt-0.5 font-semibold">From A$2,500</div>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search software systems, restaurant POS, stacks..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-400 text-xs font-mono focus:outline-none focus:border-cyan-400/60 focus:bg-white/[0.06] transition-all shadow-inner"
              />
            </div>

            {/* Total Results Counter */}
            <div className="text-xs font-mono text-chrome-400 self-center">
              Showing <span className="text-cyan-300 font-semibold">{filteredProjects.length}</span> of {projects.length} builds
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {SOFTWARE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold transition-all duration-200 border ${
                  selectedCategory === cat
                    ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                    : 'bg-white/[0.04] text-slate-300 border-white/15 hover:border-white/40 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Software Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl bg-gradient-to-b from-[#0a0f1d] to-[#04060c] border border-white/10 hover:border-cyan-500/50 overflow-hidden flex flex-col transition-all shadow-xl hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)] cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-black/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/85 backdrop-blur-md text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-wider block mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-chrome-300 mt-2 line-clamp-2 leading-relaxed font-normal">
                    {project.shortDesc}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/10 text-xs font-mono">
                  <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-between">
                    <span className="text-slate-400 text-[11px] uppercase">Type:</span>
                    <span className="text-white font-semibold truncate ml-2">
                      {project.type || project.category}
                    </span>
                  </div>

                  <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-between">
                    <span className="text-slate-400 text-[11px] uppercase">Quality:</span>
                    <span className="text-emerald-400 font-semibold truncate ml-2">
                      {project.quality}
                    </span>
                  </div>
                </div>

                <div className="w-full pt-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white group-hover:text-cyan-300 group-hover:border-cyan-500/40 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>View System Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <SoftwareModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
