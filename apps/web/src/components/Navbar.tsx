'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';
import { MatrixToggle } from '@/components/MatrixToggle';

interface NavbarProps {
  isMatrixEnabled: boolean;
  onToggleMatrix: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isMatrixEnabled, onToggleMatrix }) => {
  return (
    <header className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-zinc-900/80">
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-3 group">
        <div className="p-2 rounded-lg bg-emerald-950/50 border border-emerald-500/30 group-hover:border-emerald-400/60 transition-colors">
          <ShieldCheck className="w-6 h-6 text-emerald-400" />
        </div>
        <div>
          <span className="font-mono text-lg font-bold tracking-widest text-emerald-400">
            CYBER<span className="text-white">NEXUS</span>
          </span>
          <span className="block text-[10px] font-mono text-zinc-500 tracking-wider">
            ACADEMY
          </span>
        </div>
      </Link>

      {/* Nav Links */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-mono text-zinc-400">
        {SITE_CONFIG.navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hover:text-emerald-400 transition-colors"
          >
            {item.title}
          </Link>
        ))}
      </nav>

      {/* Matrix Toggle & Auth Buttons */}
      <div className="flex items-center gap-4">
        <MatrixToggle isEnabled={isMatrixEnabled} onToggle={onToggleMatrix} />

        <Link
          href="/login"
          className="hidden sm:inline-flex items-center justify-center text-xs font-mono px-4 py-2 rounded border border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:border-emerald-500/50 hover:text-white transition"
        >
          LOGIN
        </Link>
        <Link
          href="/register"
          className="inline-flex items-center justify-center text-xs font-mono px-4 py-2 rounded bg-emerald-500 hover:bg-emerald-400 text-black font-semibold transition"
        >
          REGISTER
        </Link>
      </div>
    </header>
  );
};