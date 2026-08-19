"use client";

import Link from "next/link";

const certificates = [
  {
    title: "Cybersecurity Fundamentals",
    issuer: "CyberNexus Academy",
    date: "20 Aug 2026",
    certificateId: "CNA-CYB-2026-00124",
    status: "VERIFIED",
    icon: "🛡️",
  },
  {
    title: "Digital Forensics Specialist",
    issuer: "CyberNexus Academy",
    date: "15 Aug 2026",
    certificateId: "CNA-DF-2026-00087",
    status: "VERIFIED",
    icon: "🔬",
  },
];

export default function CertificatesPage() {
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
            className="flex rounded-xl px-4 py-3 text-sm text-zinc-500 hover:bg-white/5 hover:text-white"
          >
            ✓ &nbsp; Completed Lessons
          </Link>

          <Link
            href="/dashboard/certificates"
            className="flex rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-300"
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
              // CREDENTIAL CENTER
            </p>

            <h2 className="mt-1 text-lg font-bold">
              Certificates
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
            DIGITAL CREDENTIALS
          </p>

          <h1 className="mt-3 text-3xl font-black md:text-4xl">
            My <span className="text-cyan-400">Certificates</span>
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
            Your verified CyberNexus Academy credentials and completed
            professional learning programs.
          </p>

        </section>

        {/* STATS */}
        <section className="relative mt-8 grid gap-4 sm:grid-cols-3">

          {[
            ["2", "Certificates Earned"],
            ["100%", "Verification Status"],
            ["2026", "Latest Achievement"],
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

        {/* CERTIFICATE CARDS */}
        <section className="relative mt-10">

          <div className="mb-5">
            <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
              VERIFIED CREDENTIALS
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Earned Certificates
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">

            {certificates.map((certificate) => (

              <article
                key={certificate.certificateId}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 transition hover:border-cyan-400/30"
              >

                {/* CERTIFICATE VISUAL */}
                <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent p-8">

                  <div className="absolute inset-0 opacity-20">
                    <div
                      className="h-full w-full"
                      style={{
                        backgroundImage: `
                          linear-gradient(rgba(0,255,255,0.08) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0,255,255,0.08) 1px, transparent 1px)
                        `,
                        backgroundSize: "24px 24px",
                      }}
                    />
                  </div>

                  <div className="relative rounded-2xl border border-cyan-400/20 bg-black/70 p-7 text-center">

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-3xl">
                      {certificate.icon}
                    </div>

                    <p className="mt-5 font-mono text-[9px] tracking-[0.35em] text-cyan-400">
                      CYBERNEXUS ACADEMY
                    </p>

                    <h3 className="mt-3 text-xl font-black">
                      Certificate of Completion
                    </h3>

                    <p className="mt-3 text-xs text-zinc-600">
                      This certifies that
                    </p>

                    <p className="mt-2 text-lg font-bold text-cyan-300">
                      Ninad Pawar
                    </p>

                    <p className="mt-3 text-xs text-zinc-500">
                      has successfully completed
                    </p>

                    <p className="mt-2 font-bold">
                      {certificate.title}
                    </p>

                    <div className="mx-auto mt-6 h-px w-32 bg-cyan-400/30" />

                    <p className="mt-4 text-[9px] tracking-widest text-zinc-700">
                      CERTIFICATE ID
                    </p>

                    <p className="mt-1 font-mono text-[10px] text-zinc-500">
                      {certificate.certificateId}
                    </p>

                  </div>

                </div>

                {/* DETAILS */}
                <div className="p-6">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-[9px] tracking-[0.25em] text-cyan-400">
                        COURSE
                      </p>

                      <h3 className="mt-2 font-bold">
                        {certificate.title}
                      </h3>
                    </div>

                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-[9px] font-semibold tracking-wider text-cyan-400">
                      {certificate.status}
                    </span>

                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-4">

                    <div className="rounded-xl border border-white/10 p-4">

                      <p className="text-[9px] uppercase tracking-widest text-zinc-700">
                        Issued By
                      </p>

                      <p className="mt-2 text-xs text-zinc-400">
                        {certificate.issuer}
                      </p>

                    </div>

                    <div className="rounded-xl border border-white/10 p-4">

                      <p className="text-[9px] uppercase tracking-widest text-zinc-700">
                        Issue Date
                      </p>

                      <p className="mt-2 text-xs text-zinc-400">
                        {certificate.date}
                      </p>

                    </div>

                  </div>

                  {/* ACTIONS */}
                  <div className="mt-5 grid grid-cols-2 gap-3">

                    <button
                      type="button"
                      className="rounded-xl bg-cyan-400 py-3 text-xs font-bold text-black hover:bg-cyan-300"
                    >
                      View Certificate
                    </button>

                    <button
                      type="button"
                      className="rounded-xl border border-white/10 py-3 text-xs font-semibold text-zinc-400 hover:border-cyan-400/30 hover:text-cyan-300"
                    >
                      Download PDF
                    </button>

                  </div>

                  <Link
                    href={`/verify/${certificate.certificateId}`}
                    className="mt-3 block text-center text-[10px] tracking-wider text-zinc-600 hover:text-cyan-400"
                  >
                    Verify Certificate →
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* VERIFY CTA */}
        <section className="relative mt-10 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] p-7">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
                CREDENTIAL VERIFICATION
              </p>

              <h2 className="mt-2 text-xl font-bold">
                Verify a CyberNexus Certificate
              </h2>

              <p className="mt-2 text-sm text-zinc-500">
                Employers and organizations can verify certificates
                using the unique certificate ID.
              </p>

            </div>

            <Link
              href="/verify"
              className="rounded-xl border border-cyan-400/30 px-6 py-3 text-center text-xs font-bold text-cyan-300 hover:bg-cyan-400/10"
            >
              Verify Certificate →
            </Link>

          </div>

        </section>

      </div>

    </main>
  );
}
