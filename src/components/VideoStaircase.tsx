import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles } from 'lucide-react';
import { VideoProject } from '../types';

interface VideoStaircaseProps {
  videos: VideoProject[];
  onSelectVideo: (video: VideoProject) => void;
}

export const VideoStaircase: React.FC<VideoStaircaseProps> = ({ videos, onSelectVideo }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // We map 7 ascending step coordinates that form the authentic curved 3D staircase
  // rising toward the glowing Play Portal at the top-center
  const staircaseSteps = [
    {
      // Step 1 - Base (Bottom front)
      x: '38%',
      y: '78%',
      z: 160,
      rotateX: 18,
      rotateY: -12,
      rotateZ: 4,
      width: '180px',
      height: '105px',
      videoIdx: 0,
      label: 'Night Velocity — Commercial',
      stepWidth: '200px',
      stepDepth: '32px',
    },
    {
      // Step 2 - Lower Curve
      x: '52%',
      y: '68%',
      z: 130,
      rotateX: 19,
      rotateY: -16,
      rotateZ: 2,
      width: '165px',
      height: '98px',
      videoIdx: 1,
      label: 'Apex Chrono — 8K Film',
      stepWidth: '180px',
      stepDepth: '28px',
    },
    {
      // Step 3 - Mid Lower (turning inwards)
      x: '46%',
      y: '57%',
      z: 100,
      rotateX: 20,
      rotateY: -10,
      rotateZ: -2,
      width: '150px',
      height: '90px',
      videoIdx: 2,
      label: 'CyberShield — 3D Motion',
      stepWidth: '165px',
      stepDepth: '26px',
    },
    {
      // Step 4 - Center Swirl
      x: '34%',
      y: '46%',
      z: 75,
      rotateX: 22,
      rotateY: 8,
      rotateZ: -5,
      width: '140px',
      height: '84px',
      videoIdx: 3,
      label: 'Quantum Drop — Viral Reel',
      stepWidth: '155px',
      stepDepth: '24px',
    },
    {
      // Step 5 - Mid Upper (spiral arch)
      x: '38%',
      y: '35%',
      z: 50,
      rotateX: 24,
      rotateY: 15,
      rotateZ: -3,
      width: '130px',
      height: '78px',
      videoIdx: 4,
      label: 'NeuralPay — Paid Media',
      stepWidth: '145px',
      stepDepth: '22px',
    },
    {
      // Step 6 - Upper Approach
      x: '45%',
      y: '25%',
      z: 25,
      rotateX: 26,
      rotateY: 10,
      rotateZ: 0,
      width: '120px',
      height: '72px',
      videoIdx: 5,
      label: 'AeroDrone — 4K Cinema',
      stepWidth: '135px',
      stepDepth: '20px',
    },
    {
      // Step 7 - Highest Step leading right into the portal
      x: '48%',
      y: '16%',
      z: 5,
      rotateX: 28,
      rotateY: 0,
      rotateZ: 0,
      width: '110px',
      height: '66px',
      videoIdx: 0,
      label: 'Premiere Showcase',
      stepWidth: '125px',
      stepDepth: '18px',
    },
  ];

  return (
    <div className="relative w-full h-[500px] sm:h-[640px] lg:h-[780px] flex items-center justify-center select-none overflow-hidden">
      
      {/* 1. Atmospheric Ambient Olive & Electric Lime Volumetric Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-b from-electric-lime/25 via-olive-600/20 to-transparent rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-olive-500/15 rounded-full blur-[90px] pointer-events-none" />

      {/* 2. Swirling Filmstrip Ribbon Graphics in the Background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 800 800" fill="none">
        <path
          d="M 120 700 C 350 680, 520 620, 500 480 C 480 340, 280 320, 360 180 C 400 120, 500 80, 540 60"
          stroke="url(#filmstrip-gradient)"
          strokeWidth="38"
          strokeLinecap="round"
          strokeDasharray="12 8"
          fill="none"
        />
        <path
          d="M 680 750 C 640 580, 680 440, 580 340 C 480 240, 440 180, 480 80"
          stroke="url(#filmstrip-gradient-2)"
          strokeWidth="24"
          strokeLinecap="round"
          strokeDasharray="8 6"
          fill="none"
        />
        <defs>
          <linearGradient id="filmstrip-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2b3e14" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#86ba38" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#CCFF00" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="filmstrip-gradient-2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1b2a0c" stopOpacity="0.1" />
            <stop offset="60%" stopColor="#69952c" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#D4FF00" stopOpacity="0.7" />
          </linearGradient>
        </defs>
      </svg>

      {/* 3. The Glowing Play-Button Portal at the Top of the Staircase */}
      <div className="absolute top-4 sm:top-8 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-10">
        <motion.div
          animate={{ scale: [1, 1.05, 1], filter: ['drop-shadow(0 0 25px rgba(204,255,0,0.5))', 'drop-shadow(0 0 45px rgba(204,255,0,0.85))', 'drop-shadow(0 0 25px rgba(204,255,0,0.5))'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative flex items-center justify-center"
        >
          {/* Luminous Arch Portal Frame */}
          <div className="w-24 sm:w-28 h-32 sm:h-36 rounded-t-full border-[3px] border-electric-lime bg-gradient-to-b from-electric-lime/30 via-olive-800/40 to-black/80 backdrop-blur-md flex items-center justify-center shadow-[0_0_50px_rgba(204,255,0,0.6)]">
            <div className="w-16 sm:w-18 h-22 sm:h-24 rounded-t-full border border-electric-lime/60 flex items-center justify-center bg-black/60">
              <Play className="w-8 sm:w-10 h-8 sm:h-10 fill-electric-lime text-electric-lime ml-1 filter drop-shadow-[0_0_12px_#CCFF00]" />
            </div>
          </div>
          
          {/* Ambient Pillar Glow Behind Portal */}
          <div className="absolute -inset-6 bg-electric-lime/20 rounded-full blur-2xl -z-10" />
        </motion.div>

        {/* Cinematic Creator Silhouette Walking Up Toward Portal */}
        <div className="w-4 h-9 bg-gradient-to-t from-black via-neutral-900 to-neutral-700 rounded-full -mt-2 opacity-90 blur-[0.4px] shadow-lg" />
      </div>

      {/* 4. 3D Perspective Viewport for the Ascending Video Staircase */}
      <div 
        className="relative w-full h-full scale-[0.8] sm:scale-[0.9] lg:scale-100 origin-center transition-transform"
        style={{ perspective: '1100px', transformStyle: 'preserve-3d' }}
      >
        {staircaseSteps.map((step, idx) => {
          const video = videos[step.videoIdx % videos.length];
          const isHovered = hoveredIdx === idx;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              style={{
                position: 'absolute',
                left: step.x,
                top: step.y,
                transform: `translate(-50%, -50%) translateZ(${step.z}px) rotateX(${step.rotateX}deg) rotateY(${step.rotateY}deg) rotateZ(${step.rotateZ}deg)`,
                transformStyle: 'preserve-3d',
                zIndex: idx + 10,
              }}
              className="cursor-pointer group"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => onSelectVideo(video)}
            >
              {/* Continuous Gentle Floating Animation Wrapper */}
              <motion.div
                animate={{
                  y: isHovered ? -12 : [-4, 4, -4],
                  rotateZ: isHovered ? 0 : [step.rotateZ - 1, step.rotateZ + 1, step.rotateZ - 1],
                  scale: isHovered ? 1.15 : 1,
                }}
                transition={{
                  y: isHovered ? { duration: 0.2 } : { duration: 5 + (idx % 3), repeat: Infinity, ease: 'easeInOut' },
                  scale: { duration: 0.25 },
                  rotateZ: { duration: 6 + (idx % 2), repeat: Infinity, ease: 'easeInOut' },
                }}
                className="relative"
              >
                {/* A. Physical Illuminated Staircase Step Base (Underneath the screen) */}
                <div 
                  style={{
                    width: step.stepWidth,
                    height: step.stepDepth,
                    transform: 'translate(-50%, 0) rotateX(70deg)',
                    left: '50%',
                    bottom: '-12px',
                  }}
                  className="absolute rounded-md bg-gradient-to-r from-olive-950 via-olive-800 to-olive-950 border border-electric-lime/40 shadow-[0_10px_25px_rgba(0,0,0,0.9),0_0_15px_rgba(204,255,0,0.25)] pointer-events-none"
                >
                  {/* Glowing edge light line */}
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-electric-lime to-transparent opacity-80" />
                </div>

                {/* B. The Floating Rectangular Video Screen Step */}
                <div
                  style={{
                    width: step.width,
                    height: step.height,
                  }}
                  className={`relative rounded-xl overflow-hidden bg-black border-2 transition-all duration-300 shadow-2xl ${
                    isHovered
                      ? 'border-electric-lime shadow-[0_0_35px_rgba(204,255,0,0.7)] ring-2 ring-electric-lime/50'
                      : 'border-olive-400/50 hover:border-electric-lime shadow-[0_15px_30px_rgba(0,0,0,0.8),0_0_15px_rgba(165,222,71,0.25)]'
                  }`}
                >
                  {/* Real Cinematic Video Thumbnail */}
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Dark Glass Shade + Olive Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 group-hover:from-black/60 transition-colors" />

                  {/* Center Play Button Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 ${
                      isHovered
                        ? 'w-10 h-10 bg-electric-lime text-black scale-110 shadow-[0_0_20px_#CCFF00]'
                        : 'w-7 h-7 bg-black/60 text-white/90 border border-white/20'
                    }`}>
                      <Play className={`w-3.5 h-3.5 fill-current ml-0.5 ${isHovered ? 'text-black' : 'text-white'}`} />
                    </div>
                  </div>

                  {/* Step Info Badge on Hover */}
                  <div className="absolute bottom-1.5 inset-x-2 flex items-center justify-between text-[9px] font-mono">
                    <span className="truncate text-white font-medium max-w-[85%] drop-shadow">
                      {isHovered ? video.title : step.label}
                    </span>
                    <span className="text-electric-lime font-bold">
                      #{idx + 1}
                    </span>
                  </div>

                  {/* Top Rim Neon Edge Light */}
                  <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-electric-lime/80 to-transparent" />
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* 5. Cinema Tripod Camera Graphic in Right Foreground (Matches Reference Design) */}
      <div className="hidden xl:flex absolute bottom-4 right-2 sm:right-6 pointer-events-none opacity-85 z-20 flex-col items-center">
        <div className="w-44 h-72 relative">
          {/* Stylized Silhouette & Glow of 8K Cinema Rig */}
          <div className="absolute top-6 right-8 w-28 h-18 bg-neutral-900 border border-olive-500/40 rounded-lg shadow-2xl flex items-center justify-center">
            {/* Lens Barrel */}
            <div className="w-12 h-12 rounded-full border-2 border-electric-lime/60 bg-black flex items-center justify-center shadow-[0_0_15px_rgba(204,255,0,0.3)]">
              <div className="w-7 h-7 rounded-full bg-olive-900 border border-electric-lime/40 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-electric-lime animate-pulse" />
              </div>
            </div>
            {/* Top Handle & Matte Box */}
            <div className="absolute -top-3 left-4 w-14 h-2 bg-neutral-800 rounded" />
            <div className="absolute top-1 -right-6 w-8 h-14 bg-black/90 border-l border-olive-500/50 transform rotate-12 rounded" />
          </div>
          {/* Tripod Legs */}
          <div className="absolute top-26 right-16 w-1 h-44 bg-gradient-to-b from-neutral-700 to-neutral-900 transform -rotate-12" />
          <div className="absolute top-26 right-20 w-1 h-44 bg-gradient-to-b from-neutral-700 to-neutral-900" />
          <div className="absolute top-26 right-24 w-1 h-44 bg-gradient-to-b from-neutral-700 to-neutral-900 transform rotate-12" />
          {/* Base shadow */}
          <div className="absolute bottom-2 right-10 w-28 h-4 bg-black/80 blur-md rounded-full" />
        </div>
      </div>

    </div>
  );
};
