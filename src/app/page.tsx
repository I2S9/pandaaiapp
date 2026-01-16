import Navbar from "@/components/Navbar";

export default function Home() {
  const testimonials = [
    {
      name: "Maya Turner",
      role: "Biology student",
      prefix:
        "My weekly review plan kept me consistent across lectures and labs. ",
      highlight: "I raised my score by 18 points",
      suffix:
        " before finals and finally felt confident in the exam room. The feedback helped me fix weak spots fast.",
    },
    {
      name: "Daniel Ruiz",
      role: "Engineering major",
      prefix:
        "The flashcards were precise and fast to review between classes. ",
      highlight: "My retention improved",
      suffix:
        " and I stopped re-reading the same chapters over and over. The quizzes kept me honest.",
    },
    {
      name: "Leah Brooks",
      role: "History student",
      prefix:
        "Exam Mode helped me pace long answers without panicking. ",
      highlight: "I finished with time to spare",
      suffix:
        " and my essays were sharper because I practiced the format. The timing felt realistic.",
    },
    {
      name: "Omar Ali",
      role: "Pre-med",
      prefix:
        "The AI coach nudged me with hints instead of giving away answers. ",
      highlight: "I understood the why",
      suffix:
        " behind each concept and my practice scores climbed. It felt like real tutoring.",
    },
    {
      name: "Sofia Martin",
      role: "Law student",
      prefix:
        "Summaries turned dense cases into clear, usable briefs. ",
      highlight: "Studying felt calmer",
      suffix:
        " and I could focus on argument structure instead of memorizing. I saved hours each week.",
    },
    {
      name: "Ethan Park",
      role: "Economics",
      prefix:
        "Quizzes matched my difficulty level and revealed weak spots fast. ",
      highlight: "I improved accuracy",
      suffix:
        " after a few sessions and my midterm was the best yet. The explanations were clear.",
    },
    {
      name: "Julia Chen",
      role: "Psychology",
      prefix:
        "Spaced repetition reminders were perfectly timed for my schedule. ",
      highlight: "I stopped forgetting",
      suffix:
        " key definitions and finally felt ahead of the curve. It removed the guesswork.",
    },
    {
      name: "Noah Lewis",
      role: "Chemistry",
      prefix:
        "I imported my notes and everything was organized by topic. ",
      highlight: "My prep time dropped",
      suffix:
        " by half and I still covered more material than usual. The sections made review easy.",
    },
    {
      name: "Ava Patel",
      role: "Computer science",
      prefix:
        "The study loop kept me consistent across projects and theory. ",
      highlight: "I finished the syllabus early",
      suffix:
        " and used the extra time to practice harder problems. It kept me accountable.",
    },
  ];

  const columns = [
    testimonials.slice(0, 3),
    testimonials.slice(3, 6),
    testimonials.slice(6, 9),
  ];
  const featureShowcase = [
    {
      title: "Smart Flashcards",
      description:
        "Create active recall cards from any document and review them in minutes.",
      color: "bg-[#EDE7FF]",
    },
    {
      title: "Focused Summaries",
      description:
        "Turn long chapters into clear study notes you can scan before exams.",
      color: "bg-[#E8F1FF]",
    },
    {
      title: "Adaptive Quizzes",
      description:
        "Practice with instant feedback and explanations that adapt to your level.",
      color: "bg-[#E7F6EC]",
    },
    {
      title: "Exam Mode",
      description:
        "Simulate test conditions, manage timing, and track mastery by topic.",
      color: "bg-[#FFEFE1]",
    },
    {
      title: "Panda Coach",
      description:
        "Hints-first tutoring that builds understanding instead of giving answers.",
      color: "bg-[#F2E7FF]",
    },
    {
      title: "Course Structure",
      description:
        "Organize uploads into sections and goals for a clean study path.",
      color: "bg-[#EAF5FF]",
    },
    {
      title: "Progress Dashboard",
      description:
        "See accuracy, streaks, and mastery by topic at a glance.",
      color: "bg-[#F1F7E8]",
    },
    {
      title: "Study Plans",
      description:
        "Plan review sessions with spaced repetition and clear reminders.",
      color: "bg-[#FFF2E9]",
    },
    {
      title: "Smart Notes",
      description:
        "Capture key ideas in clean, shareable notes that stay organized.",
      color: "bg-[#F7E9F1]",
    },
    {
      title: "Exam Insights",
      description:
        "Get breakdowns of strengths and gaps after every practice exam.",
      color: "bg-[#E8F0FF]",
    },
  ];
  const avatarColors = ["bg-[#D9F3E3]", "bg-[#F9D6E4]", "bg-[#FFF1BF]", "bg-[#DCE8FF]"];

  return (
    <div
      id="top"
      className="flex min-h-screen flex-col bg-white text-zinc-900"
    >
      <Navbar />
      <main className="flex-1 px-6">
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
          className="mx-auto w-full max-w-5xl border-t border-zinc-100 pb-0 pt-16"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <div className="w-full max-w-[200px] rounded-3xl border border-zinc-200 bg-white px-5 py-6 shadow-sm">
              <div className="flex items-center gap-3">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-[#7C86FF]"
                  fill="none"
                >
                  <path
                    d="M4 15.5h3.5M4 19h7M4 12h6M4 8.5h9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <h3 className="text-4xl font-semibold text-zinc-900">#1</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                Choice of 400,000+ students and teachers from 180+ countries.
              </p>
            </div>
            <div className="w-full max-w-[200px] rounded-3xl border border-zinc-200 bg-white px-5 py-6 shadow-sm">
              <div className="flex items-center gap-3">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-[#7BC7A3]"
                  fill="none"
                >
                  <path
                    d="M4 12h5.5M4 7.5h9M4 16.5h8.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="18"
                    cy="12"
                    r="3.5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                <h3 className="text-4xl font-semibold text-zinc-900">86%</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                Prefer PandaAi over other resources according to surveys.
              </p>
            </div>
            <div className="w-full max-w-[200px] rounded-3xl border border-zinc-200 bg-white px-5 py-6 shadow-sm">
              <div className="flex items-center gap-3">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-[#BBA7FF]"
                  fill="none"
                >
                  <path
                    d="M6 9c2 2 4 3 6 3s4-1 6-3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 16c2 1.5 6 1.5 8 0"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <h3 className="text-4xl font-semibold text-zinc-900">92%</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                Experience less exam stress with complete preparation.
              </p>
            </div>
            <div className="w-full max-w-[200px] rounded-3xl border border-zinc-200 bg-white px-5 py-6 shadow-sm">
              <div className="flex items-center gap-3">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-[#FFB86B]"
                  fill="none"
                >
                  <path
                    d="M12 4v4M12 16v4M4 12h4M16 12h4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                <h3 className="text-4xl font-semibold text-zinc-900">82%</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                Say studying is enjoyable, affordable, and effective.
              </p>
            </div>
          </div>
          <div className="mb-8 mt-8 flex w-full justify-center">
            <a
              href="#auth"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-8 py-3 text-base font-normal text-zinc-500 shadow-sm"
            >
              Start your learning journey now
            </a>
          </div>
        </section>

        <section className="w-full pb-10">
          <div className="mx-auto w-full max-w-6xl rounded-[28px] bg-[#DDBDFD] px-6 py-16">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <h2 className="text-4xl font-semibold text-zinc-900 sm:text-5xl">
                Beat The Forgetting Curve,
                <br />
                Once And For All.
              </h2>
              <div className="mt-3 h-2 w-[46ch] bg-white" />
            </div>
          </div>
        </section>

        <section
          id="reviews"
          className="mx-auto w-full max-w-6xl border-t border-zinc-100 py-16"
        >
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-zinc-900 sm:text-4xl">
              Loved by +500 students
            </h2>
            <p className="mt-3 text-base text-zinc-600">
              Real study wins powered by focused practice and review.
            </p>
          </div>
          <div className="mt-10 rounded-3xl bg-[#F5F1EC] p-6">
            <div className="relative grid gap-1 lg:grid-cols-3">
              {columns.map((items, columnIndex) => (
                <div key={columnIndex} className="relative h-[520px] overflow-hidden">
                  <div
                    className="testimonial-track flex flex-col gap-4"
                    style={{
                      ["--duration" as any]: columnIndex === 1 ? "30s" : "26s",
                    }}
                  >
                    {[...items, ...items].map((item, itemIndex) => (
                      <div
                        key={`${item.name}-${itemIndex}`}
                        className="w-88 min-h-56 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
                      >
                        <p className="text-sm text-zinc-600">
                          {item.prefix}
                          <span className="rounded-md bg-[#DDBDFD] px-1.5 py-0.5 font-semibold text-[#5D3FB6]">
                            {item.highlight}
                          </span>
                          {item.suffix}
                        </p>
                        <div className="mt-4 flex items-center gap-3">
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-zinc-900 ${avatarColors[itemIndex % avatarColors.length]}`}
                        >
                            {item.name
                              .split(" ")
                              .map((part) => part[0])
                              .join("")}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-zinc-900">
                              {item.name}
                            </p>
                            <p className="text-xs text-zinc-500">{item.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl border-t border-zinc-100 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-zinc-900 sm:text-4xl">
              All Features
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {featureShowcase.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-zinc-200 bg-white px-7 py-10 text-center shadow-sm"
              >
                <div
                  className={`mx-auto h-16 w-16 rounded-2xl ${feature.color}`}
                  aria-hidden="true"
                />
                <p className="mt-6 text-lg font-semibold text-zinc-900">
                  {feature.title}
                </p>
                <p className="mt-3 text-base text-zinc-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="faq"
          className="mx-auto w-full max-w-4xl border-t border-zinc-100 py-16"
        >
          <h2 className="text-center text-4xl font-semibold text-zinc-900">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 space-y-4">
            {[
              {
                question: "How is PandaAi different?",
                answer:
                  "PandaAi transforms your own materials into flashcards, quizzes, summaries, and exam practice so you study from what your class actually covers. It combines active recall and spaced repetition with a calm interface, so you get structure, feedback, and progress in one place.",
              },
              {
                question: "Who creates the content on PandaAi?",
                answer:
                  "You do. You upload PDFs, notes, or text, and PandaAi turns that source into study assets tailored to your course. Nothing is pulled from external sources, so the output stays aligned with your curriculum and goals.",
              },
              {
                question: "What resources can I access on PandaAi?",
                answer:
                  "You can generate flashcards, adaptive quizzes, concise summaries, and a structured exam mode. Everything is built from your uploads, and you can choose the scope, difficulty, and number of items each time.",
              },
              {
                question: "How does PandaAi use my data?",
                answer:
                  "Your content is used only to create your study materials and improve your experience in the app. We do not share your files with third parties, and you can remove your content at any time.",
              },
              {
                question: "Can I try PandaAi before committing?",
                answer:
                  "Yes. The free experience lets you try the full study loop with limited usage so you can see the value before upgrading. You can generate a small set of flashcards and quizzes to test the workflow.",
              },
              {
                question: "Can I share my account with friends or family?",
                answer:
                  "For the best learning outcomes and privacy, each learner should use their own account. Progress, recommendations, and mastery tracking are personalized, so sharing an account reduces accuracy.",
              },
            ].map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl bg-zinc-100/80 px-6 py-4"
              >
                <summary className="flex cursor-pointer items-center justify-between text-xl font-semibold text-zinc-900">
                  <span>{item.question}</span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-900 text-white">
                    <span className="text-4xl font-light leading-none transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <div className="mt-3 text-base text-zinc-600">
                  {item.answer}
                </div>
              </details>
            ))}
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
                      <a href="#features" className="transition hover:text-white">
                        Features
                      </a>
                      <a href="#tutoring" className="transition hover:text-white">
                        AI Tutoring
                      </a>
                      <a href="#pricing" className="transition hover:text-white">
                        Pricing
                      </a>
                    </div>
                  </div>
                  <div className="lg:justify-self-start">
                    <p className="text-base font-semibold tracking-wide text-white/80">
                      Company
                    </p>
                    <div className="mt-4 flex flex-col gap-2 text-base text-white/90">
                      <a href="#about" className="transition hover:text-white">
                        About
                      </a>
                      <a href="#top" className="transition hover:text-white">
                        Back to top
                      </a>
                      <a href="#top" className="transition hover:text-white">
                        Contact
                      </a>
                    </div>
                  </div>
                  <div className="lg:justify-self-start">
                    <p className="text-base font-semibold tracking-wide text-white/80">
                      Legal
                    </p>
                    <div className="mt-4 flex flex-col gap-2 text-base text-white/90">
                      <a href="#top" className="transition hover:text-white">
                        Privacy
                      </a>
                      <a href="#top" className="transition hover:text-white">
                        Terms
                      </a>
                      <a href="#top" className="transition hover:text-white">
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
