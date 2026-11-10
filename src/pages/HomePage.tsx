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
import { videoPortfolio } from '../data/videoPortfolio';
import { Code2, Video, ArrowRight, Play } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { SEO } from '../components/SEO';

const HOME_VIDEO_THEMES = [
  {
    themeName: 'Sapphire Azure',
    cardBg: 'from-[#030d22] via-[#050b18] to-[#010308]',
    border: 'border-cyan-400/50 hover:border-cyan-300',
    glow: 'shadow-[0_20px_50px_-10px_rgba(6,182,212,0.4)]',
    badgeVariant: 'cyan' as const,
    accentText: 'text-cyan-300',
    btnVariant: 'cyber' as const
  },
  {
    themeName: 'Cyber Emerald',
    cardBg: 'from-[#021c13] via-[#04130d] to-[#010308]',
    border: 'border-emerald-400/50 hover:border-emerald-300',
    glow: 'shadow-[0_20px_50px_-10px_rgba(16,185,129,0.4)]',
    badgeVariant: 'emerald' as const,
    accentText: 'text-emerald-300',
    btnVariant: 'cyber' as const
  },
  {
    themeName: 'Amethyst Violet',
    cardBg: 'from-[#170529] via-[#0e0419] to-[#010308]',
    border: 'border-violet-400/50 hover:border-violet-300',
    glow: 'shadow-[0_20px_50px_-10px_rgba(139,92,246,0.4)]',
    badgeVariant: 'violet' as const,
    accentText: 'text-violet-300',
    btnVariant: 'cyber' as const
  }
];

export const HomePage: React.FC = () => {
  const featuredSoftware = softwareProjects.slice(0, 3);
  const featuredVideos = videoPortfolio.slice(0, 3);

  return (
    <div className="bg-[#020408] text-white selection:bg-cyan-400 selection:text-black">
      <SEO
        title="Kravinoffs™ | Enterprise Software Engineering & Broadcast 8K Cinema"
        description="Kravinoffs engineers mission-critical enterprise software, low-latency financial systems, and broadcast-grade 8K commercial cinema. Minimal overhead, maximum impact."
        canonical="https://kravinoffs.agency/"
      />
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Core Services Section */}
      <Services />

      {/* SPOTLIGHT 1: Software Systems Showcase */}
      <section className="py-20 sm:py-28 bg-[#04060d] border-y border-white/10 relative overflow-hidden">
        {/* Subtle Ambient Backlight */}
        <div className="absolute top-1/2 left-10 w-[450px] h-[450px] rounded-full bg-cyan-600/10 blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-3">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                Software Builds
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
                Software & Cloud Systems
              </h2>
              <p className="text-slate-300 max-w-xl text-sm sm:text-base mt-2 font-normal">
                Low-latency fintech terminals, autonomous AI logistics, and cloud platforms.
              </p>
            </div>

            <Link to="/software-portfolio">
              <Button variant="outline" size="sm" className="gap-2">
                <span>All Software ({softwareProjects.length})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>

          {/* Software Cards: Title + Preview + Type + Quality ONLY */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredSoftware.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="group relative rounded-2xl bg-gradient-to-b from-[#0a0f1d] to-[#04070f] border-2 border-white/10 hover:border-cyan-400/40 overflow-hidden flex flex-col transition-all shadow-xl hover:shadow-[0_15px_40px_-10px_rgba(6,182,212,0.3)]"
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

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

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

                  <Link to="/software-portfolio" className="w-full">
                    <Button variant="outline" size="sm" className="w-full gap-2 text-xs">
                      <span>View System Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPOTLIGHT 2: Cinematic Video Showcase with Video & Media Color Themes */}
      <section className="py-20 sm:py-28 bg-[#010204] relative overflow-hidden border-b border-white/10">
        {/* Subtle Ambient Backlight */}
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-3">
                <Video className="w-3.5 h-3.5 text-cyan-400" />
                Cinema & Media Showcase
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
                Cinematic Video Production
              </h2>
              <p className="text-slate-300 max-w-xl text-sm sm:text-base mt-2 font-normal">
                8K RED cinema, procedural 3D motion, and performance commercials.
              </p>
            </div>

            <Link to="/video-portfolio">
              <Button variant="cyber" size="sm" className="gap-2">
                <span>Explore Video Layers ({videoPortfolio.length})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>

          {/* Video Cards with identical rich Video & Media color palettes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredVideos.map((video, idx) => {
              const theme = HOME_VIDEO_THEMES[idx % HOME_VIDEO_THEMES.length];

              return (
                <motion.div
                  key={video.id}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  className={`group relative rounded-2xl bg-gradient-to-br ${theme.cardBg} border-2 ${theme.border} ${theme.glow} overflow-hidden flex flex-col backdrop-blur-xl transition-all duration-300`}
                >
                  <div className="relative aspect-video overflow-hidden bg-black/95">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-black/60 group-hover:bg-white backdrop-blur-md flex items-center justify-center border border-white/30 transition-all group-hover:scale-110 shadow-xl">
                        <Play className="w-4 h-4 fill-white group-hover:fill-black text-white group-hover:text-black ml-0.5 transition-colors" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 text-[10px] font-mono text-white px-2.5 py-0.5 rounded-full bg-black/85 backdrop-blur-md border border-white/20 font-semibold">
                      {video.duration}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <h3 className="text-lg font-display font-bold text-white group-hover:text-neutral-100 transition-colors">
                      {video.title}
                    </h3>

                    {/* Strict Metadata: Type & Quality Styled with Theme Badges */}
                    <div className="space-y-2 pt-2 border-t border-white/10 text-xs font-mono">
                      <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-between">
                        <span className="text-slate-400 text-[11px] uppercase">Type:</span>
                        <Badge variant={theme.badgeVariant} className="text-[10px] uppercase">
                          {video.type || video.category}
                        </Badge>
                      </div>

                      <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-between">
                        <span className="text-slate-400 text-[11px] uppercase">Quality:</span>
                        <span className={`font-semibold truncate ml-2 ${theme.accentText}`}>
                          {video.quality || video.resolution}
                        </span>
                      </div>
                    </div>

                    <Link to="/video-portfolio" className="w-full">
                      <Button variant={theme.btnVariant} size="sm" className="w-full gap-2 text-xs font-bold">
                        <span>Watch Cinema Layer</span>
                        <Play className="w-3 h-3 fill-current" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
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
