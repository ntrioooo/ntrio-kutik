"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "./components/footer/Footer";
import Experience from "./components/experience/Experience";
import Navbar from "./components/navbar/Navbar";
import Slider from "./components/slider/Slider";
import Layout from "./layout/layout";
import LoadingPage from "./components/loadingPage/loadingPage";

const highlights = [
  {
    title: "02+ years",
    description: "Shaping modern web apps for startups and brands.",
  },
  {
    title: "Product-minded",
    description: "Blending UX thinking with clean, maintainable code.",
  },
  {
    title: "Full-stack toolkit",
    description: "React, Next.js, TypeScript, Laravel & more.",
  },
];

export default function Home() {
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const fadeTimeout = window.setTimeout(() => setLoaderVisible(false), 1200);
    const removeTimeout = window.setTimeout(() => setShowLoader(false), 1700);

    return () => {
      window.clearTimeout(fadeTimeout);
      window.clearTimeout(removeTimeout);
    };
  }, []);

  return (
    <>
      {showLoader && <LoadingPage visible={loaderVisible} />}
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-100 via-white to-white text-slate-900 transition-colors dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-white">
        <div className="pointer-events-none absolute inset-x-0 top-[-10rem] z-0 h-[32rem] rounded-full bg-gradient-to-b from-emerald-200/70 via-sky-200/60 to-transparent blur-3xl dark:from-emerald-500/30 dark:via-sky-500/30" aria-hidden />
        <Navbar />

        <main className="relative z-10">
          <section id="home" className="relative overflow-hidden pb-24 pt-36">
            <Layout>
              <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center">
                <div className="space-y-8">
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70 dark:text-slate-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Software developer
                  </span>
                  <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight dark:text-white">
                    Building digital experiences
                    <br className="hidden sm:block" />
                    <span className="text-emerald-500 dark:text-emerald-300">with calm energy.</span>
                  </h1>
                  <p className="max-w-2xl text-base text-slate-600 sm:text-lg dark:text-slate-300">
                    I&apos;m Trio Nugroho, a product-focused engineer crafting minimal, modern interfaces
                    that feel effortless to use. From startup dashboards to marketing sites, I help teams ship fast
                    without sacrificing polish.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="#recent"
                      className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                    >
                      See recent work
                    </a>
                    <a
                      href="mailto:trionugroho05@gmail.com"
                      className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:border-slate-700 dark:bg-transparent dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white"
                    >
                      Collaborate with me
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 p-8 shadow-lg shadow-emerald-200/30 backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/70 dark:shadow-black/40">
                    <div className="pointer-events-none absolute -top-32 right-10 h-64 w-64 rounded-full bg-emerald-200/60 blur-3xl dark:bg-emerald-500/20" aria-hidden />
                    <div className="relative flex flex-col items-center gap-6 text-center">
                      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                        Currently @ Metropolitan Land
                      </div>
                      <div className="relative h-40 w-40 overflow-hidden rounded-full border border-white/60 bg-slate-900/80 shadow-inner">
                        <Image
                          src="/images/memoji/peace.png"
                          alt="Trio Nugroho memoji"
                          fill
                          className="object-contain"
                          sizes="160px"
                          priority
                        />
                      </div>
                      <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-300">
                        Helping businesses design and ship thoughtful digital products with a balance of
                        aesthetics, accessibility, and performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 grid gap-4 sm:grid-cols-3">
                {highlights.map((highlight) => (
                  <div
                    key={highlight.title}
                    className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-black/30"
                  >
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{highlight.title}</h3>
                    <p className="mt-3 text-sm text-slate-500 dark:text-slate-300">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </Layout>
          </section>

          <section id="recent" className="relative py-24">
            <div className="pointer-events-none absolute left-[-10%] top-0 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-500/20" aria-hidden />
            <Layout>
              <div className="mb-12 max-w-2xl space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:border-slate-800/80 dark:bg-slate-900/70 dark:text-slate-300">
                  Selected work
                </span>
                <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-white">
                  A glimpse at recent collaborations & explorations
                </h2>
                <p className="text-base text-slate-600 dark:text-slate-300">
                  Interfaces, dashboards, and immersive marketing pages crafted with a focus on clarity,
                  calm motion, and measurable impact.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-black/20 sm:p-6">
                <Slider />
              </div>
            </Layout>
          </section>

          <section id="about" className="relative py-24">
            <div className="pointer-events-none absolute right-[-15%] top-10 h-72 w-72 rounded-full bg-emerald-200/50 blur-3xl dark:bg-emerald-500/20" aria-hidden />
            <Layout>
              <div className="mb-12 flex flex-col gap-3">
                <span className="inline-flex w-max items-center gap-2 rounded-full border border-slate-200/80 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:border-slate-800/80 dark:bg-slate-900/60 dark:text-slate-300">
                  About & experience
                </span>
                <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-white">
                  Design-led engineering with a collaborative mindset
                </h2>
                <p className="max-w-2xl text-base text-slate-600 dark:text-slate-300">
                  From planning to production, I partner closely with teams to bring product ideas to life—balancing
                  aesthetics, accessibility, and performance at every step.
                </p>
              </div>
              <Experience />
            </Layout>
          </section>

          <section id="contact" className="relative pb-32">
            <Layout>
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-emerald-100 via-white to-sky-100 p-10 text-center shadow-lg shadow-emerald-200/40 dark:border-slate-800 dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 dark:shadow-black/40 sm:p-16">
                <span className="inline-flex items-center justify-center rounded-full border border-emerald-300 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:border-emerald-500/50 dark:bg-emerald-500/10 dark:text-emerald-200">
                  Let&apos;s build something
                </span>
                <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-white">
                  Ready to bring a calm, modern product to life?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-300">
                  Whether you need a partner for a new product, a refresh of an existing experience, or an extra set of hands on your team,
                  let&apos;s chat about how we can collaborate.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a
                    href="mailto:trionugroho05@gmail.com"
                    className="inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                  >
                    Start a project
                  </a>
                  <a
                    href="https://www.linkedin.com/in/trionugroho/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:border-slate-700 dark:bg-transparent dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </Layout>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
