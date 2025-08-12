import React from 'react'

export default function App() {
  // --- Simulator state ---
  const [selectedRooms, setSelectedRooms] = React.useState(()=>{
    try { return JSON.parse(localStorage.getItem('theleme_cart')||'{}').selectedRooms || []; } catch { return []; }
  });
  const [surface, setSurface] = React.useState(()=>{
    try { return JSON.parse(localStorage.getItem('theleme_cart')||'{}').surface || 30; } catch { return 30; }
  });
  const [opts, setOpts] = React.useState(()=>{
    try { return JSON.parse(localStorage.getItem('theleme_cart')||'{}').opts || {express:false, premium:false}; } catch { return {express:false, premium:false}; }
  });

  function toggleRoom(key){
    setSelectedRooms(prev => prev.includes(key) ? prev.filter(k=>k!==key) : [...prev, key]);
  }
  function toggleOpt(key){
    setOpts(prev => ({...prev, [key]: !prev[key]}));
  }

  const baseMap = { salon:80, cuisine:110, chambre:70, sdb:90, bureau:75 };
  const total = React.useMemo(()=>{
    const base = selectedRooms.reduce((s,k)=> s + (baseMap[k]||0), 0);
    const surf = Math.max(0, surface - 20) * 3; // +3€/m² au-dessus de 20m² (exemple)
    const optCost = (opts.express?49:0) + (opts.premium?79:0);
    return base + surf + optCost;
  }, [selectedRooms, surface, opts]);

  function saveCart(){
    const data = { selectedRooms, surface, opts, total };
    localStorage.setItem('theleme_cart', JSON.stringify(data));
    alert('Panier sauvegardé sur cet appareil ✅');
  }

  // --- UI ---
  return (
    <div className="min-h-screen">
      {/* NAV */}
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

      {/* HERO */}
      <section id="hero" className="relative overflow-hidden">
        {/* blobs */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-20 -left-10 h-72 w-72 rounded-full blob blob-blue"></div>
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full blob blob-rose"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="rounded-[28px] border border-black/5 bg-gradient-to-br from-[--pastel-blue] via-white to-[--pastel-rose] p-1 hero-shadow">
            <div className="rounded-[24px] bg-white/70 backdrop-blur">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                {/* texte */}
                <div className="flex flex-col justify-center">
                  <p className="inline-flex items-center gap-2 w-fit rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-neutral-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-[--brand]"></span>
                    Interior design, minus the drama
                  </p>
                  <h1 className="mt-5 text-4xl sm:text-5xl font-semibold leading-tight tracking-tight fade-up">
                    Voir le résultat avant de bouger un meuble.
                  </h1>
                  <p className="mt-4 text-neutral-700 fade-up fade-up-delay">
                    Des rendus photoréalistes, un process simple, et des choix qui ont du sens.
                  </p>
                  <ul className="mt-6 space-y-2 text-sm text-neutral-800 fade-up fade-up-delay">
                    {["Conception par nos designers humains, pas par une IA","Livré en 5 jours ouvrés","Design sur mesure"].map((t,i)=>(
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[--pastel-blue]">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 7L9 18l-5-5" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex gap-3">
                    <a href="#simulateur" className="inline-flex items-center rounded-xl bg-[--brand] px-5 py-3 text-sm font-medium text-ink hover:brightness-110 hero-shadow">Démarrer mon projet</a>
                    <a href="#benefits" className="inline-flex items-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm hover:bg-black/5">Voir les avantages</a>
                  </div>
                </div>
                {/* image droite */}
                <div className="relative">
                  <div className="h-full w-full overflow-hidden rounded-[20px] border border-black/10 bg-black/5">
                    <img src="/images/hero-room.png" alt="Exemple de rendu d'intérieur" className="h-full w-full object-cover" />
                  </div>
                  <div className="absolute -top-3 -right-3 rounded-xl bg-white shadow-sm border border-black/10 px-3 py-1.5 text-xs">Rendu photoréaliste</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="relative border-t border-black/5 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-10 right-16 h-64 w-64 rounded-full blob blob-green"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">Les avantages qui font la différence</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {title:"100% humain — pas par une IA",desc:"Nos designers pilotent chaque projet. L’IA nous aide à aller plus vite, mais ne décide pas."},
              {title:"Livré en 5 jours ouvrés",desc:"Étapes claires, communication fluide, rendu soigné sans attente inutile."},
              {title:"Budget maîtrisé",desc:"Estimation transparente, options à la carte. Zéro mauvaise surprise."},
              {title:"Aller-retours inclus",desc:"Vous validez un avant/après. On ajuste jusqu’au « c’est parfait »."},
              {title:"Shopping list prête à commander",desc:"Références cohérentes avec votre style et votre budget, liens directs."},
              {title:"Paiement sécurisé (Stripe)",desc:"Facture automatique par e‑mail et support réactif."}
            ].map((b,i)=>(
              <div key={i} className="rounded-2xl border border-black/10 bg-white p-6 card-shadow">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[--pastel-blue]">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M20 7L9 18l-5-5" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <div><p className="font-medium">{b.title}</p><p className="mt-1 text-sm text-neutral-700">{b.desc}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS visual */}
      <section id="process" className="relative border-t border-black/5 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-10 h-56 w-56 rounded-full blob blob-blue" />
          <div className="absolute -bottom-16 right-10 h-72 w-72 rounded-full blob blob-rose" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">Un parcours simple, ultra visuel</h2>
          <p className="mt-2 text-center text-neutral-700">Vous voyez, vous ajustez, vous décidez. On s’occupe du reste.</p>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* schema left */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="rounded-3xl border border-black/10 bg-white p-6 hero-shadow fade-up">
                <p className="text-sm font-medium text-neutral-900">Schéma d’implantation</p>
                <div className="mt-3 rounded-2xl border border-black/10 bg-gradient-to-br from-[--pastel-blue] via-white to-[--pastel-rose] p-4">
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-black/10 bg-white">
                    <img src="/images/schema.png" alt="Schema" className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-neutral-700">
                  <div className="rounded-xl border border-black/10 bg-white p-3 card-shadow">Mesures<br/><span className="text-neutral-600">Plan, fenêtres</span></div>
                  <div className="rounded-xl border border-black/10 bg-white p-3 card-shadow">Contraintes<br/><span className="text-neutral-600">Prises, flux</span></div>
                  <div className="rounded-xl border border-black/10 bg-white p-3 card-shadow">Style<br/><span className="text-neutral-600">Scandi, moderne…</span></div>
                </div>
              </div>
            </div>
            {/* steps right */}
            <div className="lg:col-span-7">
              <div className="relative">
                <div className="absolute left-0 right-0 top-9 h-0.5 bg-black/10 hidden md:block" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {n:1, col:'bg-[--pastel-blue]', tag:'Brief simplifié', title:'Composez votre projet', desc:'Pièces, surface, options. Total calculé en direct.'},
                    {n:2, col:'bg-[--pastel-green]', tag:'Étude & maquette', title:'Rendu photoréaliste', desc:'Avant/Après clair. Vous validez, on ajuste si besoin.'},
                    {n:3, col:'bg-[--pastel-rose]', tag:'Livrables', title:'PDF + Shopping list', desc:'Plan d’action clair, liens d’achat, prêt à commander.'}
                  ].map((s,i)=>(
                    <div key={i} className="relative fade-up">
                      <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${s.col} text-ink hero-bump`}>{s.n}</div>
                      <div className="mt-3 rounded-2xl border border-black/10 bg-white p-5 hover:shadow-md transition card-shadow">
                        <div className="flex items-center gap-2 text-xs text-neutral-600">
                          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />{s.tag}
                        </div>
                        <h3 className="mt-2 font-medium">{s.title}</h3>
                        <p className="mt-1 text-sm text-neutral-700">{s.desc}</p>
                        {i===1 ? (
                          <div className="mt-4 overflow-hidden rounded-xl border border-black/10">
                            <img src="/images/render-after.png" alt="" className="h-28 w-full object-cover" />
                          </div>
                        ) : i===2 ? (
                          <div className="mt-4 overflow-hidden rounded-xl border border-black/10">
                            <img src="/images/pdf-shopping.png" alt="" className="h-28 w-full object-cover" />
                          </div>
                        ) : null}
                      </div>
                      {i<2 && (<div className="hidden lg:block absolute top-9 -right-3 w-6 h-0.5 bg-black/10" />)}
                    </div>
                  ))}
                </div>
                <div className="mt-10 flex items-center justify-center">
                  <a href="#simulateur" className="inline-flex items-center rounded-xl bg-[--brand] px-5 py-3 text-sm font-medium text-ink hover:brightness-110">Démarrer le simulateur</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIMULATEUR — embedded */}
      <section id="simulateur" className="relative border-t border-black/5 overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Simulateur de projet</h2>
          <p className="mt-2 text-neutral-700">Composez votre panier et voyez le total en direct.</p>

          {/* Pièces */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { key:'salon', label:'Salon', base: baseMap['salon'] },
              { key:'cuisine', label:'Cuisine', base: baseMap['cuisine'] },
              { key:'chambre', label:'Chambre', base: baseMap['chambre'] },
              { key:'sdb', label:'Salle de bain', base: baseMap['sdb'] },
              { key:'bureau', label:'Bureau', base: baseMap['bureau'] },
            ].map((r) => (
              <button
                key={r.key}
                onClick={() => toggleRoom(r.key)}
                className={`group text-left rounded-2xl border p-5 transition
                            hover:shadow-md hover:-translate-y-0.5 active:translate-y-0
                            focus:outline-none focus:ring-2 focus:ring-black/10
                            ${selectedRooms.includes(r.key) ? 'border-black/40 bg-white' : 'border-black/10 bg-white'}`}
              >
                <div className="flex items-center justify-between">
                  <div className="font-medium">{r.label}</div>
                  <span className="rounded-lg px-2 py-1 text-xs border border-black/10 group-hover:bg-black/5">
                    dès {r.base}€
                  </span>
                </div>
                <div className="mt-3 h-24 rounded-xl border border-dashed border-black/10 bg-black/5 group-hover:bg-black/[.06]" />
                <div className="mt-3 text-xs text-neutral-600">{selectedRooms.includes(r.key) ? 'Ajouté' : 'Cliquez pour ajouter'}</div>
              </button>
            ))}
          </div>

          {/* Surface + options + résumé */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-black/10 bg-white p-5">
              <label className="text-sm font-medium">Surface totale estimée (m²)</label>
              <input
                type="number"
                min={10}
                step={1}
                value={surface}
                onChange={e=>setSurface(Math.max(0, +e.target.value))}
                className="mt-2 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm
                           focus:outline-none focus:ring-2 focus:ring-black/10"
              />
              <p className="mt-2 text-xs text-neutral-600">Au‑delà de 20 m², +3€/m² (exemple).</p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-5">
              <p className="text-sm font-medium mb-3">Options</p>
              <div className="space-y-3">
                {[
                  { k:'express', label:'Livraison express (48–72h)', price:49 },
                  { k:'premium', label:'Touch-up premium +3 visuels', price:79 },
                ].map(o=>(
                  <label key={o.k}
                    className="flex items-center justify-between rounded-xl border border-black/10 bg-white p-3 cursor-pointer
                               transition hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0">
                    <span className="text-sm">{o.label}</span>
                    <span className="text-xs text-neutral-600 mr-3">+{o.price}€</span>
                    <input type="checkbox" checked={!!opts[o.k]} onChange={()=>toggleOpt(o.k)} className="h-4 w-4 accent-black" />
                  </label>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-5">
              <p className="text-sm font-medium">Votre récap</p>
              <ul className="mt-2 text-sm text-neutral-700 space-y-1">
                <li>Pièces: {selectedRooms.length}</li>
                <li>Surface: {surface} m²</li>
                <li>Options: {Object.keys(opts).filter(k=>opts[k]).length}</li>
              </ul>
              <div className="mt-4 border-t border-black/10 pt-4">
                <p className="text-neutral-600 text-sm">Total estimé</p>
                <p className="text-2xl font-semibold">{total} €</p>
                <div className="mt-4 flex gap-2">
                  <a href="#cta"
                    className="inline-flex flex-1 items-center justify-center rounded-xl bg-[--brand] px-4 py-3 text-sm font-medium text-ink hover:brightness-110 transition">
                    Continuer
                  </a>
                  <button onClick={saveCart}
                    className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-3 text-sm hover:bg-black/5 transition">
                    Sauvegarder
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* CTA */}
      <section id="cta" className="relative border-t border-black/5 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-8 left-10 h-56 w-56 rounded-full blob blob-green"></div>
          <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full blob blob-rose"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">On s’occupe du style. Vous restez en chaussettes.</h2>
          <p className="mt-3 text-neutral-700">Lancez votre projet maintenant. Zéro rendez‑vous forcé, zéro jargon.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#simulateur" className="inline-flex items-center rounded-xl bg-[--brand] px-5 py-3 text-sm font-medium text-ink hover:brightness-110">Démarrer le simulateur</a>
            <a href="#benefits" className="inline-flex items-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm hover:bg-black/5">Voir comment on travaille</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
