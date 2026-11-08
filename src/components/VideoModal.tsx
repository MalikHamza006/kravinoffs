import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Volume2, VolumeX, BarChart3, TrendingUp, Target, Share2, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { VideoProject } from '../types';
import { Link } from 'react-router-dom';

interface VideoModalProps {
  video: VideoProject | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (video && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [video]);

  if (!video) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const p = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(isNaN(p) ? 0 : p);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className="relative w-full max-w-5xl bg-obsidian-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="p-4 sm:p-6 bg-obsidian-950/80 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded text-xs font-mono uppercase tracking-wider bg-white/10 text-white border border-white/20">
                {video.category}
              </span>
              <span className="text-xs font-mono text-chrome-400">
                Brand: <strong className="text-white font-medium">{video.brand}</strong>
              </span>
              <span className="hidden sm:inline-block text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-chrome-300">
                {video.resolution}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-chrome-300 hover:text-white transition-colors border border-white/10"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="overflow-y-auto p-4 sm:p-6 space-y-6 custom-scrollbar">
            {/* Cinematic Video Player Frame */}
            <div className="relative rounded-xl overflow-hidden bg-black border border-white/10 aspect-video group shadow-2xl flex items-center justify-center">
              <video
                ref={videoRef}
                src={video.videoUrl}
                poster={video.thumbnail}
                loop
                playsInline
                muted={isMuted}
                onTimeUpdate={handleTimeUpdate}
                onClick={togglePlay}
                className="w-full h-full object-cover cursor-pointer"
              />

              {/* Video Overlay Controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

              {/* Center Play Indicator when paused */}
              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  className="absolute p-4 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition-all scale-100 hover:scale-110 border border-white/30"
                  aria-label="Play video"
                >
                  <Play className="w-8 h-8 fill-white ml-1" />
                </button>
              )}

              {/* Bottom Video Controls Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-2 bg-gradient-to-t from-black/95 to-transparent">
                {/* Scrubber Bar */}
                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white transition-all duration-150"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-white pt-1">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="p-1.5 rounded hover:bg-white/10 text-white transition-colors"
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                    </button>
                    <button
                      onClick={toggleMute}
                      className="p-1.5 rounded hover:bg-white/10 text-white transition-colors"
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-chrome-400" /> : <Volume2 className="w-4 h-4 text-white" />}
                    </button>
                    <span className="text-chrome-400">Duration: {video.duration}</span>
                  </div>

                  <div className="flex items-center gap-2 text-chrome-300">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                    <span>{video.aspectRatio === '9:16' ? 'Vertical 9:16 Reel' : 'Cinematic 16:9'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Title & Hook */}
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight">
                {video.title}
              </h2>
              <p className="text-sm sm:text-base font-serif italic text-chrome-300 border-l-2 border-white/40 pl-3">
                "{video.hookText}"
              </p>
            </div>

            {/* Campaign Marketing Data & ROAS Metrics */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 className="w-4 h-4 text-white" />
                <h3 className="text-xs font-mono uppercase tracking-widest text-chrome-400">
                  Performance Marketing Metrics & Impact
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                  <div className="text-xl sm:text-2xl font-display font-bold text-white">
                    {video.marketingStats.views}
                  </div>
                  <div className="text-xs font-mono text-chrome-400 mt-1 uppercase">Reach & Impressions</div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-500/[0.05] border border-emerald-500/20 text-center">
                  <div className="text-xl sm:text-2xl font-display font-bold text-emerald-400">
                    {video.marketingStats.roas}
                  </div>
                  <div className="text-xs font-mono text-emerald-300/80 mt-1 uppercase">Campaign ROAS</div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                  <div className="text-xl sm:text-2xl font-display font-bold text-white">
                    {video.marketingStats.ctr}
                  </div>
                  <div className="text-xs font-mono text-chrome-400 mt-1 uppercase">Click-Through Rate</div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                  <div className="text-xl sm:text-2xl font-display font-bold text-white">
                    {video.marketingStats.conversionLift}
                  </div>
                  <div className="text-xs font-mono text-chrome-400 mt-1 uppercase">Conversion Result</div>
                </div>
              </div>
            </div>

            {/* Marketing Strategy & Campaign Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-chrome-300" />
                  Strategic Campaign Concept
                </div>
                <p className="text-xs sm:text-sm text-chrome-300 leading-relaxed">
                  {video.campaignOverview}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold flex items-center gap-2">
                  <Target className="w-4 h-4 text-chrome-300" />
                  Target Audience Demographics
                </div>
                <p className="text-xs sm:text-sm text-chrome-300 leading-relaxed">
                  {video.targetAudience}
                </p>
              </div>
            </div>

            {/* Distribution Channels & Deliverables */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-chrome-400 mb-2.5">
                  Deployment Channels
                </h4>
                <div className="flex flex-wrap gap-2">
                  {video.distributionChannels.map((channel, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-chrome-200"
                    >
                      {channel}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-chrome-400 mb-2.5">
                  Production Deliverables
                </h4>
                <div className="space-y-1.5">
                  {video.creativeDeliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-chrome-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-6 bg-obsidian-950/90 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-mono text-chrome-400">
              Kravinoffs Cinema Labs • 8K RED Fleet • Verified 5.4x ROAS Engine
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={`https://wa.me/923160442304?text=${encodeURIComponent(`Hello Hamza! I'm interested in commissioning a campaign similar to "${video.title}" for my brand.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/25 text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <span>WhatsApp Founder</span>
              </a>

              <Link
                to="/contact"
                onClick={onClose}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-semibold uppercase tracking-wider transition-all shadow-lg shadow-white/10 hover:scale-[1.02]"
              >
                <span>Commission Campaign</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
