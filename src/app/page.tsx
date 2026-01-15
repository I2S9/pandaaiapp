import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <main className="px-6">
        <section className="mx-auto flex w-full max-w-6xl flex-col items-start pb-28 pl-2 pt-20 text-left sm:pl-4 sm:pt-28">
          <h1 className="text-5xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-7xl">
            Learn Smart,
            <br />
            Remember Forever
          </h1>
          <div className="mt-6 h-1.5 w-48 rounded-full bg-[#DDBDFD] sm:w-64" />
          <p className="mt-7 max-w-2xl text-xl text-zinc-600 sm:text-2xl">
            Turn any content into smart flashcards, get instant AI feedback, and
            study the Panda way with a calm, focused loop of practice and
            review.
          </p>
          <a
            href="#auth"
            className="mt-12 rounded-full bg-[#DDBDFD] px-10 py-3.5 text-lg font-semibold text-white shadow-sm transition hover:shadow-md"
          >
            Sign in to start
          </a>
        </section>

        <section
          id="features"
          className="mx-auto w-full max-w-5xl border-t border-zinc-100 py-16"
        >
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-100 bg-zinc-50 p-7">
              <h2 className="text-xl font-semibold">Smart flashcards</h2>
              <p className="mt-3 text-base text-zinc-600">
                Generate active recall cards from any document and review them
                with spaced repetition hints.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-100 bg-zinc-50 p-7">
              <h2 className="text-xl font-semibold">Adaptive quizzes</h2>
              <p className="mt-3 text-base text-zinc-600">
                Practice with instant feedback and explanations that adjust to
                your current level.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-100 bg-zinc-50 p-7">
              <h2 className="text-xl font-semibold">Focused exam mode</h2>
              <p className="mt-3 text-base text-zinc-600">
                Simulate tests, track mastery by topic, and see what to review
                next.
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
