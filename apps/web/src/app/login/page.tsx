"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-12 text-white">

      {/* CYBER GRID */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      {/* GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

      {/* LOGIN CARD */}
      <div className="relative z-10 w-full max-w-md">

        {/* BRAND */}
        <div className="mb-8 text-center">

          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-black tracking-[0.18em] text-cyan-400">
              CYBERNEXUS
            </h1>

            <p className="mt-1 text-xs tracking-[0.5em] text-zinc-500">
              ACADEMY
            </p>
          </Link>

          <p className="mt-6 font-mono text-xs tracking-[0.3em] text-cyan-500">
            // SECURE STUDENT ACCESS
          </p>

        </div>

        {/* CARD */}
        <div className="rounded-3xl border border-cyan-400/20 bg-zinc-950/80 p-8 shadow-2xl shadow-cyan-400/5 backdrop-blur-xl">

          <h2 className="text-3xl font-bold">
            Welcome Back
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Sign in to continue your cybersecurity journey.
          </p>

          {/* EMAIL */}
          <div className="mt-8">

            <label
              htmlFor="email"
              className="mb-2 block text-xs font-semibold uppercase tracking-widest text-zinc-400"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="student@example.com"
              className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm outline-none transition placeholder:text-zinc-700 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30"
            />

          </div>

          {/* PASSWORD */}
          <div className="mt-5">

            <div className="mb-2 flex items-center justify-between">

              <label
                htmlFor="password"
                className="text-xs font-semibold uppercase tracking-widest text-zinc-400"
              >
                Password
              </label>

              <button
                type="button"
                className="text-xs text-cyan-400 hover:text-cyan-300"
              >
                Forgot password?
              </button>

            </div>

            <div className="relative">

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 pr-20 text-sm outline-none transition placeholder:text-zinc-700 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-cyan-400"
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>

            </div>

          </div>

          {/* REMEMBER */}
          <div className="mt-5 flex items-center gap-3">

            <input
              id="remember"
              type="checkbox"
              className="h-4 w-4 accent-cyan-400"
            />

            <label
              htmlFor="remember"
              className="text-sm text-zinc-500"
            >
              Remember me
            </label>

          </div>

          {/* LOGIN BUTTON */}
          <button
            type="button"
            className="mt-7 w-full rounded-xl bg-cyan-400 px-5 py-3.5 font-bold text-black transition hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
          >
            Sign In →
          </button>

          {/* DIVIDER */}
          <div className="my-7 flex items-center gap-4">

            <div className="h-px flex-1 bg-white/10" />

            <span className="text-xs text-zinc-600">
              OR
            </span>

            <div className="h-px flex-1 bg-white/10" />

          </div>

          {/* REGISTER */}
          <p className="text-center text-sm text-zinc-500">

            Don't have an account?{" "}

            <Link
              href="/register"
              className="font-semibold text-cyan-400 hover:text-cyan-300"
            >
              Create Account
            </Link>

          </p>

        </div>

        {/* SECURITY MESSAGE */}
        <div className="mt-6 text-center">

          <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-700">
            🔒 Secure Learning Environment
          </p>

        </div>

      </div>

    </main>
  );
}
