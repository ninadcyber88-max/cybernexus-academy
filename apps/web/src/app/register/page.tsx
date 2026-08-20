"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const form = new FormData(e.currentTarget);

    const password = String(form.get("password") || "");
    const confirmPassword = String(form.get("confirmPassword") || "");
    const terms = form.get("terms");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (!terms) {
      setError("Please accept the Terms & Conditions.");
      return;
    }

    alert("Registration form validated successfully.");
  }

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Cyber Grid */}
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[linear-gradient(rgba(0,212,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.08)_1px,transparent_1px)] bg-[size:54px_54px]" />

      {/* Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
        <div className="w-full max-w-2xl">

          {/* Brand */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-black tracking-[0.25em] text-cyan-400">
              CYBERNEXUS
            </h1>

            <p className="mt-1 text-xs tracking-[0.55em] text-gray-500">
              ACADEMY
            </p>

            <p className="mt-6 text-xs tracking-[0.35em] text-cyan-500">
              // CREATE STUDENT ACCOUNT
            </p>
          </div>

          {/* Card */}
          <div className="rounded-2xl border border-cyan-500/20 bg-[#07090b]/95 p-6 md:p-9 shadow-[0_0_60px_rgba(0,212,255,0.08)]">

            <h2 className="text-3xl font-bold">
              Create Account
            </h2>

            <p className="mt-2 text-gray-500">
              Register to start your cybersecurity learning journey.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">

              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-300">
                  FULL NAME
                </label>

                <input
                  name="fullName"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                />
              </div>

              {/* Email + Mobile */}
              <div className="grid gap-5 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-300">
                    EMAIL ADDRESS
                  </label>

                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="student@example.com"
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-300">
                    MOBILE NUMBER
                  </label>

                  <input
                    name="mobile"
                    type="tel"
                    required
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="10 digit mobile number"
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-cyan-400"
                  />
                </div>

              </div>

              {/* Aadhaar + PAN */}
              <div className="grid gap-5 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-300">
                    AADHAAR NUMBER
                  </label>

                  <input
                    name="aadhaar"
                    type="text"
                    required
                    inputMode="numeric"
                    maxLength={12}
                    placeholder="12 digit Aadhaar number"
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-cyan-400"
                  />

                  <p className="mt-1 text-xs text-gray-600">
                    Use only if required for your academy workflow.
                  </p>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-300">
                    PAN NUMBER
                  </label>

                  <input
                    name="pan"
                    type="text"
                    required
                    maxLength={10}
                    placeholder="ABCDE1234F"
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 uppercase text-white outline-none focus:border-cyan-400"
                  />
                </div>

              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-300">
                  PASSWORD
                </label>

                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Minimum 8 characters"
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 pr-20 text-white outline-none focus:border-cyan-400"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-cyan-400"
                  >
                    {showPassword ? "HIDE" : "SHOW"}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-300">
                  CONFIRM PASSWORD
                </label>

                <div className="relative">
                  <input
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    placeholder="Repeat your password"
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 pr-20 text-white outline-none focus:border-cyan-400"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-cyan-400"
                  >
                    {showConfirmPassword ? "HIDE" : "SHOW"}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <label className="flex items-start gap-3 text-sm text-gray-500">
                <input
                  name="terms"
                  type="checkbox"
                  className="mt-1 accent-cyan-400"
                />

                <span>
                  I agree to the{" "}
                  <span className="text-cyan-400">
                    Terms & Conditions
                  </span>{" "}
                  and Privacy Policy.
                </span>
              </label>

              {/* Error */}
              {error && (
                <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-xl bg-cyan-400 py-4 font-bold text-black transition hover:bg-cyan-300"
              >
                CREATE ACCOUNT →
              </button>

            </form>

            {/* Login */}
            <div className="mt-7 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-cyan-400 hover:text-cyan-300"
              >
                Sign In
              </Link>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
