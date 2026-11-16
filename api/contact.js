export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method Not Allowed. Lightyear Studios API accepts POST for inquiries.'
    });
  }

  try {
    let body = req.body || {};
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        body = {};
      }
    }

    const { name, email, phone, service, budget, projectBudget, message, timeline } = body;

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid client or organization name.'
      });
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid professional email address.'
      });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 4) {
      return res.status(400).json({
        success: false,
        error: 'Please provide details regarding your project scope or objectives.'
      });
    }

    // Generate unique inquiry ticket ID
    const ticketId = `LYS-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;

    console.log(`[Lightyear Studios Inquiry] New Ticket ${ticketId}:`, {
      name,
      email,
      phone: phone || 'N/A',
      service: service || 'General Inquiry',
      budget: budget || projectBudget || 'To be discussed',
      timeline: timeline || 'Flexible',
      receivedAt: new Date().toISOString()
    });

    return res.status(200).json({
      success: true,
      ticketId,
      message: 'Inquiry received. Lightyear Studios founder Hamza Malik will review your requirements and reach out within 24 hours.',
      data: {
        ticketId,
        clientName: name,
        service: service || 'Custom Strategic Build',
        submittedAt: new Date().toISOString()
      }
    });
  } catch (err) {
    console.error('[Lightyear Studios API Error]:', err);
    return res.status(500).json({
      success: false,
      error: 'Internal server processing error. Please contact direct founder lines.'
    });
  }
}
