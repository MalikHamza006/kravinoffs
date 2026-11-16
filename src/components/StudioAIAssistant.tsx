import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, Sparkles, X, Send, Globe, MessageCircle, 
  ArrowUpRight, RefreshCw, ChevronDown, Check, Zap, HelpCircle 
} from 'lucide-react';
import { 
  SUPPORTED_COUNTRIES, 
  generateStudioAIResponse, 
  CountryProfile,
  AIResponse 
} from '../lib/aiBrain';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  time: string;
  suggestions?: string[];
  ctaType?: 'whatsapp' | 'pricing' | 'portfolio' | 'email';
  ctaUrl?: string;
  ctaText?: string;
}

export const StudioAIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string>('AU');
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCountryMenu, setShowCountryMenu] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const activeCountry = SUPPORTED_COUNTRIES[selectedCountry] || SUPPORTED_COUNTRIES.AU;

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: `👋 G'day and welcome to **Lightyear Studios**!\n\nI am your AI Studio Consultant. I have complete knowledge of our software architectures, **Restaurant Technology & POS**, commercial 4K video standards, and **transparent Australian AUD pricing**.\n\nSelect your country above to see localized pricing and tailored advice. How can I help your business grow today?`,
      time: 'Just now',
      suggestions: [
        '🍽️ Restaurant POS & Ordering',
        '📈 3 Marketing Packages',
        '💻 Custom SaaS / Web App',
        '🎥 4K Commercial Video',
        '💡 What do you recommend?'
      ]
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen, messages, isTyping]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim() || isTyping) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    try {
      // 1. Try serverless backend if available
      let aiResult: AIResponse | null = null;

      try {
        const res = await fetch('/api/ai-chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: text.trim(),
            countryCode: selectedCountry,
            chatHistory: messages.slice(-4).map((m) => ({
              role: m.sender === 'user' ? 'user' : 'assistant',
              content: m.text
            }))
          })
        });

        if (res.ok) {
          const data = await res.json();
          if (data.reply) {
            aiResult = {
              answer: data.reply,
              suggestions: [
                'Tell me about your Australian pricing',
                'What is included in the Growth package?',
                'How do I discuss this with Hamza Malik?'
              ],
              ctaType: 'whatsapp',
              ctaUrl: `https://wa.me/923160442304?text=${encodeURIComponent(`Hello Hamza! I'm reaching out after discussing with the AI assistant (${activeCountry.name}).`)}`,
              ctaText: 'Continue Discussion with Founder'
            };
          }
        }
      } catch {
        // Network or offline fallback
      }

      // 2. Fallback to Master Studio Intelligence Engine
      if (!aiResult) {
        aiResult = generateStudioAIResponse(text.trim(), selectedCountry);
      }

      // Natural conversational delay for human feel
      setTimeout(() => {
        setIsTyping(false);
        const aiMsg: ChatMessage = {
          id: `ai-${Date.now()}`,
          sender: 'ai',
          text: aiResult?.answer || 'I am ready to help. Please ask about our software, video or marketing services.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          suggestions: aiResult?.suggestions,
          ctaType: aiResult?.ctaType,
          ctaUrl: aiResult?.ctaUrl,
          ctaText: aiResult?.ctaText
        };
        setMessages((prev) => [...prev, aiMsg]);
      }, 400);

    } catch (err) {
      setIsTyping(false);
      const fallbackMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: 'I am here to help. Feel free to ask about our Restaurant POS, 3 Digital Marketing packages, or custom software development!',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    }
  };

  const handleCountryChange = (code: string) => {
    setSelectedCountry(code);
    setShowCountryMenu(false);
    const country = SUPPORTED_COUNTRIES[code];
    const updateNotice: ChatMessage = {
      id: `sys-${Date.now()}`,
      sender: 'ai',
      text: `🌐 Currency & region updated to **${country.name} (${country.currency})**.\n\n${country.marketNote}\n\nAsk me for localized project quotes, timeline estimates, or marketing packages for your market!`,
      time: 'Just now',
      suggestions: [
        `What are the marketing packages in ${country.currency}?`,
        'Restaurant POS cost in my region',
        'Schedule discovery consultation with Hamza'
      ]
    };
    setMessages((prev) => [...prev, updateNotice]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* =========================================================================
          FLOATING AI LAUNCHER BUTTON (Bottom-Right, paired with WhatsApp)
          ========================================================================= */}
      <aside aria-label="AI Studio Assistant" className="fixed bottom-24 right-6 z-40 flex items-center group">
        {/* Tooltip on hover */}
        <div className="hidden sm:flex flex-col items-end mr-3 px-3.5 py-2 rounded-xl bg-[#0B0F17]/95 border border-white/10 shadow-2xl opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none backdrop-blur-md">
          <span className="text-xs font-bold text-white flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            AI Studio Assistant
          </span>
          <span className="text-[10px] text-cyan-300 font-mono">Ask Pricing, Restaurant Tech & Scopes</span>
        </div>

        {/* Floating Button with Cyan Aura Pulse */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-600 via-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-black flex items-center justify-center shadow-2xl shadow-cyan-500/40 transition-transform duration-300 hover:scale-110 focus:outline-none border border-cyan-300/40"
          aria-label="Open Lightyear Studios AI Assistant"
        >
          <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-25" />
          {isOpen ? (
            <X className="w-6 h-6 text-black relative z-10" />
          ) : (
            <Bot className="w-7 h-7 text-black relative z-10" />
          )}
        </button>
      </aside>

      {/* =========================================================================
          INTERACTIVE AI CHAT MODAL WINDOW
          ========================================================================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="fixed bottom-24 sm:bottom-28 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[420px] h-[580px] max-h-[82vh] bg-[#020408]/96 backdrop-blur-2xl border border-white/15 rounded-3xl shadow-2xl shadow-black/90 z-50 flex flex-col overflow-hidden text-white"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-white/[0.03] flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shadow-inner">
                  <Bot className="w-5 h-5 text-cyan-300" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-heading text-sm font-bold tracking-wider uppercase text-white">
                      LIGHTYEAR AI
                    </span>
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-[9px] font-mono text-emerald-400 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Brain
                    </span>
                  </div>
                  <p className="text-[10px] text-chrome-400 font-mono">
                    Instant Quotes & Strategy Advisor
                  </p>
                </div>
              </div>

              {/* Country Selector Dropdown & Close */}
              <div className="flex items-center gap-1.5">
                <div className="relative">
                  <button
                    onClick={() => setShowCountryMenu(!showCountryMenu)}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-[11px] font-mono text-cyan-300 transition-colors"
                    title="Select Country & Currency"
                  >
                    <Globe className="w-3 h-3 text-cyan-400" />
                    <span>{activeCountry.code} ({activeCountry.currency})</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>

                  {/* Country Menu Popover */}
                  <AnimatePresence>
                    {showCountryMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="absolute right-0 top-8 w-56 bg-[#0B0F17] border border-white/15 rounded-2xl shadow-2xl p-2 z-50 space-y-1 text-xs font-mono"
                      >
                        <div className="text-[10px] text-chrome-400 px-2 py-1 uppercase tracking-wider">
                          Select Market & Currency:
                        </div>
                        {Object.values(SUPPORTED_COUNTRIES).map((c) => (
                          <button
                            key={c.code}
                            onClick={() => handleCountryChange(c.code)}
                            className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition-colors ${
                              selectedCountry === c.code
                                ? 'bg-cyan-500/20 text-cyan-300 font-bold'
                                : 'text-chrome-300 hover:text-white hover:bg-white/5'
                            }`}
                          >
                            <span>{c.name} ({c.symbol.trim()})</span>
                            {selectedCountry === c.code && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-chrome-400 hover:text-white transition-colors"
                  aria-label="Close chat window"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs font-sans">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`max-w-[88%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-cyan-600 to-cyan-500 text-black font-medium shadow-lg shadow-cyan-950/40 rounded-br-sm'
                        : 'bg-white/[0.04] border border-white/10 text-chrome-100 shadow-md rounded-bl-sm'
                    }`}
                  >
                    {msg.text}

                    {/* Action Button inside AI Message */}
                    {msg.ctaUrl && (
                      <div className="mt-3 pt-2.5 border-t border-white/10">
                        <a
                          href={msg.ctaUrl}
                          target={msg.ctaType === 'whatsapp' ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-black hover:bg-neutral-200 text-[11px] font-mono font-semibold uppercase tracking-wider transition-all shadow-md active:scale-95"
                        >
                          {msg.ctaType === 'whatsapp' && <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />}
                          <span>{msg.ctaText || 'Take Action'}</span>
                          <ArrowUpRight className="w-3 h-3 text-black" />
                        </a>
                      </div>
                    )}
                  </div>

                  <span className="text-[9px] font-mono text-chrome-500 mt-1 px-1">
                    {msg.time}
                  </span>

                  {/* Suggestions Pills underneath AI Message */}
                  {msg.suggestions && msg.suggestions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2 max-w-[92%]">
                      {msg.suggestions.map((sug, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSendMessage(sug)}
                          className="px-2.5 py-1 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-[10px] font-mono text-cyan-300 hover:text-white transition-all text-left"
                        >
                          {sug}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-cyan-300 w-24">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Bottom Input Area */}
            <div className="p-3 border-t border-white/10 bg-white/[0.02] shrink-0 space-y-2">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={`Ask pricing (${activeCountry.currency}), restaurant tech, scopes...`}
                  className="flex-1 px-3.5 py-2.5 rounded-full bg-white/[0.04] border border-white/15 text-xs text-white placeholder-chrome-500 focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputMessage.trim() || isTyping}
                  className="w-9 h-9 rounded-full bg-white hover:bg-neutral-200 text-black flex items-center justify-center transition-all disabled:opacity-40 disabled:pointer-events-none shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4 text-black" />
                </button>
              </div>

              <div className="flex items-center justify-between px-1 text-[9px] font-mono text-chrome-400">
                <span>Verified Lightyear Studios Knowledge Base</span>
                <a
                  href="https://wa.me/923160442304"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:underline"
                >
                  Director Line: +92 316 0442304
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
