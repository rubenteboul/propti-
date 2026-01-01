import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight, Loader2, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    // Map id 'contact-name' to 'name', etc.
    const key = id.replace('contact-', '');
    setFormData(prev => ({
      ...prev,
      [key]: value
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
          source: 'Page Contact - Message général'
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', company: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">Contactez-nous</h1>
          <p className="text-lg text-slate-600">
            Une question ? Un besoin ? Nous vous répondons sous 24h.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info Side */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center h-full">
            <h2 className="text-2xl font-bold text-primary mb-8">Nos coordonnées</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-lg mr-4">
                  <Phone className="text-secondary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-1">Téléphone</p>
                  <a href="tel:+33685019697" className="text-xl font-medium text-primary hover:text-secondary transition-colors">
                    06 85 01 96 97
                  </a>
                  <p className="text-slate-500 text-sm mt-1">Du lundi au vendredi, 9h-18h</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-lg mr-4">
                  <Mail className="text-secondary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:contact@proptimisation.com" className="text-xl font-medium text-primary hover:text-secondary transition-colors">
                    contact@proptimisation.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-lg mr-4">
                  <MapPin className="text-secondary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-1">Siège social</p>
                  <p className="text-xl font-medium text-primary">
                    Paris, France
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate-100">
            <h2 className="text-2xl font-bold text-primary mb-2">Envoyez-nous un message</h2>
            <p className="text-slate-500 mb-8">Remplissez ce formulaire pour être rappelé.</p>
            
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-8 rounded-lg text-center">
                 <div className="flex justify-center mb-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Check size={32} className="text-green-600" />
                    </div>
                  </div>
                <h3 className="text-xl font-bold mb-2">Message envoyé !</h3>
                <p>Merci de nous avoir contactés. Nous reviendrons vers vous sous 24h.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-green-700 font-semibold hover:underline"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-primary mb-2">Nom</label>
                    <input 
                      type="text" 
                      id="contact-name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-semibold text-primary mb-2">Téléphone</label>
                    <input 
                      type="tel" 
                      id="contact-phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                      placeholder="06 85 01 96 97"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-company" className="block text-sm font-semibold text-primary mb-2">Nom de l'entreprise (optionnel)</label>
                    <input 
                      type="text" 
                      id="contact-company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                      placeholder="Votre entreprise"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-primary mb-2">Email (optionnel)</label>
                    <input 
                      type="email" 
                      id="contact-email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-primary mb-2">Message (optionnel)</label>
                  <textarea 
                    id="contact-message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                    placeholder="Comment pouvons-nous vous aider ?"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                    Une erreur est survenue lors de l'envoi.
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-accent hover:bg-orange-600 disabled:bg-slate-400 text-white font-bold py-4 rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="animate-spin" size={20} /> Envoi...
                    </>
                  ) : (
                    <>
                      Envoyer ma demande <ArrowRight size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;