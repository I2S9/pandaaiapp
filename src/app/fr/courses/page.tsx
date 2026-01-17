import Image from "next/image";
import Navbar from "@/components/Navbar";

const navLinks = [
  { label: "Fonctionnalités", href: "/fr#features", hasChevron: true },
  { label: "Cours", href: "/fr/courses", hasChevron: true },
  { label: "Tutorat IA", href: "/fr/ai-tutoring" },
  { label: "Tarifs", href: "/fr/pricing" },
  { label: "À propos", href: "/fr/about" },
];

const language = {
  label: "Langue",
  options: [
    { label: "Français", href: "/fr" },
    { label: "Anglais", href: "/" },
  ],
};

const subjects = [
  {
    id: "math",
    title: "Mathématiques",
    description:
      "Un parcours clair pour progresser avec de la pratique guidée.",
  },
  {
    id: "biology",
    title: "Biologie",
    description:
      "Transformez les chapitres complexes en boucles de rappel efficaces.",
  },
  {
    id: "history",
    title: "Histoire",
    description:
      "Révisez les périodes clés avec un rythme de révision structuré.",
  },
  {
    id: "economics",
    title: "Économie",
    description:
      "Travaillez définitions, graphiques et raisonnements avec des quiz courts.",
  },
  {
    id: "cs",
    title: "Informatique",
    description:
      "Focus sur les algorithmes et concepts clés avec des explications ciblées.",
  },
  {
    id: "literature",
    title: "Littérature",
    description:
      "Analysez thèmes et citations avec des cartes de rappel actives.",
  },
];

export default function CoursesPageFr() {
  const homePath = "/fr";

  return (
    <div id="top" className="min-h-screen bg-white">
      <Navbar navLinks={navLinks} language={language} basePath="/fr" />
      <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-16">
        <section>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Cours
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-zinc-900 sm:text-5xl">
            Des parcours d'étude adaptés à vos matières.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
            Choisissez une matière pour voir comment PandaAi organise la
            pratique, le feedback et la révision.
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
                    alt="Logo PandaAi"
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
                  Texte temporaire pour la footer. Remplacer par les informations
                  officielles avant la mise en ligne.
                </p>
              </div>
              <div className="flex w-full flex-col items-start lg:items-end">
                <div className="flex w-full flex-col gap-8 sm:flex-row sm:justify-end">
                  <div className="lg:justify-self-start">
                    <p className="text-base font-semibold tracking-wide text-zinc-900">
                      Produit
                    </p>
                    <div className="mt-4 flex flex-col gap-2 text-base text-zinc-900">
                      <a
                        href={`${homePath}#features`}
                        className="transition hover:text-zinc-700"
                      >
                        Fonctionnalités
                      </a>
                      <a
                        href={`${homePath}#tutoring`}
                        className="transition hover:text-zinc-700"
                      >
                        Tutorat IA
                      </a>
                      <a
                        href="/fr/pricing"
                        className="transition hover:text-zinc-700"
                      >
                        Tarifs
                      </a>
                    </div>
                  </div>
                  <div className="lg:justify-self-start">
                    <p className="text-base font-semibold tracking-wide text-zinc-900">
                      Société
                    </p>
                    <div className="mt-4 flex flex-col gap-2 text-base text-zinc-900">
                      <a
                        href={`${homePath}#about`}
                        className="transition hover:text-zinc-700"
                      >
                        À propos
                      </a>
                      <a
                        href={`${homePath}#top`}
                        className="transition hover:text-zinc-700"
                      >
                        Retour en haut
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
                      Légal
                    </p>
                    <div className="mt-4 flex flex-col gap-2 text-base text-zinc-900">
                      <a
                        href={`${homePath}#top`}
                        className="transition hover:text-zinc-700"
                      >
                        Confidentialité
                      </a>
                      <a
                        href={`${homePath}#top`}
                        className="transition hover:text-zinc-700"
                      >
                        Conditions
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
              © 2026 PandaAi. Tous droits réservés.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
