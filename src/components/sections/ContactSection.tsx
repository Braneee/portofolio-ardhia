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
    <section id="contact" className="py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10 bg-gradient-to-b from-[#1A1328] via-[#291438] to-[#13111C] text-[#E2E8F0] relative z-10 w-full overflow-hidden">
      
      {/* Soft Ambient Orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[550px] h-[550px] rounded-full bg-[#F472B6]/15 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[550px] h-[550px] rounded-full bg-[#C084FC]/15 blur-[150px] pointer-events-none" />

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
            <div className="p-8 rounded-[35px] bg-[#1E1733]/85 backdrop-blur-xl border border-[#C084FC]/25 shadow-2xl space-y-6">
              
              <div className="space-y-2">
                <h3 className="font-bold text-2xl text-white">
                  Let&apos;s Build Impactful Campaigns Together
                </h3>
                <p className="text-xs sm:text-sm text-[#E2E8F0]/75 font-light leading-relaxed">
                  Have a brand project, short-form video funnel, or full-time position available? Reach out directly!
                </p>
              </div>

              {/* Email Box */}
              <div className="p-4 rounded-2xl bg-[#271E42] border border-[#C084FC]/25 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-[#332457] text-[#F472B6]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-[10px] font-mono text-[#E879F9] uppercase tracking-wider">Email Direct</p>
                    <a href={`mailto:${contactEmail}`} className="text-xs sm:text-sm font-semibold text-white hover:text-[#F472B6] truncate block transition-colors">
                      {contactEmail}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-[#352759] border border-[#C084FC]/30 text-[#E2E8F0] hover:text-white hover:border-[#F472B6] shrink-0 transition-colors"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#34D399]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp Box */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#271E42] border border-[#C084FC]/25 flex items-center justify-between gap-3 hover:border-[#34D399]/60 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#1B362F] text-[#34D399]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-[#34D399] uppercase tracking-wider">WhatsApp Direct</p>
                    <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#34D399] transition-colors">
                      +62 857-8073-2227
                    </p>
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#352759] border border-[#C084FC]/30 text-[#E2E8F0] group-hover:text-[#34D399] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>

              {/* LinkedIn Box */}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#271E42] border border-[#C084FC]/25 flex items-center justify-between gap-3 hover:border-[#38BDF8]/60 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#172D45] text-[#38BDF8]">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-[#38BDF8] uppercase tracking-wider">LinkedIn Profile</p>
                    <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#38BDF8] transition-colors">
                      Ardhia Nurul Vitra Iskandar
                    </p>
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#352759] border border-[#C084FC]/30 text-[#E2E8F0] group-hover:text-[#38BDF8] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>

            </div>
          </FadeIn>

          {/* Right Column: Message Form */}
          <FadeIn delay={0.2} y={30} className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-8 rounded-[35px] bg-[#1E1733]/85 backdrop-blur-xl border border-[#C084FC]/25 shadow-2xl space-y-6">
              
              <div className="space-y-1">
                <h3 className="font-bold text-xl text-white">Send a Direct Message</h3>
                <p className="text-xs text-[#E2E8F0]/70 font-light">
                  Fill in your details below and I&apos;ll get back to you within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-[#1B362F] border border-[#34D399]/40 text-[#34D399] text-center space-y-2">
                  <p className="font-bold text-base">Message Sent Successfully!</p>
                  <p className="text-xs font-light text-[#E2E8F0]/90">
                    Thank you for reaching out. I will respond to your email shortly.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#E2E8F0]/80">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#281F42] border border-[#C084FC]/25 text-white text-xs sm:text-sm focus:outline-none focus:border-[#F472B6] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#E2E8F0]/80">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#281F42] border border-[#C084FC]/25 text-white text-xs sm:text-sm focus:outline-none focus:border-[#F472B6] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#E2E8F0]/80">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Ardhia, we would love to discuss a project..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#281F42] border border-[#C084FC]/25 text-white text-xs sm:text-sm focus:outline-none focus:border-[#F472B6] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    }}
                    className="w-full py-3.5 px-6 rounded-full text-white font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 outline outline-2 outline-white -outline-offset-[3px] shadow-lg shadow-purple-900/30 hover:scale-[1.01] transition-transform active:scale-[0.99]"
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
        <div className="pt-16 border-t border-[#C084FC]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#E2E8F0]/60">
          <p>&copy; {new Date().getFullYear()} Ardhia Nurul Vitra Iskandar. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#E879F9] hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
