import Link from "next/link";

type Course = {
  icon: string;
  title: string;
  category: string;
  difficulty: string;
  duration: string;
  lessons: number;
  description: string;
  modules: string[];
};

const courseData: Record<string, Course> = {
  cybersecurity: {
    icon: "🛡️",
    title: "Cybersecurity Fundamentals",
    category: "Cybersecurity",
    difficulty: "Beginner",
    duration: "8 Weeks",
    lessons: 24,
    description:
      "Build a strong foundation in cybersecurity, networking, Linux, security concepts, threats and defensive security.",
    modules: [
      "Cybersecurity Fundamentals",
      "Networking & TCP/IP",
      "Linux Security Fundamentals",
      "Threats & Vulnerabilities",
      "Identity & Access Management",
      "Security Monitoring",
      "Incident Response Fundamentals",
      "Final Assessment",
    ],
  },

  "digital-forensics": {
    icon: "🔬",
    title: "Digital Forensics Specialist",
    category: "Digital Forensics",
    difficulty: "Advanced",
    duration: "12 Weeks",
    lessons: 32,
    description:
      "Learn digital evidence handling, acquisition, preservation, examination, analysis and forensic reporting.",
    modules: [
      "Digital Forensics Fundamentals",
      "Digital Evidence",
      "Chain of Custody",
      "Evidence Acquisition",
      "Disk & File-System Analysis",
      "Windows Forensics",
      "Mobile Forensics",
      "Forensic Reporting",
      "Final Investigation",
    ],
  },

  "ethical-hacking": {
    icon: "💻",
    title: "Ethical Hacking",
    category: "Ethical Hacking",
    difficulty: "Intermediate",
    duration: "10 Weeks",
    lessons: 28,
    description:
      "Learn authorized security testing, reconnaissance, vulnerability assessment and web application security.",
    modules: [
      "Ethical Hacking Fundamentals",
      "Reconnaissance",
      "Network Scanning",
      "Vulnerability Assessment",
      "Web Application Security",
      "Authentication Security",
      "Security Testing Methodology",
      "Reporting & Remediation",
    ],
  },

  "soc-analyst": {
    icon: "🖥️",
    title: "SOC Analyst",
    category: "Security Operations",
    difficulty: "Intermediate",
    duration: "10 Weeks",
    lessons: 30,
    description:
      "Develop practical skills in security monitoring, alert analysis, SIEM concepts and incident response.",
    modules: [
      "SOC Fundamentals",
      "Security Monitoring",
      "Log Analysis",
      "SIEM Fundamentals",
      "Alert Investigation",
      "Threat Detection",
      "Incident Response",
      "SOC Reporting",
    ],
  },

  "web-security": {
    icon: "🌐",
    title: "Web Application Security",
    category: "Web Security",
    difficulty: "Advanced",
    duration: "8 Weeks",
    lessons: 26,
    description:
      "Understand web application security assessment, common vulnerabilities and secure development practices.",
    modules: [
      "Web Security Fundamentals",
      "HTTP & Web Architecture",
      "Authentication & Sessions",
      "Input Validation",
      "Access Control",
      "API Security",
      "Security Testing",
      "Secure Development",
    ],
  },

  "cloud-security": {
    icon: "☁️",
    title: "Cloud Security",
    category: "Cloud Security",
    difficulty: "Advanced",
    duration: "8 Weeks",
    lessons: 22,
    description:
      "Learn cloud security architecture, identity, access management, monitoring and security controls.",
    modules: [
      "Cloud Security Fundamentals",
      "Cloud Architecture",
      "Identity & Access Management",
      "Network Security",
      "Data Protection",
      "Logging & Monitoring",
      "Cloud Threats",
      "Security Assessment",
    ],
  },
};

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const course = courseData[slug];

  if (!course) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
        <div className="text-center">
          <p className="font-mono text-cyan-400">ERROR 404</p>

          <h1 className="mt-3 text-4xl font-bold">
            Course Not Found
          </h1>

          <p className="mt-4 text-zinc-500">
            The requested course does not exist.
          </p>

          <Link
            href="/"
            className="mt-8 inline-block rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
          >
            ← Back to Academy
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">

      {/* ================= NAVBAR ================= */}

      <nav className="sticky top-0 z-50 border-b border-cyan-400/10 bg-black/80 px-6 py-5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between">

          <Link
            href="/"
            className="font-bold tracking-[0.2em] text-cyan-400"
          >
            CYBERNEXUS
          </Link>

          <Link
            href="/"
            className="text-sm text-zinc-400 transition hover:text-cyan-400"
          >
            ← Academy
          </Link>

        </div>
      </nav>


      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden border-b border-cyan-400/10 px-6 py-20">

        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">

          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/5 text-4xl shadow-[0_0_30px_rgba(0,220,255,0.08)]">
            {course.icon}
          </div>

          <p className="mt-8 font-mono text-sm tracking-[0.3em] text-cyan-400">
            // {course.category.toUpperCase()}
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            {course.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            {course.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            <span className="rounded-full border border-green-400/20 bg-green-400/5 px-4 py-2 text-sm text-green-400">
              {course.difficulty}
            </span>

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-400">
              {course.duration}
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400">
              {course.lessons} Lessons
            </span>

          </div>

          <button
            type="button"
            className="mt-10 rounded-full bg-cyan-400 px-8 py-4 font-bold text-black transition hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(0,220,255,0.4)]"
          >
            Start Learning →
          </button>

        </div>
      </section>


      {/* ================= CONTENT ================= */}

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 lg:grid-cols-[1fr_320px]">

        {/* MODULES */}

        <div>

          <p className="font-mono text-sm tracking-[0.3em] text-cyan-400">
            // COURSE MODULES
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Learning Path
          </h2>

          <p className="mt-3 text-zinc-500">
            Complete each module to progress through the course.
          </p>

          <div className="mt-8 space-y-3">

            {course.modules.map((module, index) => (

              <div
                key={module}
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.04]"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 font-mono text-sm text-cyan-400">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="flex-1">

                  <h3 className="font-semibold text-white">
                    {module}
                  </h3>

                  <p className="mt-1 text-xs text-zinc-600">
                    Module {index + 1} • Learning Content
                  </p>

                </div>

                <span className="text-zinc-600 transition group-hover:text-cyan-400">
                  →
                </span>

              </div>

            ))}

          </div>

        </div>


        {/* ================= SIDEBAR ================= */}

        <aside>

          <div className="sticky top-24 rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-6 backdrop-blur-xl">

            <p className="font-mono text-xs tracking-[0.2em] text-cyan-400">
              COURSE STATUS
            </p>


            {/* Progress */}

            <div className="mt-6">

              <div className="flex justify-between text-sm">

                <span className="text-zinc-500">
                  Your Progress
                </span>

                <span className="font-mono text-cyan-400">
                  0%
                </span>

              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">

                <div className="h-full w-0 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,220,255,0.8)]" />

              </div>

            </div>


            {/* Stats */}

            <div className="mt-8 space-y-4 border-t border-white/10 pt-6">

              <div className="flex justify-between">

                <span className="text-zinc-500">
                  Lessons
                </span>

                <span>
                  {course.lessons}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-zinc-500">
                  Duration
                </span>

                <span>
                  {course.duration}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-zinc-500">
                  Level
                </span>

                <span className="text-cyan-400">
                  {course.difficulty}
                </span>

              </div>

            </div>


            {/* Enroll */}

            <button
              type="button"
              className="mt-8 w-full rounded-xl bg-cyan-400 py-3 font-bold text-black transition hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(0,220,255,0.35)]"
            >
              Enroll Now
            </button>

          </div>

        </aside>

      </section>


      {/* ================= CERTIFICATE ================= */}

      <section className="border-t border-cyan-400/10 px-6 py-20">

        <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.03] p-10 text-center backdrop-blur-xl md:p-14">

          <p className="text-4xl">
            🏆
          </p>

          <h2 className="mt-5 text-3xl font-bold">
            Earn Your Certificate
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-zinc-400">
            Complete the course modules and final assessment
            to become eligible for the CyberNexus Academy
            course certificate.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-500">
              Course Completion
            </span>

            <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-500">
              Final Assessment
            </span>

            <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-500">
              Digital Certificate
            </span>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="border-t border-cyan-400/10 px-6 py-8 text-center">

        <p className="font-mono text-xs text-zinc-600">
          CYBERNEXUS ACADEMY // SECURE LEARNING ENVIRONMENT
        </p>

        <p className="mt-2 text-xs text-zinc-700">
          © 2026 CyberNexus Academy
        </p>

      </footer>

    </main>
  );
}
