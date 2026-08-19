"use client";

import Link from "next/link";
import { useState } from "react";

const courses = [
  {
    title: "Cybersecurity Fundamentals",
    category: "CYBERSECURITY",
    progress: 72,
    lessons: "18 / 24",
    href: "/courses/cybersecurity",
    icon: "🛡️",
  },
  {
    title: "Digital Forensics Specialist",
    category: "FORENSICS",
    progress: 48,
    lessons: "31 / 64",
    href: "/courses/digital-forensics",
    icon: "🔬",
  },
  {
    title: "Ethical Hacking",
    category: "SECURITY TESTING",
    progress: 31,
    lessons: "9 / 68",
    href: "/courses/ethical-hacking",
    icon: "💻",
  },
];

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">

      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <button
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/70 md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-cyan-400/10 bg-zinc-950 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >

        {/* LOGO */}
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

        {/* STUDENT */}
        <div className="border-b border-white/10 px-6 py-5">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 text-lg">
              N
            </div>

            <div>
              <p className="text-sm font-semibold">
                Student
              </p>

              <p className="text-xs text-zinc-600">
                Cyber Learner
              </p>
            </div>

          </div>

        </div>

        {/* NAVIGATION */}
        <nav className="flex-1 space-y-2 px-4 py-6">

          <p className="px-3 pb-2 text-[10px] font-semibold tracking-[0.3em] text-zinc-700">
            LEARNING
          </p>

          <Link
            href="/dashboard"
            className="flex items-center gap-3 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-300"
          >
            <span>⌂</span>
            Dashboard
          </Link>

          <Link
            href="/dashboard/my-courses"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-zinc-500 transition hover:bg-white/5 hover:text-white"
          >
            <span>▣</span>
            My Courses
          </Link>

          <Link
            href="/dashboard/continue-learning"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-zinc-500 transition hover:bg-white/5 hover:text-white"
          >
            <span>▶</span>
            Continue Learning
          </Link>

          <Link
            href="/dashboard/progress"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-zinc-500 transition hover:bg-white/5 hover:text-white"
          >
            <span>◔</span>
            Progress
          </Link>

          <p className="px-3 pb-2 pt-7 text-[10px] font-semibold tracking-[0.3em] text-zinc-700">
            ACHIEVEMENTS
          </p>

          <Link
            href="/dashboard/completed-lessons"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-zinc-500 transition hover:bg-white/5 hover:text-white"
          >
            <span>✓</span>
            Completed Lessons
          </Link>

          <Link
            href="/dashboard/certificates"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-zinc-500 transition hover:bg-white/5 hover:text-white"
          >
            <span>◇</span>
            Certificates
          </Link>

          <p className="px-3 pb-2 pt-7 text-[10px] font-semibold tracking-[0.3em] text-zinc-700">
            ACCOUNT
          </p>

          <Link
            href="/dashboard/profile"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-zinc-500 transition hover:bg-white/5 hover:text-white"
          >
            <span>◎</span>
            Profile
          </Link>

        </nav>

        {/* SIDEBAR FOOTER */}
        <div className="border-t border-white/10 p-4">

          <Link
            href="/"
            className="flex items-center justify-center rounded-xl border border-white/10 px-4 py-3 text-xs text-zinc-500 hover:border-cyan-400/30 hover:text-cyan-300"
          >
            ← Back to Academy
          </Link>

        </div>

      </aside>

      {/* MAIN */}
      <div className="min-h-screen md:pl-72">

        {/* TOPBAR */}
        <header className="sticky top-0 z-30 border-b border-white/10 bg-black/80 backdrop-blur-xl">

          <div className="flex h-20 items-center justify-between px-5 md:px-8">

            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg border border-white/10 px-3 py-2 text-zinc-400 md:hidden"
            >
              ☰
            </button>

            <div className="hidden md:block">

              <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-500">
                // STUDENT COMMAND CENTER
              </p>

              <h2 className="mt-1 text-lg font-bold">
                Learning Dashboard
              </h2>

            </div>

            <div className="flex items-center gap-3">

              <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-500 hover:border-cyan-400/30 hover:text-cyan-400">
                ♢

                <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />
              </button>

              <Link
                href="/dashboard/profile"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 font-bold text-cyan-300"
              >
                N
              </Link>

            </div>

          </div>

        </header>

        {/* CONTENT */}
        <div className="relative overflow-hidden px-5 py-8 md:px-8">

          {/* BACKGROUND GLOW */}
          <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-400/5 blur-[120px]" />

          {/* WELCOME */}
          <section className="relative">

            <p className="font-mono text-xs tracking-[0.3em] text-cyan-400">
              WELCOME BACK, STUDENT
            </p>

            <h1 className="mt-3 text-3xl font-black md:text-4xl">
              Keep building your
              <span className="text-cyan-400"> cyber skills.</span>
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
              Continue your courses, track your progress and complete
              your next cybersecurity lesson.
            </p>

          </section>

          {/* STATS */}
          <section className="relative mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              ["03", "Active Courses"],
              ["58", "Lessons Done"],
              ["67%", "Average Progress"],
              ["02", "Certificates"],
            ].map(([value, label]) => (

              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-zinc-950 p-5"
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

          {/* CONTINUE */}
          <section className="relative mt-10">

            <div className="mb-5 flex items-center justify-between">

              <div>

                <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
                  CONTINUE
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  Pick up where you left off
                </h2>

              </div>

              <Link
                href="/dashboard/continue-learning"
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300"
              >
                View all →
              </Link>

            </div>

            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] p-6">

              <div className="flex flex-col gap-6 md:flex-row md:items-center">

                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-black text-3xl">
                  🔬
                </div>

                <div className="flex-1">

                  <p className="text-[10px] font-semibold tracking-[0.3em] text-cyan-400">
                    DIGITAL FORENSICS
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    Evidence Acquisition
                  </h3>

                  <p className="mt-2 text-sm text-zinc-500">
                    Module 04 · Lesson 05
                  </p>

                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">

                    <div
                      className="h-full rounded-full bg-cyan-400"
                      style={{ width: "48%" }}
                    />

                  </div>

                  <p className="mt-2 text-xs text-zinc-600">
                    48% complete
                  </p>

                </div>

                <Link
                  href="/courses/digital-forensics"
                  className="rounded-xl bg-cyan-400 px-6 py-3 text-center text-sm font-bold text-black hover:bg-cyan-300"
                >
                  Continue →
                </Link>

              </div>

            </div>

          </section>

          {/* COURSES */}
          <section className="relative mt-10">

            <div className="mb-5 flex items-center justify-between">

              <div>

                <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
                  MY LEARNING
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  My Courses
                </h2>

              </div>

              <Link
                href="/dashboard/my-courses"
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300"
              >
                View all →
              </Link>

            </div>

            <div className="grid gap-5 lg:grid-cols-3">

              {courses.map((course) => (

                <div
                  key={course.title}
                  className="group rounded-2xl border border-white/10 bg-zinc-950 p-5 transition hover:-translate-y-1 hover:border-cyan-400/30"
                >

                  <div className="flex items-start justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-2xl">
                      {course.icon}
                    </div>

                    <span className="rounded-full border border-white/10 px-3 py-1 text-[9px] tracking-widest text-zinc-600">
                      {course.category}
                    </span>

                  </div>

                  <h3 className="mt-5 font-bold">
                    {course.title}
                  </h3>

                  <div className="mt-5 flex items-center justify-between text-xs">

                    <span className="text-zinc-600">
                      {course.lessons} lessons
                    </span>

                    <span className="font-semibold text-cyan-400">
                      {course.progress}%
                    </span>

                  </div>

                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">

                    <div
                      className="h-full rounded-full bg-cyan-400"
                      style={{
                        width: `${course.progress}%`,
                      }}
                    />

                  </div>

                  <Link
                    href={course.href}
                    className="mt-5 block rounded-xl border border-white/10 py-3 text-center text-xs font-semibold text-zinc-400 transition hover:border-cyan-400/30 hover:text-cyan-300"
                  >
                    Open Course →
                  </Link>

                </div>

              ))}

            </div>

          </section>

          {/* ACTIVITY */}
          <section className="relative mt-10 grid gap-5 lg:grid-cols-2">

            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">

              <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
                RECENT ACTIVITY
              </p>

              <h2 className="mt-2 text-xl font-bold">
                Learning Activity
              </h2>

              <div className="mt-6 space-y-5">

                {[
                  ["Digital Forensics", "Evidence Acquisition", "Today"],
                  ["Cybersecurity", "Network Security", "Yesterday"],
                  ["Ethical Hacking", "Reconnaissance", "2 days ago"],
                ].map(([course, lesson, time]) => (

                  <div
                    key={lesson}
                    className="flex items-center gap-4"
                  >

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/5 text-xs text-cyan-400">
                      ✓
                    </div>

                    <div className="flex-1">

                      <p className="text-sm font-semibold">
                        {lesson}
                      </p>

                      <p className="text-xs text-zinc-600">
                        {course}
                      </p>

                    </div>

                    <span className="text-[10px] text-zinc-700">
                      {time}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* CERTIFICATE */}
            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] p-6">

              <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
                ACHIEVEMENT
              </p>

              <h2 className="mt-2 text-xl font-bold">
                Your Certificates
              </h2>

              <div className="mt-6 rounded-xl border border-white/10 bg-black p-5">

                <div className="flex items-center gap-4">

                  <div className="text-4xl">
                    🏆
                  </div>

                  <div>

                    <p className="font-semibold">
                      Digital Forensics Specialist
                    </p>

                    <p className="mt-1 text-xs text-zinc-600">
                      Certificate earned
                    </p>

                  </div>

                </div>

                <Link
                  href="/dashboard/certificates"
                  className="mt-5 block rounded-xl bg-cyan-400 py-3 text-center text-xs font-bold text-black hover:bg-cyan-300"
                >
                  View Certificates →
                </Link>

              </div>

            </div>

          </section>

        </div>

      </div>

    </main>
  );
}
