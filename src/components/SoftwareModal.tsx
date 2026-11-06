import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Activity, ShieldCheck, Layers, ArrowUpRight } from 'lucide-react';
import { SoftwareProject } from '../types';
import { Link } from 'react-router-dom';

interface SoftwareModalProps {
  project: SoftwareProject | null;
  onClose: () => void;
}

export const SoftwareModal: React.FC<SoftwareModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
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
          className="relative w-full max-w-4xl bg-obsidian-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Banner */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-r from-white/5 via-transparent to-white/5 border-b border-white/10 flex items-start justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono uppercase tracking-wider bg-white/10 text-white border border-white/20">
                  {project.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  {project.status}
                </span>
                <span className="text-xs font-mono text-chrome-400">
                  Completed {project.completionYear}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm font-mono text-chrome-300 mt-1">
                Client: <span className="text-white font-medium">{project.client}</span>
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-chrome-300 hover:text-white transition-colors border border-white/10"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8 custom-scrollbar">
            {/* Visual Hero Mockup */}
            <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-video group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent flex items-end p-6">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-black/70 backdrop-blur-md text-chrome-200 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance KPI Grid */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-chrome-400 mb-3 flex items-center gap-2">
                <Activity className="w-4 h-4 text-white" />
                Live Architecture & Performance Benchmarks
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all text-center"
                  >
                    <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                      {metric.value}
                    </div>
                    <div className="text-xs font-mono text-chrome-400 mt-1 uppercase tracking-wider">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comprehensive Description & Architecture */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-chrome-400 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-white" />
                Engineering Architecture Overview
              </h3>
              <p className="text-chrome-200 leading-relaxed text-sm sm:text-base">
                {project.fullDesc}
              </p>
            </div>

            {/* Engineering Challenge & Kravinoffs Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-rose-500/[0.03] border border-rose-500/20">
                <div className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold mb-2">
                  The Technical Challenge
                </div>
                <p className="text-xs sm:text-sm text-chrome-300 leading-relaxed">
                  {project.challenges}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-emerald-500/[0.03] border border-emerald-500/20">
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Kravinoffs Solution
                </div>
                <p className="text-xs sm:text-sm text-chrome-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Architectural Offerings */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-chrome-400 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-white" />
                Core System Features & Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-chrome-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="p-4 sm:p-6 bg-obsidian-950/80 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-chrome-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Vercel Serverless Ready
              </span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-mono text-xs uppercase tracking-wider border border-white/20 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live Preview
                </a>
              )}
              <Link
                to="/contact"
                onClick={onClose}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white text-black hover:bg-chrome-100 font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-lg shadow-white/10"
              >
                Request Similar Build
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
