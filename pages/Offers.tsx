import React from 'react';
import { Check, ArrowRight, Plus, Star, BarChart, Settings, Map } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Offers: React.FC = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contact');
  };

  const options = [
    {
      icon: <Settings size={32} />,
      title: "Site / Landing Page",
      price: "400 - 1200 €",
      description: "Création d'un support en ligne simple et moderne, optimisé pour générer des appels. Design professionnel sur mobile.",
      subPrices: "Page simple (400-700€) ou Site 2-4 pages (700-1200€)"
    },
    {
      icon: <BarChart size={32} />,
      title: "Rentabilité sur Excel / Sheets",
      price: "350 - 450 €",
      description: "Analyse de vos devis passés et création d'un outil de calcul sur mesure pour connaître vos marges avant chaque chantier.",
      subPrices: "Outil unique et accompagnement"
    },
    {
      icon: <Star size={32} />,
      title: "Suivi Mensuel",
      price: "90 - 150 € / mois",
      description: "Un rendez-vous régulier pour suivre les chiffres, ajuster l'organisation et mettre à jour vos outils. Rapport mensuel inclus.",
      subPrices: "Accompagnement régulier"
    },
    {
      icon: <Map size={32} />,
      title: "Visibilité Locale & Conversion",
      price: "250 - 300 €",
      description: "Optimisation complète de votre fiche Google My Business et mise en place d'un système simple pour collecter plus d'avis.",
      subPrices: "Boost de confiance"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Nos Offres</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Un forfait clair pour l'essentiel, et des options à la carte selon vos besoins.
          </p>
        </div>
      </section>

      {/* Main Package Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-secondary overflow-hidden">
            <div className="bg-secondary p-6 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Forfait Tranquillité Artisan</h2>
              <p className="opacity-90 font-medium">L'offre recommandée pour 80% des entreprises</p>
            </div>
            
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-6">Ce que nous mettons en place :</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-3 shrink-0 mt-0.5" size={20} />
                      <div>
                        <span className="font-semibold text-primary block">Sécurisation des appels</span>
                        <span className="text-sm text-slate-600">Répondeur pro, SMS auto, routine rappel.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-3 shrink-0 mt-0.5" size={20} />
                      <div>
                        <span className="font-semibold text-primary block">Devis & Factures Carrés</span>
                        <span className="text-sm text-slate-600">Mise en place logiciel simple et modèles.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-3 shrink-0 mt-0.5" size={20} />
                      <div>
                        <span className="font-semibold text-primary block">Analyse Rentabilité</span>
                        <span className="text-sm text-slate-600">Calcul des charges et tarif minimum.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-3 shrink-0 mt-0.5" size={20} />
                      <div>
                        <span className="font-semibold text-primary block">Organisation Semaine</span>
                        <span className="text-sm text-slate-600">Structure pour ne plus subir le planning.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-3 shrink-0 mt-0.5" size={20} />
                      <div>
                        <span className="font-semibold text-primary block">Base Visibilité</span>
                        <span className="text-sm text-slate-600">Audit Google et méthode avis clients.</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-col justify-center items-center bg-slate-50 rounded-xl p-8 border border-slate-100">
                  <div className="text-center mb-6">
                    <span className="block text-slate-500 text-sm font-semibold uppercase tracking-wide mb-2">Prix indicatif</span>
                    <span className="block text-4xl md:text-5xl font-bold text-primary mb-2">490 - 690 €</span>
                    <span className="block text-slate-500 italic text-sm">Paiement unique, sans surprise</span>
                  </div>
                  <button 
                    onClick={handleContact}
                    className="w-full bg-accent hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    Demander un diagnostic gratuit
                    <ArrowRight size={20} />
                  </button>
                  <p className="mt-4 text-xs text-center text-slate-400">
                    Le diagnostic confirmera si ce forfait est adapté à votre situation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Options Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Les Options à la Carte</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Ajoutez uniquement ce dont vous avez besoin, quand vous en avez besoin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {options.map((opt, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-secondary transition-colors flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-white p-4 rounded-full text-secondary shadow-sm shrink-0">
                  {opt.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">{opt.title}</h3>
                  <div className="text-accent font-bold text-lg mb-3">{opt.price}</div>
                  <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                    {opt.description}
                  </p>
                  <div className="text-xs font-semibold text-slate-400 bg-white px-3 py-1 inline-block rounded-full border border-slate-100">
                    {opt.subPrices}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-500 mb-6">
              Notre méthode : Diagnostic → Proposition → Mise en place → Suivi.<br/>
              Pas d'abonnement obligatoire (sauf option suivi mensuel), pas de vente forcée.
            </p>
            <button 
              onClick={handleContact}
              className="inline-flex items-center text-secondary font-bold hover:underline text-lg"
            >
              Contactez-nous pour en parler <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;