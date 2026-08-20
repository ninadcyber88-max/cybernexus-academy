"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: "⌂" },
  { name: "My Courses", href: "/dashboard/my-courses", icon: "▣" },
  { name: "Continue Learning", href: "/dashboard/continue-learning", icon: "▶" },
  { name: "Progress", href: "/dashboard/progress", icon: "◈" },
  { name: "Completed Lessons", href: "/dashboard/completed-lessons", icon: "✓" },
  { name: "Certificates", href: "/dashboard/certificates", icon: "◇" },
  { name: "Profile", href: "/dashboard/profile", icon: "●" },
];

export default function Dashboard() {
  const pathname = usePathname();

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="flex min-h-screen">

        {/* SIDEBAR */}
        <aside className="hidden w-72 border-r border-cyan-500/20 bg-black/80 p-6 md:block">

          {/* Logo */}
          <div className="mb-10">
            <h1 className="text-2xl font-bold tracking-wider text-cyan-400">
              CYBERNEXUS
            </h1>

            <p className="mt-1 text-xs tracking-[0.3em] text-gray-500">
              ACADEMY
            </p>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/dashboard" &&
                  pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-4 rounded-xl px-4 py-3 transition ${
                    active
                      ? "border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.12)]"
                      : "text-gray-400 hover:bg-white/5 hover:text-cyan-300"
                  }`}
                >
                  <span className="w-6 text-center text-lg">
                    {item.icon}
                  </span>

                  <span className="text-sm font-medium">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Bottom */}
          <div className="mt-10 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4">
            <p className="text-xs text-gray-500">
              STUDENT ACCOUNT
            </p>

            <p className="mt-2 font-semibold text-cyan-300">
              Cyber Student
            </p>

            <button
              className="mt-4 w-full rounded-lg border border-red-500/30 px-3 py-2 text-sm text-red-400 transition hover:bg-red-500/10"
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              Logout
            </button>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <section className="flex-1 p-6 md:p-10">

          {/* Header */}
          <header className="mb-10 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-500">
                Student Dashboard
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Welcome back 👋
              </h2>

              <p className="mt-2 text-gray-400">
                Continue your cybersecurity learning journey.
              </p>
            </div>

            <Link
              href="/dashboard/profile"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
            >
              C
            </Link>
          </header>

          {/* Stats */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <StatCard
              title="My Courses"
              value="3"
              description="Enrolled courses"
            />

            <StatCard
              title="Progress"
              value="42%"
              description="Overall progress"
            />

            <StatCard
              title="Lessons"
              value="18"
              description="Completed lessons"
            />

            <StatCard
              title="Certificates"
              value="1"
              description="Earned certificates"
            />

          </div>

          {/* Continue Learning */}
          <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-white/[0.03] p-6">

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-500">
                  Continue Learning
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Digital Forensics
                </h3>
              </div>

              <Link
                href="/dashboard/continue-learning"
                className="rounded-lg border border-cyan-400/30 px-4 py-2 text-sm text-cyan-300 hover:bg-cyan-400/10"
              >
                Continue →
              </Link>
            </div>

            <div className="mt-6">
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-gray-400">
                  Course Progress
                </span>

                <span className="text-cyan-300">
                  42%
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-gray-800">
                <div className="h-full w-[42%] rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]" />
              </div>
            </div>

          </div>

          {/* Courses */}
          <div className="mt-10">

            <div className="mb-5">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-500">
                Learning Library
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                My Courses
              </h3>
            </div>

            <div className="grid gap-5 md:grid-cols-3">

              <CourseCard
                title="Cybersecurity"
                progress="42%"
                href="/courses/cybersecurity"
              />

              <CourseCard
                title="Digital Forensics"
                progress="25%"
                href="/courses/digital-forensics"
              />

              <CourseCard
                title="Ethical Hacking"
                progress="10%"
                href="/courses/ethical-hacking"
              />

            </div>

          </div>

        </section>
      </div>
    </main>
  );
}


/* STAT CARD */

function StatCard({
  title,
  value,
  description,
}: {
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-white/[0.03] p-5 transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.04]">
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <p className="mt-3 text-3xl font-bold text-cyan-300">
        {value}
      </p>

      <p className="mt-1 text-xs text-gray-500">
        {description}
      </p>
    </div>
  );
}


/* COURSE CARD */

function CourseCard({
  title,
  progress,
  href,
}: {
  title: string;
  progress: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-cyan-500/20 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/[0.04]"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
        ◈
      </div>

      <h4 className="mt-5 text-xl font-semibold">
        {title}
      </h4>

      <p className="mt-2 text-sm text-gray-500">
        CyberNexus Academy course
      </p>

      <div className="mt-5">
        <div className="mb-2 flex justify-between text-xs">
          <span className="text-gray-500">
            Progress
          </span>

          <span className="text-cyan-300">
            {progress}
          </span>
        </div>

        <div className="h-1.5 rounded-full bg-gray-800">
          <div
            className="h-full rounded-full bg-cyan-400"
            style={{ width: progress }}
          />
        </div>
      </div>

      <p className="mt-5 text-sm text-cyan-300 group-hover:text-cyan-200">
        Open Course →
      </p>
    </Link>
  );
}
