import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Search, Filter, Server, Cpu, Database, Cloud, ExternalLink, 
  Terminal, ShieldCheck, CheckCircle2, ArrowRight, Layers, Sparkles 
} from 'lucide-react';
import { SoftwareProject } from '../types';
import { softwareProjects as fallbackProjects, SOFTWARE_CATEGORIES } from '../data/softwareProjects';
import { SoftwareModal } from '../components/SoftwareModal';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const SoftwarePortfolioPage: React.FC = () => {
  const [projects, setProjects] = useState<SoftwareProject[]>(fallbackProjects);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<SoftwareProject | null>(null);
  const [isApiConnected, setIsApiConnected] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Fetch from serverless API with fallback
  useEffect(() => {
    let isMounted = true;
    const fetchApiProjects = async () => {
      try {
        setIsLoading(true);
        const res = await fetch('/api/software-projects');
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.projects && isMounted) {
            setProjects(data.projects);
            setIsApiConnected(true);
          }
        }
      } catch (err) {
        console.warn('Using client-side fallback software data:', err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchApiProjects();
    return () => { isMounted = false; };
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        project.category.toLowerCase().includes(selectedCategory.toLowerCase());

      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.shortDesc.toLowerCase().includes(query) ||
        project.client.toLowerCase().includes(query) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <div className="pt-28 pb-24 sm:pb-32 min-h-screen bg-obsidian-950 text-chrome-200">
      <SEO
        title="Custom Software, Desktop & Web App Development Portfolio | Kravinoffs"
        description="Explore Kravinoffs software engineering portfolio: enterprise web applications, cross-platform desktop applications, cloud microservices, fintech trading terminals, and AI systems."
        canonical="https://kravinoffs.agency/software-portfolio"
      />
      {/* Background Ambience */}
      <div className="fixed inset-0 bg-radial-glow pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Page Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-chrome-300 uppercase tracking-widest">
              <Code2 className="w-3.5 h-3.5 text-white" />
              Software & Cloud Systems
            </span>

            {/* Live Vercel API Status Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {isApiConnected ? 'Vercel Serverless API Connected' : 'Vercel API Ready'}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-medium text-white tracking-tight leading-[1.1]">
            Engineered for Scale. <br />
            <span className="text-chrome-400">Tested Under Fire.</span>
          </h1>

          <p className="mt-4 text-chrome-300 text-base sm:text-lg leading-relaxed">
            From high-frequency financial trading suites and autonomous logistics engines to HIPAA-grade tele-diagnostics and zero-trust security infrastructure. Explore our technical builds, architectural blueprints, and production metrics.
          </p>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
            <div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-white">99.999%</div>
              <div className="text-xs font-mono text-chrome-400 uppercase mt-0.5">Uptime SLA Standard</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-white">&lt; 30ms</div>
              <div className="text-xs font-mono text-chrome-400 uppercase mt-0.5">P99 Latency Profile</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-white">100%</div>
              <div className="text-xs font-mono text-chrome-400 uppercase mt-0.5">Type-Safe TypeScript</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-white">$450M+</div>
              <div className="text-xs font-mono text-chrome-400 uppercase mt-0.5">Secured Asset Flow</div>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-chrome-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search software, tech stack (e.g. Rust, React, WebSockets)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-chrome-400 text-xs font-mono focus:outline-none focus:border-white/30 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-chrome-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="text-xs font-mono text-chrome-400">
              Showing <span className="text-white font-semibold">{filteredProjects.length}</span> of{' '}
              <span className="text-white font-semibold">{projects.length}</span> Production Builds
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {SOFTWARE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all border ${
                  selectedCategory === cat
                    ? 'bg-white text-black font-semibold border-white shadow-lg shadow-white/10'
                    : 'bg-white/[0.02] text-chrome-300 border-white/10 hover:bg-white/[0.06] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Software Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-white/[0.02] border border-white/10">
            <p className="text-sm font-mono text-chrome-400">
              No software systems matching your criteria. Try adjusting your query or filter.
            </p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 rounded-lg bg-white/10 text-xs font-mono text-white hover:bg-white/20 transition-all"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative rounded-2xl bg-obsidian-900/90 border border-white/10 overflow-hidden flex flex-col hover:border-white/30 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-white/5"
              >
                {/* Thumbnail Header */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />
                  
                  {/* Category & Status badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded text-[11px] font-mono uppercase tracking-wider bg-black/80 backdrop-blur-md text-white border border-white/15">
                      {project.category}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      {project.status}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 text-xs font-mono text-chrome-300">
                    Client: <strong className="text-white font-medium">{project.client}</strong>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2">
                    <h2 className="text-xl font-display font-medium text-white group-hover:text-chrome-100 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-chrome-300 line-clamp-3 leading-relaxed">
                      {project.shortDesc}
                    </p>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    {project.metrics.slice(0, 2).map((m, i) => (
                      <div key={i} className="text-center">
                        <div className="text-base font-display font-bold text-white">{m.value}</div>
                        <div className="text-[10px] font-mono text-chrome-400 uppercase tracking-wider mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono text-chrome-400 uppercase tracking-wider">
                      Architecture & Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-chrome-200 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 5 && (
                        <span className="px-1.5 py-0.5 rounded text-[11px] font-mono bg-white/5 text-chrome-400 border border-white/5">
                          +{project.techStack.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-2 border-t border-white/10 flex items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white text-black hover:bg-chrome-100 text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-md shadow-white/5"
                    >
                      <span>Explore Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
                        title="Live Demo Preview"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Engineering Philosophy Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-transparent border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight">
              Need a Custom Enterprise Software Solution?
            </h3>
            <p className="text-chrome-300 text-sm mt-2 leading-relaxed">
              We design, build, and deploy zero-latency web terminals, microservices architectures, and AI-enabled platforms tailored to institutional workflows.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black hover:bg-chrome-100 font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-xl shadow-white/10"
          >
            <span>Book Founder Architecture Session</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Software Details Modal */}
      <SoftwareModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
