export default function App() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-black/5">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-block h-7 w-7 rounded-lg bg-gradient-to-tr from-[--pastel-blue] to-[--brand]"></span>
            <span className="font-semibold tracking-tight">Theleme</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-neutral-700">
            <a href="#benefits" className="hover:text-black">Avantages</a>
            <a href="#process" className="hover:text-black">Process</a>
            <a href="#simulateur" className="hover:text-black">Simulateur</a>
            <a href="#faq" className="hover:text-black">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#simulateur" className="hidden sm:inline-flex items-center rounded-xl border border-black/10 bg-white px-4 py-2 text-sm hover:bg-black/5">Estimer</a>
            <a href="#cta" className="inline-flex items-center rounded-xl bg-black text-white px-4 py-2 text-sm">Commencer</a>
          </div>
        </div>
      </header>


     <section className="relative">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="rounded-[28px] border border-black/5 bg-gradient-to-br from-[--pastel-blue] via-white to-[--pastel-rose] p-1">
            <div className="rounded-[24px] bg-white/70 backdrop-blur">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                {/* Col gauche : texte */}
                <div className="flex flex-col justify-center">
                  <p className="inline-flex items-center gap-2 w-fit rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-neutral-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-[--brand]"></span>
                    Interior design, minus the drama
                  </p>
                  <h1 className="mt-5 text-4xl sm:text-5xl font-semibold leading-tight tracking-tight">
                    Un design expert, sur-mesure<br />à partir de 80€
                  </h1>
                  <p className="mt-4 text-neutral-700">
                    On refait votre intérieur — pas votre compte en banque.
                  </p>
      
                  {/* Checkmarks */}
                  <ul className="mt-6 space-y-2 text-sm text-neutral-800">
                    {[
                      "Conception par nos designers humains, pas par une IA",
                      "Livré en 5 jours ouvrés",
                      "Design sur mesure",
                    ].map((t,i)=>(
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[--pastel-blue]">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="M20 7L9 18l-5-5" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
      
                  {/* CTA */}
                  <div className="mt-7 flex gap-3">
                    <a href="#simulateur" className="inline-flex items-center rounded-xl bg-[--brand] px-5 py-3 text-sm font-medium text-ink hover:brightness-110">
                      Démarrer mon projet
                    </a>
                    <a href="#benefits" className="inline-flex items-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm hover:bg-black/5">
                      Voir les avantages
                    </a>
                  </div>
                </div>
      
                {/* Col droite : image */}
                <div className="relative">
                  <div className="h-full w-full overflow-hidden rounded-[20px] border border-black/10 bg-black/5">
                    <img
                      src="https://images.unsplash.com/photo-1505691723518-36a5ac3b2a59?q=80&w=1600&auto=format&fit=crop"
                      alt="Exemple de rendu d'intérieur"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* badge coin */}
                  <div className="absolute -top-3 -right-3 rounded-xl bg-white shadow-sm border border-black/10 px-3 py-1.5 text-xs">
                    Rendu photoréaliste
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="features" className="relative border-t border-black/5">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">Ce qui change tout, sans tout changer</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[ 
              { title: '1. Transformez votre espace, sans effort', desc: 'Nous repensons votre intérieur pour qu’il soit à la fois beau, fonctionnel et adapté à votre mode de vie. Vous choisissez, on sublime.', badgeBg: 'bg-[--pastel-rose]', img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop' },
              { title: '2. Pensé pour vous, pas (que) pour Instagram', desc: 'Vos contraintes deviennent des solutions. Vos goûts, notre point de départ. Fonctionnel. Élégant. Cohérent.', badgeBg: 'bg-[--pastel-blue]', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop' },
              { title: '3. Voir le résultat avant de bouger un meuble', desc: 'Des rendus réalistes pour décider en toute confiance. On remplace le doute par un « wow ».', badgeBg: 'bg-[--pastel-green]', img: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2a59?q=80&w=1200&auto=format&fit=crop' },
              { title: '4. Avancer à votre rythme', desc: 'Un process fluide, sans RDV inutiles ni devis flous. Vous avancez à votre rythme — nous, on s’occupe du reste.', badgeBg: 'bg-[--pastel-blue]', img: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2a59?q=80&w=1200&auto=format&fit=crop' }
            ].map((f,i)=> (
              <div key={i} className="group rounded-2xl border border-black/10 bg-white overflow-hidden flex flex-col">
                <div className={`p-6 ${f.badgeBg} text-neutral-900`}>
                  <h3 className="text-base font-semibold leading-snug">{f.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-700">{f.desc}</p>
                </div>
                <div className="mt-auto">
                  <img src={f.img} alt="" className="h-40 w-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* AVANTAGES */}
      <section id="benefits" className="relative border-t border-black/5">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">
            Les avantages qui font la différence
          </h2>
      
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "100% humain — pas par une IA",
                desc: "Nos designers pilotent chaque projet. L’IA nous aide à aller plus vite, mais ne décide pas."
              },
              {
                title: "Livré en 5 jours ouvrés",
                desc: "Étapes claires, communication fluide, rendu soigné sans attente inutile."
              },
              {
                title: "Budget maîtrisé",
                desc: "Estimation transparente, options à la carte. Zéro mauvaise surprise."
              },
              {
                title: "Aller-retours inclus",
                desc: "Vous validez un avant/après. On ajuste jusqu’au « c’est parfait »."
              },
              {
                title: "Shopping list prête à commander",
                desc: "Références cohérentes avec votre style et votre budget, liens directs."
              },
              {
                title: "Paiement sécurisé (Stripe)",
                desc: "Facture automatique par e-mail et support réactif."
              }
            ].map((b, i) => (
              <div key={i} className="rounded-2xl border border-black/10 bg-white p-6">
                <div className="flex items-start gap-3">
                  {/* icône check minimaliste */}
                  <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[--pastel-blue]">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <path d="M20 7L9 18l-5-5" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium">{b.title}</p>
                    <p className="mt-1 text-sm text-neutral-700">{b.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
      
          {/* Bandeau de réassurance */}
          <div className="mt-10 rounded-2xl border border-black/10 bg-white p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-sm text-neutral-800">
              Pas sûr de votre choix ? On commence petit, on ajuste vite, on ne force jamais.
            </p>
            <a href="#simulateur" className="inline-flex items-center rounded-xl bg-[--brand] px-5 py-3 text-sm font-medium text-ink hover:brightness-110">
              Estimer mon projet
            </a>
          </div>
        </div>
      </section>

           {/* PROCESS (visuel + schémas) */}
      <section id="process" className="relative border-t border-black/5">
        {/* blobs décor */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-10 h-56 w-56 rounded-full bg-[--pastel-blue] blur-[80px]" />
          <div className="absolute -bottom-16 right-10 h-72 w-72 rounded-full bg-[--pastel-rose] blur-[90px]" />
        </div>
      
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">
            Un parcours simple, ultra visuel
          </h2>
          <p className="mt-2 text-center text-neutral-700">
            Vous voyez, vous ajustez, vous décidez. On s’occupe du reste.
          </p>
      
          {/* rail + étapes */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Col schema (LG) */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="rounded-3xl border border-black/10 bg-white p-6 hero-shadow">
                <p className="text-sm font-medium text-neutral-900">Schéma d’implantation</p>
                <div className="mt-3 rounded-2xl border border-black/10 bg-gradient-to-br from-[--pastel-blue] via-white to-[--pastel-rose] p-4">
                  {/* petit plan stylisé */}
                  <div className="aspect-[4/3] w-full rounded-xl bg-white grid grid-cols-6 grid-rows-4 gap-1 p-2">
                    <div className="col-span-4 row-span-2 rounded bg-black/5" />
                    <div className="col-span-2 row-span-1 rounded bg-black/10" />
                    <div className="col-span-2 row-span-2 rounded bg-black/5" />
                    <div className="col-span-3 row-span-1 rounded bg-black/10" />
                    <div className="col-span-1 row-span-1 rounded bg-black/5" />
                  </div>
                </div>
      
                <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-neutral-700">
                  <div className="rounded-xl border border-black/10 bg-white p-3">
                    <p className="font-medium">Mesures</p>
                    <p className="mt-1">Plan, fenêtres, portes</p>
                  </div>
                  <div className="rounded-xl border border-black/10 bg-white p-3">
                    <p className="font-medium">Contraintes</p>
                    <p className="mt-1">Prises, circulation</p>
                  </div>
                  <div className="rounded-xl border border-black/10 bg-white p-3">
                    <p className="font-medium">Style</p>
                    <p className="mt-1">Scandi, moderne…</p>
                  </div>
                </div>
              </div>
            </div>
      
            {/* Col étapes (rail horizontal) */}
            <div className="lg:col-span-7">
              <div className="relative">
                {/* rail */}
                <div className="absolute left-0 right-0 top-9 h-0.5 bg-black/10 hidden md:block" />
      
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Étape 1 */}
                  <div className="relative">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[--pastel-blue] text-ink hero-bump">
                      1
                    </div>
                    <div className="mt-3 rounded-2xl border border-black/10 bg-white p-5 hover:shadow-md transition">
                      <div className="flex items-center gap-2 text-xs text-neutral-600">
                        <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                        Brief simplifié
                      </div>
                      <h3 className="mt-2 font-medium">Composez votre projet</h3>
                      <p className="mt-1 text-sm text-neutral-700">
                        Pièces, surface, options. Total calculé en direct.
                      </p>
                      {/* mini mock formulaire */}
                      <div className="mt-4 rounded-xl border border-black/10 bg-black/5 p-3 text-xs text-neutral-600">
                        <div className="flex gap-2">
                          <div className="h-6 grow rounded bg-white" />
                          <div className="h-6 w-16 rounded bg-white" />
                        </div>
                      </div>
                    </div>
                  </div>
      
                  {/* Étape 2 */}
                  <div className="relative">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[--pastel-green] text-ink hero-bump">
                      2
                    </div>
                    <div className="mt-3 rounded-2xl border border-black/10 bg-white p-5 hover:shadow-md transition">
                      <div className="flex items-center gap-2 text-xs text-neutral-600">
                        <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                        Étude & maquette
                      </div>
                      <h3 className="mt-2 font-medium">Rendu photoréaliste</h3>
                      <p className="mt-1 text-sm text-neutral-700">
                        Avant/Après clair. Vous validez, on ajuste si besoin.
                      </p>
                      <div className="mt-4 overflow-hidden rounded-xl border border-black/10">
                        <img
                          src="https://images.unsplash.com/photo-1505691723518-36a5ac3b2a59?q=80&w=1200&auto=format&fit=crop"
                          alt=""
                          className="h-28 w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
      
                  {/* Étape 3 */}
                  <div className="relative">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[--pastel-rose] text-ink hero-bump">
                      3
                    </div>
                    <div className="mt-3 rounded-2xl border border-black/10 bg-white p-5 hover:shadow-md transition">
                      <div className="flex items-center gap-2 text-xs text-neutral-600">
                        <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                        Livrables
                      </div>
                      <h3 className="mt-2 font-medium">PDF + Shopping list</h3>
                      <p className="mt-1 text-sm text-neutral-700">
                        Plan d’action clair, liens d’achat, prêt à commander.
                      </p>
                      {/* vignettes livrables */}
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        <div className="h-14 rounded-lg border border-black/10 bg-white grid place-items-center text-[10px]">
                          PDF
                        </div>
                        <div className="h-14 rounded-lg border border-black/10 bg-white grid place-items-center text-[10px]">
                          Avant/Après
                        </div>
                        <div className="h-14 rounded-lg border border-black/10 bg-white grid place-items-center text-[10px]">
                          Shop list
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
      
                {/* CTA */}
                <div className="mt-10 flex items-center justify-center">
                  <a
                    href="#simulateur"
                    className="inline-flex items-center rounded-xl bg-[--brand] px-5 py-3 text-sm font-medium text-ink hover:brightness-110"
                  >
                    Démarrer le simulateur
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="faq" className="relative border-t border-black/5">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Questions fréquentes</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-neutral-700">
            <div className="rounded-2xl border border-black/10 bg-white p-5">
              <p className="font-medium text-black">Combien de temps pour recevoir un rendu ?</p>
              <p className="mt-2">Généralement quelques jours ouvrés. Vous validez un avant/après avant l’envoi final.</p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-5">
              <p className="font-medium text-black">Et si je veux garder certains meubles ?</p>
              <p className="mt-2">On adapte le rendu en conséquence (photos de référence bienvenues). Rien n’est imposé.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="relative border-t border-black/5">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">On s’occupe du style. Vous restez en chaussettes.</h2>
          <p className="mt-3 text-neutral-700">Lancez votre projet maintenant. Zéro rendez‑vous forcé, zéro jargon.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#simulateur" className="inline-flex items-center rounded-xl bg-[--brand] px-5 py-3 text-sm font-medium text-ink hover:brightness-110 smooth">Démarrer le simulateur</a>
            <a href="#features" className="inline-flex items-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm hover:bg-black/5 smooth">Voir comment on travaille</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Theleme — Interior design, minus the drama.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-black smooth">Mentions</a>
            <a href="#" className="hover:text-black smooth">CGV</a>
            <a href="#" className="hover:text-black smooth">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
