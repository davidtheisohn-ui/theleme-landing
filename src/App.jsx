import React from "react";
import "./index.css";

export default function App(){
  const [rooms,setRooms] = React.useState({ salon:0, cuisine:0, chambre:0, sdb:0, bureau:0, pieceAVivre:0, exterieurS:0, exterieurL:0 })
  React.useEffect(()=>{
    const els = Array.from(document.querySelectorAll('.reveal, .reveal-stagger'))
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in') } })
    },{ threshold:.15, rootMargin:"0px 0px -10% 0px" })
    els.forEach(el=>io.observe(el))
    return ()=> io.disconnect()
  },[])

  const VALS = [
    {title:"Transformez votre espace, sans effort", text:"Nous repensons votre intérieur pour qu’il soit à la fois beau, fonctionnel et parfaitement adapté à votre mode de vie.", bg:"linear-gradient(180deg, #FAD1DC 0%, #FFE7EE 100%)", img:"/images/valeurs/1.svg"},
    {title:"Pensé pour vous, pas (que) pour Instagram", text:"Vos contraintes deviennent des solutions. Vos goûts, notre point de départ. Fonctionnel. Élégant. Cohérent.", bg:"linear-gradient(180deg, #D6E6FF 0%, #ECF3FF 100%)", img:"/images/valeurs/2.svg"},
    {title:"Voir le résultat avant de bouger un meuble", text:"Des rendus réalistes pour décider en toute confiance. On remplace le doute par un “wow”.", bg:"linear-gradient(180deg, #FFF3B0 0%, #FFF8CF 100%)", img:"/images/valeurs/3.svg"},
    {title:"Avancez à votre rythme", text:"Un process fluide, sans RDV inutiles ni devis flous. Vous avancez à votre rythme — nous, on s’occupe du reste.", bg:"linear-gradient(180deg, #EADCFD 0%, #F4EFFF 100%)", img:"/images/valeurs/4.svg"}
  ]

  return (
    <div className="text-neutral-900">
      {/* HEADER */}
      <header id="header" className="sticky top-0 z-50 bg-white/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-extrabold text-xl">theleme.co</div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#portfolio" className="hover:text-black">Portfolio</a>
            <a href="#process" className="hover:text-black">Process</a>
            <a href="#configurateur" className="hover:text-black">Configurateur</a>
            <a href="#faq" className="hover:text-black">FAQ</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="reveal py-20" style={{background:"radial-gradient(1200px 600px at 10% 0%, #EAF2FF 0%, #FFFFFF 50%)"}}>
        <div className="max-w-3xl mx-auto text-center px-6">
          <h1 className="text-5xl font-bold leading-tight">Un design expert, sur mesure</h1>
          <p className="mt-4 text-lg opacity-80">On refait juste votre intérieur, pas votre compte en banque.</p>
          <div className="mt-8 flex justify-center gap-3">
            <a href="#configurateur" className="bg-black text-white px-6 py-3 rounded-xl">Configurer</a>
            <a href="#process" className="px-6 py-3 rounded-xl border border-black/10">Voir le parcours</a>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section id="valeurs" className="reveal py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tight mb-8">
            <span className="block">C’est votre style.</span>
            <span className="block">On l’a juste bien rangé.</span>
          </h2>
          <div className="reveal-stagger grid md:grid-cols-4 gap-6">
            {VALS.map((v,i)=>(
              <div key={i} className="relative rounded-3xl overflow-hidden shadow" style={{background:v.bg}}>
                <div className="p-6 relative z-10">
                  <div className="text-sm font-semibold opacity-70 mb-2">{i+1}.</div>
                  <h3 className="text-xl font-bold leading-tight">{v.title}</h3>
                  <p className="mt-3 text-sm opacity-80">{v.text}</p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-36 flex items-end justify-center pointer-events-none" style={{mixBlendMode:'multiply', opacity:.95}}>
                  <img src={v.img} alt="" className="w-full h-full object-cover"/>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-white/0 to-white/30 pointer-events-none"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="reveal py-16" style={{background:"linear-gradient(180deg,#F8FAFF 0%, #FFFFFF 100%)"}}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8">Portfolio</h2>
          <p className="opacity-70">Ajoutez ici vos rendus par pièce (onglets ou filtres).</p>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="reveal py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8">Process</h2>
          <p className="opacity-70">4 étapes : Onboarding → Plan 3D → Modifs → Livrable final.</p>
        </div>
      </section>

      {/* CONFIGURATEUR */}
      <section id="configurateur" className="reveal py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Configurateur</h2>
          <div className="rounded-xl border border-black/10 bg-white p-4">
            <p className="text-xs text-neutral-600">Panier</p>
            <ul className="mt-2 divide-y divide-black/5">
              {Object.entries(rooms).filter(([k,q])=>q>0).map(([k,q])=>{
                const labels = {salon:'Salon',cuisine:'Cuisine',chambre:'Chambre',sdb:'Salle de bain',bureau:'Bureau',pieceAVivre:'Pièce à vivre',exterieurS:'Extérieur <10m²',exterieurL:'Extérieur ≥10m²'}
                return (
                  <li key={k} className="flex items-center gap-3 py-1.5">
                    <span className="inline-block w-2 h-2 rounded-full bg-black"></span>
                    <span className="text-sm">{labels[k]||k}</span>
                    <span className="ml-auto text-sm font-semibold">×{q}</span>
                  </li>
                )
              })}
              {Object.values(rooms).every(q=>q===0) && (
                <li className="py-1.5 text-sm text-neutral-500">Aucune pièce sélectionnée</li>
              )}
            </ul>
            <a href="#header" className="mt-4 block text-center bg-black text-white rounded-lg py-2">Passer commande</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="reveal py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8">FAQ</h2>
          <p className="opacity-70">Questions fréquentes à compléter.</p>
        </div>
      </section>
    </div>
  )
}
