'use client';

import React from 'react';
import { Download } from 'lucide-react';

interface DownloadCVButtonProps {
  variant?: 'primary' | 'outline' | 'nav';
  className?: string;
}

export function DownloadCVButton({ variant = 'primary', className = '' }: DownloadCVButtonProps) {
  // Signature Gradient matching ContactButton: 123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%
  const signatureStyle = {
    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
    boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
  };

  if (variant === 'nav') {
    return (
      <a
        href="/CV_ARDHIA_NURUL_VITRA_ISKANDAR.pdf"
        download="CV_ARDHIA_NURUL_VITRA_ISKANDAR.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={signatureStyle}
        className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-white outline outline-2 outline-white -outline-offset-[3px] hover:scale-105 transition-transform duration-200 shadow-md ${className}`}
      >
        <Download className="w-3.5 h-3.5" /> CV
      </a>
    );
  }

  if (variant === 'outline') {
    return (
      <a
        href="/CV_ARDHIA_NURUL_VITRA_ISKANDAR.pdf"
        download="CV_ARDHIA_NURUL_VITRA_ISKANDAR.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 border-[#B600A8]/60 text-[#D7E2EA] hover:bg-[#B600A8]/20 hover:border-[#B600A8] font-medium text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-lg ${className}`}
      >
        <Download className="w-4 h-4 text-[#B600A8]" /> Download CV (PDF)
      </a>
    );
  }

  return (
    <a
      href="/CV_ARDHIA_NURUL_VITRA_ISKANDAR.pdf"
      download="CV_ARDHIA_NURUL_VITRA_ISKANDAR.pdf"
      target="_blank"
      rel="noopener noreferrer"
      style={signatureStyle}
      className={`inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white font-extrabold text-xs sm:text-sm uppercase tracking-widest outline outline-2 outline-white -outline-offset-[3px] hover:scale-105 transition-transform duration-300 shadow-xl ${className}`}
    >
      <Download className="w-4 h-4" /> Download CV (PDF)
    </a>
  );
}
