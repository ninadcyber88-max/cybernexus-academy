'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ShieldCheck, Lock, Mail, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MatrixBackground } from '@/components/MatrixBackground';
import { useMatrix } from '@/hooks/useMatrix';

export default function LoginPage() {
  const router = useRouter();
  const { isEnabled, toggleMatrix } = useMatrix();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    setTimeout(() => {
      if (email && password.length >= 6) {
        setIsLoading(false);
        router.push('/dashboard');
      } else {
        setIsLoading(false);
        setError('Invalid credentials. Password must be at least 6 characters.');
      }
    }, 1000);
  };

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-emerald-500 selection:text-black flex flex-col justify-between">
      <MatrixBackground isEnabled={isEnabled} />
      <Navbar isMatrixEnabled={isEnabled} onToggleMatrix={toggleMatrix} />

      <section className="relative z-10 w-full max-w-md mx-auto px-6 py-16">
        <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          <div className="text-center mb-8">
            <div className="inline-flex p-3 rounded-xl bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 mb-4 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold font-mono tracking-tight text-zinc-100">
              TERMINAL <span className="text-emerald-400">LOGIN</span>
            </h1>
            <p className="text-xs font-mono text-zinc-500 mt-1">
              Enter your credentials to access security sandboxes
            </p>
          </div>

          {error && (
            <div className="mb-6 p-3 rounded-lg bg-red-950/40 border border-red-500/40 text-red-400 text-xs font-mono">
              [!] {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                Operator Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="operator@cybernexus.io"
                  className="w-full pl-10 pr-4 py-2.5 bg-zinc-900/80 border border-zinc-800 rounded-lg text-xs font-mono text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Access Key / Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-[11px] font-mono text-emerald-500 hover:underline"
                >
                  Forgot key?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-10 py-2.5 bg-zinc-900/80 border border-zinc-800 rounded-lg text-xs font-mono text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-black font-semibold text-xs font-mono transition flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.25)]"
            >
              {isLoading ? (
                <span>AUTHENTICATING...</span>
              ) : (
                <>
                  <span>INITIALIZE SESSION</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-zinc-900 text-center">
            <p className="text-xs font-mono text-zinc-500">
              New cadet?{' '}
              <Link href="/register" className="text-emerald-400 hover:underline font-semibold">
                Register Clearance
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}