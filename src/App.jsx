export default function App() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-paper/70 backdrop-blur border-b border-black/5">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-block h-6 w-6 rounded bg-[--brand]"></span>
            <span className="font-semibold tracking-tight">Theleme</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
            <a href="#features" className="hover:text-black">Pourquoi nous</a>
            <a href="#process" className="hover:text-black">Comment ça marche</a>
            <a href="#pricing" className="hover:text-black">Tarifs</a>
            <a href="#faq" className="hover:text-black">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#simulateur" className="hidden sm:inline-block text-sm text-neutral-600 hover:text-black">Simuler</a>
            <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-black text-white px-4 py-2 text-sm">Commencer</a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[580px] w-[580px] rounded-full bg-[--pastel-blue] blur-[120px]"></div>
          <div className="absolute -bottom-40 -right-20 h-[420px] w-[420px] rounded-full bg-[--pastel-rose] blur-[100px]"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 pt-20 pb-24">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-neutral-600">
              <span className="h-1.5 w-1.5 rounded-full bg-[--brand]"></span>
              Interior design, minus the drama
            </p>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
              Voir le résultat avant de bouger un meuble.
            </h1>
            <p className="mt-5 max-w-2xl text-neutral-700">
              Des rendus photoréalistes, un process simple, et des choix qui ont du sens.
              On s’adapte à votre rythme, on livre en quelques jours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#simulateur" className="inline-flex items-center justify-center rounded-xl bg-[--brand] px-5 py-3 text-sm font-medium text-ink hover:brightness-110">Démarrer mon projet</a>
              <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm hover:bg-black/5">Voir comment</a>
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

      <section id="simulateur" className="relative border-t border-black/5">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Simulateur de projet</h2>
          <p className="mt-2 text-neutral-700">Calculez votre budget en direct. Vos choix sont sauvegardés sur votre appareil.</p>
          <div className="mt-8 rounded-2xl border border-black/10 bg-white p-4">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-black/10 bg-black/5 flex items-center justify-center text-neutral-500">
              (Intégration du simulateur ici — Tally / Softr / widget custom)
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Theleme — Interior design, minus the drama.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-black">Mentions</a>
            <a href="#" className="hover:text-black">CGV</a>
            <a href="#" className="hover:text-black">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}