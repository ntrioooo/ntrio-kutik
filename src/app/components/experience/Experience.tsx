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
    <div className="flex flex-col md:flex-row gap-8 md:gap-12">
      <div className="w-full md:w-2/3">
        <div className="space-y-6">
          <p className="text-gray-700 dark:text-white">
            I&apos;m a Software Developer with around 2 years of experience,
            focused on building high-performance websites using cutting-edge
            technologies. I enjoy transforming complex problems into scalable,
            efficient solutions that deliver a smooth and intuitive user
            experience.
          </p>
          <p className="text-gray-700 dark:text-white">
            I&apos;m currently sharpening my skills in modern web
            technologies—diving deeper into the JavaScript ecosystem with React
            and Next.js, while also expanding my backend capabilities with
            TypeScript and PHP Laravel. I&apos;m passionate about writing clean
            and maintainable code.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <Link
            href="https://github.com/ntrioooo"
            rel="noopener noreferrer"
            target="_blank"
          >
            <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition hover:dark:text-black">
              Github
            </button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/trionugroho/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 hover:dark:text-black transition">
              LinkedIn
            </button>
          </Link>
          {/* <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">
              LinkedIn
            </button> */}
          {/* <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">
              Email Me
            </button> */}
        </div>
      </div>
      <div className="relative w-full md:w-1/3">
        <div className="h-64 overflow-y-scroll space-y-4 scrollbar-hide">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="flex items-center gap-4 p-4 border rounded-3xl shadow-sm hover:shadow-md transition snap-start border-gray-300"
            >
              <div
                className={`w-14 h-14 rounded-full ${exp.logoBg} flex items-center justify-center border`}
              >
                {typeof exp.logo === "string" && exp.logo.startsWith("/") ? (
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={100}
                    height={100}
                    className="w-full h-full object-contain rounded-full"
                  />
                ) : (
                  <span className="text-white font-bold">{exp.logo}</span>
                )}
              </div>
              <div>
                <h3 className="font-semibold">{exp.company}</h3>
                <p className="text-sm text-gray-600 dark:text-white">
                  {exp.role}
                </p>
                <p className="text-sm text-gray-600 dark:text-white">
                  ({exp.year})
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* INDICATOR */}
      </div>
    </div>
  );
}
