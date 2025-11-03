"use client";

import Image from "next/image";
import Link from "next/link";

export default function Experience() {
  const experienceData = [
    {
      id: 1,
      company: "Metropolitan Land",
      role: "Software Developer",
      year: "Aug 2024 – Present",
      logoBg: "bg-gray-300",
      logo: "/images/experience/metland.png",
    },
    {
      id: 2,
      company: "Vocasia",
      role: "Frontend Developer Intership",
      year: "Feb 2023 – Jun 2023",
      logoBg: "bg-teal-200",
      logo: "/images/experience/vocasia.png",
    },
  ];

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
      <div className="space-y-8">
        <div className="space-y-5 rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-black/20">
          <p className="text-base text-slate-600 dark:text-slate-300">
            I&apos;m a Software Developer with around 2 years of experience focused on
            building high-performance websites with calm, modern interfaces. I enjoy
            transforming complex problems into scalable solutions that feel effortless for users.
          </p>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Right now I&apos;m deepening my expertise in the JavaScript ecosystem—especially React and
            Next.js—while expanding backend skills with TypeScript and Laravel. Clean, maintainable
            code and thoughtful UX are always at the heart of my work.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="https://github.com/ntrioooo"
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:text-white"
          >
            Github
          </Link>
          <Link
            href="https://www.linkedin.com/in/trionugroho/"
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:text-white"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:trionugrohoid@gmail.com"
            className="inline-flex items-center justify-center rounded-full border border-emerald-300 bg-emerald-500/10 px-5 py-2 text-sm font-medium text-emerald-700 transition-colors hover:bg-emerald-500/20 dark:border-emerald-500/40 dark:text-emerald-200"
          >
            Email Me
          </Link>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-black/20">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Recent roles</h3>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
            Timeline
          </span>
        </div>
        <div className="mt-6 space-y-4">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md dark:border-slate-800/60 dark:bg-slate-900/70 dark:hover:border-emerald-500/30"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/40 ${exp.logoBg}`}
              >
                {typeof exp.logo === "string" && exp.logo.startsWith("/") ? (
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={56}
                    height={56}
                    className="h-12 w-12 object-contain"
                  />
                ) : (
                  <span className="text-sm font-bold text-white">{exp.logo}</span>
                )}
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-semibold text-slate-900 dark:text-white">{exp.company}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-300">{exp.role}</p>
                <p className="text-xs text-slate-400 dark:text-slate-500">{exp.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
