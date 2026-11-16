import { SoftwareProject } from '../types';

export const softwareProjects: SoftwareProject[] = [
  {
    id: 'lys-soft-01',
    title: 'AuraServe Restaurant POS & Kitchen Display System',
    slug: 'auraserve-restaurant-pos',
    client: 'Hospitality Tech Division',
    category: 'Restaurant Technology',
    type: 'Restaurant POS & Kitchen Display',
    quality: 'Real-time WebSocket Sync • Touch POS • KDS Routing',
    status: 'Concept Project / Internal Demo',
    completionYear: '2026',
    shortDesc: 'Modern point-of-sale and kitchen display system designed for busy restaurants and cafes.',
    fullDesc: 'A unified hospitality management system streamlining table ordering, kitchen ticket routing, and split billing for dining venues.',
    image: '/assets/software-dev.jpg',
    metrics: [
      { label: 'Order Flow', value: 'Touch & Mobile' },
      { label: 'Kitchen Display', value: 'Station Routing' },
      { label: 'Split Bills', value: 'Instant Receipt' }
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'WebSockets', 'TailwindCSS'],
    keyFeatures: ['Interactive table layout management', 'Direct kitchen display screen sync', 'Automated bill splitting and receipt generation'],
    challenges: 'Ensuring kitchen tickets sync instantly without delay during peak dinner service hours.',
    solution: 'Built with resilient WebSocket listeners and offline local state caching for zero lost tickets.',
    liveDemo: '#',
    repoUrl: '#'
  },
  {
    id: 'lys-soft-02',
    title: 'DineDirect Commission-Free Online Food Ordering',
    slug: 'dinedirect-food-ordering',
    client: 'Restaurant Digital Solutions',
    category: 'Restaurant Technology',
    type: 'Online Ordering & QR Digital Menu',
    quality: 'Mobile First • Zero Marketplace Commission • WhatsApp Alert',
    status: 'Concept Project / Internal Demo',
    completionYear: '2026',
    shortDesc: 'Branded online ordering web application giving restaurants direct customer relationships without marketplace fees.',
    fullDesc: 'Empowers local Australian restaurants to take online pickup and delivery orders directly, saving 20-30% on third-party marketplace commissions.',
    image: '/assets/digital-marketing.jpg',
    metrics: [
      { label: 'Marketplace Fees', value: '0% Commission' },
      { label: 'Menu Format', value: 'Dynamic QR' },
      { label: 'Notifications', value: 'WhatsApp / SMS' }
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Stripe'],
    keyFeatures: ['Branded direct ordering portal', 'Dynamic QR code table menus', 'Instant order confirmation via WhatsApp'],
    challenges: 'Providing an intuitive, rapid checkout flow for hungry customers on mobile devices.',
    solution: 'Designed a lightweight 3-step checkout with instant address autocomplete and digital payment options.',
    liveDemo: '#',
    repoUrl: '#'
  },
  {
    id: 'lys-soft-03',
    title: 'CoreOps Cloud SaaS Business Management Platform',
    slug: 'coreops-saas-platform',
    client: 'SaaS & Enterprise Systems',
    category: 'SaaS Platform Development',
    type: 'Multi-Tenant Business SaaS',
    quality: 'Role-Based Access • Multi-Tenant • Clean Dashboard',
    status: 'Concept Project / Internal Demo',
    completionYear: '2025',
    shortDesc: 'Modular cloud management platform designed for growing professional services and distributed teams.',
    fullDesc: 'Provides central management of projects, client invoices, staff tasks, and business milestones under one clean workspace.',
    image: '/assets/software-dev.jpg',
    metrics: [
      { label: 'Architecture', value: 'Multi-Tenant' },
      { label: 'Security', value: 'Role-Based Access' },
      { label: 'Billing', value: 'Subscription Ready' }
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
    keyFeatures: ['Multi-tenant organizational isolation', 'Configurable role permissions', 'Project milestone tracking and reporting'],
    challenges: 'Balancing modular feature extensibility with a minimal, uncluttered interface.',
    solution: 'Implemented componentized micro-dashboards that let team members view only the tools relevant to their role.',
    liveDemo: '#',
    repoUrl: '#'
  },
  {
    id: 'lys-soft-04',
    title: 'ApexInventory ERP & Warehouse Dispatch Engine',
    slug: 'apex-inventory-erp',
    client: 'Retail & Distribution Division',
    category: 'ERP & Business Systems',
    type: 'Inventory & Dispatch ERP',
    quality: 'Barcode Ingestion • Stock Level Alerts • Multi-Store',
    status: 'Concept Project / Internal Demo',
    completionYear: '2025',
    shortDesc: 'Operational ERP for multi-location inventory tracking, purchase ordering, and dispatch workflows.',
    fullDesc: 'Helps retail and wholesale businesses maintain real-time visibility across warehouse stock, supplier purchase orders, and customer shipments.',
    image: '/assets/digital-marketing.jpg',
    metrics: [
      { label: 'Locations', value: 'Multi-Warehouse' },
      { label: 'Stock Alerts', value: 'Automated' },
      { label: 'Tracking', value: 'Batch & Serial' }
    ],
    techStack: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'],
    keyFeatures: ['Live multi-warehouse stock tracking', 'Automated low-inventory reorder alerts', 'Batch scanning and dispatch manifests'],
    challenges: 'Handling concurrent stock updates across multiple store locations without inventory count collisions.',
    solution: 'Utilized atomic database transactions with distributed locking on active product SKUs.',
    liveDemo: '#',
    repoUrl: '#'
  },
  {
    id: 'lys-soft-05',
    title: 'Atelier Modern Headless E-Commerce Storefront',
    slug: 'atelier-ecommerce-storefront',
    client: 'Consumer Brand Concept',
    category: 'E-Commerce & Websites',
    type: 'High-Performance E-Commerce',
    quality: 'Sub-second Navigation • Optimized Checkout • Mobile First',
    status: 'Concept Project / Internal Demo',
    completionYear: '2026',
    shortDesc: 'High-performance e-commerce website built for contemporary retail and lifestyle brands.',
    fullDesc: 'Modern headless online storefront combining editorial imagery, responsive filtering, and seamless checkout to maximize conversion rates.',
    image: '/assets/social-media.jpg',
    metrics: [
      { label: 'Speed', value: 'Fast Edge Cache' },
      { label: 'Checkout', value: 'Frictionless' },
      { label: 'Catalog', value: 'Dynamic Facets' }
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Stripe'],
    keyFeatures: ['Faceted product search & filtering', 'Quick-view product preview drawers', 'Single-page responsive checkout'],
    challenges: 'Ensuring rich visual imagery loads smoothly without degrading mobile browsing speed.',
    solution: 'Implemented modern WebP responsive image pipelines and speculative pre-fetching for product detail pages.',
    liveDemo: '#',
    repoUrl: '#'
  },
  {
    id: 'lys-soft-06',
    title: 'Verve Corporate Website & Editorial CMS',
    slug: 'verve-corporate-cms',
    client: 'Professional Services',
    category: 'Website Development',
    type: 'Corporate Website & CMS',
    quality: 'Clean Typography • SEO Optimized • Accessible',
    status: 'Concept Project / Internal Demo',
    completionYear: '2026',
    shortDesc: 'Clean, modern corporate website and content management system for advisory and professional firms.',
    fullDesc: 'Designed to communicate commercial credibility, showcase case studies, and generate qualified inbound client inquiries.',
    image: '/assets/software-dev.jpg',
    metrics: [
      { label: 'SEO', value: 'Structured Schema' },
      { label: 'Content', value: 'Custom CMS' },
      { label: 'Responsiveness', value: '100% Mobile Ready' }
    ],
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'Headless CMS'],
    keyFeatures: ['Structured service showcases', 'Case study publishing workflows', 'Lead capture forms with automated routing'],
    challenges: 'Building an intuitive publishing workflow for non-technical team members.',
    solution: 'Configured a visual CMS with structured fields, ensuring all published pages strictly adhere to brand design guidelines.',
    liveDemo: '#',
    repoUrl: '#'
  }
];

export const SOFTWARE_CATEGORIES = [
  'All',
  'Restaurant Technology',
  'SaaS Platform Development',
  'ERP & Business Systems',
  'E-Commerce & Websites',
  'Website Development'
];
