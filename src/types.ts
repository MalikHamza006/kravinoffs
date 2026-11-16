export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  detailedInfo: string;
  keyOfferings: string[];
  image: string;
  category: 'technology' | 'marketing' | 'creative';
  kpi: string;
  timeline: string;
  startingPrice?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Software & Web Development' | 'Digital Experiences' | 'Marketing & Branding' | 'Video Production';
  description: string;
  image: string;
  tags: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  detail: string;
}

export interface BrandPrinciple {
  title: string;
  tagline: string;
  description: string;
}

export interface SoftwareMetric {
  label: string;
  value: string;
}

export interface SoftwareProject {
  id: string;
  title: string;
  slug: string;
  client: string;
  category: string;
  type?: string;
  quality?: string;
  status: string;
  completionYear: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  metrics: SoftwareMetric[];
  techStack: string[];
  keyFeatures: string[];
  challenges: string;
  solution: string;
  liveDemo?: string;
  repoUrl?: string;
}

export interface VideoMarketingStats {
  format?: string;
  deliverables?: string;
  resolution?: string;
  sound?: string;
}

export interface VideoProject {
  id: string;
  title: string;
  brand: string;
  category: string;
  type?: string;
  quality?: string;
  aspectRatio: '16:9' | '9:16';
  duration: string;
  resolution: string;
  videoUrl: string;
  thumbnail: string;
  hookText: string;
  shortDesc: string;
  marketingStats?: VideoMarketingStats;
  campaignOverview: string;
  targetAudience: string;
  distributionChannels: string[];
  creativeDeliverables: string[];
}

export interface MarketingPackage {
  id: string;
  number: string;
  name: string;
  price: string;
  billingPeriod: string;
  positioning: string;
  isPopular?: boolean;
  deliverables: string[];
  bestFor: string;
}

export interface EngagementModel {
  number: string;
  title: string;
  price: string;
  description: string;
  deliverables: string[];
  isPopular?: boolean;
}
