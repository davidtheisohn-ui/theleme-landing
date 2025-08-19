import React from "react";

function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <h1 className="text-4xl font-bold text-center max-w-2xl">
          Un design expert, sur mesure, à partir de 80€
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl text-center">
          On refait juste votre intérieur, pas votre compte en banque.
        </p>
        <div className="mt-6 flex gap-4">
          <button className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700">
            Configurer mon projet
          </button>
          <button className="px-6 py-3 rounded-xl border border-gray-300 bg-white hover:bg-gray-50">
            Voir le parcours
          </button>
        </div>
      </section>

      {/* Section Valeurs */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <svg className="mx-auto mb-4" width="60" height="60" viewBox="0 0 100 100">
              <rect x="10" y="10" width="80" height="80" rx="10" fill="#2563EB" />
            </svg>
            <h3 className="font-semibold text-xl">Design humain</h3>
            <p className="text-gray-600 mt-2">Conception par nos designers humains, pas une IA.</p>
          </div>
          <div>
            <svg className="mx-auto mb-4" width="60" height="60" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="#2563EB" />
            </svg>
            <h3 className="font-semibold text-xl">Livraison rapide</h3>
            <p className="text-gray-600 mt-2">Votre projet livré en 5 jours ouvrés.</p>
          </div>
          <div>
            <svg className="mx-auto mb-4" width="60" height="60" viewBox="0 0 100 100">
              <polygon points="50,10 90,90 10,90" fill="#2563EB" />
            </svg>
            <h3 className="font-semibold text-xl">Sur mesure</h3>
            <p className="text-gray-600 mt-2">Chaque intérieur est pensé rien que pour vous.</p>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Votre parcours en 4 étapes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-6 bg-white rounded-2xl shadow">
              <h3 className="font-semibold text-lg mb-2">1. Remplissez le questionnaire</h3>
              <p className="text-gray-600">Partagez vos besoins et votre style préféré.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow">
              <h3 className="font-semibold text-lg mb-2">2. Plan 3D & proposition</h3>
              <p className="text-gray-600">Nos designers créent une première proposition en 3D.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow">
              <h3 className="font-semibold text-lg mb-2">3. Modifications illimitées</h3>
              <p className="text-gray-600">Vous ajustez et affinez jusqu’à satisfaction.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow">
              <h3 className="font-semibold text-lg mb-2">4. Livrable final</h3>
              <p className="text-gray-600">Plan 3D, rendu photoréaliste & shopping list.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
