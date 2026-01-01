import React from 'react';

const Legal: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-primary mb-8">Mentions Légales</h1>
        
        <div className="space-y-8 text-slate-600">
          <section>
            <h2 className="text-xl font-bold text-primary mb-3">1. Éditeur du site</h2>
            <p>
              Le site proptimisation.com est édité par Proptimisation.<br/>
              Siège social : Paris, France<br/>
              Email : contact@proptimisation.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">2. Hébergement</h2>
            <p>
              Ce site est hébergé par [Nom de l'hébergeur], [Adresse de l'hébergeur].
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">3. Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">4. Données personnelles</h2>
            <p>
              Les informations recueillies via les formulaires de ce site sont enregistrées dans un fichier informatisé par Proptimisation pour la gestion de la clientèle. Elles sont conservées pendant 3 ans et sont destinées au service commercial.
            </p>
            <p className="mt-2">
              Conformément à la loi « informatique et libertés », vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier en contactant : contact@proptimisation.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Legal;