'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, BookOpen, User, ArrowUpRight, Terminal } from 'lucide-react';
import { Course } from '@/types/course';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <article className="group relative flex flex-col justify-between rounded-xl border border-zinc-800/80 bg-zinc-950/70 p-6 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]">
      {/* Top Header Strip */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-0.5 font-mono text-[11px] font-semibold tracking-wider text-emerald-400">
            <Terminal className="w-3 h-3" />
            {course.badge}
          </span>
          <span className="font-mono text-xs text-zinc-500">{course.level}</span>
        </div>

        {/* Course Title */}
        <h3 className="text-lg font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors duration-200 line-clamp-1 mb-2 font-mono">
          {course.title}
        </h3>

        {/* Course Description */}
        <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed mb-5">
          {course.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {course.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-[10px] font-mono text-zinc-400"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Meta & Action */}
      <div className="border-t border-zinc-800/80 pt-4 flex items-center justify-between">
        <div className="flex items-center gap-4 text-xs text-zinc-400 font-mono">
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            {course.duration}
          </span>
          <span className="inline-flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-zinc-500" />
            {course.modulesCount} Labs
          </span>
        </div>

        <Link
          href={`/courses/${course.slug}`}
          className="inline-flex items-center gap-1 rounded-md bg-zinc-900 hover:bg-emerald-500 p-2 text-zinc-300 hover:text-black border border-zinc-700 hover:border-emerald-400 transition-all text-xs font-mono"
          aria-label={`View ${course.title} details`}
        >
          <span>View</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
};