import React from 'react';
import { motion } from 'framer-motion';
import { Services } from '../components/Services';
import { Layers, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const ServicesPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 sm:pb-32 min-h-screen bg-obsidian-950 text-chrome-200">
      <SEO
        title="Web & Desktop App Development, Video Production & Marketing Services | Kravinoffs"
        description="Comprehensive enterprise services: Custom Web Application Development, Desktop App Engineering, 8K Video Production, Paid Advertising Management, and Technical SEO."
        canonical="https://kravinoffs.agency/services"
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-chrome-300 uppercase tracking-widest mb-4">
            <Layers className="w-3.5 h-3.5 text-white" />
            Capabilities & Engagement Models
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-medium text-white tracking-tight leading-[1.1]">
            Architected to Dominate. <br />
            <span className="text-chrome-400">Engineered to Last.</span>
          </h1>
          <p className="mt-4 text-chrome-300 text-base sm:text-lg leading-relaxed">
            From zero-latency software systems to cinematic 8K films and high-intent paid performance advertising, discover our 5 specialized agency divisions.
          </p>
        </div>

        {/* Core Services Component */}
        <Services />

        {/* Engagement Models */}
        <div className="mt-20">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-4xl font-display font-medium text-white tracking-tight">
              Flexible Engagement Frameworks
            </h2>
            <p className="text-xs sm:text-sm text-chrome-300 mt-2">
              We operate under transparent, milestone-driven structures tailored to high-growth enterprises and venture-backed innovators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="text-xs font-mono text-chrome-400 uppercase tracking-wider">Model 01</div>
              <h3 className="text-xl font-display font-medium text-white">Full-Cycle Turnkey Build</h3>
              <p className="text-xs sm:text-sm text-chrome-300 leading-relaxed">
                Complete end-to-end design, engineering, and deployment of complex software systems or multi-part commercial video campaigns.
              </p>
              <ul className="space-y-2 pt-2 border-t border-white/5 text-xs text-chrome-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-white" /> Fixed timeline & scope</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-white" /> Dedicated technical architect</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-white" /> Complete IP ownership handover</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.04] border border-white/20 space-y-4 relative shadow-xl">
              <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded text-[10px] font-mono bg-white text-black font-semibold">
                Most Selected
              </div>
              <div className="text-xs font-mono text-white uppercase tracking-wider">Model 02</div>
              <h3 className="text-xl font-display font-medium text-white">Agency Retainer & Growth Partner</h3>
              <p className="text-xs sm:text-sm text-chrome-300 leading-relaxed">
                Continuous monthly sprint capacity spanning software iteration, continuous creative video production, and ROAS performance marketing.
              </p>
              <ul className="space-y-2 pt-2 border-t border-white/10 text-xs text-chrome-200">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-white" /> Priority founder SLA</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-white" /> Bi-weekly sprint deployments</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-white" /> Continuous A/B testing & ROAS scaling</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="text-xs font-mono text-chrome-400 uppercase tracking-wider">Model 03</div>
              <h3 className="text-xl font-display font-medium text-white">Architectural Audit & Strategy</h3>
              <p className="text-xs sm:text-sm text-chrome-300 leading-relaxed">
                Intensive 2-week deep-dive evaluation of existing codebase architecture, cloud infrastructure vulnerabilities, or advertising account inefficiencies.
              </p>
              <ul className="space-y-2 pt-2 border-t border-white/5 text-xs text-chrome-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-white" /> Comprehensive audit report</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-white" /> Actionable performance roadmap</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-white" /> Executive debrief presentation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black hover:bg-chrome-100 font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-xl shadow-white/10"
          >
            Schedule Technical Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
