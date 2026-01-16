"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";

const navLinks = [
  { label: "Fonctionnalités", href: "/fr#features", hasChevron: true },
  { label: "Tutorat IA", href: "/fr#tutoring" },
  { label: "Tarifs", href: "/fr/pricing" },
  { label: "À propos", href: "/fr#about" },
];

const language = {
  label: "Langue",
  options: [
    { label: "Français", href: "/fr" },
    { label: "Anglais", href: "/" },
  ],
};

export default function PricingPageFr() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const isYearly = billing === "yearly";

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar navLinks={navLinks} language={language} basePath="/fr" />
      <main className="px-6">
        <section className="mx-auto grid w-full max-w-6xl gap-10 py-16 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h1 className="text-4xl font-bold leading-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              <span className="whitespace-nowrap">Un abonnement adapté,</span>
              <br />
              <span className="relative inline-block whitespace-nowrap text-zinc-900">
                à vos besoins d&apos;étude.
                <span className="absolute left-0 top-full mt-2 h-2.5 w-full bg-[#DDBDFD]" />
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-base text-zinc-600 sm:text-lg">
              Construisez tout votre cycle d&apos;étude en un seul endroit :
              flashcards, quiz, résumés et entraînement aux examens.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                {
                  value: "#1",
                  text: "Choisi par des étudiants et enseignants dans 180+ pays.",
                },
                {
                  value: "86%",
                  text: "Préfèrent PandaAi aux autres ressources selon les enquêtes.",
                },
                {
                  value: "92%",
                  text: "Ressentent moins de stress grâce à une préparation structurée.",
                },
                {
                  value: "82%",
                  text: "Trouvent l&apos;étude plus agréable et efficace.",
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
              Tarifs
            </h2>
            <p className="mt-3 text-lg text-zinc-600">
              Des plans simples. Des résultats concrets.
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
                Mensuel
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
                Annuel (20% off)
              </button>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="flex h-full min-h-[560px] flex-col justify-between rounded-3xl border border-[#DDBDFD] bg-white p-7 shadow-[0_8px_24px_rgba(155,120,230,0.15)]">
              <div className="space-y-4">
                <p className="text-xl font-semibold text-zinc-900">Plan Gratuit</p>
                <p className="text-4xl font-semibold text-zinc-900">
                  0 €{" "}
                  <span className="text-base font-medium text-zinc-500">/ mois</span>
                </p>
                <p className="text-base text-zinc-600">
                  Pour découvrir une étude plus efficace.
                </p>
                <ul className="space-y-3 text-base text-zinc-700">
                  <li>
                    <span className="font-semibold text-zinc-900">1 cours</span>
                  </li>
                  <li>
                    Flashcards &amp; quiz{" "}
                    <span className="text-zinc-500">(limités)</span>
                  </li>
                  <li>1 mode examen</li>
                  <li>Coach IA de base</li>
                  <li>Tableau de progression</li>
                </ul>
              </div>
              <button
                type="button"
                className="mt-6 w-full rounded-2xl bg-[#DDBDFD] px-6 py-3 text-base font-semibold text-white shadow-[0_6px_0_#A27BD8] transition-all hover:translate-y-0.5 hover:shadow-[0_4px_0_#A27BD8] active:translate-y-1 active:shadow-[0_2px_0_#A27BD8]"
              >
                Commencer gratuitement
              </button>
            </div>

            <div className="relative flex h-full min-h-[560px] flex-col justify-between rounded-3xl bg-[#DDBDFD] p-7 text-white shadow-[0_12px_28px_rgba(155,120,230,0.25)]">
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 rounded-full border-2 border-zinc-200 bg-white px-8 py-2 text-base font-semibold text-zinc-900 shadow-sm">
                Populaire
              </span>
              <div className="space-y-4">
                <p className="text-xl font-semibold">Plan Premium</p>
                <p className="text-4xl font-semibold">
                  {isYearly ? (
                    "79 € / an"
                  ) : (
                    <>
                      9,99 €{" "}
                      <span className="text-base font-medium text-white/80">
                        / mois
                      </span>
                    </>
                  )}
                </p>
                <p className="text-base text-white/90">
                  Pour une préparation d&apos;examen avancée.
                </p>
                <ul className="space-y-3 text-base text-white">
                  <li>
                    <span className="font-semibold text-white">
                      Cours illimités
                    </span>
                  </li>
                  <li>Flashcards &amp; quiz illimités</li>
                  <li>Mode examen illimité</li>
                  <li>Coach IA avancé</li>
                  <li>Plans d&apos;étude &amp; répétition espacée</li>
                  <li>Analyses de progression détaillées</li>
                </ul>
              </div>
              <button
                type="button"
                className="mt-6 w-full rounded-2xl bg-white px-6 py-3 text-base font-semibold text-zinc-900 shadow-[0_6px_0_rgba(255,255,255,0.6)] transition-all hover:translate-y-0.5 hover:shadow-[0_4px_0_rgba(255,255,255,0.6)] active:translate-y-1 active:shadow-[0_2px_0_rgba(255,255,255,0.6)]"
              >
                Passer en Premium
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
                  Texte temporaire pour la footer. Remplacer par les informations
                  officielles avant la mise en ligne.
                </p>
              </div>
              <div className="flex w-full flex-col items-start lg:items-end">
                <div className="flex w-full flex-col gap-8 sm:flex-row sm:justify-end">
                  <div className="lg:justify-self-start">
                    <p className="text-base font-semibold tracking-wide text-white/80">
                      Produit
                    </p>
                    <div className="mt-4 flex flex-col gap-2 text-base text-white/90">
                      <a href="/fr#features" className="transition hover:text-white">
                        Fonctionnalités
                      </a>
                      <a href="/fr#tutoring" className="transition hover:text-white">
                        Tutorat IA
                      </a>
                      <a href="/fr/pricing" className="transition hover:text-white">
                        Tarifs
                      </a>
                    </div>
                  </div>
                  <div className="lg:justify-self-start">
                    <p className="text-base font-semibold tracking-wide text-white/80">
                      Société
                    </p>
                    <div className="mt-4 flex flex-col gap-2 text-base text-white/90">
                      <a href="/fr#about" className="transition hover:text-white">
                        À propos
                      </a>
                      <a href="/fr#top" className="transition hover:text-white">
                        Retour en haut
                      </a>
                      <a href="/fr#top" className="transition hover:text-white">
                        Contact
                      </a>
                    </div>
                  </div>
                  <div className="lg:justify-self-start">
                    <p className="text-base font-semibold tracking-wide text-white/80">
                      Légal
                    </p>
                    <div className="mt-4 flex flex-col gap-2 text-base text-white/90">
                      <a href="/fr#top" className="transition hover:text-white">
                        Confidentialité
                      </a>
                      <a href="/fr#top" className="transition hover:text-white">
                        Conditions
                      </a>
                      <a href="/fr#top" className="transition hover:text-white">
                        Support
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 border-t border-white/25 pt-6 text-center text-base text-white/80">
              © 2026 PandaAi. Tous droits réservés.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
