import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Code2, Search, ExternalLink, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import { SoftwareProject } from '../types';
import { softwareProjects as fallbackProjects, SOFTWARE_CATEGORIES } from '../data/softwareProjects';
import { SoftwareModal } from '../components/SoftwareModal';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
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
        title="Custom Software & Cloud Systems Portfolio | Kravinoffs"
        description="Explore Kravinoffs software engineering builds: mission-critical financial terminals, AI logistics brains, and cloud infrastructure. Verified quality metrics and zero bloat."
        canonical="https://kravinoffs.agency/software-portfolio"
      />

      {/* Saturated Ambient Light Orbs */}
      <div className="fixed top-20 right-10 w-[550px] h-[550px] rounded-full bg-cyan-600/15 blur-[150px] pointer-events-none animate-orb-1" />
      <div className="fixed bottom-20 left-10 w-[500px] h-[500px] rounded-full bg-emerald-600/15 blur-[140px] pointer-events-none animate-orb-3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Page Header — Systems Limited Minimal Authority */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-4 shadow-sm">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            Engineering & Cloud Architecture
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[1.05] drop-shadow-xl">
            Software Systems. <br />
            <span className="text-gradient-cyan">Engineered for Scale.</span>
          </h1>

          <p className="mt-4 text-slate-200 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
            Low-latency distributed systems, fintech engines, and cloud platforms. Specifications verified below.
          </p>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/15">
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="text-2xl sm:text-3xl font-display font-bold text-white">99.999%</div>
              <div className="text-[11px] font-mono text-cyan-300 uppercase mt-0.5 font-semibold">Uptime SLA</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="text-2xl sm:text-3xl font-display font-bold text-white">&lt; 30ms</div>
              <div className="text-[11px] font-mono text-emerald-300 uppercase mt-0.5 font-semibold">P99 Latency</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="text-2xl sm:text-3xl font-display font-bold text-white">100%</div>
              <div className="text-[11px] font-mono text-violet-300 uppercase mt-0.5 font-semibold">Type-Safe TS</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="text-2xl sm:text-3xl font-display font-bold text-white">$450M+</div>
              <div className="text-[11px] font-mono text-amber-300 uppercase mt-0.5 font-semibold">Flow Secured</div>
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
                placeholder="Search software systems, types, stacks..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-400 text-xs font-mono focus:outline-none focus:border-cyan-400/60 focus:bg-white/[0.06] transition-all shadow-inner"
              />
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

        {/* Product Cards Grid: Strictly Preview + Title + Type + Quality ONLY */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-white/[0.02] border border-white/10">
            <p className="text-sm font-mono text-slate-400">
              No systems matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25, delay: idx * 0.05 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative rounded-2xl bg-gradient-to-b from-[#0a0f1e] to-[#03060d] border-2 border-white/15 hover:border-cyan-400/50 overflow-hidden flex flex-col transition-all duration-300 shadow-xl hover:shadow-[0_20px_50px_-10px_rgba(6,182,212,0.35)]"
              >
                {/* Visual Preview */}
                <div className="relative aspect-video overflow-hidden bg-black/95">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-black/20 to-transparent" />
                  
                  {/* Status Indicator */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-black/85 backdrop-blur-md text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 shadow-md font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Card Body: Title, Type, and Quality Specs ONLY */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h2 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors drop-shadow-sm">
                      {project.title}
                    </h2>
                  </div>

                  {/* Strictly Type & Quality Specs */}
                  <div className="space-y-2 pt-2 border-t border-white/10 text-xs font-mono">
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                      <span className="text-slate-400 text-[11px] uppercase">Type:</span>
                      <Badge variant="cyan" className="text-[10px] uppercase font-bold">
                        {project.type || project.category}
                      </Badge>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                      <span className="text-slate-400 text-[11px] uppercase">Quality:</span>
                      <span className="text-emerald-400 font-bold truncate ml-2">
                        {project.quality || 'Enterprise Production Grade'}
                      </span>
                    </div>
                  </div>

                  {/* Actions with Shadcn Buttons */}
                  <div className="pt-2 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-mono font-semibold text-slate-300 hover:text-white uppercase tracking-wider transition-colors flex items-center gap-1.5"
                    >
                      <span>Inspect Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="cyber" size="sm" className="gap-1.5 text-xs font-bold">
                          <span>Live Demo</span>
                          <ExternalLink className="w-3 h-3" />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Software Spec Modal */}
      <SoftwareModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
