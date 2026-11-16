import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Cpu, Activity, ShieldCheck, Layers, ArrowUpRight } from 'lucide-react';
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
                  {project.completionYear}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm font-mono text-chrome-400 mt-1">
                Project Category: <span className="text-white font-medium">{project.type || project.category}</span>
              </p>
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
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            {/* Top Project Visual + Quick Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 rounded-xl overflow-hidden border border-white/10 aspect-video bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:col-span-5 space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold">
                  Core Project Metrics
                </h3>
                <div className="grid grid-cols-1 gap-2.5">
                  {project.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between"
                    >
                      <span className="text-xs font-mono text-chrome-400">{metric.label}</span>
                      <span className="text-sm font-bold text-white font-mono">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Problem & Solution Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-chrome-300 font-semibold flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  Business Challenge
                </h3>
                <p className="text-xs sm:text-sm text-chrome-300 leading-relaxed p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  {project.challenges}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-chrome-300 font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Engineered Solution
                </h3>
                <p className="text-xs sm:text-sm text-chrome-300 leading-relaxed p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                Technology Stack & Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features List */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-chrome-300 font-semibold mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                Core System Features & Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-white"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="p-4 sm:p-6 bg-obsidian-950 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-chrome-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Lightyear Studios Engineering Standard
              </span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link
                to="/contact"
                onClick={onClose}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold font-mono text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95"
              >
                <span>Request Similar Build</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-black" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
