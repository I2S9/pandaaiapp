"use client";

import { useState } from "react";

type NavLink = {
  label: string;
  href: string;
  hasChevron?: boolean;
};

type LanguageOption = {
  label: string;
  href: string;
};

type NavbarProps = {
  navLinks?: NavLink[];
  language?: {
    label: string;
    options: LanguageOption[];
  };
  basePath?: string;
};

const defaultLanguage = {
  label: "Language",
  options: [
    { label: "Français", href: "/fr" },
    { label: "English", href: "/" },
  ],
};

type FeatureItem = {
  label: string;
  href: string;
  icon: "coach" | "cards" | "quiz" | "exam" | "lofi" | "notes";
  description: string;
};

export default function Navbar({
  navLinks,
  language = defaultLanguage,
  basePath = "/",
}: NavbarProps) {
  const resolvedNavLinks: NavLink[] =
    navLinks ??
    [
      { label: "Features", href: `${basePath}#features`, hasChevron: true },
      { label: "AI Tutoring", href: `${basePath}#tutoring` },
      {
        label: "Pricing",
        href: basePath === "/" ? "/pricing" : `${basePath}/pricing`,
      },
      { label: "About us", href: `${basePath}#about` },
    ];

  const featureItems: FeatureItem[] = [
    {
      label: "Panda Coach",
      href: `${basePath}#tutoring`,
      icon: "coach",
      description: "AI-powered study buddy",
    },
    {
      label: "Spaced Repetition",
      href: `${basePath}#features`,
      icon: "lofi",
      description: "Memorize smarter, not harder",
    },
    {
      label: "Smart Notes",
      href: `${basePath}#features`,
      icon: "notes",
      description: "Turn content into bite-sized notes",
    },
    {
      label: "Flashcards",
      href: `${basePath}#features`,
      icon: "cards",
      description: "Active recall with quick reviews",
    },
    {
      label: "Quiz Generator",
      href: `${basePath}#features`,
      icon: "quiz",
      description: "Auto-generate quizzes from docs",
    },
    {
      label: "Exam Mode",
      href: `${basePath}#features`,
      icon: "exam",
      description: "Practice exams under timed mode",
    },
  ];

  const pastelClasses: Record<FeatureItem["icon"], string> = {
    coach: "bg-[#E9E3FF]",
    cards: "bg-[#DDEBFF]",
    quiz: "bg-[#DFF6E4]",
    exam: "bg-[#FFE8D4]",
    lofi: "bg-[#F1E3FF]",
    notes: "bg-[#FFE4F0]",
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-zinc-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <a href={`${basePath}#top`} className="flex items-center gap-4">
          <span
            aria-hidden="true"
            className="h-10 w-10 rounded-2xl bg-[#DDBDFD]"
          />
          <span className="text-xl font-semibold text-zinc-900">PandaAi</span>
        </a>

        <nav className="hidden items-center gap-2 text-base font-semibold text-zinc-500 md:flex">
          {resolvedNavLinks.map((link) =>
            link.hasChevron && link.href.includes("#features") ? (
              <div key={link.href} className="group relative">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-full px-4 py-2 transition hover:bg-zinc-200 hover:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300"
                  aria-haspopup="true"
                >
                  {link.label}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 12 12"
                    className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                    fill="none"
                  >
                    <path
                      d="M2.5 4.75 6 8.25l3.5-3.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="invisible absolute left-1/2 top-full z-10 mt-2 w-[440px] -translate-x-1/2 rounded-2xl border border-zinc-200 bg-white p-4 text-sm text-zinc-600 shadow-sm opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {featureItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-start gap-3 rounded-xl px-3 py-2 transition hover:bg-zinc-100"
                      >
                        <span
                          className={`h-8 w-8 rounded-lg ${pastelClasses[item.icon]}`}
                        />
                        <span>
                          <span className="block whitespace-nowrap text-sm font-semibold text-zinc-900">
                            {item.label}
                          </span>
                          <span className="mt-1 block text-xs text-zinc-500">
                            {item.description}
                          </span>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1 rounded-full px-4 py-2 transition hover:bg-zinc-200 hover:text-zinc-600"
              >
                {link.label}
                {link.hasChevron ? (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 12 12"
                    className="h-3 w-3"
                    fill="none"
                  >
                    <path
                      d="M2.5 4.75 6 8.25l3.5-3.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : null}
              </a>
            ),
          )}
          <div className="group relative">
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-full px-4 py-2 transition hover:bg-zinc-200 hover:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300"
              aria-haspopup="true"
            >
              {language.label}
              <svg
                aria-hidden="true"
                viewBox="0 0 12 12"
                className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                fill="none"
              >
                <path
                  d="M2.5 4.75 6 8.25l3.5-3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="invisible absolute left-1/2 top-full z-10 mt-2 w-36 -translate-x-1/2 rounded-2xl border border-zinc-200 bg-white p-2 text-sm text-zinc-600 shadow-sm opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              {language.options.map((option) => (
                <a
                  key={option.href}
                  href={option.href}
                  className="block rounded-xl px-3 py-2 transition hover:bg-zinc-100"
                >
                  {option.label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#auth"
            className="rounded-2xl border border-zinc-200 px-5 py-2.5 text-base font-semibold text-zinc-900 hover:border-zinc-300"
          >
            Login
          </a>
          <a
            href="#auth"
            className="rounded-2xl bg-[#DDBDFD] px-5 py-2.5 text-base font-semibold text-white shadow-sm"
          >
            Sign Up
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-zinc-200 p-2 text-zinc-700 hover:border-zinc-300 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="block h-0.5 w-5 bg-current" />
          <span className="mt-1 block h-0.5 w-5 bg-current" />
          <span className="mt-1 block h-0.5 w-5 bg-current" />
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-zinc-100 bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4 text-base font-semibold text-zinc-500">
          {resolvedNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1 rounded-full px-4 py-2 transition hover:bg-zinc-200 hover:text-zinc-600"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
                {link.hasChevron ? (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 12 12"
                    className="h-3 w-3"
                    fill="none"
                  >
                    <path
                      d="M2.5 4.75 6 8.25l3.5-3.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : null}
              </a>
            ))}
            <div className="rounded-2xl border border-zinc-200 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                {language.label}
              </p>
              <div className="mt-2 flex flex-col gap-1">
                {language.options.map((option) => (
                  <a
                    key={option.href}
                    href={option.href}
                    className="rounded-xl px-3 py-2 text-sm font-semibold text-zinc-600 transition hover:bg-zinc-100"
                    onClick={() => setIsOpen(false)}
                  >
                    {option.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#auth"
                className="rounded-2xl border border-zinc-200 px-5 py-2.5 text-base font-semibold text-zinc-900"
                onClick={() => setIsOpen(false)}
              >
                Login
              </a>
              <a
                href="#auth"
                className="rounded-2xl bg-[#DDBDFD] px-5 py-2.5 text-base font-semibold text-white shadow-sm"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
