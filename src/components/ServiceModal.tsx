import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Clock, Sparkles, MessageCircle } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Hamza! I'm reviewing the Lightyear Studios website and would like to discuss your ${service.title} services for my business.`
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
          className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl bg-[#0B0F17] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black border border-white/15 text-white hover:text-cyan-400 flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header with Visual Cover */}
          <div className="relative h-44 sm:h-56 shrink-0 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/70 to-transparent" />
            <div className="absolute bottom-5 left-6 sm:left-8 right-6">
              <span className="text-xs font-mono tracking-widest text-cyan-300 uppercase px-3 py-1 rounded-full bg-black/80 border border-white/15 backdrop-blur-md inline-block mb-2">
                Service {service.number}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                {service.title}
              </h3>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 mb-2 font-semibold">
                Overview & Scope
              </h4>
              <p className="text-sm sm:text-base text-chrome-300 leading-relaxed font-normal">
                {service.detailedInfo}
              </p>
            </div>

            {/* Scope / Key Offerings */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-chrome-300 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Deliverables & Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.keyOfferings.map((offering) => (
                  <div
                    key={offering}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/10 text-xs sm:text-sm text-white"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{offering}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications & Indicative Pricing Meta */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-[10px] font-mono text-chrome-400 uppercase tracking-wider block mb-1">
                  Indicative Pricing
                </span>
                <span className="text-sm font-bold text-cyan-300">
                  {service.startingPrice || 'Custom Quote'}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-[10px] font-mono text-chrome-400 uppercase tracking-wider block mb-1">
                  Quality Standard
                </span>
                <span className="text-sm font-medium text-white truncate block">
                  {service.kpi}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-[10px] font-mono text-chrome-400 uppercase tracking-wider block mb-1">
                  Delivery Velocity
                </span>
                <span className="text-sm font-medium text-white flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  {service.timeline}
                </span>
              </div>
            </div>

            <div className="text-[11px] font-mono text-chrome-400 p-3 rounded-lg bg-black/40 border border-white/5">
              * Note: Indicative starting pricing in AUD (ex GST). Final scope and costs are confirmed in a formal written quotation prior to kickoff.
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-6 bg-[#070A10] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-xs text-chrome-400 block">Direct Founder Consultation</span>
              <span className="text-sm font-medium text-white">+92 316 044 2304 • Hamza Malik</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={`https://wa.me/923160442304?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black hover:bg-neutral-200 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-black/40"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Discuss on WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="hidden sm:inline-flex px-4 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-white transition-colors"
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
