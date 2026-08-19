import Link from "next/link";

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
      "Learn cybersecurity fundamentals, networking, Linux, threats, vulnerabilities and defensive security.",
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
      "Learn digital evidence, acquisition, preservation, examination, analysis and forensic reporting.",
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
      "Learn security monitoring, SIEM, alert investigation and incident response.",
  },

  {
    id: 5,
    slug: "web-security",
    icon: "🌐",
    title: "Web Application Security",
    category: "Web Security",
    difficulty: "Advanced",
    lessons: 26,
    progress: 15,
    description:
      "Learn web security concepts, authentication, access control and secure development.",
  },

  {
    id: 6,
    slug: "cloud-security",
    icon: "☁️",
    title: "Cloud Security",
    category: "Cloud Security",
    difficulty: "Advanced",
    lessons: 22,
    progress: 8,
    description:
      "Learn cloud security architecture, IAM, monitoring and security controls.",
  },
];

export default function Home() {
  return (
    <main className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <article key={course.id} className="rounded-2xl border border-cyan-400/20 p-6">
          <div className="text-4xl">{course.icon}</div>
          <h2 className="mt-4 text-xl font-bold">{course.title}</h2>
          <p className="mt-2 text-sm text-gray-400">{course.description}</p>
          <Link
            href={`/courses/${course.slug}`}
            className="mt-6 block w-full rounded-xl border border-cyan-400/30 py-3 text-center text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
          >
            View Course →
          </Link>
        </article>
      ))}
    </main>
  );
}
