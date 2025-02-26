import React from 'react';

const FounderProfile = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Adding more space above the component */}
      <div className="mt-20 mb-12"></div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            Notre fondateur, un visionnaire engagé
          </h1>
          <h2 className="text-lg text-gray-900 mb-6">
            Emmanuel, votre partenaire de réussite
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Image Section */}
          <div className="flex items-center justify-center">
          <img 
            src="/images/zeno.jpeg" 
            alt="Emmanuel Zenou - Fondateur de Lemida" 
            className="rounded-lg shadow-md w-full h-auto max-w-[800px] md:max-w-[600px] sm:max-w-[500px] object-cover"
/>
          </div>
          
          {/* Text Content Section */}
          <div className="flex flex-col space-y-6">
            <div className="space-y-4 text-gray-700">
              <p className="font-medium text-gray-900">Bienvenue sur notre site !</p>
              
              <p>
                Je suis Emmanuel, le cerveau derrière cet organisme de formation dynamique. 
                Pourquoi ai-je lancé cette aventure ? Par passion pour l'apprentissage et 
                par conviction que chacun mérite de se former pour atteindre ses rêves professionnels.
              </p>

              <p>
                Fort de plus de 10 ans d'expérience dans la formation professionnelle, 
                Emmanuel a lancé Lemida en 2024 avec une ambition claire : faire profiter 
                un maximum de personnes de son expertise. Spécialisé dans les domaines du 
                BTP, de la Santé, et du Juridique et Administratif, il a su s'entourer 
                d'un réseau de partenaires pour proposer des formations adaptées à tous les profils.
              </p>

              <p>
                J'ai conçu cet espace pour offrir des formations de haute qualité qui 
                répondent aux besoins actuels du marché et qui s'adaptent aux emplois 
                du temps chargés de nos apprenants. Chez nous, vous trouverez des parcours 
                d'apprentissage flexibles, dynamiques et surtout axés sur la pratique.
              </p>

              <p>
                Rejoignez-nous dès maintenant pour explorer nos programmes et transformer 
                votre carrière de manière significative !
              </p>

              <div className="pt-4 border-t border-gray-200">
                <p className="font-semibold text-primary">Emmanuel Zenou</p>
                <p className="text-gray-600">Fondateur de Lemida</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderProfile;

