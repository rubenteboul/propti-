import React, { useState, useRef } from 'react';
import { Send, GraduationCap, Clock, Award, Loader2, Check, Upload, AlertCircle } from 'lucide-react';

const Recruitment: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    school: '',
    motivation: ''
  });
  const [fileError, setFileError] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Vérification taille (10Mo max)
      if (file.size > 10 * 1024 * 1024) {
        setFileError("Le fichier dépasse la limite de 10 Mo.");
        if (fileInputRef.current) fileInputRef.current.value = "";
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (fileError) return;

    setStatus('submitting');

    try {
      // ---------------------------------------------------------
      // MÉTHODE ROBUSTE : Construction automatique depuis le DOM
      // ---------------------------------------------------------
      // Cela permet au navigateur de gérer correctement les en-têtes (boundaries)
      // pour l'upload de fichiers, ce qui échoue souvent manuellement.
      const formElement = e.currentTarget;
      const data = new FormData(formElement);
      
      // Configuration Formspree : Sujet de l'email
      data.set('_subject', `Nouvelle candidature de ${formData.name}`);
      // Source pour vos stats
      data.set('source', 'Page Recrutement');

      const response = await fetch("https://formspree.io/f/xgovoldb", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
          // NE PAS AJOUTER 'Content-Type'. Le navigateur le fait tout seul pour les fichiers.
        }
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', school: '', motivation: '' });
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Erreur Formspree:", errorData);
        setStatus('error');
      }
    } catch (error) {
      console.error("Erreur réseau:", error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Rejoignez l'aventure Proptimisation</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Vous êtes étudiant en école de commerce ou d'ingénieur ?
            Gagnez en expérience en aidant des entrepreneurs concrets.
          </p>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Expérience Réelle</h3>
              <p className="text-slate-600">
                Appliquez vos connaissances sur le terrain avec de vrais clients et de vrais enjeux business.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Rémunération Juste</h3>
              <p className="text-slate-600">
                Un modèle gagnant-gagnant qui valorise votre travail et votre implication.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Flexibilité</h3>
              <p className="text-slate-600">
                Missions ponctuelles adaptées à votre emploi du temps étudiant.
              </p>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden max-w-2xl mx-auto">
            <div className="p-8 md:p-10">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">Postuler maintenant</h2>
              
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-8 rounded-lg text-center">
                   <div className="flex justify-center mb-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Check size={32} className="text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Candidature reçue !</h3>
                  <p>Merci pour votre intérêt. Nous étudierons votre profil et reviendrons vers vous.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-green-700 font-semibold hover:underline"
                  >
                    Envoyer une autre candidature
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit} encType="multipart/form-data">
                  {/* Honeypot anti-spam Formspree */}
                  <input type="text" name="_gotcha" style={{ display: 'none' }} />

                  <div>
                    <label htmlFor="student-name" className="block text-sm font-semibold text-primary mb-2">Nom complet</label>
                    <input 
                      type="text" 
                      id="student-name"
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="student-email" className="block text-sm font-semibold text-primary mb-2">Email</label>
                    <input 
                      type="email" 
                      id="student-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="student-school" className="block text-sm font-semibold text-primary mb-2">École / Formation</label>
                    <input 
                      type="text" 
                      id="student-school"
                      name="school"
                      value={formData.school}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="student-cv" className="block text-sm font-semibold text-primary mb-2">
                      CV (PDF, Word)
                    </label>
                    <div className="relative">
                      {/* L'attribut name="upload" est crucial pour Formspree */}
                      <input 
                        type="file" 
                        id="student-cv"
                        name="upload"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="w-full text-sm text-slate-500
                          file:mr-4 file:py-3 file:px-6
                          file:rounded-l-lg file:border-0
                          file:text-sm file:font-semibold
                          file:bg-blue-50 file:text-secondary
                          hover:file:bg-blue-100
                          border border-gray-300 rounded-lg cursor-pointer
                        "
                      />
                      <div className="absolute right-3 top-3 pointer-events-none text-slate-400">
                        <Upload size={20} />
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-xs text-slate-500">Format accepté : PDF, DOCX (Max 10Mo)</p>
                      {fileError && <span className="text-xs text-red-500 font-semibold">{fileError}</span>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="student-motivation" className="block text-sm font-semibold text-primary mb-2">Pourquoi vous ? (court)</label>
                    <textarea 
                      id="student-motivation"
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                    ></textarea>
                  </div>
                  
                  {status === 'error' && (
                    <div className="flex items-start gap-3 p-4 bg-red-50 text-red-700 rounded-lg text-sm border border-red-100">
                      <AlertCircle className="shrink-0 mt-0.5" size={18} />
                      <div>
                        <strong>Erreur lors de l'envoi.</strong>
                        <p className="mt-1">
                          Vérifiez votre connexion internet ou réessayez avec un fichier plus léger.
                          <br />
                          En cas d'échec répété, contactez-nous directement : <a href="mailto:contact@proptimisation.com" className="underline font-bold">contact@proptimisation.com</a>.
                        </p>
                      </div>
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={status === 'submitting' || !!fileError}
                    className="w-full bg-secondary hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="animate-spin" size={20} /> Envoi...
                      </>
                    ) : (
                      <>
                        Envoyer ma candidature <Send size={20} />
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

export default Recruitment;