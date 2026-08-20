import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <section className="text-center">

        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-400">
          Cybersecurity • Digital Forensics • Ethical Hacking
        </p>

        <h1 className="text-5xl font-bold md:text-7xl">
          CYBER
          <span className="text-cyan-400">
            NEXUS
          </span>
        </h1>

        <h2 className="mt-4 text-2xl text-gray-300">
          Academy
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-gray-400">
          Professional cybersecurity education and digital forensics
          training platform.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            href="/login"
            className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-7 py-3 text-cyan-300 transition hover:bg-cyan-400/20"
          >
            Student Login
          </Link>

          <Link
            href="/register"
            className="rounded-xl bg-cyan-400 px-7 py-3 font-semibold text-black transition hover:bg-cyan-300"
          >
            Register
          </Link>

          <Link
            href="/dashboard"
            className="rounded-xl border border-white/20 px-7 py-3 text-gray-300 transition hover:bg-white/10"
          >
            Dashboard →
          </Link>

        </div>

      </section>
    </main>
  );
}
