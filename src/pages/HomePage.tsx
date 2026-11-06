import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Process } from '../components/Process';
import { Contact } from '../components/Contact';
import { softwareProjects } from '../data/softwareProjects';
import { videoPortfolio, marketingSummary } from '../data/videoPortfolio';
import { Code2, Video, ArrowRight, Play, Cpu, TrendingUp, Sparkles, ExternalLink } from 'lucide-react';
import { SEO } from '../components/SEO';

export const HomePage: React.FC = () => {
  const featuredSoftware = softwareProjects.slice(0, 3);
  const featuredVideos = videoPortfolio.slice(0, 3);

  return (
    <div>
      <SEO
        title="Kravinoffs™ | Custom Software, Desktop & Web App Development, 8K Video Production & Marketing"
        description="Kravinoffs is an elite digital engineering and creative production agency. We engineer custom enterprise software, web apps, desktop applications, cloud SaaS architectures, produce broadcast 8K video commercials, and scale digital marketing with 5.4x ROAS."
        canonical="https://kravinoffs.agency/"
      />
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Core Services Section */}
      <Services />

      {/* DEDICATED SPOTLIGHT 1: Software & Web Development Showcase */}
      <section className="py-24 sm:py-32 bg-obsidian-900/60 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-30" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-chrome-300 uppercase tracking-widest mb-3">
                <Code2 className="w-3.5 h-3.5 text-white" />
                Engineering & Architecture Portfolio
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight">
                Software & Cloud Infrastructure
              </h2>
              <p className="text-chrome-300 max-w-xl text-sm sm:text-base mt-2">
                Mission-critical enterprise software, low-latency fintech terminals, and AI-driven platforms built with zero-compromise engineering.
              </p>
            </div>

            <Link
              to="/software-portfolio"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white hover:text-chrome-200 group px-5 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all self-start md:self-auto"
            >
              <span>Explore All Software ({softwareProjects.length})</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Software Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredSoftware.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl bg-obsidian-950/80 border border-white/10 overflow-hidden flex flex-col hover:border-white/25 transition-all shadow-xl"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/30 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider bg-black/80 backdrop-blur-md text-white border border-white/15">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-display font-medium text-white group-hover:text-chrome-100 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-chrome-300 mt-2 line-clamp-2 leading-relaxed">
                      {project.shortDesc}
                    </p>
                  </div>

                  <div className="space-y-4 pt-3 border-t border-white/5">
                    {/* Primary Metric */}
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-chrome-400">{project.metrics[0]?.label}:</span>
                      <span className="text-white font-semibold">{project.metrics[0]?.value}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-chrome-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/software-portfolio"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-mono uppercase tracking-wider border border-white/10 transition-all"
                    >
                      View Specs & Architecture
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEDICATED SPOTLIGHT 2: Cinematic Video & Growth Marketing Showcase */}
      <section className="py-24 sm:py-32 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-chrome-300 uppercase tracking-widest mb-3">
                <Video className="w-3.5 h-3.5 text-white" />
                Visual Production & Performance Engine
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight">
                Cinematic Video & Marketing
              </h2>
              <p className="text-chrome-300 max-w-xl text-sm sm:text-base mt-2">
                Hollywood-grade 8K cinematography, viral short-form hooks, and conversion-optimized performance paid ad creatives.
              </p>
            </div>

            <Link
              to="/video-portfolio"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white hover:text-chrome-200 group px-5 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all self-start md:self-auto"
            >
              <span>Explore Video Showcase ({videoPortfolio.length})</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Marketing Highlight Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-display font-bold text-white">
                {marketingSummary.totalViewsGenerated}
              </div>
              <div className="text-xs font-mono text-chrome-400 uppercase mt-1">Total Verified Views</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-display font-bold text-emerald-400">
                {marketingSummary.averageROAS}
              </div>
              <div className="text-xs font-mono text-emerald-300/80 uppercase mt-1">Average Client ROAS</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-display font-bold text-white">
                {marketingSummary.totalRevenueGenerated}
              </div>
              <div className="text-xs font-mono text-chrome-400 uppercase mt-1">Ad Revenue Scaled</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-display font-bold text-white">
                {marketingSummary.averageAudienceRetention}
              </div>
              <div className="text-xs font-mono text-chrome-400 uppercase mt-1">3-Sec Hook Retention</div>
            </div>
          </div>

          {/* Video Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredVideos.map((video) => (
              <motion.div
                key={video.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl bg-obsidian-950/80 border border-white/10 overflow-hidden flex flex-col hover:border-white/25 transition-all shadow-xl"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 group-hover:bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/30 transition-transform group-hover:scale-110">
                      <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white">
                    <span className="px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/10">
                      {video.category}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/10">
                      {video.duration}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-display font-medium text-white group-hover:text-chrome-100 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-xs font-mono text-chrome-400 mt-1">
                      Brand: <span className="text-chrome-200">{video.brand}</span>
                    </p>
                    <p className="text-xs text-chrome-300 mt-2 line-clamp-2 leading-relaxed">
                      {video.shortDesc}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-white/5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-chrome-400">Verified Impact:</span>
                      <span className="text-emerald-400 font-semibold">{video.marketingStats.roas}</span>
                    </div>

                    <Link
                      to="/video-portfolio"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-mono uppercase tracking-wider border border-white/10 transition-all"
                    >
                      Watch Film & Case Study
                      <Play className="w-3 h-3 fill-white" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Execution Process */}
      <Process />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};
