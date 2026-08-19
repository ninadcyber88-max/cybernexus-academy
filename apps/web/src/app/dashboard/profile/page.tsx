"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProfilePage() {
  const [editing, setEditing] = useState(false);

  const [name, setName] = useState("Ninad Pawar");
  const [email, setEmail] = useState("student@cybernexus.academy");

  const [mobile, setMobile] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [pan, setPan] = useState("");
  
  return (const [mobile, setMobile] = useState("");

    <main className="min-h-screen bg-black text-white md:pl-72">

      {/* SIDEBAR */}
      <aside className="fixed left-0 top-0 hidden h-screen w-72 border-r border-white/10 bg-zinc-950 md:flex md:flex-col">

        <div className="border-b border-white/10 px-6 py-6">

          <Link href="/">
            <h1 className="text-xl font-black tracking-[0.18em] text-cyan-400">
              CYBERNEXUS
            </h1>

            <p className="mt-1 text-[10px] tracking-[0.5em] text-zinc-600">
              ACADEMY
            </p>
          </Link>

        </div>

        <nav className="flex-1 space-y-2 px-4 py-6">

          <Link
            href="/dashboard"
            className="flex rounded-xl px-4 py-3 text-sm text-zinc-500 hover:bg-white/5 hover:text-white"
          >
            ⌂ &nbsp; Dashboard
          </Link>

          <Link
            href="/dashboard/my-courses"
            className="flex rounded-xl px-4 py-3 text-sm text-zinc-500 hover:bg-white/5 hover:text-white"
          >
            ▣ &nbsp; My Courses
          </Link>

          <Link
            href="/dashboard/continue-learning"
            className="flex rounded-xl px-4 py-3 text-sm text-zinc-500 hover:bg-white/5 hover:text-white"
          >
            ▶ &nbsp; Continue Learning
          </Link>

          <Link
            href="/dashboard/progress"
            className="flex rounded-xl px-4 py-3 text-sm text-zinc-500 hover:bg-white/5 hover:text-white"
          >
            ◔ &nbsp; Progress
          </Link>

          <div className="pt-6" />

          <Link
            href="/dashboard/completed-lessons"
            className="flex rounded-xl px-4 py-3 text-sm text-zinc-500 hover:bg-white/5 hover:text-white"
          >
            ✓ &nbsp; Completed Lessons
          </Link>

          <Link
            href="/dashboard/certificates"
            className="flex rounded-xl px-4 py-3 text-sm text-zinc-500 hover:bg-white/5 hover:text-white"
          >
            ◇ &nbsp; Certificates
          </Link>

          <Link
            href="/dashboard/profile"
            className="flex rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-300"
          >
            ◎ &nbsp; Profile
          </Link>

        </nav>

        <div className="border-t border-white/10 p-4">

          <button
            type="button"
            className="w-full rounded-xl border border-red-500/20 py-3 text-xs text-red-400 hover:bg-red-500/10"
          >
            ⎋ &nbsp; Logout
          </button>

        </div>

      </aside>

      {/* TOPBAR */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/80 backdrop-blur-xl">

        <div className="flex h-20 items-center justify-between px-5 md:px-8">

          <div>

            <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-500">
              // ACCOUNT CENTER
            </p>

            <h2 className="mt-1 text-lg font-bold">
              Student Profile
            </h2>

          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 font-bold text-cyan-300">
            N
          </div>

        </div>

      </header>

      {/* CONTENT */}
      <div className="relative overflow-hidden px-5 py-8 md:px-8">

        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-400/5 blur-[120px]" />

        {/* PROFILE HERO */}
        <section className="relative rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-6 md:p-8">

          <div className="flex flex-col gap-6 md:flex-row md:items-center">

            <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-2 border-cyan-400/40 bg-black text-4xl font-black text-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.12)]">
              N
            </div>

            <div className="flex-1">

              <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
                STUDENT PROFILE
              </p>

              <h1 className="mt-2 text-3xl font-black">
                {name}
              </h1>

              <p className="mt-2 text-sm text-zinc-500">
                {email}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">

                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-[9px] font-semibold tracking-wider text-cyan-400">
                  STUDENT
                </span>

                <span className="rounded-full border border-white/10 px-3 py-1 text-[9px] tracking-wider text-zinc-600">
                  CYBERSECURITY LEARNER
                </span>

              </div>

            </div>

            <button
              type="button"
              onClick={() => setEditing(!editing)}
              className="rounded-xl bg-cyan-400 px-6 py-3 text-xs font-bold text-black hover:bg-cyan-300"
            >
              {editing ? "Save Changes" : "Edit Profile"}
            </button>

          </div>

        </section>

        {/* STATISTICS */}
        <section className="relative mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {[
            ["4", "Enrolled Courses"],
            ["63", "Lessons Completed"],
            ["67%", "Overall Progress"],
            ["🔥 7", "Learning Streak"],
          ].map(([value, label]) => (

            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-zinc-950 p-6"
            >

              <p className="text-3xl font-black text-cyan-400">
                {value}
              </p>

              <p className="mt-2 text-xs uppercase tracking-widest text-zinc-600">
                {label}
              </p>

            </div>

          ))}

        </section>

        {/* PERSONAL INFORMATION */}
        <section className="relative mt-10">

          <div className="mb-5">

            <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
              PERSONAL INFORMATION
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Account Details
            </h2>

          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">

            <div className="grid gap-6 md:grid-cols-2">

              <div>

                <label className="text-[9px] uppercase tracking-widest text-zinc-700">
                  Full Name
                </label>

                {editing ? (
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/40"
                  />
                ) : (
                  <p className="mt-2 text-sm text-zinc-400">
                    {name}
                  </p>
                )}

              </div>

              <div>

                <label className="text-[9px] uppercase tracking-widest text-zinc-700">
                  Email Address
                </label>

                {editing ? (
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/40"
                  />
                ) : (
                  <p className="mt-2 text-sm text-zinc-400">
                    {email}
                  </p>
                )}

              </div>

              <div>

                <label className="text-[9px] uppercase tracking-widest text-zinc-700">
                  Account Type
                </label>

                <p className="mt-2 text-sm text-zinc-400">
                  Student
                </p>

              </div>

              <div>

                <label className="text-[9px] uppercase tracking-widest text-zinc-700">
                  Member Since
                </label>

                <p className="mt-2 text-sm text-zinc-400">
                  August 2026
                </p>

              </div>

            </div>

          </div>

        </section>

        <div className="mt-8 border-t border-white/10 pt-8">

  <div className="mb-5">
    <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
      IDENTITY INFORMATION
    </p>

    <h3 className="mt-2 text-lg font-bold">
      Contact & Verification Details
    </h3>

    <p className="mt-2 text-xs text-zinc-600">
      These details are used for student verification and official
      communication.
    </p>
  </div>

  <div className="grid gap-6 md:grid-cols-2">

    {/* MOBILE */}
    <div>
      <label className="text-[9px] uppercase tracking-widest text-zinc-700">
        Mobile Number
      </label>

      {editing ? (
        <input
          type="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="+91 XXXXX XXXXX"
          maxLength={13}
          className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-700 focus:border-cyan-400/40"
        />
      ) : (
        <p className="mt-2 text-sm text-zinc-400">
          {mobile || "Not added"}
        </p>
      )}
    </div>

    {/* AADHAAR */}
    <div>
      <label className="text-[9px] uppercase tracking-widest text-zinc-700">
        Aadhaar Card Number
      </label>

      {editing ? (
        <input
          type="text"
          value={aadhaar}
          onChange={(e) =>
            setAadhaar(
              e.target.value
                .replace(/\D/g, "")
                .slice(0, 12)
            )
          }
          placeholder="12-digit Aadhaar number"
          maxLength={12}
          inputMode="numeric"
          className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-700 focus:border-cyan-400/40"
        />
      ) : (
        <p className="mt-2 font-mono text-sm text-zinc-400">
          {aadhaar
            ? `XXXX XXXX ${aadhaar.slice(-4)}`
            : "Not added"}
        </p>
      )}
    </div>

    {/* PAN */}
    <div>
      <label className="text-[9px] uppercase tracking-widest text-zinc-700">
        PAN Card Number
      </label>

      {editing ? (
        <input
          type="text"
          value={pan}
          onChange={(e) =>
            setPan(
              e.target.value
                .toUpperCase()
                .replace(/[^A-Z0-9]/g, "")
                .slice(0, 10)
            )
          }
          placeholder="ABCDE1234F"
          maxLength={10}
          className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm uppercase text-white outline-none placeholder:text-zinc-700 focus:border-cyan-400/40"
        />
      ) : (
        <p className="mt-2 font-mono text-sm text-zinc-400">
          {pan
            ? `${pan.slice(0, 2)}XXXXXX${pan.slice(-2)}`
            : "Not added"}
        </p>
      )}
    </div>

    {/* VERIFICATION */}
    <div>
      <label className="text-[9px] uppercase tracking-widest text-zinc-700">
        Verification Status
      </label>

      <div className="mt-2 flex items-center gap-2">

        <span className="h-2 w-2 rounded-full bg-yellow-400" />

        <span className="text-sm text-yellow-400">
          Pending Verification
        </span>

      </div>
    </div>

  </div>

</div>


        {/* LEARNING INTERESTS */}
        <section className="relative mt-10">

          <div className="mb-5">

            <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
              LEARNING INTERESTS
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Cybersecurity Domains
            </h2>

          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              ["🔬", "Digital Forensics"],
              ["💻", "Ethical Hacking"],
              ["🛡️", "Cybersecurity"],
              ["📡", "SOC & Blue Team"],
            ].map(([icon, title]) => (

              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-zinc-950 p-5 transition hover:border-cyan-400/30"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-2xl">
                  {icon}
                </div>

                <h3 className="mt-4 text-sm font-bold">
                  {title}
                </h3>

                <p className="mt-1 text-xs text-zinc-600">
                  Active learning path
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* SECURITY */}
        <section className="relative mt-10">

          <div className="mb-5">

            <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
              ACCOUNT SECURITY
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Security Settings
            </h2>

          </div>

          <div className="space-y-4">

            <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-zinc-950 p-5 md:flex-row md:items-center md:justify-between">

              <div>

                <h3 className="text-sm font-bold">
                  Password
                </h3>

                <p className="mt-1 text-xs text-zinc-600">
                  Last changed recently
                </p>

              </div>

              <button
                type="button"
                className="rounded-xl border border-white/10 px-5 py-3 text-xs text-zinc-400 hover:border-cyan-400/30 hover:text-cyan-300"
              >
                Change Password
              </button>

            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-zinc-950 p-5 md:flex-row md:items-center md:justify-between">

              <div>

                <h3 className="text-sm font-bold">
                  Two-Factor Authentication
                </h3>

                <p className="mt-1 text-xs text-zinc-600">
                  Add an extra layer of account protection.
                </p>

              </div>

              <button
                type="button"
                className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-5 py-3 text-xs font-semibold text-cyan-400"
              >
                Enable 2FA
              </button>

            </div>

          </div>

        </section>

        {/* DANGER ZONE */}
        <section className="relative mt-10 rounded-2xl border border-red-500/10 bg-red-500/[0.02] p-6">

          <p className="font-mono text-[10px] tracking-[0.3em] text-red-400">
            ACCOUNT ACTIONS
          </p>

          <h2 className="mt-2 text-lg font-bold">
            Logout
          </h2>

          <p className="mt-2 text-sm text-zinc-600">
            Sign out of your CyberNexus Academy account.
          </p>

          <button
            type="button"
            className="mt-5 rounded-xl border border-red-500/30 px-6 py-3 text-xs font-bold text-red-400 hover:bg-red-500/10"
          >
            ⎋ Logout
          </button>

        </section>

      </div>

    </main>
  );
}
