'use client';

import React, { useState, useMemo } from 'react';
import { Search, Filter, ShieldCheck } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MatrixBackground } from '@/components/MatrixBackground';
import { CourseCard } from '@/components/CourseCard';
import { useMatrix } from '@/hooks/useMatrix';
import { COURSES_DATA } from '@/data/courses';
import { CourseLevel } from '@/types/course';

export default function CoursesPage() {
  const { isEnabled, toggleMatrix } = useMatrix(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');

  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;

      return matchesSearch && matchesLevel;
    });
  }, [searchTerm, selectedLevel]);

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-emerald-500 selection:text-black flex flex-col justify-between">
      <MatrixBackground isEnabled={isEnabled} />
      <Navbar isMatrixEnabled={isEnabled} onToggleMatrix={toggleMatrix} />

      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-12 pb-20">
        {/* Page Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-400 text-xs font-mono mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>TRAINING MODULES</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3 font-mono">
            CYBER DEFENSE <span className="text-emerald-400">CURRICULUM</span>
          </h1>
          <p className="text-zinc-400 text-sm max-w-2xl">
            Real-world offensive and defensive security operations, threat hunting, and digital forensics pathways designed for security professionals.
          </p>
        </div>

        {/* Search and Filters Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-zinc-900">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search by topic, keyword, or tag..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-xs font-mono text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          {/* Level Filter Buttons */}
          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
            <Filter className="w-3.5 h-3.5 text-zinc-500 hidden sm:block" />
            {['All', 'Beginner', 'Intermediate', 'Advanced'].map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-3 py-1.5 rounded text-xs font-mono transition-all ${
                  selectedLevel === level
                    ? 'bg-emerald-500 text-black font-semibold shadow-[0_0_10px_rgba(16,185,129,0.3)]'
                    : 'border border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-zinc-800 rounded-xl">
            <p className="font-mono text-sm text-zinc-500">No courses match your query.</p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}