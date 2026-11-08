import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Video, Play, Sparkles, TrendingUp, BarChart3, Eye, Target, 
  Layers, ArrowRight, CheckCircle2, DollarSign, Calculator, Share2,
  Camera, Film, Award, ShieldCheck, Clock, MessageCircle, ChevronRight,
  Flame, Zap, Users, PlayCircle, Scissors, Radio, Clapperboard, ChevronDown,
  Send, Compass
} from 'lucide-react';
import { VideoProject, MarketingCampaignSummary } from '../types';
import { videoPortfolio as fallbackVideos, marketingSummary as fallbackSummary, VIDEO_CATEGORIES } from '../data/videoPortfolio';
import { VideoModal } from '../components/VideoModal';
import { VideoStaircase } from '../components/VideoStaircase';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const VideoPortfolioPage: React.FC = () => {
  const [videos, setVideos] = useState<VideoProject[]>(fallbackVideos);
  const [summary, setSummary] = useState<MarketingCampaignSummary>(fallbackSummary);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);
  const [isApiConnected, setIsApiConnected] = useState<boolean>(false);

  // Interactive ROAS & Growth Calculator State
  const [calcBudget, setCalcBudget] = useState<number>(30000);
  const estimatedROAS = 5.4;
  const estimatedRevenue = Math.round(calcBudget * estimatedROAS);
  const estimatedImpressions = Math.round((calcBudget / 4.2) * 1000);
  const estimatedQualifiedLeads = Math.round(calcBudget * 0.038);

  // Fetch from serverless API with fallback
  useEffect(() => {
    let isMounted = true;
    const fetchApiVideos = async () => {
      try {
        const res = await fetch('/api/video-portfolio');
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.videos && isMounted) {
            setVideos(data.videos);
            if (data.summary) setSummary(data.summary);
            setIsApiConnected(true);
          }
        }
      } catch (err) {
        console.warn('Using client-side fallback video data:', err);
      }
    };

    fetchApiVideos();
    return () => { isMounted = false; };
  }, []);

  // Filtered videos
  const filteredVideos = useMemo(() => {
    if (selectedCategory === 'All') return videos;
    return videos.filter((v) =>
      v.category.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  }, [videos, selectedCategory]);

  const productionServices = [
    {
      title: 'Commercial Videos',
      desc: 'Broadcast-quality 8K cinema commercials, TV ad spots, and high-impact brand campaign films.',
      icon: Video,
    },
    {
      title: 'Social Media Content',
      desc: 'High-hook viral vertical reels (9:16) engineered for TikTok, Instagram Reels, and YouTube Shorts.',
      icon: Play,
    },
    {
      title: 'Corporate Films',
      desc: 'High-level investor presentations, company culture documentaries, and executive keynotes.',
      icon: Clapperboard,
    },
    {
      title: 'Drone Videography',
      desc: 'Licensed cinematic FPV and aerial 8K landscape footage using high-stability camera drones.',
      icon: Compass,
    },
    {
      title: 'Video Editing & Post-Production',
      desc: 'Hollywood-level color grading in DaVinci Resolve Studio, sound design, and 3D CGI procedural VFX.',
      icon: Scissors,
    },
    {
      title: 'Live Streaming',
      desc: 'Multi-camera broadcast live switching, low-latency live webcasts, and hybrid corporate launches.',
      icon: Radio,
    },
  ];

  return (
    <div className="pt-24 pb-24 sm:pb-32 min-h-screen bg-obsidian-950 text-chrome-200 relative overflow-hidden">
      <SEO
        title="8K Commercial Video Production & Growth Marketing Studio | Kravinoffs"
        description="Award-winning commercial video production, 8K RED cinema shooting, 3D CGI animation, viral reels editing, and paid marketing campaigns producing 70M+ views and 5.4x verified ROAS."
        canonical="https://kravinoffs.agency/video-portfolio"
      />

      {/* Atmospheric Olive & Electric-Lime Lighting Layers */}
      <div className="fixed inset-0 bg-radial-glow pointer-events-none opacity-20" />
      <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-olive-700/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-electric-lime/[0.04] rounded-full blur-[160px] pointer-events-none" />

      {/* ========================================================= */}
      {/* SECTION 1: HERO WITH ASCENDING VIDEO STAIRCASE & GLOWING PORTAL */}
      {/* ========================================================= */}
      <section className="relative min-h-[92vh] flex flex-col justify-between pt-8 sm:pt-14 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center my-auto relative z-10">
          
          {/* Left Column: Hero Narrative & Direct Booking CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 text-xs font-mono tracking-[0.25em] text-chrome-300 uppercase mb-5"
            >
              <span>IDEAS</span>
              <span className="text-electric-lime font-bold">•</span>
              <span>STORIES</span>
              <span className="text-electric-lime font-bold">•</span>
              <span>IMPACT</span>
            </motion.div>

            {/* Headline with Electric-Lime Highlight */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading text-3xl sm:text-5xl lg:text-[4.2rem] font-black tracking-tight leading-[1.06] text-white uppercase mb-6"
            >
              Turning Ideas <br />
              Into <span className="text-electric-lime drop-shadow-[0_0_25px_rgba(204,255,0,0.4)]">Visual Stories</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-chrome-300 max-w-lg leading-relaxed font-normal mb-8"
            >
              Professional video production services to bring your brand, business and vision to life.
            </motion.p>

            {/* Dual Segmented Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <a
                href="#our-work"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-electric-lime hover:bg-white text-black font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-lg shadow-electric-lime/25 hover:scale-105 active:scale-95"
              >
                <span>Explore Our Work</span>
                <Play className="w-3.5 h-3.5 fill-black" />
              </a>

              <button
                onClick={() => setSelectedVideo(videos[0])}
                className="inline-flex items-center gap-2.5 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-black/60 hover:bg-white/10 text-white border border-olive-400/40 hover:border-electric-lime font-medium text-xs tracking-wider uppercase transition-all backdrop-blur-md"
              >
                <div className="w-6 h-6 rounded-full bg-electric-lime/20 border border-electric-lime flex items-center justify-center">
                  <Play className="w-3 h-3 fill-electric-lime text-electric-lime ml-0.5" />
                </div>
                <span>Watch Showreel</span>
              </button>
            </motion.div>

            {/* Verified Trust Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap items-center gap-3 sm:gap-5 mt-8 sm:mt-10 pt-6 border-t border-white/[0.08] text-xs font-mono text-chrome-400"
            >
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-electric-lime animate-pulse" />
                <span className="text-white font-medium">8K RED Fleet</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-electric-lime">●</span>
                <span>5.4x Verified Avg ROAS</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-electric-lime">●</span>
                <span>70M+ Views</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: The 3D Ascending Video Staircase Leading to the Glowing Play Portal */}
          <div className="lg:col-span-7 relative">
            <VideoStaircase videos={videos} onSelectVideo={setSelectedVideo} />
          </div>

        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="mx-auto flex flex-col items-center gap-2 text-xs font-mono tracking-widest text-chrome-400 uppercase mt-4 pointer-events-none"
        >
          <div className="w-5 h-8 rounded-full border-2 border-electric-lime/50 flex items-start justify-center p-1">
            <div className="w-1.5 h-2 bg-electric-lime rounded-full animate-bounce" />
          </div>
          <span className="text-[10px] text-chrome-400">Scroll Down ↓</span>
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: ABOUT / IMPACT SECTION ("More Than Videos — We Create Impact.") */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 relative z-10 border-t border-olive-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl bg-gradient-to-br from-olive-950/60 via-obsidian-900/80 to-black border border-olive-600/30 p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
            {/* Ambient Olive Glow in background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-electric-lime/[0.05] rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column Narrative */}
              <div className="lg:col-span-5 space-y-6">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-sans font-semibold text-black bg-olive-300 border border-electric-lime shadow-md">
                  About Kravinoffs
                </span>

                <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-[1.08]">
                  More Than Videos — <br />
                  <span className="text-electric-lime drop-shadow-[0_0_20px_rgba(204,255,0,0.35)]">
                    We Create Impact.
                  </span>
                </h2>

                <p className="text-sm sm:text-base text-chrome-300 leading-relaxed font-normal">
                  Kravinoffs is a creative video production studio focused on storytelling, brand growth and visual excellence. From concept to final cut, we turn your ideas into powerful content.
                </p>

                <div className="pt-2">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-electric-lime hover:text-black text-white font-medium text-xs tracking-wider uppercase transition-all duration-200 border border-white/15"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Featured Video Studio Rig & Player Card */}
              <div className="lg:col-span-7">
                <div 
                  onClick={() => setSelectedVideo(videos[1])}
                  className="relative rounded-2xl overflow-hidden aspect-video bg-black border-2 border-olive-500/50 hover:border-electric-lime shadow-[0_0_40px_rgba(105,149,44,0.3)] cursor-pointer group transition-all duration-300"
                >
                  <img
                    src="/assets/video-production.jpg"
                    alt="Kravinoffs Studio Cinema Shoot"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-electric-lime/30 group-hover:bg-electric-lime border-2 border-electric-lime flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-[0_0_35px_#CCFF00]">
                      <Play className="w-7 sm:w-8 h-7 sm:h-8 fill-black text-black ml-1" />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
                    <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-electric-lime">
                      8K Cinema Master Reel
                    </span>
                    <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20">
                      02:15
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: SERVICES SECTION ("Complete Video Production Solutions") */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-sans font-semibold text-black bg-olive-300 border border-electric-lime shadow-md">
              Our Services
            </span>

            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Complete Video Production <span className="text-electric-lime drop-shadow-[0_0_20px_rgba(204,255,0,0.35)]">Solutions</span>
            </h2>
          </div>

          {/* 6 Clean Production Service Cards with Glowing Olive Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productionServices.map((svc, i) => {
              const IconComp = svc.icon;
              return (
                <div
                  key={i}
                  className="p-7 rounded-3xl bg-gradient-to-b from-olive-950/40 via-obsidian-900/60 to-black border border-olive-700/30 hover:border-electric-lime hover:shadow-[0_0_30px_rgba(204,255,0,0.2)] transition-all duration-300 group flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-olive-800/40 border border-olive-500/50 group-hover:border-electric-lime group-hover:bg-electric-lime/20 flex items-center justify-center transition-all duration-300 shadow-md">
                      <IconComp className="w-6 h-6 text-electric-lime group-hover:scale-110 transition-transform" />
                    </div>

                    <h3 className="text-xl font-display font-bold text-white group-hover:text-electric-lime transition-colors">
                      {svc.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-chrome-300 leading-relaxed font-normal">
                      {svc.desc}
                    </p>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-electric-lime hover:text-white uppercase tracking-wider pt-2 transition-colors self-start"
                  >
                    <span>Request Scope</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: OUR WORK SECTION ("Projects That Speak for Us") */}
      {/* ========================================================= */}
      <section id="our-work" className="py-20 sm:py-28 relative z-10 border-t border-olive-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-sans font-semibold text-black bg-olive-300 border border-electric-lime shadow-md mb-4">
                Our Work
              </span>

              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-[1.08]">
                Projects That <br />
                <span className="text-electric-lime drop-shadow-[0_0_20px_rgba(204,255,0,0.35)]">
                  Speak for Us
                </span>
              </h2>

              <p className="text-sm sm:text-base text-chrome-300 mt-3 max-w-md">
                Explore our latest work and see how we bring stories to life.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-electric-lime hover:text-black text-white font-medium text-xs tracking-wider uppercase transition-all duration-200 border border-white/15"
              >
                <span>View Portfolio & Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Featured Works Carousel / Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.slice(0, 4).map((vid) => (
              <motion.div
                key={vid.id}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedVideo(vid)}
                className="group relative rounded-2xl overflow-hidden bg-black border-2 border-olive-800/60 hover:border-electric-lime cursor-pointer transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(204,255,0,0.25)] flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-electric-lime/30 group-hover:bg-electric-lime border border-electric-lime flex items-center justify-center transition-all group-hover:scale-110 shadow-lg">
                      <Play className="w-5 h-5 fill-black text-black ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/80 backdrop-blur-md text-electric-lime border border-electric-lime/30">
                      {vid.marketingStats.roas}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-b from-neutral-950 to-black space-y-1">
                  <h4 className="text-sm font-display font-bold text-white group-hover:text-electric-lime transition-colors truncate">
                    {vid.title}
                  </h4>
                  <p className="text-[11px] font-mono text-chrome-400">
                    {vid.brand} • {vid.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: AUDITED PERFORMANCE DATA & ROAS ESTIMATOR */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 relative z-10 border-t border-olive-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-r from-olive-950/70 via-obsidian-900 to-black border border-olive-600/40 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-8 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Calculator className="w-5 h-5 text-electric-lime" />
                  <span className="text-xs font-mono uppercase tracking-widest text-electric-lime">
                    Interactive Campaign ROI & Growth Calculator
                  </span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-display font-bold text-white">
                  Simulate Your Video Marketing Return
                </h3>
              </div>

              <span className="text-xs font-mono text-chrome-400 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 self-start md:self-auto">
                Based on audited 5.4x agency benchmark
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Slider Input Column */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-chrome-300">
                      Monthly Video Production & Paid Media Budget
                    </label>
                    <span className="text-2xl sm:text-3xl font-display font-bold text-electric-lime">
                      ${calcBudget.toLocaleString()}
                    </span>
                  </div>

                  <input
                    type="range"
                    min="5000"
                    max="200000"
                    step="5000"
                    value={calcBudget}
                    onChange={(e) => setCalcBudget(Number(e.target.value))}
                    className="w-full h-2.5 bg-olive-900 rounded-lg appearance-none cursor-pointer accent-electric-lime"
                  />

                  <div className="flex justify-between text-[11px] font-mono text-chrome-400 mt-2">
                    <span>$5,000 (Emerging)</span>
                    <span>$50,000 (Growth Engine)</span>
                    <span>$200,000+ (Market Dominance)</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs font-mono text-chrome-300 pt-2">
                  <div className="p-4 rounded-2xl bg-black/60 border border-olive-700/30">
                    <span className="text-chrome-400 block text-[11px]">Est. High-Intent Views:</span>
                    <strong className="text-white text-base">~{Math.round(estimatedImpressions / 1000)}k Views</strong>
                  </div>
                  <div className="p-4 rounded-2xl bg-black/60 border border-olive-700/30">
                    <span className="text-chrome-400 block text-[11px]">Est. Qualified Inquiries:</span>
                    <strong className="text-electric-lime text-base">~{estimatedQualifiedLeads} Inquiries</strong>
                  </div>
                </div>
              </div>

              {/* Projected Revenue Outcome Card */}
              <div className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-black/80 border border-electric-lime/40 space-y-5 text-center shadow-2xl">
                <div>
                  <div className="text-xs font-mono text-chrome-400 uppercase tracking-wider">
                    Projected Attributed Revenue
                  </div>
                  <div className="text-3xl sm:text-5xl font-display font-bold text-electric-lime mt-2 drop-shadow-[0_0_20px_rgba(204,255,0,0.4)]">
                    ${estimatedRevenue.toLocaleString()}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 space-y-2 text-xs font-mono text-chrome-300">
                  <div className="flex justify-between">
                    <span>Target ROAS Multiple:</span>
                    <span className="text-white font-semibold">{estimatedROAS}x Multiple</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Verified Views:</span>
                    <span className="text-white font-semibold">{summary.totalViewsGenerated}</span>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-electric-lime hover:bg-white text-black text-xs font-semibold uppercase tracking-wider transition-all shadow-lg shadow-electric-lime/25 hover:scale-[1.02]"
                >
                  <span>Lock In This Campaign Blueprint</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: CTA FOOTER BANNER ("Ready to Turn Your Idea Into a Visual Masterpiece?") */}
      {/* ========================================================= */}
      <section className="py-20 relative z-10 border-t border-olive-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-olive-950/80 via-olive-900/60 to-black border-2 border-olive-600/50 shadow-[0_0_50px_rgba(105,149,44,0.35)] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative overflow-hidden">
            {/* Ambient Lighting Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-electric-lime/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 max-w-xl">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-sans font-semibold text-black bg-olive-300 border border-electric-lime shadow-md">
                Let's Create Something Amazing
              </span>

              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-[1.08]">
                Ready to Turn Your Idea Into a <br />
                <span className="text-electric-lime drop-shadow-[0_0_20px_rgba(204,255,0,0.35)]">
                  Visual Masterpiece?
                </span>
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-electric-lime hover:bg-white text-black font-semibold text-xs tracking-wider uppercase transition-all shadow-xl shadow-electric-lime/30 hover:scale-105 active:scale-95"
              >
                <span>Get in Touch</span>
                <Send className="w-4 h-4 ml-0.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* Video Modal Player */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
};
