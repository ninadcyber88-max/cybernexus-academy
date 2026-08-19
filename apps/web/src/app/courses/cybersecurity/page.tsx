"use client";

import { useState } from "react";

const modules = [
  {
    number: "01",
    title: "Cybersecurity Fundamentals",
    description:
      "Cybersecurity concepts, threats, vulnerabilities and security principles.",
    lessons: 8,
  },
  {
    number: "02",
    title: "Networking & Security",
    description:
      "Networking fundamentals, protocols, ports, firewalls and network security.",
    lessons: 10,
  },
  {
    number: "03",
    title: "Ethical Hacking",
    description:
      "Reconnaissance, scanning, enumeration and penetration testing fundamentals.",
    lessons: 12,
  },
  {
    number: "04",
    title: "Digital Forensics",
    description:
      "Digital evidence, acquisition, analysis and forensic investigation.",
    lessons: 10,
  },
  {
    number: "05",
    title: "Incident Response",
    description:
      "Incident detection, investigation, containment and recovery.",
    lessons: 8,
  },
  {
    number: "06",
    title: "SOC & Security Analysis",
    description:
      "SOC operations, logs, alerts, SIEM and security monitoring.",
    lessons: 12,
  },
];

export default function CybersecurityPage() {
  const [activeModule, setActiveModule] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-cyan-400/20 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div>
            <h1 className="text-xl font-bold tracking-[0.2em] text-cyan-400">
              CYBERNEXUS
            </h1>
            <p className="text-xs tracking-[0.35em] text-zinc-500">
              ACADEMY
            </p>
          </div>

          <div className="rounded-full border border-cyan-400/30 px-4 py-2 text-xs tracking-widest text-cyan-300">
            CYBERSECURITY
          </div>

        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.12),transparent_55%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">

          <div className="max-w-4xl">

            <p className="mb-5 font-mono text-sm tracking-[0.4em] text-cyan-400">
              // SECURITY OPERATIONS PROGRAM
            </p>

            <h2 className="text-5xl font-black tracking-tight md:text-7xl">
              Master
              <span className="text-cyan-400"> Cybersecurity</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Build practical cybersecurity knowledge from fundamentals
              to ethical hacking, digital forensics and security analysis.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button
                onClick={() => {
                  document
                    .getElementById("modules")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-full border border-cyan-400 bg-cyan-400/10 px-7 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
              >
                Start Learning →
              </button>

              <div className="rounded-full border border-white/10 px-7 py-3 text-zinc-400">
                60+ Lessons
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/10 bg-zinc-950">

        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">

          {[
            ["06", "Modules"],
            ["60+", "Lessons"],
            ["20+", "Labs"],
            ["∞", "Practice"],
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
      <section id="modules" className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-12">

          <p className="font-mono text-sm tracking-[0.3em] text-cyan-400">
            LEARNING PATH
          </p>

          <h3 className="mt-3 text-4xl font-bold">
            Cybersecurity Modules
          </h3>

          <p className="mt-4 max-w-2xl text-zinc-500">
            Follow the structured learning path and build your cybersecurity
            skills step by step.
          </p>

        </div>

        <div className="grid gap-5 md:grid-cols-2">

          {modules.map((module, index) => {

            const isActive = activeModule === index;

            return (
              <button
                key={module.number}
                onClick={() =>
                  setActiveModule(isActive ? null : index)
                }
                className={`group rounded-2xl border p-6 text-left transition duration-300 ${
                  isActive
                    ? "border-cyan-400/70 bg-cyan-400/10"
                    : "border-white/10 bg-zinc-950 hover:border-cyan-400/40"
                }`}
              >

                <div className="flex items-start gap-5">

                  <div className="font-mono text-2xl font-bold text-cyan-400">
                    {module.number}
                  </div>

                  <div className="flex-1">

                    <div className="flex items-center justify-between">

                      <h4 className="text-xl font-bold">
                        {module.title}
                      </h4>

                      <span className="text-cyan-400">
                        {isActive ? "−" : "+"}
                      </span>

                    </div>

                    <p className="mt-3 text-sm leading-6 text-zinc-500">
                      {module.description}
                    </p>

                    <div className="mt-5 text-xs uppercase tracking-widest text-zinc-600">
                      {module.lessons} Lessons
                    </div>

                    {isActive && (
                      <div className="mt-5 border-t border-white/10 pt-5">

                        <p className="font-mono text-xs text-cyan-400">
                          MODULE ACCESS
                        </p>

                        <p className="mt-2 text-sm text-zinc-400">
                          This module is ready for learning. Continue to
                          access lessons, practical exercises and labs.
                        </p>

                        <div className="mt-4 inline-block rounded-lg bg-cyan-400 px-4 py-2 text-xs font-bold text-black">
                          OPEN MODULE →
                        </div>

                      </div>
                    )}

                  </div>

                </div>

              </button>
            );
          })}

        </div>

      </section>

      {/* CTA */}
      <section className="border-t border-cyan-400/20 bg-zinc-950">

        <div className="mx-auto max-w-5xl px-6 py-20 text-center">

          <p className="font-mono text-sm tracking-[0.3em] text-cyan-400">
            CYBERNEXUS ACADEMY
          </p>

          <h3 className="mt-5 text-4xl font-black md:text-5xl">
            Enter the Cyber World
          </h3>

          <p className="mx-auto mt-5 max-w-xl text-zinc-500">
            Learn cybersecurity through structured concepts,
            practical exercises and hands-on security labs.
          </p>

          <button
            onClick={() => {
              document
                .getElementById("modules")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-8 rounded-full bg-cyan-400 px-8 py-3 font-bold text-black transition hover:scale-105"
          >
            Explore Course →
          </button>

        </div>

      </section>

    </main>
  );
}
