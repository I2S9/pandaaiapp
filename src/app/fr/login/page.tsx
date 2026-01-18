"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

type AuthProvider = "email" | "google" | "microsoft";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const signIn = (payloadEmail: string, provider: AuthProvider) => {
    const trimmedEmail = payloadEmail.trim().toLowerCase();
    if (!trimmedEmail || !trimmedEmail.includes("@")) {
      setError("Veuillez saisir une adresse e-mail valide.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    localStorage.setItem("pandaai-demo-email", trimmedEmail);
    localStorage.setItem("pandaai-demo-provider", provider);
    localStorage.setItem("pandaai-demo-authenticated", "true");

    window.setTimeout(() => {
      router.push("/fr/courses");
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
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto w-full max-w-5xl">
        <div className="grid overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-between bg-gradient-to-br from-[#EEF5FF] via-[#F2EDFF] to-[#F7EFFF] p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7B5AC8]">
                Connexion PandaAi
              </p>
              <h1 className="mt-5 text-3xl font-semibold text-zinc-900 sm:text-4xl">
                Apprenez plus vite, restez concentré, progressez chaque jour.
              </h1>
              <p className="mt-4 text-base leading-relaxed text-zinc-600">
                PandaAi transforme vos supports en flashcards, quiz et examens
                pour garder un rythme régulier sans surcharge.
              </p>
            </div>
            <div className="mt-10 rounded-[24px] border border-white/60 bg-white/80 p-6 text-sm text-zinc-600">
              <p className="font-semibold text-zinc-900">Notice de démo</p>
              <p className="mt-2">
                Cette démo enregistre votre e-mail localement sur cet appareil
                pour continuer sans connexion serveur.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center p-10">
            <a href="/fr" className="flex items-center gap-2">
              <Image
                src="/assets/images/logo.png"
                alt="Logo PandaAi"
                width={64}
                height={64}
                className="h-14 w-14 rounded-2xl object-cover"
                quality={100}
                priority
              />
              <span className="text-lg font-semibold text-zinc-900">
                PandaAi
              </span>
            </a>

            <h2 className="mt-8 text-2xl font-semibold text-zinc-900">
              Une préparation sérieuse, dans un seul espace.
            </h2>
            <p className="mt-3 text-base text-zinc-600">
              Connectez-vous pour reprendre votre boucle d’étude.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() =>
                  handleProviderSignIn("google", "demo@gmail.com")
                }
                className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-base font-semibold text-zinc-900 shadow-sm transition hover:border-zinc-300"
              >
                Continuer avec Google
              </button>
              <button
                type="button"
                onClick={() =>
                  handleProviderSignIn("microsoft", "demo@outlook.com")
                }
                className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-base font-semibold text-zinc-900 shadow-sm transition hover:border-zinc-300"
              >
                Continuer avec Microsoft
              </button>
            </div>

            <div className="mt-6 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              <span className="h-px flex-1 bg-zinc-200" />
              Ou
              <span className="h-px flex-1 bg-zinc-200" />
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <label className="block text-sm font-semibold text-zinc-700">
                E-mail
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Votre e-mail"
                  className="mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 text-base text-zinc-900 outline-none transition focus:border-[#DDBDFD] focus:ring-2 focus:ring-[#E8D7FF]"
                  required
                />
              </label>

              {error ? (
                <p className="text-sm text-red-600">{error}</p>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-2xl bg-[#DDBDFD] px-5 py-3 text-base font-semibold text-white shadow-[0_6px_0_#A27BD8] transition-all hover:translate-y-0.5 hover:shadow-[0_4px_0_#A27BD8] active:translate-y-1 active:shadow-[0_2px_0_#A27BD8] disabled:cursor-not-allowed disabled:opacity-70"
              >
                Continuer
              </button>
            </form>

            <p className="mt-6 text-sm text-zinc-500">
              Nouveau sur PandaAi ?{" "}
              <a
                href="/fr/pricing"
                className="font-semibold text-[#7B5AC8] transition hover:text-[#6A4AB8]"
              >
                Voir les offres
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
