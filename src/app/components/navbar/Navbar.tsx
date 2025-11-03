"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LuMoon, LuSunMedium } from "react-icons/lu";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#recent", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="pointer-events-none fixed inset-x-0 top-6 z-40 flex justify-center px-4">
      <div
        className={`pointer-events-auto flex w-full max-w-4xl items-center gap-6 rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-sm font-medium text-slate-600 backdrop-blur transition-all duration-300 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300 ${
          isScrolled ? "shadow-lg shadow-slate-900/5 dark:shadow-black/30" : ""
        }`}
      >
        <Link
          href="#home"
          className="flex items-center gap-2 text-base font-semibold text-slate-900 transition-colors hover:text-slate-600 dark:text-white dark:hover:text-slate-300"
        >
          <span>ntrio</span>
          <span className="text-slate-400 dark:text-slate-500">dev</span>
        </Link>

        <ul className="hidden flex-1 items-center justify-center gap-5 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-3 py-1.5 text-sm text-slate-500 transition-colors hover:bg-slate-200/60 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/70 dark:hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-white sm:inline-flex"
          >
            Let&apos;s talk
          </Link>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-white"
          >
            {resolvedTheme === "dark" ? <LuSunMedium size={18} /> : <LuMoon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
