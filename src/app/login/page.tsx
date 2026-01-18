"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, type CSSProperties, type FormEvent } from "react";

type AuthProvider = "email" | "google" | "microsoft";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const reviewCards = [
    {
      name: "Karim",
      detail: "International College",
      text: "My scores increased across every subject. PandaAi helped me turn messy notes into structured reviews I could repeat each week.",
    },
    {
      name: "Sofia",
      detail: "Business major",
      text: "The quizzes feel like real exam practice. I finally know what I should review instead of re-reading everything.",
    },
    {
      name: "Liam",
      detail: "Medical student",
      text: "The spaced repetition reminders are spot-on. I can keep up with heavy content without burning out.",
    },
    {
      name: "Aya",
      detail: "Economics track",
      text: "Flashcards plus exam mode keep me focused. PandaAi feels like a full study coach in one place.",
    },
  ];

  const signIn = (payloadEmail: string, provider: AuthProvider) => {
    const trimmedEmail = payloadEmail.trim().toLowerCase();
    if (!trimmedEmail || !trimmedEmail.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    localStorage.setItem("pandaai-demo-email", trimmedEmail);
    localStorage.setItem("pandaai-demo-provider", provider);
    localStorage.setItem("pandaai-demo-authenticated", "true");

    window.setTimeout(() => {
      router.push("/courses");
    }, 300);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) {
      return;
    }
    signIn(email, "email");
  };

  const handleProviderSignIn = (provider: AuthProvider, seedEmail: string) => {
    if (isSubmitting) {
      return;
    }
    signIn(seedEmail, provider);
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <section className="flex w-full items-center justify-center border-b border-zinc-200/80 bg-[#F7F8FF] px-6 py-10 lg:w-1/2 lg:border-b-0 lg:border-r lg:px-10">
          <div className="w-full max-w-xl">
            <div className="rounded-[36px] border border-[#E8EAF3] bg-gradient-to-br from-[#F5FBFF] via-[#F5F6FF] to-[#F5F0FF] p-8 shadow-sm sm:p-10">
              <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
                  <Image
                    src="/assets/images/logo.png"
                    alt="PandaAi logo"
                    width={36}
                    height={36}
                    className="h-9 w-9 object-contain"
                    quality={100}
                  />
                </div>
              <h1 className="mt-5 text-2xl font-semibold text-[#7B5AC8] sm:text-3xl">
                  The #1 IB Learning Platform
                </h1>
              </div>

              <div className="relative mt-8 h-[280px] overflow-hidden sm:h-[320px]">
                <div
                  className="testimonial-track space-y-4"
                  style={{ "--duration": "24s" } as CSSProperties}
                >
                  {[...reviewCards, ...reviewCards].map((review, index) => (
                    <div
                      key={`${review.name}-${index}`}
                      className="rounded-[22px] border border-[#E8EAF3] bg-white p-4 shadow-sm"
                    >
                      <p className="text-sm font-semibold text-[#7B5AC8] underline decoration-[#E8D7FF] decoration-2 underline-offset-4">
                        {review.text}
                      </p>
                      <div className="mt-4 flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DDBDFD] text-sm font-semibold text-zinc-900">
                          {review.name.slice(0, 1)}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-zinc-900">
                            {review.name}
                          </p>
                          <p className="text-xs text-zinc-500">
                            {review.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-6 text-center text-xs text-zinc-500">
                Trusted by 450,000+ students in 4,000+ schools worldwide
              </p>
            </div>
          </div>
        </section>

        <section className="flex w-full items-center justify-center px-6 py-10 lg:w-1/2 lg:px-12">
          <div className="w-full max-w-md">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/assets/images/logo.png"
                alt="PandaAi logo"
                width={120}
                height={120}
                className="h-24 w-24 rounded-[28px] object-cover sm:h-28 sm:w-28"
                quality={100}
                priority
              />
              <h2 className="mt-2 text-2xl font-semibold text-zinc-900 sm:text-3xl">
                Expert-written exam prep,
                <br />
                All in One Place.
              </h2>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => handleProviderSignIn("google", "demo@gmail.com")}
                className="rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-base font-semibold text-zinc-900 shadow-sm transition hover:border-zinc-300"
              >
                Google
              </button>
              <button
                type="button"
                onClick={() =>
                  handleProviderSignIn("microsoft", "demo@outlook.com")
                }
                className="rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-base font-semibold text-zinc-900 shadow-sm transition hover:border-zinc-300"
              >
                Microsoft
              </button>
            </div>

            <div className="mt-6 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              <span className="h-px flex-1 bg-zinc-200" />
              Or
              <span className="h-px flex-1 bg-zinc-200" />
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <label className="block text-left text-sm font-semibold text-zinc-700">
                Email
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email"
                  className="mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 text-base text-zinc-900 outline-none transition focus:border-[#DDBDFD] focus:ring-2 focus:ring-[#E8D7FF]"
                  required
                />
              </label>

              {error ? <p className="text-sm text-red-600">{error}</p> : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-2xl bg-[#DDBDFD] px-5 py-3 text-base font-semibold text-white shadow-[0_6px_0_#A27BD8] transition-all hover:translate-y-0.5 hover:shadow-[0_4px_0_#A27BD8] active:translate-y-1 active:shadow-[0_2px_0_#A27BD8] disabled:cursor-not-allowed disabled:opacity-70"
            >
              Continue
            </button>
            </form>

            <p className="mt-6 text-center text-sm text-[#7B5AC8]">
              Don&apos;t have an account?{" "}
              <a href="/pricing" className="font-semibold">
                Sign up
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
