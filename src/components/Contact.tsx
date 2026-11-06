import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Mail, 
  Phone, 
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
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const servicesList = [
    'Software Development',
    'Digital Marketing',
    'Social Media Marketing',
    'Paid Advertising',
    'Video Production',
    'Full Omnichannel Ecosystem',
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
`*NEW PROJECT INQUIRY — KRAVINOFFS.COM*
---------------------------------------
*Name:* ${formData.name.trim()}
*Email:* ${formData.email.trim()}
*Phone/WhatsApp:* ${formData.phone.trim() || 'N/A'}
*Service Required:* ${formData.service}

*Project Brief & Objectives:*
${formData.message.trim()}
---------------------------------------
_Dispatched via Kravinoffs Agency Portal_`;

    const whatsappUrl = `https://wa.me/923160442304?text=${encodeURIComponent(formattedMessage)}`;

    setTimeout(() => {
      setStatus('success');
      window.open(whatsappUrl, '_blank');
    }, 500);
  };

  const handleEmailDirect = () => {
    const subject = encodeURIComponent(`[Project Inquiry] ${formData.service || 'Agency Services'} - ${formData.name || 'Client'}`);
    const body = encodeURIComponent(
`Hello Hamza and Kravinoffs Team,

I am writing to discuss an agency engagement with Kravinoffs.

Name: ${formData.name || 'N/A'}
Email: ${formData.email || 'N/A'}
Phone / WhatsApp: ${formData.phone || 'N/A'}
Service of Interest: ${formData.service || 'General Inquiry'}

Project Details:
${formData.message || 'We would like to schedule an introductory consultation call.'}

Best regards,
${formData.name || 'Client'}`
    );

    window.location.href = `mailto:hamzamalik789890@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-block text-xs font-bold tracking-[0.2em] text-chrome-300 uppercase px-3.5 py-1.5 rounded-full bg-white/[0.04] mb-4">
            Get In Touch
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase mb-6">
            LET'S CREATE SOMETHING <br className="hidden sm:inline" />
            <span className="text-gradient-chrome">EXTRAORDINARY.</span>
          </h2>
          <p className="text-base sm:text-lg text-chrome-300 leading-relaxed font-normal">
            Have an idea, a project, or a business ready to grow? Let's discuss how Kravinoffs can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Communication Channels - Clean & Borderless */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Direct Card */}
            <a
              href="https://wa.me/923160442304?text=Hello%20Kravinoffs!%20I'm%20interested%20in%20your%20services.%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl transition-all duration-300 flex items-start gap-4 group block hover:translate-x-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform shadow-lg shadow-emerald-500/10">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-bold text-chrome-400 uppercase tracking-widest block mb-0.5">
                  Direct WhatsApp Hotline
                </span>
                <span className="font-heading text-xl font-bold text-white block">
                  +92 316 0442304
                </span>
                <span className="text-xs text-emerald-400 mt-1 inline-flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available 24/7 • Fast Response
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-chrome-400 group-hover:text-emerald-400 transition-colors" />
            </a>

            {/* Email Card */}
            <a
              href="mailto:hamzamalik789890@gmail.com"
              className="p-6 rounded-3xl transition-all duration-300 flex items-start gap-4 group block hover:translate-x-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/[0.05] flex items-center justify-center text-chrome-100 shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-bold text-chrome-400 uppercase tracking-widest block mb-0.5">
                  Official Communication
                </span>
                <span className="font-heading text-base sm:text-lg font-bold text-white break-all block">
                  hamzamalik789890@gmail.com
                </span>
                <span className="text-xs text-chrome-400 mt-1 block">
                  Proposals, RFPs & Partnerships
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-chrome-400 group-hover:text-white transition-colors" />
            </a>

            {/* Phone Card */}
            <div className="p-6 rounded-3xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.05] flex items-center justify-center text-chrome-300 shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-chrome-400 uppercase tracking-widest block mb-0.5">
                  Direct Phone
                </span>
                <span className="font-heading text-xl font-bold text-white block">
                  +92 316 0442304
                </span>
                <span className="text-xs text-chrome-400 mt-1 block">
                  Direct contact with Hamza Malik
                </span>
              </div>
            </div>

            {/* Quick Consultation Highlight */}
            <div className="p-6 rounded-3xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white mb-2">
                <Clock className="w-4 h-4 text-chrome-200" />
                Prompt Turnaround Time
              </div>
              <p className="text-xs text-chrome-300 leading-relaxed font-normal">
                We review inbound client briefs within 2 hours. If you need urgent project kickoffs, message us on WhatsApp directly for real-time discussion.
              </p>
            </div>

          </div>

          {/* Form - Clean & Borderless */}
          <div className="lg:col-span-7 rounded-3xl p-8 sm:p-10">
            <h3 className="font-heading text-2xl font-bold text-white mb-2">
              Send Your Project Brief
            </h3>
            <p className="text-xs sm:text-sm text-chrome-300 mb-8 font-normal">
              Tell us about your objectives, timeline, or challenges. We will prepare an architectural roadmap.
            </p>

            {status === 'error' && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 text-red-400 text-xs sm:text-sm flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {status === 'success' && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 text-emerald-400 text-xs sm:text-sm flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Redirecting to WhatsApp to send your brief directly to Hamza...</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-chrome-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Alexander Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] text-white placeholder-chrome-500 text-sm focus:bg-white/[0.08] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-chrome-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="e.g. alexander@enterprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] text-white placeholder-chrome-500 text-sm focus:bg-white/[0.08] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-chrome-300 mb-2">
                    WhatsApp / Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+92 316 0442304"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] text-white placeholder-chrome-500 text-sm focus:bg-white/[0.08] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-chrome-300 mb-2">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-obsidian-900 text-white text-sm focus:outline-none transition-colors"
                  >
                    <option value="" disabled>Select a division</option>
                    {servicesList.map((svc) => (
                      <option key={svc} value={svc} className="bg-obsidian-900 text-white">
                        {svc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-chrome-300 mb-2">
                  Project Details / Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Outline your project scope, target deadlines, current bottlenecks, or desired outcomes..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] text-white placeholder-chrome-500 text-sm focus:bg-white/[0.08] focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:flex-1 py-4 px-6 rounded-xl bg-white hover:bg-chrome-100 text-obsidian-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xl shadow-white/10 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'submitting' ? 'Preparing Brief...' : 'Send Brief via WhatsApp'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailDirect}
                  className="w-full sm:w-auto py-4 px-6 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-semibold text-xs tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send via Email Client</span>
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
