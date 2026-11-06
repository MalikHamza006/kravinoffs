import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Clock, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Hamza! I'm reviewing the Kravinoffs website and would like to discuss your ${service.title} services for my business.`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl bg-obsidian-900 border border-white/20 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header with Visual Cover */}
          <div className="relative h-48 sm:h-64 shrink-0 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-obsidian-900/60 to-transparent" />
            <div className="absolute bottom-6 left-6 sm:left-8 right-6">
              <span className="text-xs font-bold tracking-[0.2em] text-chrome-300 uppercase px-3 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md inline-block mb-2">
                Service {service.number}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-black text-white">
                {service.title}
              </h3>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-chrome-400 mb-2">
                Service Overview
              </h4>
              <p className="text-sm sm:text-base text-chrome-200 leading-relaxed font-normal">
                {service.detailedInfo}
              </p>
            </div>

            {/* Scope / Key Offerings */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-chrome-400 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-chrome-200" />
                Comprehensive Scope of Offerings
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.keyOfferings.map((offering) => (
                  <div
                    key={offering}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-chrome-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{offering}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications Meta */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                <span className="text-[11px] font-bold text-chrome-400 uppercase tracking-wider block mb-1">
                  Target Benchmark
                </span>
                <span className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-chrome-300" />
                  {service.kpi}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                <span className="text-[11px] font-bold text-chrome-400 uppercase tracking-wider block mb-1">
                  Delivery Velocity
                </span>
                <span className="text-sm font-bold text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-chrome-300" />
                  {service.timeline}
                </span>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-6 bg-obsidian-950/80 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-xs text-chrome-400 block">Direct Founder Inquiry</span>
              <span className="text-sm font-semibold text-white">+92 316 0442304 • Hamza Malik</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={`https://wa.me/923160442304?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-500/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire on WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="hidden sm:inline-flex px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
