'use client';

import React, { useState } from 'react';
import { FadeIn } from '../ui/FadeIn';
import { Mail, Phone, ArrowUpRight, Copy, Check, Send, ChevronUp, Linkedin, MessageSquare, Clock, MapPin, Sparkles, Instagram, CheckCircle2 } from 'lucide-react';
import { personalData } from '../../data/personal';

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Social Media Campaign');
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactEmail = personalData.email || 'ardhianurul5@gmail.com';
  const rawPhone = '6285780732227';
  const displayPhone = '+62 857-8073-2227';
  const whatsappUrl = `https://wa.me/${rawPhone}`;
  const linkedinUrl = 'https://www.linkedin.com/in/ardhianurul';
  const instagramUrl = 'https://www.instagram.com/kukiss.bae?igsh=MWxvdGIyYXF1bDEyeQ==';

  const topics = [
    'Social Media Campaign',
    'Short-Form Video / Reels',
    'Work / Collaboration',
    'General Inquiry',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(displayPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 900);
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Ardhia!\n\nMy Name: ${formState.name || 'Visitor'}\nTopic: ${selectedTopic}\nEmail: ${formState.email || 'N/A'}\n\nMessage:\n${formState.message || 'I would like to inquire about working together!'}`
    );
    window.open(`https://wa.me/${rawPhone}?text=${text}`, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10 bg-gradient-to-b from-[#F5F0E6] via-[#FAF4EA] to-[#F9F6F0] text-[#3D2E2B] relative z-10 w-full overflow-hidden">
      
      {/* Soft Ambient Warm Orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[550px] h-[550px] rounded-full bg-[#F4A28C]/20 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[550px] h-[550px] rounded-full bg-[#A8BBA2]/25 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        
        {/* Header */}
        <FadeIn delay={0} y={40} className="text-center space-y-4">
          <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,120px)] leading-none tracking-tight">
            Contact
          </h2>
          
          {/* Availability Status Banner */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E6DCCC] shadow-sm text-xs font-mono font-medium text-[#3D2E2B]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6B8065] animate-pulse" />
            <span>Open for New Campaigns & Collaborations</span>
            <span className="text-[#3D2E2B]/40">•</span>
            <span className="text-[#59443F]">Based in Indonesia (WIB)</span>
          </div>
        </FadeIn>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Contact Info & Quick Launch Buttons */}
          <FadeIn delay={0.1} y={30} className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-[32px] sm:rounded-[38px] bg-[#FFFFFF] border border-[#E6DCCC] shadow-xl shadow-[#3D2E2B]/5 space-y-6">
              
              <div className="space-y-2">
                <h3 className="font-extrabold text-2xl text-[#3D2E2B] leading-tight">
                  Let&apos;s Build Impactful Campaigns Together
                </h3>
                <p className="text-xs sm:text-sm text-[#59443F] font-light leading-relaxed">
                  Have a social media project, brand campaign, content creation brief, or career opportunity? Reach out directly via email, WhatsApp, or LinkedIn!
                </p>
              </div>

              {/* Response Time Indicator */}
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#FAF6EE] border border-[#E6DCCC] text-xs font-mono text-[#59443F]">
                <Clock className="w-4 h-4 text-[#E88B73] shrink-0" />
                <span>Average Response Time: <strong>&lt; 2 Hours</strong></span>
              </div>

              {/* Direct Channels Stack */}
              <div className="space-y-3">
                {/* Email Channel */}
                <div className="p-4 rounded-2xl bg-[#FAF6EE] border border-[#E6DCCC] flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-[#F5EBE6] text-[#E88B73] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <p className="text-[10px] font-mono text-[#E88B73] uppercase tracking-wider font-bold">Email Address</p>
                      <a href={`mailto:${contactEmail}`} className="text-xs sm:text-sm font-semibold text-[#3D2E2B] hover:text-[#E88B73] truncate block transition-colors">
                        {contactEmail}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#E6DCCC] text-[#3D2E2B] hover:text-[#E88B73] shrink-0 transition-colors shadow-sm"
                    title="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[#6B8065]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp Channel */}
                <div className="p-4 rounded-2xl bg-[#FAF6EE] border border-[#E6DCCC] flex items-center justify-between gap-3 hover:border-[#6B8065]/60 transition-colors group">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 overflow-hidden flex-1"
                  >
                    <div className="p-2.5 rounded-xl bg-[#EBF0EA] text-[#6B8065] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-[#6B8065] uppercase tracking-wider font-bold">WhatsApp Direct</p>
                      <p className="text-xs sm:text-sm font-semibold text-[#3D2E2B] group-hover:text-[#6B8065] transition-colors">
                        {displayPhone}
                      </p>
                    </div>
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#E6DCCC] text-[#3D2E2B] hover:text-[#6B8065] shrink-0 transition-colors shadow-sm"
                    title="Copy phone number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-[#6B8065]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn Channel */}
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-[#FAF6EE] border border-[#E6DCCC] flex items-center justify-between gap-3 hover:border-[#C4A468]/60 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#F7F2E6] text-[#C4A468] shrink-0">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-[#C4A468] uppercase tracking-wider font-bold">LinkedIn Profile</p>
                      <p className="text-xs sm:text-sm font-semibold text-[#3D2E2B] group-hover:text-[#C4A468] transition-colors">
                        Ardhia Nurul Vitra Iskandar
                      </p>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#E6DCCC] text-[#3D2E2B] group-hover:text-[#C4A468] transition-colors shadow-sm">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>

                {/* Instagram Channel */}
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-[#FAF6EE] border border-[#E6DCCC] flex items-center justify-between gap-3 hover:border-[#E88B73]/60 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#F5EBE6] text-[#E88B73] shrink-0">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-[#E88B73] uppercase tracking-wider font-bold">Instagram Brand</p>
                      <p className="text-xs sm:text-sm font-semibold text-[#3D2E2B] group-hover:text-[#E88B73] transition-colors">
                        @kukiss.bae
                      </p>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#E6DCCC] text-[#3D2E2B] group-hover:text-[#E88B73] transition-colors shadow-sm">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>
              </div>

            </div>
          </FadeIn>

          {/* Right Column: Interactive Direct Message & WhatsApp Form */}
          <FadeIn delay={0.2} y={30} className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-[32px] sm:rounded-[38px] bg-[#FFFFFF] border border-[#E6DCCC] shadow-xl shadow-[#3D2E2B]/5 space-y-6">
              
              <div className="space-y-1">
                <h3 className="font-extrabold text-xl sm:text-2xl text-[#3D2E2B]">Send a Direct Message</h3>
                <p className="text-xs sm:text-sm text-[#59443F] font-light">
                  Select a topic and send an instant message via Email or WhatsApp.
                </p>
              </div>

              {/* Topic Selector Bar */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-[#3D2E2B]/80 font-bold uppercase tracking-wider block">
                  Select Project Topic:
                </label>
                <div className="flex items-center gap-2 flex-wrap">
                  {topics.map((tp) => (
                    <button
                      key={tp}
                      type="button"
                      onClick={() => setSelectedTopic(tp)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                        selectedTopic === tp
                          ? 'bg-[#3D2E2B] text-white border-[#3D2E2B] shadow-sm'
                          : 'bg-[#FAF6EE] text-[#3D2E2B] border-[#E6DCCC] hover:border-[#E88B73]'
                      }`}
                    >
                      {tp}
                    </button>
                  ))}
                </div>
              </div>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-[#EBF0EA] border border-[#A8BBA2] text-[#6B8065] text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 mx-auto text-[#6B8065]" />
                  <p className="font-bold text-lg">Message Sent Successfully!</p>
                  <p className="text-xs font-light text-[#3D2E2B]/90">
                    Thank you for reaching out, {formState.name || 'Friend'}! I will respond to your message shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitEmail} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#3D2E2B]/80 font-semibold">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#FAF6EE] border border-[#E6DCCC] text-[#3D2E2B] text-xs sm:text-sm focus:outline-none focus:border-[#E88B73] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#3D2E2B]/80 font-semibold">Your Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#FAF6EE] border border-[#E6DCCC] text-[#3D2E2B] text-xs sm:text-sm focus:outline-none focus:border-[#E88B73] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#3D2E2B]/80 font-semibold">Message *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder={`Hi Ardhia, regarding ${selectedTopic}, we would like to discuss...`}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAF6EE] border border-[#E6DCCC] text-[#3D2E2B] text-xs sm:text-sm focus:outline-none focus:border-[#E88B73] transition-colors resize-none"
                    />
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {/* Send via Email Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        background: 'linear-gradient(135deg, #3D2E2B 0%, #59443F 50%, #2D211F 100%)',
                      }}
                      className="w-full py-3.5 px-5 rounded-full text-white font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#3D2E2B]/15 hover:scale-[1.01] transition-transform active:scale-[0.99]"
                    >
                      {isSubmitting ? (
                        <span>Sending Email...</span>
                      ) : (
                        <>
                          <span>Send via Email</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    {/* Send via WhatsApp Button */}
                    <button
                      type="button"
                      onClick={handleSendWhatsApp}
                      className="w-full py-3.5 px-5 rounded-full bg-[#6B8065] hover:bg-[#586B53] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#6B8065]/20 hover:scale-[1.01] transition-transform active:scale-[0.99]"
                    >
                      <span>Send via WhatsApp</span>
                      <MessageSquare className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}

            </div>
          </FadeIn>

        </div>

        {/* Footer Bar */}
        <div className="pt-12 sm:pt-16 border-t border-[#E6DCCC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#59443F]">
          <p>&copy; {new Date().getFullYear()} Ardhia Nurul Vitra Iskandar. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#E88B73] hover:text-[#3D2E2B] transition-colors font-bold"
          >
            <span>Back to Top</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
