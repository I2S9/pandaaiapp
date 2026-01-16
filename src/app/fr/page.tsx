import Image from "next/image";
import Navbar from "@/components/Navbar";

const navLinks = [
  { label: "Fonctionnalités", href: "/fr#features", hasChevron: true },
  { label: "Cours", href: "/fr#courses", hasChevron: true },
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

export default function HomeFr() {
  const testimonials = [
    {
      name: "Maya Turner",
      role: "Étudiante en biologie",
      prefix:
        "Mon plan hebdo m’a tenue régulière entre cours et TP. ",
      highlight: "J’ai gagné 18 points",
      suffix:
        " avant les examens et je me suis sentie plus sereine. Les retours m’ont aidée à corriger vite.",
    },
    {
      name: "Daniel Ruiz",
      role: "Étudiant en ingénierie",
      prefix:
        "Les flashcards étaient précises et rapides à revoir. ",
      highlight: "Ma rétention a augmenté",
      suffix:
        " et j’ai arrêté de relire les mêmes chapitres. Les quiz m’ont motivé.",
    },
    {
      name: "Leah Brooks",
      role: "Histoire",
      prefix:
        "Le mode examen m’a aidée à gérer le temps des réponses. ",
      highlight: "J’ai fini en avance",
      suffix:
        " et mes copies étaient mieux structurées. L’entraînement était réaliste.",
    },
    {
      name: "Omar Ali",
      role: "Pré‑médecine",
      prefix:
        "Le coach m’a guidé avec des indices au bon moment. ",
      highlight: "J’ai compris le pourquoi",
      suffix:
        " derrière chaque notion et mes scores ont progressé. C’était très proche d’un tutorat.",
    },
    {
      name: "Sofia Martin",
      role: "Droit",
      prefix:
        "Les résumés ont clarifié mes lectures longues. ",
      highlight: "L’étude est devenue plus calme",
      suffix:
        " et j’ai pu me concentrer sur l’argumentation. J’ai gagné du temps chaque semaine.",
    },
    {
      name: "Ethan Park",
      role: "Économie",
      prefix:
        "Les quiz s’adaptent à mon niveau et ciblent mes lacunes. ",
      highlight: "Mon taux de réussite a grimpé",
      suffix:
        " en quelques séances seulement. Les explications étaient claires.",
    },
    {
      name: "Julia Chen",
      role: "Psychologie",
      prefix:
        "Les rappels étaient parfaitement synchronisés. ",
      highlight: "Je n’oublie plus",
      suffix:
        " les définitions clés au moment des révisions. Le rythme était idéal.",
    },
    {
      name: "Noah Lewis",
      role: "Chimie",
      prefix:
        "J’ai importé mes notes et tout était rangé par thème. ",
      highlight: "Mon temps de préparation a été divisé",
      suffix:
        " par deux sans sacrifier la qualité. Les sections sont très pratiques.",
    },
    {
      name: "Ava Patel",
      role: "Informatique",
      prefix:
        "La boucle d’étude m’a rendue beaucoup plus constante. ",
      highlight: "J’ai terminé le programme plus tôt",
      suffix:
        " et j’ai eu le temps de faire des exercices avancés. J’ai enfin gardé le rythme.",
    },
  ];

  const columns = [
    testimonials.slice(0, 3),
    testimonials.slice(3, 6),
    testimonials.slice(6, 9),
  ];
  const featureShowcase = [
    {
      title: "Flashcards intelligentes",
      description:
        "Créez des cartes de rappel à partir de vos supports et révisez vite.",
      color: "bg-[#EDE7FF]",
    },
    {
      title: "Résumés ciblés",
      description:
        "Transformez les chapitres en notes claires pour réviser efficacement.",
      color: "bg-[#E8F1FF]",
    },
    {
      title: "Quiz adaptatifs",
      description:
        "Entraînez-vous avec feedback et explications adaptées à votre niveau.",
      color: "bg-[#E7F6EC]",
    },
    {
      title: "Mode examen",
      description:
        "Simulez les épreuves, gérez le temps et suivez la maîtrise par thème.",
      color: "bg-[#FFEFE1]",
    },
    {
      title: "Panda Coach",
      description:
        "Un tutorat par indices pour comprendre sans donner la réponse.",
      color: "bg-[#F2E7FF]",
    },
    {
      title: "Structure de cours",
      description:
        "Organisez les uploads en sections et objectifs pour un parcours clair.",
      color: "bg-[#EAF5FF]",
    },
    {
      title: "Tableau de bord",
      description:
        "Suivez précision, rythme et maîtrise par thème en un coup d’œil.",
      color: "bg-[#F1F7E8]",
    },
    {
      title: "Plans d’étude",
      description:
        "Planifiez les révisions avec répétition espacée et rappels clairs.",
      color: "bg-[#FFF2E9]",
    },
    {
      title: "Notes intelligentes",
      description:
        "Capturez l’essentiel en notes propres et faciles à partager.",
      color: "bg-[#F7E9F1]",
    },
    {
      title: "Analyses d’examen",
      description:
        "Obtenez vos forces et axes d’amélioration après chaque examen blanc.",
      color: "bg-[#E8F0FF]",
    },
  ];
  const avatarColors = ["bg-[#D9F3E3]", "bg-[#F9D6E4]", "bg-[#FFF1BF]", "bg-[#DCE8FF]"];

  return (
    <div
      id="top"
      className="flex min-h-screen flex-col bg-white text-zinc-900"
    >
      <Navbar navLinks={navLinks} language={language} basePath="/fr" />
      <main className="flex-1 px-6">
        <section className="relative mx-auto w-full max-w-6xl pb-28 pt-20 sm:pt-28">
          <div
            className="pointer-events-none absolute right-0 top-1/2 hidden h-[360px] w-[360px] -translate-y-1/2 bg-contain bg-no-repeat lg:block"
            style={{ backgroundImage: "url(/assets/images/panda-header.png)" }}
            aria-hidden="true"
          />
          <div className="flex flex-col items-start pl-2 text-left sm:pl-4">
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
              recevez un feedback instantané, et étudiez avec une boucle calme
              et ciblée de pratique et de révision.
            </p>
            <a
              href="#auth"
              className="mt-8 inline-flex items-center justify-center rounded-2xl bg-[#DDBDFD] px-10 py-3.5 text-lg font-semibold text-white shadow-[0_6px_0_#A27BD8] transition-all hover:translate-y-0.5 hover:shadow-[0_4px_0_#A27BD8] active:translate-y-1 active:shadow-[0_2px_0_#A27BD8]"
            >
              Commencer gratuitement
            </a>
          </div>
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
          <div className="mb-8 mt-8 flex w-full justify-center">
            <a
              href="#auth"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-8 py-3 text-base font-normal text-zinc-500 shadow-sm"
            >
              Commencer votre parcours d’apprentissage maintenant
            </a>
          </div>
        </section>

        <section className="w-full pb-10">
          <div className="mx-auto w-full max-w-6xl rounded-[28px] bg-[#DDBDFD] px-6 py-16">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <div className="inline-flex flex-col items-center">
                <h2 className="inline-block text-4xl font-semibold text-zinc-900 sm:text-5xl">
                  Brisez la courbe de l’oubli,
                  <br />
                  une bonne fois pour toutes.
                </h2>
                <div className="mt-3 h-2 w-full bg-white" />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl border-t border-zinc-100 py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-semibold text-zinc-900 sm:text-4xl">
                Des étudiants du monde entier apprennent avec PandaAi
              </h2>
              <p className="mt-3 max-w-xl text-base text-zinc-600">
                Conçu à partir de vrais supports pour réviser plus vite et plus
                sereinement.
              </p>
              <div className="mt-6">
                <a
                  href="#reviews"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#DDBDFD] px-10 py-3.5 text-lg font-semibold text-white shadow-[0_6px_0_#A27BD8] transition-all hover:translate-y-0.5 hover:shadow-[0_4px_0_#A27BD8] active:translate-y-1 active:shadow-[0_2px_0_#A27BD8]"
                >
                  Commencer à mieux apprendre
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/assets/images/map.png"
                alt="Carte des apprenants"
                width={400}
                height={400}
                className="h-80 w-80 rounded-full object-cover sm:h-88 sm:w-88"
                sizes="(min-width: 1024px) 352px, 320px"
              />
            </div>
          </div>
        </section>

        <section
          id="reviews"
          className="mx-auto w-full max-w-6xl border-t border-zinc-100 py-16"
        >
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-zinc-900 sm:text-4xl">
              Adoré par 500+ étudiants
            </h2>
            <p className="mt-3 text-base text-zinc-600">
              Des résultats concrets grâce à une pratique ciblée.
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
              Toutes les fonctionnalités
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
                <div className="flex items-center gap-1">
                  <Image
                    src="/assets/images/logo.png"
                    alt="Logo PandaAi"
                    width={88}
                    height={88}
                    className="h-[88px] w-[88px] rounded-2xl object-cover"
                  />
                  <p className="text-xl font-semibold text-zinc-900">PandaAi</p>
                </div>
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
