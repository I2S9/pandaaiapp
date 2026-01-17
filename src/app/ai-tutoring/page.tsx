import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function AiTutoringPage() {
  const homePath = "/";

  return (
    <div id="top" className="min-h-screen bg-white">
      <Navbar basePath="/" />
      <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-16">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
              AI Tutoring
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-zinc-900 sm:text-5xl">
              Hint-first guidance that builds real understanding.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600">
              Panda Coach supports study sessions with targeted hints, short
              explanations, and follow-up questions. It keeps learners engaged
              without giving away answers so progress feels earned and lasting.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/pricing"
                className="rounded-2xl bg-[#DDBDFD] px-6 py-3 text-base font-semibold text-white shadow-sm"
              >
                Start with Panda Coach
              </a>
              <a
                href={`${homePath}#features`}
                className="rounded-2xl border border-zinc-200 px-6 py-3 text-base font-semibold text-zinc-900"
              >
                Explore the full loop
              </a>
            </div>
          </div>
          <div className="rounded-[28px] border border-zinc-200 bg-zinc-50 p-8">
            <h2 className="text-2xl font-semibold text-zinc-900">
              How it works
            </h2>
            <ol className="mt-6 space-y-4 text-base text-zinc-600">
              <li>
                Starts with hints and quick prompts that guide the next step.
              </li>
              <li>
                Adds targeted questions to check understanding, not memorization.
              </li>
              <li>
                Summarizes the key idea and suggests what to review next.
              </li>
            </ol>
          </div>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Context-aware tutoring",
              body:
                "The coach uses your uploaded materials to stay aligned with the course content and terminology.",
            },
            {
              title: "Immediate feedback",
              body:
                "Explanations arrive right after each response so learners can correct gaps quickly.",
            },
            {
              title: "Adaptive follow-ups",
              body:
                "If a student hesitates, the coach narrows the scope and asks smaller questions.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[24px] border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-zinc-900">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-zinc-600">
                {item.body}
              </p>
            </div>
          ))}
        </section>
      </main>

      <footer className="w-full px-6 pb-6">
        <div className="w-full rounded-[28px] bg-[#DDBDFD]">
          <div className="mx-auto w-full max-w-6xl px-6 py-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-end">
              <div className="lg:self-end">
                <div className="flex flex-col items-start">
                  <Image
                    src="/assets/images/logo.png"
                    alt="PandaAi logo"
                    width={88}
                    height={88}
                    className="ml-[-16px] h-[88px] w-[88px] rounded-2xl object-contain"
                    quality={100}
                  />
                  <p className="mt-2 text-xl font-semibold text-zinc-900">
                    PandaAi
                  </p>
                </div>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-zinc-900">
                  Temporary footer copy. Replace with company details and a
                  short product statement before launch.
                </p>
              </div>
              <div className="flex w-full flex-col items-start lg:items-end">
                <div className="flex w-full flex-col gap-8 sm:flex-row sm:justify-end">
                  <div className="lg:justify-self-start">
                    <p className="text-base font-semibold tracking-wide text-zinc-900">
                      Product
                    </p>
                    <div className="mt-4 flex flex-col gap-2 text-base text-zinc-900">
                      <a
                        href={`${homePath}#features`}
                        className="transition hover:text-zinc-700"
                      >
                        Features
                      </a>
                      <a
                        href={`${homePath}#tutoring`}
                        className="transition hover:text-zinc-700"
                      >
                        AI Tutoring
                      </a>
                      <a
                        href="/pricing"
                        className="transition hover:text-zinc-700"
                      >
                        Pricing
                      </a>
                    </div>
                  </div>
                  <div className="lg:justify-self-start">
                    <p className="text-base font-semibold tracking-wide text-zinc-900">
                      Company
                    </p>
                    <div className="mt-4 flex flex-col gap-2 text-base text-zinc-900">
                      <a
                        href={`${homePath}#about`}
                        className="transition hover:text-zinc-700"
                      >
                        About
                      </a>
                      <a
                        href={`${homePath}#top`}
                        className="transition hover:text-zinc-700"
                      >
                        Back to top
                      </a>
                      <a
                        href={`${homePath}#top`}
                        className="transition hover:text-zinc-700"
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                  <div className="lg:justify-self-start">
                    <p className="text-base font-semibold tracking-wide text-zinc-900">
                      Legal
                    </p>
                    <div className="mt-4 flex flex-col gap-2 text-base text-zinc-900">
                      <a
                        href={`${homePath}#top`}
                        className="transition hover:text-zinc-700"
                      >
                        Privacy
                      </a>
                      <a
                        href={`${homePath}#top`}
                        className="transition hover:text-zinc-700"
                      >
                        Terms
                      </a>
                      <a
                        href={`${homePath}#top`}
                        className="transition hover:text-zinc-700"
                      >
                        Support
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 border-t border-zinc-900/20 pt-6 text-center text-base text-zinc-900">
              © 2026 PandaAi. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
