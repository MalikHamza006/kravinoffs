import { ServiceItem, MarketingPackage, EngagementModel } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'software-dev',
    number: '01',
    title: 'Custom Software & Digital Product Development',
    shortDesc: 'We design and develop modern digital solutions that simplify operations, improve customer experiences and help businesses scale.',
    detailedInfo: 'From modern corporate websites and high-converting landing pages to complex multi-tenant SaaS platforms and custom ERPs, our engineering team delivers clean, maintainable, and scalable software solutions.',
    keyOfferings: [
      'Business & Corporate Websites',
      'Custom Web Applications & Portals',
      'SaaS & PaaS Cloud Platforms',
      'ERP & Business Management Systems',
      'API Integrations & Automations',
      'Ongoing Maintenance & Support'
    ],
    image: '/assets/software-dev.jpg',
    category: 'technology',
    kpi: 'Modern Full-Stack Architecture',
    timeline: 'Agile Milestones & Sprints',
    startingPrice: 'From A$2,500'
  },
  {
    id: 'restaurant-tech',
    number: '02',
    title: 'Restaurant Technology & Digital Ordering',
    shortDesc: 'Complete digital hospitality systems: Restaurant POS, kitchen display screens, digital QR menus, and commission-free online food ordering.',
    detailedInfo: 'Designed specifically for Australian cafes, restaurants, bars, and multi-location culinary brands seeking to take back control of customer data and eliminate high delivery marketplace commissions.',
    keyOfferings: [
      'Restaurant POS & Floor Management',
      'Commission-Free Online Ordering',
      'Kitchen Display Systems (KDS)',
      'QR Code Tabletop Digital Menus',
      'Ingredient Tracking & Recipe Costing',
      'Direct WhatsApp Ordering Integration'
    ],
    image: '/assets/digital-marketing.jpg',
    category: 'technology',
    kpi: 'Zero Third-Party Commissions',
    timeline: '2–4 Week Rollout',
    startingPrice: 'From A$2,500'
  },
  {
    id: 'video-production',
    number: '03',
    title: 'Commercial Video Production & Creative Media',
    shortDesc: 'We create engaging commercial videos and visual content that help brands communicate their story, showcase their products and connect with their audiences.',
    detailedInfo: 'Professional commercial filmmaking and digital post-production. We produce brand commercials, product showcases, and high-retention vertical reels delivered in up to 4K UHD resolution across all modern aspect ratios.',
    keyOfferings: [
      'Commercial Brand & Corporate Films',
      'Cinematic Product Video Showcases',
      'High-Hook Social Media Reels & TikToks',
      'Professional Video Editing & Color Grading',
      'Motion Graphics & Titling',
      'Creative Direction & Scripting'
    ],
    image: '/assets/video-production.jpg',
    category: 'creative',
    kpi: 'Up to 4K UHD Delivery',
    timeline: '7–14 Day Turnaround',
    startingPrice: 'From A$250 / video'
  },
  {
    id: 'digital-marketing',
    number: '04',
    title: 'Digital Marketing, Search & Brand Growth',
    shortDesc: 'We help businesses strengthen their online presence, attract relevant audiences and turn digital attention into meaningful business opportunities.',
    detailedInfo: 'Integrated marketing combining technical SEO, emerging AEO/GEO answer engine optimisation, targeted Meta and Google ad campaigns, and consistent monthly social media management.',
    keyOfferings: [
      'Technical, On-Page & Local SEO',
      'Answer Engine Optimisation (AEO)',
      'Generative Engine Optimisation (GEO)',
      'Meta & Google Ads Campaign Management',
      'Social Media Content & Community Curation',
      'Monthly Analytics & Performance Reviews'
    ],
    image: '/assets/ads-running.jpg',
    category: 'marketing',
    kpi: 'Targeted Australian Audiences',
    timeline: 'Monthly Retainers',
    startingPrice: 'Packages from A$990 / mo'
  },
  {
    id: 'technical-consulting',
    number: '05',
    title: 'Technical Audits & Architecture Consulting',
    shortDesc: 'Objective, independent assessments of existing software architectures, website speed, security posture, or marketing inefficiencies.',
    detailedInfo: 'An intensive technical deep-dive reviewing codebase maintainability, server costs, Core Web Vitals, and tracking accuracy with clear, prioritized action steps.',
    keyOfferings: [
      'Full-Stack Architecture Audits',
      'Website Speed & Core Web Vitals Review',
      'Ad Account & Tracking Verification',
      'Security & Dependency Assessments',
      'Actionable Executive Roadmaps'
    ],
    image: '/assets/social-media.jpg',
    category: 'technology',
    kpi: 'Actionable Written Blueprint',
    timeline: '5–7 Business Days',
    startingPrice: 'From A$750'
  }
];

export const marketingPackages: MarketingPackage[] = [
  {
    id: 'pkg-digital-presence',
    number: '01',
    name: 'Digital Presence',
    price: 'A$990',
    billingPeriod: '/ month',
    positioning: 'For small Australian businesses building a professional online presence.',
    isPopular: false,
    deliverables: [
      'Management of up to 2 social media platforms',
      '8 social media graphic posts monthly',
      '4 short-form edited videos monthly (client-supplied footage)',
      '8–12 story creatives monthly',
      'Monthly content calendar',
      'Captions and hashtag research',
      'Basic community management',
      'Google Business Profile optimisation',
      'Foundational on-page SEO',
      'Monthly performance summary'
    ],
    bestFor: 'Startups, local businesses, restaurants and small service providers.'
  },
  {
    id: 'pkg-growth-engine',
    number: '02',
    name: 'Growth Engine',
    price: 'A$1,900',
    billingPeriod: '/ month',
    positioning: 'For growing Australian businesses that need consistent marketing and customer acquisition.',
    isPopular: true,
    deliverables: [
      'Management of up to 3 social platforms',
      '12 graphic posts monthly',
      '6 short-form edited videos monthly (client-supplied footage)',
      '16 story creatives monthly',
      'Monthly content strategy',
      'Caption writing and publishing',
      'Community management',
      'Local and on-page SEO',
      'Google Business Profile management',
      'One paid ad channel management (Meta OR Google Ads)',
      'Basic conversion tracking setup',
      'Monthly campaign optimisation',
      'Monthly performance report',
      'One monthly strategy meeting'
    ],
    bestFor: 'Growing restaurants, retail brands, professional businesses and online stores.'
  },
  {
    id: 'pkg-market-leader',
    number: '03',
    name: 'Market Leader',
    price: 'A$3,500',
    billingPeriod: '/ month',
    positioning: 'For established businesses ready for integrated digital growth.',
    isPopular: false,
    deliverables: [
      'Management of up to 4 social platforms',
      '16 graphic posts monthly',
      '8 short-form edited videos monthly (client-supplied footage)',
      '20 story creatives monthly',
      'Advanced content planning & creative direction',
      'Social media and community management',
      'Technical and on-page SEO',
      'Local SEO strategy',
      'AEO and GEO content optimisation',
      'Meta Ads management',
      'Google Ads management',
      'Conversion tracking and funnel optimisation',
      'Retargeting campaign management',
      'Monthly performance dashboard',
      'Monthly strategy meeting & quarterly review'
    ],
    bestFor: 'Established Australian businesses and ambitious growing brands.'
  }
];

export const softwareEngagementModels: EngagementModel[] = [
  {
    number: '01',
    title: 'Project-Based Development',
    price: 'Custom Quotation',
    description: 'Defined project scope and milestone-driven build for custom websites, software applications, or restaurant tech.',
    deliverables: [
      'Defined project scope & milestones',
      'Complete UI/UX design & architecture',
      'Code review, testing & deployment',
      'Documentation & IP handover'
    ]
  },
  {
    number: '02',
    title: 'Monthly Development Partner',
    price: 'From A$1,500 / mo',
    isPopular: true,
    description: 'Dedicated monthly engineering capacity to continuously build new features, optimize performance, and maintain systems.',
    deliverables: [
      'Dedicated monthly development hours',
      'Feature enhancements & bug fixes',
      'Priority turnaround on critical issues',
      'Regular progress reviews & updates'
    ]
  },
  {
    number: '03',
    title: 'Technical Audit & Consulting',
    price: 'From A$750',
    description: 'Thorough evaluation of existing websites or systems to identify performance bottlenecks, security risks, and optimization roadmaps.',
    deliverables: [
      'Comprehensive codebase & system audit',
      'Core Web Vitals & speed assessment',
      'Security & architecture recommendations',
      'Written action plan & debrief session'
    ]
  }
];

export const videoPricingGuide = [
  { service: 'Social Video Editing', startingPrice: 'From A$250 per video', details: 'Client-supplied footage, hook optimization, subtitles, audio mix, vertical 9:16 export.' },
  { service: 'Short Promotional Video', startingPrice: 'From A$750', details: 'Up to 30-45s promo video, motion graphics, audio mastering, 1080p / 4K UHD delivery.' },
  { service: 'Product Commercial', startingPrice: 'From A$1,500', details: 'Creative concept, product cinematic showcase, motion design, color grading.' },
  { service: 'Corporate / Brand Film', startingPrice: 'From A$2,500', details: 'Executive interviews, company showcase, sound design, multi-platform cutdowns.' },
  { service: 'Full Commercial Production', startingPrice: 'From A$3,500', details: 'Complete end-to-end commercial production, creative scripting, filming, and post-production.' },
  { service: 'Monthly Content Retainer', startingPrice: 'Custom Monthly Quote', details: 'Tailored monthly batches of short-form video assets for brands and hospitality venues.' }
];

export const softwarePricingGuide = [
  { item: 'Blog / CMS Website', price: 'From A$2,000' },
  { item: 'Business Website', price: 'From A$2,500' },
  { item: 'Restaurant Online Ordering System', price: 'From A$2,500' },
  { item: 'Professional Custom Website', price: 'A$3,500 – A$6,500' },
  { item: 'Restaurant POS & Management System', price: 'From A$4,500' },
  { item: 'Custom Web Application', price: 'From A$5,000' },
  { item: 'SaaS / PaaS Platform Development', price: 'From A$8,000' },
  { item: 'ERP & Business Management System', price: 'From A$10,000' },
  { item: 'Custom Enterprise Software', price: 'Custom Quote' }
];
