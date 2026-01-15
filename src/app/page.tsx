import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <main className="px-6">
        <section className="mx-auto flex w-full max-w-6xl flex-col items-start pb-28 pl-2 pt-20 text-left sm:pl-4 sm:pt-28">
          <div className="inline-flex flex-col items-start">
            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-7xl">
              Learn Smart,
              <br />
              Remember Forever
            </h1>
            <div className="mt-3 h-2.5 w-full bg-[#DDBDFD]" />
          </div>
          <p className="mt-7 max-w-2xl text-xl text-zinc-600 sm:text-2xl">
            Turn any content into smart flashcards, get instant AI feedback, and
            study the Panda way with a calm, focused loop of practice and
            review.
          </p>
          <a
            href="#auth"
            className="mt-8 inline-flex items-center justify-center rounded-2xl bg-[#DDBDFD] px-10 py-3.5 text-lg font-semibold text-white shadow-[0_6px_0_#A27BD8] transition-all hover:translate-y-0.5 hover:shadow-[0_4px_0_#A27BD8] active:translate-y-1 active:shadow-[0_2px_0_#A27BD8]"
          >
            Get Started Free
          </a>
        </section>

        <section
          id="features"
          className="mx-auto w-full max-w-6xl border-t border-zinc-100 py-14"
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-zinc-200 bg-white px-5 py-6 shadow-sm">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500">
                <span className="h-2.5 w-2.5 rounded-full bg-[#7C86FF]" />
                Trusted scale
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-zinc-900">#1</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                Choice of 400,000+ students and teachers from 180+ countries.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-white px-5 py-6 shadow-sm">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500">
                <span className="h-2.5 w-2.5 rounded-full bg-[#7BC7A3]" />
                Learner preference
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-zinc-900">86%</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                Prefer PandaAi over other resources according to surveys.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-white px-5 py-6 shadow-sm">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500">
                <span className="h-2.5 w-2.5 rounded-full bg-[#BBA7FF]" />
                Stress reduction
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-zinc-900">92%</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                Experience less exam stress with complete preparation.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-white px-5 py-6 shadow-sm">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFB86B]" />
                Student satisfaction
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-zinc-900">82%</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                Say studying is enjoyable, affordable, and effective.
              </p>
            </div>
          </div>
        </section>

        <section
          id="tutoring"
          className="mx-auto w-full max-w-5xl border-t border-zinc-100 py-16"
        >
          <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <h2 className="text-3xl font-semibold">AI tutoring that guides</h2>
              <p className="mt-4 text-base text-zinc-600 sm:text-lg">
                Panda Coach starts with hints, then asks targeted follow-up
                questions to unlock understanding without giving away the
                answer.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-100 bg-white p-7 shadow-sm">
              <p className="text-base font-semibold text-zinc-900">
                Hint-first support
              </p>
              <p className="mt-3 text-base text-zinc-600">
                Get a guided path for each concept with short, focused prompts
                that help you connect the dots.
              </p>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="mx-auto w-full max-w-5xl border-t border-zinc-100 py-16"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-zinc-100 bg-zinc-50 p-7">
              <h2 className="text-xl font-semibold">Free trial loop</h2>
              <p className="mt-3 text-base text-zinc-600">
                Generate a limited set of flashcards, quizzes, and summaries to
                experience the full study cycle.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-semibold">Premium expansion</h2>
              <p className="mt-3 text-base text-zinc-600">
                Unlock higher limits, advanced analytics, and more tutoring
                sessions.
              </p>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mx-auto w-full max-w-5xl border-t border-zinc-100 py-16"
        >
          <div className="rounded-3xl border border-zinc-100 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-semibold">About PandaAi</h2>
            <p className="mt-4 text-base text-zinc-600 sm:text-lg">
              PandaAi turns your own materials into a structured study loop of
              practice, feedback, and review with a calm, minimal interface.
            </p>
          </div>
        </section>

        <section
          id="auth"
          className="mx-auto w-full max-w-5xl border-t border-zinc-100 py-16"
        >
          <div className="rounded-3xl border border-zinc-100 bg-zinc-50 p-8 text-center">
            <h2 className="text-3xl font-semibold">Get started</h2>
            <p className="mt-4 text-base text-zinc-600 sm:text-lg">
              Authentication is not enabled yet. This demo focuses on the study
              experience and content flow.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                className="rounded-full border border-zinc-200 px-7 py-3.5 text-base font-semibold text-zinc-900"
              >
                Login
              </button>
              <button
                type="button"
                className="rounded-full bg-[#DDBDFD] px-7 py-3.5 text-base font-semibold text-white shadow-sm"
              >
                Sign Up
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
