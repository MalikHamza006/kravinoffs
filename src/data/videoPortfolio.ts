import { VideoProject, MarketingCampaignSummary } from '../types';

export const videoPortfolio: VideoProject[] = [
  {
    id: 'krv-vid-01',
    title: 'Apex Chrono — The Architecture of Precision',
    brand: 'Apex Haute Horlogerie',
    category: 'Cinematic Commercial',
    type: 'Luxury Commercial Cinema',
    quality: '8K RED Monstro Cinema • ProRes 4444',
    aspectRatio: '16:9',
    duration: '01:45',
    resolution: '8K RED Monstro',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-watchmaker-repairing-a-watch-43224-large.mp4',
    thumbnail: '/assets/video-production.jpg',
    hookText: 'Masterpiece Precision',
    shortDesc: 'Macro cinematography with anamorphic optics.',
    marketingStats: {
      views: '8.4M Views',
      roas: '5.2x ROAS',
      ctr: '4.8% CTR',
      conversionLift: '+240%'
    },
    campaignOverview: 'Global product launch for luxury horology collectors.',
    targetAudience: 'Global UHNW and collectors.',
    distributionChannels: ['Cinema Pre-Roll', 'Private Portals'],
    creativeDeliverables: ['8K Hero Cut', 'Social Adaptations']
  },
  {
    id: 'krv-vid-02',
    title: 'Veloce Hypercar — Midnight Velocity',
    brand: 'Veloce Automotive Labs',
    category: 'Automotive & Cinema',
    type: 'High-Speed Automotive Film',
    quality: '4K Cinema Anamorphic • 120 FPS RAW',
    aspectRatio: '16:9',
    duration: '02:15',
    resolution: '4K Cinema Anamorphic',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-car-traveling-on-a-road-at-night-41584-large.mp4',
    thumbnail: '/assets/ads-running.jpg',
    hookText: '0 to 100 in 1.9s',
    shortDesc: 'Gyro-stabilized Russian Arm high-speed tracking.',
    marketingStats: {
      views: '16.8M Views',
      roas: '6.4x ROAS',
      ctr: '6.1% CTR',
      conversionLift: 'Sold Out'
    },
    campaignOverview: 'Theatrical product reveal campaign.',
    targetAudience: 'Performance automotive enthusiasts.',
    distributionChannels: ['YouTube 4K', 'Global Broadcast'],
    creativeDeliverables: ['Theatrical Film', 'Audio Stems']
  },
  {
    id: 'krv-vid-03',
    title: 'CyberShield — Zero-Trust Security in Motion',
    brand: 'CyberShield Systems Inc.',
    category: '3D Motion & CGI',
    type: '3D Procedural CGI Animation',
    quality: '4K Photoreal CGI • Octane / Houdini 60 FPS',
    aspectRatio: '16:9',
    duration: '01:20',
    resolution: '4K Photoreal CGI',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-code-31911-large.mp4',
    thumbnail: '/assets/software-dev.jpg',
    hookText: 'Zero-Trust Architecture',
    shortDesc: 'Houdini procedural threat simulation.',
    marketingStats: {
      views: '3.2M Views',
      roas: '4.6x Pipeline',
      ctr: '5.4% CTR',
      conversionLift: '+$14M Pipeline'
    },
    campaignOverview: 'Enterprise security 3D explainer.',
    targetAudience: 'Fortune 500 CISOs and CIOs.',
    distributionChannels: ['Keynote Displays', 'Direct ABM'],
    creativeDeliverables: ['3D Master Film', 'Cutdowns']
  },
  {
    id: 'krv-vid-04',
    title: 'Quantum Drop — Streetwear Midnight Drop',
    brand: 'Kravitz Street Couture',
    category: 'Viral Short-Form & Reels',
    type: 'Viral Algorithmic Short-Form',
    quality: '4K UHD Vertical 9:16 • 60 FPS ProRes',
    aspectRatio: '9:16',
    duration: '00:38',
    resolution: '4K Vertical UHD',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-model-walking-on-a-runway-at-a-fashion-show-42045-large.mp4',
    thumbnail: '/assets/social-media.jpg',
    hookText: 'Instant Drop Teaser',
    shortDesc: 'Sound-synced algorithmic pacing.',
    marketingStats: {
      views: '24.5M Views',
      roas: '7.8x ROAS',
      ctr: '9.2% CTR',
      conversionLift: 'Sold in 4 Mins'
    },
    campaignOverview: 'Gen-Z streetwear viral collection release.',
    targetAudience: 'Streetwear community.',
    distributionChannels: ['TikTok', 'Instagram Reels'],
    creativeDeliverables: ['Vertical Masters', 'Sound Pack']
  },
  {
    id: 'krv-vid-05',
    title: 'NeuralPay — Frictionless Global Money',
    brand: 'NeuralPay Fintech',
    category: 'Performance Paid Ads',
    type: 'Fintech Product Interface Film',
    quality: '4K UHD • ProRes 422 HQ',
    aspectRatio: '16:9',
    duration: '00:45',
    resolution: '4K UHD Broadcast',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smartphone-with-a-green-screen-41130-large.mp4',
    thumbnail: '/assets/digital-marketing.jpg',
    hookText: 'Instant Settlement',
    shortDesc: 'Micro-motion UI and macro live interaction.',
    marketingStats: {
      views: '9.1M Views',
      roas: '5.6x ROAS',
      ctr: '5.8% CTR',
      conversionLift: '+310% Installs'
    },
    campaignOverview: 'Performance paid acquisition campaign.',
    targetAudience: 'Cross-border entrepreneurs.',
    distributionChannels: ['Google Ads', 'Meta Prestige'],
    creativeDeliverables: ['Product Demo Film', 'Iterative Hooks']
  },
  {
    id: 'krv-vid-06',
    title: 'Sovereign Yachting — Riviera Horizon',
    brand: 'Sovereign Marine Monaco',
    category: 'Cinematic Commercial',
    type: 'FPV Cinema & Aerial Production',
    quality: '8K RED Cinema • FPV Heavy Lift Raw',
    aspectRatio: '16:9',
    duration: '02:30',
    resolution: '8K Cinema Widescreen',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-luxury-yacht-sailing-in-the-sea-43301-large.mp4',
    thumbnail: '/assets/video-production.jpg',
    hookText: 'Uncharted Luxury',
    shortDesc: 'Licensed FPV cinema drone choreography.',
    marketingStats: {
      views: '5.7M Views',
      roas: '4.9x ROI',
      ctr: '4.2% CTR',
      conversionLift: '3 Charters Booked'
    },
    campaignOverview: 'Ultra-luxury Mediterranean yacht charter brand film.',
    targetAudience: 'HNW yacht charter clients.',
    distributionChannels: ['Private Screenings', 'Superyacht News'],
    creativeDeliverables: ['Aerial 8K Master', 'Social Teasers']
  }
];

export const marketingSummary: MarketingCampaignSummary = {
  totalViewsGenerated: '70M+ Views',
  averageROAS: '5.4x Avg ROAS',
  totalRevenueGenerated: '$38M+ Attributed',
  averageAudienceRetention: '78% Completion',
  videoAssetsProduced: '120+ Master Films'
};

export const VIDEO_CATEGORIES = [
  'All',
  'Cinematic Commercial',
  'Automotive & Cinema',
  '3D Motion & CGI',
  'Viral Short-Form & Reels',
  'Performance Paid Ads'
];
