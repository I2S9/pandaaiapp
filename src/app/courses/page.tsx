import Image from "next/image";
import Navbar from "@/components/Navbar";

const subjects = [
  {
    id: "math",
    title: "Mathematics",
    description:
      "Build step-by-step mastery with guided practice and clear feedback.",
  },
  {
    id: "biology",
    title: "Biology",
    description:
      "Turn complex systems into simple recall loops with targeted quizzes.",
  },
  {
    id: "history",
    title: "History",
    description:
      "Review timelines and key concepts with structured recall prompts.",
  },
  {
    id: "economics",
    title: "Economics",
    description:
      "Practice definitions, graphs, and reasoning with quick checkpoints.",
  },
  {
    id: "cs",
    title: "Computer Science",
    description:
      "Focus on algorithms and key ideas with guided explanations.",
  },
  {
    id: "literature",
    title: "Literature",
    description:
      "Study themes, characters, and quotes with active recall.",
  },
];

export default function CoursesPage() {
  const homePath = "/";

  return (
    <div id="top" className="min-h-screen bg-white">
      <Navbar basePath="/" />
      <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-16">
        <section>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Courses
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-zinc-900 sm:text-5xl">
            Study paths built around your subjects.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
            Pick a subject to see how PandaAi structures practice, feedback, and
            review into a consistent routine.
          </p>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              id={subject.id}
              className="rounded-[24px] border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-zinc-900">
                {subject.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-zinc-600">
                {subject.description}
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
