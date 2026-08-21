export const dynamic = 'force-dynamic';
"use client";

import Link from "next/link";
import { ShieldCheck, Zap, Power } from "lucide-react";
import { useEffect, useState } from "react";

const matrixColumns = Array.from({ length: 28 }, (_, i) => i);

export default function Home() {
  const [matrixEnabled, setMatrixEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const saved = localStorage.getItem("cybernexus-matrix-effect");

    if (saved !== null) {
      setMatrixEnabled(saved === "true");
    }
  }, []);

  const toggleMatrix = () => {
    setMatrixEnabled((current) => {
      const next = !current;

      localStorage.setItem(
        "cybernexus-matrix-effect",
        String(next)
      );

      return next;
    });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* WEBSITE UNDER CONSTRUCTION */}

      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center rounded-xl border border-emerald-300/40 bg-emerald-300/10 px-6 py-2.5 text-sm font-semibold tracking-wide text-emerald-200 shadow-[0_0_25px_rgba(110,231,183,0.15)] backdrop-blur-xl whitespace-nowrap">
        <span className="mr-2 h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.9)] animate-pulse" />
        WEBSITE UNDER CONSTRUCTION
      </div>

      {/* MATRIX BACKGROUND */}

      {mounted && matrixEnabled && (
        <div className="matrix-layer">

          <div className="matrix-grid" />

          {matrixColumns.map((column) => (
            <div
              key={column}
              className="matrix-column"
              style={{
                left: `${column * 3.7}%`,
                animationDelay: `${(column % 9) * -0.8}s`,
                animationDuration: `${6 + (column % 5)}s`,
              }}
            >
              {"01<>/\\{}[]#$%01CYBER01NEXUS01"
                .split("")
                .map((char, index) => (
                  <div key={index}>{char}</div>
                ))}
            </div>
          ))}

          <div className="matrix-scan-line" />

        </div>
      )}

      {/* BACKGROUND GLOW */}

      <div className="fixed inset-0 z-0 pointer-events-none">

        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[350px] w-[700px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

      </div>

      {/* MATRIX TOGGLE */}

      <button
        type="button"
        onClick={toggleMatrix}
        aria-label="Toggle Matrix Cyber Effect"
        aria-pressed={matrixEnabled}
        className="fixed right-6 top-20 z-50 flex items-center gap-3 rounded-full border border-cyan-400/40 bg-black/70 px-4 py-2.5 text-sm font-semibold backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"
      >
        <span
          className={
            matrixEnabled
              ? "relative h-6 w-11 rounded-full border border-cyan-400 bg-cyan-400/30"
              : "relative h-6 w-11 rounded-full border border-gray-600 bg-gray-800"
          }
        >
          <span
            className={
              matrixEnabled
                ? "absolute left-5 top-0.5 h-5 w-5 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.9)] transition-all duration-300"
                : "absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-gray-500 transition-all duration-300"
            }
          />
        </span>

        <span
          className={
            matrixEnabled
              ? "text-cyan-400"
              : "text-gray-500"
          }
        >
          {matrixEnabled ? "ON" : "OFF"}
        </span>

      </button>

      {/* HERO */}

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-20">

        <div className="mx-auto w-full max-w-6xl text-center">

          {/* TOP LABEL */}

          <div className="mb-8 flex items-center justify-center gap-3">

            <ShieldCheck className="h-5 w-5 text-cyan-400" />

            <p className="text-sm font-medium tracking-[0.35em] text-cyan-400 md:text-base">
              CYBERSECURITY • DIGITAL FORENSICS • ETHICAL HACKING
            </p>

            <Zap className="h-5 w-5 text-cyan-400" />

          </div>

          {/* BRAND */}

          <h1 className="text-4xl font-black leading-none tracking-tight md:text-5xl lg:text-6xl">

            <span className="text-white">
              CYBER
            </span>

            <span className="text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.65)]">
              NEXUS
            </span>

          </h1>

          {/* ACADEMY */}

          <h2 className="mt-5 text-3xl font-light text-gray-300 md:text-4xl">
            Academy
          </h2>

          {/* NAME */}

          <div className="relative mt-8 mb-10 inline-flex items-center justify-center">

            <div className="absolute h-[2px] w-[420px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-sm" />

            <div className="relative rounded-xl border-2 border-cyan-400 bg-black/70 px-10 py-4 shadow-[0_0_25px_rgba(34,211,238,0.55)] backdrop-blur-xl">

              <span className="text-2xl font-semibold md:text-3xl">
                By{" "}
                <span className="text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]">
                  Ninad Pawar
                </span>
              </span>

            </div>

          </div>

          {/* DESCRIPTION */}

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl">
            Professional cybersecurity education and digital forensics
            training platform.
          </p>

          {/* BUTTONS */}

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <Link
              href="/login"
              className="min-w-[210px] rounded-xl border border-cyan-400/70 bg-cyan-400/5 px-8 py-4 font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-400/15 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
            >
              Student Login
            </Link>

            <Link
              href="/register"
              className="min-w-[180px] rounded-xl bg-cyan-400 px-8 py-4 font-bold text-black transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.55)]"
            >
              Register
            </Link>

            <Link
              href="/dashboard"
              className="min-w-[210px] rounded-xl border border-gray-600 px-8 py-4 font-semibold text-gray-200 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
            >
              Dashboard →
            </Link>

          </div>

        </div>

      </section>

      {/* BOTTOM GLOW */}

      <div className="absolute bottom-0 left-1/2 z-0 h-[100px] w-[700px] -translate-x-1/2 bg-cyan-400/10 blur-[100px] pointer-events-none" />

      {/* ANIMATIONS */}

      <style jsx>{`
        .matrix-layer {
          position: fixed;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
          opacity: 0.75;
        }

        .matrix-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(
              rgba(34, 211, 238, 0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(34, 211, 238, 0.08) 1px,
              transparent 1px
            );
          background-size: 45px 45px;
        }

        .matrix-column {
          position: absolute;
          top: 0;
          color: rgb(34, 211, 238);
          font-family: "Courier New", monospace;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          white-space: pre;
          text-shadow:
            0 0 6px rgba(34, 211, 238, 0.9),
            0 0 14px rgba(34, 211, 238, 0.55);
          animation-name: matrixRain;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .matrix-scan-line {
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(34, 211, 238, 0.5);
          box-shadow: 0 0 15px rgba(34, 211, 238, 0.9);
          animation: matrixScan 7s linear infinite;
        }

        @keyframes matrixRain {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }

          10% {
            opacity: 1;
          }

          50% {
            opacity: 1;
          }

          90% {
            opacity: 0.8;
          }

          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        @keyframes matrixScan {
          0% {
            top: -5%;
            opacity: 0;
          }

          10% {
            opacity: 1;
          }

          90% {
            opacity: 1;
          }

          100% {
            top: 105%;
            opacity: 0;
          }
        }
      `}</style>

    </main>
  );
}