import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'software-dev',
    number: '01',
    title: 'Software Development',
    shortDesc: 'We engineer powerful, scalable, and intuitive digital solutions that help businesses operate smarter and grow faster.',
    detailedInfo: 'From high-concurrency web applications to custom ERP systems, we combine modern software engineering with sleek user interfaces. Our solutions are built with clean code architecture, automated testing, and enterprise-grade cloud deployment.',
    keyOfferings: [
      'Custom Website Development',
      'Web Application Development',
      'Business Management Systems',
      'POS Systems',
      'CRM & ERP Solutions',
      'E-commerce Development',
      'Custom Dashboards',
      'API Development & Integration',
      'Database Design',
      'SaaS Product Development',
      'UI/UX Design',
      'Website Maintenance'
    ],
    image: '/assets/software-dev.jpg',
    category: 'technology',
    kpi: '99.9% Uptime & Sub-Second Latency',
    timeline: 'Sprint Delivery (2 - 6 Weeks)'
  },
  {
    id: 'digital-marketing',
    number: '02',
    title: 'Digital Marketing',
    shortDesc: 'We develop data-driven digital strategies that increase brand awareness, attract potential customers, and generate meaningful business growth.',
    detailedInfo: 'We combine rigorous search engine optimization with high-converting inbound marketing architectures. Every campaign is designed to capture high-intent prospective buyers and turn them into loyal repeat clients.',
    keyOfferings: [
      'Digital Marketing Strategy',
      'Search Engine Optimization (SEO)',
      'Search Engine Marketing (SEM)',
      'Google Business Profile Optimization',
      'Lead Generation',
      'Conversion Optimization',
      'Marketing Analytics',
      'Brand Positioning',
      'Campaign Strategy'
    ],
    image: '/assets/digital-marketing.jpg',
    category: 'marketing',
    kpi: 'Top 3 SERP Ranking & 4x Lead Velocity',
    timeline: 'Agile 30-Day Growth Cycles'
  },
  {
    id: 'social-media',
    number: '03',
    title: 'Social Media Marketing',
    shortDesc: 'We help brands build a powerful social presence through strategic content, consistent communication, and engaging social media experiences.',
    detailedInfo: 'Building an authoritative digital footprint requires distinct visual storytelling. We curate aesthetic content feeds, craft viral short-form reels, and execute targeted community outreach across all major social networks.',
    keyOfferings: [
      'Social Media Management',
      'Instagram Marketing',
      'Facebook Marketing',
      'TikTok Marketing',
      'LinkedIn Marketing',
      'Content Planning',
      'Creative Post Design',
      'Reels & Short-Form Content',
      'Community Management',
      'Social Media Strategy',
      'Monthly Content Calendars'
    ],
    image: '/assets/social-media.jpg',
    category: 'marketing',
    kpi: 'Organic Reach & Brand Authority',
    timeline: 'Monthly Content Retainers'
  },
  {
    id: 'paid-advertising',
    number: '04',
    title: 'Paid Advertising',
    shortDesc: 'Reach the right audience with strategically managed advertising campaigns designed to generate leads, increase conversions, and maximize marketing efficiency.',
    detailedInfo: 'We eliminate guesswork in ad spend. Leveraging predictive audience modeling, high-converting creative ad variations, and rigorous multivariate split-testing across Meta, Google, and TikTok to yield maximum ROAS.',
    keyOfferings: [
      'Meta Ads (Facebook & Instagram)',
      'Google Ads',
      'YouTube Advertising',
      'TikTok Ads',
      'Campaign Setup',
      'Audience Research',
      'Retargeting Campaigns',
      'Ad Creative Strategy',
      'Conversion Tracking',
      'Performance Optimization',
      'Campaign Reporting'
    ],
    image: '/assets/ads-running.jpg',
    category: 'marketing',
    kpi: 'Targeted High-ROAS Performance',
    timeline: 'Immediate Launch & Continuous Tuning'
  },
  {
    id: 'video-production',
    number: '05',
    title: 'Video Production',
    shortDesc: 'We transform stories and ideas into visually compelling videos that capture attention, communicate value, and leave lasting impressions.',
    detailedInfo: 'Visual media creates instant emotional conviction. We produce cinema-grade commercial advertisements, brand films, product showcases, and dynamic 3D motion graphics utilizing cutting-edge cinema rigs and precision post-production.',
    keyOfferings: [
      'Corporate Videos',
      'Promotional Videos',
      'Commercial Advertisements',
      'Social Media Reels',
      'Product Videos',
      'Brand Films',
      'Event Coverage',
      'Cinematic Video Editing',
      'Motion Graphics',
      'Color Grading',
      'Post-Production'
    ],
    image: '/assets/video-production.jpg',
    category: 'creative',
    kpi: 'Cinema Standard 4K/8K Deliverables',
    timeline: 'Pre-Production to Master (2 - 4 Weeks)'
  }
];
