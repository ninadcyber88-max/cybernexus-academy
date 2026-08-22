'use client';

import { useState, useMemo } from 'react';
import { Search, Filter, ShieldCheck } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import MatrixBackground from '@/components/MatrixBackground';
import { CourseCard } from '@/components/CourseCard';
import { useMatrix } from '@/hooks/useMatrix';
import { COURSES_DATA } from '@/data/courses';

export default function Home() {
  // होमपेजसाठी मॅट्रिक्स बाय डिफॉल्ट चालू राहील
  const { isEnabled, toggleMatrix } = useMatrix();
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
    <main className="relative min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black flex flex-col justify-between">
      {/* Matrix Background - Visible only on Home page */}
      <MatrixBackground isEnabled={isEnabled} />
      
      <Navbar isMatrixEnabled={isEnabled} onToggleMatrix={toggleMatrix} />

      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-12 pb-20">
        
        {/* Cyan Glowing Rounded Box with CyberNexus-Academy & By Ninad Pawar */}
        <div className="mb-12 p-8 rounded-2xl border border-cyan-800/50 bg-black/60 backdrop-blur-md shadow-[0_0_35px_rgba(6,182,212,0.35)] text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs font-mono mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>TRAINING MODULES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3 font-mono text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            CyberNexus-Academy
          </h1>
          
          <p className="text-2xl sm:text-5x1 font-bold tracking-tight mb-3 font-mono text-cyan-400 drop-shadow-[0_0_10px_fgba(6,182,212,0,5)]">
            By Ninad Pawar
          </p>

          <p className="text-zinc-400 text-xs sm:text-sm max-w-2xl mx-auto font-mono">
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
              className="w-full pl-9 pr-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-xs font-mono text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors"
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
                    ? 'bg-cyan-500 text-black font-semibold shadow-[0_0_15px_rgba(6,182,212,0.4)]'
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
