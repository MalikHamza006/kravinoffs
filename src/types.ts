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
  views: string;
  roas: string;
  ctr: string;
  conversionLift: string;
}

export interface VideoProject {
  id: string;
  title: string;
  brand: string;
  category: string;
  aspectRatio: '16:9' | '9:16';
  duration: string;
  resolution: string;
  videoUrl: string;
  thumbnail: string;
  hookText: string;
  shortDesc: string;
  marketingStats: VideoMarketingStats;
  campaignOverview: string;
  targetAudience: string;
  distributionChannels: string[];
  creativeDeliverables: string[];
}

export interface MarketingCampaignSummary {
  totalViewsGenerated: string;
  averageROAS: string;
  totalRevenueGenerated: string;
  averageAudienceRetention: string;
  videoAssetsProduced: string;
}
