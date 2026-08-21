'use client';

import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 w-full border-t border-zinc-900 py-8 px-6 text-zinc-500 text-xs font-mono">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <p className="text-zinc-400">© 2026 CyberNexus Academy. All Rights Reserved.</p>
          <p className="text-[11px] text-zinc-600 mt-0.5">Engineered for Security Professionals</p>
        </div>

        <div className="flex items-center gap-6 text-zinc-500">
          <Link href="/docs" className="hover:text-emerald-400 transition-colors">DOCS</Link>
          <Link href="/terms" className="hover:text-emerald-400 transition-colors">TERMS</Link>
          <Link href="/privacy" className="hover:text-emerald-400 transition-colors">PRIVACY</Link>
        </div>
      </div>
    </footer>
  );
};