"use client";

import { useState } from "react";

const modules = [
  ["01", "Web Security Fundamentals", "HTTP, browsers, servers and web architecture.", 8],
  ["02", "Authentication", "Authentication concepts and secure session management.", 8],
  ["03", "Access Control", "Authorization and access-control security concepts.", 8],
  ["04", "Input Validation", "Understand secure input handling and validation.", 8],
  ["05", "API Security", "API authentication, authorization and security concepts.", 10],
  ["06", "Security Testing", "Structured and authorized application security testing.", 10],
  ["07", "Secure Development", "Security controls and defensive development practices.", 8],
];

export default function WebSecurityPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-black text-white">

      <header className="sticky top-0 z-50 border-b border-cyan-400/20 bg-black/80 px-6 py-5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="font-bold tracking-[0.2em] text-cyan-400">
            CYBERNEXUS
          </a>
          <span className="rounded-full border border-cyan-400/30 px-4 py-2 text-xs text-cyan-300">
            WEB SECURITY
          </span>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.12),transparent_55%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <p className="font-mono text-sm tracking-[0.4em] text-cyan-400">
            // WEB APPLICATION SECURITY
          </p>

          <h1 className="mt-6 text-5xl font-black md:text-7xl">
            Web
            <span className="text-cyan-400"> Security</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Learn modern web application security concepts,
            authentication, authorization, API security and secure development.
          </p>

          <button
            onClick={() =>
              document.getElementById("modules")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="mt-10 rounded-full bg-cyan-400 px-7 py-3 font-bold text-black hover:bg-cyan-300"
          >
            Start Learning →
          </button>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {[
            ["07", "Modules"],
            ["60+", "Lessons"],
            ["15+", "Labs"],
            ["01", "Certificate"],
          ].map(([value, label]) => (
            <div key={label} className="border-r border-white/10 px-6 py-8 text-center">
              <div className="text-3xl font-bold text-cyan-400">{value}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-zinc-500">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="modules" className="mx-auto max-w-7xl px-6 py-20">
        <p className="font-mono text-sm tracking-[0.3em] text-cyan-400">
          WEB SECURITY PATH
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          Application Security Modules
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {modules.map(([number, title, description, lessons], index) => {
            const isActive = active === index;

            return (
              <button
                key={number}
                onClick={() => setActive(isActive ? null : index)}
                className={`rounded-2xl border p-6 text-left transition ${
                  isActive
                    ? "border-cyan-400/70 bg-cyan-400/10"
                    : "border-white/10 bg-zinc-950 hover:border-cyan-400/40"
                }`}
              >
                <div className="flex gap-5">
                  <div className="font-mono text-2xl font-bold text-cyan-400">
                    {number}
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between gap-4">
                      <h3 className="text-xl font-bold">{title}</h3>
                      <span className="text-cyan-400">
                        {isActive ? "−" : "+"}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-zinc-500">
                      {description}
                    </p>

                    <p className="mt-5 text-xs uppercase tracking-widest text-zinc-600">
                      {lessons} Lessons
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
}
