/**
 * Lightyear Studios — Master AI Intelligence Engine & Knowledge Base
 * 
 * Provides authentic, localized, and context-aware responses regarding
 * Lightyear Studios services, pricing, restaurant technology, video specs,
 * founder background, and international business recommendations.
 */

export interface CountryProfile {
  code: string;
  name: string;
  currency: string;
  symbol: string;
  rateToAUD: number; // Conversion multiplier relative to AUD (1 AUD = rate)
  timezone: string;
  marketNote: string;
}

export const SUPPORTED_COUNTRIES: Record<string, CountryProfile> = {
  AU: {
    code: 'AU',
    name: 'Australia',
    currency: 'AUD',
    symbol: 'A$',
    rateToAUD: 1.0,
    timezone: 'AEST / AEDT (Sydney / Melbourne / Brisbane)',
    marketNote: 'Primary market. Transparent AUD pricing (ex GST). Australian business registration compliance & consumer habits.'
  },
  US: {
    code: 'US',
    name: 'United States',
    currency: 'USD',
    symbol: '$',
    rateToAUD: 0.65,
    timezone: 'EST / CST / PST',
    marketNote: 'Remote delivery. Competitive rates for US tech startups, SaaS MVPs, and marketing execution.'
  },
  GB: {
    code: 'GB',
    name: 'United Kingdom',
    currency: 'GBP',
    symbol: '£',
    rateToAUD: 0.51,
    timezone: 'GMT / BST',
    marketNote: 'Serving UK retail, agencies, and professional services with high-standard remote engineering.'
  },
  AE: {
    code: 'AE',
    name: 'United Arab Emirates / GCC',
    currency: 'AED',
    symbol: 'AED ',
    rateToAUD: 2.39,
    timezone: 'GST (Dubai / Abu Dhabi)',
    marketNote: 'High-growth hospitality, luxury real estate, and rapid commercial video production.'
  },
  PK: {
    code: 'PK',
    name: 'Pakistan',
    currency: 'PKR',
    symbol: 'PKR ',
    rateToAUD: 180.0,
    timezone: 'PKT (Operating Base: Lahore)',
    marketNote: 'Operating headquarters. Direct local executive consultations with founder Hamza Malik.'
  },
  CA: {
    code: 'CA',
    name: 'Canada',
    currency: 'CAD',
    symbol: 'C$',
    rateToAUD: 0.90,
    timezone: 'EST / PST',
    marketNote: 'Full-stack web applications and restaurant digital ordering setups.'
  },
  GLOBAL: {
    code: 'GLOBAL',
    name: 'International / Remote',
    currency: 'AUD',
    symbol: 'A$',
    rateToAUD: 1.0,
    timezone: 'Global / UTC',
    marketNote: 'Remote-first studio delivering worldwide with agile communication and milestone tracking.'
  }
};

export interface StudioKnowledge {
  brand: string;
  tagline: string;
  founder: string;
  founderTitle: string;
  location: string;
  contactWhatsApp: string;
  contactEmail: string;
  divisions: string[];
  marketingPackages: {
    name: string;
    audPrice: number;
    description: string;
    deliverables: string[];
  }[];
  restaurantTech: {
    name: string;
    startingAud: number;
    description: string;
  }[];
  softwarePricing: {
    item: string;
    audPrice: string;
  }[];
  videoPricing: {
    service: string;
    audPrice: string;
    details: string;
  }[];
}

export const STUDIO_KNOWLEDGE: StudioKnowledge = {
  brand: 'Lightyear Studios',
  tagline: 'Ideas Beyond Limits. Built to Create. Engineered to Grow.',
  founder: 'Hamza Malik',
  founderTitle: 'Founder & Studio Director',
  location: 'Lahore, Pakistan (Serving Australia & Global Clients)',
  contactWhatsApp: '+92 316 0442304',
  contactEmail: 'hamzamalik789890@gmail.com',
  divisions: [
    'Custom Software & Web Application Development',
    'Commercial Video Production (Up to 4K UHD)',
    'Digital Marketing, SEO/AEO & Paid Ads'
  ],
  marketingPackages: [
    {
      name: 'Starter Digital Presence',
      audPrice: 990,
      description: 'Ideal for local businesses establishing a consistent online presence.',
      deliverables: [
        'Management of up to 2 social platforms (Meta / Instagram)',
        '8 graphic posts + 4 short-form edited reels monthly',
        'Basic on-page SEO & Google Business Profile optimisation',
        'Monthly analytics report & email support'
      ]
    },
    {
      name: 'Growth & Performance Engine (Most Popular)',
      audPrice: 1900,
      description: 'Ideal for growing businesses looking for active lead generation and content scaling.',
      deliverables: [
        'Management of up to 3 social platforms',
        '12 graphic posts + 6 short-form video reels monthly',
        'Meta Ads OR Google Ads campaign setup & weekly management',
        'Advanced Technical & Local SEO optimisation',
        'Bi-weekly performance review & monthly strategy meeting'
      ]
    },
    {
      name: 'Market Leader Full-Scale Dominance',
      audPrice: 3500,
      description: 'Comprehensive digital infrastructure for multi-location venues and market leaders.',
      deliverables: [
        'Management of up to 4 social channels',
        '16 graphic posts + 8 edited commercial videos monthly',
        'Simultaneous Meta Ads AND Google Ads management',
        'Full Funnel AEO / GEO Search optimisation',
        'Real-time conversion tracking, funnel tuning & bi-weekly meetings'
      ]
    }
  ],
  restaurantTech: [
    {
      name: 'Commission-Free Direct Online Ordering',
      startingAud: 2500,
      description: 'Save 20-30% marketplace fees (UberEats/DoorDash) with your own branded web app for pickup & delivery with WhatsApp order dispatch.'
    },
    {
      name: 'Modern Restaurant POS & Kitchen Display (KDS)',
      startingAud: 4500,
      description: 'Touchscreen counter POS integrated with paperless kitchen display screens, table layout management, split bills, and thermal printer hookup.'
    },
    {
      name: 'QR Code Digital Table Menus & Inventory Management',
      startingAud: 2000,
      description: 'Interactive tabletop QR digital menus with live ingredient tracking, item costings, and zero-touch re-ordering.'
    }
  ],
  softwarePricing: [
    { item: 'Blog / Content Website', audPrice: 'From A$2,000' },
    { item: 'Standard Business Website', audPrice: 'From A$2,500' },
    { item: 'Restaurant Online Ordering System', audPrice: 'From A$2,500' },
    { item: 'Professional Custom Website', audPrice: 'A$3,500 – A$6,500' },
    { item: 'Restaurant POS & KDS System', audPrice: 'From A$4,500' },
    { item: 'Custom Web Application / Portal', audPrice: 'From A$5,000' },
    { item: 'SaaS / PaaS Platform MVP', audPrice: 'From A$8,000' },
    { item: 'ERP & Business Management System', audPrice: 'From A$10,000' },
    { item: 'Enterprise Software Architecture', audPrice: 'Custom Quotation' }
  ],
  videoPricing: [
    { service: 'Social Media Reel Editing', audPrice: 'From A$250 / video', details: 'Client footage hook tuning, subtitles, sound design, 9:16 format' },
    { service: 'Short Promotional Video', audPrice: 'From A$750', details: 'Up to 30-45s promo, motion graphics, audio mastering, 1080p/4K' },
    { service: 'Product Commercial', audPrice: 'From A$1,500', details: 'Cinematic product showcase, lighting, color grading' },
    { service: 'Corporate / Brand Film', audPrice: 'From A$2,500', details: 'Executive interviews, company showcase, multi-platform cuts' },
    { service: 'Full End-to-End Commercial', audPrice: 'From A$3,500', details: 'Scripting, cinematography up to 4K, full post-production' },
    { service: 'Monthly Video Content Retainer', audPrice: 'Custom Monthly Quote', details: 'Ongoing batches of video content for brands and venues' }
  ]
};

/**
 * Format currency according to the selected country profile
 */
export function formatCurrency(audAmount: number, country: CountryProfile): string {
  const converted = audAmount * country.rateToAUD;
  if (country.code === 'PK') {
    return `${country.symbol}${Math.round(converted).toLocaleString('en-US')}`;
  }
  if (country.code === 'AU') {
    return `A$${Math.round(converted).toLocaleString('en-US')}`;
  }
  return `${country.symbol}${Math.round(converted).toLocaleString('en-US')} (~A$${audAmount.toLocaleString('en-US')})`;
}

export interface AIResponse {
  answer: string;
  suggestions: string[];
  ctaType?: 'whatsapp' | 'pricing' | 'portfolio' | 'email';
  ctaUrl?: string;
  ctaText?: string;
}

/**
 * Intelligent Core Studio Reasoning Engine
 */
export function generateStudioAIResponse(
  userQuery: string,
  countryCode: string = 'AU'
): AIResponse {
  const q = userQuery.toLowerCase().trim();
  const country = SUPPORTED_COUNTRIES[countryCode] || SUPPORTED_COUNTRIES.AU;

  // 1. Restaurant Solutions & Hospitality POS
  if (
    q.includes('restaurant') ||
    q.includes('cafe') ||
    q.includes('food') ||
    q.includes('pos') ||
    q.includes('ordering') ||
    q.includes('menu') ||
    q.includes('kds') ||
    q.includes('kitchen')
  ) {
    const onlineOrderPrice = formatCurrency(2500, country);
    const posPrice = formatCurrency(4500, country);

    return {
      answer: `🍽️ **Lightyear Studios Restaurant Technology Solutions**\n\nMany hospitality businesses lose **20% to 30%** in commission fees to third-party delivery aggregators (UberEats, DoorDash). We engineer proprietary hospitality platforms that give you 100% control:\n\n1. **Commission-Free Direct Online Ordering** (Starting at **${onlineOrderPrice}**)\n   - Branded web app for customer pickup & delivery.\n   - Zero marketplace commissions.\n   - Live order alerts sent directly to WhatsApp & kitchen printers.\n\n2. **Touchscreen POS & Kitchen Display (KDS)** (Starting at **${posPrice}**)\n   - Counter POS with instant split-billing, table management, and paperless kitchen screens.\n\n3. **QR Code Table Menus & Inventory Tracking**\n   - Dynamic contactless tabletop ordering with recipe-level ingredient cost tracking.\n\n💡 *Recommendation:* If you're looking to eliminate third-party commission bleed immediately, we recommend beginning with the direct online ordering system and pairing it with our **Starter** or **Growth** digital marketing package to drive local foot-traffic!`,
      suggestions: [
        'How does the POS integrate with thermal printers?',
        'Can I keep customer data from online ordering?',
        'What marketing package is best for my restaurant?',
        'Calculate total setup cost for my venue'
      ],
      ctaType: 'whatsapp',
      ctaUrl: `https://wa.me/923160442304?text=${encodeURIComponent(`Hello Hamza! I'm interested in discussing Restaurant Technology and Online Ordering for my venue (${country.name}).`)}`,
      ctaText: 'Discuss Restaurant Tech on WhatsApp'
    };
  }

  // 2. Marketing Packages & Retainers
  if (
    q.includes('marketing') ||
    q.includes('package') ||
    q.includes('retainer') ||
    q.includes('social media') ||
    q.includes('ads') ||
    q.includes('seo') ||
    q.includes('meta ads') ||
    q.includes('google ads')
  ) {
    const pkg1 = formatCurrency(990, country);
    const pkg2 = formatCurrency(1900, country);
    const pkg3 = formatCurrency(3500, country);

    return {
      answer: `📈 **Transparent Digital Marketing Packages (${country.currency})**\n\nLightyear Studios offers 3 clear, transparent monthly retainers with no lock-in contracts:\n\n1. **Tier 01: Starter Digital Presence** — **${pkg1} / month**\n   - Up to 2 social channels managed (Meta / Instagram).\n   - 8 graphic creatives + 4 short-form video reels monthly.\n   - Basic on-page SEO & Google Business Profile tuning.\n\n2. **Tier 02: Growth & Performance Engine (Most Popular)** — **${pkg2} / month**\n   - Up to 3 social channels managed.\n   - 12 graphics + 6 video reels monthly.\n   - Full Meta Ads OR Google Ads campaign setup & optimization.\n   - Technical & Local SEO targeting high-intent local searches.\n\n3. **Tier 03: Market Leader** — **${pkg3} / month**\n   - Up to 4 social channels managed.\n   - 16 graphics + 8 video reels monthly.\n   - Dual Meta Ads & Google Ads management with full funnel AEO/GEO optimization.\n\n*Note:* Ad spend is paid directly to advertising platforms (Google/Meta). Prices exclude GST where applicable.`,
      suggestions: [
        'Which package is best for a new business?',
        'Do you handle ad spend budget management?',
        'What is AEO and GEO optimization?',
        'Can you show examples of video reels you edited?'
      ],
      ctaType: 'whatsapp',
      ctaUrl: `https://wa.me/923160442304?text=${encodeURIComponent(`Hello Hamza! I'd like to discuss your Digital Marketing Packages (${country.currency}).`)}`,
      ctaText: 'Inquire About Marketing Retainers'
    };
  }

  // 3. Custom Software, Websites & SaaS Development
  if (
    q.includes('software') ||
    q.includes('website') ||
    q.includes('web app') ||
    q.includes('saas') ||
    q.includes('erp') ||
    q.includes('code') ||
    q.includes('developer') ||
    q.includes('stack') ||
    q.includes('tech stack')
  ) {
    const sitePrice = formatCurrency(2500, country);
    const appPrice = formatCurrency(5000, country);
    const saasPrice = formatCurrency(8000, country);

    return {
      answer: `💻 **Software & Web Application Architecture**\n\nWe design and engineer modern digital products built for scale, performance, and clean maintainability:\n\n- **Business & Corporate Websites:** From **${sitePrice}** (Custom UI/UX, Next.js / React, fast Core Web Vitals)\n- **Custom Web Applications & Portals:** From **${appPrice}** (Admin dashboards, booking engines, client portals)\n- **SaaS / PaaS Platform MVPs:** From **${saasPrice}** (Multi-tenant architecture, Stripe billing, RBAC, API integrations)\n- **Enterprise ERPs & Business Systems:** From **${formatCurrency(10000, country)}**\n\n🛠️ **Our Verified Tech Stack:**\n- **Frontend:** React 18, Next.js (App Router), TypeScript, TailwindCSS, Framer Motion\n- **Backend & Realtime:** Node.js, Python FastAPI, WebSockets (for live POS), PostgreSQL, Redis\n- **Cloud & Edge:** AWS, Vercel, Supabase, Cloudflare CDN\n\n💡 *Engagement Models:* Available as fixed-price turnkey builds or monthly dedicated engineering capacity (from **${formatCurrency(1500, country)} / mo**).`,
      suggestions: [
        'How long does a custom SaaS MVP take?',
        'Do you provide ongoing technical maintenance?',
        'Can you build an ERP tailored to my workflows?',
        'Review my project specifications'
      ],
      ctaType: 'pricing',
      ctaUrl: '/services',
      ctaText: 'View Full Pricing Table'
    };
  }

  // 4. Video Production, Filming & Reels
  if (
    q.includes('video') ||
    q.includes('film') ||
    q.includes('cinema') ||
    q.includes('reel') ||
    q.includes('commercial') ||
    q.includes('editing') ||
    q.includes('camera') ||
    q.includes('4k')
  ) {
    const editPrice = formatCurrency(250, country);
    const promoPrice = formatCurrency(750, country);
    const commPrice = formatCurrency(1500, country);

    return {
      answer: `🎥 **Commercial Video Production & Post-Production (Up to 4K UHD)**\n\nLightyear Studios crafts commercial visual assets that capture attention and build authority:\n\n- **Social Video Editing (9:16 Vertical):** From **${editPrice}** / video (Client-supplied footage, dynamic pacing, subtitles, sound mix)\n- **Short Promotional Video (30–45s):** From **${promoPrice}**\n- **Product Commercial / Showcase:** From **${commPrice}**\n- **Corporate / Brand Films:** From **${formatCurrency(2500, country)}**\n- **End-to-End Broadcast Commercial:** From **${formatCurrency(3500, country)}**\n\n🎬 **Production Arsenal & Color Pipelines:**\n- Sony FX cinema sensors & Blackmagic Design 4K/6K systems.\n- Master delivery in **ProRes 422 HQ** & web-optimized **H.264/H.265** up to **4K UHD**.\n- Color grading in **DaVinci Resolve Studio** (ACES color management) and broadcast audio normalization (-14 LUFS).`,
      suggestions: [
        'Can I send raw footage for you to edit into reels?',
        'What aspect ratios do you deliver?',
        'Do you provide royalty-free commercial music licensing?',
        'See your 4K video portfolio work'
      ],
      ctaType: 'portfolio',
      ctaUrl: '/video-portfolio',
      ctaText: 'Explore Video Portfolio'
    };
  }

  // 5. Pricing, Costs, Budget inquiries
  if (
    q.includes('price') ||
    q.includes('pricing') ||
    q.includes('cost') ||
    q.includes('budget') ||
    q.includes('rate') ||
    q.includes('quote') ||
    q.includes('how much')
  ) {
    return {
      answer: `🏷️ **Transparent Studio Pricing Overview (${country.currency})**\n\nHere is our clear starting pricing guide adjusted for your region (**${country.name}**):\n\n- **Business Websites:** From **${formatCurrency(2500, country)}**\n- **Restaurant Online Ordering (0% Fees):** From **${formatCurrency(2500, country)}**\n- **Restaurant POS & KDS Systems:** From **${formatCurrency(4500, country)}**\n- **Custom Web Applications:** From **${formatCurrency(5000, country)}**\n- **SaaS Platform MVP:** From **${formatCurrency(8000, country)}**\n- **Social Media Video Editing:** From **${formatCurrency(250, country)}** per video\n- **Commercial Video Production:** From **${formatCurrency(1500, country)}**\n- **Monthly Marketing Retainers:** **${formatCurrency(990, country)}** (Starter) | **${formatCurrency(1900, country)}** (Growth) | **${formatCurrency(3500, country)}** (Dominance)\n\n*Note:* We provide formal written proposals with milestone schedules prior to project kickoff. No hidden surprises.`,
      suggestions: [
        'What payment terms and milestones do you offer?',
        'Do you provide custom quotes for multi-service bundles?',
        'How do I book an introductory discovery call?',
        'Tell me more about the Growth marketing package'
      ],
      ctaType: 'whatsapp',
      ctaUrl: `https://wa.me/923160442304?text=${encodeURIComponent(`Hello Hamza! I'd like to request a formal quote for my project in ${country.name}.`)}`,
      ctaText: 'Request a Direct Quote'
    };
  }

  // 6. About the Studio, Founder, Location, Legitimacy
  if (
    q.includes('about') ||
    q.includes('founder') ||
    q.includes('who are you') ||
    q.includes('hamza') ||
    q.includes('location') ||
    q.includes('pakistan') ||
    q.includes('australia') ||
    q.includes('where are you')
  ) {
    return {
      answer: `🏢 **About Lightyear Studios**\n\n- **Founder & Studio Director:** **Hamza Malik**\n- **Operating Base:** Lahore, Pakistan (Operating a remote-first studio model with low overhead and senior-level execution).\n- **Primary Target Market:** Australia (Sydney, Melbourne, Brisbane, Perth, Adelaide) & International Clients.\n- **Studio Mission:** Unifying software engineering, commercial cinematography (up to 4K), and digital marketing under one creative direction.\n- **Direct Leadership:** Clients communicate directly with founder Hamza Malik throughout technical architecture, milestones, and deliverables.\n\n💬 **Direct Contact:**\n- WhatsApp: **+92 316 0442304**\n- Email: **hamzamalik789890@gmail.com**`,
      suggestions: [
        'How do you manage Australian timezones?',
        'Can I speak directly with Hamza Malik?',
        'What is your project development process?',
        'What technologies do you specialize in?'
      ],
      ctaType: 'whatsapp',
      ctaUrl: 'https://wa.me/923160442304',
      ctaText: 'Chat Directly with Founder Hamza'
    };
  }

  // 7. Suggestions & Business Recommendations
  if (
    q.includes('suggest') ||
    q.includes('recommend') ||
    q.includes('advice') ||
    q.includes('idea') ||
    q.includes('which one') ||
    q.includes('help me choose') ||
    q.includes('start')
  ) {
    return {
      answer: `🧭 **Strategic Studio Recommendations by Business Type**\n\nTell me a little about your business or check these proven playbooks:\n\n1. **For Hospitality (Restaurants, Cafes, Bars):**\n   - Stop bleeding 30% to delivery apps. Deploy a **Commission-Free Direct Online Ordering System** (from **${formatCurrency(2500, country)}**) paired with the **Growth Marketing Package** to acquire local repeat customers.\n\n2. **For Startups & Tech Founders:**\n   - Launch a lean **SaaS MVP** (from **${formatCurrency(8000, country)}**) built on TypeScript + Next.js + PostgreSQL. Once launched, switch to our **Monthly Development Partner** model for agile sprint iterations.\n\n3. **For Service Providers & E-commerce:**\n   - Re-platform to a **Professional Custom Website** with high conversion architecture, paired with **Meta & Google Ads** via our **Growth Package** (**${formatCurrency(1900, country)}/mo**).\n\n4. **For Brands Needing Media Presence:**\n   - Start with our **Social Video Editing** batch (from **${formatCurrency(250, country)}/video**) to build organic momentum on TikTok and Instagram Reels.`,
      suggestions: [
        'I have a restaurant in Australia, what do you recommend?',
        'I have an idea for a web app, where do we start?',
        'How does the monthly development partner model work?',
        'Calculate a custom package for my business'
      ],
      ctaType: 'whatsapp',
      ctaUrl: `https://wa.me/923160442304?text=${encodeURIComponent(`Hello Hamza! I'd like to get strategic advice for my business (${country.name}).`)}`,
      ctaText: 'Get Strategic Advice from Hamza'
    };
  }

  // 8. Urdu / Roman Urdu queries
  if (
    q.includes('kya') ||
    q.includes('kaise') ||
    q.includes('kitna') ||
    q.includes('rate') ||
    q.includes('mujhe') ||
    q.includes('btao') ||
    q.includes('website banwani') ||
    q.includes('video editing') ||
    q.includes('kamaal') ||
    q.includes('bhai') ||
    q.includes('yar')
  ) {
    return {
      answer: `Salam! **Lightyear Studios** digital engineering, commercial 4K video production aur digital marketing ka premier studio hai. \n\nDirector **Hamza Malik** (Lahore, Pakistan) ke under ham Australia aur international clients ke liye high-tier services provide karte hain:\n\n- **Websites & Web Apps:** Custom code, Next.js, React, zero-lag architectures (Starting from **${formatCurrency(2500, country)}**).\n- **Restaurant Tech:** Zero-commission direct online ordering system (UberEats ke 30% fees se azaadi) aur POS/KDS systems.\n- **Commercial Video:** Up to 4K UHD brand films aur short-form reels editing (Starting from **${formatCurrency(250, country)}** per video).\n- **Digital Marketing:** 3 fixed monthly retainers: Starter (**${formatCurrency(990, country)}/mo**), Growth (**${formatCurrency(1900, country)}/mo**), aur Market Leader (**${formatCurrency(3500, country)}/mo**).\n\nAap apna specific project bataiye, main exact scope aur solution suggest karta hoon!`,
      suggestions: [
        'Restaurant online ordering system ke barey mein btao',
        'Website banwane ka kitna kharch ayega?',
        'Digital marketing ke packages kya hain?',
        'Founder Hamza Malik se WhatsApp pe baat karni hai'
      ],
      ctaType: 'whatsapp',
      ctaUrl: 'https://wa.me/923160442304',
      ctaText: 'WhatsApp pe Hamza se baat karein'
    };
  }

  // 9. Default / General Inquiry
  return {
    answer: `👋 Welcome to **Lightyear Studios**! I am your AI Studio Assistant, equipped with comprehensive knowledge of our capabilities, Australian Dollar pricing, hospitality systems, and creative production standards.\n\nHow can I assist your business today?\n\n- **Software & SaaS:** Web applications, booking systems, ERPs, and custom websites.\n- **Restaurant Tech:** Commission-free online ordering (0% platform fees) & modern counter POS.\n- **Video Production:** Up to 4K UHD commercial brand films and high-impact social media reels.\n- **Digital Marketing:** Transparent monthly packages (A$990, A$1,900, and A$3,500/mo).\n\nFeel free to ask for specific pricing in **${country.currency} (${country.name})**, feature breakdowns, or strategic advice!`,
    suggestions: [
      'Show me the 3 Digital Marketing packages',
      'What restaurant tech solutions do you offer?',
      'How much does a custom web application cost?',
      'How do I schedule a consultation with Hamza Malik?'
    ],
    ctaType: 'whatsapp',
    ctaUrl: 'https://wa.me/923160442304',
    ctaText: 'Connect on WhatsApp (+92 316 0442304)'
  };
}
