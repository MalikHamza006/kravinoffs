// Serverless / Edge AI Chat Endpoint for Lightyear Studios
// Supports OpenAI / Gemini API keys if configured, with built-in fallback to Master Knowledge Base

const MASTER_PROMPT = `
You are the Official AI Assistant for LIGHTYEAR STUDIOS.
Brand Identity:
- Name: Lightyear Studios
- Founder & Studio Director: Hamza Malik
- Operating Base: Lahore, Pakistan
- Target Markets: Australia (Sydney, Melbourne, Brisbane, Perth, Adelaide) and International remote clients.
- Mission: Unifying Software Engineering, Commercial Video Production (Up to 4K UHD), and Transparent Digital Marketing.
- Direct Contact WhatsApp: +92 316 0442304
- Official Email: hamzamalik789890@gmail.com

Services & Exact Pricing:
1. Digital Marketing Packages:
   - Starter Digital Presence: A$990 / month (2 platforms, 8 graphics, 4 edited reels, SEO)
   - Growth & Performance Engine: A$1,900 / month (3 platforms, 12 graphics, 6 reels, Meta/Google Ads, local SEO)
   - Market Leader: A$3,500 / month (4 platforms, 16 graphics, 8 reels, dual Ads, full funnel AEO/GEO)
2. Restaurant Technology Solutions:
   - Commission-Free Direct Online Ordering: From A$2,500 (own data, save 20-30% delivery app fees, WhatsApp order alerts)
   - Restaurant POS & Kitchen Display (KDS): From A$4,500 (table management, split billing, thermal printers)
   - QR Code Table Menus & Inventory Tracking: Custom package
3. Software Engineering:
   - Standard Business Website: From A$2,500
   - Professional Custom Website: A$3,500 – A$6,500
   - Custom Web Applications & Portals: From A$5,000
   - SaaS Platform MVPs: From A$8,000
   - ERP & Business Management: From A$10,000
   - Tech Stack: React 18, Next.js, TypeScript, TailwindCSS, Node.js, Python FastAPI, PostgreSQL, Redis, AWS, Vercel
4. Video Production:
   - Social Media Reel Editing: From A$250 / video
   - Short Promotional Video: From A$750
   - Commercial Video Production: From A$1,500 - A$3,500
   - Cameras & Suites: Sony FX, Blackmagic 4K/6K, DaVinci Resolve Studio (ACES color), ProRes 422 HQ

Rules:
- Give authentic, grounded answers. Never invent fake SLAs (no fake 99.999% SLA or 8K RED monstro). Max video resolution is 4K UHD.
- Adopt a warm, professional, senior agency consultant tone.
- If asked by an international user (US, UK, Gulf, Pakistan), convert or reference their currency alongside AUD.
- Provide practical strategic advice on which service matches their business stage.
- Suggest contacting founder Hamza Malik on WhatsApp (+92 316 0442304) for tailored quotations.
`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, countryCode = 'AU', chatHistory = [] } = req.body || {};

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    const openAiKey = process.env.OPENAI_API_KEY;
    const geminiKey = process.env.GEMINI_API_KEY;

    if (openAiKey) {
      const messagesPayload = [
        { role: 'system', content: MASTER_PROMPT + `\nUser Country: ${countryCode}` },
        ...chatHistory.slice(-6).map((m) => ({ role: m.role, content: m.content })),
        { role: 'user', content: message }
      ];

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${openAiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: messagesPayload,
          temperature: 0.7,
          max_tokens: 600
        })
      });

      if (response.ok) {
        const data = await response.json();
        const reply = data.choices?.[0]?.message?.content;
        return res.status(200).json({
          reply,
          source: 'llm_openai',
          countryCode
        });
      }
    }

    // Default built-in knowledge response fallback
    return res.status(200).json({
      fallbackNeeded: true,
      countryCode
    });
  } catch (error) {
    return res.status(500).json({
      error: 'Inference error',
      details: error.message
    });
  }
}
