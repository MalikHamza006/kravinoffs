import { SoftwareProject } from '../types';

export const softwareProjects: SoftwareProject[] = [
  {
    id: 'krv-soft-01',
    title: 'AuraCloud Institutional Trading Terminal',
    slug: 'auracloud-trading-terminal',
    client: 'Apex Global Capital',
    category: 'Fintech & Cloud Systems',
    type: 'Fintech High-Frequency Terminal',
    quality: 'Sub-28ms P99 • 99.999% SLA • Rust / WebSockets',
    status: 'Production Live',
    completionYear: '2026',
    shortDesc: 'Low-latency institutional trading system with microsecond order routing.',
    fullDesc: 'Engineered for high-volume prop trading with sub-second WebSocket telemetry.',
    image: '/assets/software-dev.jpg',
    metrics: [
      { label: 'Latency P99', value: '< 28ms' },
      { label: 'Daily Volume', value: '$120M+' },
      { label: 'Uptime SLA', value: '99.999%' }
    ],
    techStack: ['React 18', 'TypeScript', 'Rust', 'Redis', 'WebSockets', 'AWS'],
    keyFeatures: ['Sub-millisecond WebSocket state sync', 'Canvas candlestick charts'],
    challenges: 'High concurrency under extreme market volatility.',
    solution: 'Engineered off-thread Web Worker architecture with Redis cluster.',
    liveDemo: 'https://auracloud-demo.kravinoffs.agency',
    repoUrl: 'https://github.com/kravinoffs/auracloud-engine'
  },
  {
    id: 'krv-soft-02',
    title: 'NeuroLogix Autonomous Logistics Brain',
    slug: 'neurologix-logistics-brain',
    client: 'TransContinental Freight Ltd.',
    category: 'Enterprise SaaS & AI',
    type: 'Enterprise AI Logistics Engine',
    quality: '98.8% ETA Precision • Apache Kafka • TimescaleDB',
    status: 'Enterprise Deployed',
    completionYear: '2025',
    shortDesc: 'AI-driven fleet dispatch and predictive route optimization system.',
    fullDesc: 'Multimodal freight routing platform optimizing long-haul transport corridors.',
    image: '/assets/digital-marketing.jpg',
    metrics: [
      { label: 'Fuel Saved', value: '19.4%' },
      { label: 'Active Fleet', value: '3,200+' },
      { label: 'ETA Accuracy', value: '98.8%' }
    ],
    techStack: ['Python', 'FastAPI', 'Next.js', 'PyTorch', 'Kafka', 'GCP'],
    keyFeatures: ['Dynamic risk modeling', 'Real-time IoT telematics ingestion'],
    challenges: 'Processing streaming sensor data with zero ingestion backpressure.',
    solution: 'Kafka partitioning paired with hypertable time-series storage.',
    liveDemo: 'https://neurologix.kravinoffs.agency',
    repoUrl: 'https://github.com/kravinoffs/neurologix-core'
  },
  {
    id: 'krv-soft-03',
    title: 'SynapsePulse Healthcare Tele-Diagnostics',
    slug: 'synapsepulse-healthcare-platform',
    client: 'Vanguard Health Alliance',
    category: 'HealthTech & WebRTC',
    type: 'HIPAA WebRTC Diagnostic Suite',
    quality: '< 65ms Audio/Video • End-to-End AES-256 • HIPAA Audited',
    status: 'HIPAA Certified Live',
    completionYear: '2026',
    shortDesc: 'Low-latency peer-to-peer encrypted clinical consultation suite.',
    fullDesc: 'HIPAA-compliant consultation system linking specialists with clinical data feeds.',
    image: '/assets/software-dev.jpg',
    metrics: [
      { label: 'Patient Base', value: '450k+' },
      { label: 'Audio Latency', value: '< 65ms' },
      { label: 'HIPAA Score', value: '100% Audit' }
    ],
    techStack: ['React', 'WebRTC', 'Go', 'Node.js', 'PostgreSQL', 'AWS GovCloud'],
    keyFeatures: ['AES-256 encrypted streams', 'FHIR / HL7 EHR connector'],
    challenges: 'Strict zero-retention regulatory compliance for live streams.',
    solution: 'Ephemeral memory processing with automated session key destruction.',
    liveDemo: 'https://synapsepulse.kravinoffs.agency',
    repoUrl: 'https://github.com/kravinoffs/synapsepulse-suite'
  },
  {
    id: 'krv-soft-04',
    title: 'VortexVault Web3 Institutional Custody',
    slug: 'vortexvault-custody-suite',
    client: 'Sovereign Digital Asset Fund',
    category: 'Fintech & Cloud Systems',
    type: 'MPC Cryptographic Asset Vault',
    quality: 'Multi-Party Computation • AWS Nitro Enclaves • $0 Exploit Record',
    status: 'Multi-Chain Live',
    completionYear: '2025',
    shortDesc: 'Institutional threshold cryptographic asset security platform.',
    fullDesc: 'Secures high-value digital treasury assets through distributed MPC keys.',
    image: '/assets/digital-marketing.jpg',
    metrics: [
      { label: 'Assets Secured', value: '$350M+' },
      { label: 'Exploits / Loss', value: '$0.00' },
      { label: 'Quorum Speed', value: '1.4 Sec' }
    ],
    techStack: ['TypeScript', 'Rust', 'React', 'Solidity', 'AWS Nitro'],
    keyFeatures: ['MPC-CMP keyless signing', 'Automated AML risk screening'],
    challenges: 'Zero-trust signing without key exposure in corporate environments.',
    solution: 'Hardware enclave validation with multi-quorum consensus.',
    liveDemo: 'https://vortexvault.kravinoffs.agency',
    repoUrl: 'https://github.com/kravinoffs/vortexvault-custody'
  },
  {
    id: 'krv-soft-05',
    title: 'OmniChannel Headless E-Commerce Matrix',
    slug: 'omnichannel-ecommerce-matrix',
    client: 'Kravitz Luxury Retail Group',
    category: 'E-Commerce & Scale',
    type: 'Headless Commerce Architecture',
    quality: '99/100 Lighthouse • 85k Peak TPS • Edge Cached',
    status: 'Global Production',
    completionYear: '2026',
    shortDesc: 'Ultra-fast Next.js storefront engineered for high-concurrency flash sales.',
    fullDesc: 'Powers multi-region luxury commerce with sub-second checkout speeds.',
    image: '/assets/social-media.jpg',
    metrics: [
      { label: 'Checkout Lift', value: '+42%' },
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'Peak TPS', value: '85,000' }
    ],
    techStack: ['Next.js 14', 'React', 'TypeScript', 'Redis', 'Vercel Edge'],
    keyFeatures: ['Edge-rendered merchandising', 'Single-click biometric checkout'],
    challenges: 'Traffic spikes causing database lock contention.',
    solution: 'Optimistic memory queueing with distributed edge page revalidation.',
    liveDemo: 'https://omnimatrix.kravinoffs.agency',
    repoUrl: 'https://github.com/kravinoffs/omnimatrix-storefront'
  },
  {
    id: 'krv-soft-06',
    title: 'ZeroShield DevSecOps Compliance Platform',
    slug: 'zeroshield-security-suite',
    client: 'Titanium Defense Technologies',
    category: 'Cybersecurity & Cloud',
    type: 'Continuous DevSecOps Platform',
    quality: 'Kernel eBPF Probes • <0.2% False Positive • SOC-2 / ISO 27001',
    status: 'GovCloud Deployed',
    completionYear: '2026',
    shortDesc: 'Continuous vulnerability scanning and runtime cloud security engine.',
    fullDesc: 'Automates cloud infrastructure compliance and continuous security verification.',
    image: '/assets/software-dev.jpg',
    metrics: [
      { label: 'Vulns Scanned/Hr', value: '2.5M+' },
      { label: 'Prep Time Saved', value: '70%' },
      { label: 'Auto-Patch Rate', value: '88%' }
    ],
    techStack: ['Go', 'React', 'TypeScript', 'Kubernetes', 'eBPF', 'Docker'],
    keyFeatures: ['eBPF kernel runtime detection', 'Single-pane SOC-2 reporting'],
    challenges: 'Monitoring thousands of active containers with minimal CPU load.',
    solution: 'In-kernel eBPF probes eliminating context switch overhead.',
    liveDemo: 'https://zeroshield.kravinoffs.agency',
    repoUrl: 'https://github.com/kravinoffs/zeroshield-platform'
  }
];

export const SOFTWARE_CATEGORIES = [
  'All',
  'Fintech & Cloud Systems',
  'Enterprise SaaS & AI',
  'HealthTech & WebRTC',
  'E-Commerce & Scale',
  'Cybersecurity & Cloud'
];
