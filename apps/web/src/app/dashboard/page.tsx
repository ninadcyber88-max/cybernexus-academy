'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldAlert, 
  Terminal, 
  Clock, 
  Award, 
  CheckCircle2, 
  Play, 
  Cpu, 
  Layers 
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MatrixBackground } from '@/components/MatrixBackground';
import { useMatrix } from '@/hooks/useMatrix';
import { MOCK_STUDENT_DASHBOARD } from '@/data/user';

export default function DashboardPage() {
  const { isEnabled, toggleMatrix } = useMatrix();
  const data = MOCK_STUDENT_DASHBOARD;

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-emerald-500 selection:text-black flex flex-col justify-between">
      <MatrixBackground isEnabled={isEnabled} />
      <Navbar isMatrixEnabled={isEnabled} onToggleMatrix={toggleMatrix} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-10 pb-20">
        {/* User Status Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl border border-zinc-800/80 bg-zinc-950/70 backdrop-blur-md mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center font-mono font-bold text-emerald-400 text-lg">
              CN
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-xl font-bold font-mono text-zinc-100">{data.studentName}</h1>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950 border border-emerald-500/30 text-emerald-400">
                  {data.studentHandle}
                </span>
              </div>
              <p className="text-xs font-mono text-zinc-400 mt-0.5 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-emerald-400" />
                CLEARANCE: <span className="text-zinc-200">{data.clearanceLevel}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs font-mono transition shadow-[0_0_15px_rgba(16,185,129,0.25)]"
            >
              <Terminal className="w-3.5 h-3.5" />
              Launch Sandboxes
            </Link>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-950/60 backdrop-blur-sm">
            <div className="flex items-center justify-between text-zinc-400 text-xs font-mono mb-2">
              <span>ACTIVE LAB SESSIONS</span>
              <Cpu className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-bold font-mono text-zinc-100">{data.activeLabs}</div>
            <p className="text-[11px] text-zinc-500 mt-1">Simulated environments online</p>
          </div>

          <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-950/60 backdrop-blur-sm">
            <div className="flex items-center justify-between text-zinc-400 text-xs font-mono mb-2">
              <span>HOURS LOGGED</span>
              <Clock className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl font-bold font-mono text-zinc-100">{data.hoursSpent}h</div>
            <p className="text-[11px] text-zinc-500 mt-1">Terminal time & investigations</p>
          </div>

          <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-950/60 backdrop-blur-sm">
            <div className="flex items-center justify-between text-zinc-400 text-xs font-mono mb-2">
              <span>CERTIFICATES EARNED</span>
              <Award className="w-4 h-4 text-teal-400" />
            </div>
            <div className="text-2xl font-bold font-mono text-zinc-100">{data.certificationsEarned}</div>
            <p className="text-[11px] text-zinc-500 mt-1">Verified on blockchain/ledger</p>
          </div>
        </div>

        {/* Course Progress Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold font-mono text-zinc-200 flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-400" />
              Active Training Pathways
            </h2>
            <span className="text-xs font-mono text-zinc-500">
              {data.enrolledCourses.length} Tracks Enrolled
            </span>
          </div>

          <div className="space-y-4">
            {data.enrolledCourses.map((track) => (
              <div
                key={track.id}
                className="p-6 rounded-xl border border-zinc-800/80 bg-zinc-950/70 backdrop-blur-md transition hover:border-zinc-700"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Track Info */}
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-[10px] font-mono text-emerald-400 font-semibold">
                        {track.badge}
                      </span>
                      <span className={`text-[11px] font-mono ${
                        track.status === 'Completed' ? 'text-teal-400' : 'text-zinc-400'
                      }`}>
                        Status: {track.status}
                      </span>
                    </div>

                    <h3 className="text-base font-bold font-mono text-zinc-100">
                      {track.courseTitle}
                    </h3>

                    <p className="text-xs font-mono text-zinc-500">
                      Last terminal activity: {track.lastAccessed}
                    </p>
                  </div>

                  {/* Progress Bar and Indicator */}
                  <div className="w-full lg:w-72 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-zinc-400">
                        {track.completedModules}/{track.totalModules} Labs
                      </span>
                      <span className="font-bold text-emerald-400">{track.progressPercentage}%</span>
                    </div>
                    {/* Visual Bar */}
                    <div className="w-full h-2 rounded-full bg-zinc-900 overflow-hidden border border-zinc-800">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-500"
                        style={{ width: `${track.progressPercentage}%` }}
                      />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    {track.status === 'Completed' ? (
                      <button
                        type="button"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-teal-950 border border-teal-500/40 text-teal-300 hover:bg-teal-900/40 text-xs font-mono transition"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        View Certificate
                      </button>
                    ) : (
                      <Link
                        href={`/courses/${track.courseSlug}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs font-mono transition shadow-[0_0_12px_rgba(16,185,129,0.2)]"
                      >
                        <Play className="w-3.5 h-3.5 fill-black" />
                        Resume Track
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}