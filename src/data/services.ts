import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'software-dev',
    number: '01',
    title: 'Enterprise Software & Cloud Systems',
    shortDesc: 'Mission-critical web, desktop, and distributed cloud applications engineered for extreme performance and scale.',
    detailedInfo: 'We architect type-safe, resilient software systems designed for high availability and low latency.',
    keyOfferings: [
      'Custom Enterprise Platforms',
      'High-Frequency Systems & APIs',
      'Cloud Architecture & DevOps',
      'Fintech & Trading Terminals'
    ],
    image: '/assets/software-dev.jpg',
    category: 'technology',
    kpi: '99.999% SLA • Sub-30ms Latency',
    timeline: 'Agile Sprint Releases'
  },
  {
    id: 'video-production',
    number: '02',
    title: '8K Cinema & Commercial Video',
    shortDesc: 'Broadcast-grade cinematic commercials, 3D CGI procedural animations, and high-conversion visual storytelling.',
    detailedInfo: 'High-end cinema camera systems, Hollywood-standard post-production, and photoreal 3D motion.',
    keyOfferings: [
      '8K Cinema Commercials',
      '3D Motion & CGI Visuals',
      'Product Reveal Films',
      'Color Grading & Audio Engineering'
    ],
    image: '/assets/video-production.jpg',
    category: 'creative',
    kpi: '8K RAW • Broadcast Certified',
    timeline: '10–20 Day Turnaround'
  },
  {
    id: 'paid-advertising',
    number: '03',
    title: 'Algorithmic Growth & Paid Media',
    shortDesc: 'Predictive media buying and performance marketing engineered for verified return on ad spend.',
    detailedInfo: 'Precision multi-channel performance advertising driven by real-time attribution and multivariate creative testing.',
    keyOfferings: [
      'Meta & Google Ads Management',
      'Dynamic Retargeting Funnels',
      'Omnichannel Attribution Modeling',
      'Creative Optimization Testing'
    ],
    image: '/assets/ads-running.jpg',
    category: 'marketing',
    kpi: '5.4x Verified Benchmark ROAS',
    timeline: 'Continuous Optimization'
  },
  {
    id: 'digital-marketing',
    number: '04',
    title: 'Digital Strategy & Search Dominance',
    shortDesc: 'Technical SEO and strategic inbound funnels that capture high-intent enterprise pipeline.',
    detailedInfo: 'Enterprise SEO architectures and market positioning strategies tailored for sustained organic dominance.',
    keyOfferings: [
      'Technical SEO Audits',
      'Enterprise SERP Dominance',
      'High-Intent Lead Capture',
      'Conversion Rate Optimization'
    ],
    image: '/assets/digital-marketing.jpg',
    category: 'marketing',
    kpi: 'Top 3 Search Placements',
    timeline: 'Ongoing Growth Retainers'
  },
  {
    id: 'social-media',
    number: '05',
    title: 'Social Authority & Short-Form Content',
    shortDesc: 'Algorithmic short-form video and brand curation engineered to build durable market authority.',
    detailedInfo: 'High-hook visual storytelling across vertical video platforms built to convert audience attention into brand equity.',
    keyOfferings: [
      '9:16 Algorithmic Reels & TikToks',
      'Brand Identity Curation',
      'Executive Thought Leadership',
      'Audience Engagement Systems'
    ],
    image: '/assets/social-media.jpg',
    category: 'marketing',
    kpi: '70M+ Organic Brand Impressions',
    timeline: 'Monthly Content Retainers'
  }
];
