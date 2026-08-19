"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const courses = [
  {
    id: 1,
    slug: "cybersecurity",
    icon: "🛡️",
    title: "Cybersecurity Fundamentals",
    category: "Cybersecurity",
    difficulty: "Beginner",
    lessons: 24,
    progress: 72,
    description:
      "Learn networking, Linux, security fundamentals, threats and defensive security.",
  },
  {
    id: 2,
    slug: "digital-forensics",
    icon: "🔬",
    title: "Digital Forensics Specialist",
    category: "Forensics",
    difficulty: "Advanced",
    lessons: 32,
    progress: 48,
    description:
      "Learn digital evidence acquisition, analysis, preservation and forensic reporting.",
  },
  {
    id: 3,
    slug: "ethical-hacking",
    icon: "💻",
    title: "Ethical Hacking",
    category: "Ethical Hacking",
    difficulty: "Intermediate",
    lessons: 28,
    progress: 31,
    description:
      "Learn authorized security testing, reconnaissance, vulnerability assessment and web security.",
  },
  {
    id: 4,
    slug: "soc-analyst",
    icon: "🖥️",
    title: "SOC Analyst",
    category: "SOC",
    difficulty: "Intermediate",
    lessons: 30,
    progress: 20,
    description:
      "Learn security monitoring, SIEM concepts, alert analysis and incident response.",
  },
  {
    id: 5,
    slug: "web-security",
    icon: "🌐",
    title: "Web Application Security",
    category: "Ethical Hacking",
    difficulty: "Advanced",
    lessons: 26,
    progress: 15,
    description:
      "Understand web application security testing and defensive security practices.",
  },
  {
    id: 6,
    slug: "cloud-security",
    icon: "☁️",
    title: "Cloud Security",
    category: "Cybersecurity",
    difficulty: "Advanced",
    lessons: 22,
    progress: 8,
    description:
      "Learn cloud security architecture, identity, access control and monitoring.",
  },
];

const categories = [
  "All",
  "Cybersecurity",
  "Forensics",
  "Ethical Hacking",
  "SOC",
];

const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];
export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setCategory] = useState("All");
  const [selectedDifficulty, setDifficulty] = useState("All");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
        course.title.toLowerCase().includes(search.toLowerCase()) ||
            course.description.toLowerCase().includes(search.toLowerCase());

              const matchesCategory =
                  selectedCategory === "All" ||
                      course.category === selectedCategory;

                        const matchesDifficulty =
                            selectedDifficulty === "All" ||
                                course.difficulty === selectedDifficulty;

                                  return matchesSearch && matchesCategory && matchesDifficulty;
                                  });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [matrixOn, setMatrixOn] = useState(true);

  useEffect(() => {
    if (!matrixOn) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}[]<>/\\#$%&@";

    const fontSize = 16;
    let columns = Math.floor(canvas.width / fontSize);

    let drops = Array.from({ length: columns }, () =>
      Math.floor(Math.random() * -50),
    );

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      columns = Math.floor(canvas.width / fontSize);

      if (drops.length !== columns) {
        drops = Array.from({ length: columns }, () =>
          Math.floor(Math.random() * -50),
        );
      }

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];

        ctx.fillStyle = Math.random() > 0.92 ? "#ffffff" : "#00ff88";

        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [matrixOn]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* MATRIX BACKGROUND */}
      {matrixOn && (
        <canvas
          ref={canvasRef}
          className="pointer-events-none fixed inset-0 z-0 opacity-40"
        />
      )}

      {/* DARK OVERLAY */}
      <div className="pointer-events-none fixed inset-0 z-[1] bg-black/40" />

      {/* TOP BAR */}
      <header className="relative z-10 flex items-center justify-between border-b border-cyan-400/20 bg-black/60 px-6 py-4 backdrop-blur-xl">
        <div>
          <h1 className="text-xl font-bold tracking-wider text-cyan-400">
            CYBERNEXUS
          </h1>

          <p className="text-xs tracking-widest text-gray-500">ACADEMY</p>
        </div>

        <nav aria-label="Course path" className="hidden items-center gap-3 text-xs sm:flex">
          <Link href="/" className="text-cyan-300 transition hover:text-white">
            Home
          </Link>
          <span className="text-zinc-700">/</span>
          <Link
            href="/courses/cybersecurity"
            className="text-zinc-400 transition hover:text-cyan-300"
          >
            Cybersecurity
          </Link>
          <span className="text-zinc-700">/</span>
          <Link
            href="/courses/digital-forensics"
            className="text-zinc-400 transition hover:text-cyan-300"
          >
            Digital Forensics
          </Link>
          <span className="text-zinc-700">/</span>
          <Link
            href="/courses/ethical-hacking"
            className="text-zinc-400 transition hover:text-cyan-300"
          >
            Ethical Hacking
          </Link>
        </nav>

        {/* MATRIX TOGGLE */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono tracking-widest text-cyan-300">
            MATRIX
          </span>

          <button
            type="button"
            onClick={() => setMatrixOn(!matrixOn)}
            aria-label="Toggle Matrix background"
            className={`relative h-7 w-14 rounded-full border transition-all duration-300 ${
              matrixOn
                ? "border-cyan-400 bg-cyan-500/20 shadow-[0_0_15px_rgba(0,255,255,0.5)]"
                : "border-gray-600 bg-gray-800"
            }`}
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full transition-all duration-300 ${
                matrixOn
                  ? "left-8 bg-cyan-300 shadow-[0_0_12px_#00ffff]"
                  : "left-1 bg-gray-500"
              }`}
            />
          </button>

          <span
            className={`text-xs font-mono ${
              matrixOn ? "text-green-400" : "text-gray-500"
            }`}
          >
            {matrixOn ? "ON" : "OFF"}
          </span>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10 flex min-h-[calc(100vh-73px)] flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-5 py-2 font-mono text-xs tracking-[0.3em] text-cyan-300 backdrop-blur-md">
          CYBER SECURITY • DIGITAL FORENSICS
        </div>

        <h2 className="text-5xl font-black tracking-tight sm:text-7xl">
          <span className="text-white">CYBER</span>
          <span className="text-cyan-400 drop-shadow-[0_0_20px_#00ffff]">
            NEXUS
          </span>
        </h2>

        <h3 className="mt-3 text-2xl font-semibold text-gray-300 sm:text-3xl">
          Academy
        </h3>

        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
          Cybersecurity • Digital Forensics • Ethical Hacking
        </p>

        <button
          type="button"
          className="mt-10 rounded-full border border-cyan-400 bg-cyan-400/10 px-8 py-4 font-semibold text-cyan-300 backdrop-blur-md transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_35px_rgba(0,255,255,0.6)]"
        >
          Start Learning →
        </button>
      </section>
      {/* Course Explorer */}
<section
  id="course-explorer"
  className="relative z-10 w-full max-w-6xl px-6 py-24"
>
  <div className="mb-12 text-center">
    <p className="font-mono text-sm tracking-[0.3em] text-cyan-400">
      // COURSE DATABASE
    </p>

    <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
      Explore{" "}
      <span className="text-cyan-400">Cyber Courses</span>
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
      Choose your learning path and build practical cybersecurity skills.
    </p>
  </div>

  {/* Search */}
  <div className="mx-auto mb-8 max-w-2xl">
    <div className="flex items-center rounded-2xl border border-cyan-400/20 bg-white/[0.04] px-5 py-4 backdrop-blur-xl">
      <span className="mr-3 text-cyan-400">⌕</span>

      <input
        type="text"
        placeholder="Search cybersecurity courses..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-transparent text-white outline-none placeholder:text-zinc-600"
      />
    </div>
  </div>

  {/* Category Filters */}
  <div className="mb-4 flex flex-wrap justify-center gap-3">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => setCategory(category)}
        className={`rounded-full border px-5 py-2 text-sm transition ${
          selectedCategory === category
            ? "border-cyan-400 bg-cyan-400 text-black"
            : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-cyan-400/40 hover:text-cyan-300"
        }`}
      >
        {category}
      </button>
    ))}
  </div>

  {/* Difficulty Filters */}
  <div className="mb-12 flex flex-wrap justify-center gap-3">
    {difficulties.map((difficulty) => (
      <button
        key={difficulty}
        onClick={() => setDifficulty(difficulty)}
        className={`rounded-full border px-4 py-2 text-xs font-mono transition ${
          selectedDifficulty === difficulty
            ? "border-green-400 bg-green-400/10 text-green-400"
            : "border-white/10 text-zinc-500 hover:border-green-400/40"
        }`}
      >
        {difficulty}
      </button>
    ))}
  </div>

  {/* Course Cards */}
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {filteredCourses.map((course) => (
      <div
        key={course.id}
        className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(0,220,255,0.12)]"
      >
        <div className="flex items-start justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-2xl">
            {course.icon}
          </div>

          <span className="rounded-full border border-cyan-400/20 px-3 py-1 text-xs text-cyan-400">
            {course.category}
          </span>
        </div>

        <h3 className="mt-6 text-xl font-bold text-white">
          {course.title}
        </h3>

        <p className="mt-3 min-h-[72px] text-sm leading-6 text-zinc-400">
          {course.description}
        </p>

        <div className="mt-5 flex items-center justify-between text-xs">
          <span className="text-zinc-500">
            {course.lessons} Lessons
          </span>

          <span
            className={`font-mono ${
              course.difficulty === "Beginner"
                ? "text-green-400"
                : course.difficulty === "Intermediate"
                  ? "text-yellow-400"
                  : "text-red-400"
            }`}
          >
            {course.difficulty}
          </span>
        </div>

        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,220,255,0.8)]"
            style={{ width: `${course.progress}%` }}
          />
        </div>

        <div className="mt-2 flex justify-between text-xs">
          <span className="text-zinc-600">Progress</span>
          <span className="font-mono text-cyan-400">
            {course.progress}%
          </span>
        </div>

        <Link
          href={`/courses/${course.slug}`}
          className="mt-6 block w-full rounded-xl border border-cyan-400/30 py-3 text-center text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
        >
          View Course →
        </Link>
      </div>
    ))}
  </div>

  {/* No results */}
  {filteredCourses.length === 0 && (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] py-16 text-center">
      <div className="text-4xl">⌕</div>

      <h3 className="mt-4 text-xl font-bold text-white">
        No courses found
      </h3>

      <p className="mt-2 text-zinc-500">
        Try another search or category.
      </p>
    </div>
  )}
</section>
      {/* Course Dashboard */}
      <section id="dashboard" className="w-full max-w-6xl px-6 py-24">
        <div className="mb-12">
          <p className="font-mono text-sm tracking-[0.3em] text-cyan-400">
            {"// STUDENT DASHBOARD"}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Continue Your <span className="text-cyan-400">Mission</span>
          </h2>

          <p className="mt-3 text-zinc-400">
            Track your cybersecurity learning journey and practical labs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "🛡️",
              title: "Cybersecurity Analyst",
              level: "Intermediate",
              progress: 72,
              lessons: "18 / 25 Lessons",
            },
            {
              icon: "🔬",
              title: "Digital Forensics",
              level: "Advanced",
              progress: 48,
              lessons: "12 / 25 Lessons",
            },
            {
              icon: "💻",
              title: "Ethical Hacking",
              level: "Intermediate",
              progress: 31,
              lessons: "8 / 26 Lessons",
            },
          ].map((course) => (
            <div
              key={course.title}
              className="group rounded-2xl border border-white/10
                                                                                                                                                                                                                                                  bg-white/[0.03] p-6 backdrop-blur-xl transition
                                                                                                                                                                                                                                                          hover:-translate-y-1 hover:border-cyan-400/50
                                                                                                                                                                                                                                                                  hover:shadow-[0_0_35px_rgba(0,220,255,0.12)]"
            >
              <div className="flex items-start justify-between">
                <div
                  className="flex h-14 w-14 items-center justify-center
                                                                                                                                                                                                                                                                                                      rounded-xl border border-cyan-400/20
                                                                                                                                                                                                                                                                                                                  bg-cyan-400/5 text-2xl"
                >
                  {course.icon}
                </div>

                <span
                  className="rounded-full border border-cyan-400/20
                                                                                                                                                                                                                                                                                                                                                              px-3 py-1 font-mono text-xs text-cyan-400"
                >
                  {course.level}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                {course.title}
              </h3>

              <p className="mt-2 text-sm text-zinc-500">{course.lessons}</p>

              <div className="mt-6">
                <div className="mb-2 flex justify-between text-xs">
                  <span className="text-zinc-500">Progress</span>

                  <span className="font-mono text-cyan-400">
                    {course.progress}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-cyan-400
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          shadow-[0_0_12px_rgba(0,220,255,0.8)]"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>

              <button
                className="mt-6 w-full rounded-xl border
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  border-cyan-400/30 py-3 text-sm font-semibold
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            text-cyan-300 transition
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      hover:bg-cyan-400 hover:text-black"
              >
                Continue Learning →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Practical Labs */}
      <section id="labs" className="w-full max-w-6xl px-6 py-24">
        <div className="mb-12 text-center">
          <p className="font-mono text-sm tracking-[0.3em] text-cyan-400">
            {"// PRACTICAL CYBER LAB"}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Learn by <span className="text-cyan-400">Doing</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Practice cybersecurity concepts inside controlled learning
            environments.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["🔎", "Recon Lab", "Information gathering & reconnaissance"],
            ["🧪", "Forensics Lab", "Digital evidence investigation"],
            ["🛡️", "SOC Lab", "Threat detection & incident analysis"],
          ].map(([icon, title, description]) => (
            <div
              key={title}
              className="rounded-2xl border border-cyan-400/10
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          bg-black/40 p-6 backdrop-blur-xl transition
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  hover:border-cyan-400/40"
            >
              <div className="text-3xl">{icon}</div>

              <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {description}
              </p>

              <button
                className="mt-5 font-mono text-sm text-cyan-400
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  hover:text-cyan-300"
              >
                ENTER LAB →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Roadmap */}
      <section id="roadmap" className="w-full max-w-5xl px-6 py-24">
        <div className="mb-16 text-center">
          <p className="font-mono text-sm tracking-[0.3em] text-cyan-400">
            {"// CAREER ROADMAP"}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Your <span className="text-cyan-400">Cyber Journey</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-5 top-0 h-full w-px
      bg-gradient-to-b from-cyan-400 via-cyan-500/40 to-transparent"
          />

          <div className="space-y-10">
            {[
              [
                "01",
                "Cybersecurity Fundamentals",
                "Networking • Linux • Security Fundamentals",
              ],

              [
                "02",
                "Ethical Hacking",
                "Reconnaissance • Scanning • Web Security",
              ],

              [
                "03",
                "Digital Forensics",
                "Evidence • Acquisition • Analysis • Reporting",
              ],

              [
                "04",
                "Security Operations",
                "SOC • SIEM • Threat Detection • Incident Response",
              ],

              [
                "05",
                "Professional Career",
                "Security Analyst • DFIR • Pentester • Cybersecurity Specialist",
              ],
            ].map(([number, title, description]) => (
              <div key={number} className="relative pl-16">
                <div
                  className="absolute left-0 top-1 flex h-10 w-10
            items-center justify-center rounded-full
            border border-cyan-400/60 bg-black
            font-mono text-xs text-cyan-400
            shadow-[0_0_20px_rgba(0,220,255,0.2)]"
                >
                  {number}
                </div>

                <div
                  className="rounded-2xl border border-white/10
            bg-white/[0.03] p-6 backdrop-blur-xl transition
            hover:border-cyan-400/40
            hover:bg-cyan-400/[0.04]"
                >
                  <h3 className="text-xl font-bold text-white">{title}</h3>

                  <p className="mt-2 text-zinc-400">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
