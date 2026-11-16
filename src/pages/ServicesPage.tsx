import React from 'react';
import { motion } from 'framer-motion';
import { Services } from '../components/Services';
import { 
  Code2, Video, TrendingUp, UtensilsCrossed, CheckCircle2, 
  ArrowRight, ShieldCheck, Sparkles 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  marketingPackages, 
  softwareEngagementModels, 
  softwarePricingGuide, 
  videoPricingGuide 
} from '../data/services';

export const ServicesPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 sm:pb-32 min-h-screen bg-obsidian-950 text-chrome-200">
      <SEO
        title="Custom Software, Restaurant Tech, Video Production & Digital Marketing | Lightyear Studios"
        description="Comprehensive Australian studio capabilities: Website & Software Development, Restaurant POS & Ordering Tech, 4K Commercial Video Production, and Transparent Monthly Marketing Packages in AUD."
        canonical="https://kravinoffs.agency/services"
        keywords="Software Development Australia, Custom Software Pricing, Restaurant POS System Cost Australia, Commission-Free Food Ordering App, 4K Commercial Video Production, Social Media Video Editing, Digital Marketing Packages AUD, AEO Optimization Australia, GEO Optimization, Lightyear Studios, Hamza Malik"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Digital Engineering, Video Production & Marketing Capabilities",
          "provider": {
            "@type": "Organization",
            "name": "Lightyear Studios",
            "url": "https://kravinoffs.agency"
          },
          "serviceType": "Software Engineering, Video Production and Growth Marketing",
          "offers": [
            {
              "@type": "Offer",
              "name": "Custom Website & Software Development",
              "price": "1200",
              "priceCurrency": "AUD"
            },
            {
              "@type": "Offer",
              "name": "Restaurant POS & Commission-Free Ordering",
              "price": "3200",
              "priceCurrency": "AUD"
            },
            {
              "@type": "Offer",
              "name": "Digital Presence Monthly Marketing",
              "price": "990",
              "priceCurrency": "AUD"
            },
            {
              "@type": "Offer",
              "name": "Growth Engine Monthly Marketing",
              "price": "1900",
              "priceCurrency": "AUD"
            },
            {
              "@type": "Offer",
              "name": "Market Leader Monthly Marketing",
              "price": "3500",
              "priceCurrency": "AUD"
            }
          ]
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Studio Services & Australian Pricing
          </span>
          <h1 className="text-4xl sm:text-6xl font-heading font-bold text-white tracking-tight leading-[1.08] uppercase">
            BUILT TO CREATE. <br />
            <span className="text-gradient-cyan">ENGINEERED TO GROW.</span>
          </h1>
          <p className="mt-4 text-chrome-300 text-base sm:text-lg leading-relaxed">
            Lightyear Studios unifies software development, commercial visual media, and digital marketing. Explore our capabilities, engagement frameworks, and transparent Australian Dollar pricing below.
          </p>
        </div>

        {/* 5 Core Services Overview Grid */}
        <Services />

        {/* =========================================================================
            SPECIALIZED DIVISION: RESTAURANT TECHNOLOGY SOLUTIONS
            ========================================================================= */}
        <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent border border-white/15 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />

          <div className="max-w-3xl mb-10 relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-3">
              <UtensilsCrossed className="w-3.5 h-3.5 text-cyan-400" />
              Specialized Industry Solution
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight uppercase">
              Restaurant Technology & Digital Ordering Solutions
            </h2>
            <p className="text-sm sm:text-base text-chrome-300 mt-3 leading-relaxed">
              Australian cafes, restaurants, bars, and dining franchises lose 20% to 30% of revenue to delivery marketplace commissions. We build proprietary, commission-free restaurant ordering systems and modern point-of-sale platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="text-xs font-mono text-cyan-300 uppercase">Hospitality 01</div>
              <h3 className="text-lg font-heading font-bold text-white">Commission-Free Online Ordering</h3>
              <p className="text-xs text-chrome-300 leading-relaxed">
                Branded direct-ordering web app for pickup and delivery. Own your customer data, eliminate third-party commission fees, and receive order alerts instantly on WhatsApp.
              </p>
              <div className="text-xs font-mono text-cyan-300 pt-2 font-semibold">Starting from A$2,500</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="text-xs font-mono text-cyan-300 uppercase">Hospitality 02</div>
              <h3 className="text-lg font-heading font-bold text-white">Restaurant POS & Kitchen Display (KDS)</h3>
              <p className="text-xs text-chrome-300 leading-relaxed">
                Touch-screen counter POS synchronized with real-time paperless kitchen display screens. Table layout management, order routing, and instant split billing.
              </p>
              <div className="text-xs font-mono text-cyan-300 pt-2 font-semibold">Starting from A$4,500</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="text-xs font-mono text-cyan-300 uppercase">Hospitality 03</div>
              <h3 className="text-lg font-heading font-bold text-white">QR Code Table Menus & Inventory</h3>
              <p className="text-xs text-chrome-300 leading-relaxed">
                Contactless digital tabletop menus with dynamic pricing and ingredient availability. Recipe costing and ingredient level tracking to eliminate inventory waste.
              </p>
              <div className="text-xs font-mono text-cyan-300 pt-2 font-semibold">Custom Package Available</div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
            <span className="text-xs text-chrome-400 font-mono">
              Includes full staff onboarding, printer integration, and ongoing technical support.
            </span>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 font-semibold text-xs font-mono uppercase tracking-wider shadow-md"
            >
              <span>Inquire for Hospitality Tech</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* =========================================================================
            CORE DIVISION: 3 DIGITAL MARKETING PACKAGES (AUD PRICING)
            ========================================================================= */}
        <div id="marketing-pricing" className="mt-24 pt-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-3">
              <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
              Transparent Monthly Retainers
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight uppercase">
              Digital Marketing Packages
            </h2>
            <p className="text-sm sm:text-base text-chrome-300 mt-2 leading-relaxed">
              Transparent, results-driven monthly digital marketing packages tailored for Australian small businesses, growing startups, and multi-location operations. No lock-in contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marketingPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  pkg.isPopular
                    ? 'bg-gradient-to-b from-white/[0.06] to-white/[0.02] border-2 border-cyan-400/50 shadow-2xl shadow-cyan-950/40'
                    : 'bg-white/[0.02] border border-white/10 hover:border-white/30'
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-3 left-6">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white text-black font-bold shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <span className="text-xs font-mono text-chrome-400 uppercase tracking-widest block mb-1">
                      Tier {pkg.number}
                    </span>
                    <h3 className="text-xl font-heading font-bold text-white">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-chrome-400 mt-1">
                      {pkg.positioning}
                    </p>
                  </div>

                  <div className="py-4 my-4 border-y border-white/10 flex items-baseline gap-2">
                    <span className="text-3xl font-heading font-bold text-white">
                      {pkg.price}
                    </span>
                    <span className="text-xs font-mono text-chrome-400">
                      {pkg.billingPeriod}
                    </span>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <div className="text-[11px] font-mono text-cyan-300 uppercase font-semibold">
                      Included Deliverables:
                    </div>
                    {pkg.deliverables.map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-chrome-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/5 text-[11px] text-chrome-400 font-mono">
                    Best for: {pkg.bestFor}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-white/10">
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-full text-xs font-mono font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      pkg.isPopular
                        ? 'bg-white text-black hover:bg-neutral-200 shadow-md shadow-white/10'
                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                    }`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs font-mono text-chrome-400 flex items-center justify-between">
            <span>* All prices in AUD (ex GST). Media ad spend paid directly to ad networks (Google/Meta). Custom Enterprise multi-location packages available upon request.</span>
          </div>
        </div>

        {/* =========================================================================
            SOFTWARE DEVELOPMENT PRICING & SCOPE GUIDE
            ========================================================================= */}
        <div className="mt-24 pt-8 border-t border-white/10">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-3">
              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
              Software Architecture Estimations
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight uppercase">
              Software & Website Pricing Guide
            </h2>
            <p className="text-sm sm:text-base text-chrome-300 mt-2 leading-relaxed">
              Indicative project costs for bespoke web design, custom business applications, and SaaS engineering. Fixed-scope quotations provided after technical discovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwarePricingGuide.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-cyan-300 uppercase block mb-1">
                    Build Level 0{idx + 1}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-white mb-2">
                    {item.item}
                  </h3>
                  <div className="text-xl font-heading font-bold text-white mb-3">
                    {item.price}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-white/10">
                  <Link
                    to="/contact"
                    className="text-xs font-mono text-white hover:text-cyan-300 transition-colors flex items-center gap-1"
                  >
                    <span>Request Scope</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            COMMERCIAL VIDEO PRODUCTION PRICING GUIDE
            ========================================================================= */}
        <div className="mt-24 pt-8 border-t border-white/10">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-3">
              <Video className="w-3.5 h-3.5 text-cyan-400" />
              Visual Production Estimations
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight uppercase">
              Commercial Video Production Guide
            </h2>
            <p className="text-sm sm:text-base text-chrome-300 mt-2 leading-relaxed">
              Bespoke video production packages delivered up to 4K UHD resolution with commercial licensing and sound engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoPricingGuide.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-cyan-300 uppercase block mb-1">
                    Cinema Tier 0{idx + 1}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-white mb-2">
                    {item.service}
                  </h3>
                  <div className="text-xl font-heading font-bold text-white mb-3">
                    {item.startingPrice}
                  </div>
                  <p className="text-xs text-chrome-300 leading-relaxed mb-4">
                    {item.details}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-white/10">
                  <Link
                    to="/contact"
                    className="text-xs font-mono text-white hover:text-cyan-300 transition-colors flex items-center gap-1"
                  >
                    <span>Request Production</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            ENGAGEMENT MODELS
            ========================================================================= */}
        <div className="mt-24 pt-8 border-t border-white/10">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight uppercase">
              Flexible Engagement Frameworks
            </h2>
            <p className="text-xs sm:text-sm text-chrome-300 mt-2">
              We operate under transparent, milestone-driven structures tailored to ambitious Australian businesses and global innovators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {softwareEngagementModels.map((model, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
                <div className="text-xs font-mono text-chrome-400 uppercase tracking-wider">Model {model.number}</div>
                <h3 className="text-xl font-heading font-bold text-white">{model.title}</h3>
                <div className="text-sm font-bold text-cyan-300 font-mono">{model.price}</div>
                <p className="text-xs sm:text-sm text-chrome-300 leading-relaxed">
                  {model.description}
                </p>
                <div className="space-y-1.5 pt-3 border-t border-white/5">
                  {model.deliverables.map((deliv: string, dIdx: number) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs font-mono text-chrome-300">
                      <span className="w-1 h-1 rounded-full bg-emerald-400" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Banner */}
        <div className="mt-24 text-center max-w-3xl mx-auto p-10 sm:p-14 rounded-3xl bg-gradient-to-b from-white/[0.04] to-black border border-white/15">
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight uppercase">
            Let's Discuss Your Project Scope
          </h2>
          <p className="text-sm text-chrome-300 mt-3 max-w-md mx-auto">
            Book a direct consultation with founder Hamza Malik to review requirements, timelines, and tailored Australian pricing.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-mono uppercase font-semibold tracking-wider transition-all shadow-md shadow-white/10"
            >
              <span>Schedule Initial Briefing</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
