"use client";

import { useState } from "react";
import Link from "next/link";

const lessons = [
  {
    title: "Introduction to Cybersecurity",
    course: "Cybersecurity Fundamentals",
    module: "Module 01",
    date: "20 Aug 2026",
    score: 92,
    duration: "24 min",
    icon: "🛡️",
  },
  {
    title: "Cyber Threat Landscape",
    course: "Cybersecurity Fundamentals",
    module: "Module 02",
    date: "18 Aug 2026",
    score: 88,
    duration: "31 min",
    icon: "⚠️",
  },
  {
    title: "Digital Evidence Fundamentals",
    course: "Digital Forensics Specialist",
    module: "Module 01",
    date: "16 Aug 2026",
    score: 95,
    duration: "28 min",
    icon: "🔬",
  },
  {
    title: "Evidence Identification",
    course: "Digital Forensics Specialist",
    module: "Module 02",
    date: "14 Aug 2026",
    score: 91,
    duration: "22 min",
    icon: "🔎",
  },
  {
    title: "Forensic Imaging",
    course: "Digital Forensics Specialist",
    module: "Module 03",
    date: "12 Aug 2026",
    score: 89,
    duration: "36 min",
    icon: "💾",
  },
  {
    title: "Ethical Hacking Fundamentals",
    course: "Ethical Hacking",
    module: "Module 01",
    date: "10 Aug 2026",
    score: 94,
    duration: "27 min",
    icon: "💻",
  },
  {
    title: "Security Testing Methodology",
    course: "Ethical Hacking",
    module: "Module 01",
    date: "08 Aug 2026",
    score: 87,
    duration: "34 min",
    icon: "🎯",
  },
  {
    title: "Reconnaissance Fundamentals",
    course: "Ethical Hacking",
    module: "Module 02",
    date: "06 Aug 2026",
    score: 93,
    duration: "29 min",
    icon: "🌐",
  },
];

export default function CompletedLessonsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL");

  const filteredLessons = lessons.filter((lesson) => {
    const matchesSearch =
      lesson.title.toLowerCase().includes(search.toLowerCase()) ||
      lesson.course.toLowerCase().includes(search.toLowerCase()) ||
      lesson.module.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "ALL" || lesson.course === filter;

    return matchesSearch && matchesFilter;
  });

  return (
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
            className="flex rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-300"
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
            className="flex rounded-xl px-4 py-3 text-sm text-zinc-500 hover:bg-white/5 hover:text-white"
          >
            ◎ &nbsp; Profile
          </Link>

        </nav>

        <div className="border-t border-white/10 p-4">

          <Link
            href="/"
            className="block rounded-xl border border-white/10 py-3 text-center text-xs text-zinc-500 hover:border-cyan-400/30 hover:text-cyan-300"
          >
            ← Back to Academy
          </Link>

        </div>

      </aside>

      {/* TOPBAR */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/80 backdrop-blur-xl">

        <div className="flex h-20 items-center justify-between px-5 md:px-8">

          <div>

            <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-500">
              // ACTIVITY ARCHIVE
            </p>

            <h2 className="mt-1 text-lg font-bold">
              Completed Lessons
            </h2>

          </div>

          <Link
            href="/dashboard/profile"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 font-bold text-cyan-300"
          >
            N
          </Link>

        </div>

      </header>

      {/* CONTENT */}
      <div className="relative overflow-hidden px-5 py-8 md:px-8">

        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-400/5 blur-[120px]" />

        {/* HERO */}
        <section className="relative">

          <p className="font-mono text-xs tracking-[0.3em] text-cyan-400">
            KNOWLEDGE ARCHIVE
          </p>

          <h1 className="mt-3 text-3xl font-black md:text-4xl">
            Completed <span className="text-cyan-400">Lessons</span>
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
            Review everything you've successfully completed throughout
            your CyberNexus Academy journey.
          </p>

        </section>

        {/* STAT CARDS */}
        <section className="relative mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {[
            ["63", "Lessons Completed"],
            ["8", "Modules Completed"],
            ["91%", "Average Score"],
            ["385", "Learning Minutes"],
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

        {/* SEARCH + FILTER */}
        <section className="relative mt-10">

          <div className="flex flex-col gap-4 lg:flex-row">

            {/* SEARCH */}
            <div className="relative flex-1">

              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600">
                ⌕
              </span>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search completed lessons..."
                className="w-full rounded-xl border border-white/10 bg-zinc-950 py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-zinc-700 focus:border-cyan-400/40"
              />

            </div>

            {/* FILTER */}
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-zinc-400 outline-none focus:border-cyan-400/40"
            >

              <option value="ALL">
                All Courses
              </option>

              <option value="Cybersecurity Fundamentals">
                Cybersecurity
              </option>

              <option value="Digital Forensics Specialist">
                Digital Forensics
              </option>

              <option value="Ethical Hacking">
                Ethical Hacking
              </option>

            </select>

          </div>

        </section>

        {/* LESSON LIST */}
        <section className="relative mt-6">

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">

            {/* DESKTOP HEADER */}
            <div className="hidden border-b border-white/10 px-6 py-4 text-[9px] font-semibold tracking-[0.25em] text-zinc-700 md:grid md:grid-cols-[2fr_1.3fr_1fr_0.7fr_0.7fr]">

              <span>LESSON</span>
              <span>COURSE</span>
              <span>COMPLETED</span>
              <span>SCORE</span>
              <span>STATUS</span>

            </div>

            {filteredLessons.length === 0 ? (

              <div className="p-12 text-center">

                <div className="text-4xl">
                  🔎
                </div>

                <h3 className="mt-4 font-bold">
                  No lessons found
                </h3>

                <p className="mt-2 text-sm text-zinc-600">
                  Try a different search term or course filter.
                </p>

              </div>

            ) : (

              filteredLessons.map((lesson) => (

                <div
                  key={`${lesson.title}-${lesson.date}`}
                  className="border-b border-white/10 px-5 py-5 last:border-b-0 md:grid md:grid-cols-[2fr_1.3fr_1fr_0.7fr_0.7fr] md:items-center md:px-6"
                >

                  {/* LESSON */}
                  <div className="flex items-center gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-xl">
                      {lesson.icon}
                    </div>

                    <div>

                      <h3 className="text-sm font-semibold">
                        {lesson.title}
                      </h3>

                      <p className="mt-1 text-xs text-zinc-600">
                        {lesson.module} · {lesson.duration}
                      </p>

                    </div>

                  </div>

                  {/* COURSE */}
                  <div className="mt-4 md:mt-0">

                    <p className="text-xs text-zinc-500">
                      {lesson.course}
                    </p>

                  </div>

                  {/* DATE */}
                  <div className="mt-4 md:mt-0">

                    <p className="text-xs text-zinc-600">
                      {lesson.date}
                    </p>

                  </div>

                  {/* SCORE */}
                  <div className="mt-4 md:mt-0">

                    <span className="font-bold text-cyan-400">
                      {lesson.score}%
                    </span>

                  </div>

                  {/* STATUS */}
                  <div className="mt-4 md:mt-0">

                    <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-[9px] font-semibold tracking-wider text-cyan-400">
                      COMPLETED
                    </span>

                  </div>

                </div>

              ))

            )}

          </div>

        </section>

        {/* ACHIEVEMENT */}
        <section className="relative mt-10 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] p-7">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div className="flex items-center gap-5">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-black text-3xl">
                🏆
              </div>

              <div>

                <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
                  MILESTONE ACHIEVED
                </p>

                <h2 className="mt-2 text-xl font-bold">
                  50+ Lessons Completed
                </h2>

                <p className="mt-1 text-sm text-zinc-500">
                  Your consistency is building real cybersecurity knowledge.
                </p>

              </div>

            </div>

            <Link
              href="/dashboard/certificates"
              className="rounded-xl border border-cyan-400/30 px-6 py-3 text-center text-xs font-bold text-cyan-300 hover:bg-cyan-400/10"
            >
              View Certificates →
            </Link>

          </div>

        </section>

      </div>

    </main>
  );
}
