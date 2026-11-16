/**
 * LIGHTYEAR STUDIOS - INTERACTION ENGINE
 * Designed for Hamza Malik | lightyearstudios.agency
 */

document.addEventListener('DOMContentLoaded', () => {
  initCursorSpotlight();
  initStickyHeader();
  initMobileMenu();
  initServiceFilters();
  initServiceModals();
  initContactForm();
});

/* ==========================================================================
   1. Interactive Mouse Spotlight Glow
   ========================================================================== */
function initCursorSpotlight() {
  const cursorGlow = document.getElementById('cursorGlow');
  if (!cursorGlow || window.innerWidth < 1024) return;

  window.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
  });
}

/* ==========================================================================
   2. Sticky Header on Scroll
   ========================================================================== */
function initStickyHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   3. Mobile Navigation Menu Toggle
   ========================================================================== */
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!mobileMenuBtn || !mobileNavDrawer) return;

  mobileMenuBtn.addEventListener('click', () => {
    mobileNavDrawer.classList.toggle('active');
  });

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileNavDrawer.classList.remove('active');
    });
  });
}

/* ==========================================================================
   4. Services Filter Tabs
   ========================================================================== */
function initServiceFilters() {
  const filterButtons = document.querySelectorAll('.service-tab-btn');
  const serviceCards = document.querySelectorAll('.service-card');

  if (!filterButtons.length || !serviceCards.length) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      serviceCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = '';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* ==========================================================================
   5. Interactive Service Blueprint Modal
   ========================================================================== */
const SERVICE_DATA = {
  'software-dev': {
    title: 'Software Development & Architecture',
    tag: 'Enterprise Engineering',
    img: 'assets/software-dev.jpg',
    summary: 'Full-cycle engineering designed for high availability, sub-second latency, and institutional security. We develop scalable digital platforms that power modern market leaders.',
    deliverables: [
      'Next.js 15 / React Enterprise Web Applications',
      'Cross-Platform iOS & Android Native Mobile Apps',
      'Custom Microservice Backends (Node.js / Python / Go)',
      'High-Performance REST & GraphQL API Architecture',
      'PostgreSQL, Redis & Cloud Infrastructure Deployment (AWS/Vercel)',
      'Automated CI/CD Testing & Zero-Downtime Deployment Sprints'
    ],
    timeline: '3 - 8 Weeks (Sprint Based Delivery)',
    kpi: '99.9% Uptime, Sub-100ms API Response Time',
    prefilledMsg: 'Hi Hamza, I would like to book a Software Development consultation with Lightyear Studios.'
  },
  'digital-marketing': {
    title: 'Digital Marketing & Growth Funnels',
    tag: 'Algorithmic Growth Engine',
    img: 'assets/digital-marketing.jpg',
    summary: 'Data-backed inbound organic growth and scientific funnel optimization to systematically capture high-intent buyers and cement top search engine positions.',
    deliverables: [
      'Technical, On-Page & Algorithmic Search Engine Optimization (SEO)',
      'High-Intent Keyword Dominance & Competitor Keyword Poaching',
      'Conversion Rate Optimization (CRO) & Heatmap UX Analysis',
      'Lead Magnet Architecture & Automated Email Nurturing Funnels',
      'Advanced Google Search Console & GA4 Attribution Analytics',
      'Bi-Weekly Strategic Growth & Lead Velocity Audits'
    ],
    timeline: 'Continuous 30-Day Agile Growth Sprints',
    kpi: 'Transparent Reporting & Strategic Lead Velocity',
    prefilledMsg: 'Hi Hamza, I am looking to scale our digital marketing and SEO with Lightyear Studios.'
  },
  'social-media': {
    title: 'Social Media Marketing & Brand Presence',
    tag: 'Resonance & Authority',
    img: 'assets/social-media.jpg',
    summary: 'Crafting hypnotic brand identity and content ecosystems across Instagram, TikTok, LinkedIn, and YouTube to transform casual viewers into loyal brand advocates.',
    deliverables: [
      'Complete Aesthetic Social Architecture & Custom Grid Direction',
      'High-Engagement Short-Form Video Strategy (Reels & TikToks)',
      'Founder & C-Suite Personal Brand Scripting on LinkedIn / X',
      'Curated High-Value Influencer Alliances & Product Seeding',
      'Community Management & Rapid Fan Response Protocols',
      'Monthly Analytics & Engagement Audits'
    ],
    timeline: 'Ongoing Monthly Retainers & Launch Sprints',
    kpi: 'Consistent Reach & Engagement Surges',
    prefilledMsg: 'Hi Hamza, I want Lightyear Studios to take over and manage our Social Media Marketing presence.'
  },
  'ads-running': {
    title: 'High-ROI Ads Running & Paid Media',
    tag: 'Performance Acquisition',
    img: 'assets/ads-running.jpg',
    summary: 'Predictable customer acquisition engines. We run and scale paid ad spend across Meta Ads, Google Ads, TikTok, and YouTube with precision.',
    deliverables: [
      'Meta Ads Full-Funnel Structure (Cold Prospecting to Retargeting)',
      'Google Search, Performance Max & YouTube In-Stream Ads',
      'Meta Conversions API (CAPI) & Server-Side Event Tracking',
      'Continuous Creative A/B Testing & Ad Fatigue Management',
      'Laser-Targeted Audience Segmentation & Lookalike Modeling',
      'Real-Time Transparent Dashboard & Performance Scaling'
    ],
    timeline: 'Immediate Launch within 5 - 7 Days',
    kpi: 'Transparent Conversion Tracking & Optimization',
    prefilledMsg: 'Hi Hamza, I need Lightyear Studios to manage and optimize our Paid Ads campaigns.'
  },
  'video-production': {
    title: 'Commercial Video Production & Creative Media',
    tag: 'Commercial Grade Visuals',
    img: 'assets/video-production.jpg',
    summary: 'Professional visual storytelling that commands authority. We shoot with commercial camera packages and deliver motion graphics up to 4K UHD.',
    deliverables: [
      'Commercial Brand Films & High-Impact Commercials',
      'Direct-Response High-Converting Video Ads (TikTok / Instagram)',
      'Product Visualizations & Motion Graphics',
      'Pre-Production Scripting, Storyboarding & Direction',
      'Color Grading (DaVinci Resolve Studio)',
      'Spatial Sound Design, Custom Score & Commercial Voiceover'
    ],
    timeline: '2 - 3 Weeks per Commercial Production Cycle',
    kpi: 'Master Delivery Up to 4K UHD',
    prefilledMsg: 'Hi Hamza, I am interested in Commercial Video Production services with Lightyear Studios.'
  }
};

function initServiceModals() {
  const modalOverlay = document.getElementById('serviceModalOverlay');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalDynamicContent = document.getElementById('modalDynamicContent');
  const openButtons = document.querySelectorAll('.btn-service-modal');

  if (!modalOverlay || !modalCloseBtn || !modalDynamicContent) return;

  const openModal = (serviceKey) => {
    const data = SERVICE_DATA[serviceKey];
    if (!data) return;

    modalDynamicContent.innerHTML = `
      <div class="modal-header-hero">
        <img src="${data.img}" alt="${data.title}" class="modal-header-img">
        <div class="modal-header-overlay">
          <span class="service-tag-badge">${data.tag}</span>
          <h3 class="modal-service-title">${data.title}</h3>
        </div>
      </div>

      <p style="font-size: 1.05rem; color: #b4bfcf; line-height: 1.6; margin-bottom: 24px;">
        ${data.summary}
      </p>

      <div class="modal-specs-grid">
        <div class="modal-box">
          <h5><i class="fa-solid fa-layer-group"></i> Key Deliverables</h5>
          <ul>
            ${data.deliverables.map(item => `<li><i class="fa-solid fa-check"></i> ${item}</li>`).join('')}
          </ul>
        </div>

        <div class="modal-box">
          <h5><i class="fa-solid fa-gauge-high"></i> Performance Benchmark</h5>
          <p style="font-size: 0.95rem; color: #ffffff; font-weight: 600; margin-bottom: 12px;">
            Target KPI: <span style="color: #5ce1e6;">${data.kpi}</span>
          </p>
          <h5 style="margin-top: 16px;"><i class="fa-solid fa-clock"></i> Delivery Velocity</h5>
          <p style="font-size: 0.95rem; color: #ffffff; font-weight: 600;">
            ${data.timeline}
          </p>
        </div>
      </div>

      <div class="modal-actions-footer">
        <div>
          <span style="font-size: 0.8rem; color: #7d8a9c; display: block;">Direct Founder Hotline</span>
          <strong style="color: #25d366;"><i class="fa-brands fa-whatsapp"></i> +92 316 0442304</strong>
        </div>
        <a href="https://wa.me/923160442304?text=${encodeURIComponent(data.prefilledMsg)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <i class="fa-brands fa-whatsapp"></i>
          <span>Discuss Scope on WhatsApp</span>
        </a>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  openButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const serviceKey = btn.getAttribute('data-service');
      openModal(serviceKey);
    });
  });

  modalCloseBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   6. Contact & Project Brief Form (WhatsApp & Email Direct Integration)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('leadInquiryForm');
  const toast = document.getElementById('formToast');
  const emailBtn = document.getElementById('sendEmailBtn');

  if (!form) return;

  const getFormData = () => {
    return {
      name: document.getElementById('clientName')?.value.trim() || 'Valued Client',
      email: document.getElementById('clientEmail')?.value.trim() || 'N/A',
      phone: document.getElementById('clientPhone')?.value.trim() || 'N/A',
      service: document.getElementById('serviceSelect')?.value || 'General Inquiry',
      budget: document.getElementById('projectBudget')?.value || 'Not specified',
      details: document.getElementById('projectDetails')?.value.trim() || 'No additional details provided.'
    };
  };

  // WhatsApp Submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = getFormData();

    const formattedMessage = 
`*NEW INQUIRY — LIGHTYEAR STUDIOS*
----------------------------------
*Name:* ${data.name}
*Email:* ${data.email}
*Phone/WhatsApp:* ${data.phone}
*Service Requested:* ${data.service}
*Budget Tier:* ${data.budget}

*Project Overview:*
${data.details}
----------------------------------
_Sent via Lightyear Studios web portal_`;

    const whatsappUrl = `https://wa.me/923160442304?text=${encodeURIComponent(formattedMessage)}`;

    if (toast) {
      toast.classList.add('active');
      toast.innerHTML = '<i class="fa-solid fa-circle-check"></i> Redirecting directly to Hamza on WhatsApp...';
    }

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      if (toast) {
        setTimeout(() => toast.classList.remove('active'), 4000);
      }
    }, 600);
  });

  // Direct Mail Client Submission
  if (emailBtn) {
    emailBtn.addEventListener('click', () => {
      const data = getFormData();
      const subject = `[Project Inquiry] ${data.service} - ${data.name}`;
      const body = 
`Hello Hamza and Lightyear Studios Team,

I would like to discuss a project with your agency.

Client Name: ${data.name}
Phone / WhatsApp: ${data.phone}
Email: ${data.email}
Selected Service: ${data.service}
Estimated Budget: ${data.budget}

Project Objectives & Brief:
${data.details}

Looking forward to your swift response.

Best regards,
${data.name}`;

      const mailtoUrl = `mailto:hamzamalik789890@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
    });
  }
}
