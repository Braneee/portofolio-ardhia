'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import { Mail, Send, Copy, Check, Github, Linkedin, Twitter, Sparkles, MessageSquare, MapPin } from 'lucide-react';
import { contactFormSchema, ContactFormData } from '@/lib/validations';
import { useToast } from '../providers/toast-provider';
import { personalData } from '@/data/personal';

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      projectType: 'Full-time / Internship',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });

        toast({
          type: 'success',
          title: 'Message Sent Successfully!',
          message: `Thank you ${data.name}. I'll get back to you within 24 hours.`,
        });

        reset();
      } else {
        toast({
          type: 'error',
          title: 'Submission Failed',
          message: 'Please try again or send an email directly.',
        });
      }
    } catch (err) {
      toast({
        type: 'error',
        title: 'Network Error',
        message: 'Unable to send message right now.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    toast({ type: 'success', title: 'Email Copied!', message: personalData.email });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400">
            <Mail className="w-3.5 h-3.5" />
            <span>09 // INITIATE CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Let's Build Something Exceptional
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl glass-panel space-y-6 border border-slate-200 dark:border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  Open for High-Impact Roles
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Currently evaluating full-time staff/senior software engineering positions, principal internships, and technical advisory roles.
                </p>
              </div>

              {/* Email Copy Card */}
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase font-mono text-slate-400 font-bold">Direct Email</p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
                      {personalData.email}
                    </p>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2 rounded-xl glass-panel hover:bg-sky-500/20 hover:text-sky-500 text-slate-600 dark:text-slate-300 transition-all shrink-0"
                  title="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                <MapPin className="w-4 h-4 text-sky-500" />
                <span>{personalData.location}</span>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/60 flex items-center gap-3">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl glass-panel hover:text-sky-500 flex items-center justify-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl glass-panel hover:text-sky-500 flex items-center justify-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-6 sm:p-8 rounded-3xl glass-panel border border-slate-200 dark:border-slate-800 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Your Name *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                  />
                  {errors.name && (
                    <p className="text-[11px] text-rose-500 font-medium">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Your Email *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="e.g. sarah@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-500 font-medium">{errors.email.message}</p>
                  )}
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Project Type */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Engagement Type
                  </label>
                  <select
                    {...register('projectType')}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                  >
                    <option value="Full-time / Internship">Full-time / Internship</option>
                    <option value="Contract / Freelance">Contract / Freelance</option>
                    <option value="Technical Advisory">Technical Advisory</option>
                    <option value="Other">Other Inquiry</option>
                  </select>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Subject *
                  </label>
                  <input
                    {...register('subject')}
                    type="text"
                    placeholder="e.g. Senior Role Opportunity"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-rose-500 font-medium">{errors.subject.message}</p>
                  )}
                </div>

              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Message *
                </label>
                <textarea
                  {...register('message')}
                  rows={5}
                  placeholder="Tell me about your team, tech stack, and goals..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all resize-none"
                />
                {errors.message && (
                  <p className="text-[11px] text-rose-500 font-medium">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
