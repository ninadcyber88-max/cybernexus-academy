"use client";

import Link from "next/link";

const courseProgress = [
  {
    title: "Cybersecurity Fundamentals",
    category: "CYBERSECURITY",
    progress: 72,
    completed: 18,
    total: 24,
    icon: "🛡️",
  },
  {
    title: "Digital Forensics Specialist",
    category: "DIGITAL FORENSICS",
    progress: 48,
    completed: 31,
    total: 64,
    icon: "🔬",
  },
  {
    title: "Ethical Hacking",
    category: "OFFENSIVE SECURITY",
    progress: 31,
    completed: 9,
    total: 68,
    icon: "💻",
  },
  {
    title: "SOC Analyst",
    category: "DEFENSIVE SECURITY",
    progress: 12,
    completed: 5,
    total: 42,
    icon: "📡",
  },
];

const weeklyActivity = [
  { day: "MON", minutes: 42 },
  { day: "TUE", minutes: 65 },
  { day: "WED", minutes: 28 },
  { day: "THU", minutes: 75 },
  { day: "FRI", minutes: 52 },
  { day: "SAT", minutes: 88 },
  { day: "SUN", minutes: 35 },
];

const achievements = [
  ["🔥", "7 Day Streak", "Learned for 7 consecutive days"],
  ["⚡", "Fast Learner", "Completed 10 lessons"],
  ["🛡️", "Security Starter", "Started your cybersecurity journey"],
];

export default function ProgressPage() {
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
            className="flex rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-300"
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
              // PERFORMANCE ANALYTICS
            </p>

            <h2 className="mt-1 text-lg font-bold">
              Learning Progress
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
            YOUR PERFORMANCE
          </p>

          <h1 className="mt-3 text-3xl font-black md:text-4xl">
            Learning <span className="text-cyan-400">Progress</span>
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
            Track your cybersecurity learning journey, course progress,
            activity and achievements.
          </p>

        </section>

        {/* STAT CARDS */}
        <section className="relative mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {[
            ["67%", "Overall Progress"],
            ["63", "Lessons Completed"],
            ["385", "Learning Minutes"],
            ["🔥 7", "Day Streak"],
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

        {/* OVERALL PROGRESS */}
        <section className="relative mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] p-6 md:p-8">

          <div className="flex flex-col gap-8 md:flex-row md:items-center">

            <div className="flex h-40 w-40 shrink-0 items-center justify-center rounded-full border-[10px] border-cyan-400/20">

              <div className="text-center">

                <p className="text-4xl font-black text-cyan-400">
                  67%
                </p>

                <p className="text-[9px] uppercase tracking-widest text-zinc-600">
                  Complete
                </p>

              </div>

            </div>

            <div className="flex-1">

              <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
                OVERALL LEARNING
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                You're making strong progress.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">
                Keep your learning streak active and complete your
                remaining lessons to reach the next milestone.
              </p>

              <div className="mt-6">

                <div className="flex justify-between text-xs">

                  <span className="text-zinc-600">
                    Overall completion
                  </span>

                  <span className="text-cyan-400">
                    67%
                  </span>

                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">

                  <div
                    className="h-full rounded-full bg-cyan-400"
                    style={{ width: "67%" }}
                  />

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* COURSE PROGRESS */}
        <section className="relative mt-10">

          <div className="mb-5">

            <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
              COURSE ANALYTICS
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Course Progress
            </h2>

          </div>

          <div className="space-y-4">

            {courseProgress.map((course) => (

              <div
                key={course.title}
                className="rounded-2xl border border-white/10 bg-zinc-950 p-5"
              >

                <div className="flex flex-col gap-5 md:flex-row md:items-center">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-2xl">
                    {course.icon}
                  </div>

                  <div className="flex-1">

                    <p className="text-[9px] tracking-[0.25em] text-cyan-400">
                      {course.category}
                    </p>

                    <h3 className="mt-1 font-bold">
                      {course.title}
                    </h3>

                    <p className="mt-1 text-xs text-zinc-600">
                      {course.completed} of {course.total} lessons completed
                    </p>

                  </div>

                  <div className="w-full md:w-64">

                    <div className="flex justify-between text-xs">

                      <span className="text-zinc-600">
                        Progress
                      </span>

                      <span className="font-bold text-cyan-400">
                        {course.progress}%
                      </span>

                    </div>

                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">

                      <div
                        className="h-full rounded-full bg-cyan-400"
                        style={{
                          width: `${course.progress}%`,
                        }}
                      />

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* WEEKLY ACTIVITY */}
        <section className="relative mt-10">

          <div className="mb-5">

            <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
              ACTIVITY MONITOR
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Weekly Learning Activity
            </h2>

          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">

            <div className="flex h-64 items-end justify-between gap-3">

              {weeklyActivity.map((item) => {

                const height = Math.max(
                  15,
                  (item.minutes / 90) * 100
                );

                return (
                  <div
                    key={item.day}
                    className="flex h-full flex-1 flex-col items-center justify-end gap-3"
                  >

                    <span className="text-[10px] text-zinc-600">
                      {item.minutes}m
                    </span>

                    <div className="flex h-48 w-full items-end justify-center">

                      <div
                        className="w-full max-w-10 rounded-t-lg bg-cyan-400/70 transition hover:bg-cyan-300"
                        style={{
                          height: `${height}%`,
                        }}
                      />

                    </div>

                    <span className="text-[9px] font-semibold tracking-widest text-zinc-600">
                      {item.day}
                    </span>

                  </div>
                );
              })}

            </div>

          </div>

        </section>

        {/* BOTTOM GRID */}
        <section className="relative mt-10 grid gap-5 lg:grid-cols-2">

          {/* STREAK */}
          <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">

            <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
              LEARNING STREAK
            </p>

            <div className="mt-5 flex items-center gap-6">

              <div className="text-6xl">
                🔥
              </div>

              <div>

                <p className="text-4xl font-black">
                  7
                </p>

                <p className="text-xs uppercase tracking-widest text-zinc-600">
                  consecutive days
                </p>

              </div>

            </div>

            <div className="mt-6 grid grid-cols-7 gap-2">

              {[
                "M",
                "T",
                "W",
                "T",
                "F",
                "S",
                "S",
              ].map((day, index) => (

                <div key={`${day}-${index}`} className="text-center">

                  <div
                    className={`mx-auto flex h-8 w-8 items-center justify-center rounded-lg text-xs ${
                      index < 7
                        ? "bg-cyan-400 text-black"
                        : "bg-white/5 text-zinc-700"
                    }`}
                  >
                    ✓
                  </div>

                  <p className="mt-2 text-[9px] text-zinc-700">
                    {day}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* ACHIEVEMENTS */}
          <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">

            <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
              ACHIEVEMENTS
            </p>

            <div className="mt-5 space-y-4">

              {achievements.map(([icon, title, description]) => (

                <div
                  key={title}
                  className="flex items-center gap-4 rounded-xl border border-white/10 p-4"
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">
                    {icon}
                  </div>

                  <div>

                    <h3 className="text-sm font-bold">
                      {title}
                    </h3>

                    <p className="mt-1 text-xs text-zinc-600">
                      {description}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="relative mt-10 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] p-7">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
                NEXT MILESTONE
              </p>

              <h2 className="mt-2 text-xl font-bold">
                Reach 75% overall progress
              </h2>

              <p className="mt-2 text-sm text-zinc-500">
                You're only 8% away from your next milestone.
              </p>

            </div>

            <Link
              href="/dashboard/continue-learning"
              className="rounded-xl bg-cyan-400 px-6 py-3 text-center text-xs font-bold text-black hover:bg-cyan-300"
            >
              Continue Learning →
            </Link>

          </div>

        </section>

      </div>

    </main>
  );
}
