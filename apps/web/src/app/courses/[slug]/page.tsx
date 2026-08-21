'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ShieldCheck, 
  Clock, 
  BookOpen, 
  User, 
  ArrowLeft, 
  CheckCircle2, 
  Terminal, 
  Lock 
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MatrixBackground } from '@/components/MatrixBackground';
import { useMatrix } from '@/hooks/useMatrix';
import { COURSES_DATA } from '@/data/courses';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function CourseDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const { isEnabled, toggleMatrix } = useMatrix(false);

  const course = COURSES_DATA.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-emerald-500 selection:text-black flex flex-col justify-between">
      <MatrixBackground isEnabled={isEnabled} />
      <Navbar isMatrixEnabled={isEnabled} onToggleMatrix={toggleMatrix} />

      <article className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-8 pb-20">
        {/* Breadcrumb / Back */}
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO ALL COURSES</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Course Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-0.5 font-mono text-xs font-semibold text-emerald-400">
                  <Terminal className="w-3 h-3" />
                  {course.badge}
                </span>
                <span className="font-mono text-xs text-zinc-500 border border-zinc-800 px-2 py-0.5 rounded">
                  {course.level}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-zinc-100 mb-4">
                {course.title}
              </h1>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* Highlights Section */}
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-950/60 backdrop-blur-sm">
              <h2 className="text-sm font-mono font-bold text-zinc-200 uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Key Learning Objectives
              </h2>
              <ul className="space-y-3">
                {course.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags Strip */}
            <div>
              <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-3">Technologies Covered</h3>
              <div className="flex flex-wrap gap-2">
                {course.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-zinc-900 border border-zinc-800 px-3 py-1 text-xs font-mono text-zinc-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar / Enrollment Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 rounded-xl border border-zinc-800 bg-zinc-950/80 p-6 backdrop-blur-md">
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between text-xs font-mono border-b border-zinc-900 pb-3">
                  <span className="text-zinc-500">Instructor</span>
                  <span className="text-zinc-200 font-semibold">{course.instructor}</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono border-b border-zinc-900 pb-3">
                  <span className="text-zinc-500">Duration</span>
                  <span className="text-zinc-200 font-semibold">{course.duration}</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono border-b border-zinc-900 pb-3">
                  <span className="text-zinc-500">Hands-on Labs</span>
                  <span className="text-zinc-200 font-semibold">{course.modulesCount} Modules</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-500">Certification</span>
                  <span className="text-emerald-400 font-semibold">Included</span>
                </div>
              </div>

              <Link
                href="/register"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs font-mono transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)] mb-3"
              >
                <Lock className="w-3.5 h-3.5" />
                ENROLL IN TRACK
              </Link>

              <p className="text-[10px] text-center text-zinc-500 font-mono">
                Instant Sandbox Lab Access upon registration.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}