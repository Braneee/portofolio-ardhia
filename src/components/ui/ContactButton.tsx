'use client';

import React from 'react';

export function ContactButton() {
  const signatureStyle = {
    background: 'linear-gradient(135deg, #3D2E2B 0%, #59443F 50%, #2D211F 100%)',
    boxShadow: '0px 4px 14px rgba(61, 46, 43, 0.3)',
  };

  return (
    <a
      href="#contact"
      style={signatureStyle}
      className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-white font-extrabold text-xs sm:text-sm uppercase tracking-widest hover:scale-105 transition-transform duration-300 shadow-xl"
    >
      Contact Me
    </a>
  );
}
