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
    <div id="top" className="min-h-screen bg-white text-zinc-900">
      <Navbar navLinks={navLinks} language={language} />
      <main className="px-6">
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
          className="mx-auto w-full max-w-6xl border-t border-zinc-100 py-14"
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-zinc-200 bg-white px-5 py-6 shadow-sm">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500">
                <span className="h-2.5 w-2.5 rounded-full bg-[#7C86FF]" />
                Échelle de confiance
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-zinc-900">#1</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                Choisi par 400 000+ étudiants et enseignants dans 180+ pays.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-white px-5 py-6 shadow-sm">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500">
                <span className="h-2.5 w-2.5 rounded-full bg-[#7BC7A3]" />
                Préférence apprenants
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-zinc-900">86%</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                Préfèrent PandaAi aux autres ressources selon des enquêtes.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-white px-5 py-6 shadow-sm">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500">
                <span className="h-2.5 w-2.5 rounded-full bg-[#BBA7FF]" />
                Réduction du stress
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-zinc-900">92%</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                Ressentent moins de stress d’examen avec une préparation complète.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-white px-5 py-6 shadow-sm">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFB86B]" />
                Satisfaction étudiants
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-zinc-900">82%</h3>
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
          id="auth"
          className="mx-auto w-full max-w-5xl border-t border-zinc-100 py-16"
        >
          <div className="rounded-3xl border border-zinc-100 bg-zinc-50 p-8 text-center">
            <h2 className="text-3xl font-semibold">Commencer</h2>
            <p className="mt-4 text-base text-zinc-600 sm:text-lg">
              L’authentification n’est pas encore activée. Cette démo se
              concentre sur l’expérience d’étude et le flux de contenu.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                className="rounded-full border border-zinc-200 px-7 py-3.5 text-base font-semibold text-zinc-900"
              >
                Connexion
              </button>
              <button
                type="button"
                className="rounded-full bg-[#DDBDFD] px-7 py-3.5 text-base font-semibold text-white shadow-sm"
              >
                Inscription
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
