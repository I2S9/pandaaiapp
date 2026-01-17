import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function AboutPageFr() {
  const homePath = "/fr";

  return (
    <div id="top" className="min-h-screen bg-white">
      <Navbar basePath="/fr" />
      <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-16">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
              À propos
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-zinc-900 sm:text-5xl">
              Un parcours d'étude calme et structuré à partir de vos contenus.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600">
              PandaAi transforme vos documents en une boucle de pratique,
              feedback et révision pour garder un rythme clair. L'approche
              combine rappel actif, répétition espacée et tutorat pour progresser
              sans surcharge.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/fr/pricing"
                className="rounded-2xl bg-[#DDBDFD] px-6 py-3 text-base font-semibold text-white shadow-sm"
              >
                Voir les tarifs
              </a>
              <a
                href={`${homePath}#features`}
                className="rounded-2xl border border-zinc-200 px-6 py-3 text-base font-semibold text-zinc-900"
              >
                Découvrir les fonctionnalités
              </a>
            </div>
          </div>
          <div className="rounded-[28px] border border-zinc-200 bg-zinc-50 p-8">
            <h2 className="text-2xl font-semibold text-zinc-900">
              Ce que nous construisons
            </h2>
            <ul className="mt-6 space-y-4 text-base text-zinc-600">
              <li>
                Des parcours simples à suivre chaque semaine, sans friction.
              </li>
              <li>
                Des retours clairs pour savoir quoi revoir en priorité.
              </li>
              <li>
                Une interface sobre qui favorise la concentration.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Une base pédagogique solide",
              body:
                "Chaque fonctionnalité s'appuie sur des principes éprouvés pour renforcer la mémorisation.",
            },
            {
              title: "Une flexibilité centrée étudiant",
              body:
                "Les plans s'adaptent à votre contenu, votre rythme et vos échéances.",
            },
            {
              title: "Une assistance IA mesurée",
              body:
                "Les indices guident la réflexion sans donner la réponse directement.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[24px] border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-zinc-900">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-zinc-600">
                {item.body}
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
