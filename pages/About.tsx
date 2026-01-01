import React from 'react';
import { Users, Lightbulb, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Notre Mission</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Rendre la digitalisation et l'optimisation accessibles à ceux qui font tourner l'économie réelle : les artisans et les TPE.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Une vision simple</h2>
              <p className="text-slate-600 text-lg mb-4">
                Nous sommes partis d'un constat simple : les grandes entreprises ont des départements entiers pour s'optimiser. Les artisans, eux, doivent tout faire tout seuls.
              </p>
              <p className="text-slate-600 text-lg mb-4">
                Proptimisation comble ce vide en proposant des solutions pragmatiques, mises en œuvre par un collectif d'étudiants issus d'écoles prestigieuses (<strong>HEC, ESSEC, ESCP, Polytechnique, Centrale, LBS, LSE...</strong>).
              </p>
              <p className="text-slate-600 text-lg">
                 Ces projets sont encadrés et validés, garantissant sérieux et professionnalisme. Vous bénéficiez ainsi de compétences de haut niveau à un tarif adapté.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <Users className="text-secondary mx-auto mb-3" size={32} />
                <span className="block font-bold text-primary">Humain</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <Lightbulb className="text-secondary mx-auto mb-3" size={32} />
                <span className="block font-bold text-primary">Pragmatique</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center col-span-2">
                <Heart className="text-accent mx-auto mb-3" size={32} />
                <span className="block font-bold text-primary">Gagnant-Gagnant</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-12 text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">Envie d'en savoir plus ?</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Que vous soyez un artisan cherchant à gagner du temps ou un étudiant cherchant de l'expérience, nous avons une place pour vous.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-primary hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Contactez-nous
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;