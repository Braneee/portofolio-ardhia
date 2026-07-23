'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ExternalLink, CheckCircle } from 'lucide-react';
import { certificatesData } from '@/data/certificates';

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>07 // INDUSTRY CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Verified Technical Credentials
          </h2>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificatesData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-6 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between border border-slate-200 dark:border-slate-800 space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    {cert.issuer}
                  </span>
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">
                  {cert.title}
                </h3>
                
                {cert.credentialId && (
                  <p className="text-[11px] font-mono text-slate-400">
                    ID: {cert.credentialId}
                  </p>
                )}
              </div>

              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline pt-2"
              >
                <span>Verify Credential</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
