"use client";

import Link from "next/link";
import { useState } from "react";

/* ============================================================
   CYBER MATRIX CONFIG
============================================================ */

const MATRIX_CHARS = [
  "0",
  "1",
  "A",
  "B",
  "C",
  "D",
  "X",
  "Y",
  "Z",
  "#",
  "$",
  "%",
  "&",
  "*",
  "+",
  "=",
  "<",
  ">",
  "/",
  "\\",
  "{",
  "}",
  "[",
  "]",
  ":",
  ";",
];

const MATRIX_COLUMNS = Array.from(
  { length: 30 },
  (_, index) => index
);

/* ============================================================
   MATRIX BACKGROUND
============================================================ */

function CyberMatrix({
  enabled,
}: {
  enabled: boolean;
}) {
  if (!enabled) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* ================================================
          DARK BASE
      ================================================= */}

      <div className="absolute inset-0 bg-black/55" />

      {/* ================================================
          MATRIX COLUMNS
      ================================================= */}

      <div className="absolute inset-0 flex justify-between overflow-hidden px-2 sm:px-4">
        {MATRIX_COLUMNS.map((column) => {
          const duration = 5 + (column % 6);
          const delay = -(column % 8);

          return (
            <div
              key={column}
              className="
                matrix-column
                flex
                flex-col
                gap-2
                font-mono
                text-[17px]
                font-bold
                leading-6
                text-cyan-400
                sm:text-[19px]
                sm:leading-7
                lg:text-[22px]
                lg:leading-8
              "
              style={{
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
              }}
            >
              {Array.from(
                { length: 34 },
                (_, row) => {
                  const index =
                    (column * 11 + row * 7) %
                    MATRIX_CHARS.length;

                  const character =
                    MATRIX_CHARS[index];

                  /*
                   * Every column has a bright leading
                   * character to create the classic
                   * cyber matrix trail.
                   */

                  const isLead =
                    row === 0 ||
                    row === column % 11;

                  return (
                    <span
                      key={row}
                      className={
                        isLead
                          ? "text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.95)]"
                          : "text-cyan-400"
                      }
                    >
                      {character}
                    </span>
                  );
                }
              )}
            </div>
          );
        })}
      </div>

      {/* ================================================
          CYAN ATMOSPHERIC GLOW
      ================================================= */}

      <div className="absolute left-1/2 top-1/3 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute bottom-0 left-1/4 h-[300px] w-[500px] rounded-full bg-blue-500/10 blur-[130px]" />

      {/* ================================================
          SCANLINES
      ================================================= */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.035]
          bg-[linear-gradient(to_bottom,transparent_50%,rgba(34,211,238,0.8)_50%)]
          bg-[length:100%_6px]
        "
      />

      {/* ================================================
          RADIAL VIGNETTE
      ================================================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.88)_100%)]" />
    </div>
  );
}

/* ============================================================
   CYBER GRID
============================================================ */

function CyberGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(34,211,238,0.14) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(34,211,238,0.14) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "45px 45px",
        }}
      />

      {/* Center glow */}
      <div className="absolute left-1/2 top-1/3 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

      {/* Bottom glow */}
      <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-[130px]" />
    </div>
  );
}

/* ============================================================
   MATRIX TOGGLE
============================================================ */

function MatrixToggle({
  enabled,
  onToggle,
}: {
  enabled: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="fixed right-4 top-4 z-50">
      <div className="flex items-center gap-3 rounded-2xl border border-cyan-400/25 bg-black/75 px-4 py-3 shadow-[0_0_30px_rgba(0,220,255,0.15)] backdrop-blur-xl">
        {/* Label */}
        <div className="hidden sm:block">
          <p className="text-[9px] uppercase tracking-[0.3em] text-cyan-400">
            CYBER UI
          </p>

          <p className="mt-1 text-xs font-semibold text-white">
            Matrix
          </p>
        </div>

        {/* Toggle */}
        <button
          type="button"
          onClick={onToggle}
          aria-label={
            enabled
              ? "Hide Matrix Effect"
              : "Show Matrix Effect"
          }
          aria-pressed={enabled}
          className={`relative h-8 w-[58px] rounded-full border transition-all duration-300 ${
            enabled
              ? "border-cyan-300 bg-cyan-500/20 shadow-[0_0_18px_rgba(34,211,238,0.45)]"
              : "border-gray-600 bg-gray-900"
          }`}
        >
          {/* Knob */}
          <span
            className={`absolute top-1 h-6 w-6 rounded-full transition-all duration-300 ${
              enabled
                ? "left-[30px] bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.9)]"
                : "left-1 bg-gray-500"
            }`}
          />

          {/* ON */}
          <span
            className={`absolute left-2 top-[9px] text-[8px] font-bold ${
              enabled
                ? "text-cyan-300"
                : "text-gray-600"
            }`}
          >
            ON
          </span>

          {/* OFF */}
          <span
            className={`absolute right-2 top-[9px] text-[8px] font-bold ${
              enabled
                ? "text-gray-600"
                : "text-gray-300"
            }`}
          >
            OFF
          </span>
        </button>
      </div>
    </div>
  );
}

/* ============================================================
   MAIN PAGE
============================================================ */

export default function Home() {
  /*
   * IMPORTANT:
   * This state controls ONLY screen display.
   *
   * No localStorage.
   * No useEffect.
   * No mounted state.
   * No hydration problem.
   */

  const [matrixEnabled, setMatrixEnabled] =
    useState(true);

  const toggleMatrix = () => {
    setMatrixEnabled(
      (current) => !current
    );
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* ======================================================
          BACKGROUND
      ======================================================= */}

      <CyberGrid />

      <CyberMatrix
        enabled={matrixEnabled}
      />

      {/* ======================================================
          MATRIX CONTROL
      ======================================================= */}

      <MatrixToggle
        enabled={matrixEnabled}
        onToggle={toggleMatrix}
      />

      {/* ======================================================
          TOP GLOW
      ======================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[250px] bg-gradient-to-b from-cyan-500/[0.06] to-transparent"
      />

      {/* ======================================================
          HERO
      ======================================================= */}

      <section className="relative z-10 flex min-h-screen items-center justify-center px-5 py-24 sm:px-8">

        <div className="w-full max-w-6xl text-center">

          {/* ==================================================
              TOP CATEGORY
          =================================================== */}

          <div className="mb-8 flex items-center justify-center gap-3">

            <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400 sm:w-12" />

            <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-cyan-400 sm:text-xs sm:tracking-[0.35em]">
              CYBERSECURITY • DIGITAL FORENSICS • ETHICAL HACKING
            </p>

            <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400 sm:w-12" />

          </div>

          {/* ==================================================
              BRAND
          =================================================== */}

          <h1 className="text-5xl font-black tracking-[-0.055em] sm:text-7xl md:text-8xl lg:text-9xl">

            <span className="text-white">
              CYBER
            </span>

            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.7)]">
              NEXUS
            </span>

          </h1>

          {/* ==================================================
              ACADEMY
          =================================================== */}

          <h2 className="mt-3 text-2xl font-light tracking-wide text-gray-300 sm:text-3xl md:text-4xl">
            Academy
          </h2>

          {/* ==================================================
              BY NINAD PAWAR
          =================================================== */}

          <div className="relative mx-auto mt-8 inline-flex items-center justify-center">

            {/* Outer glow */}
            <div className="absolute h-14 w-[260px] rounded-full bg-cyan-400/25 blur-2xl sm:w-[320px]" />

            {/* Cyber line left */}
            <div className="absolute right-full h-px w-16 bg-gradient-to-l from-cyan-400 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.8)] sm:w-24" />

            {/* Cyber line right */}
            <div className="absolute left-full h-px w-16 bg-gradient-to-r from-cyan-400 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.8)] sm:w-24" />

            {/* Badge */}
            <div className="relative rounded-xl border border-cyan-400/80 bg-black/75 px-7 py-3 shadow-[0_0_30px_rgba(34,211,238,0.4)] backdrop-blur-xl sm:px-9">

              <p className="text-base font-semibold sm:text-xl">

                <span className="text-white">
                  BY{" "}
                </span>

                <span className="text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.85)]">
                  Ninad Pawar
                </span>

              </p>

            </div>

          </div>

          {/* ==================================================
              DESCRIPTION
          =================================================== */}

          <p className="mx-auto mt-9 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Professional cybersecurity education and
            digital forensics training platform.
          </p>

          {/* ==================================================
              BUTTONS
          =================================================== */}

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            {/* Login */}
            <Link
              href="/login"
              className="group flex h-14 w-full max-w-[260px] items-center justify-center rounded-xl border border-cyan-400/60 bg-black/50 px-7 text-sm font-semibold text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.12)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-cyan-200 hover:shadow-[0_0_35px_rgba(34,211,238,0.3)] sm:w-52"
            >
              Student Login

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            {/* Register */}
            <Link
              href="/register"
              className="flex h-14 w-full max-w-[260px] items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 text-sm font-bold text-black shadow-[0_0_25px_rgba(34,211,238,0.3)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] sm:w-52"
            >
              Register
            </Link>

            {/* Dashboard */}
            <Link
              href="/dashboard"
              className="flex h-14 w-full max-w-[260px] items-center justify-center rounded-xl border border-white/20 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:text-cyan-300 sm:w-52"
            >
              Dashboard

              <span className="ml-2">
                →
              </span>
            </Link>

          </div>

          {/* ==================================================
              FEATURE CARDS
          =================================================== */}

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-4 sm:mt-20 sm:grid-cols-3">

            {/* Cybersecurity */}
            <div className="group rounded-2xl border border-cyan-400/15 bg-white/[0.03] p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05] hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">

              <div className="mb-3 text-2xl">
                🛡️
              </div>

              <h3 className="text-sm font-semibold text-white">
                Cybersecurity
              </h3>

              <p className="mt-2 text-xs leading-5 text-gray-500">
                Practical security concepts and
                hands-on cybersecurity learning.
              </p>

            </div>

            {/* Digital Forensics */}
            <div className="group rounded-2xl border border-cyan-400/15 bg-white/[0.03] p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05] hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">

              <div className="mb-3 text-2xl">
                🔎
              </div>

              <h3 className="text-sm font-semibold text-white">
                Digital Forensics
              </h3>

              <p className="mt-2 text-xs leading-5 text-gray-500">
                Digital evidence, investigation and
                forensic analysis training.
              </p>

            </div>

            {/* Ethical Hacking */}
            <div className="group rounded-2xl border border-cyan-400/15 bg-white/[0.03] p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05] hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">

              <div className="mb-3 text-2xl">
                💻
              </div>

              <h3 className="text-sm font-semibold text-white">
                Ethical Hacking
              </h3>

              <p className="mt-2 text-xs leading-5 text-gray-500">
                Authorized security testing and
                ethical hacking skills.
              </p>

            </div>

          </div>

          {/* ==================================================
              STATUS
          =================================================== */}

          <div className="mt-10 text-[9px] uppercase tracking-[0.25em] text-gray-600">
            MATRIX SYSTEM •{" "}
            {matrixEnabled
              ? "ONLINE"
              : "OFFLINE"}
          </div>

        </div>
      </section>

      {/* ======================================================
          BOTTOM VIGNETTE
      ======================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 bottom-0 z-20 h-44 bg-gradient-to-t from-black via-black/70 to-transparent"
      />

    </main>
  );
}