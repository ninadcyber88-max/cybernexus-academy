"use client";

import Link from "next/link";

const lessons = [
  {
    course: "Digital Forensics Specialist",
    module: "Module 04",
    lesson: "Evidence Acquisition",
    description:
      "Understand the fundamentals of acquiring and preserving digital evidence.",
    progress: 48,
    duration: "18 min",
    icon: "🔬",
    href: "/courses/digital-forensics",
  },
  {
    course: "Cybersecurity Fundamentals",
    module: "Module 06",
    lesson: "Network Security",
    description:
      "Learn the core concepts behind protecting networks and communication systems.",
    progress: 72,
    duration: "24 min",
    icon: "🛡️",
    href: "/courses/cybersecurity",
  },
  {
    course: "Ethical Hacking",
    module: "Module 02",
    lesson: "Reconnaissance",
    description:
      "Learn authorized information-gathering and security assessment concepts.",
    progress: 31,
    duration: "21 min",
    icon: "💻",
    href: "/courses/ethical-hacking",
  },
];

const recentLessons = [
  ["Evidence Acquisition", "Digital Forensics", "Today", "48%"],
  ["Network Security", "Cybersecurity", "Yesterday", "72%"],
  ["Reconnaissance", "Ethical Hacking", "2 days ago", "31%"],
  ["SOC Fundamentals", "SOC Analyst", "4 days ago", "12%"],
];

export default function ContinueLearningPage() {
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
            className="flex rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-300"
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
              // LEARNING QUEUE
            </p>

            <h2 className="mt-1 text-lg font-bold">
              Continue Learning
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
            RESUME YOUR JOURNEY
          </p>

          <h1 className="mt-3 text-3xl font-black md:text-4xl">
            Continue <span className="text-cyan-400">Learning</span>
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
            Your active lessons are waiting. Pick a lesson and continue
            building your cybersecurity skills.
          </p>

        </section>

        {/* CURRENT LESSON */}
        <section className="relative mt-8">

          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-6 md:p-8">

            <div className="flex flex-col gap-7 lg:flex-row lg:items-center">

              {/* ICON */}
              <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl border border-cyan-400/20 bg-black text-5xl">
                🔬
              </div>

              {/* DETAILS */}
              <div className="flex-1">

                <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
                  CURRENT LESSON
                </p>

                <h2 className="mt-3 text-2xl font-bold">
                  Evidence Acquisition
                </h2>

                <p className="mt-2 text-sm text-zinc-500">
                  Digital Forensics Specialist · Module 04
                </p>

                <div className="mt-6">

                  <div className="flex justify-between text-xs">

                    <span className="text-zinc-600">
                      Course progress
                    </span>

                    <span className="font-bold text-cyan-400">
                      48%
                    </span>

                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">

                    <div
                      className="h-full rounded-full bg-cyan-400"
                      style={{ width: "48%" }}
                    />

                  </div>

                </div>

              </div>

              {/* BUTTON */}
              <Link
                href="/courses/digital-forensics"
                className="rounded-xl bg-cyan-400 px-7 py-3 text-center text-sm font-bold text-black hover:bg-cyan-300"
              >
                Resume Learning →
              </Link>

            </div>

          </div>

        </section>

        {/* OTHER LESSONS */}
        <section className="relative mt-10">

          <div className="mb-5">

            <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
              ACTIVE LEARNING
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Continue Your Courses
            </h2>

          </div>

          <div className="grid gap-5 lg:grid-cols-3">

            {lessons.map((lesson) => (

              <article
                key={lesson.lesson}
                className="rounded-2xl border border-white/10 bg-zinc-950 p-5 transition hover:-translate-y-1 hover:border-cyan-400/30"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-2xl">
                    {lesson.icon}
                  </div>

                  <span className="text-xs text-zinc-600">
                    {lesson.duration}
                  </span>

                </div>

                <p className="mt-5 text-[9px] font-semibold tracking-[0.25em] text-cyan-400">
                  {lesson.module}
                </p>

                <h3 className="mt-2 text-lg font-bold">
                  {lesson.lesson}
                </h3>

                <p className="mt-2 text-xs text-zinc-600">
                  {lesson.course}
                </p>

                <p className="mt-4 min-h-[48px] text-sm leading-6 text-zinc-500">
                  {lesson.description}
                </p>

                <div className="mt-5">

                  <div className="flex justify-between text-xs">

                    <span className="text-zinc-600">
                      Progress
                    </span>

                    <span className="text-cyan-400">
                      {lesson.progress}%
                    </span>

                  </div>

                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">

                    <div
                      className="h-full rounded-full bg-cyan-400"
                      style={{ width: `${lesson.progress}%` }}
                    />

                  </div>

                </div>

                <Link
                  href={lesson.href}
                  className="mt-5 block rounded-xl border border-white/10 py-3 text-center text-xs font-semibold text-zinc-400 hover:border-cyan-400/30 hover:text-cyan-300"
                >
                  Resume Lesson →
                </Link>

              </article>

            ))}

          </div>

        </section>

        {/* RECENT LESSONS */}
        <section className="relative mt-10">

          <div className="mb-5">

            <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
              ACTIVITY LOG
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Recent Lessons
            </h2>

          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">

            {recentLessons.map(([lesson, course, time, progress], index) => (

              <div
                key={lesson}
                className={`flex flex-col gap-4 p-5 sm:flex-row sm:items-center ${
                  index !== recentLessons.length - 1
                    ? "border-b border-white/10"
                    : ""
                }`}
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/5 text-xs text-cyan-400">
                  ✓
                </div>

                <div className="flex-1">

                  <h3 className="text-sm font-semibold">
                    {lesson}
                  </h3>

                  <p className="mt-1 text-xs text-zinc-600">
                    {course}
                  </p>

                </div>

                <div className="flex items-center gap-5">

                  <span className="text-xs text-zinc-700">
                    {time}
                  </span>

                  <span className="text-xs font-semibold text-cyan-400">
                    {progress}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* DAILY GOAL */}
        <section className="relative mt-10 rounded-2xl border border-white/10 bg-zinc-950 p-6">

          <div className="flex flex-col gap-6 md:flex-row md:items-center">

            <div className="flex-1">

              <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
                DAILY LEARNING GOAL
              </p>

              <h2 className="mt-2 text-xl font-bold">
                30 minutes of learning
              </h2>

              <p className="mt-2 text-sm text-zinc-600">
                Keep your learning streak active by completing today's lesson.
              </p>

            </div>

            <div className="text-center">

              <div className="text-3xl font-black text-cyan-400">
                20 / 30
              </div>

              <p className="mt-1 text-[10px] uppercase tracking-widest text-zinc-600">
                Minutes
              </p>

            </div>

            <div className="w-full md:w-48">

              <div className="h-2 overflow-hidden rounded-full bg-white/10">

                <div
                  className="h-full rounded-full bg-cyan-400"
                  style={{ width: "67%" }}
                />

              </div>

              <p className="mt-2 text-right text-[10px] text-zinc-700">
                67% complete
              </p>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}
