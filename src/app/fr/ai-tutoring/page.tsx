import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function AiTutoringPageFr() {
  const homePath = "/fr";

  return (
    <div id="top" className="min-h-screen bg-white">
      <Navbar basePath="/fr" />
      <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-16">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Tutorat IA
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-zinc-900 sm:text-5xl">
              Un accompagnement par indices pour comprendre en profondeur.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600">
              Panda Coach guide l'étudiant avec des indices, des explications
              ciblées et des questions de suivi. L'objectif est de renforcer la
              compréhension sans donner la réponse directement.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/fr/pricing"
                className="rounded-2xl bg-[#DDBDFD] px-6 py-3 text-base font-semibold text-white shadow-sm"
              >
                Activer Panda Coach
              </a>
              <a
                href={`${homePath}#features`}
                className="rounded-2xl border border-zinc-200 px-6 py-3 text-base font-semibold text-zinc-900"
              >
                Découvrir la méthode
              </a>
            </div>
          </div>
          <div className="rounded-[28px] border border-zinc-200 bg-zinc-50 p-8">
            <h2 className="text-2xl font-semibold text-zinc-900">
              Le déroulé d'une session
            </h2>
            <ol className="mt-6 space-y-4 text-base text-zinc-600">
              <li>
                Des indices précis pour orienter la prochaine étape.
              </li>
              <li>
                Des questions ciblées pour vérifier la compréhension réelle.
              </li>
              <li>
                Un résumé clair et une suggestion de révision.
              </li>
            </ol>
          </div>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Tutorat contextuel",
              body:
                "Le coach s'appuie sur vos documents pour rester aligné avec le cours.",
            },
            {
              title: "Feedback immédiat",
              body:
                "Les explications arrivent au bon moment pour corriger les zones floues.",
            },
            {
              title: "Relances adaptatives",
              body:
                "En cas d'hésitation, le coach propose des questions plus ciblées.",
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
