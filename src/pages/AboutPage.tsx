import React from 'react';
import { motion } from 'framer-motion';
import { About } from '../components/About';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ShieldCheck, Cpu, Camera, Terminal, Award, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 sm:pb-32 min-h-screen bg-obsidian-950 text-chrome-200">
      <SEO
        title="About Kravinoffs | Engineering Mastery, 8K Cinema & Global Leadership"
        description="Discover Kravinoffs provenance: Founded by Hamza Malik, operating enterprise distributed systems, RED Monstro 8K cameras, and full-funnel digital marketing."
        canonical="https://kravinoffs.agency/about"
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-chrome-300 uppercase tracking-widest mb-4">
            <Globe className="w-3.5 h-3.5 text-white" />
            Agency DNA & Provenance
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-medium text-white tracking-tight leading-[1.1]">
            We Build for Those Who <br />
            <span className="text-chrome-400">Refuse Second Place.</span>
          </h1>
          <p className="mt-4 text-chrome-300 text-base sm:text-lg leading-relaxed">
            Kravinoffs was founded on a singular conviction: exceptional brands require both uncompromising software engineering and cinematic visual dominance.
          </p>
        </div>

        {/* About Main Component */}
        <About />

        {/* Arsenal & Infrastructure Section */}
        <div className="mt-24 pt-20 border-t border-white/10">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
              The Production & Engineering Arsenal
            </h2>
            <p className="text-chrome-300 text-sm sm:text-base mt-2">
              We own and operate state-of-the-art cinematic hardware and modern distributed software toolchains. No outsourced amateur gear, no compromises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Software Stack */}
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-white/5 text-white border border-white/10">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-medium text-white">
                    Software & Cloud Infrastructure
                  </h3>
                  <p className="text-xs font-mono text-chrome-400">Distributed Systems & Web Scale</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-chrome-300">
                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                  <div className="font-mono text-white mb-1">Frontend & Interfaces</div>
                  <p>React 18, Next.js 14 App Router, TypeScript, TailwindCSS, WebGL/Three.js, Framer Motion</p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                  <div className="font-mono text-white mb-1">Backend & Systems</div>
                  <p>Node.js, Rust micro-services, Go (Golang), Python FastAPI, WebSockets, gRPC</p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                  <div className="font-mono text-white mb-1">Cloud, Database & DevOps</div>
                  <p>PostgreSQL, TimescaleDB, Redis Cluster, Docker, Kubernetes, AWS GovCloud, Vercel Edge Serverless</p>
                </div>
              </div>
            </div>

            {/* Cinema & Studio Gear */}
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-white/5 text-white border border-white/10">
                  <Camera className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-medium text-white">
                    Cinema Production & Studio Fleet
                  </h3>
                  <p className="text-xs font-mono text-chrome-400">Broadcast-Grade Optics & Sound</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-chrome-300">
                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                  <div className="font-mono text-white mb-1">Cinema Cameras</div>
                  <p>RED Monstro 8K VV Cinema, ARRI Alexa Mini LF, Sony FX9 Cinema Line, Blackmagic URSA 12K</p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                  <div className="font-mono text-white mb-1">Optics & Movement</div>
                  <p>Cooke Anamorphic /i Full Frame Plus, Atlas Orion Anamorphic, DJI Ronin 2 3-Axis Gimbal, Russian Arm Crane</p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                  <div className="font-mono text-white mb-1">Post-Production & Color Studio</div>
                  <p>DaVinci Resolve Studio Advanced Color Grading, Cinema 4D, Houdini 3D Procedural, Dolby Atmos 7.1.4 Mixing</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-24">
          <WhyChooseUs />
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black hover:bg-chrome-100 font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-xl shadow-white/10"
          >
            Connect With Kravinoffs Principals
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
