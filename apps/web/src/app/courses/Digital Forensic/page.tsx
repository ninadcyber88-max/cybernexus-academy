"use client";

import { useState } from "react";

const modules = [
  {
    number: "01",
    title: "Digital Forensics Fundamentals",
    description:
      "Understand digital forensics, investigation methodology and forensic principles.",
    lessons: 8,
  },
  {
    number: "02",
    title: "Digital Evidence",
    description:
      "Understand digital evidence types, identification, preservation and documentation.",
    lessons: 8,
  },
  {
    number: "03",
    title: "Chain of Custody",
    description:
      "Learn evidence handling, documentation and maintaining evidence integrity.",
    lessons: 6,
  },
  {
    number: "04",
    title: "Evidence Acquisition",
    description:
      "Learn forensic acquisition concepts, imaging and evidence verification.",
    lessons: 8,
  },
  {
    number: "05",
    title: "Disk & File-System Forensics",
    description:
      "Study file systems, artifacts, metadata and forensic examination.",
    lessons: 10,
  },
  {
    number: "06",
    title: "Windows Forensics",
    description:
      "Analyze Windows artifacts, logs, user activity and system evidence.",
    lessons: 10,
  },
  {
    number: "07",
    title: "Mobile Forensics",
    description:
      "Understand mobile evidence, device artifacts and forensic workflows.",
    lessons: 8,
  },
  {
    number: "08",
    title: "Forensic Reporting",
    description:
      "Create professional forensic findings and investigation reports.",
    lessons: 6,
  },
];

export default function DigitalForensicsPage() {
  const [activeModule, setActiveModule] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-cyan-400/20 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a
            href="/"
            className="font-bold tracking-[0.2em] text-cyan-400"
          >
            CYBERNEXUS
          </a>

          <span className="rounded-full border border-cyan-400/30 px-4 py-2 text-xs tracking-widest text-cyan-300">
            DIGITAL FORENSICS
          </span>

        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.12),transparent_55%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">

          <p className="font-mono text-sm tracking-[0.4em] text-cyan-400">
            // DIGITAL FORENSICS PROGRAM
          </p>

          <div className="mt-6 flex items-center gap-5">
            <div className="text-6xl">
              🔬
            </div>

            <h1 className="text-5xl font-black md:text-7xl">
              Digital
              <span className="text-cyan-400"> Forensics</span>
            </h1>
          </div>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Learn digital evidence handling, acquisition, preservation,
            examination, analysis and professional forensic reporting.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button
              onClick={() =>
                document
                  .getElementById("modules")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full bg-cyan-400 px-7 py-3 font-bold text-black transition hover:bg-cyan-300"
            >
              Start Learning →
            </button>

            <div className="rounded-full border border-white/10 px-7 py-3 text-zinc-400">
              64+ Lessons
            </div>

          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/10 bg-zinc-950">

        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">

          {[
            ["08", "Modules"],
            ["64+", "Lessons"],
            ["15+", "Labs"],
            ["01", "Certificate"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="border-r border-white/10 px-6 py-8 text-center"
            >
              <div className="text-3xl font-bold text-cyan-400">
                {value}
              </div>

              <div className="mt-1 text-xs uppercase tracking-widest text-zinc-500">
                {label}
              </div>
            </div>
          ))}

        </div>

      </section>

      {/* MODULES */}
      <section
        id="modules"
        className="mx-auto max-w-7xl px-6 py-20"
      >

        <p className="font-mono text-sm tracking-[0.3em] text-cyan-400">
          FORENSIC LEARNING PATH
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          Digital Forensics Modules
        </h2>

        <p className="mt-4 max-w-2xl text-zinc-500">
          Follow a structured forensic investigation learning path.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">

          {modules.map((module, index) => {

            const active = activeModule === index;

            return (
              <button
                key={module.number}
                onClick={() =>
                  setActiveModule(active ? null : index)
                }
                className={`rounded-2xl border p-6 text-left transition ${
                  active
                    ? "border-cyan-400/70 bg-cyan-400/10"
                    : "border-white/10 bg-zinc-950 hover:border-cyan-400/40"
                }`}
              >

                <div className="flex gap-5">

                  <div className="font-mono text-2xl font-bold text-cyan-400">
                    {module.number}
                  </div>

                  <div className="flex-1">

                    <div className="flex justify-between gap-4">

                      <h3 className="text-xl font-bold">
                        {module.title}
                      </h3>

                      <span className="text-cyan-400">
                        {active ? "−" : "+"}
                      </span>

                    </div>

                    <p className="mt-3 text-sm leading-6 text-zinc-500">
                      {module.description}
                    </p>

                    <p className="mt-5 text-xs uppercase tracking-widest text-zinc-600">
                      {module.lessons} Lessons
                    </p>

                    {active && (
                      <div className="mt-5 border-t border-white/10 pt-5">

                        <p className="font-mono text-xs text-cyan-400">
                          FORENSIC MODULE
                        </p>

                        <p className="mt-2 text-sm text-zinc-400">
                          Complete the lessons and practical activities
                          to progress through this forensic module.
                        </p>

                        <span className="mt-4 inline-block rounded-lg bg-cyan-400 px-4 py-2 text-xs font-bold text-black">
                          OPEN MODULE →
                        </span>

                      </div>
                    )}

                  </div>
                </div>

              </button>
            );
          })}

        </div>
      </section>

      {/* CERTIFICATE */}
      <section className="border-t border-cyan-400/20 bg-zinc-950 px-6 py-20">

        <div className="mx-auto max-w-4xl text-center">

          <div className="text-5xl">
            🏆
          </div>

          <h2 className="mt-5 text-4xl font-black">
            Become a Digital Forensics Specialist
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-500">
            Complete the learning path, practical exercises and final
            assessment to become eligible for the academy certificate.
          </p>

          <button className="mt-8 rounded-full bg-cyan-400 px-8 py-3 font-bold text-black hover:bg-cyan-300">
            Start Forensics Journey →
          </button>

        </div>

      </section>

    </main>
  );
}
