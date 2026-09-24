import { CVData } from '../types/cv';
import defaultPhoto from '../assets/images/roland_profile_portrait_1790244724489.jpg';

export const initialCVData: CVData = {
  fullName: 'Iragi Mihigo Roland',
  title: "Spécialiste en Gestion de l'Information et Analyse des Données",
  tags: ['SIG', 'KoboToolbox', 'Power BI', 'Data Analysis', 'Humanitaire'],
  bannerQuote: 'Des données fiables pour des décisions qui changent des vies.',
  photoUrl: defaultPhoto,
  contact: {
    location: 'Katindo area, avenue de la Frontière\nGoma, Nord-Kivu, RDC',
    phone: '+243 992 641 674',
    email: 'rolandiragimihigo851@gmail.com',
    languagesSummary: 'Français | Swahili | Lingala | Anglais (courant)',
    linkedin: 'https://www.linkedin.com/in/roland-iragi-88675621b/?isSelfProfile=true',
    github: 'https://github.com/RolandMihigo',
    kaggle: 'https://www.kaggle.com/rolandiragi',
  },
  profile:
    "Professionnel de la gestion de l'information et des données, avec une expérience en collecte, traitement, analyse et visualisation de données dans des contextes de gouvernance, de santé et d'intervention humanitaire en RDC.\n\nCompétent en SIG (QGIS), collecte mobile (KoboToolbox), analyse et visualisation (Power BI, Excel, Tableau, Qlik Sense), ainsi qu'en gestion de bases de données et production de rapports.\n\nExpérience dans l'appui aux équipes et partenaires sur le terrain, la structuration et le contrôle de la qualité des données, la cartographie des interventions et la production d'infographies pour la prise de décision fondée sur les preuves.",
  skillCategories: [
    {
      id: 'info-analysis',
      title: "Gestion de l'information & analyse des données",
      iconName: 'bar-chart',
      skills: [
        'Collecte, nettoyage et structuration des données',
        'Analyse et identification des tendances',
        'Tableaux de bord et rapports',
        'Appui à la prise de décision basée sur les données',
      ],
    },
    {
      id: 'sig',
      title: 'SIG & Cartographie',
      iconName: 'map-pin',
      skills: [
        'QGIS (données vectorielles, polygones, géoréférencement)',
        'Cartographie thématique et de densité',
        'Mise en page de cartes aux standards professionnels',
        'Croisement de données géospatiales et attributaires',
      ],
    },
    {
      id: 'data-collection',
      title: 'Collecte de données',
      iconName: 'clipboard-list',
      skills: [
        'KoboToolbox / KoboCollect',
        'Conception de formulaires et questionnaires',
        'Structuration des données pour le reporting',
        'Appui aux équipes de terrain',
      ],
    },
    {
      id: 'bi',
      title: 'Business Intelligence & Visualisation',
      iconName: 'pie-chart',
      skills: [
        'Microsoft Power BI',
        'Excel avancé',
        'Tableau',
        'Qlik Sense',
      ],
    },
    {
      id: 'databases',
      title: 'Bases de données & systèmes',
      iconName: 'database',
      skills: [
        'Gestion et structuration de bases de données',
        'MySQL / Microsoft Access',
        'Intégration de données et support technique',
      ],
    },
    {
      id: 'humanitarian',
      title: 'Contexte humanitaire',
      iconName: 'users',
      skills: [
        'Santé, VBG et autres secteurs humanitaires',
        'Appui aux partenaires et coordinations provinciales',
        'Qualité, intégrité et confidentialité des données',
      ],
    },
  ],
  languages: [
    { code: 'FR', name: 'Français', level: 'langue maternelle' },
    { code: 'SW', name: 'Swahili', level: 'bon niveau' },
    { code: 'LN', name: 'Lingala', level: 'bon niveau' },
    { code: 'EN', name: 'Anglais', level: 'courant' },
  ],
  interests: [
    { iconName: 'music', title: 'Musique', subtitle: '(piano, chorale, classique – Handel)' },
    { iconName: 'football', title: 'Football' },
    { iconName: 'running', title: 'Jogging' },
  ],
  experiences: [
    {
      id: 'egov-africa',
      company: 'eGov Africa',
      companyType: 'ONG – Membre Fondateur',
      role: 'Co-fondateur & Spécialiste des Données Humanitaires',
      period: '2024 – Présent',
      logoType: 'egov',
      bullets: [
        "Conception et déploiement de solutions numériques pour le secteur de la santé et les organisations humanitaires (avec l'appui de partenaires comme LM International).",
        'Conception de formulaires et questionnaires avec KoboToolbox pour la collecte de données (consultations prénatales CPN, planification vaccinale, suivi des VBG).',
        "Structuration, analyse et exploitation des données pour alimenter les rapports opérationnels et les besoins d'information des partenaires.",
        "Appui technique aux équipes et partenaires dans l'utilisation des outils numériques.",
        "Contribution à l'amélioration de la qualité, de la cohérence et de la disponibilité des données.",
        'Collaboration avec des partenaires humanitaires et de développement.',
      ],
    },
    {
      id: 'verditra',
      company: 'Verditra SARLU',
      role: 'Assistant aux Opérations / ICT Officer',
      location: 'Ituri, Sud-Kivu, Kongo Central',
      period: 'Février 2022 – Janvier 2024',
      logoType: 'verditra',
      bullets: [
        'Participation au déploiement de solutions de gouvernance électronique et appui aux utilisateurs.',
        'Utilisation de QGIS pour le traçage et la délimitation de parcelles/habitations, calcul des superficies et croisement avec les données fiscales et administratives.',
        'Production de tableaux de bord et rapports analytiques avec Power BI, Qlik Sense et Tableau pour les gouvernements provinciaux.',
        'Appui aux équipes de terrain, formation des utilisateurs et remontée des besoins fonctionnels.',
        'Gestion de bases de données et support technique.',
      ],
    },
    {
      id: 'radio-maria',
      company: 'Radio Maria Bukavu',
      role: "Technicien d'antenne",
      period: '2021 – 2022',
      logoType: 'radiomaria',
      bullets: [
        'Maintenance informatique, support technique de diffusion et résolution de pannes.',
      ],
    },
  ],
  education: [
    {
      id: 'iuea-edu',
      year: '2021',
      institution: 'International University of East Africa (IUEA)',
      location: 'Ouganda',
      degree: 'Licence en Informatique (Computer Science)',
      logoType: 'iuea',
    },
  ],
  certifications: [
    {
      id: 'cert-google-ai',
      title: 'Google AI',
      provider: 'Spécialisation – Google',
      platform: 'Coursera',
      logoType: 'google',
      linkUrl: '#',
    },
    {
      id: 'cert-google-data',
      title: 'Google Data Analytics',
      provider: 'Google',
      platform: 'Coursera',
      logoType: 'google',
      linkUrl: '#',
    },
    {
      id: 'cert-qgis',
      title: 'Map Fast with QGIS',
      provider: 'Coursera',
      platform: 'Coursera',
      logoType: 'coursera',
      linkUrl: '#',
    },
    {
      id: 'cert-powerbi',
      title: 'Microsoft Power BI Data Analyst',
      provider: 'Microsoft',
      platform: 'Coursera',
      logoType: 'microsoft',
      linkUrl: '#',
    },
    {
      id: 'cert-kobo',
      title: 'Complete KoboToolbox Training Course',
      provider: 'Udemy',
      platform: 'Udemy',
      logoType: 'udemy',
      linkUrl: '#',
    },
    {
      id: 'cert-fcc',
      title: 'Responsive Web Design',
      provider: 'freeCodeCamp',
      platform: 'freeCodeCamp',
      logoType: 'freecodecamp',
      linkUrl: '#',
    },
    {
      id: 'cert-horizon',
      title: "Excel Avancé pour l'Analyse des Données",
      provider: 'Horizon Services Consulting, Goma',
      platform: 'Attestation – Horizon Services Consulting',
      logoType: 'horizon',
      linkUrl: '#',
    },
  ],
  references: [
    {
      id: 'ref-kitoko',
      name: 'Kitoko Bruno',
      role: 'Directeur pays, LM International',
      company: 'LM International',
      email: 'kitoko.bruno@lminternational.org',
      phone: '+243 995 462 548',
    },
    {
      id: 'ref-joseph',
      name: 'Joseph Baderha Kahunga',
      role: 'Branch Manager Sud-Kivu, Verditra Sarlu',
      company: 'Verditra Sarlu',
      email: 'joseph@egov-africa.org',
      phone: '+243 995 462 548',
    },
    {
      id: 'ref-chimene',
      name: 'Chimène Fatuma wa Saidi',
      role: 'Directrice des Opérations, Verditra Sarlu',
      company: 'Verditra Sarlu',
      email: 'chimene@egov-africa.org',
      phone: '+243 993 820 585',
    },
    {
      id: 'ref-jacques',
      name: 'Jacques Musumba',
      role: 'Coordonnateur, eGov Africa',
      company: 'eGov Africa',
      email: 'jacques@egov-africa.org',
      phone: '+243 992 641 674',
    },
  ],
  projects: [
    {
      id: 'cyclistic-q1-2024',
      title: 'Analyse des comportements des usagers : Projet Cyclistic',
      subtitle: 'Étude de cas Google Data Analytics — Stratégie de conversion marketing',
      period: 'Q1 2024',
      certificationContext: 'Certificat Professionnel Google Data Analytics',
      introduction:
        "Projet d'analyse de données réalisé dans le cadre du certificat Google Data Analytics. L'objectif était d'aider l'équipe marketing de Cyclistic à concevoir une stratégie de conversion pour transformer les usagers occasionnels (casual riders) en membres annuels (annual members).",
      approachSteps: [
        {
          number: 1,
          step: 'Ask',
          title: 'Poser la question métier',
          description:
            "Identifier et quantifier les différences d'usage et de comportement entre membres annuels et usagers occasionnels afin d'orienter les futures campagnes marketing.",
          tools: 'Business Understanding, KPI Definition',
        },
        {
          number: 2,
          step: 'Prepare',
          title: 'Préparer & Valider les données',
          description:
            'Collecte, vérification de la structure, de l’intégrité et de la conformité éthique des données brutes des trajets du premier trimestre (Q1 2024).',
          tools: 'Data Integrity, Licensing, CSV',
        },
        {
          number: 3,
          step: 'Process',
          title: 'Nettoyer & Structurer avec SQL',
          description:
            'Utilisation de SQL pour nettoyer les valeurs nulles, éliminer les trajets anormaux (durées négatives ou fausses courses de maintenance), filtrer et créer les dimensions temporelles (jour de la semaine, mois, heure).',
          tools: 'SQL, BigQuery, Data Cleaning',
        },
        {
          number: 4,
          step: 'Analyze',
          title: 'Analyser & Agréger les métriques',
          description:
            'Calcul des métriques clés (durée moyenne des trajets, volume par type de vélo, distribution par jour de la semaine) et identification des corrélations comportementales significatives.',
          tools: 'SQL Aggregations, Statistical Analysis',
        },
        {
          number: 5,
          step: 'Share',
          title: 'Visualiser via Tableau interactif',
          description:
            'Conception d’un tableau de bord interactif sur Tableau Public permettant de comparer dynamiquement les flux d’usage selon le type d’usager et le matériel.',
          tools: 'Tableau Public, Data Storytelling, Dashboards',
        },
        {
          number: 6,
          step: 'Act',
          title: 'Recommandations stratégiques marketing',
          description:
            'Formulation de plans d’actions concrets : formules d’adhésion ciblées pour les week-ends, notifications mobiles le vendredi et campagnes saisonnières au printemps.',
          tools: 'Actionable Insights, Growth Strategy',
        },
      ],
      keyFindings: [
        {
          group: 'Membres annuels (Members)',
          highlight: 'Trajets utilitaires courts & réguliers',
          details:
            'Privilégient des trajets d’environ 12 minutes, avec une forte concentration du lundi au vendredi aux heures de pointe, démontrant un usage quotidien domicile-travail (commute).',
          tag: 'Usage Travail & Quotidien',
        },
        {
          group: 'Usagers occasionnels (Casual)',
          highlight: 'Trajets récréatifs longs le week-end',
          details:
            'Effectuent des trajets en moyenne deux fois plus longs (~21 minutes), avec des pics massifs d’activité le samedi et le dimanche, suggérant un usage touristique et de loisirs.',
          tag: 'Usage Loisir & Week-end',
        },
        {
          group: 'Matériel utilisé',
          highlight: 'Préférence pour les vélos classiques & électriques',
          details:
            'Les vélos classiques représentent la majorité des volumes (>350K trajets), tandis que les vélos électriques sont plébiscités pour les moyennes distances.',
          tag: 'Flotte Vélo',
        },
      ],
      recommendations: [
        'Proposer un abonnement "Pass Week-end" ou "Flex-Member" spécialement calibré pour les usagers occasionnels.',
        'Activer des campagnes d’e-mailing et des notifications in-app le vendredi matin pour inciter à la souscription avant les pics du samedi.',
        'Mettre en place un programme de fidélité récompensant le temps d’utilisation cumulé et offrant des rabais sur l’adhésion annuelle.',
      ],
      kaggleUrl: 'https://lnkd.in/dN_Huavd',
      tableauUrl: 'https://lnkd.in/d3kDR2zm',
      githubUrl: 'https://github.com/RolandMihigo',
      tags: ['Data Analysis', 'SQL', 'Tableau', 'Google Data Analytics', 'Data Driven', 'Cyclistic', 'Kaggle', 'Data Science'],
    },
  ],
};
