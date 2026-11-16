import React from 'react';
import { motion } from 'framer-motion';
import { About } from '../components/About';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Process } from '../components/Process';
import { Code2, Video, TrendingUp, Globe, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 sm:pb-32 min-h-screen bg-obsidian-950 text-chrome-200">
      <SEO
        title="About Lightyear Studios | Engineering Hub, Studio Provenance & Founder Hamza Malik"
        description="Lightyear Studios is directed by Hamza Malik, operating from Lahore to deliver high-performance software engineering, 4K commercial video, and digital marketing to Australia and global clients."
        canonical="https://kravinoffs.agency/about"
        keywords="About Lightyear Studios, Hamza Malik Founder, Australian Digital Agency, Software Engineering Studio, Video Production Agency Australia, Lightyear Studios Team"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Lightyear Studios",
          "url": "https://kravinoffs.agency/about",
          "mainEntity": {
            "@type": "Organization",
            "name": "Lightyear Studios",
            "founder": {
              "@type": "Person",
              "name": "Hamza Malik",
              "jobTitle": "Founder & Studio Director"
            }
          }
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-4 shadow-sm">
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            Studio Provenance & Principles
          </span>
          <h1 className="text-4xl sm:text-6xl font-heading font-bold text-white tracking-tight leading-[1.08] uppercase">
            WHERE TECHNOLOGY <br />
            <span className="text-gradient-cyan">MEETS CREATIVITY.</span>
          </h1>
          <p className="mt-4 text-chrome-300 text-base sm:text-lg leading-relaxed">
            Lightyear Studios was established to bridge the gap between technical software engineering and compelling visual storytelling, giving businesses one unified partner for digital product creation and market growth.
          </p>
        </div>

        {/* About Main Component */}
        <About />

        {/* Detailed Founder Section */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/10 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex flex-col items-center sm:items-start">
              <div className="w-24 h-24 rounded-2xl bg-white/[0.05] border-2 border-white/20 flex items-center justify-center text-3xl font-heading font-bold text-white shadow-xl mb-4">
                HM
              </div>
              <h3 className="text-2xl font-heading font-bold text-white">Hamza Malik</h3>
              <p className="text-xs font-mono text-cyan-300 uppercase tracking-wider mt-1">Founder & Studio Director</p>
              <div className="text-xs text-chrome-400 mt-2 font-mono">
                Operating Base: Lahore, Pakistan
              </div>
            </div>

            <div className="md:col-span-8 space-y-4 text-xs sm:text-sm text-chrome-300 leading-relaxed">
              <p>
                As Founder and Studio Director of Lightyear Studios, Hamza oversees technical product architecture, creative video standards, and digital marketing strategies for Australian and international clients.
              </p>
              <p>
                Our studio operates on a remote-first model, combining global technical capability with a deep understanding of Australian commercial requirements—ranging from hospitality restaurant ordering systems to high-performing e-commerce storefronts and corporate brand films.
              </p>
              <p className="pt-2 text-xs font-mono text-cyan-300">
                "Our philosophy is straightforward: understand the client's business, design the appropriate solution, and deliver work that generates genuine commercial value."
              </p>
            </div>
          </div>
        </div>

        {/* Production Toolchains Section */}
        <div className="mt-24 pt-20 border-t border-white/10">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight uppercase">
              Our Engineering & Production Toolchains
            </h2>
            <p className="text-chrome-300 text-sm sm:text-base mt-2">
              We build exclusively on modern, proven technology stacks and professional production workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Software Stack */}
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-white/[0.05] text-cyan-400 border border-white/10">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-white">
                    Software & Web Engineering
                  </h3>
                  <p className="text-xs font-mono text-cyan-300">Modern, Scalable Web Toolchains</p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-chrome-300">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="font-mono text-white mb-1 font-semibold">Frontend & Interactive Interfaces</div>
                  <p>React 18, Next.js App Router, TypeScript, TailwindCSS, Framer Motion</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="font-mono text-white mb-1 font-semibold">Backend, APIs & Cloud</div>
                  <p>Node.js, Python FastAPI, WebSockets for real-time POS, PostgreSQL, Redis, REST APIs</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="font-mono text-white mb-1 font-semibold">Deployment & Hosting</div>
                  <p>Vercel, AWS ECS / Lambda, Supabase, Cloudflare CDN & DNS edge acceleration</p>
                </div>
              </div>
            </div>

            {/* Video & Media Arsenal */}
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-white/[0.05] text-cyan-400 border border-white/10">
                  <Video className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-white">
                    Video & Post-Production Suite
                  </h3>
                  <p className="text-xs font-mono text-cyan-300">Cinema Cameras & Editing Suites</p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-chrome-300">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="font-mono text-white mb-1 font-semibold">Camera Systems & Formats</div>
                  <p>Sony FX Series, Blackmagic Design 4K/6K cinema sensors, ProRes & RAW acquisition</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="font-mono text-white mb-1 font-semibold">Editing, Grading & Motion</div>
                  <p>DaVinci Resolve Studio (ACES color pipeline), Adobe Premiere Pro, After Effects</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="font-mono text-white mb-1 font-semibold">Sound Design & Delivery</div>
                  <p>Custom sound design, audio sweetening, broadcast loudness normalization (-14 LUFS)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Us Component */}
        <WhyChooseUs />

        {/* Process Component */}
        <Process />

        {/* Bottom CTA */}
        <div className="mt-24 text-center max-w-3xl mx-auto p-10 sm:p-14 rounded-3xl bg-white/[0.02] border border-white/15">
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight uppercase">
            Let's Collaborate On Your Next Project
          </h2>
          <p className="text-sm text-chrome-300 mt-3 max-w-md mx-auto">
            Direct access to studio founder Hamza Malik. Honest assessments, transparent pricing, and dependable delivery.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-mono uppercase font-semibold tracking-wider transition-all shadow-md shadow-white/10"
            >
              <span>Get In Touch</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
