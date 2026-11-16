import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Mail, 
  ArrowUpRight, 
  Send, 
  CheckCircle2, 
  Clock, 
  AlertCircle 
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const servicesList = [
    'Software Development',
    'Website Development',
    'SaaS / Web App Development',
    'Custom Business Systems & CRM',
    'Restaurant Technology & POS',
    'Commercial Video Production (Up to 4K)',
    'Video Editing & Post-Production',
    'Digital Marketing (3 Tier Packages)',
    'SEO / Organic Search Optimisation',
    'Multiple Services / Full Solution'
  ];

  const projectBudgets = [
    'Under A$2,500',
    'A$2,500 – A$5,000',
    'A$5,000 – A$10,000',
    'A$10,000 – A$25,000',
    'A$25,000 – A$50,000',
    'A$50,000+'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.service || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields marked with *');
      return;
    }

    setStatus('submitting');

    const formattedMessage = 
`*NEW PROJECT INQUIRY — LIGHTYEAR STUDIOS*
---------------------------------------
*Name:* ${formData.name.trim()}
*Email:* ${formData.email.trim()}
*Phone/WhatsApp:* ${formData.phone.trim() || 'N/A'}
*Service Required:* ${formData.service}
*Budget Range:* ${formData.budget || 'To be discussed'}

*Project Brief & Objectives:*
${formData.message.trim()}
---------------------------------------
_Dispatched via Lightyear Studios Website_`;

    const whatsappUrl = `https://wa.me/923160442304?text=${encodeURIComponent(formattedMessage)}`;

    setTimeout(() => {
      setStatus('success');
      window.open(whatsappUrl, '_blank');
    }, 500);
  };

  const handleEmailDirect = () => {
    const subject = encodeURIComponent(`[Project Inquiry] ${formData.service || 'Studio Services'} - ${formData.name || 'Client'}`);
    const body = encodeURIComponent(
`Hello Hamza and Lightyear Studios Team,

I am writing to discuss an engagement with Lightyear Studios.

Name: ${formData.name || 'N/A'}
Email: ${formData.email || 'N/A'}
Phone / WhatsApp: ${formData.phone || 'N/A'}
Service of Interest: ${formData.service || 'General Inquiry'}
Budget Range: ${formData.budget || 'To be discussed'}

Project Details:
${formData.message || 'We would like to schedule an introductory consultation call.'}

Best regards,
${formData.name || 'Client'}`
    );

    window.location.href = `mailto:hamzamalik789890@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-block text-xs font-mono tracking-widest text-chrome-300 uppercase px-3 py-1 rounded-full bg-white/[0.04] mb-3">
            Start a Conversation
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase mb-4 leading-tight">
            LET'S BUILD SOMETHING THAT <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">MOVES YOUR BUSINESS FORWARD.</span>
          </h2>
          <p className="text-sm sm:text-base text-chrome-300 max-w-xl mx-auto leading-relaxed font-normal">
            Have a project in mind? Whether you need a new website, custom software, commercial video or a stronger digital marketing strategy, let's discuss your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Direct Card */}
            <a
              href="https://wa.me/923160442304?text=Hello%20Lightyear%20Studios!%20I'm%20interested%20in%20discussing%20a%20project%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/50 transition-all flex items-start gap-4 group block hover:translate-x-1"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-mono text-cyan-300 uppercase tracking-wider block mb-0.5">
                  Direct WhatsApp Line
                </span>
                <span className="font-heading text-xl font-bold text-white block">
                  +92 316 0442304
                </span>
                <span className="text-xs text-emerald-400 mt-1 inline-flex items-center gap-1.5 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Fast Response • Founder Direct
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-chrome-400 group-hover:text-cyan-300 transition-colors" />
            </a>

            {/* Email Card */}
            <a
              href="mailto:hamzamalik789890@gmail.com"
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/30 transition-all flex items-start gap-4 group block hover:translate-x-1"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.05] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6 text-chrome-200" />
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-mono text-chrome-400 uppercase tracking-wider block mb-0.5">
                  Official Studio Email
                </span>
                <span className="font-heading text-base sm:text-lg font-bold text-white break-all block">
                  hamzamalik789890@gmail.com
                </span>
                <span className="text-xs text-chrome-400 mt-1 block font-mono">
                  Project briefs & consultation requests
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-chrome-400 group-hover:text-white transition-colors" />
            </a>

            {/* Studio Operating Info Card */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="text-xs font-mono text-cyan-300 uppercase tracking-wider font-semibold">
                Studio Location & Markets
              </div>
              <div className="text-xs text-chrome-300 space-y-2">
                <div>
                  <strong className="text-white block font-heading">Founder:</strong>
                  <span>Hamza Malik (Founder & Studio Director)</span>
                </div>
                <div>
                  <strong className="text-white block font-heading">Operating Base:</strong>
                  <span>Lahore, Pakistan</span>
                </div>
                <div>
                  <strong className="text-white block font-heading">Target Markets:</strong>
                  <span>Australia (Remote delivery) & International Clients</span>
                </div>
              </div>
            </div>

            {/* Quick Turnaround Note */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white mb-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                Prompt Brief Review
              </div>
              <p className="text-xs text-chrome-300 leading-relaxed">
                We review inbound client inquiries within 24 hours. For immediate technical questions, reach founder Hamza Malik directly on WhatsApp.
              </p>
            </div>

          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7 rounded-2xl p-6 sm:p-10 bg-white/[0.02] border border-white/10">
            <h3 className="font-heading text-2xl font-bold text-white mb-2">
              Send Your Project Brief
            </h3>
            <p className="text-xs sm:text-sm text-chrome-300 mb-8 font-normal">
              Tell us about your objectives, timeline, or current bottlenecks. We will prepare a transparent scope and estimate.
            </p>

            {status === 'error' && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs sm:text-sm flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {status === 'success' && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Redirecting to WhatsApp to send your brief directly to Hamza...</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-chrome-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Liam Roberts"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-chrome-500 text-xs font-mono focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-chrome-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="liam@business.com.au"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-chrome-500 text-xs font-mono focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-chrome-300 mb-2">
                    WhatsApp / Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+61 400 123 456"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-chrome-500 text-xs font-mono focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-mono uppercase tracking-wider text-chrome-300 mb-2">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-900 border border-white/10 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none transition-colors"
                  >
                    <option value="" disabled>Select a capability</option>
                    {servicesList.map((svc) => (
                      <option key={svc} value={svc} className="bg-obsidian-900 text-white">
                        {svc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-chrome-300 mb-2">
                  Project Budget Range (AUD)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {projectBudgets.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`py-2 px-3 rounded-lg text-xs font-mono transition-all border text-left ${
                        formData.budget === b
                          ? 'bg-white text-black font-semibold border-white shadow-md'
                          : 'bg-white/[0.03] text-chrome-300 border-white/10 hover:border-white/30'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-chrome-300 mb-2">
                  Project Details / Scope *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell us about your business, website goals, restaurant tech needs, video scope, or target timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-chrome-500 text-xs font-mono focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-white/10 disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-black" />
                  <span>{status === 'submitting' ? 'Preparing Brief...' : 'Send Brief via WhatsApp'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailDirect}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-mono text-xs tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-cyan-300" />
                  <span>Send via Email</span>
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
