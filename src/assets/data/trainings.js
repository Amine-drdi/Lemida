export const trainings = [
 
       {
        id: 0,
        image: "https://www.actusoins.com/wp-content/uploads/2023/01/vaccin-grippe-3-768x576-4.jpg",
        title: "Programme de Formation : Vaccination par l’Infirmier",
        description: `
          Cette formation vise à former les infirmiers à la pratique sécurisée et efficace de la vaccination, 
          conformément aux réglementations en vigueur. Elle aborde les aspects techniques, législatifs et éthiques, 
          tout en mettant l’accent sur la communication avec les patients.
        `,
        duration: "14 heures (2 jours)",
        ProchaineSession: "25/02",
        DPC: "93292325124",
        Financements: "DPC, FIF PL",
        Duree :"14 heures (2 jours)",
        objectifs: [
          "Connaître les bases légales et réglementaires de la vaccination par l’infirmier.",
          "Identifier les indications et contre-indications des vaccins courants.",
          "Maîtriser les techniques d’administration des vaccins.",
          "Savoir répondre aux questions et appréhensions des patients concernant la vaccination."
        ],
        skills: [
          "Connaissance des vaccins et des indications : Compétence dans la compréhension des différents types de vaccins, leurs indications, contre-indications et effets secondaires.",
          "Préparation et administration des vaccins : Maîtrise des techniques d'administration des vaccins par voie intramusculaire, sous-cutanée et intradermique, en respectant les protocoles de sécurité.",
          "Gestion des effets indésirables : Savoir identifier et gérer les effets secondaires possibles après une vaccination, incluant les réactions locales et systémiques.",
          "Éducation et sensibilisation des patients : Capacité à informer les patients sur l'importance de la vaccination, à répondre à leurs questions et à dissiper les inquiétudes. ",
          "Suivi et enregistrement des vaccinations : Savoir documenter et assurer le suivi des vaccinations administrées, en maintenant des registres précis et conformes aux normes de santé publique.",
        ],
        publicCible: ["Infirmiers diplômés d’État"],
        prerequis: ["Diplôme d’État d’infirmier en cours de validité"],
        programme: {
          id: "1",
          title: "Formation sur la Vaccination",
          parts: [
            {
              title: "Réglementation et cadre légal",
              duration: "3 heures",
              sections: [
                "Législation sur la vaccination par les infirmiers.",
                "Obligations éthiques et responsabilités professionnelles."
              ]
            },
            {
              title: "Connaissance des vaccins",
              duration: "3 heures",
              sections: [
                "Types de vaccins et mécanismes d’action.",
                "Calendrier vaccinal et mises à jour.",
                "Indications et contre-indications des vaccins courants."
              ]
            },
            {
              title: "Pratique de la vaccination",
              duration: "5 heures",
              sections: [
                "Techniques d’administration (intramusculaire, sous-cutanée, intradermique).",
                "Préparation et manipulation des vaccins en toute sécurité.",
                "Gestion des effets secondaires et incidents post-vaccinaux."
              ]
            },
            {
              title: "Relation patient et sensibilisation",
              duration: "3 heures",
              sections: [
                "Répondre aux questions fréquentes sur les vaccins.",
                "Communication efficace pour rassurer et convaincre les patients hésitants.",
                "Gestion des cas de refus de vaccination."
              ]
            }
          ]
        },
        
    equipePedagogique: [
          "Formateurs spécialisés en vaccination et santé publique.",
          "Experts en réglementation médicale."
        ],
      
        moyensPedagogiques: [
          "Supports numériques interactifs (guides, vidéos, études de cas).",
          "Matériel pratique pour les simulations d’administration.",
          "Sessions de questions-réponses avec des experts."
        ],
      
        dispositifEvaluation: [
          "QCM : Validation des connaissances théoriques sur la vaccination.",
          "Exercice pratique : Simulation de la préparation et administration des vaccins."
        ],

        professionals :[
          {
            name: "Jean-François Renucci",
            image:
              "https://destinationsante.com/wp-content/uploads/2022/11/infirmier-Rido-1920-shutterstock-e1669651998744.jpg",
            profession: "Expert en Immunologie et Vaccination",
            comment:
              "Cette formation m'a permis de renforcer mes connaissances et de les appliquer efficacement dans mon quotidien professionnel.",
          },
          {
            name: "Marie Dupont",
            image:
              "https://media.doctolib.com/image/upload/q_auto:eco,f_auto/pnaelmeakxquvtnpwtu9.jpg",
            profession: "Infirmière Spécialisée en Techniques de Vaccination",
            comment:
              "Une formation très enrichissante, avec des outils pratiques pour la vaccination et une excellente pédagogie.",
          },
          {
            name: "Dr. Michel Cymes",
            image:
              "https://media.istockphoto.com/id/1289461280/photo/healthcare-worker-portrait.jpg?s=612x612&w=0&k=20&c=rJDnJzrLxV6vpK8SFaau-A3_hMbccoEBQf8lFCfc9ZE=",
            profession: "Médecin généraliste",
            comment:
              "J'ai beaucoup apprécié les explications claires et les démonstrations pratiques lors de cette formation.",
          },
          {
            name: "Dr. Claire Morel",
            image:
              "https://img.freepik.com/premium-photo/closeup-photo-doctor-standing-hospital-world-doctors-day-with-generative-ai_455711-2177.jpg",
            profession: "Pédiatre",
            comment:
              "Un programme bien structuré et adapté aux besoins des professionnels de santé.",
          },
        ],
        instructors2: [
          {
            name: "Jean-François Renucci",
            image: "https://media.licdn.com/dms/image/v2/C5603AQGvwos08A9YfQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517401253810?e=2147483647&v=beta&t=qCPryXi30djRCI7FZy1SE5B443C73U4uWp8PKf5rE4Y", // Remplacer par l'URL de l'image de l'instructeur
            role: "Expert en Immunologie et Vaccination",
            numOfTrainings: 13,
          },
          {
            name: "Marie Dupont",
            image: "https://intakt.law/wp-content/uploads/2022/08/ADW_8228-1-A.-de-Wilde-Marie-Dupont-1536x1024.jpg", // Remplacer par l'URL de l'image du second instructeur
            role: "Infirmière Spécialisée en Techniques de Vaccination",
            numOfTrainings: 15,
          },
          ],  
        certification: "Une attestation de compétence sera délivrée à l’issue de la formation, validant la capacité de l’infirmier à pratiquer la vaccination en toute sécurité et conformité."
      },
     
     
 {
  id: 1,
  image: "https://upsat.tn/wp-content/uploads/2022/03/portrait-of-medical-assistant-standing-with-arms-crossed-in-cabinet-for-medical-checkup-visit-woman-nurse-working-with-computer-and-documents-in-doctors-office-for-healthcare-system-1-1200x675.jpg",
  title: "Gestion de Cabinet Infirmier",
  duration: "21 heures (3 jours).",
  Duree :"21 heures (3 jours).",
  ProchaineSession: "05/03",
  DPC: "93482719304",
  Financements: ["DPC", "FIF PL"],
  description: "Cette formation s’adresse aux infirmiers libéraux souhaitant développer leurs compétences en gestion administrative, financière et organisationnelle pour optimiser le fonctionnement de leur cabinet.",
  objectifs: [
    "Apprendre à gérer efficacement les aspects administratifs d’un cabinet infirmier.",
    "Comprendre les bases de la comptabilité et de la gestion financière.",
    "Mettre en place des outils d’organisation et de communication adaptés à l’activité libérale."
  ],
  publicCible: ["Infirmiers libéraux", "Infirmiers souhaitant exercer en libéral"],
  prerequis: ["Diplôme d’État d’infirmier en cours de validité"],
  skills: [
    "Organisation administrative et logistique",
    "Gestion financière et comptabilité",
    "Conformité aux réglementations",
    "Relation patient et communication",
    "Optimisation des outils numériques"
  ],
  instructors2: [
    {
      name: "Jean Dupont",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3PYB9Bz_DlJ2_OBreEBQnzRYyEq2dDzUnYQ&s", // Remplacer par l'URL de l'image de l'instructeur
      role: "Consultant en Gestion de Cabinets Médicaux",
      numOfTrainings: 18,
    },
    {
      name: "Marie Lefèvre",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMlAIbzRVqZtSISefn-Vty2rRTYzTfEzyi5Q&s", // Remplacer par l'URL de l'image du second instructeur
      role: "Infirmière Libérale et Experte en Organisation Administrative",
      numOfTrainings: 12,
    },
  ],
  programme: {
    id: "1",
    title: "Gestion de Cabinet Infirmier",
    parts: [
      {
        title: "Organisation administrative",
        duration: "5 heures",
        sections: [
          "Gestion des rendez-vous et du planning.",
          "Démarches pour l’ouverture et le fonctionnement d’un cabinet.",
          "Gestion des relations avec les organismes de sécurité sociale et les mutuelles."
        ]
      },
      {
        title: "Comptabilité et gestion financière",
        duration: "7 heures",
        sections: [
          "Introduction à la comptabilité simplifiée.",
          "Gestion des factures, paiements et tiers payants.",
          "Optimisation des charges professionnelles."
        ]
      },
      {
        title: "Communication et relation patient",
        duration: "4 heures",
        sections: [
          "Mise en place d’un système de communication efficace.",
          "Fidélisation et satisfaction des patients.",
          "Communication professionnelle avec les partenaires de santé."
        ]
      },
      {
        title: "Outils et technologies",
        duration: "2 heures",
        sections: [
          "Utilisation des logiciels de gestion de cabinet.",
          "Transition numérique et gestion des dossiers patients électroniques."
        ]
      }
    ]
  },
  professionals: [
    {
      name: "Sophie Martin",
      image: "https://www.santementale.fr/medias/2022/11/inf-850x567.jpg",
      profession: "Infirmière Libérale",
      comment: "Cette formation m'a permis de mieux structurer la gestion de mon cabinet et d'optimiser mes pratiques administratives."
    },
    {
      name: "David Lemoine",
      image: "https://c8.alamy.com/compfr/hac520/portrait-of-male-nurse-standing-in-ward-hac520.jpg",
      profession: "Consultant en Gestion de Cabinets Médicaux",
      comment: "Un programme très complet qui m'a permis d'affiner mes connaissances en gestion d’un cabinet infirmier."
    },
    {
      name: "Claire Dupuis",
      image: "https://media.istockphoto.com/id/1198899635/fr/photo/verticale-dinfirmi%C3%A8re-masculine-%C3%A0-lh%C3%B4pital.jpg?s=612x612&w=0&k=20&c=5wST0yM3rUH7qXfGSeZbu1GG8BCpYO-ODblCPjT8hIc=",
      profession: "Infirmière en Pratique Avancée (IPA)",
      comment: "Une formation essentielle pour une gestion optimale des soins et du suivi administratif dans un cabinet infirmier."
    },
    {
      name: "Philippe Moreau",
      image: "https://media.istockphoto.com/id/1186255987/fr/photo/infirmi%C3%A8re-m%C3%A2le-avec-le-st%C3%A9thoscope-restant-%C3%A0-la-clinique-il-sourit-et-regarde-la-cam%C3%A9ra.jpg?s=612x612&w=0&k=20&c=5dAzkWSCIa5n3kDudYzy0osWt6AoszdNQSMDE6_abdo=",
      profession: "Responsable Administratif en Santé",
      comment: "Les outils appris dans cette formation m'ont aidé à mieux organiser les dossiers patients et à gérer la comptabilité."
    }
  ],
  instructors: [
    {
      name: "Jean Dupont",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3PYB9Bz_DlJ2_OBreEBQnzRYyEq2dDzUnYQ&s",
      role: "Consultant en Gestion de Cabinets Médicaux",
      numOfTrainings: 18
    },
    {
      name: "Marie Lefèvre",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMlAIbzRVqZtSISefn-Vty2rRTYzTfEzyi5Q&s",
      role: "Infirmière Libérale et Experte en Organisation Administrative",
      numOfTrainings: 12
    }
  ],
  moyensPedagogiques: [
    "Études de cas concrets et simulations",
    "Supports numériques interactifs",
    "Ateliers pratiques pour la gestion des outils numériques"
  ],
  dispositifEvaluation: [
    "Étude de cas : Organisation administrative et financière d’un cabinet fictif",
    "QCM : Validation des connaissances théoriques en gestion et comptabilité"
  ],
  equipePedagogique: [
   " Experts en gestion de cabinet médical.",
  "Comptables spécialisés dans le secteur libéral."
  ],
  certification:  "Une attestation de compétence sera délivrée, attestant de la capacité à gérer un cabinet infirmier de manière efficace."
  
},
 {
  id: 2,
  image: "https://www.avf-biomedical.com/app/uploads/2022/02/astuces-conseils-prelevement-sanguin-1024x576.png",
  title: "Prélèvements Sanguins",
  duration: "14 heures (2 jours).",
  Duree: "14 heures (2 jours).",
  ProchaineSession: "15/05",
  DPC: "9876543210",
  Financements: ["DPC", "FIF PL", "OPCO Santé"],
  description: "Cette formation permet aux professionnels de santé d’acquérir ou de renforcer leurs compétences dans la réalisation des prélèvements sanguins, en respectant les règles d’hygiène, de sécurité, et de relation patient.",
  objectifs: [
    "Maîtriser les techniques de prélèvements sanguins en toute sécurité.",
    "Appliquer les règles d’hygiène et de prévention des infections.",
    "Assurer une relation professionnelle et rassurante avec les patients.",
    "Optimiser la traçabilité et la gestion des échantillons."
  ],
  publicCible: ["Infirmiers", "Techniciens de laboratoire", "Médecins", "Étudiants en santé"],
  prerequis: ["Diplôme en santé (infirmier, technicien de laboratoire, médecin)", "Connaissance des bases en anatomie"],
  skills: [
    "Techniques de prélèvement",
    "Hygiène et prévention des infections",
    "Gestion des échantillons biologiques",
    "Communication avec les patients",
    "Traçabilité et conformité réglementaire",
    "Gestion des incidents (hématomes, évanouissements)"
  ],
  instructors2: [
    {
      name: "Dr. Nadia Jaziri",
      image: "https://assets.onedoc.ch/images/users/7dd5979fc31a6fb41edd05c3fc9eb84abb7796c5a7bf8f5741520e9223acf790-large.png",
      role: "Médecin généraliste et spécialiste en prélèvements sanguins",
      numOfTrainings: 25
    },
    {
      name: "Olivier Lambert",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXgQxUFDHZfxUEnDDXs5dZ-XgHUHkIjl5Gsw&s",
      role: "Technicien de laboratoire médical",
      numOfTrainings: 18
    }
  ],
  programme: {
    id: "2",
    title: "Prélèvements Sanguins",
    parts: [
      {
        title: "Bases des prélèvements sanguins",
        duration: "4 heures",
        sections: [
          "Anatomie et physiologie des veines.",
          "Indications et contre-indications des prélèvements.",
          "Règles d’hygiène et prévention des infections.",
          "Matériel et dispositifs médicaux utilisés."
        ]
      },
      {
        title: "Techniques avancées",
        duration: "6 heures",
        sections: [
          "Différentes techniques de prélèvement (veineux, capillaire, artériel).",
          "Utilisation du matériel (aiguilles, tubes, garrots).",
          "Gestion des patients difficiles et phobiques.",
          "Identification et traçabilité des échantillons."
        ]
      },
      {
        title: "Gestion et analyse des échantillons",
        duration: "4 heures",
        sections: [
          "Conservation et transport des échantillons.",
          "Interprétation des résultats et gestion des erreurs.",
          "Respect des normes de qualité en laboratoire."
        ]
      }
    ]
  },
  professionals: [
    {
      name: "Lucie Bernard",
      image: "https://previews.123rf.com/images/kadettmann/kadettmann1904/kadettmann190400117/121969230-portrait-de-la-belle-infirmi%C3%A8re-fran%C3%A7aise.jpg",
      profession: "Infirmière Spécialisée en Prélèvements Sanguins",
      comment: "Une formation enrichissante qui m'a permis d'améliorer mes techniques et d'appliquer les protocoles les plus récents."
    },
    {
      name: "Dr. Antoine Lefevre",
      image: "https://medical-rh.com/wp-content/uploads/medecin-generaliste-medical-rh.jpg",
      profession: "Médecin Laborantin",
      comment: "Très complet, notamment sur la gestion des échantillons et la prévention des erreurs en laboratoire."
    },
    {
      name: "Élodie Richard",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXgQxUFDHZfxUEnDDXs5dZ-XgHUHkIjl5Gsw&s",
      profession: "Infirmière en Santé Publique",
      comment: "J’ai acquis de nouvelles compétences pour améliorer la sécurité des prélèvements en milieu hospitalier et à domicile."
    },
    {
      name: "Marc Roux",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO_1WYFY0sCtlYLMyepCOzD0LlrVZMl2KgwQ&s",
      profession: "Technicien de Laboratoire Médical",
      comment: "Une approche très pédagogique qui permet d’assimiler facilement les bonnes pratiques."
    }
  ],
  instructors: [
    {
      name: "Dr. Nadia Jaziri",
      image: "https://assets.onedoc.ch/images/users/7dd5979fc31a6fb41edd05c3fc9eb84abb7796c5a7bf8f5741520e9223acf790-large.png",
      role: "Médecin généraliste et spécialiste en prélèvements sanguins",
      numOfTrainings: 25
    },
    {
      name: "Olivier Lambert",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXgQxUFDHZfxUEnDDXs5dZ-XgHUHkIjl5Gsw&s",
      role: "Technicien de laboratoire médical",
      numOfTrainings: 18
    }
  ],
  moyensPedagogiques: [
    "Démonstrations pratiques sur mannequin et patients simulés.",
    "Supports vidéo et illustrations techniques.",
    "Études de cas et mises en situation réelles."
  ],
  dispositifEvaluation: [
    "Évaluation des gestes techniques en simulation.",
    "QCM de validation des connaissances en prélèvements sanguins.",
    "Observation par les formateurs et retour individualisé."
  ],
  equipePedagogique: [
    " Formateurs spécialisés en prélèvements biologiques.",
   " Professionnels de santé expérimentés."
   ],
  certification: "Une attestation de compétence sera délivrée, attestant de la maîtrise des techniques de prélèvements sanguins en respectant les normes de qualité et de sécurité."
},
 /* {
    id: 3,
    image:
      "https://www.regionalcancercare.org/wp-content/uploads/2021/09/infusion-pump-feeding.jpg",
    title: "Perfusions et Soins Complexes ",
    professionals : [
      {
        name: "Dr. Pierre Dupont",
        image: "https://i0.wp.com/lapresse.tn/wp-content/uploads/2021/12/ste91.jpg?fit=850%2C491&ssl=1",
        profession: "Anesthésiste-Réanimateur",
        comment: "Cette formation m'a permis de perfectionner mes compétences en gestion des perfusions dans des contextes critiques.",
      },
      {
        name: "Marie Lefevre",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4H0x7Iyed38wrzL01jma_S8KTdR5Fxh9PfQ&s",
        profession: "Infirmière spécialisée en soins intensifs",
        comment: "Une formation complète qui m'a permis de mieux comprendre les protocoles complexes de perfusion et de soin.",
      },
      {
        name: "Dr. Jean-Marc Lefevre",
        image: "https://www.chl.lu/sites/chl/files/images/dossiers/divers/Dr-Christian-Ferretti.jpg",
        profession: "Médecin intensiviste",
        comment: "La formation fournit des outils pratiques pour optimiser la gestion des perfusions et des soins complexes, un atout pour ma pratique quotidienne.",
      },
      {
        name: "Sophie Moreau",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2G3ypwd4iJoueuwIkLM2L06Xe5SjYj7amrw&s",
        profession: "Infirmière en soins palliatifs",
        comment: "Un programme pédagogique enrichissant, avec des approches novatrices pour gérer les soins complexes des patients en fin de vie.",
      },
    ],
   instructors2 : [
      {
        name: "Dr. Alain Dubois",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQhSRyBHxUCVcI0CVmwen_YnaEGmamBNwm1g&s",
        role: "Anesthésiste-Réanimateur, expert en perfusions et soins intensifs",
        numOfTrainings: 25,
      },
      {
        name: "Isabelle Martin",
        image: "https://cdn.phenompeople.com/CareerConnectResources/CHKCENUS/images/pharmacyheromobile-1720456586350.jpg",
        role: "Infirmière spécialisée en soins critiques et perfusion",
        numOfTrainings: 18,
      },
    ],
    duration: "20H",
    instructors: "Dr. Jean-Michel Cohen ",
    description :  "La formation Perfusions et Soins Complexes permet aux professionnels de santé d'acquérir les compétences nécessaires pour administrer des perfusions et gérer des soins complexes auprès des patients. Elle aborde les techniques de mise en place et de suivi des perfusions, ainsi que la prise en charge des patients nécessitant des soins spécifiques. L'objectif est de garantir une gestion optimale des soins tout en minimisant les risques pour les patients.",
    ProchaineSession : "20/04",
DPC : "92384723984",
Duree : "20 heures",
Financements : "DPC",
skills: [
  "Maîtrise des techniques de perfusion en soins intensifs et urgents",
  "Utilisation des équipements et technologies de perfusion avancée en milieu clinique",
  "Gestion des risques associés aux perfusions et soins complexes",
  "Surveillance et évaluation continue de l'état du patient sous perfusion",
  "Connaissance des différents types de perfusions et des indications thérapeutiques",
  
],
programme : {
  id: "2",
  title: "Perfusions et Soins Complexes",
  parts: [
    {
      title: "Introduction aux perfusions et soins complexes",
      duration: "3 heures",
      sections: [
        "Définition des perfusions et soins complexes",
        "Rôle et responsabilités des professionnels de santé",
        "Prise en charge initiale du patient en soins complexes",
      ],
    },
    {
      title: "Techniques de perfusion",
      duration: "5 heures",
      sections: [
        "Types de perfusions (intraveineuse, sous-cutanée, etc.)",
        "Mise en place d'une perfusion",
        "Gestion des complications liées aux perfusions",
      ],
    },
    {
      title: "Surveillance et gestion des patients sous perfusion",
      duration: "7 heures",
      sections: [
        "Suivi des signes vitaux et gestion des fluides",
        "Réaction aux effets secondaires et complications",
        "Utilisation des dispositifs médicaux pour perfusion avancée",
      ],
    },
    {
      title: "Soins critiques et avancées en perfusion",
      duration: "5 heures",
      sections: [
        "Gestion des perfusions en soins intensifs",
        "Perfusions dans les situations d'urgence et de réanimation",
        "Gestion des patients en état critique nécessitant des soins complexes",
      ],
    },
  ],
},

  },*/

  {
    id: 3,
    image: "https://www.regionalcancercare.org/wp-content/uploads/2021/09/infusion-pump-feeding.jpg",
    title: "Perfusions et Soins Complexes",
    duration: " 14 heures (2 jours).",
    Duree: "14 heures (2 jours).",
    ProchaineSession: "20/04",
    DPC: "92384723984",
    Financements: ["DPC"],
    description: "Cette formation s’adresse aux infirmiers souhaitant perfectionner leurs compétences dans la mise en place et la gestion des perfusions, ainsi que dans la prise en charge des soins complexes liés à leur administration.",
    objectifs: [
      "Maîtriser les techniques d’installation et de surveillance des perfusions.",
      "Comprendre les indications et contre-indications des perfusions intraveineuses.",
      "Savoir gérer les complications éventuelles liées aux perfusions.",
     
    ],
    publicCible: ["Infirmiers diplômés d’État."],
    prerequis: ["Diplôme d’État en cours de validité."],
    skills: [
      "Techniques de perfusion",
      "Gestion des risques et complications",
      "Surveillance clinique et gestion des fluides",
      "Utilisation des dispositifs médicaux pour perfusion avancée",
      "Soins critiques et réanimation"
    ],
    instructors2: [
      {
        name: "Dr. Alain Dubois",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQhSRyBHxUCVcI0CVmwen_YnaEGmamBNwm1g&s",
        role: "Anesthésiste-Réanimateur, expert en perfusions et soins intensifs",
        numOfTrainings: 25
      },
      {
        name: "Isabelle Martin",
        image: "https://cdn.phenompeople.com/CareerConnectResources/CHKCENUS/images/pharmacyheromobile-1720456586350.jpg",
        role: "Infirmière spécialisée en soins critiques et perfusion",
        numOfTrainings: 18
      }
    ],
    programme: {
      id: "3",
      title: "Perfusions et Soins Complexes",
      parts: [
        {
          title: "Théorie des perfusions",
          duration: "3 heures",
          sections: [
            "Indications médicales des perfusions.",/* j' arrête içi les modifications */
            "Différents types de solutés et leurs usages.",
            "Bases de l’anatomie veineuse pour la pose des perfusions."
          ]
        },
        {
          title: "Techniques d’installation des perfusions",
          duration: "5 heures",
          sections: [
            "Préparation du matériel et hygiène.",
            "Pose de cathéters périphériques.",
            "Surveillance et gestion des dispositifs."
          ]
        },
        {
          title: "Prévention et gestion des complications",
          duration: "7 heures",
          sections: [
            "Prévention des infections liées aux cathéters.",
            "Identification et gestion des incidents (infiltrations, phlébites).",
          ]
        },
        {
          title: "Soins complexes associés",
          duration: "5 heures",
          sections: [
            "Administration de médicaments par perfusion.",
            "Gestion des pompes à perfusion et contrôles associés.",
            "Soins spécifiques aux patients avec cathéter central."
          ]
        }
      ]
    },
    professionals: [
      {
        name: "Dr. Pierre Dupont",
        image: "https://i0.wp.com/lapresse.tn/wp-content/uploads/2021/12/ste91.jpg?fit=850%2C491&ssl=1",
        profession: "Anesthésiste-Réanimateur",
        comment: "Cette formation m'a permis de perfectionner mes compétences en gestion des perfusions dans des contextes critiques."
      },
      {
        name: "Marie Lefevre",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4H0x7Iyed38wrzL01jma_S8KTdR5Fxh9PfQ&s",
        profession: "Infirmière spécialisée en soins intensifs",
        comment: "Une formation complète qui m'a permis de mieux comprendre les protocoles complexes de perfusion et de soin."
      },
      {
        name: "Dr. Jean-Marc Lefevre",
        image: "https://www.chl.lu/sites/chl/files/images/dossiers/divers/Dr-Christian-Ferretti.jpg",
        profession: "Médecin intensiviste",
        comment: "La formation fournit des outils pratiques pour optimiser la gestion des perfusions et des soins complexes, un atout pour ma pratique quotidienne."
      },
      {
        name: "Sophie Moreau",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2G3ypwd4iJoueuwIkLM2L06Xe5SjYj7amrw&s",
        profession: "Infirmière en soins palliatifs",
        comment: "Un programme pédagogique enrichissant, avec des approches novatrices pour gérer les soins complexes des patients en fin de vie."
      }
    ],
    
    moyensPedagogiques: [
      "Simulations pratiques avec mannequins et matériel spécifique.",
     "Supports multimédias pour renforcer les apprentissages.",
     "Cas pratiques et études de situations complexes."
      
    ],
    dispositifEvaluation: [
      " Exercice pratique : Simulation de la pose et surveillance d’une perfusion.",
      " QCM : Validation des connaissances théoriques sur les perfusions et soins complexes."
    ],
    equipePedagogique: [
     " Formateurs spécialisés en soins infirmiers avancés.",
      " Professionnels expérimentés en gestion des dispositifs de perfusion."
     ],
    certification: "Une attestation de compétence sera délivrée, attestant de la capacité à gérer les perfusions et soins complexes en toute sécurité."
  },
  
 /* {
    id: 4,
    image:
      "https://www.centreleonberard.fr/sites/default/files/inline-images/soins-palliatifs-centre-leon-berard.jpeg",
    title: "Gestion des Soins Palliatifs",
    duration: "18H",
     professionals : [
      {
        name: "Dr. Isabelle Lefevre",
        image: "https://www.geds.fr/wp-content/uploads/2024/12/salaire-medecin-generaliste.jpg",
        profession: "Médecin spécialiste en soins palliatifs",
        comment: "La formation m'a permis d'améliorer mon approche des patients en fin de vie, en optimisant le confort et la gestion de la douleur.",
      },
      {
        name: "Jean-Luc Moreau",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOfPTaFpo-qG19RFPbIFqU444TAe3eNEQ42yfqN3b0aPLIb1mEuBBhXBKrJWNe47a9Q50&usqp=CAU",
        profession: "Infirmier en soins palliatifs",
        comment: "Cette formation a renforcé ma capacité à écouter et à comprendre les besoins des patients en soins palliatifs, tout en offrant un soutien essentiel à leurs familles.",
      },
      {
        name: "Dr. Alain Tanguy",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdW8U-pvp7VhJBqvw-N_VTxJUdi9OqNV1h_w&s",
        profession: "Médecin gériatre",
        comment: "Les compétences acquises lors de cette formation sont cruciales pour apporter un soutien humanitaire et médical de qualité aux patients en soins palliatifs.",
      },
      {
        name: "Claire Martin",
        image: "https://www.soulagermaispastuer.org/wp-content/uploads/2015/03/conf-claire.jpeg",
        profession: "Psychologue en soins palliatifs",
        comment: "Un programme enrichissant qui m'a permis de mieux accompagner les patients et leurs proches dans des moments difficiles.",
      },
    ],
    instructors2 : [
      {
        name: "Dr. Claude Martin",
        image: "https://www.geriatrie-albi.com/photoperso.jpg",
        role: "Médecin spécialiste en soins palliatifs et gériatrie, expert en gestion de la douleur",
        numOfTrainings: 25,
      },
      {
        name: "Marie Dubois",
        image: "https://www.petits-fils.com/wp-content/uploads/2018/06/Soins-palliatifs-%C3%A0-domicile-pour-personnes-%C3%A2g%C3%A9es.jpg",
        role: "Infirmière spécialisée en soins palliatifs et accompagnement psychologique",
        numOfTrainings: 18,
      },
    ],
    programme : {
      id: "1",
      title: "Gestion des Soins Palliatifs",
      parts: [
        {
          title: "Introduction aux soins palliatifs",
          duration: "3 heures",
          sections: [
            "Concepts clés des soins palliatifs.",
            "Principes fondamentaux du soulagement de la souffrance.",
            "Éthique et prise en charge des patients en fin de vie.",
          ],
        },
        {
          title: "Gestion de la douleur et des symptômes",
          duration: "5 heures",
          sections: [
            "Médicaments analgésiques et gestion des douleurs.",
            "Soulagement des symptômes non douloureux (nausea, dyspnée, etc.).",
            "Approches complémentaires dans la gestion des symptômes.",
          ],
        },
        {
          title: "Soutien psychologique et familial",
          duration: "7 heures",
          sections: [
            "Écoute et accompagnement des patients et des familles.",
            "Communication en soins palliatifs.",
            "Préparation à la fin de vie : soutien psychologique.",
          ],
        },
      ],
    },
    instructors: "Dr. Martine Lemoine",
    description : "La formation Gestion des Soins Palliatifs prépare les professionnels de santé à accompagner les patients en fin de vie avec dignité et compassion. Elle aborde la gestion de la douleur, le soutien psychologique, ainsi que les aspects éthiques et légaux des soins palliatifs. L'objectif est d'assurer un soulagement optimal et un accompagnement respectueux des patients et de leurs familles.",
ProchaineSession : "02/05",
DPC : "92738495739",
Duree : "18 heures",
Financements : "FIF PL",
skills: [
  "Gestion de la douleur : Compétence dans l’utilisation des traitements pharmacologiques et non pharmacologiques pour soulager la douleur des patients en fin de vie.",
  "Accompagnement psychologique : Capacité à fournir un soutien émotionnel aux patients et à leurs familles, en prenant en compte leurs besoins affectifs et psychologiques.",
  "Communication en soins palliatifs : Maîtrise des techniques de communication adaptées pour parler de la fin de vie, des choix de traitement, et de la gestion des attentes des patients et de leurs proches",
  "Éthique des soins palliatifs : Compréhension des dilemmes éthiques dans les soins de fin de vie, tels que les décisions de non-réanimation et le respect des souhaits des patients.",
  "Soutien à la famille : Aptitude à fournir un soutien aux familles pendant la phase terminale, y compris l’accompagnement dans le processus de deuil.",
],

  },*/
  {
    id: 4,
    image: "https://www.centreleonberard.fr/sites/default/files/inline-images/soins-palliatifs-centre-leon-berard.jpeg",
    title: "Gestion des Soins Palliatifs",
    duration: "21 heures (3 jours).",
    Duree: "21 heures (3 jours).",
    ProchaineSession: "02/05",
    DPC: "92738495739",
    Financements: ["FIF PL"],
    description: "Cette formation a pour objectif de former les professionnels de santé à l’accompagnement des patients en soins palliatifs, en intégrant une approche technique, éthique, et humaine.",
    objectifs: [
      "Comprendre les spécificités des soins palliatifs et leur cadre légal.",
      "Acquérir les compétences nécessaires pour accompagner les patients et leurs proches.",
      "Gérer les douleurs et symptômes associés de manière adaptée.",
    ],
    publicCible: ["Infirmiers et aides-soignants intervenant dans des structures de soins ou à domicile."],
    prerequis: ["Diplôme d’État en santé ou en cours de validité."],
    skills: [
      "Gestion de la douleur : Compétence dans l’utilisation des traitements pharmacologiques et non pharmacologiques pour soulager la douleur des patients en fin de vie.",
      "Accompagnement psychologique : Capacité à fournir un soutien émotionnel aux patients et à leurs familles, en prenant en compte leurs besoins affectifs et psychologiques.",
      "Communication en soins palliatifs : Maîtrise des techniques de communication adaptées pour parler de la fin de vie, des choix de traitement, et de la gestion des attentes des patients et de leurs proches.",
      "Éthique des soins palliatifs : Compréhension des dilemmes éthiques dans les soins de fin de vie, tels que les décisions de non-réanimation et le respect des souhaits des patients.",
      "Soutien à la famille : Aptitude à fournir un soutien aux familles pendant la phase terminale, y compris l’accompagnement dans le processus de deuil."
    ],
    instructors2: [
      {
        name: "Dr. Claude Martin",
        image: "https://www.geriatrie-albi.com/photoperso.jpg",
        role: "Médecin spécialiste en soins palliatifs et gériatrie, expert en gestion de la douleur",
        numOfTrainings: 25
      },
      {
        name: "Marie Dubois",
        image: "https://www.petits-fils.com/wp-content/uploads/2018/06/Soins-palliatifs-%C3%A0-domicile-pour-personnes-%C3%A2g%C3%A9es.jpg",
        role: "Infirmière spécialisée en soins palliatifs et accompagnement psychologique",
        numOfTrainings: 18
      }
    ],
    programme: {
      id: "1",
      title: "Gestion des Soins Palliatifs",
      parts: [
        {
          title: "Introduction aux soins palliatifs",
          duration: "3 heures",
          sections: [
            "Définition et principes des soins palliatifs.",
            "Cadre légal et éthique en France.",
            "Place des soins palliatifs dans le parcours de santé."
          ]
        },
        {
          title: "Gestion de la douleur et des symptômes",
          duration: "5 heures",
          sections: [
            "Évaluation de la douleur et des besoins du patient.",
            "Administration des traitements antalgiques.",
            "Prise en charge des symptômes non douloureux (nausées, essoufflements)."
          ]
        },
        {
          title: "Communication et accompagnement",
          duration: "7 heures",
          sections: [
            "Relation d’aide auprès des patients et familles.",
            "Annonce et gestion des situations délicates.",
            "Soutien psychologique et gestion des émotions."
          ]
        },
        {
          title: "Pratique des soins spécifiques",
          duration: "7 heures",
          sections: [
            "Mise en œuvre des soins d’hygiène et de confort.",
            "Techniques de prévention des escarres et complications liées à l’alitement.",
          
          ]
        }
      ]
    },
    professionals: [
      {
        name: "Dr. Isabelle Lefevre",
        image: "https://www.geds.fr/wp-content/uploads/2024/12/salaire-medecin-generaliste.jpg",
        profession: "Médecin spécialiste en soins palliatifs",
        comment: "La formation m'a permis d'améliorer mon approche des patients en fin de vie, en optimisant le confort et la gestion de la douleur."
      },
      {
        name: "Jean-Luc Moreau",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOfPTaFpo-qG19RFPbIFqU444TAe3eNEQ42yfqN3b0aPLIb1mEuBBhXBKrJWNe47a9Q50&usqp=CAU",
        profession: "Infirmier en soins palliatifs",
        comment: "Cette formation a renforcé ma capacité à écouter et à comprendre les besoins des patients en soins palliatifs, tout en offrant un soutien essentiel à leurs familles."
      },
      {
        name: "Dr. Alain Tanguy",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdW8U-pvp7VhJBqvw-N_VTxJUdi9OqNV1h_w&s",
        profession: "Médecin gériatre",
        comment: "Les compétences acquises lors de cette formation sont cruciales pour apporter un soutien humanitaire et médical de qualité aux patients en soins palliatifs."
      },
      {
        name: "Claire Martin",
        image: "https://www.soulagermaispastuer.org/wp-content/uploads/2015/03/conf-claire.jpeg",
        profession: "Psychologue en soins palliatifs",
        comment: "Un programme enrichissant qui m'a permis de mieux accompagner les patients et leurs proches dans des moments difficiles."
      }
    ],
    moyensPedagogiques: [
     " Études de cas concrets pour illustrer les situations.",
      "Supports pédagogiques interactifs.",
      "Ateliers pratiques et mises en situation."
    ],
    dispositifEvaluation: [
      "Étude de cas : Analyse et proposition de prise en charge en soins palliatifs.",
      "QCM : Validation des connaissances théoriques sur les soins palliatifs."
    ],
    equipePedagogique: [
      "Formateurs spécialisés en soins palliatifs.",
      "Psychologues et professionnels de la relation d’aide."
    ],
    certification: "Une attestation de compétence sera délivrée, validant les acquis dans la prise en charge des soins palliatifs."
  },
  
  {
    id: 5,
    image:
      "https://www.psychologue.net/site/article/61940/52180/shutterstock-1637183134_ai1.jpg",
    title: "Burn-Out des Soignants",
    duration: "14 heures (2 jours).",
    Duree:"14 heures (2 jours).",
    instructors: "Dr. Frédéric Saldmann",
    description: "Cette formation vise à sensibiliser les soignants aux signes précurseurs du burn-out et à leur fournir des outils pour prévenir et gérer cette condition dans un contexte rofessionnel exigeant.",
    instructors2: [
      {
        name: "Dr. Claire Dubois",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX0_Iel-ihVjfwddEOUHSblZ5p4xMqYpn7KA&s", // Image de l'instructeur
        role: "Psychiatre spécialisée dans la prise en charge du stress et du burn-out chez les professionnels de santé.",
        numOfTrainings: 10,
      },
      {
        name: "Pierre Lefevre",
        image: "https://d2gjqh9j26unp0.cloudfront.net/profilepic/1adaea1182dbe7860834dcc881353562", // Image de l'instructeur
        role: "Coach professionnel en gestion du stress, spécialisé dans l'accompagnement des soignants.",
        numOfTrainings: 12,
      }
    ],
    objectifs: [
      "Comprendre les causes et conséquences du burn-out.",
      "Identifier les signes précurseurs chez soi et chez ses collègues.",
      "Apprendre des stratégies de prévention et de gestion du stress.",
    ],
    professionals: [
      {
        name: "Anne-Marguerite Leclerc",
        image: "https://m1.quebecormedia.com/emp/emp/165af925-8b33-4d11-a498-c699c0c9c054/leclerc-sur-annemarie-sscm_ORIGINAL.jpg?impolicy=crop-resize&x=0&y=0&w=0&h=0&width=960",
        profession: "Psychologue clinicienne spécialisée en stress professionnel et en prévention du burn-out.",
        comment: "Cette formation m'a permis de mieux comprendre les mécanismes du burn-out et d'appliquer des stratégies efficaces pour y faire face.",
      },
      {
        name: "Jean-Pierre Robert",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTQyldbwlSMqzLUdzcCmIkX0vksAUAOHwjXA&s",
        profession: "Médecin généraliste et expert en santé mentale des soignants.",
        comment: "Un programme essentiel pour tous les soignants confrontés à un stress professionnel intense. Il aide à préserver leur santé mentale.",
      },
      {
        name: "Sophie Maréchal",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2XG3bxBuBpRkThT0j1ErfDrGHhyGnWvEY5Q&s",
        profession: "Infirmière spécialisée en soins palliatifs et en gestion du stress au travail.",
        comment: "Grâce à cette formation, j'ai pu acquérir des outils pratiques pour mieux gérer mon stress et améliorer mon bien-être.",
      },
      {
        name: "Michel Dufresne",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ-g6yuF_aqpRNCjL_c5piJ-xSXshygm_nOw&s",
        profession: "Psychiatre avec une expertise en burn-out des professionnels de santé.",
        comment: "Un excellent programme qui aide les soignants à se protéger contre les effets dévastateurs du burn-out et à améliorer leur quotidien professionnel.",
      }
    ],
ProchaineSession : "10/06",
DPC : "93484723984",
Duree : "25 heures",
Financements : "DPC, FIF PL",
skills: [
  "Reconnaissance des signes du burn-out : Identification précoce des symptômes physiques, émotionnels et comportementaux.",
  "Gestion du stress : Techniques de relaxation et de gestion du stress pour préserver la santé mentale des soignants.",
  "Communication et écoute active : Apprendre à communiquer efficacement et à exprimer ses émotions dans un environnement stressant.",
  "Prévention du burn-out : Stratégies et bonnes pratiques pour prévenir l'épuisement professionnel dans les métiers de la santé.",
  "Soutien psychologique : Techniques de soutien et de gestion émotionnelle pour faire face aux défis professionnels quotidiens."
],

programme: {
  id: "1",
  title: "Burn-Out des Soignants",
  parts: [
    {
      title: "Compréhension du burn-out",
      duration: "3 heures",
      sections: [
        "Facteurs de risque et signaux d’alerte.",
        "Conséquences physiques, psychologiques, et sociales.",
      ]
    },
    {
      title: "Prévention et gestion",
      duration: "4 heures",
      sections: [
        "Techniques de gestion du stress.",
        "Approches organisationnelles pour réduire la charge de travail.",
        "Stratégies personnelles pour maintenir l'équilibre.",
      ]
    },
    {
      title: "Soutien entre collègues",
      duration: "4 heures",
      sections: [
        " Rôle du soutien collectif dans la prévention.",
        "Création de réseaux de soutien.",
        
      ]
    },
  ],
},
certification: "Une attestation de formation sera délivrée."

  },
  {
    id: 6,
    image:
      "https://www.santelog.com/sites/santelog.com/www.santelog.com/files/styles/large/public/images/accroche/adobestock_644337034_glycemie_0.jpeg?itok=D17Sd1gW",
    title: "Diabète - Prise en charge globale ",
    instructors2: [
      {
        name: "Dr. Julie Martin",
        image: "https://www.lwha.com/wp-content/uploads/2021/11/Martin-Julie2.jpg", // Remplacer par l'URL de l'image
        role: "Endocrinologue spécialisée dans la gestion du diabète de type 1 et de type 2.",
        numOfTrainings: 15,
      },
      {
        name: "Pauline Durand",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVu-VReuXxKAf2S5b1dfovTZg_yg9R-LYPLA&s", // Remplacer par l'URL de l'image
        role: "Diététicienne-nutritionniste, experte en accompagnement nutritionnel des patients diabétiques.",
        numOfTrainings: 18,
      }
    ],
    objectifs: [
      "Comprendre les différents types de diabète et leurs traitements.",
      "Optimiser l’éducation thérapeutique des patients.",
      " Identifier les complications associées au diabète.",
      "Favoriser une approche pluridisciplinaire."
    ],
    professionals: [
      {
        name: "François Lemoine",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThdIendicIUnAjXnF3HVzh6BbJWTRrM1UfGA&s",
        profession: "Médecin généraliste avec une expertise en prise en charge des maladies chroniques.",
        comment: "Une formation essentielle pour perfectionner mes connaissances et mieux accompagner mes patients diabétiques.",
      },
      {
        name: "Élise Dupont",
        image: "https://media.licdn.com/dms/image/v2/C4E03AQGt5BbGHbLt3g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1657178950885?e=2147483647&v=beta&t=k0gMyBgrs9cOPCiMz7662A0Q3AcYyjFpZBs__7iWZwY",
        profession: "Infirmière spécialisée en éducation thérapeutique.",
        comment: "J'ai appris des techniques précieuses pour mieux sensibiliser mes patients à la gestion du diabète.",
      },
      {
        name: "Mathieu Rousseau",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRoBpIyfgcYsOTl6xswn57M_Wkfo197VCeWg&s",
        profession: "Pharmacien en officine, expert en suivi thérapeutique des patients diabétiques.",
        comment: "Une formation qui m’a permis de mieux comprendre les enjeux et les besoins des patients diabétiques.",
      },
      {
        name: "Catherine Morel",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQRNc_-4U2ploiNZqVnFpJPy4EX6vs-Xzag&s",
        profession: "Pédiatre spécialisée en prise en charge du diabète chez l’enfant.",
        comment: "Les outils pédagogiques proposés sont idéaux pour accompagner les jeunes patients et leurs familles.",
      }
    ],
    duration: "14 heures (2 jours).",
    instructors: "Dr. Pierre Dukan",
    description: "Cette formation offre aux soignants les connaissances et compétences nécessaires pour une prise en charge holistique des patients diabétiques.",
ProchaineSession : "18/07",
Duree : "14 heures (2 jours).",
DPC : "93208473928",
Duree : "12 heures",
Financements : "FIF PL",
skills: [
  "Identification des types de diabète : Différenciation entre les diabètes de type 1, type 2 et gestationnel.",
  "Gestion des complications : Prévention et prise en charge des complications aigües et chroniques liées au diabète.",
  "Éducation thérapeutique : Formation des patients sur la gestion quotidienne du diabète et des traitements.",
  "Connaissances en nutrition : Élaboration de plans alimentaires adaptés aux besoins des patients diabétiques.",
  "Suivi multidisciplinaire : Collaboration avec différents professionnels pour une prise en charge globale.",
],
programme: {
  id: "1",
  title: "Diabète - Prise en charge globale",
  parts: [
    {
      title: "Bases du diabète",
      duration: "3 heures",
      sections: [
        "Types de diabète (type 1, type 2, gestationnel).",
        "Physiopathologie et traitements disponibles.",
      
      ]
    },
    {
      title: ": Complications et prévention",
      duration: "5 heures",
      sections: [
        "Surveillance des complications chroniques.",
        "Conseils pour une prévention efficace."
      ]
    },
    {
      title: "Education thérapeutique",
      duration: "4 heures",
      sections: [
        "Techniques pour accompagner les patients.",
        "Sensibilisation à l’importance de l’alimentation et de l’activité physique.",
       
      ]
    },
  ],
  certification: "Une attestation de formation sera délivrée."

}
  },
  {
    id: 7,
    image:
      "https://www.allianz.fr/assurances-professionnels-entreprises/mon-activite/assurer-mes-responsabilites/_jcr_content/root/stage/stageimage.img.70.3360.jpeg/1658932233349/bras-responsabilite-civile-pro.jpeg",
    title: "Responsabilité Professionnelle",
    duration: "7 heures (1 jour).",
    instructors: "Dr. Alain Ducardonnet",
    description: "Cette formation vise à sensibiliser les soignants à leurs obligations légales et éthiques dans le cadre de leur pratique professionnelle.",
    instructors2: [
      {
        name: "Dr. Pierre Marchand",
        image: "https://media.doctolib.com/image/upload/q_auto:eco,f_auto/i90gyrm8ll7b6iba0hug.jpg", // Remplacer par l'URL de l'image
        role: "Juriste spécialisé en droit médical et consultant en gestion des risques pour les établissements de santé.",
        numOfTrainings: 20,
      },
      {
        name: "Sophie Laurent",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCDP5lOMJqaRNebywe8HLf2trU8zQVfwUsCw&s", // Remplacer par l'URL de l'image
        role: "Avocate experte en responsabilité professionnelle et litiges médicaux.",
        numOfTrainings: 18,
      }
    ],
    objectifs: [
      "Comprendre les bases juridiques de la responsabilité médicale.",
      "Identifier les situations à risque.",
      "Appliquer les bonnes pratiques pour prévenir les litiges.",
      "Maîtriser les procédures en cas de mise en cause."
    ],
    professionals: [
      {
        name: "Jean-Luc Bernard",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGEN1SrudVClMUjrgUuaXj0IaxPqnazG2-vg&s",
        profession: "Infirmier coordinateur en établissement hospitalier.",
        comment: "Cette formation m’a aidé à clarifier mes responsabilités dans le cadre de mes fonctions.",
      },
      {
        name: "Amélie Dupuis",
        image: "https://media.licdn.com/dms/image/v2/C4D03AQFO3lKqaDkm3w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1642369182293?e=2147483647&v=beta&t=XrcDiO2VmoLxy_GqhQ4RlSttUJNRNh72mlxY24vxqrc",
        profession: "Médecin généraliste en libéral.",
        comment: "J’ai appris à mieux gérer les risques juridiques liés à ma pratique quotidienne.",
      },
      {
        name: "Thomas Lefèvre",
        image: "https://media.licdn.com/dms/image/C5603AQEvIOnZ1EV7pQ/profile-displayphoto-shrink_200_200/0/1554043495485?e=2147483647&v=beta&t=h-QH3bhPUEcyy8McfY6Dv09RqVkI8NHx-TdPUbpeL0Y",
        profession: "Pharmacien responsable d’officine.",
        comment: "Une formation essentielle pour sécuriser mes pratiques professionnelles.",
      },
      {
        name: "Claire Fontaine",
        image: "https://arts.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_rectangle/public/screen_shot_2024-06-26_at_5.04.15_pm.png?itok=xy6A4FgX&timestamp=1719446747",
        profession: "Sage-femme dans un centre hospitalier public.",
        comment: "Les modules sur la responsabilité civile et pénale étaient particulièrement pertinents pour ma pratique.",
      }
    ],
ProchaineSession : "30/08",
DPC : "93048239284",
Duree : "7 heures (1 jour).",
Financements : "DPC, FIF PL",
skills: [
  "Connaissance des obligations légales : Maîtrise des principes juridiques liés à la pratique professionnelle.",
  "Gestion des risques : Identification et prévention des erreurs médicales et des incidents professionnels.",
  "Responsabilité civile et pénale : Différenciation des implications légales en cas de litiges.",
  "Déontologie et éthique : Application des principes moraux et professionnels dans la pratique quotidienne.",
  "Communication en situation de crise : Gestion des relations avec les patients et les autorités en cas d’incidents.",
],
programme: {
  id: "1",
  title: "Responsabilité Professionnelle",
  parts: [
    {
      title: "Cadre juridique",
      duration: "3 heures",
      sections: [
        "Législations relatives à la responsabilité médicale.",
        "Notions de faute professionnelle et déontologie.",
       
      ]
    },
    {
      title: "Gestion des risques",
      duration: "4 heures",
      sections: [
        "Analyse des cas de litige.",
        "Précautions à prendre pour éviter les erreurs.",
        
      ]
    },
    {
      title: "Réaction en cas de mise en cause",
      duration: "3 heures",
      sections: [
        "Rédaction de rapports et collecte de preuves.",
        "Communication avec les patients et les autorités.",
        
      ]
    },
  ],
  certification: "Une attestation de formation sera délivrée."

}

  },
  {
    id: 8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXRSC32Y3SwUqrutZebQbIxRlxWnxf481d-w&s",
    title: "Prévention et Prise en Charge de l'Obésité",
    duration: "12H",
    instructors: "Dr. Alain Ducardonnet",
    description: "Cette formation permet aux soignants de mieux comprendre l’obésité et d’améliorer leur prise en charge des patients atteints.",

    instructors2: [
      {
        name: "Dr. Marion Dubois",
        image: "https://www.crp-paca-corse.fr/wp-content/uploads/2023/09/Marion-scaled.jpg", // Remplacer par l'URL de l'image
        role: "Nutritionniste spécialisée dans la prise en charge de l'obésité et des troubles métaboliques.",
        numOfTrainings: 22,
      },
      {
        name: "Philippe Renault",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE6cUtgoykMeyTCq-zL9pLBnj42koiqCKElA&s", // Remplacer par l'URL de l'image
        role: "Psychologue clinicien spécialisé dans le suivi des troubles alimentaires et de l’obésité.",
        numOfTrainings: 15,
      }
    ],
    professionals: [
      {
        name: "Claire Morel",
        image: "https://media.licdn.com/dms/image/v2/C4D03AQGWXVYO3vEuhw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1589968209694?e=2147483647&v=beta&t=Qc0ORuR9GkDB3qkrJDjkhB13Jl3zsbj0YT66OQXxTUY",
        profession: "Diététicienne en libéral.",
        comment: "La formation m’a apporté des outils concrets pour accompagner mes patients souffrant d’obésité.",
      },
      {
        name: "Antoine Girard",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFUGndRjrjxxMPERklexOXuES3T1dOQ_bBFg&s",
        profession: "Médecin généraliste.",
        comment: "Un programme enrichissant pour mieux comprendre les aspects multidisciplinaires de l’obésité.",
      },
      {
        name: "Sophie Bernard",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQTfYXaA4_PeVA3YdFlCmmPBUX0j1d6fokEQ&s",
        profession: "Kinésithérapeute.",
        comment: "Très utile pour intégrer des exercices physiques adaptés dans la prise en charge de l’obésité.",
      },
      {
        name: "Lucien Lefèvre",
        image: "https://media.licdn.com/dms/image/v2/C5603AQHwXUE4H_u3nw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516335632276?e=2147483647&v=beta&t=QQjoiXL-AkKV-AJPFU_H8EeEXyBOC4rwlENbrcKYHzg",
        profession: "Endocrinologue.",
        comment: "Une formation complète sur les approches thérapeutiques modernes contre l’obésité.",
      }
    ],
    objectifs: [
      "Identifier les causes de l’obésité.",
      "Comprendre les approches médicales et psychologiques de la prise en charge.",
      "Promouvoir des stratégies de prévention.",
      "Accompagner les patients dans un parcours de soins personnalisé."
    ],
ProchaineSession : "30/08",
DPC : "93048239284",
Duree : "12 heures",
Financements : "DPC, FIF PL",
skills: [
  "Connaissance des causes et facteurs de risque de l’obésité.",
  "Techniques de prévention adaptées aux différents profils de patients.",
  "Mise en place de programmes nutritionnels personnalisés.",
  "Accompagnement psychologique des patients souffrant d’obésité.",
  "Coordination multidisciplinaire dans la prise en charge globale.",
],
programme: {
  id: "1",
  title: "Prévention et Prise en Charge de l'Obésité",
  parts: [
    {
      title: "Compréhension de l’obésité",
      duration: "3 heures",
      sections: [
        "Facteurs génétiques, environnementaux et psychologiques.",
        "Impact de l’obésité sur la santé globale.",
        
      ]
    },
    {
      title: "Stratégies de prise en charge",
      duration: "4 heures",
      sections: [
        "Approches diététiques et médicales.",
        "Rôle des interventions chirurgicales.",
      
      ]
    },
    {
      title: "Accompagnement des patients",
      duration: "5 heures",
      sections: [
        "Techniques pour instaurer une relation de confiance.",
        "Mise en place d’objectifs réalistes et durables.",
      ]
    },
  ],

  certification: "Une attestation de formation sera délivrée."

}

  },
  {
    id: 9,
    image:
      "https://mon-cancer.com/wp-content/uploads/sites/147/2022/07/accompagnement-professionnels.jpg",
    title: " Cancérologie - Soins et Accompagnement",
    duration: "21 heures (3 jours).",
    instructors: "Dr. Alain Ducardonnet",
    description: "Cette formation offre aux soignants les compétences essentielles pour la prise en charge des patients atteints de cancer, en intégrant des dimensions médicales, psychologiques et sociales.",
    instructors2: [
      {
        name: "Dr. Céline Martin",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyRszrRV0fUZSyJQ8M5PYoNorD4wqa9vhU6g&s", // Remplacer par l'URL de l'image
        role: "Oncologue spécialisée dans les traitements innovants et les soins de support.",
        numOfTrainings: 30,
      },
      {
        name: "Mathieu Dupont",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSII9AakhSm6HRuE6MEoeQeDsMxYqMcSrxo_A&s", // Remplacer par l'URL de l'image
        role: "Infirmier clinicien en oncologie, expert en gestion de la douleur et accompagnement des patients.",
        numOfTrainings: 18,
      },
    ],
  
    professionals: [
      {
        name: "Sophie Lambert",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKn9o5NsTH3x4buLlrHbZOhRcR3iZNbrofg&s",
        profession: "Infirmière en soins palliatifs.",
        comment: "La formation m’a permis d'améliorer mes compétences en accompagnement émotionnel des patients atteints de cancer.",
      },
      {
        name: "Jean-Paul Mercier",
        image: "https://www.avenir-agricole-ardeche.fr/media/aaa/FDSEA/Jean_paul_mercier.jpg",
        profession: "Médecin généraliste.",
        comment: "Une approche complète pour mieux orienter et soutenir mes patients dans leur parcours de soins.",
      },
      {
        name: "Marion Lefebvre",
        image: "https://media.licdn.com/dms/image/v2/C4E03AQGOaExFMeGuzA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1586278965847?e=2147483647&v=beta&t=esd-93m4uodBoLJJHIDxqp9_G4PyAju66clHANgNeqY",
        profession: "Psychologue spécialisée en psycho-oncologie.",
        comment: "Très enrichissant pour approfondir la compréhension des besoins psychologiques des patients atteints de cancer.",
      },
      {
        name: "Luc Moreau",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0Xy8Xlj1GKlWkq9UfHivfqawqJ0Xbsrf7A&s",
        profession: "Pharmacien hospitalier.",
        comment: "J’ai acquis des connaissances précieuses sur les interactions médicamenteuses dans les traitements oncologiques.",
      },
    ],
ProchaineSession : "30/08",
DPC : "93048239284",
Duree : "21 heures (3 jours).",
Financements : "DPC, FIF PL",
skills: [
  "Compréhension des différents types de cancers et traitements associés.",
  "Maîtrise des techniques de gestion de la douleur et des soins de support.",
  "Capacité à accompagner les patients et leurs familles dans le parcours de soins.",
  "Compétences en éducation thérapeutique pour les patients atteints de cancer.",
  "Coordination des soins entre les équipes pluridisciplinaires.",
],
programme: {
  id: "1",
  title: "Cancérologie - Soins et Accompagnement",
  parts: [
    {
      title: "Bases en cancérologie",
      duration: "3 heures",
      sections: [
        "Physiopathologie des cancers.",
        "Traitements : chimiothérapie, radiothérapie, immunothérapie.",
       
      ],
    },
    {
      title: "Soins spécifiques",
      duration: "5 heures",
      sections: [
        "Gestion des effets secondaires des traitements.",
        "Techniques de soins palliatifs pour les patients en phase avancée.",
       
      ],
    },
    {
      title: "Accompagnement psychosocial",
      duration: "4 heures",
      sections: [
        "Soutien psychologique pour les patients et leurs familles.",
        "Travail en équipe pluridisciplinaire pour une prise en charge globale.",
        
      ],
    },
  ],


},

objectifs: [
  "Comprendre les différents types de cancers et leurs traitements.",
  "Accompagner les patients tout au long de leur parcours de soins.",
  "Appliquer les bonnes pratiques de soins palliatifs et de gestion de la douleur.",
  "Soutenir les familles des patients."
],
certification: "Une attestation de formation sera délivrée."

  },
  {
    id: 10,
    image:
      "https://hsecaraibes.fr/wp-content/uploads/2024/07/shutterstock_2049863633-e1720637088452.jpg",
    title: " Maladie de Parkinson - Prise en Charge Globale",
    duration: "21 heures (3 jours).",
    instructors: "Dr. Alain Ducardonnet",
    description: "Cette formation s'adresse aux soignants souhaitant approfondir leurs connaissances sur la maladie de Parkinson pour optimiser la prise en charge des patients et améliorer leur qualité de vie.",

    instructors2: [
      {
        name: "Dr. Pierre Lemoine",
        image: "https://media.licdn.com/dms/image/v2/C4E03AQGSFCkuE-P5QQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1625637697793?e=2147483647&v=beta&t=bPIYWx_Dev-pWKtChW3X-VwpOoBL177wytP0a4SnVto", // Remplacer par l'URL de l'image
        role: "Neurologue spécialisé dans les troubles du mouvement et les thérapies innovantes pour la maladie de Parkinson.",
        numOfTrainings: 25,
      },
      {
        name: "Camille Durand",
        image: "https://imgproxy.filmmakers.eu/5EbJ4aSuVTW4GG9kao8hr8-4tEt9LmzgglZVsqKvAr0/rt:fill/el:1/c:852:852:nowe:0:0/w:500/h:500/g:no/czM6Ly9maWxtbWFr/ZXJzLWV1LXdlc3Qt/MS9wcm9kdWN0aW9u/L2UxOWZhYzRhLTgz/NjQtNGI1MS1hZDEx/LTg3NTZjNDBiYmZh/My5qcGVn.jpg", // Remplacer par l'URL de l'image
        role: "Kinésithérapeute experte en rééducation fonctionnelle des patients atteints de maladies neurodégénératives.",
        numOfTrainings: 15,
      },
    ],
  
    professionals: [
      {
        name: "Julien Morel",
        image: "https://pbs.twimg.com/profile_images/779226501023760384/2FZ5Vafm_400x400.jpg",
        profession: "Infirmier en neurologie.",
        comment: "Grâce à cette formation, j’ai approfondi mes connaissances sur la gestion des symptômes moteurs et non moteurs.",
      },
      {
        name: "Sophie Delacroix",
        image: "https://media.licdn.com/dms/image/v2/C4D03AQFpuLKSwTJZCA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1617231554707?e=2147483647&v=beta&t=HrSmoq_yc7jOu1BT3J0A1SlCZC6cstjdQEtQQN2aHP0",
        profession: "Ergothérapeute.",
        comment: "J’ai appris des stratégies pratiques pour améliorer l’autonomie des patients atteints de Parkinson.",
      },
      {
        name: "Louis Bertrand",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-EwlkCewv9QEOzXup-JJK36Hh1yifRfDtFQ&s",
        profession: "Psychologue clinicien spécialisé en neuropsychologie.",
        comment: "Formation très enrichissante sur l’accompagnement des patients et de leurs aidants.",
      },
      {
        name: "Isabelle Martin",
        image: "https://images.midilibre.fr/api/v1/images/view/658ba3787351fe25ad073559/full/image.jpg?v=1",
        profession: "Médecin généraliste.",
        comment: "Essentiel pour mieux comprendre les besoins des patients et adapter les traitements au quotidien.",
      },
    ],
ProchaineSession : "30/08",
DPC : "93048239284",
Duree : "21 heures (3 jours).",
Financements : "DPC, FIF PL",
skills: [
  "Connaissance approfondie de la physiopathologie de la maladie de Parkinson.",
  "Maîtrise des traitements médicamenteux et alternatives thérapeutiques.",
  "Capacité à élaborer un plan de soins personnalisé et multidisciplinaire.",
  "Techniques de rééducation pour améliorer la mobilité et l’autonomie des patients.",
  "Accompagnement psychologique des patients et de leurs aidants.",
],
programme: {
  id: "1",
  title: "Maladie de Parkinson - Prise en Charge Globale",
  parts: [
    {
      title: "Comprendre la maladie de Parkinson",
      duration: "3 heures",
      sections: [
        "Physiopathologie et facteurs de risque.",
        "Stades évolutifs et manifestations cliniques.",
      
      ],
    },
    {
      title: ": Gestion des symptômes et traitements",
      duration: "5 heures",
      sections: [
        "Traitements pharmacologiques et leur suivi.",
        "Prise en charge des troubles moteurs et non moteurs.",
        
      ],
    },
    {
      title: "Approche pluridisciplinaire",
      duration: "4 heures",
      sections: [
        "Importance de la kinésithérapie, orthophonie, et ergothérapie.",
        "Coordination des soins entre les différents intervenants.",
      ],
    },
    {
      title: "Soutien aux aidants",
      duration: "4 heures",
      sections: [
        "Techniques de communication et gestion du stress.",
        "Sensibilisation à la prévention de l'épuisement des aidants.",
      ],
    },
  ],
 
},
objectifs: [
  "Comprendre la physiopathologie et les stades évolutifs de la maladie.",
  "Identifier les traitements et stratégies de gestion des symptômes.",
  "Mettre en place un accompagnement personnalisé et multidisciplinaire.",
  "Sensibiliser les aidants pour un soutien quotidien optimal."
],
certification: "Une attestation de formation sera délivrée."


  },
  {
    id: 11,
    image:
      "https://www.chirurgie-vasculaire.tn/wp-content/uploads/2019/03/Plaie-1.png",
    title: "Plaies et Cicatrisation",
    duration: "14 heures (2 jours).",
    instructors: "Dr. Alain Ducardonnet",
    description: "Cette formation permet aux professionnels de santé de se spécialiser dans la prise en charge des plaies et la gestion du processus de cicatrisation.",
    instructors2: [
      {
        name: "Dr. Thomas Lefevre",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFywDARc0CoSUA1RD9Sjem0RR0MdSA5lcsHw&s", // Remplacer par l'URL de l'image
        role: "Chirurgien vasculaire spécialisé dans la prise en charge des plaies complexes et de l’ulcère veineux.",
        numOfTrainings: 20,
      },
      {
        name: "Élodie Marchand",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKoNtI7iM_tWRVixpo0fYxjX5a5stlCep27Q&s", // Remplacer par l'URL de l'image
        role: "Infirmière experte en soins des plaies et cicatrisation, spécialisée en pansements techniques et thérapies innovantes.",
        numOfTrainings: 18,
      },
    ],
  
    professionals: [
      {
        name: "Marc Dubois",
        image: "https://a-plus.be/wp-content/uploads/2020/11/marcdubois.jpg",
        profession: "Médecin généraliste.",
        comment: "Cette formation m'a aidé à mieux diagnostiquer et traiter les plaies chroniques chez mes patients.",
      },
      {
        name: "Sophie Garnier",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWk4MRQg_BU7EcsD3P1igpmui1vf85wS9nDw&s",
        profession: "Infirmière en soins à domicile.",
        comment: "J’ai appris de nouvelles techniques pour optimiser la cicatrisation et éviter les infections.",
      },
      {
        name: "Laurent Vidal",
        image: "https://www.babelio.com/users/AVT_Laurent-Vidal_99.jpeg",
        profession: "Podologue.",
        comment: "Formation essentielle pour gérer les plaies du pied diabétique et éviter les complications graves.",
      },
      {
        name: "Isabelle Fontaine",
        image: "https://www.babelio.com/users/AVT_Isabelle-Fontaine_692.jpg",
        profession: "Dermatologue.",
        comment: "J’ai approfondi mes connaissances sur les différentes étapes de la cicatrisation et les traitements avancés.",
      },
    ],
ProchaineSession : "30/05",
DPC : "87456321905",
Duree : "14 heures (2 jours).",
Financements : "DPC, FIF PL",
skills: [
  "Identification et classification des différents types de plaies.",
  "Maîtrise des étapes de cicatrisation et des facteurs influençant le processus.",
  "Utilisation des pansements adaptés et des thérapies de pointe.",
  "Prévention et prise en charge des complications (infections, escarres, ulcères).",
  "Éducation thérapeutique des patients pour favoriser une guérison optimale.",
],
programme: {
  id: "1",
  title: "Plaies et Cicatrisation",
  parts: [
    {
      title: "Introduction à la prise en charge des plaies",
      duration: "3 heures",
      sections: [
        "Anatomie et physiologie de la peau.",
        "Différents types de plaies : aigües, chroniques, traumatiques.",
        "Facteurs influençant la cicatrisation et stratégies de prévention.",
      ],
    },
    {
      title: "Techniques de soins et protocoles de cicatrisation",
      duration: "5 heures",
      sections: [
        "Choix des pansements en fonction du type de plaie.",
        "Utilisation des thérapies avancées (thérapie par pression négative, greffes cutanées).",
        "Gestion des complications : infections, retard de cicatrisation.",
      ],
    },
    {
      title: "Approche multidisciplinaire et éducation du patient",
      duration: "4 heures",
      sections: [
        "Coordination des soins entre professionnels de santé.",
        "Prise en charge spécifique des plaies du pied diabétique et des escarres.",
        "Éducation du patient et des aidants pour une meilleure observance des soins.",
      ],
    },
  ],

 
},
objectifs: [
  "Identifier les différents types de plaies et leurs spécificités.",
  "Mettre en place des protocoles de soins adaptés pour optimiser la cicatrisation.",
  "Prévenir les complications liées aux plaies chroniques.",
  "Maîtriser les techniques et matériaux modernes de soin."
],
certification: "Une attestation de formation sera délivrée."


  },
  {
    id: 12,
    image:
      "https://ceerrf.fr/wp-content/uploads/2022/03/Innovation-et-kine%CC%81sithe%CC%81rapie.webp",
    title: "Kinésithérapie - Approches Innovantes en Rééducation",
    duration: "21 heures (3 jours).",
    instructors: "Dr. Alain Ducardonnet",
    description: "Cette formation offre aux kinésithérapeutes des outils et techniques innovants pour optimiser la rééducation fonctionnelle et améliorer l’accompagnement des patients.",
    instructors2: [
      {
        name: "Dr. François Lambert",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy7CM2FrMcbc7gY3zFJ-Iscv9uYRUfDJq67A&s", // Remplacer par l'URL de l'image
        role: "Kinésithérapeute spécialisé en rééducation neuromusculaire et en thérapies manuelles avancées.",
        numOfTrainings: 25,
      },
      {
        name: "Camille Dupont",
        image: "https://tutorexpertz.com/wp-content/uploads/2024/11/image3-10.png", // Remplacer par l'URL de l'image
        role: "Experte en rééducation post-opératoire et en technologies de réadaptation assistée.",
        numOfTrainings: 20,
      },
    ],
    professionals: [
      {
        name: "Jean Morel",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq-upA7uB8RsWC9uxWxhuA_424zA_WvhxfeQ&s",
        profession: "Kinésithérapeute libéral.",
        comment: "Formation très enrichissante sur les nouvelles approches de rééducation neuro-motrice.",
      },
      {
        name: "Sophie Garnier",
        image: "https://jdd.alchimiedujeu.fr/wp-content/uploads/2023/04/GARNIER_Photo-Sophie-Garnier.jpg",
        profession: "Ergothérapeute.",
        comment: "Les méthodes innovantes abordées sont essentielles pour améliorer la rééducation fonctionnelle des patients.",
      },
      {
        name: "Thomas Leroy",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ99JqoywjWsKy2LEuglZ7iQWayFHDvXtbh_w&s",
        profession: "Médecin rééducateur.",
        comment: "J’ai découvert des techniques avancées pour optimiser la récupération motrice après un AVC.",
      },
      {
        name: "Isabelle Fontaine",
        image: "https://isabelle-fontaine.com/images/e2c3de9ff3088564ff0a8932a4b5a56f.png",
        profession: "Coach en réathlétisation.",
        comment: "Formation complète qui permet d'améliorer le suivi des sportifs en convalescence.",
      },
    ],
ProchaineSession : "30/05",
DPC : "87456321905",
Duree : "21 heures (3 jours).",
Financements : "DPC, FIF PL",
skills: [
  "Maîtrise des techniques de rééducation fonctionnelle avancée.",
  "Utilisation des nouvelles technologies en réadaptation (réalité virtuelle, exosquelettes).",
  "Approches manuelles et mobilisation tissulaire en rééducation.",
  "Prise en charge des pathologies chroniques et post-opératoires.",
  "Planification d’un protocole de rééducation personnalisé et suivi patient.",
],
programme: {
  id: "1",
  title: "Kinésithérapie - Approches Innovantes en Rééducation",
  parts: [
    {
      title: "Techniques avancées en rééducation",
      duration: "3 heures",
      sections: [
        "Mobilisations spécifiques et thérapies manuelles.",
        "Approches en rééducation neurologique et orthopédique.",
        
      ],
    },
    {
      title: "Outils technologiques en kinésithérapie",
      duration: "5 heures",
      sections: [
        "Utilisation de dispositifs connectés pour la rééducation.",
        "Intégration de la réalité virtuelle et de la robotique dans les séances.",
      ],
    },
    {
      title: "Accompagnement personnalisé du patient",
      duration: "4 heures",
      sections: [
        "Évaluation des besoins et élaboration de plans de traitement sur mesure.",
        "Gestion des douleurs chroniques et renforcement musculaire.",

      ],
    },
  ],
},
objectifs: [
  "Découvrir les approches modernes en kinésithérapie.",
  "Intégrer des techniques spécifiques adaptées à différentes pathologies.",
  "Maîtriser les outils technologiques pour améliorer les résultats en rééducation.",
 
],
certification: "Une attestation de formation sera délivrée."
  },
  {
    id: 13,
    image:
      "https://www.france-denturiste.fr/wp-content/uploads/2023/12/dentisterie-specialisations.jpeg",
    title: "Chirurgie Dentaire - Gestion des Pathologies Complexes",
    duration: "14 heures (2 jours).",
    instructors: "Dr. Alain Ducardonnet",
    description: "Cette formation aide les chirurgiens-dentistes à maîtriser la prise en charge des pathologies bucco-dentaires complexes grâce à des techniques avancées et des outils modernes.",
    instructors2: [
      {
        name: "Dr. Laurent Moreau",
        image: "https://www.gallimard-jeunesse.fr/assets/media/cache/portrait_medium/gallimard_img/picture/78237.jpg", // Remplacer par l'URL de l'image
        role: "Chirurgien-dentiste spécialisé en implantologie et en chirurgie reconstructrice.",
        numOfTrainings: 30,
      },
      {
        name: "Dr. Émilie Fontaine",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUOQXjuZ0r5hsOI7C8Qqm1TYVzDToFVbWBpw&s", // Remplacer par l'URL de l'image
        role: "Experte en chirurgie parodontale et en gestion des complications post-opératoires.",
        numOfTrainings: 22,
      },
    ],
    professionals: [
      {
        name: "Atef Ben Boubaker",
        image: "https://media.licdn.com/dms/image/v2/C4E03AQHK03yKyudE8Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1602844194256?e=2147483647&v=beta&t=5bSR6b0YMJ1Er1yrOJuwmqoQsMiXnGKaDX9zTB8MlIQ",
        profession: "Chirurgien-dentiste libéral.",
        comment: "Une formation très complète sur les techniques avancées en chirurgie orale.",
      },
      {
        name: "Sophie Martin",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOwz0g4EZj2J8SAr31tkR2iqWWFGm9kkKQcA&s",
        profession: "Orthodontiste.",
        comment: "L'approche multidisciplinaire présentée permet une meilleure coordination des soins.",
      },
      {
        name: "Paul Durand",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw2EfMS1B_OQLVRNcibU8esUWY8T3UxSKHhw&s",
        profession: "Prothésiste dentaire.",
        comment: "J’ai appris des techniques clés pour optimiser l'intégration des prothèses en post-chirurgie.",
      },
      {
        name: "Isabelle Chevalier",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMyvAKUUR-1W-jdlVLXHlm77Uuv82fRGEtiA&s",
        profession: "Assistante dentaire.",
        comment: "Une formation précieuse pour mieux assister les praticiens en chirurgie complexe.",
      },
    ],
ProchaineSession : "30/05",
DPC : "87456321905",
Duree : "14 heures (2 jours).",
Financements : "DPC, FIF PL",
skills: [
  "Maîtrise des techniques chirurgicales en odontologie.",
  "Gestion des complications post-opératoires et prévention des infections.",
  "Approche multidisciplinaire pour la prise en charge des pathologies complexes.",
  "Utilisation des nouvelles technologies en chirurgie dentaire (laser, imagerie 3D).",
  "Optimisation des protocoles de soins et suivi post-opératoire.",
],
programme: {
  id: "1",
  title: "Chirurgie Dentaire - Gestion des Pathologies Complexes",
  parts: [
    {
      title: "Pathologies bucco-dentaires complexes",
      duration: "3 heures",
      sections: [
        "Gestion des infections buccales graves.",
        "Techniques pour les reconstructions dentaires complexes.",
        
      ],
    },
    {
      title: "Innovations en chirurgie dentaire",
      duration: "5 heures",
      sections: [
        "Laser en dentisterie : applications et avantages.",
        "Outils numériques pour les diagnostics et la planification des traitements.",
        
      ],
    },
    {
      title: "Relation patient",
      duration: "4 heures",
      sections: [
        "Techniques de communication pour expliquer les interventions complexes.",
        "Gestion des appréhensions des patients.",
        
      ],
    },
  ],
},
objectifs: [
  "Identifier et traiter les pathologies complexes de la cavité buccale.",
  "Appliquer les dernières innovations en chirurgie dentaire.",
  "Optimiser la communication avec les patients pour les accompagner dans leur parcours de soins.",
 
],
certification: "Une attestation de formation sera délivrée."
  
  },
  {
    id: 14,
    image:
      "https://www.rayonnagedemagasin.com/img/cms/9.jpg",
    title: "Pharmaciens - Optimisation des Conseils au Comptoir",
    duration: "14 heures (2 jours).",
    instructors: "Dr. Alain Ducardonnet",
      description: "Cette formation permet aux pharmaciens d'améliorer leurs conseils aux patients au comptoir. Elle aborde les bonnes pratiques de communication, la délivrance des médicaments en toute sécurité et l’optimisation de la prise en charge des patients en officine.",
instructors2: [
  {
    name: "Dr. Philippe Garnier",
    image: "https://www.babelio.com/users/AVT_Philippe-Garnier_8344.jpg", // Remplacer par l'URL de l'image
    role: "Pharmacien titulaire, expert en conseils pharmaceutiques et optimisation des délivrances.",
    numOfTrainings: 28,
  },
  {
    name: "Dr. Claire Dubois",
    image: "https://media.doctolib.com/image/upload/q_auto:eco,f_auto/rdz5x0kdugdlgp6w5teu.jpg", // Remplacer par l'URL de l'image
    role: "Docteure en pharmacie spécialisée en éducation thérapeutique et accompagnement patient.",
    numOfTrainings: 25,
  },
],
professionals: [
  {
    name: "Julien Martin",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkzE5h5N1X0w2Io4Qh9wdLzJj9OJNNnyR6kw&s",
    profession: "Pharmacien d'officine.",
    comment: "Une formation essentielle pour améliorer l’accompagnement des patients au quotidien.",
  },
  {
    name: "Sophie Lemoine",
    image: "https://static.public.fr/wp-content/uploads/2024/03/Anne-Sophie-Lapix-et-Anne-Elisabeth-Lemoine-accusees-d-homophobie-pendant-leur-JT-et-leur-emission-cette-expression-qui-pose-probleme-5-1024x810.webp",
    profession: "Préparatrice en pharmacie.",
    comment: "Des conseils très pratiques pour optimiser la délivrance des médicaments.",
  },
  {
    name: "François Dupont",
    image: "https://cdn.carrevolutis.com/reborn-production-cdn-bucket/users/13873/francois-dupont_n.png",
    profession: "Pharmacien hospitalier.",
    comment: "Une vision claire sur le rôle du pharmacien dans le parcours de soins des patients.",
  },
  {
    name: "Isabelle Roche",
    image: "https://topmanagement.fr/wp-content/uploads/2022/07/IsabelleROCHE-1.jpg",
    profession: "Responsable qualité en pharmacie.",
    comment: "Très utile pour renforcer la qualité et la sécurité des conseils délivrés en officine.",
  },
],
ProchaineSession : "30/05",
DPC : "87456321905",
Duree : "14 heures (2 jours).",
Financements : "DPC, FIF PL",
skills: [
  "Amélioration de la communication avec les patients.",
  "Gestion des contre-indications et interactions médicamenteuses.",
  "Optimisation des conseils pour l'automédication en toute sécurité.",
  "Prise en charge personnalisée des patients en officine.",
  "Respect des réglementations et bonnes pratiques pharmaceutiques.",
],
programme: {
  id: "1",
  title: "Pharmaciens - Optimisation des Conseils au Comptoir",
  parts: [
    {
      title: "Conseils pharmaceutiques personnalisés.",
      duration: "3 heures",
      sections: [
        "Techniques pour comprendre les besoins des patients.",
        "Gestion des interactions médicamenteuses et précautions d’usage.",
        
      ],
    },
    {
      title: "Réglementation et pratiques",
      duration: "5 heures",
      sections: [
        "Règles de délivrance des médicaments soumis à prescription.",
        "Responsabilités éthiques et professionnelles.",
       
      ],
    },
    {
      title: "Relation client",
      duration: "4 heures",
      sections: [
        "Communication empathique pour établir une relation de confiance.",
        "Techniques pour fidéliser les patients.",
        
      ],
    },
  ],

},
objectifs: [
  "Renforcer les compétences en conseils pharmaceutiques.",
  "Maîtriser les aspects réglementaires liés à la délivrance des médicaments.",
  "Favoriser une approche personnalisée pour chaque patient.",
 
],
certification: "Une attestation de formation sera délivrée."

  },
  {
    id: 15,
    image:
      "https://esoftskills.com/fr/wp-content/uploads/2024/03/Approches-multidisciplinaires-pour-la-formation-en-management-de-la-sante.jpg",
    title: " Médecins Généralistes - Approches Multidisciplinaires",
    duration: "21 heures (3 jours).",
    instructors: "Dr. Alain Ducardonnet",
    description: "Cette formation propose aux médecins généralistes des outils pratiques pour une prise en charge globale et multidisciplinaire des patients, en intégrant les dernières avancées médiales.",
    instructors2: [
      {
        name: "Dr. Laurent Moreau",
        image: "https://orthodoc.fr/wa_res/images/big/docteur_laurent_geiss.webp?t=77cb251b_9d77_4d4f_a6c2_f7af3db30de1", // Remplacer par l'URL de l'image
        role: "Médecin généraliste et coordinateur en soins primaires, spécialisé en approche multidisciplinaire.",
        numOfTrainings: 32,
      },
      {
        name: "Dr. Nathalie Fontaine",
        image: "https://ampchureunion.com/wp-content/uploads/2016/01/2portrait_nathaliefontaine.jpg", // Remplacer par l'URL de l'image
        role: "Médecin spécialiste en médecine interne et experte en gestion des comorbidités.",
        numOfTrainings: 28,
      },
    ],
    professionals: [
      {
        name: "Jean-Paul Lefèvre",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3lccPopQOP1PQLd3hNnl4XBMtzwrgnzN9Q&s",
        profession: "Médecin généraliste.",
        comment: "Une approche essentielle pour améliorer la coordination avec d'autres spécialistes.",
      },
      {
        name: "Sophie Martin",
        image: "https://lbp.unistra.fr/websites/pharmacie/UMR7021/00-actu_agenda/2024/Sophie_Martin_2024.jpg",
        profession: "Infirmière en soins primaires.",
        comment: "Formation très pertinente pour renforcer le travail en équipe pluridisciplinaire.",
      },
      {
        name: "Antoine Girard",
        image: "https://www.antoine-girard.com/wp-content/uploads/2020/11/antoinge-girard.jpg",
        profession: "Pharmacien d’officine.",
        comment: "Une meilleure collaboration entre médecins et pharmaciens pour optimiser les traitements.",
      },
      {
        name: "Isabelle Dubois",
        image: "https://mir-s3-cdn-cf.behance.net/user/276/e8241b297677463.60986d601aa4e.jpg",
        profession: "Psychologue en milieu hospitalier.",
        comment: "Indispensable pour mieux intégrer la prise en charge psychologique des patients.",
      },
    ],
ProchaineSession : "30/05",
DPC : "87456321905",
Duree : "21 heures (3 jours).",
Financements : "DPC, FIF PL",
skills: [
  "Amélioration de la collaboration interprofessionnelle.",
  "Optimisation du suivi des patients atteints de pathologies chroniques.",
  "Prise en charge globale et individualisée des patients.",
  "Intégration des soins psychologiques et sociaux dans la médecine générale.",
  "Coordination des soins avec les autres professionnels de santé.",
],
programme: {
  id: "1",
  title: "Médecins Généralistes - Approches Multidisciplinaires",
  parts: [
    {
      title: "Pathologies courantes et mises à jour",
      duration: "3 heures",
      sections: [
        "Gestion des maladies métaboliques et cardiovasculaires.",
        "Diagnostic précoce des troubles neurodégénératifs.",
       
      ],
    },
    {
      title: "Approche pluridisciplinaire",
      duration: "5 heures",
      sections: [
        "Collaboration avec les spécialistes pour un suivi coordonné.",
        "Intégration des technologies numériques dans la pratique.",
      
      ],
    },
    {
      title: "Accompagnement des patients",
      duration: "4 heures",
      sections: [
        "Techniques pour renforcer l’éducation thérapeutique.",
        "Gestion des patients complexes et poly-médicalisés.",
      ],
    },
  ],
},
objectifs: [
  "Actualiser ses connaissances sur les pathologies courantes.",
  "Favoriser une collaboration interprofessionnelle.",
  "Améliorer la gestion des maladies chroniques et des comorbidités.",
 
],
certification: "Une attestation de formation sera délivrée."
  },
  {
    id: 16,
    image:
      "https://fondation-u-pariscite.org/wp-content/uploads/2024/10/Visuel-Inegalites-sociales-mere-enfant-1920-x-1260.jpg",
    title: "Sages-Femmes - Suivi Périnatal et Innovations en Santé Maternelle",
    duration: "21 heures (3 jours).",
    instructors: "Dr. Alain Ducardonnet",
    description: "Cette formation permet aux sages-femmes d’actualiser leurs connaissances et d’intégrer des pratiques innovantes dans le suivi des grossesses et des soins périnataux.",
/**on s'arrête la modification içi à 12.00 PM */
instructors2: [
  {
    name: "Dr. Claire Dubois",
    image: "https://pbs.twimg.com/profile_images/1770893330429214720/7ZkvV_3z_400x400.jpg", // Remplacer par l'URL de l'image
    role: "Gynécologue-obstétricienne, spécialisée en suivi de grossesse à risque et innovations en santé maternelle.",
    numOfTrainings: 40,
  },
  {
    name: "Julie Morel",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQGeBouD_Wx8Aw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1729554774015?e=2147483647&v=beta&t=FlU8DxNRwO7pGclSXVrTg_a9Iw4ZDBo7Eg59itoUZRY", // Remplacer par l'URL de l'image
    role: "Sage-femme clinicienne et formatrice en prise en charge des accouchements physiologiques.",
    numOfTrainings: 28,
  },
],
professionals: [
  {
    name: "Élodie Martin",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH5ELB3Puu5M3aQcNstcB4kU9_RNi8Tz7ZyA&s",
    profession: "Sage-femme hospitalière.",
    comment: "Formation essentielle pour intégrer les nouvelles pratiques en suivi périnatal.",
  },
  {
    name: "Mathieu Lefebvre",
    image: "https://aws-a.medias-ccifi.org/fileadmin/_processed_/0/3/csm_mathieu_lefebvre_be55a19143.png",
    profession: "Pédiatre spécialisé en néonatalogie.",
    comment: "Une approche multidisciplinaire qui améliore la prise en charge du nouveau-né.",
  },
  {
    name: "Sophie Garnier",
    image: "https://interiorstylehunter.com/wp-content/uploads/2018/02/Sophie-Garnier-Headshot-Colour-small.jpg",
    profession: "Psychologue périnatale.",
    comment: "Indispensable pour un meilleur accompagnement émotionnel des futures mamans.",
  },
  {
    name: "Camille Richard",
    image: "https://media.doctolib.com/image/upload/q_auto:eco,f_auto,w_1024,h_700,c_limit/zwugfhb45h4q8powt9hl.jpg",
    profession: "Consultante en allaitement.",
    comment: "Une formation qui renforce l’accompagnement des mères dans leur choix d’alimentation du nourrisson.",
  },
],
ProchaineSession : "30/05",
DPC : "87456321905",
Duree : "21 heures (3 jours).",
Financements : "DPC, FIF PL",
skills: [
  "Maîtrise du suivi médical et émotionnel des femmes enceintes.",
  "Techniques avancées pour un accouchement physiologique sécurisé.",
  "Utilisation des nouvelles technologies en santé maternelle.",
  "Accompagnement postnatal et soutien à l’allaitement.",
  "Coordination avec les autres professionnels de santé périnatale.",
],
programme: {
  id: "1",
  title: "Sages-Femmes - Suivi Périnatal et Innovations en Santé Maternelle",
  parts: [
    {
      title: "Suivi de la grossesse",
      duration: "3 heures",
      sections: [
        "Mise à jour des protocoles de suivi prénatal.",
        "Gestion des pathologies courantes de la grossesse.",
      ],
    },
    {
      title: "Innovations en périnatalité",
      duration: "5 heures",
      sections: [
        "Utilisation des applications numériques pour le suivi des patientes.",
        "Surveillance à distance et télémédecine pour les grossesses à risque.",
      ],
    },
    {
      title: "Prise en charge des situations complexes",
      duration: "4 heures",
      sections: [
        "Accompagnement des femmes en détresse psychologique.",
        "Gestion des grossesses pathologiques (diabète gestationnel, hypertension).",
     
      ],
    },
  ],
},
objectifs: [
  "Renforcer les compétences dans le suivi médical et psychologique des femmes enceintes.",
  "Intégrer les nouvelles technologies en santé maternelle.",
  "Améliorer la prise en charge des situations à risque.",
 
],
certification: "Une attestation de formation sera délivrée."
  },
  {
    id: 17,
    image:
      "https://www.lemediasocial-emploi.fr/media/cache/image_large/uploads/images/articles-large/5be98a5ea38d3_Aide-soignante%20Hopital%20vs%20Ehpad.jpeg",
    title: "Aides-Soignantes - Soins et Relation Patient",
    duration: "14 heures (2 jours).",
    instructors: "Dr. Alain Ducardonnet",
    description: "Cette formation s’adresse aux aides-soignantes pour perfectionner leurs compétences dans la pratique des soins courants et renforcer la relation de confiance avec les patients.",

    instructors2: [
      {
        name: "Isabelle Dupont",
        image: "https://pbs.twimg.com/profile_images/1052348365961383938/N21vmYSM_400x400.jpg", // Remplacer par l'URL de l'image
        role: "Infirmière cadre de santé spécialisée en soins gériatriques et relation d’aide.",
        numOfTrainings: 35,
      },
      {
        name: "Paul Moreau",
        image: "https://media.licdn.com/dms/image/C4E03AQEt1BvWQGqNYw/profile-displayphoto-shrink_200_200/0/1631204511037?e=2147483647&v=beta&t=5XuvRQkyV21oiCcKfUDTCZpbV_44Dw7p81oFW3tqPZ0", // Remplacer par l'URL de l'image
        role: "Formateur en communication thérapeutique et accompagnement des patients dépendants.",
        numOfTrainings: 42,
      },
    ],
    professionals: [
      {
        name: "Marie Lefèvre",
        image: "https://www.actuia.com/wp-content/uploads/2019/06/marie-lefevre.jpg",
        profession: "Aide-soignante en EHPAD.",
        comment: "Une formation enrichissante pour mieux comprendre le rôle essentiel de l’aide-soignante.",
      },
      {
        name: "Jean-Paul Martin",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYhiYqyssEAPQ1MwTP1ODGH-T8Y_c6aBPo4g&s",
        profession: "Psychologue spécialisé en gériatrie.",
        comment: "L’accent mis sur la relation patient-soignant est particulièrement pertinent.",
      },
      {
        name: "Sophie Lambert",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzijYvMJ4IlhBH8H973xAEBgWY9XK2VDActw&s",
        profession: "Infirmière référente en soins palliatifs.",
        comment: "Indispensable pour améliorer la qualité des soins et la communication avec les patients.",
      },
      {
        name: "Camille Robert",
        image: "https://pbs.twimg.com/profile_images/1547247307472650241/Ne0Xouiz_400x400.jpg",
        profession: "Ergothérapeute en milieu hospitalier.",
        comment: "Une formation qui apporte des outils concrets pour l’accompagnement quotidien des patients.",
      },
    ],
ProchaineSession : "30/05",
DPC : "87456321905",
Duree : "14 heures (2 jours).",
Financements : "DPC, FIF PL",
skills: [
  "Maîtrise des soins d’hygiène et de confort.",
  "Amélioration de la communication avec les patients et les familles.",
  "Gestion des situations difficiles et de la relation d’aide.",
  "Travail en équipe pluridisciplinaire et transmission d’informations.",
  "Prévention des risques et accompagnement en soins palliatifs.",
],
programme: {
  id: "1",
  title: "Aides-Soignantes - Soins et Relation Patient",
  parts: [
    {
      title: "Techniques de soins",
      duration: "4 heures",
      sections: [
        "Hygiène et confort du patient.",
        "Surveillance des paramètres vitaux et signes cliniques.",
       
      ],
    },
    {
      title: "Communication et relation patient",
      duration: "5 heures",
      sections: [
        "Techniques d’écoute active.",
        "Gestion des situations de stress ou d’agitation chez les patients.",
        
      ],
    },
    {
      title: "Prévention des risques",
      duration: "4 heures",
      sections: [
        "Prévention des infections nosocomiales.",
        "Identification des signes de détérioration de l’état de santé.",
        
      ],
    },
  ],
},
objectifs: [
  "Améliorer les compétences dans les soins de base.",
  "Renforcer la communication avec les patients et leur entourage.",
  "Identifier et prévenir les situations à risque.",
 
],
certification: "Une attestation de formation sera délivrée."
  },
  {
    id: 18,
    image:
      "https://www.gynecologie-pratique.com/sites/www.gynecologie-pratique.com/files/styles/une_journal_578_383/public/images/article_journal/capture_decran_2024-02-12_a_12.57.07.png?itok=DGesqmhu",
    title: "Gynécologie - Prise en Charge et Innovations",
    duration: "21 heures (3 jours).",
    instructors: "Dr. Alain Ducardonnet",
    description: "Formation dédiée aux gynécologues pour actualiser leurs compétences cliniques et intégrer les innovations dans le diagnostic et le suivi des pathologies féminines.",

    instructors2: [
      {
        name: "Claire Dubois",
        image: "https://image-uviadeo.journaldunet.com/image/450/1237394499/154587.jpg", // Remplacer par l'URL de l'image
        role: "Gynécologue-obstétricienne, spécialiste en chirurgie mini-invasive.",
        numOfTrainings: 40,
      },
      {
        name: "Antoine Morel",
        image: "https://media.licdn.com/dms/image/v2/C4E03AQGUG4mcjndyBg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1638391440018?e=2147483647&v=beta&t=ii7kXpr-QcI1GtbmVhafvw6JS0SyijhO0v5yZpi1JwM", // Remplacer par l'URL de l'image
        role: "Médecin spécialiste en santé féminine et innovation médicale.",
        numOfTrainings: 38,
      },
    ],
    professionals: [
      {
        name: "Sophie Garnier",
        image: "https://interiorstylehunter.com/wp-content/uploads/2018/02/Sophie-Garnier-Headshot-Colour-small.jpg",
        profession: "Sage-femme spécialisée en suivi prénatal.",
        comment: "Une formation complète pour rester à jour sur les dernières avancées en gynécologie.",
      },
      {
        name: "Paul Lefebvre",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ-0EJiSLCTD7s64dSdm_9Yeeac5aqynNbrA&s",
        profession: "Radiologue spécialisé en imagerie gynécologique.",
        comment: "Excellente mise à jour sur les nouvelles technologies de dépistage.",
      },
      {
        name: "Marion Clément",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3zZez4Jp3gK4ajr5Uqs1dwyxlilzeS1yPdQ&s",
        profession: "Médecin généraliste spécialisée en santé de la femme.",
        comment: "Une formation indispensable pour améliorer la prise en charge des patientes.",
      },
      {
        name: "Thomas Bernard",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxe6hwgyDiw_gfSFtIkuIhz3CvetoPsrpW5g&s",
        profession: "Chirurgien spécialisé en pathologies gynécologiques.",
        comment: "Un contenu de qualité, particulièrement utile pour les praticiens en chirurgie.",
      },
    ],
ProchaineSession : "30/05",
DPC : "87456321905",
Duree : "21 heures (3 jours).",
Financements : "DPC, FIF PL",
skills: [
  "Diagnostic et prise en charge des pathologies gynécologiques.",
  "Maîtrise des techniques de dépistage et de prévention.",
  "Gestion des troubles hormonaux et santé reproductive.",
  "Approches innovantes en chirurgie et traitement médical.",
  "Accompagnement des patientes et éducation thérapeutique.",
],
programme: {
  id: "1",
  title: "Gynécologie - Prise en Charge et Innovations",
  parts: [
    {
      title: "Pathologies féminines courantes",
      duration: "4 heures",
      sections: [
        "Endométriose, fibromes, kystes ovariens.",
        "Diagnostic et prise en charge des infections génitales.",
      
      ],
    },
    {
      title: "Innovations en gynécologie",
      duration: "5 heures",
      sections: [
        "Échographie avancée et techniques de dépistage.",
        "Utilisation de l’intelligence artificielle pour le diagnostic.",
      
      ],
    },
    {
      title: "Suivi personnalisé des patientes",
      duration: "4 heures",
      sections: [
        "Accompagnement des femmes en pré-ménopause et ménopause.",
        "Gestion des troubles hormonaux et de la fertilité.",
        
      ],
    },
  ],
},
objectifs: [
  "Mettre à jour les connaissances sur les pathologies gynécologiques courantes.",
  "Intégrer les nouvelles technologies dans la pratique clinique.",
  "Améliorer la prise en charge des patientes dans leur parcours de soins.",
 
],
certification: "Une attestation de formation sera délivrée."
  
  },
  {
    id: 19,
    image:
      "https://img-3.journaldesfemmes.fr/luQa1RDf4wOP0qarc3B_5OT8--o=/1500x/smart/8eaf0533736b41daa6c2edbe95a3cec4/ccmcms-jdf/37137808.jpg",
    title: "Préparateurs en Pharmacie - Gestion et Conseil au Comptoir",
    duration: "14 heures (2 jours).",
    instructors: "Dr. Alain Ducardonnet",
    description: "Cette formation s’adresse aux préparateurs en pharmacie souhaitant améliorer leurs compétences dans la gestion des stocks et le conseil client.",
    instructors2: [
      {
        name: "Élodie Martin",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUNaK5J8sHq2xvQjULiUQ5VxlS_XCHvpTTww&s", // Remplacer par l'URL de l'image
        role: "Pharmacienne officinale spécialisée en gestion des médicaments.",
        numOfTrainings: 45,
      },
      {
        name: "Julien Lefevre",
        image: "https://pbs.twimg.com/profile_images/725661549344526336/svQ1Vji8_400x400.jpg", // Remplacer par l'URL de l'image
        role: "Préparateur en pharmacie expérimenté en conseils aux patients.",
        numOfTrainings: 50,
      },
    ],
    professionals: [
      {
        name: "Sophie Lambert",
        image: "https://s3.eu-west-3.amazonaws.com/pub.be/2019/05/Unknown.jpg",
        profession: "Pharmacienne en officine.",
        comment: "Une formation très utile pour améliorer la gestion quotidienne en pharmacie.",
      },
      {
        name: "Lucas Durand",
        image: "https://media.licdn.com/dms/image/v2/C4E03AQEwjKQORNN_fQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1661872634810?e=2147483647&v=beta&t=fiT_AKrY8XndmAxAcdKl5NUhDHGY8n_4EbQ8Oopikcg",
        profession: "Préparateur en pharmacie hospitalière.",
        comment: "Un contenu clair et pertinent pour perfectionner son rôle au comptoir.",
      },
      {
        name: "Camille Bernard",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAa75yrdeehaX849AMgZaeynK5k-SdzhsA3g&s",
        profession: "Responsable logistique pharmaceutique.",
        comment: "Une approche complète pour une meilleure gestion des stocks.",
      },
      {
        name: "Thomas Petit",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSsgi4ACGy67GfzV8unOks2lD_amiBiIDrMw&s",
        profession: "Consultant en pharmacie et gestion des officines.",
        comment: "Un excellent programme pour optimiser la relation patient et la dispensation des médicaments.",
      },
    ],
ProchaineSession : "30/05",
DPC : "87456321905",
Duree : "14 heures (2 jours).",
Financements : "DPC, FIF PL",
skills: [
  "Maîtrise des règles de dispensation des médicaments.",
  "Conseil patient sur l'usage et les effets secondaires des médicaments.",
  "Gestion des stocks et approvisionnement en pharmacie.",
  "Utilisation des logiciels de gestion officinale.",
  "Respect des réglementations pharmaceutiques et éthique professionnelle.",
],
programme: {
  id: "1",
  title: "Préparateurs en Pharmacie - Gestion et Conseil au Comptoir",
  parts: [
    {
      title: "Gestion des stocks",
      duration: "4 heures",
      sections: [
        "Approvisionnement et suivi des stocks.",
        "Règles de conservation et manipulation des médicaments.",
      
      ],
    },
    {
      title: "Conseil client",
      duration: "5 heures",
      sections: [
        "Techniques pour comprendre les besoins des patients.",
        "Gestion des interactions médicamenteuses courantes.",
        
      ],
    },
    {
      title: "Réglementation et éthique",
      duration: "4 heures",
      sections: [
        "Règles légales concernant la délivrance des médicaments.",
        "Éthique professionnelle et confidentialité.",
      ],
    },
  ],
},
objectifs: [
  "Optimiser la gestion des stocks de médicaments et dispositifs médicaux.",
  "Renforcer les compétences en conseil client.",
  "Respecter les réglementations en vigueur.",
 
],
certification: "Une attestation de formation sera délivrée."
  },
  {
    id: 20,
    image:
      "https://www.polyclinique-djerba.com/uploads/0000/7/2024/08/12/dermatologie.jpg",
    title: " Dermatologie - Diagnostic et Traitements Modernes",
    duration: "21 heures (3 jours).",
    instructors: "Dr. Alain Ducardonnet",
    description: "Cette formation s’adresse aux dermatologues pour approfondir leurs compétences en diagnostic des pathologies cutanées et intégrer les traitements modernes dans leur pratique.",

    instructors2: [
      {
        name: "Dr.Jean Dupont",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGPX8RQzGcBwemtxDt9n-_4diGDedp6JySw&s", 
        role: "Dermatologue spécialisée dans les pathologies cutanées complexes et les traitements innovants.",
        numOfTrainings: 22,
      },
      {
        name: "Dr.Marie Martin",
        image: "https://alexandriasdesign.com/wp-content/uploads/elementor/thumbs/Dr-Marie-Martin-q7jg6bpu1s8or4dcrh80b3ccb35wpu10czbxm84rcm.webp", 
        role: "Dermatologue et expert en chirurgie dermatologique et traitements laser.",
        numOfTrainings: 18,
      }
    ],
    professionals: [
      {
        name: "Pierre Lefevre",
        image: "https://d2gjqh9j26unp0.cloudfront.net/profilepic/1adaea1182dbe7860834dcc881353562", 
        profession: "Infirmière en dermatologie",
        comment: "Cette formation a enrichi ma compréhension des traitements modernes en dermatologie et m'a donné de nouveaux outils pour accompagner mes patients efficacement.",
      },
      {
        name: "Claire Bernard",
        image: "https://media.licdn.com/dms/image/v2/D5603AQFlVMA6VSZLkQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1712601037437?e=2147483647&v=beta&t=NEBuRu6hzUD5mcj6r_GeYD31qFd_juwMZM3UFGSu8Qk", 
        profession: "Médecin généraliste",
        comment: "Une formation très complète qui m'a permis de mieux identifier et traiter les pathologies dermatologiques courantes.",
      },
      {
        name: "Jacques Robert",
        image: "https://media.licdn.com/dms/image/v2/C5603AQE99iFYkH3RGg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517537405205?e=2147483647&v=beta&t=lE2Z739iBYorgaKNb_IoBXNFcHKnIqX6AXjyvkOARFM", 
        profession: "Pharmacienne",
        comment: "Je recommande cette formation à tous ceux qui souhaitent approfondir leurs connaissances sur les traitements dermatologiques et les médicaments spécifiques.",
      },
      {
        name: "Nathalie Moreau",
        image: "https://www.batirama.com/images/article/70057-nathaliemoreau.jpg", 
        profession: "Chirurgien dermatologique",
        comment: "Une formation bien structurée qui met l'accent sur les innovations, un véritable plus pour la pratique quotidienne.",
      }
    ],
ProchaineSession : "30/05",
DPC : "87456321905",
Duree : "21 heures (3 jours).",
Financements : "DPC, FIF PL",
skills: [
  "Maîtrise des techniques de diagnostic dermatologique avancées",
  "Connaissance approfondie des traitements modernes (laser, biothérapies, etc.)",
  "Gestion des pathologies cutanées rares et complexes",
  "Approche multidisciplinaire dans le traitement des troubles dermatologiques",
  "Utilisation des technologies innovantes dans le diagnostic et le traitement des maladies de la peau",
],
programme: {
  id: "1",
  title: "Dermatologie - Diagnostic et Traitements Modernes",
  parts: [
    {
      title: "Pathologies cutanées courantes",
      duration: "3 heures",
      sections: [
        "Diagnostic et prise en charge de l’acné, du psoriasis, et de l’eczéma.",
        "Détection précoce des cancers de la peau (mélanome, carcinome).",

      ],
    },
    {
      title: "Innovations en dermatologie",
      duration: "5 heures",
      sections: [
        "Techniques d’imagerie avancée (dermatoscopie, IA).",
        "Traitements laser et photothérapie.",
      ],
    },
    {
      title: "Approche patient",
      duration: "7 heures",
      sections: [
        "Gestion des appréhensions liées aux pathologies visibles.",
        "Conseils pour améliorer l’observance thérapeutique.",
        
      ],
    },
  ],
},
objectifs: [
  "Actualiser les connaissances sur les pathologies dermatologiques courantes et rares.",
  "Intégrer les technologies modernes dans le diagnostic et le suivi.",
  "Appliquer les dernières avancées thérapeutiques.",
 
],
certification: "Une attestation de formation sera délivrée."
  },
  {
    id: 21,
    image: "https://mentacorps.fr/wp-content/uploads/2024/12/specializations-in-psychiatry.jpeg", // Remplacer par une vraie image
    title: "Psychiatrie - Approches Thérapeutiques Modernes",
    duration: "21 heures (3 jours).",
    instructors: "Dr. Lucien Lefevre",
    description: "Cette formation s’adresse aux psychiatres pour intégrer les nouvelles approches thérapeutiques et améliorer la prise en charge des troubles psychiatriques complexes.",
    
    instructors2: [
      {
        name: "Dr. Jean-Pierre Delacourt",
        image: "https://www.crct-inserm.fr/wp-content/uploads/2022/03/JPD-photo-Officielle-600_600.jpg", // Remplacer par une vraie image
        role: "Psychiatre spécialisé dans les thérapies cognitivo-comportementales et l’utilisation des technologies dans le traitement.",
        numOfTrainings: 25,
      },
      {
        name: "Dr. Alice Dubois",
        image: "https://media.licdn.com/dms/image/v2/C4E22AQFJPeI6Ph2a7g/feedshare-shrink_800/feedshare-shrink_800/0/1678692598028?e=2147483647&v=beta&t=cFWC9stAefq4Vi98IBnetzLdjSs9r5haL1IrLCp04VE", // Remplacer par une vraie image
        role: "Psychiatre et experte en soins intégrés pour les troubles psychiatriques complexes.",
        numOfTrainings: 19,
      }
    ],
  
    professionals: [
      {
        name: "Jack Lefevre",
        image: "https://static1.purepeople.com/articles/8/67/49/8/@/506187-kevin-spacey-lors-de-la-projection-de-580x0-3.jpg", // Remplacer par une vraie image
        profession: "Infirmier en psychiatrie",
        comment: "Cette formation m'a permis de mieux comprendre l'importance des thérapies modernes et de les appliquer dans ma pratique clinique.",
      },
      {
        name: "Sophie Bernard",
        image: "https://www.babelio.com/users/AVT_Sophie-Bernard-III_8624.jpg", // Remplacer par une vraie image
        profession: "Psychologue",
        comment: "Une formation complète qui offre une nouvelle perspective sur les soins en psychiatrie et l'utilisation des outils numériques.",
      },
      {
        name: "Bernard Robert",
        image: "https://mediaassets.cbre.com/-/media/project/cbre/shared-site/headshots/b/e/r/bernard%20rob%20752x752.jpg", // Remplacer par une vraie image
        profession: "Médecin généraliste",
        comment: "Très utile pour comprendre les nouvelles approches thérapeutiques en psychiatrie, avec des applications pratiques immédiates.",
      },
      {
        name: "Caroline Moreau",
        image: "https://media.licdn.com/dms/image/D4E03AQGZG9TfZgwxpw/profile-displayphoto-shrink_200_200/0/1713256747943?e=2147483647&v=beta&t=NG3yuD0Crkv_YECF4gCZfi4aRU7vkRslm1LaNYZ7at4", // Remplacer par une vraie image
        profession: "Infirmière en psychiatrie",
        comment: "Une excellente formation qui enrichit les pratiques quotidiennes et m'a aidée à mieux soutenir mes patients dans leurs traitements.",
      }
    ],
  
    ProchaineSession: "15/06",
    DPC: "12345678901",
    Duree: "21 heures (3 jours).",
    Financements: "DPC, FIF PL",
    
    skills: [
      "Maîtrise des thérapies modernes en psychiatrie (TCC, stimulation magnétique transcrânienne)",
      "Connaissance des troubles psychiatriques complexes (dépression, troubles bipolaires, schizophrénie)",
      "Utilisation des outils numériques dans la prise en charge des patients",
      "Amélioration de la relation thérapeutique et de la communication avec les patients",
      "Approches éthiques dans les soins psychiatriques",
    ],
  
    programme: {
      id: "1",
      title: "Psychiatrie - Approches Thérapeutiques Modernes",
      parts: [
        {
          title: "Troubles psychiatriques courants et complexes",
          duration: "7 heures",
          sections: [
            "Dépression, troubles bipolaires, et schizophrénie.",
            "Troubles liés à l’anxiété et au stress post-traumatique.",
            
          ],
        },
        {
          title: "Innovations thérapeutiques",
          duration: "7 heures",
          sections: [
            "Thérapies cognitivo-comportementales (TCC) et TCC numériques.",
            "Utilisation de la stimulation magnétique transcrânienne et autres approches modernes.",
            
          ],
        },
        {
          title: "Approche éthique et relationnelle",
          duration: "7 heures",
          sections: [
            "Renforcement de la relation médecin-patient.",
            "Sensibilisation aux enjeux éthiques dans les soins psychiatriques.",
          ],
        },
      ],
    },
    objectifs: [
      "Approfondir les connaissances sur les troubles psychiatriques courants et complexes.",
      "Intégrer les nouvelles thérapies et outils numériques dans la pratique.",
      "Renforcer la communication avec les patients et leurs proches.",
     
    ],
    certification: "Une attestation de formation sera délivrée."
  },
  {
    id: 22,
    image: "https://www.realites-pediatriques.com/wp-content/uploads/sites/3/2016/05/shutterstock_196514594.jpg", // Remplacer par une vraie image
    title: "Pédiatrie - Soins et Pathologies Spécifiques",
    duration: "21 heures (3 jours).",
    instructors: "Dr. Martine Dubois",
    description: "Formation destinée aux pédiatres pour approfondir leurs connaissances sur les pathologies spécifiques à l’enfant et intégrer des approches globales de soins.",
    
    instructors2: [
      {
        name: "Dr. Pierre Lefevre",
        image: "https://media.licdn.com/dms/image/C4E03AQGPy2R23ookDA/profile-displayphoto-shrink_200_200/0/1635964517524?e=2147483647&v=beta&t=X8j8EBf9tqoEbO3Y7zixpYbC5pJ4SGmR41Cj_T97t1Q", // Remplacer par une vraie image
        role: "Pédiatre spécialisé dans les pathologies respiratoires et les soins aux enfants chroniques.",
        numOfTrainings: 30,
      },
      {
        name: "Dr. Claire Richard",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF6DNaXVVQ1dI7FDNtNTlgqMJzf-ZxiVjv2g&s", // Remplacer par une vraie image
        role: "Pédiatre et experte en développement infantile et approche préventive.",
        numOfTrainings: 28,
      }
    ],
  
    professionals: [
      {
        name: "Anne-Marie Lefevre",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl6a47u9ZmSt71rRuFcoSiXc1wo33tFeGXZKzVnYjBMxky0bIK3rOtoJvbUMdsil1FEPc&usqp=CAU", // Remplacer par une vraie image
        profession: "Infirmière pédiatrique",
        comment: "Cette formation a approfondi ma compréhension des pathologies infantiles courantes et m'a donné des outils précieux pour mieux communiquer avec les parents.",
      },
      {
        name: "Éric Bernard",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiOw2nd8zMcMXBNXoun7kSmZKm1sN2YUKECw&s", // Remplacer par une vraie image
        profession: "Pédiatre généraliste",
        comment: "Une formation essentielle pour tous les pédiatres, particulièrement en ce qui concerne la gestion des maladies chroniques chez l'enfant.",
      },
      {
        name: "Lucie Moreau",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIZEApQfI3lSwRc9_n3ardZksxDJK5Jo5T0A&s", // Remplacer par une vraie image
        profession: "Médecin généraliste",
        comment: "Une formation complète qui m'a permis d'améliorer mes compétences en soins pédiatriques, notamment dans la prévention et le suivi.",
      },
      {
        name: "Jean-Pierre Robert",
        image: "https://mastercooks.be/sites/default/files/styles/310x310_square/public/koks/jean-pierre-robert-mastercook_0.jpg?itok=RYc0z6O_", // Remplacer par une vraie image
        profession: "Psychologue pédiatrique",
        comment: "Très utile pour mieux comprendre la relation avec les parents et comment gérer les urgences pédiatriques avec calme et clarté.",
      }
    ],
  
    ProchaineSession: "10/07",
    DPC: "23456789012",
    Duree: "21 heures (3 jours).",
    Financements: "DPC, FIF PL",
    
    skills: [
      "Maîtrise des pathologies courantes chez les enfants (infections, troubles de croissance, maladies chroniques)",
      "Compétence en suivi des enfants avec pathologies chroniques",
      "Capacité à intégrer une approche préventive dans la pratique pédiatrique",
      "Techniques de communication avec les parents et gestion des situations sensibles",
      "Connaissance des programmes de vaccination et de dépistage",
    ],
  
    programme: {
      id: "1",
      title: "Pédiatrie - Soins et Pathologies Spécifiques",
      parts: [
        {
          title: "Pathologies courantes de l’enfant",
          duration: "7 heures",
          sections: [
            "Infections respiratoires, gastro-entérites, et troubles de croissance.",
            "Suivi des enfants avec maladies chroniques.",
            "Gestion des pathologies aiguës et chroniques chez l'enfant.",
          ],
        },
        {
          title: "Approches préventives",
          duration: "7 heures",
          sections: [
            "Vaccination et dépistage des troubles précoces.",
            "Éducation à la santé : stratégies pour impliquer les parents.",
            "Dépistage et prévention des pathologies infantiles courantes.",
          ],
        },
        {
          title: "Communication avec les parents",
          duration: "7 heures",
          sections: [
            "Techniques pour expliquer les diagnostics et traitements.",
            "Gestion des situations sensibles (hospitalisation, traitement à long terme).",
            "Approche lors des urgences pédiatriques.",
          ],
        },
      ],
    },

    objectifs: [
      "Identifier et traiter les pathologies courantes chez les enfants.",
      "Optimiser la communication avec les parents.",
      "Intégrer une approche globale et préventive dans la pratique pédiatrique.",
     
    ],
    certification: "Une attestation de formation sera délivrée."
  },
  {
    id: 23,
    image: "https://www.chuv.ch/fileadmin/_processed_/0/f/csm_Meningite_dcf45f0f44.jpeg",
    title: "Neurologie - Diagnostic et Prise en Charge",
    duration: "21H",
    instructors: "Dr. François Dupont",
    description: "Cette formation permet aux neurologues de renforcer leurs compétences dans le diagnostic des pathologies neurologiques complexes et d’intégrer les innovations thérapeutiques.",
  
    instructors2: [
      {
        name: "Dr. Jacques Leroy",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2jacoLhFUl1bqfOtln-zfNhy9mF-sgbFsFQ&s", 
        role: "Neurologue, spécialiste en maladies neurodégénératives.",
        numOfTrainings: 15,
      },
      {
        name: "Dr. Claire Martin",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmDKsikJX_tn8Jk3L5feXTI4ztBaYwdIo7hw&s", 
        role: "Neurologue et expert en réhabilitation neurologique.",
        numOfTrainings: 20,
      }
    ],
  
    professionals: [
      {
        name: "Pierre Lemoine",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_N4pykE7O2AEJvHIchzRflHjTAlMjz_Dv-w&s", 
        profession: "Infirmier spécialisé en neurologie",
        comment: "La formation m’a permis de mieux comprendre les approches thérapeutiques récentes et d’améliorer la prise en charge des patients neurologiques.",
      },
      {
        name: "Sophie Lemoine",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUlwcF1pk2HmNXop0XPahJpaOErgDGpKwCOA&s", 
        profession: "Médecin généraliste",
        comment: "Cette formation a enrichi mes connaissances sur la gestion des pathologies neurologiques et m'a aidée à mieux orienter mes patients vers des traitements spécialisés.",
      },
      {
        name: "Luc Moreau",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_9LNlGsrwbjK20rHZCn7mW7Arw1Ww9vIdCA&s", 
        profession: "Kinésithérapeute spécialisé en rééducation neurologique",
        comment: "Grâce à cette formation, j’ai appris à mieux coordonner les soins rééducatifs avec les approches diagnostiques et thérapeutiques avancées.",
      }
    ],
    
    ProchaineSession: "15/06",
    DPC: "12345678910",
    Duree: "21 heures",
    Financements: "DPC, FIF PL",
    
    skills: [
      "Diagnostic des pathologies neurologiques courantes et complexes",
      "Maîtrise des techniques d'imagerie cérébrale avancée",
      "Connaissance des innovations thérapeutiques en neurologie",
      "Approche pluridisciplinaire dans la prise en charge des patients neurologiques",
      "Réhabilitation et gestion des troubles neurologiques complexes",
    ],
  
    programme: {
      id: "1",
      title: "Neurologie - Diagnostic et Prise en Charge",
      parts: [
        {
          title: "Pathologies neurologiques courantes",
          duration: "7 heures",
          sections: [
            "Maladie d'Alzheimer, sclérose en plaques, et AVC.",
            "Troubles du mouvement : Parkinson et dystonies.",
            "Prise en charge des troubles cognitifs et comportementaux.",
          ],
        },
        {
          title: "Innovations diagnostiques et thérapeutiques",
          duration: "7 heures",
          sections: [
            "Imagerie cérébrale avancée (IRM fonctionnelle, EEG).",
            "Nouveaux traitements médicamenteux en neurologie.",
            "Réhabilitation neurologique et approches de réadaptation.",
          ],
        },
        {
          title: "Coordination des soins",
          duration: "7 heures",
          sections: [
            "Travail en équipe pluridisciplinaire pour une prise en charge globale.",
            "Gestion des patients avec parcours complexes : de la consultation à l'hospitalisation.",
            "Suivi à long terme des patients neurologiques.",
          ],
        },
      ],
    },
    objectifs: [
      "Mettre à jour les connaissances sur les pathologies neurologiques.",
      "Intégrer les avancées technologiques et thérapeutiques.",
      "Améliorer le parcours de soins des patients neurologiques.",
     
    ],
    certification: "Une attestation de formation sera délivrée."
  
  },
  /** j'arrête la modofiacation à ce  niveau le 11.58 */
  {
    id: 24,
    image: "https://static.wixstatic.com/media/4f93e0_9b3e2f0c2b3a4c93b4b2dd2770d7a67b~mv2.png/v1/fill/w_500,h_500,al_c/Sans%20titre-11.png",
    title: "Allaitement Maternel - Accompagnement et Soutien",
    duration: "14 heures (2 jours).",
    instructors: "Dr. Sophie Durand",
    description: "Cette formation vise à donner aux professionnels de santé les compétences nécessaires pour accompagner et soutenir les mères dans l’allaitement maternel.",
  
    instructors2: [
      {
        name: "Dr. Claire Petit",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVKG3HmhKvwA4D2qR0UqZkDDzvGnIK7zS_vg&s", 
        role: "Pédiatre spécialisée en allaitement et développement infantile.",
        numOfTrainings: 30,
      },
      {
        name: "Dr. Marc Leblanc",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq5I-cwrVhAViEHMK_hjTdC7VZHNzYbSjsAA&s", 
        role: "Gynécologue et expert en soutien à l’allaitement maternel.",
        numOfTrainings: 25,
      }
    ],
  
    professionals: [
      {
        name: "Isabelle Dupuis",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSREDKYWGzff6l7yQSLmPvefjUd8K_ge-A05w&s", 
        profession: "Sage-femme",
        comment: "Cette formation m'a permis d’acquérir des outils pratiques pour soutenir les mères dans leurs choix d’allaitement, et de mieux comprendre les enjeux de l’allaitement maternel.",
      },
      {
        name: "Julie Leclerc",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9z6AMu8PIfVOZm_Oc7tJQdEe8EFbIIWXjIw&s", 
        profession: "Infirmière en pédiatrie",
        comment: "Une formation très enrichissante qui m’a aidée à mieux accompagner les jeunes mères dans les premières étapes de l’allaitement.",
      },
      {
        name: "Lucie Martin",
        image: "https://media.licdn.com/dms/image/v2/C4E03AQH37fvqIa2j7w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1655107552525?e=2147483647&v=beta&t=6PpShKJmB81daELcfPZNP1W-CBqKQCK2JKqqtx18QyY", 
        profession: "Consultante en lactation",
        comment: "Cette formation est essentielle pour tout professionnel qui souhaite offrir un soutien de qualité aux mères allaitantes.",
      }
    ],
    
    ProchaineSession: "20/06",
    DPC: "20234567890",
    Duree: "14 heures (2 jours).",
    Financements: "DPC, FIF PL",
    
    skills: [
      "Connaissance approfondie de la physiologie de la lactation",
      "Capacité à résoudre les difficultés courantes d'allaitement",
      "Compétences en accompagnement et conseils pratiques pour les mères",
      "Approche bienveillante et respectueuse du choix des mères",
      "Soutien dans des situations spécifiques (allaitement mixte, reprise du travail)",
    ],
  
    programme: {
      id: "1",
      title: "Allaitement Maternel - Accompagnement et Soutien",
      parts: [
        {
          title: "Bases de l’allaitement maternel",
          duration: "4 heures",
          sections: [
            "Physiologie de la lactation.",
            "Bienfaits pour la santé maternelle et infantile.",
            "Comprendre l’importance de l’allaitement exclusif.",
          ],
        },
        {
          title: "Accompagnement des mères",
          duration: "5 heures",
          sections: [
            "Conseils pour l’installation et la mise au sein.",
            "Gestion des douleurs et des difficultés (crevasses, engorgements).",
            "Solutions pratiques pour favoriser une bonne prise du sein.",
          ],
        },
        {
          title: "Soutien et sensibilisation",
          duration: "5 heures",
          sections: [
            "Techniques pour encourager l’allaitement exclusif.",
            "Gestion des situations spécifiques (allaitement mixte, reprise du travail).",
            "Sensibilisation des familles et des professionnels de santé.",
          ],
        },
      ],
    },
    objectifs: [
      "Comprendre les bienfaits de l’allaitement maternel pour la mère et l’enfant.",
      "Identifier et résoudre les difficultés courantes d’allaitement.",
      "Accompagner les mères dans leur choix et promouvoir une approche bienveillante.",
     
    ],
    certification: "Une attestation de formation sera délivrée."
  },
  {
    id: 25,
    image: "https://www.one.be/fileadmin/user_upload/siteone/PARENTS/Sante/reeducation-perinee.png",
    title: "Rééducation du Périnée",
    duration: "21 heures (3 jours).",
    instructors: "Dr. Emilie Dubois",
    description: "Cette formation permet aux professionnels de santé d’acquérir les compétences nécessaires pour évaluer et rééduquer le périnée chez les femmes en post-partum ou présentant des troubles spécifiques. Elle aborde la physiopathologie du périnée, les techniques de rééducation, et les méthodes de prévention des complications liées à la faiblesse du plancher pelvien.",
  
    instructors2: [
      {
        name: "Dr. Isabelle Lefevre",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREnubNYB4wWQy85prCQyOX9ic1nqkbbM0FFg&s", 
        role: "Gynécologue spécialisée en rééducation du périnée.",
        numOfTrainings: 40,
      },
      {
        name: "Dr. Laure Garnier",
        image: "https://people.epfl.ch/private/common/photos/links/355476.jpg?ts=1736964401", 
        role: "Kinésithérapeute spécialisée en périnée.",
        numOfTrainings: 35,
      }
    ],
  
    professionals: [
      {
        name: "Anne-Marie Dupont",
        image: "https://media.licdn.com/dms/image/v2/D4E03AQED8wzIelU5FA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1689882637669?e=2147483647&v=beta&t=c1MRo9-ioxpYIS1hjHySZQph-bcF-LXHfrdHqrhTQTs", 
        profession: "Kinésithérapeute",
        comment: "Une formation très complète et pratique qui m'a permis d’améliorer la qualité de mes soins post-partum. Les techniques de rééducation sont très efficaces.",
      },
      {
        name: "Clémentine Lemoine",
        image: "https://media.licdn.com/dms/image/v2/C5603AQEglZMpuspj_w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1571053267799?e=2147483647&v=beta&t=lGtLcsDq8EiwOmrY7ONCsuxfJKwYeX3bErSOcIZ53JA", 
        profession: "Sage-femme",
        comment: "La formation m'a fourni les outils nécessaires pour accompagner les femmes dans la rééducation de leur périnée de manière globale et respectueuse.",
      },
      {
        name: "Lucie Favier",
        image: "https://media.licdn.com/dms/image/v2/C5603AQHWpaPeO2J0fA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1604852453373?e=2147483647&v=beta&t=-sRrJ6oQfI-yLD8gHOdOFahCTxbMaRdFiwwpuWrFLas", 
        profession: "Médecin généraliste",
        comment: "Une formation enrichissante qui m’a aidée à comprendre les mécanismes du plancher pelvien et à mieux orienter mes patientes.",
      }
    ],
    
    ProchaineSession: "10/07",
    DPC: "20234567891",
    Duree: "21 heures (3 jours).",
    Financements: "DPC, FIF PL",
    
    skills: [
      "Connaissance de l'anatomie et physiologie du périnée",
      "Compétences pratiques en rééducation périnéale",
      "Maîtrise des techniques manuelles et biofeedback",
      "Gestion des douleurs pelviennes chroniques",
      "Prévention des complications liées à la faiblesse du plancher pelvien",
    ],
  
    programme: {
      id: "1",
      title: "Rééducation du Périnée",
      parts: [
        {
          title: "Bases théoriques",
          duration: "7 heures",
          sections: [
            "Anatomie et physiologie du plancher pelvien.",
            "Facteurs de risque et troubles associés (incontinence, prolapsus).",
            "Impact des accouchements sur le périnée et rôle dans la rééducation.",
          ],
        },
        {
          title: "Techniques de rééducation",
          duration: "8 heures",
          sections: [
            "Méthodes manuelles et biofeedback.",
            "Exercices spécifiques et renforcement musculaire.",
            "Utilisation des techniques modernes pour renforcer le plancher pelvien.",
          ],
        },
        {
          title: "Accompagnement des patientes",
          duration: "6 heures",
          sections: [
            "Éducation et sensibilisation des patientes.",
            "Prise en charge des douleurs pelviennes chroniques.",
            "Conseils sur le suivi post-partum et prévention des troubles futurs.",
          ],
        },
      ],
    },
    objectifs: [
      "Comprendre la physiopathologie du périnée.",
      "Acquérir les techniques spécifiques de rééducation périnéale.",
      "Prévenir les complications liées à la faiblesse du plancher pelvien.",
     
    ],
    certification: "Une attestation de formation sera délivrée."
  },
  {
    id: 26,
    image: "https://efelya.com/cdn/shop/articles/Infertilite_Causes_et_examens_pour_la_verifier.jpg?v=1669635490",
    title: "Infertilité - Diagnostic et Parcours de Soins",
    duration: "14 heures (2 jours).",
    instructors: "Dr. Marie Lefevre",
    description: "Cette formation s’adresse aux professionnels de santé pour mieux comprendre et accompagner les couples dans le diagnostic et la prise en charge de l’infertilité. Elle couvre les causes de l'infertilité, les étapes clés du diagnostic, et l’accompagnement psychologique des couples.",
  
    instructors2: [
      {
        name: "Dr. Jean-Pierre Martin",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQFX_Nk-5Ychkw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714739986627?e=2147483647&v=beta&t=DmYplqLCKkWVQkjGf_ICHpY4YcimhqgXN7e5M-I_l2Q", 
        role: "Gynécologue spécialisé en infertilité.",
        numOfTrainings: 50,
      },
      {
        name: "Dr. Claire Dupont",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqzqay6wRZryp29GNrB58bU5RwaMjwkFtQIA&s", 
        role: "Endocrinologue spécialisée en infertilité.",
        numOfTrainings: 45,
      }
    ],
  
    professionals: [
      {
        name: "Sophie Durand",
        image: "https://www.datocms-assets.com/46688/1720622735-sophie-durand.jpg?auto=format", 
        profession: "Sage-femme",
        comment: "Cette formation m’a permis d’approfondir mes connaissances sur l’infertilité et d’accompagner les couples dans leur parcours avec plus de sérénité.",
      },
      {
        name: "Laurent Dubois",
        image: "https://france3-regions.francetvinfo.fr/image/QXN4iL9FltMwbRbHbrdRm_gkyf8/1200x900/regions/2020/06/08/5ede589b5ccff_laurent-dubois-640.jpg", 
        profession: "Médecin généraliste",
        comment: "Une formation essentielle pour mieux comprendre les mécanismes de l’infertilité et aider les couples à se préparer à un parcours de soins adapté.",
      },
      {
        name: "Isabelle Lefevre",
        image: "https://media.deloitte.com/is/image/deloitte/au-isabelle-lefevre-1x1?$Responsive$&fmt=webp&fit=stretch,1&wid=578&dpr=off", 
        profession: "Psychologue",
        comment: "La partie sur l’accompagnement psychologique est particulièrement utile. Elle m’a donné des outils pour mieux soutenir les couples durant ce processus difficile.",
      }
    ],
    
    ProchaineSession: "20/08",
    DPC: "20234567892",
    Duree: "14 heures (2 jours).",
    Financements: "DPC, FIF PL",
    
    skills: [
      "Connaissance des causes de l'infertilité",
      "Compétence dans la gestion des examens diagnostiques",
      "Approche psychologique et soutien aux couples",
      "Maîtrise des options thérapeutiques (AMP, FIV)",
      "Suivi du parcours de soins des couples infertiles",
    ],
  
    programme: {
      id: "1",
      title: "Infertilité - Diagnostic et Parcours de Soins",
      parts: [
        {
          title: "Causes de l’infertilité",
          duration: "4 heures",
          sections: [
            "Facteurs féminins et masculins",
            "Troubles hormonaux et pathologies associées",
            "Impact de l'âge et autres facteurs environnementaux",
          ],
        },
        {
          title: "Parcours de diagnostic",
          duration: "5 heures",
          sections: [
            "Examens biologiques et imagerie",
            "Détection des troubles ovulatoires et spermatiques",
            "Analyse des résultats et prise de décision",
          ],
        },
        {
          title: "Accompagnement psychologique",
          duration: "5 heures",
          sections: [
            "Gestion des émotions et soutien des couples",
            "Sensibilisation aux options thérapeutiques (AMP, FIV)",
            "Communication avec les patients et approche holistique du parcours de soins",
          ],
        },
      ],
    },
    objectifs: [
      "Comprendre les causes et mécanismes de l’infertilité.",
      "Identifier les étapes clés du diagnostic.",
      "Accompagner les couples dans leur parcours de soins.",
     
    ],
    certification: "Une attestation de formation sera délivrée."
  },
  {
    id: 27,
    image: "https://images.ctfassets.net/g4icgs65at4c/g79dwkqBfO8S6g9RR3Y9Q/03d50cbda204e531da48fe57602e2fbf/A99.jpeg?fm=webp&q=70",
    title: "Suivi du Nouveau-né",
    duration: "14 heures (2 jours).",
    instructors: "Dr. Alice Dupont",
    description: "Cette formation offre aux professionnels de santé les compétences nécessaires pour assurer un suivi optimal des nouveau-nés et prévenir les complications précoces. Elle aborde les bases du suivi pédiatrique, les soins du quotidien et la communication avec les parents.",
  
    instructors2: [
      {
        name: "Dr. Claire Lefevre",
        image: "https://i1.rgstatic.net/ii/profile.image/862217335492610-1582580040406_Q512/Claire-Lefeuvre.jpg",
        role: "Pédiatre spécialisée en néonatalogie",
        numOfTrainings: 60,
      },
      {
        name: "Dr. Paul Martin",
        image: "https://cdn-images.kyruus.com/providermatch/johnshopkins/photos/orig/paul-martin-1801871181.jpg",
        role: "Médecin généraliste",
        numOfTrainings: 55,
      }
    ],
  
    professionals: [
      {
        name: "Juliette Caron",
        image: "https://media.licdn.com/dms/image/v2/C4D03AQGcHb925iqWVg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1631557690983?e=2147483647&v=beta&t=Clfa2lGuGDD1ox59S5N8_t11hPDEuUz1fN-tSjf3cQM", 
        profession: "Sage-femme",
        comment: "Cette formation a été très utile pour affiner mes compétences dans le suivi du nouveau-né, surtout en termes de communication avec les parents.",
      },
      {
        name: "Emilie Lefevre",
        image: "https://image-uniservice.linternaute.com/image/450/4/1079909288/8326912.jpg", 
        profession: "Infirmière pédiatrique",
        comment: "J’ai acquis de nombreuses connaissances pratiques sur les soins au quotidien et les signes d’alerte à ne pas manquer.",
      },
      {
        name: "Mathieu Bernard",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQHn_3KmGmK8YA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724773770953?e=2147483647&v=beta&t=RTf4E-pLwAOQtJ32W_mtia0H5pwKtjoZM-G5K4fwysc", 
        profession: "Médecin généraliste",
        comment: "Une formation essentielle pour tous ceux qui interviennent dans le suivi des nouveau-nés, avec un contenu très pratique et adapté.",
      }
    ],
    
    ProchaineSession: "15/09",
    DPC: "20234567893",
    Duree: "14 heures (2 jours).",
    Financements: "DPC, FIF PL",
    
    skills: [
      "Suivi du développement et de la croissance du nouveau-né",
      "Connaissances sur la vaccination et le dépistage précoce",
      "Conseils pratiques sur l'alimentation et l'hygiène du nouveau-né",
      "Gestion des urgences et des situations d'anxiété chez les parents",
      "Communication efficace avec les familles",
    ],
  
    programme: {
      id: "2",
      title: "Suivi du Nouveau-né",
      parts: [
        {
          title: "Bases du suivi pédiatrique",
          duration: "5 heures",
          sections: [
            "Surveillance de la croissance et du développement",
            "Vaccination et dépistage précoce",
            "Identification des pathologies courantes chez le nouveau-né",
          ],
        },
        {
          title: "Soins au quotidien",
          duration: "5 heures",
          sections: [
            "Alimentation et sommeil du nouveau-né",
            "Conseils pour l’hygiène et la prévention des infections",
            "Soins de la peau et des yeux du nouveau-né",
          ],
        },
        {
          title: "Communication avec les parents",
          duration: "4 heures",
          sections: [
            "Techniques pour rassurer et informer les familles",
            "Gestion des situations d’urgence",
            "Approche bienveillante dans la relation avec les parents",
          ],
        },
      ],
    },
    objectifs: [
      "Acquérir les bases du suivi pédiatrique.",
      "Identifier les signes d’alerte chez le nouveau-né.",
      "Conseiller les parents dans les soins du quotidien.",
     
    ],
    certification: "Une attestation de formation sera délivrée."
  },
  {
    id: 28,
    image: "https://www.alcimed.com/wp-content/uploads/2022/11/Vaccination-en-pharmacie-scaled.jpg",
    title: "Vaccination par le Pharmacien",
    duration: "14 heures (2 jours).",
    instructors: "Dr. Louis Lefevre",
    description: "Formation dédiée aux pharmaciens pour maîtriser la pratique de la vaccination dans le respect des protocoles et réglementations en vigueur. Elle permet d’acquérir les compétences nécessaires pour administrer les vaccins, respecter les règles d’hygiène et sensibiliser les patients.",
  
    instructors2: [
      {
        name: "Dr. Stéphanie Renaud",
        image: "https://cdn.we-evolve.world/avatars/14f6a012b1406f390687ce214efc6e191579532803.jpg",
        role: "Pharmacienne vaccinateur",
        numOfTrainings: 45,
      },
      {
        name: "Dr. Claude Girard",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu-5ffBV6K-vYyuHe1TzVKBdYh1sEkP0pk7A&s",
        role: "Médecin spécialiste en vaccins",
        numOfTrainings: 40,
      }
    ],
  
    professionals: [
      {
        name: "Amandine Bernard",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdRI2g28rezySvYIzmCGEGJEwAiSvQ33F6JQ&s", 
        profession: "Pharmacienne",
        comment: "Cette formation m’a permis de mieux comprendre les protocoles de vaccination et d’être plus sereine lors de l’administration des vaccins.",
      },
      {
        name: "Jean-Marie Lefevre",
        image: "https://i.f1g.fr/media/figaro/orig/2016/02/22/XVMf0fbfc6e-d725-11e5-9a56-4bd5632db99f.jpg", 
        profession: "Pharmacien",
        comment: "Très utile pour clarifier les règles de sécurité et d’hygiène, ainsi que pour renforcer la confiance des patients en matière de vaccination.",
      },
      {
        name: "Sophie Lemoine",
        image: "https://www.parismatch.com/lmnr/var/pm/public/media/image/2022/03/03/18/Critiquee-par-Omar-Sy-Anne-Elisabeth-Lemoine-repond.jpg?VersionId=xx7VAlK45ZrS9MgYt7ARHJ5bCNPB_ERZ", 
        profession: "Pharmacienne",
        comment: "Formation complète qui a renforcé mes compétences et ma capacité à sensibiliser les patients à l’importance des vaccins.",
      }
    ],
    
    ProchaineSession: "10/10",
    DPC: "20235678901",
    Duree: "14 heures (2 jours).",
    Financements: "DPC, FIF PL",
    
    skills: [
      "Maîtrise des protocoles de vaccination",
      "Gestion des effets indésirables post-vaccination",
      "Sensibilisation des patients à la vaccination",
      "Respect des règles d’hygiène et de sécurité",
      "Communication avec les patients pour lutter contre les idées reçues",
    ],
  
    programme: {
      id: "2",
      title: "Vaccination par le Pharmacien",
      parts: [
        {
          title: "Cadre légal et réglementaire",
          duration: "5 heures",
          sections: [
            "Obligations du pharmacien vaccinateur",
            "Vaccins autorisés et protocoles associés",
            "Réglementations et normes de sécurité",
          ],
        },
        {
          title: "Techniques de vaccination",
          duration: "5 heures",
          sections: [
            "Préparation et administration des vaccins",
            "Gestion des effets indésirables",
            "Utilisation des équipements de protection",
          ],
        },
        {
          title: "Relation patient",
          duration: "4 heures",
          sections: [
            "Sensibilisation à l’importance de la vaccination",
            "Lutte contre les idées reçues",
            "Techniques de communication pour encourager la vaccination",
          ],
        },
      ],
    },
    objectifs: [
      "Acquérir les compétences nécessaires pour administrer les vaccins.",
      "Respecter les règles d’hygiène et de sécurité.",
      "Sensibiliser les patients à l’importance de la vaccination.",
     
    ],
    certification: "Une attestation de formation sera délivrée."
  },
  {
    id: 29,
    image: "https://www.pourquoidocteur.fr/media/article/istock-667832506-1528106511.jpg",
    title: "Hypnose - Perfectionnement pour les Soignants",
    duration: "14 heures (2 jours).",
    instructors: "Dr. Louis Lefevre",
    description: "Cette formation s’adresse aux professionnels de santé ayant déjà des notions d’hypnose et souhaitant perfectionner leurs techniques pour une meilleure utilisation dans les soins.",
  
    instructors2: [
      {
        name: "Dr. Marie Dubois",
        image: "https://media.licdn.com/dms/image/v2/C4D03AQGCBg9_iFMJUA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1578391967862?e=2147483647&v=beta&t=mDNwNFgD2OKBPCW35WPRslySZnzK12WobIEFDyyBr1g",
        role: "Médecine générale et hypnothérapie",
        numOfTrainings: 45,
      },
      {
        name: "Jean-Pierre Lefevre",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTlO6x5H8yhI-CS5X6w1VOWCMSW_8IszzprA&s",
        role: "Psychologie clinique et hypnose ericksonienne",
        numOfTrainings: 40,
      }
    ],
  
    professionals: [
      {
        name: "Marie Dubois",
        image: "https://www.programme-tv.net/imgre/fit/~2~providerPerson~021d9f87606bcd25.jpeg/300x300/quality/80/marie-dubois.jpeg", 
        profession: "Médecin Généraliste",
        comment: "Cette formation en hypnose m'a permis d'améliorer ma prise en charge des patients, en réduisant leur anxiété et en facilitant leur traitement.",
      },
      {
        name: " Pierre Lefevre",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNhRI9MRNRUntHKN1T0nGSqh0mZiLuj64HRw&s", 
        profession: "Psychologue Clinicien",
        comment: "Une formation enrichissante qui m'a permis d'intégrer l'hypnose dans mon approche thérapeutique, apportant des résultats concrets auprès des patients.",
      },
      {
        name: "Lucie Martin",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR2UX2EavkAuJ8Ut22dO9At4AMOFD-uXw-cg&s", 
        profession: "Infirmière",
        comment: "La formation m'a permis d'appliquer des techniques d'hypnose pour calmer les patients et améliorer leur expérience durant les soins.",
      }
    ],
    
    ProchaineSession: "10/10",
    DPC: "20235678901",
    Duree: "14 heures (2 jours).",
    Financements: "DPC, FIF PL",
    
    skills: [
      "Maîtrise des protocoles de vaccination",
      "Gestion des effets indésirables post-vaccination",
      "Sensibilisation des patients à la vaccination",
      "Respect des règles d’hygiène et de sécurité",
      "Communication avec les patients pour lutter contre les idées reçues",
    ],
  
    programme: {
      id: "2",
      title: "Hypnose - Perfectionnement pour les Soignants",
      parts: [
        {
          title: "Techniques avancées en hypnose",
          duration: "5 heures",
          sections: [
            "Raffinement des inductions et suggestions.",
            "Gestion des états hypnotiques prolongés.",
         
          ],
        },
        {
          title: "Applications spécifiques",
          duration: "5 heures",
          sections: [
            "Hypnose pour le traitement de la douleur aiguë et chronique.",
            "Gestion de l’anxiété et des phobies chez les patients.",
           
          ],
        },
        {
          title: "Approche éthique et communication",
          duration: "4 heures",
          sections: [
            "Sensibilisation à l'éthique dans la pratique de l’hypnose.",
            "Renforcement de la communication thérapeutique.",
        
          ],
        },
      ],
    },
    objectifs: [
      "Approfondir les techniques avancées d'hypnose en soins.",
      "Adapter l’hypnose à divers contextes cliniques (douleur, anxiété, pathologies chroniques).",
      "Renforcer la relation soignant-patient grâce à des approches personnalisées.",
     
    ],
    certification: "Une attestation de formation sera délivrée."
  }
  
  
  
  
  
  
  
];

export const btpTrainings = [
  /*{
    id: 0,
    image:
      "https://tmr.tn/wp-content/uploads/2019/07/TRACTOPELLE-MANOUBA-07-01.jpg",
    title: "CACES R482 catégorie A, B1 et F",
    duration: "24H",
    instructors: "Jean-François Renucci",
  },
  {
    id: 1,
    image:
      "https://www.arbor-ag.ch/upload/shop/productimages/1024/Optimum%2081.jfif",
    title: "CACES R486 catégorie A et B",
    duration: "20H",
    instructors: "Jean-François Renucci",
  },
  {
    id: 2,
    image:
      "https://metafor-france.fr/wp-content/uploads/2024/09/Affiche-site-internet-16.png",
    title: "CACES R489 catégorie 1A, 3 et 5",
    duration: "24H",
    instructors: "Jean-François Renucci",
  },
  {
    id: 3,
    image: "https://www.kmc.tn/wp-content/uploads/2020/11/img2.jpg",
    title: "Echafaudage roulant",
    duration: "12H",
    instructors: "Jean-François Renucci",
  },
  {
    id: 4,
    image:
      "https://static.wixstatic.com/media/c0fc22_48c4bb2f0775498faaffff454ef15067~mv2.jpg/v1/fill/w_568,h_852,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c0fc22_48c4bb2f0775498faaffff454ef15067~mv2.jpg",
    title: "Montage démontage échafaudage fixe R408",
    duration: "18H",
    instructors: "Jean-François Renucci",
  },
  {
    id: 5,
    image:
      "https://btselectrotechniqueeiffelbdx.weebly.com/uploads/1/0/7/7/10775724/img-20170929-092303_orig.jpg",
    title: "Habilitations électriques B1V, B2V, BR, BC, BE, H1V, B2V, HE, HC",
    duration: "14H",
    instructors: "Jean-François Renucci",
  },
  {
    id: 6,
    image:
      "https://www.formadok.fr/wp-content/uploads/2024/02/developpement-durable-en-entreprise-1-1.png",
    title: "Mise en oeuvre du développement durable dans les TPE PME",
    duration: "30H",
    instructors: "Jean-François Renucci",
  },
  {
    id: 7,
    image:
      "https://thumbs.dreamstime.com/b/hommes-au-travail-sur-la-colonne-de-l-%C3%A9lectricit%C3%A9-en-uniforme-%C3%A9lectrique-170822598.jpg",
    title: "Travail en hauteur",
    duration: "8H",
    instructors: "Jean-François Renucci",
  },*/
  {
    id: 0,
    image: "https://sftl.fr/wp-content/uploads/2021/12/cat-B1-pelle-jcb-300x300.jpg",
    duration: "35 heures (5 jours).",
    title: "CACES R482 (Catégories A, B1 et F)",
    description: `
Cette formation prépare les participants à conduire en toute sécurité les engins de chantier
des catégories A (petits engins de chantier mobiles), B1 (engins d'extraction à déplacement
séquentiel), et F (chariots de manutention tout-terrain). Elle permet également de maîtriser
les réglementations et bonnes pratiques associées.
    `,
    ProchaineSession: "25/02",
    DPC: "93292325124",
    Duree: "35 heures (5 jours).",
    Financements: "DPC, FIF PL",
    
    objectives: [
      "Comprendre les règles de sécurité applicables à l’utilisation des engins de chantier.",
      "Acquérir les compétences nécessaires pour conduire des engins de manière sûre et efficace.",
      "Savoir effectuer les vérifications et l’entretien quotidien des engins.",
      "Obtenir la certification CACES R482 pour les catégories A, B1 et F."
    ],
    
    publicCible: ["Conducteurs d’engins débutants ou expérimentés souhaitant obtenir ou renouveler leur certification.",
      "Professionnels du BTP devant utiliser des engins de chantier dans le cadre de leur activité."
    ],
    prerequis: ["Avoir 18 ans minimum.",
      "Aptitude médicale à la conduite d'engins de chantier (certificat médical requis)."
    ],
  
    skills: [
      "Maîtrise de la conduite d’engins de chantier – Savoir manœuvrer en toute sécurité les engins de catégories A (mini-engins), B1 (pelles hydrauliques) et F (chariots de chantier).",
      "Application des règles de sécurité – Connaître et respecter les normes de sécurité liées à l’utilisation des engins, la signalisation et la prévention des risques.",
      "Entretien et vérifications des engins – Effectuer les contrôles quotidiens, l’entretien courant et signaler les anomalies.",
      "Gestion de l’environnement de travail – Analyser les conditions de travail, identifier les dangers et adapter sa conduite aux différents types de terrains et charges.",
      "Lecture et interprétation des documents techniques – Comprendre les plans, schémas et consignes pour une utilisation efficace et sécurisée des engins."
    ],
  
    programme: {
      id: "1",
      title: "Programme de Formation",
      parts: [
        {
          title: "Module 1 : Règlementation et responsabilités",
          duration: "7 heures",
          sections: [
            "Principes fondamentaux de la sécurité sur les chantiers.",
            "Responsabilités civiles et pénales du conducteur.",
            "Réglementation liée au transport et à l’utilisation des engins."
          ],
        },
        {
          title: "Module 2 : Technologie des engins",
          duration: "7 heures",
          sections: [
            "Présentation des engins de chantier : spécificités des catégories A, B1 et F.",
            "Fonctionnement des différents organes des machines.",
            "Points de vérification avant utilisation."
          ],
        },
        {
          title: "Module 3 :Conduite et manœuvres",
          duration: "7 heures",
          sections: [
            "Techniques de conduite sur différents terrains.",
            "Réalisation de manœuvres spécifiques (chargement, déchargement, empilement).",
            "Gestion des situations difficiles (terrain instable, zones confinées)."
          ],
        },
        {
          title: "Module 4 : Entretien et maintenance",
          duration: "7 heures",
          sections: [
            "Vérifications quotidiennes et entretien de premier niveau.",
            "Détection des anomalies et procédures à suivre.",
            "Consignes de stockage et maintenance préventive."
          ],
        },
        {
          title: "Module 5 : Évaluation et certification",
          duration: "7 heures",
          sections: [
            "Épreuve théorique : QCM sur les règles de sécurité et réglementation.",
            "Épreuve pratique : conduite sur circuit et réalisation des manœuvres.",
            //"Consignes de stockage et maintenance préventive."
          ],
        },
      ],
    },
  
    instructors2 : [
      {
        name: "Patrick Morel",
        image: "https://patrick-morel.fr/wp-content/uploads/2020/09/IMAG1078a2046-3.jpg",
        role: "Formateur spécialisé en conduite d'engins de chantier",
        numOfTrainings: 20,
      },
      {
        name: "Sophie Legrand",
        image: "https://media.licdn.com/dms/image/v2/C4D03AQFUjv-OA9A_gg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1602234752036?e=2147483647&v=beta&t=9ARoqhNuCqA8AI_Y7SpYIBxGEn3KPNAG-XrcgNv0Ie0",
        role: "Experte en sécurité et réglementation des engins de chantier",
        numOfTrainings: 18,
      },
    ],
    
    instructors: "Dr. Michel Cymes",
  
    equipePedagogique: [
      "Formateurs certifiés CACES avec une expérience dans le domaine des engins de chantier.",
      "Professionnels du BTP spécialisés dans la sécurité et la réglementation."
    ],
  
    moyensPedagogiques: [
      "Supports pédagogiques interactifs (vidéos, manuels, fiches techniques).",
      "Mise en situation sur des engins conformes aux catégories A, B1, et F.",
      "Simulations et exercices pratiques sur terrain sécurisé."
    ],
  
    dispositifEvaluation: [
      "Test théorique : QCM basé sur les règles de sécurité et la technologie des engins.",
      "Exercice pratique : Évaluation des compétences sur le terrain avec réalisation des manœuvres exigées."
    ],
  
    certification: 
    "À l’issue de la formation, les participants recevront le CACES R482 pour les catégories A, B1 et F, attestant de leurs compétences et leur permettant de conduire les engins en toute légalité.",
  
     professionals : [
      {
        name: "Marc Lefevre",
        image: "https://www.cfnews.net/var/cfnews/storage/images/_aliases/slideshow/mediatheque/hd/standard-hd/people/marc-lefevre-ey-art-ppl-2019/1914636-7-fre-FR/Marc-Lefevre-EY-ART-PPL-2019.jpg",
        profession: "Conducteur d'engins de chantier",
        comment: "Cette formation m'a permis d'améliorer ma maîtrise des engins et de renforcer mes compétences en sécurité sur le terrain.",
      },
      {
        name: "Sophie Martin",
        image: "https://64.media.tumblr.com/36693238a5450071d59f208405f1a98a/tumblr_o48fobDaxX1r4dunbo1_1280.jpg",
        profession: "Responsable sécurité en BTP",
        comment: "Une formation très complète qui met l'accent sur la prévention des risques et la réglementation des engins de chantier.",
      },
      {
        name: "David Moreau",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Xu4JxOK6X6Rk3TJOfc7aDe6OoE6o2UsnmA&s",
        profession: "Formateur en conduite d’engins",
        comment: "J’ai apprécié la pédagogie et les exercices pratiques qui rendent la formation très interactive et efficace.",
      },
      {
        name: "Isabelle Dubois",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbYjRw8dcvKhgC9MeNA0TWs5_0YOwK1RpHyg&s",
        profession: "Chef de chantier",
        comment: "Un programme bien structuré qui permet d’acquérir les bonnes pratiques et de se perfectionner sur les différentes catégories d'engins.",
      },
    ],
    
    
    
  },
  {
    id: 1,
    image: "https://www.cnfce.com/course/assets/5532dc5b-163e-4a4b-8348-f3d58f9c7aa9/img?cache=2024-12-31T17%3A48%3A05%2B00%3A00",
    duration: "14 heures (2 jours).",
    title: "Montage et Démontage d’Échafaudages Fixes (R408)",
    description: `
Cette formation vise à former les professionnels du BTP aux techniques de montage,
d’utilisation et de démontage des échafaudages fixes, conformément à la recommandation
R408. Elle met l’accent sur la sécurité, la conformité réglementaire, et les bonnes pratiques
pour prévenir les risques sur les chantiers.
    `,
    ProchaineSession: "28/02",
    DPC: "91283847123",
    Duree: "14 heures (2 jours).",
    Financements: "DPC, FIF PL",
    
    objectives: [
        "Comprendre les principes de base de la réglementation R408.",
        "Acquérir les compétences nécessaires pour monter et démonter un échafaudage en toute sécurité.",
        "Identifier les risques liés à l’utilisation des échafaudages et savoir les prévenir.",
        "Savoir vérifier la conformité et la stabilité des échafaudages."
    ],
    
    publicCible: [
        "Salariés du secteur BTP manipulant des échafaudages.",
        "Chefs d’équipe responsables de la sécurité sur les chantiers.",
        "Toute personne devant travailler ou superviser des travaux en hauteur."
    ],
    
    prerequis: [
        "Avoir 18 ans minimum.",
        "Aucune contre-indication médicale au travail en hauteur."
    ],
  
    skills: [
        "Maîtrise des techniques de montage et démontage d’échafaudages fixes.",
        "Application des règles de sécurité liées au travail en hauteur et à la manipulation des échafaudages.",
        "Identification des risques potentiels et mise en place de mesures de prévention.",
        "Vérification de la stabilité et conformité des échafaudages avant utilisation.",
        "Prise en charge des scénarios d’urgence et gestion des incidents sur chantier."
    ],
  
    programme: {
        id: "2",
        title: "Programme de Formation",
        parts: [
            {
                title: "Module 1 : Réglementation et sécurité",
                duration: "3 heures",
                sections: [
                    "Présentation de la recommandation R408 et des normes en vigueur.",
                    "Responsabilités des intervenants (monteurs, utilisateurs, superviseurs).",
                    "Analyse des risques et prévention (travail en hauteur, chutes, effondrements)."
                ],
            },
            {
                title: "Module 2 : Composants et types d’échafaudages",
                duration: "3 heures",
                sections: [
                    "Identification des éléments d’un échafaudage fixe.",
                    "Types et caractéristiques des échafaudages (métalliques, modulaires, spécifiques).",
                    "Principes de stabilité et d’ancrage."
                ],
            },
            {
                title: "Module 3 : Techniques de montage et démontage",
                duration: "3 heures",
                sections: [
                    "Lecture des plans d’assemblage.",
                    "Techniques pas à pas pour le montage en toute sécurité.",
                    "Procédures de démontage et rangement des composants."
                ],
            },
            {
                title: "Module 4 : Vérification et maintenance",
                duration: "2 heures",
                sections: [
                    "Contrôle de la conformité après montage.",
                    "Vérifications journalières avant utilisation.",
                    "Maintenance et gestion des pièces endommagées."
                ],
            },
            {
                title: "Module 5 : Pratique sur chantier",
                duration: "3 heures",
                sections: [
                    "Mise en situation réelle de montage et démontage.",
                    "Simulation de scénarios d’urgence et d’intervention en cas d’incident.",
                    "Évaluation des techniques et procédures respectées."
                ],
            },
        ],
    },
  
    instructors2 : [
        {
            name: "Claude Dupont",
            image: "https://media.licdn.com/dms/image/v2/D4E03AQHgzkwUR0gpCQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1700044821099?e=2147483647&v=beta&t=qYSlh0hitSIqtpEBt732RVUNBYJTWdj0ywVodoeLxX8",
            role: "Formateur spécialisé en travaux en hauteur",
            numOfTrainings: 15,
        },
        {
            name: "Marie Lefevre",
            image: "https://media.licdn.com/dms/image/D4E03AQGvVO0iz8Fgtg/profile-displayphoto-shrink_200_200/0/1695135322900?e=2147483647&v=beta&t=hBMItiTY44ahWxg0JR_7Na6zUDgc1smL8yz_ct4d9Go",
            role: "Experte en sécurité et réglementation des échafaudages",
            numOfTrainings: 10,
        },
    ],
    
    instructors: "Dr. Jean-Pierre Ménard",
  
    equipePedagogique: [
        "Formateurs certifiés en travaux en hauteur et sécurité sur chantiers.",
        "Professionnels spécialisés dans la gestion des équipements et la prévention des risques sur les chantiers."
    ],
  
    moyensPedagogiques: [
        "Matériel d’échafaudage conforme aux normes en vigueur.",
        "Supports pédagogiques illustrés (schémas, vidéos, fiches techniques).",
        "Exercices pratiques sur site sécurisé."
    ],
  
    dispositifEvaluation: [
        "Test théorique : QCM sur la réglementation et les règles de sécurité.",
        "Épreuve pratique : Montage, vérification, et démontage d’un échafaudage en conditions réelles."
    ],
  
    certification: 
    "Une attestation de compétence sera remise à l’issue de la formation, validant la capacité des participants à monter et démonter des échafaudages fixes en conformité avec la recommandation R408.",
  
     professionals : [
        {
            name: "Pierre Lemoine",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJTmI9i_THO3bBm-ncX3Ph7QD0GOBtfN6kQg&s",
            profession: "Chef de chantier",
            comment: "Cette formation m'a permis de renforcer mes connaissances sur la réglementation et la sécurité lors de l'utilisation des échafaudages.",
        },
        {
            name: "Lucie Besson",
            image: "https://media.licdn.com/dms/image/v2/C4E03AQFabTxUXmdd_Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1652340249803?e=2147483647&v=beta&t=J3CMyTDO1jLIkHJPYuQJCHqykTJnf-D2yaskxmOca10",
            profession: "Responsable sécurité",
            comment: "Un programme très complet qui m'a permis de mieux comprendre les risques et d’assurer une sécurité optimale sur le chantier.",
        },
        {
            name: "Jean-Claude Dubois",
            image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKAxtJhY26qB_DX2E_opj34INPTgPAAqCP0rTMztBbWiV-6UUz7A8Ou6GYe9ajxVwtdG_QCNnI62iA5xh0lNK8wsyOGVzmrqKhGVCBzahPKouZnpLfquny5sTwGkKDraoidIY0svzEyfI/s1600/jean-claude-dubois.jpg",
            profession: "Monteur d’échafaudages",
            comment: "Les techniques de montage et démontage sont parfaitement expliquées et mises en pratique sur le terrain.",
        },
        {
            name: "Sophie Bernard",
            image: "https://cdn.ca.yapla.com/company/CPY7p4CO2sE1afW3ImwiLyBND/website/news/2020-10/bernard_sophie.jpg",
            profession: "Formateur en travaux en hauteur",
            comment: "La formation est très pratique et utile pour acquérir des compétences directement applicables sur les chantiers.",
        },
    ],
},
{
  id: 2,
  image: "https://app.ascopi.com/wp-content/uploads/2023/09/logo-h0b0-1.webp",
  duration: "7 heures (1 jour).",
  title: "Habilitations Électriques B0/H0/H0V",
  description: `
  Cette formation prépare les personnels non-électriciens à intervenir en sécurité à proximité des installations électriques.
  Elle permet de comprendre les risques électriques et d’acquérir les compétences nécessaires pour obtenir les habilitations B0, H0, et H0V conformément à la norme NF C 18-510.
  `,
  ProchaineSession: "10/03",
  DPC: "98765432100",
  Duree: "7 heures (1 jour).",
  Financements: "DPC, FIF PL",
  
  objectives: [
      "Comprendre les dangers liés à l’électricité et les risques associés.",
      "Identifier les zones à risque dans l’environnement électrique.",
      "Savoir appliquer les consignes de sécurité en cas d’intervention à proximité des installations électriques.",
      "Obtenir les habilitations B0, H0 et H0V pour travailler en toute sécurité."
  ],
  
  publicCible: [
      "Personnel non-électricien ayant besoin d’intervenir à proximité des installations électriques.",
      "Professionnels du BTP, de la maintenance ou autres métiers techniques."
  ],
  
  prerequis: [
      "Aucun prérequis technique en électricité."
  ],

  skills: [
      "Compréhension des dangers électriques et effets du courant sur le corps humain.",
      "Identification des zones à risque et mise en place des mesures de sécurité.",
      "Application des consignes de sécurité sur le terrain.",
      "Obtention des habilitations B0, H0 et H0V."
  ],

  programme: {
      id: "1",
      title: "Programme de Formation",
      parts: [
          {
              title: "Module 1 : Notions fondamentales en électricité",
              duration: "1 heure",
              sections: [
                  "Définitions de base : tension, courant, résistance.",
                  "Compréhension des dangers électriques : effets du courant sur le corps humain."
              ],
          },
          {
              title: "Module 2 : Réglementation et prévention des risques électriques",
              duration: "2 heures",
              sections: [
                  "Présentation de la norme NF C 18-510.",
                  "Zones d’environnement électrique et distances limites.",
                  "Obligations légales et responsabilités des intervenants."
              ],
          },
          {
              title: "Module 3 : Comportements sécuritaires en environnement électrique",
              duration: "2 heures",
              sections: [
                  "Conduites à tenir en cas d’incident ou d’accident.",
                  "Équipement de protection individuelle (EPI) adapté.",
                  "Identification et balisage des zones à risque."
              ],
          },
          {
              title: "Module 4 : Mise en pratique sur site",
              duration: "2 heures",
              sections: [
                  "Identification des installations électriques et de leurs composants.",
                  "Simulation d’interventions à proximité d’installations sous tension.",
                  "Application des consignes de sécurité."
              ],
          },
      ],
  },

  instructors2: [
      {
          name: "Jean-Pierre Lefevre",
          image: "https://media.licdn.com/dms/image/v2/C4D03AQH51ki0Q2G9Kw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1546523283948?e=2147483647&v=beta&t=J4vDHgx4-Qe1MXfQDc8DQauZPvPRY0dfVvVlCVkUyAU",
          role: "Formateur spécialisé en sécurité électrique",
          numOfTrainings: 25,
      },
      {
          name: "Marc Dufresne",
          image: "https://image-uniservice.linternaute.com/image/450/3/1095807936/6971165.jpg",
          role: "Expert en réglementation des risques électriques",
          numOfTrainings: 18,
      },
  ],
  
  equipePedagogique: [
      "Formateurs spécialisés en sécurité électrique.",
      "Experts certifiés en prévention des risques liés à l’électricité."
  ],

  moyensPedagogiques: [
      "Supports pédagogiques interactifs (guides, vidéos, cas pratiques).",
      "Mise en situation sur site sécurisé avec équipements électriques simulés.",
      "Démonstrations pratiques des bonnes conduites."
  ],

  dispositifEvaluation: [
      "Test théorique : QCM sur les dangers électriques et les consignes de sécurité.",
      "Évaluation pratique : Mise en situation réelle d’intervention à proximité d’installations électriques."
  ],

  certification: 
  "À l’issue de la formation, une habilitation B0, H0 et H0V sera délivrée, attestant de la capacité des participants à travailler en toute sécurité à proximité d’installations électriques.",

  professionals: [
      {
          name: "Pierre Martin",
          image: "https://www.haguenau-terredereussites.fr/wp-content/uploads/2024/03/Pierre-Moyen.jpg",
          profession: "Technicien de maintenance",
          comment: "Cette formation m’a permis de mieux comprendre les risques électriques et de travailler en toute sécurité sur le terrain.",
      },
      {
          name: "Sophie Legrand",
          image: "https://app.voxingpro.com/cdn/storage/medias/pGdsKQmmzQpj7Eena/imgix/image.jpeg?updatedAt=2022-12-26T15:06:27.857Z",
          profession: "Chef de chantier",
          comment: "Une formation essentielle pour garantir la sécurité de notre équipe sur les chantiers électriques.",
      },
      {
          name: "Lucien Dupont",
          image: "https://media.licdn.com/dms/image/v2/D4E03AQHOK_0xk4U8CQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1666649828369?e=2147483647&v=beta&t=x5eU-xG3Lsmk6RtLF_K4kDjjZpX9JJDZbzcEnieg9Hw",
          profession: "Électricien industriel",
          comment: "Les connaissances acquises lors de cette formation m’ont permis de renforcer mes compétences et de respecter les normes de sécurité en toutes circonstances.",
      },
      {
          name: "Julie Moreau",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT74UJEcFOrFAD7UOFaomEIadYi3BMUOHFpw&s",
          profession: "Ingénieure en sécurité électrique",
          comment: "Une formation très complète, idéale pour les professionnels qui souhaitent renforcer leur expertise en sécurité électrique.",
      },
  ],
},

{
  id: 3,
  image: "https://www.crefops.com/src/assets/images/formations/formation-HABILITATION-ELECTRIQUE.jpg",
  duration: "28 heures (4 jours)",
  title: "Habilitation Électrique B1-B2-BR-BC-H1-H2",
  description: `
  Cette formation approfondie prépare les participants à intervenir en toute sécurité sur des installations électriques,
  en leur permettant d’obtenir les habilitations B1, B2, BR, BC, H1 et H2. Elle couvre les connaissances théoriques et les
  compétences pratiques nécessaires pour travailler dans le respect des normes en vigueur.
  `,
  ProchaineSession: "15/03",
  DPC: "12345678900",
  Duree: "28 heures (4 jours)",
  Financements: "DPC, FIF PL",
  
  objectives: [
      "Comprendre les risques électriques et adopter les comportements sécuritaires.",
      "Acquérir les connaissances théoriques et pratiques nécessaires à l’exécution des travaux électriques.",
      "Maîtriser les procédures d’intervention et de consignation.",
      "Obtenir les habilitations électriques nécessaires pour intervenir sur des installations basse et haute tension."
  ],
  
  publicCible: [
      "Électriciens ou techniciens devant réaliser des interventions sur des installations électriques.",
      "Responsables techniques supervisant des travaux électriques."
  ],
  
  prerequis: [
      "Avoir des connaissances de base en électricité.",
      "Aptitude médicale au travail sur des installations électriques."
  ],

  skills: [
      "Compréhension des risques électriques et des effets du courant sur le corps humain.",
      "Maîtrise des réglementations et des obligations de sécurité.",
      "Compétences en consignation et déconsignation des installations électriques.",
      "Savoir réaliser des interventions en basse et haute tension."
  ],

  programme: {
      id: "2",
      title: "Programme de Formation",
      parts: [
          {
              title: "Module 1 : Les bases de l’électricité et les risques associés",
              duration: "7 heures",
              sections: [
                  "Notions fondamentales : courant, tension, résistance.",
                  "Effets du courant sur le corps humain.",
                  "Identification des risques : arc électrique, court-circuit, surcharge."
              ],
          },
          {
              title: "Module 2 : Réglementation et responsabilités",
              duration: "7 heures",
              sections: [
                  "Norme NF C 18-510 : cadre réglementaire des habilitations électriques.",
                  "Obligations légales de l’employeur et du salarié.",
                  "Zones à risque et distances de sécurité."
              ],
          },
          {
              title: "Module 3 : Conduites à tenir en cas d’intervention",
              duration: "7 heures",
              sections: [
                  "Préparation des travaux : analyse des risques et consignes de sécurité.",
                  "Procédures de consignation et déconsignation des installations électriques.",
                  "Utilisation des équipements de protection individuelle (EPI)."
              ],
          },
          {
              title: "Module 4 : Pratique et mise en situation",
              duration: "7 heures",
              sections: [
                  "Simulation d’interventions en basse et haute tension.",
                  "Utilisation d’outils et d’appareils de mesure (multimètres, VAT).",
                  "Application des consignes de sécurité lors d’opérations spécifiques (remplacement, maintenance, dépannage)."
              ],
          },
      ],
  },

  equipePedagogique: [
      "Formateurs habilités en sécurité électrique.",
      "Experts en gestion des installations basse et haute tension."
  ],

  moyensPedagogiques: [
      "Supports pédagogiques interactifs (schémas, vidéos, fiches pratiques).",
      "Simulations sur installations électriques sécurisées.",
      "Outils de mesure et équipements conformes aux normes en vigueur."
  ],

  dispositifEvaluation: [
      "Épreuve théorique : QCM sur la réglementation, les risques électriques, et les procédures de consignation.",
      "Exercice pratique : Simulation d’interventions sur des installations basse et haute tension, avec consignation et déconsignation."
  ],

  certification: 
  "À l’issue de la formation, les participants recevront une habilitation électrique correspondant à leur niveau de compétence (B1, B2, BR, BC, H1, H2).",

  professionals: [
      {
          name: "Pierre Lefevre",
          image: "https://bucketeer-9640548c-6b2b-44c2-911b-4c59f779b550.s3.eu-west-1.amazonaws.com/photos/photo-33",
          profession: "Chef de chantier électrique",
          comment: "Cette formation m'a permis d'approfondir mes compétences en gestion des risques électriques et d'assurer la sécurité de mon équipe lors des interventions.",
      },
      {
          name: "Sophie Dubois",
          image: "https://www.usinenouvelle.com/mediatheque/3/5/1/001521153_896x598_c.jpg",
          profession: "Technicienne en maintenance électrique",
          comment: "La mise en pratique des consignes de sécurité en basse et haute tension a été un point fort de cette formation, renforçant ma confiance dans mes interventions.",
      },
      {
          name: "Marc Bernard",
          image: "https://www.hachette.fr/sites/default/files/images/intervenants/marc-bernard.jpg",
          profession: "Formateur en sécurité électrique",
          comment: "La formation a été une excellente opportunité pour remettre à jour mes connaissances des normes et des équipements utilisés lors des interventions électriques.",
      },
      {
          name: "Claire Martin",
          image: "https://i.cbc.ca/1.3023920.1428437369!/fileImage/httpImage/claire-martin.jpg",
          profession: "Responsable de la sécurité sur site",
          comment: "J'ai pu acquérir des compétences essentielles pour superviser des travaux électriques en toute sécurité et veiller au respect des procédures de consignation.",
      },
  ],

  instructors2: [
    {
        name: "Jean-Pierre Lefevre",
        image: "https://media.licdn.com/dms/image/v2/C4D03AQH51ki0Q2G9Kw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1546523283948?e=2147483647&v=beta&t=J4vDHgx4-Qe1MXfQDc8DQauZPvPRY0dfVvVlCVkUyAU",
        role: "Formateur spécialisé en sécurité électrique",
        numOfTrainings: 25
    },
    {
        name: "Marc Dufresne",
        image: "https://image-uniservice.linternaute.com/image/450/3/1095807936/6971165.jpg",
        role: "Expert en réglementation des risques électriques",
        numOfTrainings: 18
    }
]
},
{
  id: 4,
  image: "https://www.artisandubatiment.fr/wp-content/uploads/2022/10/formation-feebat-tout-savoir.jpg",
  duration: "21 heures (3 jours)",
  title: "RGE FEEBAT RENOVE",
  description: `
  Cette formation s’adresse aux professionnels du bâtiment souhaitant acquérir la qualification RGE (Reconnu Garant de l’Environnement) 
  pour intervenir dans des projets de rénovation énergétique. Elle permet de comprendre les enjeux de la performance énergétique, 
  d’acquérir des compétences techniques en rénovation, et de garantir le respect des réglementations en vigueur.
  `,
  ProchaineSession: "20/03",
  DPC: "98765432100",
  Duree: "21 heures (3 jours)",
  Financements: "DPC, FIF PL",
  
  objectives: [
      "Comprendre les principes de la rénovation énergétique et leur importance.",
      "Maîtriser les techniques et matériaux nécessaires pour améliorer la performance énergétique des bâtiments.",
      "Savoir réaliser des diagnostics et proposer des solutions adaptées aux besoins des clients.",
      "Garantir le respect des normes et réglementations en vigueur.",
      "Obtenir la qualification RGE, indispensable pour que vos clients bénéficient des aides financières à la rénovation énergétique."
  ],
  
  publicCible: [
      "Artisans et entreprises du bâtiment souhaitant obtenir la qualification RGE.",
      "Professionnels spécialisés en rénovation énergétique.",
      "Toute personne impliquée dans la rénovation de bâtiments résidentiels ou tertiaires."
  ],
  
  prerequis: [
      "Avoir des compétences de base en travaux de bâtiment."
  ],

  skills: [
      "Compréhension des enjeux énergétiques et financiers de la rénovation.",
      "Maîtrise des techniques d’isolation et de rénovation énergétique.",
      "Capacité à réaliser des diagnostics énergétiques et à proposer des solutions adaptées.",
      "Connaissance des normes de rénovation et de la réglementation thermique."
  ],

  programme: {
      id: "3",
      title: "Programme de Formation",
      parts: [
          {
              title: "Module 1 : Contexte et enjeux de la rénovation énergétique",
              duration: "4 heures",
              sections: [
                  "Les objectifs de la transition énergétique.",
                  "Fonctionnement énergétique d’un bâtiment : bilan thermique, points faibles.",
                  "Enjeux financiers et environnementaux pour les propriétaires et les locataires."
              ],
          },
          {
              title: "Module 2 : Techniques et solutions de rénovation",
              duration: "5 heures",
              sections: [
                  "Isolation thermique des murs, toitures et sols.",
                  "Solutions de chauffage et de ventilation à haute efficacité énergétique.",
                  "Énergies renouvelables intégrées aux bâtiments.",
                  "Étanchéité à l’air et confort thermique."
              ],
          },
          {
              title: "Module 3 : Diagnostic et évaluation énergétique",
              duration: "4 heures",
              sections: [
                  "Réalisation d’un audit énergétique.",
                  "Interprétation des résultats et définition des priorités d’intervention.",
                  "Présentation des outils de diagnostic (caméra thermique, logiciels, etc.)."
              ],
          },
          {
              title: "Module 4 : Normes et réglementations",
              duration: "4 heures",
              sections: [
                  "Réglementation thermique (RT2012, RE2020).",
                  "Règles de mise en œuvre des matériaux et équipements.",
                  "Obligations pour obtenir la qualification RGE."
              ],
          },
          {
              title: "Module 5 : Études de cas pratiques",
              duration: "4 heures",
              sections: [
                  "Analyse de projets réels de rénovation énergétique.",
                  "Simulation de propositions techniques adaptées aux besoins d’un client.",
                  "Retours d’expérience et échanges sur les bonnes pratiques."
              ],
          },
      ],
  },

  equipePedagogique: [
      "Formateurs spécialisés en rénovation énergétique et normes environnementales.",
      "Experts en réglementation thermique et techniques innovantes.",
      "Professionnels certifiés RGE avec une expérience terrain."
  ],

  moyensPedagogiques: [
      "Supports pédagogiques interactifs (guides, vidéos, études de cas).",
      "Mise en situation pratique avec des outils et matériaux de rénovation.",
      "Accès à des logiciels de simulation énergétique."
  ],

  dispositifEvaluation: [
      "Test théorique : QCM sur les principes de rénovation énergétique et les normes applicables.",
      "Exercice pratique : Simulation d’un diagnostic et proposition d’un plan de rénovation énergétique."
  ],

  certification: 
  "Une attestation de formation RGE FEEBAT RENOVE sera délivrée, permettant aux participants de demander la qualification RGE auprès des organismes agréés et d’intervenir sur des projets éligibles aux aides publiques.",
  instructors2: [
    {
        name: "Lucien Martin",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO0cnMvtwMfThj9wUZ8wZuQyFvLFCt7g-ZZg&s",
        role: "Formateur spécialisé en rénovation énergétique",
        numOfTrainings: 22
    },
    {
        name: "Camille Durand",
        image: "https://www.decideurs-magazine.com/images/bacardi-9fevrier.png",
        role: "Consultant en efficacité énergétique",
        numOfTrainings: 15
    }
],
  professionals: [
      {
          name: "Jean-Pierre Leclerc",
          image: "https://lh5.googleusercontent.com/proxy/njF_B3VlPjL_oqkwYaXdaULWAl5j7PHIM4Vp9dN1xj8mNI64MF6Ttar89rmVmRH6vOajVaXNbcb1VJvavdsC3CUJbZY",
          profession: "Entrepreneur en rénovation énergétique",
          comment: "Cette formation m'a permis de mieux comprendre les enjeux de la transition énergétique et de maîtriser les techniques nécessaires pour réussir mes projets de rénovation.",
      },
      {
          name: "Lucie Martin",
          image: "https://d1198w4twoqz7i.cloudfront.net/wp-content/uploads/2020/04/13142608/Martin_L_18581_WB.jpg",
          profession: "Consultante en performance énergétique",
          comment: "La formation m’a donné les clés pour réaliser des audits énergétiques complets et proposer des solutions adaptées aux besoins spécifiques de mes clients.",
      },
      {
          name: "David Hubert",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHa1GnAC-NiqT5JzI2s0wxYprcTzbRNGQ2A&s",
          profession: "Formateur en rénovation énergétique",
          comment: "Grâce à cette formation, j'ai pu mettre à jour mes connaissances sur les nouvelles normes et les technologies innovantes pour la rénovation énergétique.",
      },
      {
          name: "Anne-Sophie Dupuis",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMNG3SFm7dZ6169XfVyMPXx717VuxUVsj2_Q&s",
          profession: "Responsable technique en rénovation",
          comment: "Cette formation a renforcé ma capacité à gérer des projets de rénovation énergétique tout en respectant les normes strictes en matière d'efficacité énergétique.",
      },
  ],
},
 {
  id: 5,
  image: "https://www.haladjian-industrial.fr/wp-content/uploads/2019/03/antichute-construction.jpg",
  duration: "14 heures (2 jours)",
  title: "Travail en Hauteur et Prévention des Risques",
  description: `
  Cette formation s’adresse aux professionnels du bâtiment exposés aux risques de chute dans le cadre de travaux en hauteur. 
  Elle fournit les connaissances et compétences nécessaires pour travailler en sécurité, tout en respectant la réglementation en vigueur.
  `,
  ProchaineSession: "15/04",
  DPC: "11223344556",
  Duree: "14 heures (2 jours)",
  Financements: "DPC, OPCO",

  objectives: [
      "Comprendre les risques liés au travail en hauteur et les prévenir efficacement.",
      "Maîtriser l’utilisation des équipements de protection individuelle (EPI).",
      "Savoir mettre en place des dispositifs de sécurité adaptés au chantier.",
      "Identifier les responsabilités légales liées au travail en hauteur."
  ],

  publicCible: [
      "Travailleurs du BTP réalisant des interventions en hauteur.",
      "Chefs de chantier et superviseurs responsables de la sécurité des équipes."
  ],

  prerequis: [
      "Être apte médicalement au travail en hauteur."
  ],

  skills: [
      "Identification des risques liés aux travaux en hauteur.",
      "Maîtrise des équipements de protection individuelle (EPI).",
      "Compétences en mise en œuvre des dispositifs de sécurité sur le chantier.",
      "Connaissance des obligations légales et responsabilités liées au travail en hauteur."
  ],

  programme: {
      id: "4",
      title: "Programme de Formation",
      parts: [
          {
              title: "Module 1 : Réglementation et responsabilités",
              duration: "3 heures",
              sections: [
                  "Les obligations légales du salarié et de l’employeur.",
                  "La réglementation applicable (Code du travail, normes européennes)."
              ]
          },
          {
              title: "Module 2 : Analyse des risques et prévention",
              duration: "3 heures",
              sections: [
                  "Identifier les situations à risque.",
                  "Comprendre les causes des chutes et adopter les bonnes pratiques."
              ]
          },
          {
              title: "Module 3 : Utilisation des équipements de protection individuelle (EPI)",
              duration: "3 heures",
              sections: [
                  "Présentation des différents types d’EPI (harnais, longes, points d’ancrage).",
                  "Techniques de vérification, ajustement et entretien des équipements."
              ]
          },
          {
              title: "Module 4 : Mise en œuvre des dispositifs de sécurité",
              duration: "3 heures",
              sections: [
                  "Installation des lignes de vie.",
                  "Techniques de travail sécurisées (échafaudages, nacelles, cordes).",
                  "Plan de sauvetage et conduite à tenir en cas d’incident."
              ]
          },
          {
              title: "Module 5 : Mise en situation pratique",
              duration: "2 heures",
              sections: [
                  "Exercices sur site sécurisé pour tester les compétences.",
                  "Simulations d’intervention en hauteur avec équipement complet."
              ]
          }
      ]
  },

  equipePedagogique: [
      "Experts en prévention des risques professionnels.",
      "Formateurs spécialisés dans les travaux en hauteur et l’utilisation des EPI."
  ],

  moyensPedagogiques: [
      "Équipements conformes aux normes en vigueur (harnais, nacelles, échafaudages).",
      "Supports pédagogiques multimédias.",
      "Mises en situation sur des sites sécurisés."
  ],

  dispositifEvaluation: [
      "QCM : Validation des connaissances théoriques (minimum 70% de bonnes réponses).",
      "Exercice pratique : Installation d’un dispositif de sécurité et réalisation de travaux en hauteur simulés."
  ],

  certification: 
  "Une attestation de compétence sera remise, validant les capacités des participants à intervenir en hauteur en toute sécurité.",

  professionals: [
      {
          name: "Michel Lemoine",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHjPVegSEn22Lgdqv9UffwjeIb0WBG1eSoUQ&s",
          profession: "Chef de chantier en sécurité",
          comment: "La formation m’a permis d’approfondir mes connaissances des risques liés au travail en hauteur et de mieux préparer mes équipes pour travailler en toute sécurité.",
      },
      {
          name: "Sophie Bernard",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf7SPZtXwHUKCL-7od21oyOzHCOZCLSIsDVQ&s",
          profession: "Formatrice en prévention des risques",
          comment: "Cette formation est essentielle pour garantir la sécurité des travailleurs en hauteur, avec des outils pratiques et des exercices concrets.",
      },
      {
          name: "Louis Dufresne",
          image: "https://media.licdn.com/dms/image/v2/D4E03AQFQi09ulfxs-w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1670973495174?e=2147483647&v=beta&t=7_Y5QxXq9XmCNIkcbLct2AbjwtJdPT9CBR3AZcuX1VY",
          profession: "Spécialiste en équipement de sécurité",
          comment: "Grâce à cette formation, j’ai acquis une meilleure maîtrise des équipements de protection individuelle et appris à les utiliser dans les meilleures conditions.",
      },
      {
          name: "Julie Durand",
          image: "https://ceerrf.fr/wp-content/uploads/2022/10/julie-durand.webp",
          profession: "Responsable de sécurité chantier",
          comment: "La formation m'a permis de mieux comprendre les normes et de mettre en place des dispositifs de sécurité efficaces et adaptés pour mon équipe.",
      }
  ],
  instructors2: [
    {
        name: "Pierre Dupont",
        image: "https://ceritypartners.com/wp-content/uploads/2022/06/CERITY-LARGE_C-E_0007_83-Pierre-duPont_Pa.png",
        role: "Formateur en prévention des risques liés au travail en hauteur",
        numOfTrainings: 30
    },
    {
        name: "Sophie Lefevre",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS35LnJHRaCMGf0E9RMxGCu_WNJvxeRmnwJ4Q&s",
        role: "Consultante en sécurité et prévention des risques",
        numOfTrainings: 25
    }
]
},
 {
  id: 6,
  image: "https://www.cmesmat.fr/media/wysiwyg/Les_quipements_de_s_curit_pour_les_travaux_de_d_molition.jpg",
  duration: "21 heures (3 jours)",
  title: "Gestion et Sécurité des Travaux de Démolition",
  description: `
  Cette formation prépare les professionnels à gérer des chantiers de démolition en toute sécurité. 
  Elle couvre la réglementation, les techniques, et les mesures de prévention pour limiter les risques pour les travailleurs et l’environnement.
  `,
  ProchaineSession: "01/05",
  DPC: "22334455667",
  Duree: "21 heures (3 jours)",
  Financements: "DPC, OPCO",

  objectives: [
      "Comprendre la réglementation en matière de démolition.",
      "Connaître les techniques et outils adaptés aux différents types de travaux.",
      "Identifier et prévenir les risques liés à la démolition (amiante, effondrement, bruit).",
      "Savoir sécuriser les zones de chantier et protéger les intervenants."
  ],

  publicCible: [
      "Chefs de chantier et coordinateurs de travaux.",
      "Professionnels du BTP réalisant des travaux de démolition."
  ],

  prerequis: [
      "Avoir une première expérience dans le secteur du BTP."
  ],

  skills: [
      "Compréhension des réglementations en matière de démolition.",
      "Connaissance des outils et techniques de démolition.",
      "Capacité à gérer les risques liés à la démolition (amiante, bruits, etc.).",
      "Compétences en sécurité des chantiers de démolition."
  ],

  programme: {
      id: "5",
      title: "Programme de Formation",
      parts: [
          {
              title: "Module 1 : Réglementation et normes de sécurité",
              duration: "4 heures",
              sections: [
                  "Règles encadrant les travaux de démolition.",
                  "Gestion des déchets et respect de l’environnement."
              ]
          },
          {
              title: "Module 2 : Techniques et outils de démolition",
              duration: "5 heures",
              sections: [
                  "Analyse des structures à démolir.",
                  "Utilisation des engins spécifiques (pinces, marteaux-piqueurs, excavateurs).",
                  "Gestion des explosifs pour les démolitions contrôlées (selon réglementation)."
              ]
          },
          {
              title: "Module 3 : Prévention des risques",
              duration: "4 heures",
              sections: [
                  "Identification des matériaux dangereux (amiante, plomb).",
                  "Protection des travailleurs contre les projections, poussières et bruits."
              ]
          },
          {
              title: "Module 4 : Gestion et organisation du chantier",
              duration: "4 heures",
              sections: [
                  "Planification et coordination des opérations de démolition.",
                  "Sécurisation des zones autour du chantier."
              ]
          },
          {
              title: "Module 5 : Étude de cas pratiques",
              duration: "4 heures",
              sections: [
                  "Analyse d’un chantier de démolition réel.",
                  "Élaboration d’un plan de démolition sécurisé."
              ]
          }
      ]
  },

  equipePedagogique: [
      "Experts en gestion de chantiers complexes.",
      "Professionnels spécialisés dans la sécurité des travaux de démolition."
  ],

  moyensPedagogiques: [
      "Études de cas réels et simulations.",
      "Démonstrations d’utilisation d’outils spécifiques.",
      "Supports interactifs (vidéos, guides pratiques)."
  ],

  dispositifEvaluation: [
      "Test théorique : QCM sur la réglementation et les risques (minimum 70%).",
      "Simulation : Planification et coordination d’un chantier de démolition fictif."
  ],

  certification: 
  "Attestation de compétence en gestion et sécurité des travaux de démolition.",

  professionals: [
      {
          name: "Pierre Lambert",
          image: "https://cdn1.booknode.com/author_picture/5371/pierre-lambert-5370760-330-540.jpg",
          profession: "Chef de chantier spécialisé en démolition",
          comment: "Cette formation m'a permis de renforcer la gestion des risques sur mes chantiers et d'optimiser la sécurité des équipes face à des travaux de démolition complexes.",
      },
      {
          name: "Claire Dupont",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRClka5Pr3C9BBd4hOzLvBKcPu0UDIDy8_g8w&s",
          profession: "Formateur en sécurité des chantiers",
          comment: "Une excellente formation pour acquérir une maîtrise totale de la sécurité sur les chantiers de démolition et respecter toutes les normes environnementales.",
      },
      {
          name: "Jean-Claude Martin",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzuP20KfO5Ep07I_Le_NQDDr7tll_DJieMsw&s",
          profession: "Spécialiste en gestion des risques industriels",
          comment: "Grâce à cette formation, j'ai amélioré la gestion des matériaux dangereux et appris à mieux planifier les démolitions tout en minimisant l'impact environnemental.",
      },
      {
          name: "Sophie Lemoine",
          image: "https://media.licdn.com/dms/image/v2/D4D03AQGd66ggmek5dQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1697525576009?e=2147483647&v=beta&t=MSGp8kWFH8nK3HP_6kZPO5_3Z8inAoqe_ZtikUiecf0",
          profession: "Ingénieure en sécurité du bâtiment",
          comment: "La formation m’a apporté des outils concrets pour gérer la sécurité sur des chantiers de démolition complexes et pour protéger mes équipes.",
      }
  ],
  instructors2: [
    {
        name: "Luc Moreau",
        image: "https://cdn-s-www.ledauphine.com/images/6CD1C93E-1FEC-40C7-8980-00ED1746A95C/NW_raw/le-glaciologue-s-appuiera-sur-ses-travaux-portant-sur-la-mer-de-glace-archive-photo-le-d-l-1656517158.jpg",
        role: "Formateur en gestion des risques de démolition et sécurité des chantiers",
        numOfTrainings: 28
    },
    {
        name: "Marianne Dufresne",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr2-anyakVTNmvH3KScX3ETVOrdWv9lKDbwg&s",
        role: "Consultante en sécurité sur les chantiers de démolition",
        numOfTrainings: 20
    }
],
instructors2: [
    {
        name: "Marc Lefevre",
        image: "https://profile-images.xing.com/images/b2753688c5d6c1184df078c0e4765769-1/marc-lef%C3%A8vre.256x256.jpg",
        role: "Expert en sécurité et gestion des chantiers de démolition",
        numOfTrainings: 35
    },
    {
        name: "Sophie Martin",
        image: "https://res.cloudinary.com/swr-cms/image/upload/w_2000,q_auto,f_auto,h_1333,c_lfill,g_auto/swr-cms/d/assets/ratsmitglieder/swr_20240506_1730-sm-1716796098.jpg",
        role: "Consultante en gestion des risques sur les chantiers de démolition",
        numOfTrainings: 22
    }
]
},
{
  id: 7,
  image: "https://itbsformation.com/wp-content/uploads/2021/10/CACES-R486.jpg",
  duration: "21 heures (3 jours)",
  title: "CACES R486 - Conduite de Nacelles Élévatrices (PEMP)",
  description: `
  Cette formation prépare à la conduite en sécurité des Plateformes Élévatrices Mobiles de Personnes (PEMP) des catégories A et B. 
  Elle permet de maîtriser les techniques de conduite et les règles de sécurité indispensables pour obtenir la certification CACES R486.
  `,
  ProchaineSession: "01/06",
  DPC: "22334455677",
  Duree: "21 heures (3 jours)",
  Financements: "DPC, OPCO",

  objectives: [
      "Maîtriser les règles de sécurité liées à l’utilisation des nacelles élévatrices.",
      "Savoir effectuer les vérifications et l’entretien quotidien des équipements.",
      "Conduire en sécurité les nacelles de catégories A et B.",
      "Obtenir la certification CACES R486."
  ],

  publicCible: [
      "Professionnels utilisant des PEMP dans le cadre de leurs activités (BTP, logistique, maintenance)."
  ],

  prerequis: [
      "Être âgé de 18 ans minimum.",
      "Avoir une aptitude médicale pour la conduite en hauteur."
  ],

  skills: [
      "Compréhension des règles de sécurité liées aux nacelles élévatrices.",
      "Maîtrise des vérifications et de l'entretien des PEMP.",
      "Capacité à conduire en sécurité les nacelles des catégories A et B."
  ],

  programme: {
      id: "6",
      title: "Programme de Formation",
      parts: [
          {
              title: "Module 1 : Réglementation et responsabilités",
              duration: "4 heures",
              sections: [
                  "Normes applicables à la conduite des PEMP.",
                  "Obligations des conducteurs et employeurs."
              ]
          },
          {
              title: "Module 2 : Technologie des équipements",
              duration: "4 heures",
              sections: [
                  "Types de PEMP : caractéristiques et usages.",
                  "Vérifications avant utilisation."
              ]
          },
          {
              title: "Module 3 : Techniques de conduite et manœuvres",
              duration: "5 heures",
              sections: [
                  "Conduite en sécurité des nacelles (catégories A et B).",
                  "Positionnement précis et levage sécurisé."
              ]
          },
          {
              title: "Module 4 : Entretien et maintenance",
              duration: "4 heures",
              sections: [
                  "Contrôles réguliers et détection des anomalies."
              ]
          },
          {
              title: "Module 5 : Évaluation et certification",
              duration: "4 heures",
              sections: [
                  "QCM théorique sur la réglementation et la sécurité.",
                  "Évaluation pratique en situation réelle."
              ]
          }
      ]
  },

  equipePedagogique: [
      "Formateurs spécialisés dans la conduite des PEMP.",
      "Experts en sécurité et maintenance des équipements de levage."
  ],

  moyensPedagogiques: [
      "Plateformes élévatrices mobiles de personnes (PEMP) conformes aux normes.",
      "Supports pédagogiques interactifs et vidéos.",
      "Simulations pratiques sur site."
  ],

  dispositifEvaluation: [
      "Test théorique : QCM sur la réglementation et la sécurité (minimum 70%).",
      "Évaluation pratique : Conduite sécurisée des PEMP en situation réelle."
  ],

  certification: 
  "CACES R486 (catégories A et B).",

  professionals: [
      {
          name: "Marc Lemoine",
          image: "https://media.licdn.com/dms/image/v2/D4E03AQEehH0I-A2PUg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1668792559913?e=2147483647&v=beta&t=o4nvdkiwltRtht_6P08IeTlnX0G2vXpcTCji5KROuZI",
          profession: "Formateur spécialisé en PEMP",
          comment: "Cette formation est essentielle pour maîtriser la conduite des nacelles élévatrices dans des conditions de sécurité optimales. Les compétences acquises garantissent la sécurité des travailleurs en hauteur.",
      },
      {
          name: "Laura Dupuis",
          image: "https://pbs.twimg.com/profile_images/1486657153377181700/K8fL_n-n_400x400.jpg",
          profession: "Chef de chantier",
          comment: "Grâce à cette certification, j'ai pu renforcer la sécurité de mes équipes lors de l'utilisation des nacelles, en m'assurant qu'elles respectent toutes les normes.",
      },
      {
          name: "Jean-Pierre Durand",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEQKUTeZ17ZFPafM8sHgt8q4YZIsV-82ILVA&s",
          profession: "Technicien en maintenance d'équipements",
          comment: "Une formation complète qui permet de comprendre les risques et d'assurer un entretien efficace des nacelles, réduisant ainsi les pannes et augmentant la sécurité.",
      },
      {
          name: "Sophie Dufresne",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShtGt6CrKfFJHS8GNXJwtQCdf97YxMjbcdjA&s",
          profession: "Consultante en sécurité du travail",
          comment: "Cette formation est un must pour tous les professionnels qui utilisent des PEMP, elle permet de bien comprendre les responsabilités et de réduire les risques d'accidents.",
      }
  ],
  instructors2: [
    {
        name: "Lucien Dupont",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Q3ZkHSYJXWpM5vAPGOM7wpslnd8JgYc-RA&s",
        role: "Formateur spécialisé en conduite de nacelles élévatrices et PEMP",
        numOfTrainings: 40
    },
    {
        name: "Claire Roche",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLwQU4444MO1EAtpqOnZgGVfPFf62mlBw8yg&s",
        role: "Experte en sécurité et gestion des équipements de levage",
        numOfTrainings: 28
    }
]
},
{
  id: 8,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS47bqqX7LKVQL7-nMj7Jm3TuSI-n8yHz21_w&s",
  duration: "14 heures (2 jours)",
  title: "Sauveteur Secouriste du Travail (SST)",
  description: `
  La formation SST prépare les participants à intervenir efficacement face à une situation d'accident du travail. 
  Elle permet d'acquérir les réflexes nécessaires pour protéger, alerter, et secourir, tout en contribuant à la prévention des risques en entreprise.
  `,
  ProchaineSession: "01/07",
  DPC: "22334455678",
  Duree: "14 heures (2 jours)",
  Financements: "DPC, OPCO",

  objectives: [
      "Identifier les risques professionnels et contribuer à leur prévention.",
      "Appliquer les gestes de premiers secours adaptés à chaque situation.",
      "Savoir alerter les secours en cas d'urgence.",
      "Obtenir le certificat SST."
  ],

  publicCible: [
      "Tous salariés, responsables, ou intervenants en milieu professionnel."
  ],

  prerequis: [
      "Aucun."
  ],

  skills: [
      "Identification des risques professionnels et mise en place de la prévention.",
      "Maîtrise des gestes de premiers secours pour chaque situation.",
      "Capacité à alerter les secours et à intervenir en cas d'urgence."
  ],

  programme: {
      id: "7",
      title: "Programme de Formation",
      parts: [
          {
              title: "Module 1 : Rôle du Sauveteur Secouriste du Travail",
              duration: "3 heures",
              sections: [
                  "Notions légales et cadre réglementaire.",
                  "Prévention des risques professionnels."
              ]
          },
          {
              title: "Module 2 : Conduite à tenir en cas d’accident",
              duration: "4 heures",
              sections: [
                  "Protéger la victime et les témoins.",
                  "Évaluation de l’état de la victime."
              ]
          },
          {
              title: "Module 3 : Gestes de secours",
              duration: "5 heures",
              sections: [
                  "Arrêt des hémorragies et prise en charge des plaies.",
                  "Réanimation cardio-pulmonaire (RCP) et utilisation d’un défibrillateur.",
                  "Secours face aux malaises et traumatismes."
              ]
          },
          {
              title: "Module 4 : Mise en situation pratique",
              duration: "2 heures",
              sections: [
                  "Simulation d’accidents en entreprise."
              ]
          }
      ]
  },

  equipePedagogique: [
      "Formateurs spécialisés en secourisme et prévention des risques.",
      "Experts en gestion des accidents du travail et en formation SST."
  ],

  moyensPedagogiques: [
      "Supports pédagogiques interactifs (vidéos, guides pratiques).",
      "Simulations pratiques sur site.",
      "Matériel de premiers secours pour les mises en situation."
  ],

  dispositifEvaluation: [
      "Test théorique : QCM sur les risques et les gestes de secours.",
      "Évaluation pratique en situation d'urgence."
  ],

  certification: 
  "Certificat SST, valide 2 ans, renouvelable via une session de maintien et actualisation des compétences (MAC).",

  professionals: [
      {
          name: "Isabelle Martin",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGIE6oLuISSlZwqfUsJqQ3vtxQY3XPriRVyA&s",
          profession: "Formateur en secourisme",
          comment: "Cette formation est essentielle pour tous les salariés. Elle permet de réagir efficacement en cas d’accident et de sauver des vies.",
      },
      {
          name: "Michel Lefèvre",
          image: "https://www.guerrilla-games.com/media/michel_web_Person_bio_1280x854.jpg?width=375",
          profession: "Responsable sécurité",
          comment: "Le SST est un savoir-faire indispensable en entreprise. Il permet de protéger les collaborateurs et d’intervenir rapidement avant l’arrivée des secours.",
      },
      {
          name: "Chloé Dubois",
          image: "https://media.doctolib.com/image/upload/q_auto:eco,f_auto/ya5x2al7gr2x2sph2qmd.jpg",
          profession: "Médecin du travail",
          comment: "En tant que médecin du travail, je constate l'importance de cette formation pour limiter les risques d’accidents graves en entreprise.",
      },
      {
          name: "Paul Lemoine",
          image: "https://media.licdn.com/dms/image/v2/D5603AQFowHIpSEyCzw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1695764433672?e=2147483647&v=beta&t=7lsSITHC7JN0jZ_mplVB3Tcptknh98H-nlSwCLr4YC4",
          profession: "Chef d'équipe BTP",
          comment: "La formation SST m'a permis de mieux sensibiliser mes équipes aux risques et d'assurer une gestion plus sereine des situations d'urgence sur le terrain.",
      }
  ],
  instructors2: [
    {
        name: "Antoine Morel",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVwFiKq_lGLwOUwsHI3SdCqr9iBJdfuaGXrg&s",
        role: "Formateur en secourisme et prévention des risques professionnels",
        numOfTrainings: 35
    },
    {
        name: "Sophie Lambert",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcyfhvVoyXxT8i62r4UHjEgLIhBZ_1s7pgxw&s",
        role: "Experte en gestes de premiers secours et prévention en entreprise",
        numOfTrainings: 29
    }
]
},
/**On s'arrête ici la modification koko ***/
{
    id: 9,
    image: "https://img.leboncoin.fr/api/v1/lbcpb1/images/9c/65/fa/9c65faecbaf2c12381839e21ee0d4a2113df1d43.jpg?rule=ad-small",
    duration: "14 heures (2 jours)",
    title: "Montage et Utilisation d’Échafaudages Roulants",
    description: `
    Cette formation enseigne les bonnes pratiques pour monter, utiliser et démonter des échafaudages roulants en toute sécurité, 
    conformément à la réglementation en vigueur.
    `,
    ProchaineSession: "15/07",
    DPC: "11223344556",
    Duree: "14 heures (2 jours)",
    Financements: "DPC, OPCO",

    objectives: [
        "Apprendre les règles de sécurité liées à l’utilisation des échafaudages roulants.",
        "Savoir monter et démonter les échafaudages en respectant les normes.",
        "Vérifier la conformité et assurer la stabilité des structures."
    ],

    publicCible: [
        "Professionnels du BTP utilisant des échafaudages roulants sur les chantiers."
    ],

    prerequis: [
        "Avoir 18 ans minimum."
    ],

    skills: [
        "Maîtrise des règles de sécurité lors de l’utilisation d’échafaudages roulants.",
        "Compétence en montage et démontage des échafaudages selon les normes.",
        "Capacité à vérifier la conformité des structures et assurer leur stabilité."
    ],

    programme: {
        id: "8",
        title: "Programme de Formation",
        parts: [
            {
                title: "Module 1 : Réglementation et responsabilités",
                duration: "3 heures",
                sections: [
                    "Normes applicables aux échafaudages roulants.",
                    "Obligations légales de l’utilisateur et de l’employeur."
                ]
            },
            {
                title: "Module 2 : Composants et types d’échafaudages roulants",
                duration: "3 heures",
                sections: [
                    "Identification des éléments et accessoires.",
                    "Montage des différentes configurations."
                ]
            },
            {
                title: "Module 3 : Montage, utilisation et démontage",
                duration: "5 heures",
                sections: [
                    "Techniques pas à pas pour le montage sécurisé.",
                    "Stabilisation et déplacement en sécurité.",
                    "Procédures pour un démontage sécurisé."
                ]
            },
            {
                title: "Module 4 : Vérifications et maintenance",
                duration: "3 heures",
                sections: [
                    "Contrôle de la conformité des échafaudages.",
                    "Entretien et gestion des pièces usées."
                ]
            }
        ]
    },

    equipePedagogique: [
        "Formateurs spécialisés dans la sécurité sur chantiers BTP.",
        "Experts en réglementation et montage des échafaudages roulants."
    ],

    moyensPedagogiques: [
        "Supports pédagogiques interactifs (vidéos, guides pratiques).",
        "Simulations pratiques de montage et démontage d’échafaudages.",
        "Matériel adapté pour les démonstrations sur site."
    ],

    dispositifEvaluation: [
        "Test théorique : QCM sur les règles de sécurité et de montage.",
        "Évaluation pratique lors des mises en situation."
    ],

    certification: 
    "Attestation de compétence en montage et utilisation des échafaudages roulants.",

    professionals: [
        {
            name: "Lucie Bernard",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLaZeh-l7Zf_nhaqXBSYxG3cTDnRM3AYG8Dw&s",
            profession: "Formatrice sécurité BTP",
            comment: "Cette formation est cruciale pour éviter les accidents liés aux échafaudages roulants, garantissant la sécurité des travailleurs sur le chantier.",
        },
        {
            name: "Jean-Paul Girard",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKx1UFyOkA0ZlnBnQQ74ybVhhjQKTokkbfDg&s",
            profession: "Ingénieur sécurité BTP",
            comment: "La maîtrise des techniques de montage et démontage des échafaudages est essentielle pour maintenir des conditions de travail sûres et efficaces.",
        },
        {
            name: "Nathalie Dubois",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDFeISToNn0D7Y3rdwHcZ8eps8VMV3AgF5Mw&s",
            profession: "Responsable de chantier",
            comment: "Former les équipes sur l'utilisation correcte des échafaudages roulants permet de réduire significativement les risques d'accidents en hauteur.",
        },
        {
            name: "Olivier Lemoine",
            image: "https://media.licdn.com/dms/image/v2/C5603AQHqV9oG31tJHg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1520794053181?e=2147483647&v=beta&t=drP-3wSoFUcr5gNTW8iD4Kyco1hiwswvWLyUKR9Wyak",
            profession: "Chef d'équipe BTP",
            comment: "Une bonne formation sur les échafaudages roulants est la clé pour garantir non seulement la sécurité mais aussi l'efficacité du travail sur le chantier.",
        }
    ],
 
instructors2: [
    {
        name: "Jean-Luc Perrin",
        image: "https://media.licdn.com/dms/image/v2/C4D03AQEXhAgR98BQDw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517618956586?e=2147483647&v=beta&t=5hkCl-3zCiUipfgk1sESD7P2ZnXJ3jGsLKFroMJrWYc",
        role: "Formateur spécialisé en sécurité et montage d’échafaudages",
        numOfTrainings: 42
    },
    {
        name: "Caroline Dubois",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_aNzZoUi5jljGu1s_z72g8e6HtvShhmvFpw&s",
        role: "Experte en réglementation et prévention des risques liés aux échafaudages",
        numOfTrainings: 37
    }
]
},
 {
    id: 10,
    image: "https://sftl.fr/wp-content/uploads/2021/11/cat4-chariot-frontal-plus-6tonnes.jpg",
    duration: "35 heures (5 jours)",
    title: "CACES R489 - Conduite de Chariots Élévateurs (Catégories 1A, 3, 5)",
    description: `
    Cette formation permet d’acquérir les compétences nécessaires pour conduire en sécurité des chariots élévateurs des catégories 1A 
    (transpalettes à conducteur porté), 3 (chariots frontaux thermiques ou électriques), et 5 (chariots élévateurs à mât rétractable). 
    Elle prépare également à la certification CACES R489 indispensable pour l’exercice de cette activité.
    `,
    ProchaineSession: "01/08",
    DPC: "22334455667",
    Duree: "35 heures (5 jours)",
    Financements: "DPC, OPCO",

    objectives: [
        "Comprendre les règles de sécurité applicables à la conduite des chariots élévateurs.",
        "Maîtriser les techniques de conduite et les manœuvres spécifiques pour chaque catégorie.",
        "Savoir effectuer les vérifications et l’entretien journalier des engins.",
        "Obtenir la certification CACES R489 pour les catégories 1A, 3 et 5."
    ],

    publicCible: [
        "Conducteurs débutants ou expérimentés nécessitant la certification CACES R489.",
        "Professionnels manipulant des charges dans les secteurs logistique, industriel ou BTP."
    ],

    prerequis: [
        "Être âgé de 18 ans minimum.",
        "Aptitude médicale à la conduite de chariots élévateurs (certificat requis)."
    ],

    skills: [
        "Connaissance des règles de sécurité et des responsabilités liées à l’utilisation des chariots élévateurs.",
        "Maîtrise des techniques de conduite et des manœuvres spécifiques pour chaque type de chariot.",
        "Compétence en maintenance de premier niveau et vérifications des engins.",
        "Capacité à identifier et gérer les risques associés à l’utilisation des chariots."
    ],

    programme: {
        id: "9",
        title: "Programme de Formation",
        parts: [
            {
                title: "Module 1 : Réglementation et responsabilités",
                duration: "5 heures",
                sections: [
                    "Présentation des normes et réglementations en vigueur (Code du travail).",
                    "Responsabilités légales des conducteurs et employeurs."
                ]
            },
            {
                title: "Module 2 : Technologie des chariots élévateurs",
                duration: "8 heures",
                sections: [
                    "Identification des types de chariots (1A, 3, 5).",
                    "Fonctionnement des différents organes : mât, fourches, contrepoids, etc.",
                    "Vérifications préalables et maintenance de premier niveau."
                ]
            },
            {
                title: "Module 3 : Techniques de conduite et manœuvres",
                duration: "10 heures",
                sections: [
                    "Conduite sécurisée avec et sans charge.",
                    "Techniques de gerbage et dégerbage.",
                    "Circulation dans des zones restreintes et manœuvres spécifiques."
                ]
            },
            {
                title: "Module 4 : Gestion des risques et prévention",
                duration: "6 heures",
                sections: [
                    "Identification des dangers liés à l’utilisation des chariots.",
                    "Conduite sur différents types de sols (lisses, accidentés, en pente).",
                    "Règles de communication sur les sites logistiques."
                ]
            },
            {
                title: "Module 5 : Évaluation pratique et certification",
                duration: "6 heures",
                sections: [
                    "Exécution de manœuvres spécifiques avec les trois types de chariots.",
                    "Respect des consignes de sécurité et des techniques enseignées."
                ]
            }
        ]
    },

    equipePedagogique: [
        "Formateurs certifiés CACES et experts en logistique.",
        "Professionnels de la prévention des risques en entrepôt et sur chantier."
    ],

    moyensPedagogiques: [
        "Chariots élévateurs conformes aux catégories 1A, 3 et 5.",
        "Simulations sur des circuits adaptés à chaque type de manœuvre.",
        "Supports pédagogiques multimédias (guides pratiques, vidéos)."
    ],

    dispositifEvaluation: [
        "Épreuve théorique : QCM sur les règles de sécurité et la technologie des chariots (minimum 70% de bonnes réponses).",
        "Épreuve pratique : Manœuvres et tests de conduite sur chaque type de chariot."
    ],

    certification: 
    "À l’issue de la formation, les participants recevront le CACES R489 pour les catégories 1A, 3 et 5, leur permettant de conduire ces engins en toute légalité.",

    professionals: [
        {
            name: "Marc Alice",
            image: "https://www.psychologue.net/site/company/10/422094/logo/marc-alice_li1.png",
            profession: "Formateur CACES",
            comment: "Une formation CACES R489 est essentielle pour garantir la sécurité et la conformité lors de l’utilisation des chariots élévateurs sur site.",
        },
        {
            name: "Sophie rached ",
            image: "https://i0.wp.com/lapresse.tn/wp-content/uploads/2021/03/sophie-renaud.jpg?fit=850%2C491&ssl=1",
            profession: "Consultante en sécurité logistique",
            comment: "La sécurité des opérateurs doit être une priorité, et cette formation permet de renforcer les bonnes pratiques dans la conduite des chariots élévateurs.",
        },
        {
            name: "Jean-Marc Dupont",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOTX0w9sRvr57ix_033rfs2hWwxQu5JstWNQ&s",
            profession: "Responsable logistique",
            comment: "Il est crucial de former les conducteurs à l’utilisation sécurisée des chariots élévateurs pour éviter les accidents et améliorer la productivité.",
        },
        {
            name: "Lucie Martin",
            image: "https://media.licdn.com/dms/image/v2/C4E03AQH37fvqIa2j7w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1655107552525?e=2147483647&v=beta&t=6PpShKJmB81daELcfPZNP1W-CBqKQCK2JKqqtx18QyY",
            profession: "Expert en prévention des risques",
            comment: "La maîtrise des chariots élévateurs est non seulement indispensable pour la sécurité, mais aussi pour optimiser les flux logistiques en entrepôt.",
        }
    ],
    instructors2: [
    {
        name: "Michel Garnier",
        image: "https://image-uniservice.linternaute.com/image/450/3/1114644743/7031444.jpg",
        role: "Formateur en conduite et sécurité des chariots élévateurs",
        numOfTrainings: 50
    },
    {
        name: "Sophie Morel",
        image: "https://www.claymath.org/wp-content/uploads/2022/04/image-57.jpeg",
        role: "Experte en réglementation CACES et prévention des risques logistiques",
        numOfTrainings: 38
    }
]
},















];


export const finance = [ 
  {
    id: 0,
    image:
      "https://www.gofluent.com/wp-content/uploads/2022/12/CPF-Logo-422x221px.webp",
    title: "Comptabilité",
    duration: "24H",
    instructors: "Jean-François Renucci",
  },
  
  {
  
  id: 200,
  image:
    "https://e7w7t7d7.delivery.rocketcdn.me/wp-content/uploads/2024/04/city_pro_opco-2.png",
  title: "Comptabilité",
  duration: "24H",
  instructors: "Jean-François Renucci",
},
{
  id: 300,
  image:
    "https://www.anfh.fr/sites/default/files/ged/logo_fiphfp_2.jpg",
  title: "Comptabilité",
  duration: "24H",
  instructors: "Jean-François Renucci",
},
{
  id: 400,
  image:
    "https://voila-le-travail.fr/wp-content/uploads/2021/07/Pole-Emploi.png",
  title: "Comptabilité",
  duration: "24H",
  instructors: "Jean-François Renucci",
},
{
  id: 500,
  image:
    "https://webzine.okeenea.com/wp-content/uploads/2021/08/agefiph-logo-inclusion-handicap.jpg",
  title: "Comptabilité",
  duration: "24H",
  instructors: "Jean-François Renucci",
},];
export const juridiqueTrainings = [
  {
    id: 0,
    image:
      "https://media.istockphoto.com/id/1403453245/fr/photo/les-financiers-calculent-les-imp%C3%B4ts-personnels-pour-leurs-clients.jpg?s=612x612&w=0&k=20&c=r9gMU55SrdSdiar7XcwIAAxOroZ6DoZSDwPAuUguR9c=",
    title: "Comptabilité",
    duration: "24H",
    instructors: "Jean-François Renucci",
  },
 
  {
    id: 1,
    image:
      "https://resilient.digital-africa.co/wp-content/uploads/sites/2/2022/04/Pic-4-2.jpg",
    title: "Digital",
    duration: "20H",
    instructors: "Jean-François Renucci",
  },
  {
    id: 2,
    image:
      "https://static3.cegos.fr/content/uploads/2022/08/10141748/chef-de-projet-les-fondamentaux-Mag-min.jpg",
    title: "Management",
    duration: "24H",
    instructors: "Jean-François Renucci",
  },
  {
    id: 3,
    image: "https://capitole-formation.fr/sites/default/files/negociation_commerciale.jpg",
    title: "Vente et Négotiation",
    duration: "12H",
    instructors: "Jean-François Renucci",
  },
  {
    id: 4,
    image:
      "https://www.morpheus-formation.fr/wp-content/uploads/2022/10/Article-Image-mise-en-avant-site.webp",
    title: "Bureautique",
    duration: "18H",
    instructors: "Jean-François Renucci",
  },
  {
    id: 5,
    image:
      "https://www.3dis-formation.fr/wp-content/uploads/2023/02/developpement_personnel_formation-500x350.png",
    title: "Développement personnel",
    duration: "14H",
    instructors: "Jean-François Renucci",
  },
  {
    id: 6,
    image:
      "https://polysud-formation.com/wp-content/uploads/2022/03/formation-langues-767x767-min.jpg",
    title: "Langues",
    duration: "30H",
    instructors: "Jean-François Renucci",
  },
  {
    id: 7,
    image:
      "https://aura-formation.fr/wp-content/uploads/2022/11/premiere-700x400.jpg",
    title: "PAO/CAO",
    duration: "8H",
    instructors: "Jean-François Renucci",
  },
  {
    id: 8,
    image:
      "https://aura-formation.fr/wp-content/uploads/2022/11/premiere-700x400.jpg",
    title: "Commerce",
    duration: "8H",
    instructors: "Jean-François Renucci",
  },
  {
    id: 8,
    image:
      "https://joptimisemonbusiness.com/wp-content/uploads/2024/08/pourquoi-suivre-une-formation-marketing-a-distance-1280x640.jpg",
    title: "Marketing",
    duration: "8H",
    instructors: "Jean-François Renucci",
  },
  {
    id: 9,
    image:
      "https://www.cegid.com/fr/wp-content/uploads/sites/7/2023/01/900x600_24.png",
    title: "Pai et administration des RH",
    duration: "8H",
    instructors: "Jean-François Renucci",
  },
  {
    id: 10,
    image:
      "https://res.cloudinary.com/dxx9jya01/image/upload/v1/production/rt7harnky28hsi0n8neinmp3l59p",
    title: "Secrétariat- Assistanat",
    duration: "8H",
    instructors: "Jean-François Renucci",
  },
  
];