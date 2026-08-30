'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';

interface LiveProjectButtonProps {
  href?: string;
  label?: string;
  className?: string;
}

export function LiveProjectButton({
  href = '#',
  label = 'View Campaign',
  className = '',
}: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-1.5 rounded-full border-2 border-[#3D2E2B] text-[#3D2E2B] hover:bg-[#3D2E2B] hover:text-[#FAF4EA] font-bold uppercase tracking-wider px-4 py-1.5 sm:px-6 sm:py-2 text-xs sm:text-sm transition-all duration-300 cursor-pointer shadow-sm ${className}`}
    >
      <span>{label}</span>
      <ExternalLink className="w-3.5 h-3.5" />
    </a>
  );
}
