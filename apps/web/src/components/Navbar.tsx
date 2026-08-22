'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/config/site';

interface NavbarProps {
  isMatrixEnabled: boolean;
  onToggleMatrix: () => void;
}

export function Navbar({ isMatrixEnabled, onToggleMatrix }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/80 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-transform group-hover:scale-105">
            <Image
              src="/Ninadcyber.jpg"
              alt="CyberNexus Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-mono font-bold text-sm tracking-wider text-white">
              CYBER<span className="text-cyan-400">NEXUS</span>
            </span>
            <span className="text-[10px] font-mono text-zinc-400 tracking-widest">ACADEMY</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono text-zinc-300">
          {SITE_CONFIG?.navItems?.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-cyan-400 transition-colors"
            >
              {item.href === '/' ? 'HOME' : item.href.replace(/^\//, '').replace(/[-_]/g, ' ').toUpperCase()}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <div className="hidden">
            <button
              onClick={onToggleMatrix}
              aria-pressed={isMatrixEnabled}
            >
              Toggle
            </button>
          </div>

          <Link
            href="/login"
            className="hidden sm:inline-flex items-center justify-center text-xs font-mono px-4 py-2 rounded-lg border border-cyan-500/40 bg-cyan-950/20 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all shadow-[0_0_10px_rgba(6,182,212,0.2)]"
          >
            LOGIN
          </Link>
        </div>
      </div>
    </header>
  );
}
