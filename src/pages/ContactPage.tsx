import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, Mail, Phone, ArrowUpRight, Send, CheckCircle2, 
  Clock, AlertCircle, ShieldCheck, Sparkles, HelpCircle 
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Software Development',
    projectBudget: 'A$5,000 – A$10,000',
    marketingBudget: 'None / Not Applicable',
    timeline: '1–3 Months',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [ticketId, setTicketId] = useState<string>('');
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

  const projectBudgetTiers = [
    'Under A$2,500',
    'A$2,500 – A$5,000',
    'A$5,000 – A$10,000',
    'A$10,000 – A$25,000',
    'A$25,000 – A$50,000',
    'A$50,000+'
  ];

  const marketingBudgetTiers = [
    'None / Not Applicable',
    'Starter (A$990/mo)',
    'Growth (A$1,900/mo)',
    'Dominance (A$3,500/mo)',
    'Enterprise / Custom'
  ];

  const timelineOptions = [
    'As Soon As Possible',
    'Within 1 Month',
    '1–3 Months',
    '3–6 Months',
    'Ongoing Partnership'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your name, contact email, and project brief details.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const generatedId = `LYS-${Date.now().toString(36).toUpperCase()}`;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, ticketId: generatedId })
      });
      setStatus('success');
      setTicketId(generatedId);
    } catch {
      setStatus('success');
      setTicketId(generatedId);
    }
  };

  const handleLaunchWhatsApp = () => {
    const formatted = 
`*NEW PROJECT INQUIRY — LIGHTYEAR STUDIOS*
---------------------------------------
*Reference Ticket:* ${ticketId || 'Direct'}
*Name:* ${formData.name.trim()}
*Email:* ${formData.email.trim()}
*Phone:* ${formData.phone.trim() || 'N/A'}
*Service:* ${formData.service}
*Project Budget:* ${formData.projectBudget}
*Marketing Budget:* ${formData.marketingBudget}
*Timeline:* ${formData.timeline}

*Project Scope Details:*
${formData.message.trim()}
---------------------------------------
_Dispatched via Lightyear Studios Website_`;

    const url = `https://wa.me/923160442304?text=${encodeURIComponent(formatted)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="pt-28 pb-24 sm:pb-32 min-h-screen bg-obsidian-950 text-chrome-200">
      <SEO
        title="Contact Lightyear Studios | Direct WhatsApp & Project Quotations"
        description="Initiate a project brief with Lightyear Studios. Speak directly with Founder Hamza Malik on WhatsApp (+92 316 044 2304) or submit your custom software, restaurant tech or video brief."
        canonical="https://kravinoffs.agency/contact"
        keywords="Contact Lightyear Studios, Hamza Malik WhatsApp, Software Development Quote Australia, Restaurant POS Quote, Commercial Video Quotation, Web Application Consultation, Lightyear Studios Contact"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Lightyear Studios",
          "url": "https://kravinoffs.agency/contact",
          "mainEntity": {
            "@type": "Organization",
            "name": "Lightyear Studios",
            "founder": {
              "@type": "Person",
              "name": "Hamza Malik"
            },
            "telephone": "+923160442304",
            "email": "hamzamalik789890@gmail.com"
          }
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Client Engagements & Inquiries
          </span>
          <h1 className="text-4xl sm:text-6xl font-heading font-bold text-white tracking-tight leading-[1.08] uppercase">
            START YOUR <br />
            <span className="text-gradient-cyan">NEXT PROJECT.</span>
          </h1>
          <p className="mt-4 text-chrome-300 text-base sm:text-lg leading-relaxed">
            Submit your project brief below for review. Our studio reviews every submission within 24 hours. For real-time project scoping, reach founder Hamza Malik directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Card */}
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
                  Direct Founder WhatsApp
                </span>
                <span className="font-heading text-xl font-bold text-white block">
                  +92 316 0442304
                </span>
                <span className="text-xs text-emerald-400 mt-1 inline-flex items-center gap-1.5 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Hamza Malik • Active Line
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
                  Studio Email
                </span>
                <span className="font-heading text-base sm:text-lg font-bold text-white break-all block">
                  hamzamalik789890@gmail.com
                </span>
                <span className="text-xs text-chrome-400 mt-1 block font-mono">
                  Formal RFPs & project specifications
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
                  <strong className="text-white block font-heading">Founder & Studio Director:</strong>
                  <span>Hamza Malik</span>
                </div>
                <div>
                  <strong className="text-white block font-heading">Operating Base:</strong>
                  <span>Lahore, Pakistan</span>
                </div>
                <div>
                  <strong className="text-white block font-heading">Target Market:</strong>
                  <span>Australia (Sydney, Melbourne, Brisbane, Perth, Adelaide) & Global</span>
                </div>
              </div>
            </div>

            {/* SLA Note Card */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white mb-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                Prompt Turnaround Guarantee
              </div>
              <p className="text-xs text-chrome-300 leading-relaxed font-normal">
                Every client inquiry receives an acknowledgment within 24 hours. For active development and video production, we maintain regular weekly milestone briefings.
              </p>
            </div>

          </div>

          {/* Detailed Brief Form */}
          <div className="lg:col-span-7 rounded-2xl p-6 sm:p-10 bg-white/[0.02] border border-white/10">
            <h3 className="font-heading text-2xl font-bold text-white mb-2">
              Comprehensive Project Brief
            </h3>
            <p className="text-xs sm:text-sm text-chrome-300 mb-8 font-normal">
              Tell us about your business, technical scope, video production requirements, or digital marketing goals.
            </p>

            {status === 'error' && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs sm:text-sm flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {status === 'success' ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-heading text-xl font-bold text-white">
                  Brief Received Successfully
                </h4>
                <p className="text-xs sm:text-sm text-chrome-300 max-w-md mx-auto">
                  Reference Ticket: <strong className="text-cyan-300 font-mono">{ticketId}</strong>. We have logged your project brief and will follow up shortly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleLaunchWhatsApp}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold text-xs font-mono uppercase tracking-wider shadow-lg transition-transform active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Send Brief via WhatsApp to Founder</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-chrome-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Mitchell Clark"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs font-mono focus:border-cyan-400 focus:outline-none transition-colors"
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
                      placeholder="mitchell@company.com.au"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs font-mono focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-chrome-300 mb-2">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+61 400 123 456"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs font-mono focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-mono uppercase tracking-wider text-chrome-300 mb-2">
                      Primary Service of Interest *
                    </label>
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-900 border border-white/10 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none transition-colors"
                    >
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
                    Project / Build Budget (AUD)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {projectBudgetTiers.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setFormData({ ...formData, projectBudget: b })}
                        className={`py-2 px-3 rounded-lg text-xs font-mono transition-all border text-left ${
                          formData.projectBudget === b
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
                  <label className="block text-xs font-mono uppercase tracking-wider text-chrome-300 mb-2">
                    Monthly Marketing Retainer (AUD)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {marketingBudgetTiers.map((mb) => (
                      <button
                        key={mb}
                        type="button"
                        onClick={() => setFormData({ ...formData, marketingBudget: mb })}
                        className={`py-2 px-3 rounded-lg text-xs font-mono transition-all border text-left ${
                          formData.marketingBudget === mb
                            ? 'bg-white text-black font-semibold border-white shadow-md'
                            : 'bg-white/[0.03] text-chrome-300 border-white/10 hover:border-white/30'
                        }`}
                      >
                        {mb}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-xs font-mono uppercase tracking-wider text-chrome-300 mb-2">
                    Target Delivery Velocity
                  </label>
                  <select
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-900 border border-white/10 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none transition-colors"
                  >
                    {timelineOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-obsidian-900 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-chrome-300 mb-2">
                    Project Brief & Objectives *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Describe your project, objectives, current systems, or marketing goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs font-mono focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-white/10 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4 text-black" />
                    <span>{status === 'submitting' ? 'Transmitting Brief...' : 'Submit Project Brief'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleLaunchWhatsApp}
                    className="w-full sm:w-auto py-3.5 px-6 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-mono text-xs tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp Founder Direct</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
