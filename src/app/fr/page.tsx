import Navbar from "@/components/Navbar";

const navLinks = [
  { label: "Fonctionnalités", href: "#features", hasChevron: true },
  { label: "Tutorat IA", href: "#tutoring" },
  { label: "Tarifs", href: "#pricing" },
  { label: "À propos", href: "#about" },
];

const language = {
  label: "Langue",
  options: [
    { label: "Français", href: "/fr" },
    { label: "Anglais", href: "/" },
  ],
};

export default function HomeFr() {
  return (
    <div
      id="top"
      className="flex min-h-screen flex-col bg-white text-zinc-900"
    >
      <Navbar navLinks={navLinks} language={language} />
      <main className="flex-1 px-6">
        <section className="mx-auto flex w-full max-w-6xl flex-col items-start pb-28 pl-2 pt-20 text-left sm:pl-4 sm:pt-28">
          <div className="inline-flex flex-col items-start">
            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-7xl">
              Apprendre mieux,
              <br />
              Retenir pour toujours
            </h1>
            <div className="mt-3 h-2.5 w-full bg-[#DDBDFD]" />
          </div>
          <p className="mt-7 max-w-2xl text-xl text-zinc-600 sm:text-2xl">
            Transformez n’importe quel contenu en flashcards intelligentes,
            recevez un feedback instantané, et étudiez avec une boucle calme et
            ciblée de pratique et de révision.
          </p>
          <a
            href="#auth"
            className="mt-8 inline-flex items-center justify-center rounded-2xl bg-[#DDBDFD] px-10 py-3.5 text-lg font-semibold text-white shadow-[0_6px_0_#A27BD8] transition-all hover:translate-y-0.5 hover:shadow-[0_4px_0_#A27BD8] active:translate-y-1 active:shadow-[0_2px_0_#A27BD8]"
          >
            Commencer gratuitement
          </a>
        </section>

        <section
          id="features"
          className="mx-auto w-full max-w-5xl border-t border-zinc-100 py-14"
        >
          <div className="flex flex-wrap justify-center gap-1.5">
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
                Choisi par 400 000+ étudiants et enseignants dans 180+ pays.
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
                Préfèrent PandaAi aux autres ressources selon des enquêtes.
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
                Ressentent moins de stress d’examen avec une préparation complète.
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
                Disent que l’étude est agréable, abordable et efficace.
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
              <h2 className="text-3xl font-semibold">
                Un tutorat IA qui guide
              </h2>
              <p className="mt-4 text-base text-zinc-600 sm:text-lg">
                Panda Coach commence par des indices, puis pose des questions
                ciblées pour débloquer la compréhension sans donner la réponse.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-100 bg-white p-7 shadow-sm">
              <p className="text-base font-semibold text-zinc-900">
                Aide par indices
              </p>
              <p className="mt-3 text-base text-zinc-600">
                Un parcours guidé par concept, avec de courts prompts pour faire
                les bons liens.
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
              <h2 className="text-xl font-semibold">Essai gratuit</h2>
              <p className="mt-3 text-base text-zinc-600">
                Générez un nombre limité de flashcards, quiz et résumés pour
                vivre le cycle complet.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-semibold">Premium</h2>
              <p className="mt-3 text-base text-zinc-600">
                Débloquez des limites plus élevées, des analyses avancées et
                plus de sessions de tutorat.
              </p>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mx-auto w-full max-w-5xl border-t border-zinc-100 py-16"
        >
          <div className="rounded-3xl border border-zinc-100 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-semibold">À propos de PandaAi</h2>
            <p className="mt-4 text-base text-zinc-600 sm:text-lg">
              PandaAi transforme vos contenus en une boucle structurée de
              pratique, feedback et révision avec une interface minimaliste.
            </p>
          </div>
        </section>

        <section
          id="faq"
          className="mx-auto w-full max-w-4xl border-t border-zinc-100 py-16"
        >
          <h2 className="text-center text-4xl font-semibold text-zinc-900">
            Questions fréquentes
          </h2>
          <div className="mt-10 space-y-4">
            {[
              {
                question: "En quoi PandaAi est différent ?",
                answer:
                  "PandaAi transforme vos supports en flashcards, quiz, résumés et examens blancs basés sur votre cours. L’expérience combine rappel actif, répétition espacée et retours clairs pour un apprentissage structuré et efficace.",
              },
              {
                question: "Qui crée le contenu sur PandaAi ?",
                answer:
                  "Vous importez vos documents et PandaAi génère les supports d’étude à partir de ce contenu. Rien n’est récupéré ailleurs, ce qui garantit un alignement fidèle avec votre programme.",
              },
              {
                question: "Quelles ressources sont disponibles ?",
                answer:
                  "Flashcards, quiz adaptatifs, résumés et mode examen, tous construits depuis vos documents. Vous choisissez le périmètre, le niveau de difficulté et le nombre d’items.",
              },
              {
                question: "Comment PandaAi utilise mes données ?",
                answer:
                  "Vos données servent uniquement à créer vos supports d’étude et à améliorer votre expérience. Elles ne sont pas partagées avec des tiers, et vous pouvez supprimer votre contenu à tout moment.",
              },
              {
                question: "Puis-je tester PandaAi avant de m’engager ?",
                answer:
                  "Oui, l’expérience gratuite permet d’essayer tout le cycle d’étude avec des limites. Vous pouvez générer un petit nombre de flashcards et de quiz pour valider le workflow.",
              },
              {
                question: "Puis-je partager mon compte ?",
                answer:
                  "Pour de meilleurs résultats et la confidentialité, un compte par apprenant est recommandé. Le suivi de progression est personnalisé et devient moins fiable en cas de partage.",
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
                      <a href="#features" className="transition hover:text-white">
                        Fonctionnalités
                      </a>
                      <a href="#tutoring" className="transition hover:text-white">
                        Tutorat IA
                      </a>
                      <a href="#pricing" className="transition hover:text-white">
                        Tarifs
                      </a>
                    </div>
                  </div>
                  <div className="lg:justify-self-start">
                    <p className="text-base font-semibold tracking-wide text-white/80">
                      Société
                    </p>
                    <div className="mt-4 flex flex-col gap-2 text-base text-white/90">
                      <a href="#about" className="transition hover:text-white">
                        À propos
                      </a>
                      <a href="#top" className="transition hover:text-white">
                        Retour en haut
                      </a>
                      <a href="#top" className="transition hover:text-white">
                        Contact
                      </a>
                    </div>
                  </div>
                  <div className="lg:justify-self-start">
                    <p className="text-base font-semibold tracking-wide text-white/80">
                      Légal
                    </p>
                    <div className="mt-4 flex flex-col gap-2 text-base text-white/90">
                      <a href="#top" className="transition hover:text-white">
                        Confidentialité
                      </a>
                      <a href="#top" className="transition hover:text-white">
                        Conditions
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
              © 2026 PandaAi. Tous droits réservés.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
