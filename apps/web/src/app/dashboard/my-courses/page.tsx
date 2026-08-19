"use client";

import Link from "next/link";

const courses = [
  {
    title: "Cybersecurity Fundamentals",
    category: "CYBERSECURITY",
    description:
      "Build a strong foundation in cybersecurity concepts, threats, defense and security operations.",
    progress: 72,
    lessons: "18 / 24",
    level: "BEGINNER",
    icon: "🛡️",
    href: "/courses/cybersecurity",
  },
  {
    title: "Digital Forensics Specialist",
    category: "DIGITAL FORENSICS",
    description:
      "Learn digital evidence, acquisition, preservation, investigation and forensic analysis.",
    progress: 48,
    lessons: "31 / 64",
    level: "INTERMEDIATE",
    icon: "🔬",
    href: "/courses/digital-forensics",
  },
  {
    title: "Ethical Hacking",
    category: "OFFENSIVE SECURITY",
    description:
      "Study authorized security testing, reconnaissance, vulnerability assessment and reporting.",
    progress: 31,
    lessons: "9 / 68",
    level: "INTERMEDIATE",
    icon: "💻",
    href: "/courses/ethical-hacking",
  },
  {
    title: "SOC Analyst",
    category: "DEFENSIVE SECURITY",
    description:
      "Learn security monitoring, SIEM concepts, alert investigation and incident response.",
    progress: 0,
    lessons: "0 / 70",
    level: "INTERMEDIATE",
    icon: "📡",
    href: "/courses/soc-analyst",
  },
  {
    title: "Web Security",
    category: "APPLICATION SECURITY",
    description:
      "Understand web application security, authentication, authorization and API security.",
    progress: 0,
    lessons: "0 / 60",
    level: "INTERMEDIATE",
    icon: "🌐",
    href: "/courses/web-security",
  },
  {
    title: "Cloud Security",
    category: "CLOUD SECURITY",
    description:
      "Explore cloud architecture, IAM, network security, monitoring and defensive controls.",
    progress: 0,
    lessons: "0 / 58",
    level: "INTERMEDIATE",
    icon: "☁️",
    href: "/courses/cloud-security",
  },
];

export default function MyCoursesPage() {
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
            className="flex rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-300"
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
              // LEARNING LIBRARY
            </p>

            <h2 className="mt-1 text-lg font-bold">
              My Courses
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

        {/* HEADER */}
        <section className="relative">

          <p className="font-mono text-xs tracking-[0.3em] text-cyan-400">
            YOUR LEARNING JOURNEY
          </p>

          <h1 className="mt-3 text-3xl font-black md:text-4xl">
            My <span className="text-cyan-400">Courses</span>
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
            Access your enrolled cybersecurity programs and continue
            learning from where you stopped.
          </p>

        </section>

        {/* FILTER */}
        <section className="relative mt-8 flex flex-wrap gap-3">

          <button className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-xs font-semibold text-cyan-300">
            All Courses
          </button>

          <button className="rounded-full border border-white/10 px-5 py-2 text-xs text-zinc-500 hover:border-cyan-400/30 hover:text-cyan-300">
            In Progress
          </button>

          <button className="rounded-full border border-white/10 px-5 py-2 text-xs text-zinc-500 hover:border-cyan-400/30 hover:text-cyan-300">
            Not Started
          </button>

          <button className="rounded-full border border-white/10 px-5 py-2 text-xs text-zinc-500 hover:border-cyan-400/30 hover:text-cyan-300">
            Completed
          </button>

        </section>

        {/* COURSE GRID */}
        <section className="relative mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

          {courses.map((course) => (

            <article
              key={course.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-400/5"
            >

              {/* COURSE HEADER */}
              <div className="relative flex h-40 items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent">

                <div className="absolute inset-0 opacity-20">
                  <div
                    className="h-full w-full"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(0,255,255,0.08) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,255,255,0.08) 1px, transparent 1px)
                      `,
                      backgroundSize: "25px 25px",
                    }}
                  />
                </div>

                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-400/20 bg-black/70 text-4xl shadow-lg shadow-cyan-400/5">
                  {course.icon}
                </div>

                <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[9px] tracking-widest text-zinc-400">
                  {course.level}
                </span>

              </div>

              {/* COURSE BODY */}
              <div className="p-6">

                <p className="text-[9px] font-semibold tracking-[0.25em] text-cyan-400">
                  {course.category}
                </p>

                <h2 className="mt-3 text-xl font-bold">
                  {course.title}
                </h2>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-zinc-500">
                  {course.description}
                </p>

                {/* PROGRESS */}
                <div className="mt-5">

                  <div className="flex items-center justify-between text-xs">

                    <span className="text-zinc-600">
                      {course.lessons} lessons
                    </span>

                    <span className="font-bold text-cyan-400">
                      {course.progress}%
                    </span>

                  </div>

                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">

                    <div
                      className="h-full rounded-full bg-cyan-400 transition-all"
                      style={{
                        width: `${course.progress}%`,
                      }}
                    />

                  </div>

                </div>

                {/* ACTION */}
                <Link
                  href={course.href}
                  className="mt-6 block rounded-xl bg-cyan-400 py-3 text-center text-xs font-bold text-black transition hover:bg-cyan-300"
                >
                  {course.progress > 0
                    ? "Continue Course →"
                    : "Start Course →"}
                </Link>

              </div>

            </article>

          ))}

        </section>

        {/* BOTTOM CTA */}
        <section className="relative mt-10 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] p-7">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
                KEEP LEARNING
              </p>

              <h2 className="mt-2 text-xl font-bold">
                Ready for your next security challenge?
              </h2>

              <p className="mt-2 text-sm text-zinc-500">
                Explore the full CyberNexus Academy learning path.
              </p>

            </div>

            <Link
              href="/"
              className="rounded-xl border border-cyan-400/30 px-6 py-3 text-center text-xs font-bold text-cyan-300 hover:bg-cyan-400/10"
            >
              Explore Academy →
            </Link>

          </div>

        </section>

      </div>

    </main>
  );
}
