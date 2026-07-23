'use client';

import React from 'react';
import { Download } from 'lucide-react';

interface DownloadCVButtonProps {
  variant?: 'primary' | 'outline' | 'nav';
  className?: string;
}

export function DownloadCVButton({ variant = 'primary', className = '' }: DownloadCVButtonProps) {
  const signatureStyle = {
    background: 'linear-gradient(135deg, #E88B73 0%, #F4A28C 45%, #C4A468 100%)',
    boxShadow: '0px 4px 14px rgba(232, 139, 115, 0.35)',
  };

  if (variant === 'nav') {
    return (
      <a
        href="/CV_ARDHIA_NURUL_VITRA_ISKANDAR.pdf"
        download="CV_ARDHIA_NURUL_VITRA_ISKANDAR.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={signatureStyle}
        className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#2D211F] hover:scale-105 transition-transform duration-200 shadow-md ${className}`}
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
        className={`inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 border-[#E88B73] text-[#3D2E2B] hover:bg-[#E88B73]/15 font-semibold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-sm ${className}`}
      >
        <Download className="w-4 h-4 text-[#E88B73]" /> Download CV (PDF)
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
      className={`inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-[#2D211F] font-extrabold text-xs sm:text-sm uppercase tracking-widest hover:scale-105 transition-transform duration-300 shadow-xl ${className}`}
    >
      <Download className="w-4 h-4" /> Download CV (PDF)
    </a>
  );
}
