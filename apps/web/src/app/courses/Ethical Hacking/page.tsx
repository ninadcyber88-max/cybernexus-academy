"use client";

import { useState } from "react";

const modules = [
  {
    number: "01",
    title: "Ethical Hacking Fundamentals",
    description:
      "Learn ethical hacking concepts, methodology, scope and authorized security testing.",
    lessons: 8,
  },
  {
    number: "02",
    title: "Reconnaissance",
    description:
      "Understand information gathering and reconnaissance techniques in authorized environments.",
    lessons: 10,
  },
  {
    number: "03",
    title: "Network Scanning",
    description:
      "Learn network discovery, ports, services and security assessment concepts.",
    lessons: 10,
  },
  {
    number: "04",
    title: "Vulnerability Assessment",
    description:
      "Understand vulnerabilities, risk assessment and security findings.",
    lessons: 8,
  },
  {
    number: "05",
    title: "Web Application Security",
    description:
      "Study web security concepts, authentication, authorization and common weaknesses.",
    lessons: 12,
  },
  {
    number: "06",
    title: "API Security",
    description:
      "Learn API security concepts, authentication, authorization and secure testing.",
    lessons: 8,
  },
  {
    number: "07",
    title: "Security Reporting",
    description:
      "Learn how to document findings, evidence, risk and remediation recommendations.",
    lessons: 6,
  },
  {
    number: "08",
    title: "Final Security Assessment",
    description:
      "Apply the concepts through a controlled and authorized security assessment.",
    lessons: 6,
  },
];

export default function EthicalHackingPage() {
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
            ETHICAL HACKING
          </span>

        </div>

      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.12),transparent_55%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">

          <p className="font-mono text-sm tracking-[0.4em] text-cyan-400">
            // AUTHORIZED SECURITY TESTING
          </p>

          <div className="mt-6 flex items-center gap-5">

            <div className="text-6xl">
              💻
            </div>

            <h1 className="text-5xl font-black md:text-7xl">
              Ethical
              <span className="text-cyan-400"> Hacking</span>
            </h1>

          </div>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Learn security testing methodology, reconnaissance,
            vulnerability assessment, web security and professional
            security reporting in controlled environments.
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
              68+ Lessons
            </div>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="border-y border-white/10 bg-zinc-950">

        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">

          {[
            ["08", "Modules"],
            ["68+", "Lessons"],
            ["20+", "Labs"],
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
          SECURITY TESTING PATH
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          Ethical Hacking Modules
        </h2>

        <p className="mt-4 max-w-2xl text-zinc-500">
          Build practical security testing knowledge through a structured
          and authorized learning path.
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
                          AUTHORIZED LAB
                        </p>

                        <p className="mt-2 text-sm text-zinc-400">
                          Practical activities are designed for
                          controlled, authorized learning environments.
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

      {/* WARNING / ETHICS */}
      <section className="border-y border-yellow-400/20 bg-yellow-400/[0.03] px-6 py-16">

        <div className="mx-auto max-w-4xl text-center">

          <div className="text-4xl">
            ⚠️
          </div>

          <h2 className="mt-4 text-2xl font-bold text-yellow-400">
            Learn Responsibly
          </h2>

          <p className="mt-4 leading-7 text-zinc-500">
            All security testing activities must be performed only on
            systems, applications and networks where you have explicit
            authorization.
          </p>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-zinc-950 px-6 py-20 text-center">

        <p className="font-mono text-sm tracking-[0.3em] text-cyan-400">
          CYBERNEXUS ACADEMY
        </p>

        <h2 className="mt-4 text-4xl font-black">
          Start Your Ethical Hacking Journey
        </h2>

        <button
          onClick={() =>
            document
              .getElementById("modules")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-8 rounded-full bg-cyan-400 px-8 py-3 font-bold text-black transition hover:bg-cyan-300"
        >
          Explore Modules →
        </button>

      </section>

    </main>
  );
}
