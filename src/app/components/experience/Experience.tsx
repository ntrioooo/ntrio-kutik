"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import VocasiaLogo from "../../images/experience/vocasia.png";

export default function Experience() {
  const experienceData = [
    {
      id: 1,
      company: "Vocasia",
      role: "Frontend Developer Intership",
      year: "Feb 2023 – Jun 2023",
      logoBg: "bg-teal-200",
      logo: "/images/experience/vocasia.png",
    },
    {
      id: 2,
      company: "Metropolitan Land",
      role: "Software Developer",
      year: "Aug 2024 – Present",
      logoBg: "bg-gray-300",
      logo: "/images/experience/metland.png",
    },
  ];

  return (
    <section className="py-12" id="about">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-800 mb-6">
        About & Experience
      </h2>
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        <div className="w-full md:w-2/3">
          <div className="space-y-6">
            <p className="text-gray-700">
              I'm a Software Developer with around 2 years of experience,
              focused on building high-performance websites using cutting-edge
              technologies. I enjoy transforming complex problems into scalable,
              efficient solutions that deliver a smooth and intuitive user
              experience.
            </p>
            <p className="text-gray-700">
              I'm currently sharpening my skills in modern web
              technologies—diving deeper into the JavaScript ecosystem with
              React and Next.js, while also expanding my backend capabilities
              with TypeScript and PHP Laravel. I'm passionate about writing
              clean and maintainable code.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="https://github.com/ntrioooo"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">
                Github
              </button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/trionugroho/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">
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
            {experienceData.map((exp, idx) => (
              <div
                key={exp.id}
                className="flex items-center gap-4 p-4 border rounded-3xl shadow-sm hover:shadow-md transition snap-start"
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
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-white font-bold">{exp.logo}</span>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold">{exp.company}</h3>
                  <p className="text-sm text-gray-600">{exp.role}</p>
                  <p className="text-sm text-gray-600">({exp.year})</p>
                </div>
              </div>
            ))}
          </div>

          {/* INDICATOR */}
        </div>
      </div>
    </section>
  );
}
