'use client';

import React, { useState } from 'react';
import { FadeIn } from '../ui/FadeIn';
import { Mail, Phone, ArrowUpRight, Copy, Check, Send, ChevronUp, Linkedin } from 'lucide-react';
import { personalData } from '../../data/personal';

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactEmail = personalData.email || 'ardhianurul5@gmail.com';
  const whatsappUrl = 'https://wa.me/6285780732227';
  const linkedinUrl = 'https://www.linkedin.com/in/ardhianurul';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 4000);
    }, 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10 bg-gradient-to-b from-[#F5F0E6] via-[#FAF4EA] to-[#F9F6F0] text-[#3D2E2B] relative z-10 w-full overflow-hidden">
      
      {/* Soft Ambient Orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[550px] h-[550px] rounded-full bg-[#F4A28C]/20 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[550px] h-[550px] rounded-full bg-[#A8BBA2]/25 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <FadeIn delay={0} y={40} className="text-center">
          <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,120px)] leading-none tracking-tight">
            Contact
          </h2>
        </FadeIn>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Links & Info */}
          <FadeIn delay={0.1} y={30} className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-[35px] bg-[#FFFFFF] border border-[#E6DCCC] shadow-xl shadow-[#3D2E2B]/5 space-y-6">
              
              <div className="space-y-2">
                <h3 className="font-bold text-2xl text-[#3D2E2B]">
                  Let&apos;s Build Impactful Campaigns Together
                </h3>
                <p className="text-xs sm:text-sm text-[#59443F] font-light leading-relaxed">
                  Have a brand project, short-form video funnel, or full-time position available? Reach out directly!
                </p>
              </div>

              {/* Email Box */}
              <div className="p-4 rounded-2xl bg-[#FAF6EE] border border-[#E6DCCC] flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-[#F5EBE6] text-[#E88B73]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-[10px] font-mono text-[#E88B73] uppercase tracking-wider font-bold">Email Direct</p>
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

              {/* WhatsApp Box */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#FAF6EE] border border-[#E6DCCC] flex items-center justify-between gap-3 hover:border-[#6B8065]/60 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#EBF0EA] text-[#6B8065]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-[#6B8065] uppercase tracking-wider font-bold">WhatsApp Direct</p>
                    <p className="text-xs sm:text-sm font-semibold text-[#3D2E2B] group-hover:text-[#6B8065] transition-colors">
                      +62 857-8073-2227
                    </p>
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#E6DCCC] text-[#3D2E2B] group-hover:text-[#6B8065] transition-colors shadow-sm">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>

              {/* LinkedIn Box */}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#FAF6EE] border border-[#E6DCCC] flex items-center justify-between gap-3 hover:border-[#C4A468]/60 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#F7F2E6] text-[#C4A468]">
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

            </div>
          </FadeIn>

          {/* Right Column: Message Form */}
          <FadeIn delay={0.2} y={30} className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-8 rounded-[35px] bg-[#FFFFFF] border border-[#E6DCCC] shadow-xl shadow-[#3D2E2B]/5 space-y-6">
              
              <div className="space-y-1">
                <h3 className="font-bold text-xl text-[#3D2E2B]">Send a Direct Message</h3>
                <p className="text-xs text-[#59443F] font-light">
                  Fill in your details below and I&apos;ll get back to you within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-[#EBF0EA] border border-[#A8BBA2] text-[#6B8065] text-center space-y-2">
                  <p className="font-bold text-base">Message Sent Successfully!</p>
                  <p className="text-xs font-light text-[#3D2E2B]/90">
                    Thank you for reaching out. I will respond to your email shortly.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#3D2E2B]/80 font-semibold">Your Name</label>
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
                      <label className="text-xs font-mono text-[#3D2E2B]/80 font-semibold">Your Email</label>
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
                    <label className="text-xs font-mono text-[#3D2E2B]/80 font-semibold">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Ardhia, we would love to discuss a project..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAF6EE] border border-[#E6DCCC] text-[#3D2E2B] text-xs sm:text-sm focus:outline-none focus:border-[#E88B73] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      background: 'linear-gradient(135deg, #3D2E2B 0%, #59443F 50%, #2D211F 100%)',
                    }}
                    className="w-full py-3.5 px-6 rounded-full text-white font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#3D2E2B]/20 hover:scale-[1.01] transition-transform active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              )}

            </form>
          </FadeIn>

        </div>

        {/* Footer Bar */}
        <div className="pt-16 border-t border-[#E6DCCC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#59443F]">
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
