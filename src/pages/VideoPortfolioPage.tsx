import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Play, Volume2, VolumeX, ArrowRight, Video, Maximize2, 
  MousePointer, Sparkles 
} from 'lucide-react';
import { VideoProject } from '../types';
import { videoPortfolio as fallbackVideos, VIDEO_CATEGORIES } from '../data/videoPortfolio';
import { VideoModal } from '../components/VideoModal';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

interface LayerTheme {
  themeName: string;
  badgeVariant: 'cyan' | 'emerald' | 'violet' | 'rose' | 'amber' | 'lime';
  cardBg: string;
  borderBase: string;
  glow: string;
  accentText: string;
  spotlightRgba: string;
  borderGlowRgba: string;
  ambientOrb: string;
  waveColor: string;
  btnVariant: 'cyber' | 'glow' | 'default';
}

const LAYER_THEMES: LayerTheme[] = [
  {
    themeName: 'Sapphire Azure',
    badgeVariant: 'cyan',
    cardBg: 'from-[#030d22] via-[#050b18] to-[#010308]',
    borderBase: 'border-cyan-400/50 hover:border-cyan-300',
    glow: 'shadow-[0_25px_65px_-10px_rgba(6,182,212,0.45)]',
    accentText: 'text-cyan-300',
    spotlightRgba: 'rgba(6, 182, 212, 0.38)',
    borderGlowRgba: 'rgba(6, 182, 212, 0.95)',
    ambientOrb: 'bg-cyan-500/25',
    waveColor: 'bg-cyan-400',
    btnVariant: 'cyber'
  },
  {
    themeName: 'Cyber Emerald',
    badgeVariant: 'emerald',
    cardBg: 'from-[#021c13] via-[#04130d] to-[#010308]',
    borderBase: 'border-emerald-400/50 hover:border-emerald-300',
    glow: 'shadow-[0_25px_65px_-10px_rgba(16,185,129,0.45)]',
    accentText: 'text-emerald-300',
    spotlightRgba: 'rgba(16, 185, 129, 0.38)',
    borderGlowRgba: 'rgba(16, 185, 129, 0.95)',
    ambientOrb: 'bg-emerald-500/25',
    waveColor: 'bg-emerald-400',
    btnVariant: 'cyber'
  },
  {
    themeName: 'Amethyst Violet',
    badgeVariant: 'violet',
    cardBg: 'from-[#170529] via-[#0e0419] to-[#010308]',
    borderBase: 'border-violet-400/50 hover:border-violet-300',
    glow: 'shadow-[0_25px_65px_-10px_rgba(139,92,246,0.45)]',
    accentText: 'text-violet-300',
    spotlightRgba: 'rgba(139, 92, 246, 0.38)',
    borderGlowRgba: 'rgba(139, 92, 246, 0.95)',
    ambientOrb: 'bg-violet-500/25',
    waveColor: 'bg-violet-400',
    btnVariant: 'cyber'
  },
  {
    themeName: 'Crimson Cinema',
    badgeVariant: 'rose',
    cardBg: 'from-[#23040c] via-[#140307] to-[#010308]',
    borderBase: 'border-rose-400/50 hover:border-rose-300',
    glow: 'shadow-[0_25px_65px_-10px_rgba(244,63,94,0.45)]',
    accentText: 'text-rose-300',
    spotlightRgba: 'rgba(244, 63, 94, 0.38)',
    borderGlowRgba: 'rgba(244, 63, 94, 0.95)',
    ambientOrb: 'bg-rose-500/25',
    waveColor: 'bg-rose-400',
    btnVariant: 'glow'
  },
  {
    themeName: 'Titanium Gold',
    badgeVariant: 'amber',
    cardBg: 'from-[#231402] via-[#140b02] to-[#010308]',
    borderBase: 'border-amber-400/50 hover:border-amber-300',
    glow: 'shadow-[0_25px_65px_-10px_rgba(245,158,11,0.45)]',
    accentText: 'text-amber-300',
    spotlightRgba: 'rgba(245, 158, 11, 0.38)',
    borderGlowRgba: 'rgba(245, 158, 11, 0.95)',
    ambientOrb: 'bg-amber-500/25',
    waveColor: 'bg-amber-400',
    btnVariant: 'glow'
  },
  {
    themeName: 'Electric Lime',
    badgeVariant: 'lime',
    cardBg: 'from-[#171f02] via-[#0d1201] to-[#010308]',
    borderBase: 'border-lime-400/50 hover:border-lime-300',
    glow: 'shadow-[0_25px_65px_-10px_rgba(204,255,0,0.45)]',
    accentText: 'text-lime-300',
    spotlightRgba: 'rgba(204, 255, 0, 0.34)',
    borderGlowRgba: 'rgba(204, 255, 0, 0.95)',
    ambientOrb: 'bg-lime-500/25',
    waveColor: 'bg-lime-400',
    btnVariant: 'glow'
  }
];

// Interactive Stacked Layer Card with Radix/Shadcn Badge + Audio Equalizer Motion
interface StackedCardProps {
  video: VideoProject;
  index: number;
  total: number;
  theme: LayerTheme;
  isMuted: boolean;
  onToggleMute: (e: React.MouseEvent) => void;
  onSelectVideo: () => void;
}

const ShadcnMotionStackedCard: React.FC<StackedCardProps> = ({
  video,
  index,
  total,
  theme,
  isMuted,
  onToggleMute,
  onSelectVideo
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Framer Motion Scroll Progress for stacking physics
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Previous card scales and dims as next card stacks directly over it
  const cardScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 0.95, 0.65]);

  // Mouse interaction state for cursor spotlight & 3D tilt
  const [mousePos, setMousePos] = useState<{ x: number; y: number; isHovered: boolean }>({
    x: 0,
    y: 0,
    isHovered: false
  });
  const [tilt, setTilt] = useState<{ rx: number; ry: number }>({ rx: 0, ry: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normX = (x / rect.width) - 0.5;
    const normY = (y / rect.height) - 0.5;
    const rx = normY * -6;
    const ry = normX * 6;

    setMousePos({ x, y, isHovered: true });
    setTilt({ rx, ry });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, isHovered: false }));
    setTilt({ rx: 0, ry: 0 });
  };

  const topOffset = 88 + index * 16;

  return (
    <div
      ref={containerRef}
      className="relative w-full pb-20 sm:pb-32"
      style={{
        zIndex: index + 10
      }}
    >
      <motion.div
        style={{
          scale: cardScale,
          opacity: cardOpacity,
          top: `${topOffset}px`,
          transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transition: mousePos.isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`sticky rounded-3xl bg-gradient-to-br ${theme.cardBg} border-2 ${theme.borderBase} ${theme.glow} p-5 sm:p-8 backdrop-blur-2xl overflow-hidden shadow-2xl transition-all duration-300 group`}
      >
        {/* Animated Shimmer Top Edge */}
        <div className="absolute top-0 inset-x-0 h-[1.5px] border-shimmer opacity-70" />

        {/* Dynamic Cursor Spotlight Layer */}
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            opacity: mousePos.isHovered ? 1 : 0,
            background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, ${theme.spotlightRgba}, transparent 65%)`
          }}
        />

        {/* Dynamic Border Glow Mask Layer */}
        <div
          className="pointer-events-none absolute inset-0 z-0 rounded-3xl transition-opacity duration-300"
          style={{
            opacity: mousePos.isHovered ? 1 : 0,
            background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, ${theme.borderGlowRgba}, transparent 70%)`,
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMaskComposite: 'xor',
            padding: '2px'
          }}
        />

        {/* Card Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-white/15 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono tracking-widest text-slate-300 uppercase font-semibold">
                Layer 0{index + 1} of 0{total}
              </span>
              <span className="text-[10px] font-mono text-slate-400">•</span>
              <span className={`text-[11px] font-mono ${theme.accentText} uppercase tracking-wider font-bold`}>
                {theme.themeName}
              </span>
            </div>
            <h2 className="text-xl sm:text-3xl font-heading font-bold text-white tracking-tight drop-shadow-md">
              {video.title}
            </h2>
          </div>

          {/* Metadata Pills */}
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant={theme.badgeVariant} className="text-xs px-3 py-1 font-semibold uppercase tracking-wider">
              Type: {video.type || video.category}
            </Badge>

            <Badge variant="outline" className="text-xs px-3 py-1 font-semibold uppercase tracking-wider bg-white/5 border-white/20 text-white shadow-inner">
              Quality: {video.quality || video.resolution}
            </Badge>
          </div>
        </div>

        {/* Cinema Video Frame with Animated Audio Waveform Overlay */}
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/95 border-2 border-white/15 group-hover:border-white/30 transition-all z-10 shadow-2xl">
          <video
            src={video.videoUrl}
            poster={video.thumbnail}
            playsInline
            muted={isMuted}
            autoPlay
            loop
            className="w-full h-full object-cover"
          />

          {/* Animated Audio Equalizer Wavebars (Top Left) */}
          <div className="absolute top-3.5 left-3.5 z-20 flex items-end gap-1 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 shadow-lg">
            <span className={`w-1 h-3 rounded-full ${theme.waveColor} animate-pulse`} style={{ animationDuration: '0.6s' }} />
            <span className={`w-1 h-4 rounded-full ${theme.waveColor} animate-pulse`} style={{ animationDuration: '0.4s' }} />
            <span className={`w-1 h-2 rounded-full ${theme.waveColor} animate-pulse`} style={{ animationDuration: '0.8s' }} />
            <span className={`w-1 h-3.5 rounded-full ${theme.waveColor} animate-pulse`} style={{ animationDuration: '0.5s' }} />
            <span className="text-[10px] font-mono text-white font-medium ml-1">4K CINEMA</span>
          </div>

          {/* Top Controls: Mute & Expand */}
          <div className="absolute top-3.5 right-3.5 flex items-center gap-2 z-20">
            <button
              onClick={onToggleMute}
              className="p-2.5 rounded-full bg-black/80 hover:bg-black text-white border border-white/25 backdrop-blur-md transition-all hover:scale-110 shadow-lg"
              title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-slate-300" />
              ) : (
                <Volume2 className="w-4 h-4 text-white" />
              )}
            </button>

            <button
              onClick={onSelectVideo}
              className="p-2.5 rounded-full bg-black/80 hover:bg-black text-white border border-white/25 backdrop-blur-md transition-all hover:scale-110 shadow-lg"
              title="Fullscreen Cinema"
            >
              <Maximize2 className="w-4 h-4 text-slate-300" />
            </button>
          </div>

          {/* Bottom Interactive Bar */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/95 via-black/50 to-transparent flex items-center justify-between text-xs font-mono z-20">
            <div className="flex items-center gap-2.5 text-white font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#10B981]" />
              <span className="font-semibold">{video.duration}</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-300">{video.aspectRatio} Cinema</span>
            </div>

            <Button
              onClick={onSelectVideo}
              variant="default"
              size="sm"
              className="gap-2 bg-white text-black hover:bg-slate-200 shadow-xl font-bold tracking-wider"
            >
              <Play className="w-3.5 h-3.5 fill-black text-black" />
              <span>Watch Cut</span>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const VideoPortfolioPage: React.FC = () => {
  const [videos] = useState<VideoProject[]>(fallbackVideos);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);
  const [mutedStates, setMutedStates] = useState<{ [key: string]: boolean }>({});

  const filteredVideos = useMemo(() => {
    if (selectedCategory === 'All') return videos;
    return videos.filter((v) =>
      v.category.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  }, [videos, selectedCategory]);

  const toggleMute = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setMutedStates((prev) => ({
      ...prev,
      [id]: prev[id] === undefined ? false : !prev[id]
    }));
  };

  return (
    <div className="pt-28 pb-32 min-h-screen bg-[#020408] text-white relative selection:bg-cyan-400 selection:text-black">
      <SEO
        title="Commercial Video Production Portfolio | Lightyear Studios"
        description="Commercial brand films, hospitality showcases, product spotlights, and high-retention video content produced up to 4K UHD resolution by Lightyear Studios."
        canonical="https://kravinoffs.agency/video-portfolio"
      />

      {/* Saturated Dynamic Floating Light Orbs */}
      <div className="fixed top-20 left-10 w-[550px] h-[550px] rounded-full bg-cyan-600/20 blur-[150px] pointer-events-none animate-orb-1" />
      <div className="fixed top-1/2 right-10 w-[600px] h-[600px] rounded-full bg-violet-600/20 blur-[160px] pointer-events-none animate-orb-2" />
      <div className="fixed bottom-10 left-1/3 w-[500px] h-[500px] rounded-full bg-emerald-600/18 blur-[140px] pointer-events-none animate-orb-3" />

      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-4 pb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-4 shadow-sm">
            <Video className="w-3.5 h-3.5 text-cyan-400" />
            Commercial Video & Visual Production
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tight leading-[1.05] drop-shadow-xl uppercase">
            Cinematic Precision. <br />
            <span className="text-gradient-cyan">Stacking Layers.</span>
          </h1>

          <p className="mt-4 text-slate-200 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
            Commercial brand films, hospitality showcases, product spotlights, and high-retention social media content produced up to 4K UHD resolution. Scroll down to experience stacked layer pinning and mouse-reactive color transitions.
          </p>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-white/15 text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-white font-semibold">Scroll-Stacking Layer Pinning</span>
            </div>
            <div>•</div>
            <div className="flex items-center gap-2">
              <MousePointer className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-white font-semibold">Mouse-Reactive Color Shift</span>
            </div>
            <div>•</div>
            <div>
              <span className="text-white font-semibold">Up to 4K UHD</span> Cinema Optics
            </div>
          </div>
        </motion.div>

        {/* Category Selector */}
        <div className="flex flex-wrap items-center gap-2.5 mt-8 pt-4">
          {VIDEO_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-xs font-mono tracking-wider font-semibold transition-all duration-200 border ${
                  isActive
                    ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.4)]'
                    : 'bg-white/[0.04] text-slate-300 border-white/15 hover:border-white/40 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* STACKED SCROLLING LAYERS PINNING CONTAINER */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10 py-6">
        <div className="relative">
          {filteredVideos.map((video, index) => {
            const theme = LAYER_THEMES[index % LAYER_THEMES.length];
            const isMuted = mutedStates[video.id] ?? true;

            return (
              <ShadcnMotionStackedCard
                key={video.id}
                video={video}
                index={index}
                total={filteredVideos.length}
                theme={theme}
                isMuted={isMuted}
                onToggleMute={(e) => toggleMute(video.id, e)}
                onSelectVideo={() => setSelectedVideo(video)}
              />
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 mt-24 text-center relative z-10">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-white/[0.05] to-black/80 border-2 border-white/20 backdrop-blur-2xl shadow-[0_0_50px_rgba(255,255,255,0.08)]">
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight uppercase">
            Ready to Create High-Impact Commercial Video?
          </h2>
          <p className="text-sm sm:text-base text-slate-200 mt-2 max-w-md mx-auto">
            Direct production scopes, up to 4K UHD master delivery, and transparent Australian AUD pricing.
          </p>
          <div className="mt-8 flex justify-center">
            <Link to="/contact">
              <Button variant="glow" size="lg" className="gap-2.5 font-bold">
                <span>Initiate Video Project</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Cinematic Modal Player */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
};
