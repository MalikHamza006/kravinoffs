import { SoftwareProject } from '../types';

export const softwareProjects: SoftwareProject[] = [
  {
    id: 'krv-soft-01',
    title: 'AuraCloud Institutional Trading Terminal',
    slug: 'auracloud-trading-terminal',
    client: 'Apex Global Capital',
    category: 'Fintech & Cloud Systems',
    status: 'Production Live',
    completionYear: '2026',
    shortDesc: 'High-frequency algorithmic trading terminal with microsecond order routing, sub-50ms WebSocket telemetry, and institutional multi-sig authentication.',
    fullDesc: 'Engineered for hedge funds and prop desks, this platform manages over $120M in monthly trading volume. Built on event-driven microservices with Redis caching, Rust order-matching engine, and an ultra-responsive React dashboard featuring canvas-rendered financial charts.',
    image: '/assets/software-dev.jpg',
    metrics: [
      { label: 'Latency P99', value: '< 28ms' },
      { label: 'Daily Volume', value: '$120M+' },
      { label: 'Uptime SLA', value: '99.999%' },
      { label: 'TPS Peak', value: '14,500' }
    ],
    techStack: ['React 18', 'TypeScript', 'Node.js', 'Rust', 'Redis', 'WebSockets', 'TailwindCSS', 'Docker', 'AWS Lambda'],
    keyFeatures: [
      'Sub-millisecond WebSocket state synchronization',
      'Hardware-accelerated candlestick charting engine (WebGL/Canvas)',
      'Zero-trust RBAC multi-factor institutional authorization',
      'Automated dark pool liquidity routing algorithm'
    ],
    challenges: 'Handling violent market volatility surges without UI freezing or WebSocket connection drops under 10k+ concurrent connections.',
    solution: 'Designed an off-thread Web Worker architecture for raw order book processing and utilized Redis cluster memory pipelines.',
    liveDemo: 'https://auracloud-demo.kravinoffs.agency',
    repoUrl: 'https://github.com/kravinoffs/auracloud-engine'
  },
  {
    id: 'krv-soft-02',
    title: 'NeuroLogix Autonomous Logistics Brain',
    slug: 'neurologix-logistics-brain',
    client: 'TransContinental Freight Ltd.',
    category: 'Enterprise SaaS & AI',
    status: 'Enterprise Deployed',
    completionYear: '2025',
    shortDesc: 'AI-powered multimodal fleet dispatch and predictive fuel route optimization engine orchestrating 3,200+ autonomous and manned long-haul carriers.',
    fullDesc: 'NeuroLogix ingests real-time weather, port dwell telemetry, and road conditions to predict supply chain bottlenecks 72 hours ahead of impact. Cuts client annual fleet fuel consumption by 19.4% across 14 European and North American freight corridors.',
    image: '/assets/digital-marketing.jpg',
    metrics: [
      { label: 'Fuel Saved', value: '19.4%' },
      { label: 'Active Fleet', value: '3,200+' },
      { label: 'ETA Accuracy', value: '98.8%' },
      { label: 'ROI Payback', value: '3.2 Months' }
    ],
    techStack: ['Python', 'FastAPI', 'Next.js', 'PyTorch', 'PostgreSQL', 'TimescaleDB', 'Kafka', 'Google Cloud K8s'],
    keyFeatures: [
      'Geospatial route plotting with dynamic road risk modeling',
      'Real-time IoT telematics ingestion via Apache Kafka stream',
      'Automated bill of lading (BOL) optical document extraction',
      'Predictive engine maintenance warning trigger'
    ],
    challenges: 'Ingesting 150GB of streaming GPS and engine sensor data per day with zero data loss or ingestion backpressure.',
    solution: 'Implemented Apache Kafka partitioning coupled with TimescaleDB time-series hypertable retention policies.',
    liveDemo: 'https://neurologix.kravinoffs.agency',
    repoUrl: 'https://github.com/kravinoffs/neurologix-core'
  },
  {
    id: 'krv-soft-03',
    title: 'SynapsePulse Healthcare Tele-Diagnostics',
    slug: 'synapsepulse-healthcare-platform',
    client: 'Vanguard Health Alliance',
    category: 'HealthTech & WebRTC',
    status: 'HIPAA Certified Live',
    completionYear: '2026',
    shortDesc: 'Zero-latency WebRTC encrypted consultation suite with real-time biometric vitals monitoring and AI medical transcription.',
    fullDesc: 'Connecting 450,000+ patients with over 1,200 board-certified specialists. Incorporates End-to-End HIPAA AES-256 encrypted peer streams, instant EHR syncing with Epic & Cerner, and background speech-to-clinical-notes generation.',
    image: '/assets/software-dev.jpg',
    metrics: [
      { label: 'Patient Base', value: '450k+' },
      { label: 'Audio Latency', value: '< 65ms' },
      { label: 'HIPAA Score', value: '100% Audit' },
      { label: 'Doc Time Saved', value: '35%' }
    ],
    techStack: ['React', 'WebRTC', 'Go (Golang)', 'Node.js', 'PostgreSQL', 'WebSockets', 'TailwindCSS', 'AWS GovCloud'],
    keyFeatures: [
      'Peer-to-peer AES-256 WebRTC audio/video mesh architecture',
      'Live pulse & respiration estimation through camera optical flow',
      'Bidirectional EHR HL7 / FHIR data exchange connector',
      'Automated clinical prescription and digital signature pipeline'
    ],
    challenges: 'Strict zero-retention regulatory compliance for video consultations while enabling instant diagnostic doctor summaries.',
    solution: 'Designed ephemeral memory-only stream processing pipelines with cryptographic key self-destruction upon session termination.',
    liveDemo: 'https://synapsepulse.kravinoffs.agency',
    repoUrl: 'https://github.com/kravinoffs/synapsepulse-suite'
  },
  {
    id: 'krv-soft-04',
    title: 'VortexVault Web3 Institutional Custody',
    slug: 'vortexvault-custody-suite',
    client: 'Sovereign Digital Asset Fund',
    category: 'Fintech & Cloud Systems',
    status: 'Multi-Chain Live',
    completionYear: '2025',
    shortDesc: 'MPC (Multi-Party Computation) threshold cryptographic asset custody interface securing $350M+ in digital treasury assets.',
    fullDesc: 'Eliminates single points of key failure through distributed shamir secret sharing and hardware security module (HSM) integrations. Features multi-approver quorum workflows, automated compliance AML screening, and cold-storage sweep policies.',
    image: '/assets/digital-marketing.jpg',
    metrics: [
      { label: 'Assets Secured', value: '$350M+' },
      { label: 'Exploits / Loss', value: '$0.00' },
      { label: 'Quorum Speed', value: '1.4 Sec' },
      { label: 'Chains Active', value: '18 Networks' }
    ],
    techStack: ['TypeScript', 'Rust', 'React', 'Solidity', 'GraphQL', 'TailwindCSS', 'Docker', 'AWS Nitro Enclaves'],
    keyFeatures: [
      'Multi-Party Computation (MPC-CMP) keyless signing scheme',
      'Real-time Chainalysis / Elliptic transaction risk scoring',
      'Programmable spending limits and multi-tiered signing quotas',
      'Immutable audit trail logged to decentralized consensus'
    ],
    challenges: 'Preventing front-running attacks and key leak vulnerabilities in zero-trust corporate environments.',
    solution: 'Engineered hardware enclave validation (AWS Nitro Enclaves) coupled with time-locked quorum signatures.',
    liveDemo: 'https://vortexvault.kravinoffs.agency',
    repoUrl: 'https://github.com/kravinoffs/vortexvault-custody'
  },
  {
    id: 'krv-soft-05',
    title: 'OmniChannel Headless E-Commerce Matrix',
    slug: 'omnichannel-ecommerce-matrix',
    client: 'Kravitz Luxury Retail Group',
    category: 'E-Commerce & Scale',
    status: 'Global Production',
    completionYear: '2026',
    shortDesc: 'Ultra-fast Next.js headless storefront handling 85,000 flash-sale requests per minute with sub-second checkout and personalized AI merchandising.',
    fullDesc: 'Powering 14 international luxury apparel brands with localized currency, dynamic tax calculation, and automated warehouse fulfillment routing. Delivers 98 Google Lighthouse scores and an 84% reduction in checkout abandonment.',
    image: '/assets/social-media.jpg',
    metrics: [
      { label: 'Checkout Lift', value: '+42%' },
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'Flash Sale TPS', value: '85,000' },
      { label: 'Global CDN P95', value: '64ms' }
    ],
    techStack: ['Next.js 14', 'React', 'TypeScript', 'Shopify Storefront API', 'Stripe Elements', 'Redis', 'TailwindCSS', 'Vercel Edge'],
    keyFeatures: [
      'Edge-rendered personalized product recommendations',
      'Single-click localized biometric checkout (Apple/Google Pay)',
      'Sub-50ms international price conversion and duties engine',
      'Omnichannel inventory synchronization across 62 physical stores'
    ],
    challenges: 'Flash sale traffic spikes taking down inventory databases during simultaneous sneaker drops.',
    solution: 'Architected Redis memory queue with optimistic locking and distributed edge page caching on Vercel Edge Network.',
    liveDemo: 'https://omnimatrix.kravinoffs.agency',
    repoUrl: 'https://github.com/kravinoffs/omnimatrix-storefront'
  },
  {
    id: 'krv-soft-06',
    title: 'ZeroShield DevSecOps Compliance Platform',
    slug: 'zeroshield-security-suite',
    client: 'Titanium Defense Technologies',
    category: 'Cybersecurity & Cloud',
    status: 'GovCloud Deployed',
    completionYear: '2026',
    shortDesc: 'Continuous automated vulnerability scanning, container runtime security, and SOC-2 / ISO 27001 compliance audit engine.',
    fullDesc: 'Scans infrastructure-as-code (Terraform, Kubernetes, Docker) across multi-cloud environments in seconds. Automatically generates automated compliance evidence, identifies zero-day CVE vectors, and drafts pull request patches.',
    image: '/assets/software-dev.jpg',
    metrics: [
      { label: 'Vulns Scanned/Hr', value: '2.5M+' },
      { label: 'SOC-2 Prep Time', value: '-70%' },
      { label: 'False Positive', value: '< 0.2%' },
      { label: 'Auto-Patch Rate', value: '88%' }
    ],
    techStack: ['Go (Golang)', 'React', 'TypeScript', 'Kubernetes', 'eBPF', 'PostgreSQL', 'TailwindCSS', 'Docker'],
    keyFeatures: [
      'eBPF kernel-level runtime threat detection',
      'Automated Terraform & Helm security policy linting (OPA Rego)',
      'Single-pane SOC-2 and ISO 27001 auditor report generator',
      'Automated Git PR remediation creation with test harness'
    ],
    challenges: 'Monitoring thousands of active Kubernetes pods with under 1% CPU overhead on host nodes.',
    solution: 'Leveraged Linux eBPF kernel probes bypassing user-space context switches for ultra-efficient telemetry.',
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
