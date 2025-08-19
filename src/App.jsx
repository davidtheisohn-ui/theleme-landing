import React from 'react'
function EUR(v){ return new Intl.NumberFormat('fr-FR',{style:'currency',currency:'EUR'}).format(v) }

export default function App(){
  // portfolio tabs
  const [tab, setTab] = React.useState('salon')
  const tabs = [
    {k:'salon', l:'Salon'},
    {k:'cuisine', l:'Cuisine'},
    {k:'chambre', l:'Chambre'},
    {k:'exterieur', l:'Extérieur'}
  ]
  const portfolio = {
    salon: ['/images/hero1.svg','/images/hero2.svg','/images/hero3.svg','/images/hero4.svg','/images/hero2.svg','/images/hero1.svg'],
    cuisine: ['/images/hero2.svg','/images/hero3.svg','/images/hero4.svg','/images/hero1.svg','/images/hero3.svg','/images/hero2.svg'],
    chambre: ['/images/hero3.svg','/images/hero1.svg','/images/hero2.svg','/images/hero4.svg','/images/hero1.svg','/images/hero4.svg'],
    exterieur: ['/images/hero4.svg','/images/hero3.svg','/images/hero2.svg','/images/hero1.svg','/images/hero4.svg','/images/hero2.svg']
  }

  // Configurator state
  React.useEffect(()=>{
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){ e.target.classList.add('in') }
      })
    },{ threshold:.12 })
    els.forEach(el=>io.observe(el))
    return ()=> io.disconnect()
  },[])

  const [step,setStep] = React.useState(1)
  const [scope,setScope] = React.useState('piece')
  const [rooms,setRooms] = React.useState({ salon:0,cuisine:0,chambre:0,sdb:0,bureau:0,pieceAVivre:0,exterieurS:0,exterieurL:0 })
  const [aptType,setAptType] = React.useState('t2')
  const [surface,setSurface] = React.useState(40)
  const [extS,setExtS] = React.useState(0)
  const [extL,setExtL] = React.useState(0)
  const [opts,setOpts] = React.useState({express:false,premium:false})
  const [checkout,setCheckout] = React.useState(false)

  const baseRoom = { salon:120,cuisine:160,chambre:100,sdb:140,bureau:110,pieceAVivre:180,exterieurS:90,exterieurL:140 }
  const baseApt = { t1:220,t2:320,t3:420,t4:520,t5:620 }
  const roomsTotal = Object.entries(rooms).reduce((s,[k,q])=>s+(baseRoom[k]||0)*q,0)
  const aptTotal = (scope!=='piece'?(baseApt[aptType]||0)+Math.max(0,surface-40)*3:0)
  const houseExtTotal = (scope==='maison'?(extS*120+extL*200):0)
  const optionsTotal = (opts.express?49:0)+(opts.premium?79:0)
  const total = roomsTotal + aptTotal + houseExtTotal + optionsTotal

  const inc = k=>setRooms(p=>({...p,[k]:(p[k]||0)+1}))
  const dec = k=>setRooms(p=>({...p,[k]:Math.max(0,(p[k]||0)-1)}))

  return (
    <div className="min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-black/5">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight flex items-center gap-2">
            <span className="inline-block h-7 w-7 rounded-lg bg-gradient-to-tr from-[--pastel-blue] to-brand"></span> theleme.co
          </a>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#valeurs" className="hover:text-black">Valeurs</a>
            <a href="#portfolio" className="hover:text-black">Portfolio</a>
            <a href="#process" className="hover:text-black">Process</a>
            <a href="#configurateur" className="hover:text-black">Configurateur</a>
            <a href="#faq" className="hover:text-black">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#configurateur" className="hidden sm:inline-flex items-center rounded-xl border border-black/10 bg-white px-4 py-2 text-sm hover:bg-black/5">Configurer</a>
            <button onClick={()=>setCheckout(true)} className="inline-flex items-center rounded-xl bg-black text-white px-4 py-2 text-sm">Passer commande</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="reveal relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-[28px] border border-black/5 gradient-blue p-8 lg:p-12">
              <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight">Un design expert,<br/>sur mesure<br/>à partir de 80€</h1>
              <p className="mt-4 text-neutral-700">On refait juste votre intérieur, pas votre compte en banque.</p>
              <ul className="mt-6 space-y-2 text-sm text-neutral-800">
                {["Conception par nos designers humains, pas par une IA","Livré en 5 jours ouvrés","Design sur mesure"].map((t,i)=>(
                  <li key={i} className="flex items-start gap-2">
                    <span className="check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 7L9 18l-5-5" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                    <span className="relative top-[1px]">{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#configurateur" className="inline-flex items-center rounded-xl bg-brand text-white px-5 py-3 text-sm font-medium hover:brightness-110">Configurer mon projet</a>
                <a href="#process" className="inline-flex items-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm hover:bg-black/5">Voir le parcours</a>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm text-neutral-700">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
                <span>7 places disponibles aujourd’hui</span>
              </div>
            </div>
            <div className="grid grid-cols-6 grid-rows-6 gap-4">
              <div className="col-span-3 row-span-3 rounded-2xl overflow-hidden border border-black/10"><img src="/images/hero-room.png" className="h-full w-full object-cover"/></div>
              <div className="col-span-3 row-span-3 rounded-2xl overflow-hidden border border-black/10 gradient-rose"></div>
              <div className="col-span-2 row-span-3 rounded-2xl overflow-hidden border border-black/10 gradient-blue"></div>
              <div className="col-span-4 row-span-3 rounded-2xl overflow-hidden border border-black/10"><img src="/images/pdf-shopping.png" className="h-full w-full object-cover"/></div>
            </div>
          </div>
        </div>
      </section>

{/* VALEURS */}
      <section id="valeurs" className="reveal py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-[#1a365d] mb-4">
            <span className="block">C'est votre style.</span>
            <span className="block">On l'a juste bien rangé.</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {VALS.map((v,i)=>(
              <div key={i} className="rounded-3xl p-8 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300" style={{backgroundColor: v.bgColor}}>
                <div className="relative z-10">
                  <div className="text-2xl font-bold text-[#1a365d] mb-4">{i+1}. {v.title}</div>
                  <p className="text-[#1a365d] text-sm leading-relaxed mb-6">{v.text}</p>
                  <div className="mt-auto">
                    <img src={v.mockup} alt="" className="w-full h-32 object-contain"/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="reveal py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Portfolio</h2>
            <div className="inline-flex gap-2 rounded-2xl border border-black/10 p-2 bg-white">
              {tabs.map(t => (
                <button key={t.k} onClick={()=>setTab(t.k)} className={"px-3 py-2 rounded-xl text-sm " + (tab===t.k?"bg-black text-white":"hover:bg-black/5")}>{t.l}</button>
              ))}
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
            {portfolio[tab].map((img,i)=>(
              <div key={i} className="relative rounded-3xl border border-black/5 overflow-hidden group">
                <img src={img} alt="" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
            ))}
          </div>
        </div>
      </section>




      


      {/* PROCESS 2x2 */}
      <section id="process" className="reveal" className="relative border-t border-black/5">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">Un parcours <span className="font-semibold">simple</span> mais <span className="font-semibold">exhaustif</span></h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {n:1,t:'Passer commande ou réserver un appel',d:'Choisissez une formule ou posez vos questions. Tout est clair.',img:'/images/step-brief.png'},
              {n:2,t:'Remplir le configurateur',d:'Vos pièces, surfaces, contraintes et inspirations.',img:'/images/step-render.png'},
              {n:3,t:'Rendu photoréaliste + avant/après',d:'Vous validez ou demandez des ajustements.',img:'/images/step-approve.png'},
              {n:4,t:'Livrables + shopping list',d:'PDF propre, plan d’action, liens d’achat.',img:'/images/step-delivery.png'},
            ].map((s,i)=>(
              <div key={i} className="rounded-2xl border border-black/10 bg-white p-5 card-shadow">
                <div className="flex items-center gap-3"><div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10 text-brand font-semibold">{s.n}</div><h3 className="font-medium">{s.t}</h3></div>
                <p className="mt-1 text-sm text-neutral-700">{s.d}</p>
                <div className="mt-4 overflow-hidden rounded-xl border border-black/10"><img src={s.img} className="h-40 w-full object-cover"/></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFIGURATEUR */}
      <section id="configurateur" className="reveal" className="relative border-t border-black/5">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Configurateur</h2>
          <p className="mt-2 text-neutral-700">Composez votre panier en 3 étapes, total en direct.</p>

          {/* Stepper */}
          <div className="mt-6 flex items-center gap-2 text-xs text-neutral-700">
            {[1,2,3].map(i => (
              <div key={i} className={`inline-flex items-center gap-2 ${i<3?'after:content-[""] after:w-8 after:h-px after:bg-black/10':''}`}>
                <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${step===i?'bg-brand text-white':'bg-black/5'}`}>{i}</span>
                <span>{i===1?'Type de projet': i===2?'Détails': 'Options & récap'}</span>
              </div>
            ))}
          </div>

          {step===1 && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {k:'piece', t:'Pièce(s) à l’unité', d:'Ajoutez les pièces nécessaires (quantité autorisée).'},
                {k:'appartement', t:'Appartement entier', d:'Sélectionnez le type (T1–T5+) et la surface.'},
                {k:'maison', t:'Maison entière', d:'Type + surface, extérieur possible.'},
              ].map(c=>(
                <button key={c.k} onClick={()=>setScope(c.k)} className={`text-left rounded-2xl border p-5 bg-white hover:shadow-md transition ${scope===c.k?'border-brand':'border-black/10'}`}>
                  <div className="font-medium">{c.t}</div>
                  <p className="mt-1 text-sm text-neutral-700">{c.d}</p>
                </button>
              ))}
              <div className="md:col-span-3 flex justify-end">
                <button onClick={()=>setStep(2)} className="inline-flex items-center rounded-xl bg-brand text-white px-5 py-3 text-sm">Continuer</button>
              </div>
            </div>
          )}

          {step===2 && (
            <div className="mt-6 space-y-6">
              {scope==='piece' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {k:'salon',l:'Salon'},{k:'cuisine',l:'Cuisine'},{k:'chambre',l:'Chambre'},
                    {k:'sdb',l:'Salle de bain'},{k:'bureau',l:'Bureau'},{k:'pieceAVivre',l:'Pièce à vivre (≤3 zones)'},
                    {k:'exterieurS',l:'Extérieur <10 m²'},{k:'exterieurL',l:'Extérieur ≥10 m²'}
                  ].map(r=>(
                    <div key={r.k} className="rounded-2xl border border-black/10 bg-white p-5">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{r.l}</div>
                        <span className="text-xs text-neutral-600">{EUR(baseRoom[r.k])}</span>
                      </div>
                      <div className="mt-4 flex items-center gap-3">
                        <button onClick={()=>dec(r.k)} className="h-8 w-8 rounded-lg border border-black/10">−</button>
                        <div className="w-10 text-center">{rooms[r.k]||0}</div>
                        <button onClick={()=>inc(r.k)} className="h-8 w-8 rounded-lg border border-black/10">+</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {scope!=='piece' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="rounded-2xl border border-black/10 bg-white p-5">
                    <label className="text-sm font-medium">Type</label>
                    <select className="mt-2 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm" value={aptType} onChange={e=>setAptType(e.target.value)}>
                      <option value="t1">T1</option><option value="t2">T2</option><option value="t3">T3</option><option value="t4">T4</option><option value="t5">T5+</option>
                    </select>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white p-5">
                    <label className="text-sm font-medium">Surface (m²)</label>
                    <input type="number" min={20} value={surface} onChange={e=>setSurface(Math.max(0,+e.target.value))} className="mt-2 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm"/>
                    <p className="mt-2 text-xs text-neutral-600">Au‑delà de 40 m² : +3€/m².</p>
                  </div>
                  {scope==='maison' && (
                    <div className="rounded-2xl border border-black/10 bg-white p-5">
                      <p className="text-sm font-medium">Extérieur à remodeler</p>
                      <div className="mt-3 space-y-3">
                        <div className="flex items-center justify-between"><span>Extérieur <10m²</span><div className="flex items-center gap-2"><button onClick={()=>setExtS(v=>Math.max(0,v-1))} className="h-8 w-8 rounded-lg border border-black/10">−</button><div className=\"w-10 text-center">{extS}</div><button onClick={()=>setExtS(v=>v+1)} className=\"h-8 w-8 rounded-lg border border-black/10">+</button></div></div>
                        <div className="flex items-center justify-between"><span>Extérieur ≥10m²</span><div className="flex items-center gap-2"><button onClick={()=>setExtL(v=>Math.max(0,v-1))} className="h-8 w-8 rounded-lg border border-black/10">−</button><div className=\"w-10 text-center">{extL}</div><button onClick={()=>setExtL(v=>v+1)} className=\"h-8 w-8 rounded-lg border border-black/10">+</button></div></div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="flex justify-between">
                <button onClick={()=>setStep(1)} className="inline-flex items-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm hover:bg-black/5">Retour</button>
                <button onClick={()=>setStep(3)} className="inline-flex items-center rounded-xl bg-brand text-white px-5 py-3 text-sm">Continuer</button>
              </div>
            </div>
          )}

          {step===3 && (
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-black/10 bg-white p-5">
                <p className="text-sm font-medium mb-3">Options</p>
                {[{k:'express',l:'Livraison express (48–72h)',p:49},{k:'premium',l:'Touch‑up premium +3 visuels',p:79}].map(o=>(
                  <label key={o.k} className="flex items-center justify-between rounded-xl border border-black/10 bg-white p-3 cursor-pointer transition hover:shadow-sm">
                    <span className="text-sm">{o.l}</span>
                    <span className="text-xs text-neutral-600 mr-3">+{EUR(o.p)}</span>
                    <input type="checkbox" checked={!!opts[o.k]} onChange={()=>setOpts(prev=>({...prev,[o.k]:!prev[o.k]}))} className="h-4 w-4 accent-black"/>
                  </label>
                ))}
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-5 lg:col-span-2">
                <p className="text-sm font-medium">Votre récapitulatif</p>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="rounded-xl border border-black/10 bg-white p-3"><p className="text-neutral-600">Type</p><p className="font-medium">{scope}</p></div>
                  <div className="rounded-xl border border-black/10 bg-white p-3"><p className="text-neutral-600">Surface</p><p className="font-medium">{surface} m²</p></div>
                  <div className="rounded-xl border border-black/10 bg-white p-3"><p className="text-neutral-600">Pièces</p><p className="font-medium">{Object.entries(rooms).filter(([k,q])=>q>0).map(([k,q])=>`${k}×${q}`).join(', ')||'—'}</p></div>
                  <div className="rounded-xl border border-black/10 bg-white p-3"><p className="text-neutral-600">Options</p><p className="font-medium">{Object.entries(opts).filter(([k,v])=>v).map(([k])=>k).join(', ')||'—'}</p></div>
                </div>
                <div className="mt-4 border-t border-black/10 pt-4 flex items-center justify-between">
                  <p className="text-neutral-600">Total estimé</p><p className="text-2xl font-semibold">{EUR(total)}</p>
                </div>
                <div className="mt-4 flex gap-2">
                  <button onClick={()=>setStep(2)} className="inline-flex items-center rounded-xl border border-black/10 bg-white px-4 py-3 text-sm hover:bg-black/5">Retour</button>
                  <button onClick={()=>setCheckout(true)} className="inline-flex items-center rounded-xl bg-brand text-white px-4 py-3 text-sm">Passer commande</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Checkout Modal */}
      {checkout && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center modal-backdrop p-0 sm:p-4">
          <div className="w-full sm:w-[560px] rounded-t-2xl sm:rounded-2xl bg-white card-shadow border border-black/10 overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-black/10">
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold">Paiement sécurisé</div>
                <button onClick={()=>setCheckout(false)} className="h-8 w-8 rounded-lg border border-black/10">✕</button>
              </div>
              <p className="text-sm text-neutral-600 mt-1">Total dû : <span className="font-medium">{EUR(total)}</span></p>
            </div>
            <div className="p-4 sm:p-6 space-y-4">
              <label className="text-sm font-medium">Nom complet*</label>
              <input className="w-full rounded-xl border border-black/10 px-3 py-2 text-sm" placeholder="Votre nom" />
              <label className="text-sm font-medium">Adresse e‑mail*</label>
              <input className="w-full rounded-xl border border-black/10 px-3 py-2 text-sm" placeholder="votre@email.com" />
              <div className="rounded-xl border border-black/10 p-3 text-sm">
                <div className="mb-2">Payer avec</div>
                <div className="flex gap-2">
                  <button className="flex-1 h-11 rounded-lg border border-black/10 bg-black text-white text-sm">Google Pay</button>
                  <button className="flex-1 h-11 rounded-lg border border-black/10 bg-black text-white text-sm">Apple Pay</button>
                </div>
                <div className="my-3 text-center text-xs text-neutral-500">ou carte bancaire</div>
                <div className="grid grid-cols-3 gap-2">
                  <input className="rounded-lg border border-black/10 px-3 py-2 text-sm" placeholder="Numéro de carte" />
                  <input className="rounded-lg border border-black/10 px-3 py-2 text-sm" placeholder="MM / AA" />
                  <input className="rounded-lg border border-black/10 px-3 py-2 text-sm" placeholder="CVC" />
                </div>
              </div>
              <button className="w-full h-11 rounded-xl bg-brand text-white text-sm font-medium">Payer {EUR(total)}</button>
              <p className="text-xs text-neutral-500 text-center">Paiements sécurisés & chiffrés — propulsés par Stripe.</p>
            </div>
          </div>
        </div>
      )}


      {/* FOOTER */}
      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} theleme.co — Interior design, minus the drama.</p>
          <div className="flex items-center gap-4"><a href="#" className="hover:text-black">Mentions</a><a href="#" className="hover:text-black">CGV</a><a href="#" className="hover:text-black">Contact</a></div>
        </div>
      </footer>
    </div>
  )
}


const VALS = [
  { 
    title:'Design Inoubliable', 
    text:'Nous créons des intérieurs qui marquent les esprits, renforcent votre identité et garantissent que votre espace laisse une impression durable.', 
    bgColor:'#FFB3BA',
    mockup:'/images/hero1.svg'
  },
  { 
    title:'Allure Professionnelle Premium', 
    text:'Un rendu impeccable et sophistiqué sur tous supports et dans tous les espaces, pour une image de marque cohérente.', 
    bgColor:'#BFDBFE',
    mockup:'/images/hero2.svg'
  },
  { 
    title:'Design Intemporel', 
    text:'Nous concevons des espaces qui résisteront à l\'épreuve du temps et vous prépareront au succès à long terme.', 
    bgColor:'#D4F1A4',
    mockup:'/images/hero3.svg'
  },
  { 
    title:'Adapté à Votre Univers', 
    text:'Nos créations sont guidées par une recherche approfondie, garantissant un attrait direct auprès de votre clientèle cible.', 
    bgColor:'#E0C3FC',
    mockup:'/images/hero4.svg'
  }
]

