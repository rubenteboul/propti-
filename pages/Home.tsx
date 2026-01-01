import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Check, XCircle, ArrowRight, Phone, FileText, TrendingUp, Calendar, MapPin, Loader2 } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();
  
  // Gestion du formulaire
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    businessType: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleScrollToForm = () => {
    const element = document.getElementById('contact-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/contact');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // REMPLACER L'URL CI-DESSOUS PAR VOTRE URL FORMSPREE
      const response = await fetch("https://formspree.io/f/xgovoldb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: 'Page Accueil - Formulaire de rappel'
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', company: '', phone: '', businessType: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative bg-white pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 tracking-tight leading-tight">
            On vous aide à mieux organiser votre entreprise
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Moins de perte de temps, plus de clients, des outils simples qui fonctionnent.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={handleScrollToForm}
              className="w-full sm:w-auto bg-accent hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg shadow-md transition-all transform hover:-translate-y-0.5"
            >
              Être rappelé
            </button>
            <Link 
              to="/offres"
              className="w-full sm:w-auto bg-white border-2 border-slate-200 hover:border-secondary hover:text-secondary text-slate-700 font-bold py-3.5 px-8 rounded-lg transition-all"
            >
              Découvrir notre méthode
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Problems Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Vous reconnaissez-vous dans ces situations ?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
                <XCircle className="text-red-500" size={32} />
              </div>
              <p className="text-lg font-medium text-slate-800">
                Vous perdez du temps sur des tâches administratives
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
                <XCircle className="text-red-500" size={32} />
              </div>
              <p className="text-lg font-medium text-slate-800">
                Vous ne disposez pas d’outils simples pour gérer devis et factures
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
                <XCircle className="text-red-500" size={32} />
              </div>
              <p className="text-lg font-medium text-slate-800">
                Vous ne savez pas exactement ce qui est rentable pour vous
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Solution Section (Detailed 5 points) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                Concrètement, qu’est-ce qu’on fait pour vous ?
              </h2>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  icon: <Phone size={24} />,
                  title: "Sécuriser vos appels",
                  desc: "Message vocal optimisé, SMS automatique après un appel manqué, routine de rappel."
                },
                {
                  icon: <FileText size={24} />,
                  title: "Simplifier devis & factures",
                  desc: "Outil clair, modèles prêts à l'emploi, facturation rapide."
                },
                {
                  icon: <TrendingUp size={24} />,
                  title: "Connaître votre rentabilité",
                  desc: "Calculer charges et heures facturables, définir un tarif minimum rentable."
                },
                {
                  icon: <Calendar size={24} />,
                  title: "Organiser votre semaine",
                  desc: "Structurer les moments dédiés aux chantiers, rappels et administratif."
                },
                {
                  icon: <MapPin size={24} />,
                  title: "Valoriser votre visibilité locale",
                  desc: "Optimiser votre fiche Google My Business et collecter des avis."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start md:items-center p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 mr-6 bg-white text-secondary p-4 rounded-full shadow-sm border border-slate-100">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-slate-600 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl font-medium text-slate-600 inline-block py-4">
                Tout est pensé pour être simple, efficace et adapté aux petites entreprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Pricing/Accessibility Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Pourquoi nos prix sont accessibles
          </h2>
          <div className="space-y-6 text-lg md:text-xl leading-relaxed opacity-90 mb-8">
            <p>
              Nous sommes un collectif d’étudiants issus d’écoles comme <strong>HEC, ESSEC, ESCP, Polytechnique, Centrale, LBS ou LSE</strong>.
            </p>
            <p>
              Tous les projets sont supervisés pour garantir un résultat professionnel.
            </p>
            <p>
              Nous appliquons nos compétences sur des cas réels et vous profitez de notre expertise à un tarif accessible. Pas de vente forcée.
            </p>
            <p className="font-semibold text-accent text-2xl pt-4">
              Un modèle simple, gagnant pour tout le monde.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Contact Form Section */}
      <section id="contact-form-section" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-primary mb-2">
                  Parlons de votre entreprise
                </h2>
                <p className="text-lg text-slate-500">
                  Nous vous rappelons gratuitement et sans engagement pour comprendre votre situation en 5 minutes.
                </p>
              </div>

              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-8 rounded-lg text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Check size={32} className="text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Merci !</h3>
                  <p>Votre demande a bien été reçue. Nous vous rappellerons très prochainement.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-green-700 font-semibold hover:underline"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">Nom</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-primary mb-2">Nom de l'entreprise</label>
                    <input 
                      type="text" 
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                      placeholder="Votre entreprise"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">Téléphone</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                      placeholder="06 85 01 96 97"
                    />
                  </div>

                  <div>
                    <label htmlFor="businessType" className="block text-sm font-semibold text-primary mb-2">Type d'entreprise (Optionnel)</label>
                    <select 
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors bg-white"
                    >
                      <option value="">Sélectionnez une option</option>
                      <option value="artisan">Artisan (BTP, Coiffeur, etc.)</option>
                      <option value="commerce">Commerce de proximité</option>
                      <option value="liberal">Profession libérale</option>
                      <option value="pme">Dirigeant PME</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  {status === 'error' && (
                    <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                      Une erreur est survenue. Merci de nous appeler directement si le problème persiste.
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-accent hover:bg-orange-600 disabled:bg-slate-400 text-white font-bold py-4 rounded-lg shadow-md transition-all text-lg flex items-center justify-center gap-2 group"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="animate-spin" size={20} /> Envoi en cours...
                      </>
                    ) : (
                      <>
                        Être rappelé gratuitement
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;