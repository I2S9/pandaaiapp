"use client";

import { useState } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "AI Tutoring", href: "#tutoring" },
  { label: "Pricing", href: "#pricing" },
  { label: "About us", href: "#about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-zinc-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-4">
          <span
            aria-hidden="true"
            className="h-10 w-10 rounded-2xl bg-[#DDBDFD]"
          />
          <span className="text-xl font-semibold text-zinc-900">PandaAi</span>
        </a>

        <nav className="hidden items-center gap-8 text-base font-semibold text-zinc-500 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-zinc-700">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#auth"
            className="rounded-full border border-zinc-200 px-5 py-2.5 text-base font-semibold text-zinc-900 hover:border-zinc-300"
          >
            Login
          </a>
          <a
            href="#auth"
            className="rounded-full bg-[#DDBDFD] px-5 py-2.5 text-base font-semibold text-white shadow-sm"
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
          <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 text-base font-semibold text-zinc-500">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-zinc-700"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#auth"
                className="rounded-full border border-zinc-200 px-5 py-2.5 text-base font-semibold text-zinc-900"
                onClick={() => setIsOpen(false)}
              >
                Login
              </a>
              <a
                href="#auth"
                className="rounded-full bg-[#DDBDFD] px-5 py-2.5 text-base font-semibold text-white shadow-sm"
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
