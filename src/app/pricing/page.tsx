"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const isYearly = billing === "yearly";

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <main className="px-6">
        <section className="mx-auto grid w-full max-w-6xl gap-10 py-16 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h1 className="text-4xl font-bold leading-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              One subscription,
              <br />
              <span className="relative inline-block whitespace-nowrap text-zinc-900">
                all your study needs.
                <span className="absolute left-0 top-full mt-2 h-2.5 w-full bg-[#DDBDFD]" />
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-base text-zinc-600 sm:text-lg">
              Build your full study loop in one place: flashcards, quizzes,
              summaries, and exam practice with adaptive guidance.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                {
                  value: "#1",
                  text: "Chosen by students and educators across 180+ countries.",
                },
                {
                  value: "86%",
                  text: "Prefer PandaAi over other study resources in surveys.",
                },
                {
                  value: "92%",
                  text: "Report lower exam stress with structured prep.",
                },
                {
                  value: "82%",
                  text: "Say studying feels more enjoyable and effective.",
                },
              ].map((item) => (
                <div
                  key={item.value}
                  className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-2xl font-semibold text-zinc-900">
                    {item.value}
                  </p>
                  <p className="mt-3 text-sm text-zinc-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-4xl pb-20">
          <div className="text-center">
            <h2 className="text-4xl font-semibold text-zinc-900 sm:text-5xl">
              Pricing
            </h2>
            <p className="mt-3 text-lg text-zinc-600">
              Simple plans. Real learning results.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-white p-2 shadow-sm">
              <button
                type="button"
                onClick={() => setBilling("monthly")}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  !isYearly
                    ? "bg-[#DDBDFD] text-white"
                    : "text-zinc-700 hover:bg-zinc-100"
                }`}
                aria-pressed={!isYearly}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBilling("yearly")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isYearly
                    ? "bg-[#DDBDFD] text-white"
                    : "text-zinc-700 hover:bg-zinc-100"
                }`}
                aria-pressed={isYearly}
              >
                Yearly (20% off)
              </button>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="flex h-full min-h-[560px] flex-col justify-between rounded-3xl border border-[#DDBDFD] bg-white p-7 shadow-[0_8px_24px_rgba(155,120,230,0.15)]">
              <div className="space-y-4">
                <p className="text-xl font-semibold text-zinc-900">Free</p>
                <p className="text-4xl font-semibold text-zinc-900">
                  0 €{" "}
                  <span className="text-base font-medium text-zinc-500">
                    / month
                  </span>
                </p>
                <p className="text-base text-zinc-600">
                  For discovering smarter studying.
                </p>
                <ul className="space-y-3 text-base text-zinc-700">
                  <li>
                    <span className="font-semibold text-zinc-900">1 course</span>
                  </li>
                  <li>
                    Flashcards &amp; quizzes{" "}
                    <span className="text-zinc-500">(limited)</span>
                  </li>
                  <li>1 exam mode</li>
                  <li>Basic AI coach</li>
                  <li>Progress dashboard</li>
                </ul>
              </div>
              <button
                type="button"
                className="mt-6 w-full rounded-2xl bg-[#DDBDFD] px-6 py-3 text-base font-semibold text-white shadow-[0_6px_0_#A27BD8] transition-all hover:translate-y-0.5 hover:shadow-[0_4px_0_#A27BD8] active:translate-y-1 active:shadow-[0_2px_0_#A27BD8]"
              >
                Get started for free
              </button>
            </div>

            <div className="relative flex h-full min-h-[560px] flex-col justify-between rounded-3xl bg-[#DDBDFD] p-7 text-white shadow-[0_12px_28px_rgba(155,120,230,0.25)]">
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 rounded-full border-2 border-zinc-200 bg-white px-8 py-2 text-base font-semibold text-zinc-900 shadow-sm">
                Most popular
              </span>
              <div className="space-y-4">
                <p className="text-xl font-semibold">Premium</p>
                <p className="text-4xl font-semibold">
                  {isYearly ? (
                    "79 € / year"
                  ) : (
                    <>
                      9.99 €{" "}
                      <span className="text-base font-medium text-white/80">
                        / month
                      </span>
                    </>
                  )}
                </p>
                <p className="text-base text-white/90">
                  For serious exam preparation.
                </p>
                <ul className="space-y-3 text-base text-white">
                  <li>
                    <span className="font-semibold text-white">
                      Unlimited courses
                    </span>
                  </li>
                  <li>Unlimited flashcards &amp; quizzes</li>
                  <li>Unlimited exam mode</li>
                  <li>Advanced AI coach</li>
                  <li>Study plans &amp; spaced repetition</li>
                  <li>Detailed progress analytics</li>
                </ul>
              </div>
              <button
                type="button"
                className="mt-6 w-full rounded-2xl bg-white px-6 py-3 text-base font-semibold text-zinc-900 shadow-[0_6px_0_rgba(255,255,255,0.6)] transition-all hover:translate-y-0.5 hover:shadow-[0_4px_0_rgba(255,255,255,0.6)] active:translate-y-1 active:shadow-[0_2px_0_rgba(255,255,255,0.6)]"
              >
                Go Premium
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full px-6 pb-6">
        <div className="w-full rounded-[28px] bg-[#DDBDFD]">
          <div className="mx-auto w-full max-w-6xl px-8 py-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-end">
              <div className="lg:self-end">
                <p className="text-xl font-semibold text-white">PandaAi</p>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-white/90">
                  Temporary footer copy. Replace with company details and a
                  short product statement before launch.
                </p>
              </div>
              <div className="flex w-full flex-col items-start lg:items-end">
                <div className="flex w-full flex-col gap-8 sm:flex-row sm:justify-end">
                  <div className="lg:justify-self-start">
                    <p className="text-base font-semibold tracking-wide text-white/80">
                      Product
                    </p>
                    <div className="mt-4 flex flex-col gap-2 text-base text-white/90">
                      <a href="/#features" className="transition hover:text-white">
                        Features
                      </a>
                      <a href="/#tutoring" className="transition hover:text-white">
                        AI Tutoring
                      </a>
                      <a href="/pricing" className="transition hover:text-white">
                        Pricing
                      </a>
                    </div>
                  </div>
                  <div className="lg:justify-self-start">
                    <p className="text-base font-semibold tracking-wide text-white/80">
                      Company
                    </p>
                    <div className="mt-4 flex flex-col gap-2 text-base text-white/90">
                      <a href="/#about" className="transition hover:text-white">
                        About
                      </a>
                      <a href="/#top" className="transition hover:text-white">
                        Back to top
                      </a>
                      <a href="/#top" className="transition hover:text-white">
                        Contact
                      </a>
                    </div>
                  </div>
                  <div className="lg:justify-self-start">
                    <p className="text-base font-semibold tracking-wide text-white/80">
                      Legal
                    </p>
                    <div className="mt-4 flex flex-col gap-2 text-base text-white/90">
                      <a href="/#top" className="transition hover:text-white">
                        Privacy
                      </a>
                      <a href="/#top" className="transition hover:text-white">
                        Terms
                      </a>
                      <a href="/#top" className="transition hover:text-white">
                        Support
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 border-t border-white/25 pt-6 text-center text-base text-white/80">
              © 2026 PandaAi. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
