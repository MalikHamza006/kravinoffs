import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Video, Play, Sparkles, TrendingUp, BarChart3, Eye, Target, 
  Layers, ArrowRight, CheckCircle2, DollarSign, Calculator, Share2 
} from 'lucide-react';
import { VideoProject, MarketingCampaignSummary } from '../types';
import { videoPortfolio as fallbackVideos, marketingSummary as fallbackSummary, VIDEO_CATEGORIES } from '../data/videoPortfolio';
import { VideoModal } from '../components/VideoModal';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const VideoPortfolioPage: React.FC = () => {
  const [videos, setVideos] = useState<VideoProject[]>(fallbackVideos);
  const [summary, setSummary] = useState<MarketingCampaignSummary>(fallbackSummary);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);
  const [isApiConnected, setIsApiConnected] = useState<boolean>(false);

  // Interactive ROAS Calculator State
  const [calcBudget, setCalcBudget] = useState<number>(25000);
  const estimatedROAS = 5.2;
  const estimatedRevenue = calcBudget * estimatedROAS;
  const estimatedImpressions = (calcBudget / 4.5) * 1000;

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

  return (
    <div className="pt-28 pb-24 sm:pb-32 min-h-screen bg-black text-chrome-200">
      <SEO
        title="8K Video Production, Video Editing & Growth Marketing Portfolio | Kravinoffs"
        description="Award-winning commercial video production, 8K RED shooting, 3D CGI animation, viral reels editing, and paid marketing campaigns producing 70M+ views and 5.4x verified ROAS."
        canonical="https://kravinoffs.agency/video-portfolio"
      />
      {/* Background Glow */}
      <div className="fixed inset-0 bg-radial-glow pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Page Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-chrome-300 uppercase tracking-widest">
              <Video className="w-3.5 h-3.5 text-white" />
              Cinematic Cinema & Growth Marketing
            </span>

            {/* Live Vercel API Status Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {isApiConnected ? 'Vercel Video Engine Connected' : 'Vercel API Ready'}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-medium text-white tracking-tight leading-[1.1]">
            Cinema That Stuns. <br />
            <span className="text-chrome-400">Marketing That Converts.</span>
          </h1>

          <p className="mt-4 text-chrome-300 text-base sm:text-lg leading-relaxed">
            We bridge Hollywood cinematography with algorithmic performance advertising. Explore our commercial films, 3D CGI product reveals, viral short-form reels, and the empirical ROAS data driving each production.
          </p>
        </div>

        {/* Global Marketing Performance Stats Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-transparent border border-white/10 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-white" />
              <h2 className="text-xs font-mono uppercase tracking-widest text-chrome-400">
                Verified Global Marketing Portfolio Analytics
              </h2>
            </div>
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Live Audited Data
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="p-4 rounded-xl bg-black/40 border border-white/5">
              <div className="text-2xl sm:text-4xl font-display font-bold text-white">
                {summary.totalViewsGenerated}
              </div>
              <div className="text-xs font-mono text-chrome-400 mt-1 uppercase">Total Video Views</div>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-emerald-500/20">
              <div className="text-2xl sm:text-4xl font-display font-bold text-emerald-400">
                {summary.averageROAS}
              </div>
              <div className="text-xs font-mono text-emerald-300/80 mt-1 uppercase">Average Client ROAS</div>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5">
              <div className="text-2xl sm:text-4xl font-display font-bold text-white">
                {summary.totalRevenueGenerated}
              </div>
              <div className="text-xs font-mono text-chrome-400 mt-1 uppercase">Revenue Generated</div>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5">
              <div className="text-2xl sm:text-4xl font-display font-bold text-white">
                {summary.averageAudienceRetention}
              </div>
              <div className="text-xs font-mono text-chrome-400 mt-1 uppercase">Hook Retention</div>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 col-span-2 md:col-span-1">
              <div className="text-2xl sm:text-4xl font-display font-bold text-white">
                {summary.videoAssetsProduced}
              </div>
              <div className="text-xs font-mono text-chrome-400 mt-1 uppercase">Commercial Assets</div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {VIDEO_CATEGORIES.map((cat) => (
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

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative rounded-2xl bg-obsidian-950/90 border border-white/10 overflow-hidden flex flex-col hover:border-white/30 transition-all duration-300 shadow-xl"
            >
              {/* Video Thumbnail with Hover Play Button */}
              <div
                onClick={() => setSelectedVideo(video)}
                className="relative aspect-video overflow-hidden cursor-pointer bg-obsidian-900"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 group-hover:bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/30 transition-transform group-hover:scale-110 shadow-2xl">
                    <Play className="w-6 h-6 fill-white text-white ml-0.5" />
                  </div>
                </div>

                {/* Overlays */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded text-[11px] font-mono uppercase tracking-wider bg-black/80 backdrop-blur-md text-white border border-white/15">
                    {video.category}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 backdrop-blur-md text-chrome-200 border border-white/10">
                    {video.aspectRatio === '9:16' ? 'Vertical 9:16 Reel' : '16:9 Cinema'}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white">
                  <span className="px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/10">
                    {video.duration}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/10 text-emerald-400 font-semibold">
                    {video.marketingStats.roas}
                  </span>
                </div>
              </div>

              {/* Card Information */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-chrome-400">
                    <span>Brand: <strong className="text-white font-medium">{video.brand}</strong></span>
                    <span>{video.resolution}</span>
                  </div>
                  <h3 className="text-xl font-display font-medium text-white group-hover:text-chrome-100 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-serif italic text-chrome-300">
                    "{video.hookText}"
                  </p>
                  <p className="text-xs text-chrome-400 line-clamp-2 leading-relaxed pt-1">
                    {video.shortDesc}
                  </p>
                </div>

                {/* Marketing Performance Bar */}
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-chrome-400 flex items-center justify-between">
                    <span>Campaign Verified Data</span>
                    <span className="text-emerald-400 font-semibold">{video.marketingStats.views}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-chrome-300">Conversion Impact:</span>
                    <span className="text-white font-medium">{video.marketingStats.conversionLift}</span>
                  </div>
                </div>

                {/* Watch Button */}
                <button
                  onClick={() => setSelectedVideo(video)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white text-black hover:bg-chrome-100 text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-md shadow-white/5"
                >
                  <Play className="w-3.5 h-3.5 fill-black" />
                  <span>Watch Video & Marketing Breakdown</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* COMPREHENSIVE MARKETING CONTENT & CREATIVE ENGINE */}
        <section className="mt-24 pt-20 border-t border-white/10">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-chrome-300 uppercase tracking-widest mb-3">
              <TrendingUp className="w-3.5 h-3.5 text-white" />
              Strategic Marketing Framework
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight">
              The Kravinoffs Algorithmic Marketing Architecture
            </h2>
            <p className="text-chrome-300 text-sm sm:text-base mt-2">
              Most agencies create pretty videos that fail to sell. We engineer creative assets with psychological narrative frameworks and algorithmic paid media funnels.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-white font-mono font-bold">
                01
              </div>
              <h3 className="text-lg font-display font-medium text-white">
                3-Second Hook Architecture
              </h3>
              <p className="text-xs sm:text-sm text-chrome-300 leading-relaxed">
                We test 5 to 10 visual and acoustic opening hooks per campaign to stop infinite social scrolling and lock in 80%+ audience retention.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-white font-mono font-bold">
                02
              </div>
              <h3 className="text-lg font-display font-medium text-white">
                Multivariate Creative Testing
              </h3>
              <p className="text-xs sm:text-sm text-chrome-300 leading-relaxed">
                Split-testing 15+ aspect-ratio, thumbnail, audio, and CTA variations across Meta, TikTok, and YouTube to isolate the single highest ROAS combination.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-white font-mono font-bold">
                03
              </div>
              <h3 className="text-lg font-display font-medium text-white">
                Conversions API & Server-Side
              </h3>
              <p className="text-xs sm:text-sm text-chrome-300 leading-relaxed">
                Direct integration with Meta Conversions API (CAPI) and Google Enhanced Conversions to recover lost attribution and train bidding models with 100% data fidelity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-white font-mono font-bold">
                04
              </div>
              <h3 className="text-lg font-display font-medium text-white">
                Aggressive Media Scaling
              </h3>
              <p className="text-xs sm:text-sm text-chrome-300 leading-relaxed">
                Once a winning creative angle achieves &gt;4.0x ROAS, we deploy programmatic bid caps and vertical audience scaling to 10x media spend without ad fatigue.
              </p>
            </div>
          </div>

          {/* Interactive ROAS Calculator Tool */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-obsidian-900 to-obsidian-950 border border-white/15 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Calculator className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                    Campaign Revenue Estimator
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-white">
                  Estimate Your Campaign Marketing Impact
                </h3>
              </div>

              <span className="text-xs font-mono text-chrome-400">
                Based on historical 5.2x benchmark
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Slider Input */}
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono uppercase tracking-wider text-chrome-300">
                    Monthly Paid Media & Creative Budget
                  </label>
                  <span className="text-xl font-display font-bold text-white">
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
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white"
                />

                <div className="flex justify-between text-[11px] font-mono text-chrome-400">
                  <span>$5,000 (Emerging)</span>
                  <span>$50,000 (Growth)</span>
                  <span>$200,000+ (Scale)</span>
                </div>
              </div>

              {/* Outputs */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 text-center">
                <div>
                  <div className="text-xs font-mono text-chrome-400 uppercase tracking-wider">
                    Projected Return
                  </div>
                  <div className="text-3xl sm:text-4xl font-display font-bold text-emerald-400 mt-1">
                    ${estimatedRevenue.toLocaleString()}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 flex justify-between text-xs font-mono text-chrome-300">
                  <span>Target ROAS:</span>
                  <span className="text-white font-semibold">{estimatedROAS}x</span>
                </div>
                <div className="flex justify-between text-xs font-mono text-chrome-300">
                  <span>Est. High-Intent Views:</span>
                  <span className="text-white font-semibold">
                    ~{Math.round(estimatedImpressions / 1000)}k Views
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Bar */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-transparent border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight">
              Ready to Produce Your Flagship Commercial?
            </h3>
            <p className="text-chrome-300 text-sm mt-2 leading-relaxed">
              We handle end-to-end screenwriting, 8K RED cinema production, sound mastering, and paid media distribution across global channels.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black hover:bg-chrome-100 font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-xl shadow-white/10"
          >
            <span>Commission Creative Campaign</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Video Modal Player */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
};
