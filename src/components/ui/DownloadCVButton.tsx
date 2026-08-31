'use client';

import React from 'react';
import { Download } from 'lucide-react';

interface DownloadCVButtonProps {
  variant?: 'primary' | 'outline' | 'nav';
  className?: string;
}

export function DownloadCVButton({ variant = 'primary', className = '' }: DownloadCVButtonProps) {
  if (variant === 'nav') {
    return (
      <a
        href="/CV_ARDHIA_NURUL_VITRA_ISKANDAR.pdf"
        download="CV_ARDHIA_NURUL_VITRA_ISKANDAR.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#3D2E2B] text-xs font-mono font-bold uppercase tracking-wider text-[#FAF6EE] hover:scale-105 transition-transform duration-200 shadow-md ${className}`}
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
      className={`inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border-2 border-[#3D2E2B] text-[#3D2E2B] font-extrabold text-xs sm:text-sm uppercase tracking-widest hover:bg-[#3D2E2B] hover:text-[#FAF4EA] transition-all duration-300 shadow-sm ${className}`}
    >
      <Download className="w-4 h-4" /> Download CV (PDF)
    </a>
  );
}
