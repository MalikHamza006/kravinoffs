import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Volume2, VolumeX, Film, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';
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
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className="relative w-full max-w-4xl bg-[#0B0F17] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="p-4 sm:p-6 bg-gradient-to-r from-white/5 via-transparent to-white/5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono uppercase tracking-wider bg-white/10 text-cyan-300 border border-white/20">
                {video.category}
              </span>
              <span className="text-xs font-mono text-chrome-400">
                Brand: <strong className="text-white">{video.brand}</strong>
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-chrome-400 hover:text-white transition-colors border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scroll Body */}
          <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
            {/* Custom Interactive Video Player */}
            <div className="relative rounded-xl overflow-hidden bg-black aspect-video max-h-[440px] flex items-center justify-center border border-white/10 group">
              <video
                ref={videoRef}
                src={video.videoUrl}
                poster={video.thumbnail}
                playsInline
                loop
                muted={isMuted}
                onTimeUpdate={handleTimeUpdate}
                onClick={togglePlay}
                className="w-full h-full object-contain cursor-pointer"
              />

              {/* Big Center Play Pause Overlay */}
              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-black/75 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:scale-110 transition-transform shadow-2xl"
                  aria-label="Play video"
                >
                  <Play className="w-8 h-8 fill-white text-white ml-1" />
                </button>
              )}

              {/* Bottom Video Controls Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-2 bg-gradient-to-t from-black/95 to-transparent">
                {/* Scrubber Bar */}
                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-cyan-400 transition-all duration-150"
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

                  <div className="flex items-center gap-2 text-chrome-400">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span>{video.aspectRatio === '9:16' ? 'Vertical 9:16 Reel' : 'Widescreen 16:9'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Title & Hook */}
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
                {video.title}
              </h2>
              <p className="text-sm font-mono text-cyan-300 border-l-2 border-cyan-400 pl-3">
                "{video.hookText}"
              </p>
            </div>

            {/* Production Specifications */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Film className="w-4 h-4 text-cyan-400" />
                <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-semibold">
                  Production Specifications & Formats
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-center">
                  <div className="text-sm font-bold text-white font-mono">
                    {video.marketingStats?.resolution || 'Up to 4K UHD'}
                  </div>
                  <div className="text-[10px] font-mono text-chrome-400 mt-1 uppercase">Master Resolution</div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-center">
                  <div className="text-sm font-bold text-cyan-300 font-mono">
                    {video.aspectRatio}
                  </div>
                  <div className="text-[10px] font-mono text-chrome-400 mt-1 uppercase">Aspect Ratio</div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-center">
                  <div className="text-sm font-bold text-white font-mono">
                    {video.duration}
                  </div>
                  <div className="text-[10px] font-mono text-chrome-400 mt-1 uppercase">Runtime</div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-center">
                  <div className="text-sm font-bold text-white font-mono">
                    ProRes & H.264
                  </div>
                  <div className="text-[10px] font-mono text-chrome-400 mt-1 uppercase">Export Codecs</div>
                </div>
              </div>
            </div>

            {/* Strategy & Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  Campaign Overview
                </div>
                <p className="text-xs sm:text-sm text-chrome-300 leading-relaxed">
                  {video.campaignOverview}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Target Audience
                </div>
                <p className="text-xs sm:text-sm text-chrome-300 leading-relaxed">
                  {video.targetAudience}
                </p>
              </div>
            </div>

            {/* Creative Deliverables */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-chrome-400 mb-3 font-semibold">
                Delivered Master Assets
              </h3>
              <div className="flex flex-wrap gap-2">
                {video.creativeDeliverables.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-6 bg-obsidian-950 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-mono text-chrome-400">
              Commercial Video Production • Lightyear Studios
            </span>

            <Link
              to="/contact"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold font-mono text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95"
            >
              <span>Commission Similar Commercial</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-black" />
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
