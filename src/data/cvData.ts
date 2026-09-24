import { CVData } from '../types/cv';
import defaultPhoto from '../assets/images/roland_profile_portrait_1790244724489.jpg';

export const initialCVData: CVData = {
  fullName: 'Iragi Mihigo Roland',
  title: "Spécialiste en Gestion de l'Information, SIG & Analyse des Données",
  tags: ['SIG & Cartographie', 'KoboToolbox', 'Power BI & Dataviz', 'SQL & BigQuery', 'Analyse Humanitaire'],
  bannerQuote: 'Transformer les données complexes de terrain en décisions stratégiques et en actions humanitaires mesurables.',
  photoUrl: defaultPhoto,
  contact: {
    location: 'Katindo, Avenue de la Frontière\nGoma, Nord-Kivu, RDC',
    phone: '+243 992 641 674',
    email: 'rolandiragimihigo851@gmail.com',
    languagesSummary: 'Français (maternelle) | Swahili | Lingala | Anglais (courant)',
    linkedin: 'https://www.linkedin.com/in/roland-iragi-88675621b/?isSelfProfile=true',
    github: 'https://github.com/RolandMihigo',
    kaggle: 'https://www.kaggle.com/rolandiragi',
  },
  profile:
    "Expert en gestion de l'information (IM), analyse géospatiale (SIG) et modélisation de données, avec une expérience terrain confirmée dans le déploiement de solutions numériques en contextes de gouvernance, de santé publique et d'interventions humanitaires en RDC.\n\nMaîtrise complète du cycle de vie de la donnée : collecte mobile sécurisée (KoboToolbox/XLSForm), structuration et automatisation de bases de données (SQL, Access, MySQL), analyses spatiales multicritères (QGIS) et conception de tableaux de bord décisionnels interactifs (Power BI, Tableau, Excel Avancé).\n\nRompu à la coordination avec les partenaires internationaux (LM International, clusters humanitaires, divisions provinciales), à l'appui technique des équipes opérationnelles de terrain et à la gouvernance de la qualité, garantissant l'intégrité, la confidentialité et l'exploitation stratégique des données pour la prise de décision fondée sur les preuves.",
  skillCategories: [
    {
      id: 'info-analysis',
      title: "Gestion de l'Information & Analyse Décisionnelle",
      iconName: 'bar-chart',
      skills: [
        'Cycle complet : collecte, nettoyage, modélisation et valorisation',
        'Identification des tendances statistiques et définition des KPIs',
        'Élaboration de bulletins de situation (SitReps) et infographies',
        "Aide à la décision stratégique fondée sur les preuves (Evidence-Based)",
      ],
    },
    {
      id: 'sig',
      title: 'SIG & Cartographie Géospatiale',
      iconName: 'map-pin',
      skills: [
        'QGIS expert : numérisation vectorielle, géocodage, géoréférencement',
        "Cartographie thématique, analyses spatiales de densité et d'intervention",
        'Croisement de données géospatiales, fiscales et démographiques',
        'Conception de cartes communicantes aux standards cartographiques',
      ],
    },
    {
      id: 'data-collection',
      title: 'Collecte Mobile & Enquêtes Terrain',
      iconName: 'clipboard-list',
      skills: [
        'KoboToolbox / KoboCollect : conception avancée XLSForm',
        'Formulaires à logique conditionnelle, contraintes et calculs embarqués',
        'Supervision terrain, assurance qualité et nettoyage en temps réel',
        'Formation et encadrement méthodologique des enquêteurs',
      ],
    },
    {
      id: 'bi',
      title: 'Business Intelligence & Dataviz',
      iconName: 'pie-chart',
      skills: [
        'Microsoft Power BI : modélisation relationnelle, Power Query (ETL) et DAX',
        'Tableau Public & Desktop : dashboards interactifs et data storytelling',
        'Excel Avancé : fonctions matricielles (INDEX/XLOOKUP), TCD et scénarios',
        'Qlik Sense : tableaux de bord associatifs et suivi des métriques provinciales',
      ],
    },
    {
      id: 'databases',
      title: 'Bases de Données & Systèmes',
      iconName: 'database',
      skills: [
        'Requêtage SQL avancé, Google BigQuery, MySQL et Microsoft Access',
        'Modélisation conceptuelle, intégrité référentielle et normalisation',
        'Intégration de flux de données (ETL) et audits de cohérence',
        'Administration système, dépannage et maintenance opérationnelle',
      ],
    },
    {
      id: 'humanitarian',
      title: 'Secteur Humanitaire & Gouvernance',
      iconName: 'users',
      skills: [
        'Systèmes d’information sanitaire : CPN, couverture vaccinale, épidémiologie',
        'Protection des données sensibles et éthique humanitaire (VBG, protection)',
        'Appui aux coordinations provinciales, clusters et ONG (LM International)',
        'Gestion axée sur les résultats et redevabilité envers les bénéficiaires',
      ],
    },
  ],
  languages: [
    { code: 'FR', name: 'Français', level: 'langue maternelle' },
    { code: 'SW', name: 'Swahili', level: 'langue véhiculaire / bilingue' },
    { code: 'LN', name: 'Lingala', level: 'courant' },
    { code: 'EN', name: 'Anglais', level: 'professionnel courant (C1)' },
  ],
  interests: [
    { iconName: 'music', title: 'Musique Polyphonique', subtitle: '(piano, chant choral classique – Handel)' },
    { iconName: 'football', title: 'Football', subtitle: '(esprit d’équipe et tactique)' },
    { iconName: 'running', title: 'Course à pied & Jogging', subtitle: '(endurance et régularité)' },
  ],
  experiences: [
    {
      id: 'egov-africa',
      company: 'eGov Africa',
      companyType: 'Organisation Non Gouvernementale',
      role: 'Co-fondateur & Spécialiste des Données Humanitaires',
      period: '2024 – Présent',
      logoType: 'egov',
      bullets: [
        "Architecture et déploiement de solutions numériques de gestion de l'information pour le secteur de la santé publique et les acteurs d'urgence en RDC (avec l'appui de partenaires internationaux tels que LM International).",
        'Conception de formulaires XLSForm complexes sur KoboToolbox pour la collecte mobile (consultations prénatales CPN, suivi vaccinal, monitoring des violences basées sur le genre - VBG).',
        "Consolidation, contrôle qualité et traitement analytique de jeux de données massifs pour alimenter les rapports opérationnels, bulletins d'alerte et dashboards partenaires.",
        "Renforcement des capacités et encadrement technique des équipes et partenaires de terrain sur l'utilisation des solutions numériques et la protection des données sensibles.",
        "Mise en place de mécanismes rigoureux de validation et d'intégrité, assurant une disponibilité continue d'indicateurs fiables pour la prise de décision humanitaire.",
        'Coordination stratégique avec les clusters humanitaires, les divisions provinciales de la santé et les parties prenantes institutionnelles.',
      ],
    },
    {
      id: 'verditra',
      company: 'Verditra SARLU',
      companyType: 'Société de Services Numériques & Ingénierie',
      role: 'Assistant aux Opérations / ICT & GIS Officer',
      location: 'Ituri, Sud-Kivu, Kongo Central',
      period: 'Février 2022 – Janvier 2024',
      logoType: 'verditra',
      bullets: [
        'Coordination technique du déploiement de solutions de gouvernance électronique et de dématérialisation fiscale pour les régies provinciales (DGRNK, DGRPI, etc.).',
        'Expertise SIG sous QGIS : vectorisation, délimitation et calcul de superficie de plus de 10 000 parcelles et bâtis, couplés aux identifiants fiscaux et fonciers.',
        'Conception et alimentation de tableaux de bord analytiques dynamiques sous Power BI, Tableau et Qlik Sense pour le suivi des recettes publiques par les gouvernements provinciaux.',
        'Animation de sessions de formation et transfert de compétences auprès de plus de 100 agents et directeurs provinciaux.',
        'Supervision des bases de données relationnelles, optimisation des procédures d’intégration (ETL) et support technique de proximité.',
      ],
    },
    {
      id: 'radio-maria',
      company: 'Radio Maria Bukavu',
      companyType: 'Réseau International de Radiodiffusion',
      role: "Technicien d'Antenne & Support Systèmes",
      period: '2021 – 2022',
      logoType: 'radiomaria',
      bullets: [
        'Supervision technique des faisceaux hertziens d’émission et garantie de la continuité opérationnelle du signal de radiodiffusion.',
        'Maintenance préventive et curative du parc informatique, des consoles de mixage et des infrastructures réseau du studio.',
        'Résolution rapide des incidents d’antenne et assistance technique aux équipes de production.',
      ],
    },
  ],
  education: [
    {
      id: 'iuea-edu',
      year: '2021',
      institution: 'International University of East Africa (IUEA)',
      location: 'Kampala, Ouganda',
      degree: 'Licence en Informatique (Bachelor of Science in Computer Science)',
      logoType: 'iuea',
    },
  ],
  certifications: [
    {
      id: 'cert-google-ai',
      title: 'Google AI',
      provider: 'Spécialisation Intelligence Artificielle & Prompting',
      platform: 'Google / Coursera',
      logoType: 'google',
      linkUrl: 'https://www.coursera.org/account/accomplishments/specialization/N1CTVD3NBB3N',
    },
    {
      id: 'cert-google-data',
      title: 'Google Data Analytics',
      provider: 'Certificat Professionnel Analyse de Données',
      platform: 'Google / Coursera',
      logoType: 'google',
      linkUrl: 'https://www.coursera.org/account/accomplishments/specialization/3OV3SK8RZ0GD',
    },
    {
      id: 'cert-qgis',
      title: 'Map Fast with QGIS',
      provider: 'Système d’Information Géographique (SIG)',
      platform: 'Coursera Project Network',
      logoType: 'coursera',
      linkUrl: 'https://www.coursera.org/account/accomplishments/verify/D7P48O6YWYWU',
    },
    {
      id: 'cert-powerbi',
      title: 'Microsoft Power BI Data Analyst',
      provider: 'Modélisation, Mesures DAX & Business Intelligence (PL-300)',
      platform: 'Microsoft / Coursera',
      logoType: 'microsoft',
      linkUrl: 'https://www.coursera.org/account/accomplishments/verify/4E0XJ9TXPN5Y',
    },
    {
      id: 'cert-kobo',
      title: 'Complete KoboToolbox Training Course',
      provider: 'Collecte Mobile Avancée, XLSForm & Enquêtes Terrain',
      platform: 'Udemy',
      logoType: 'udemy',
      linkUrl: 'https://www.udemy.com/certificate/UC-ba561a46-5417-442b-9417-efdb6f330a5a/',
    },
    {
      id: 'cert-fcc',
      title: 'Responsive Web Design',
      provider: 'Développement Web, Architecture & Interfaces Réactives',
      platform: 'freeCodeCamp',
      logoType: 'freecodecamp',
      linkUrl: 'https://www.freecodecamp.org/certification/fccde1e0082-b8ff-462e-8534-fd9ff84b3794/responsive-web-design-v9',
    },
    {
      id: 'cert-horizon',
      title: "Excel Avancé pour l'Analyse des Données",
      provider: 'Modélisation, TCD & Fonctions Complexes',
      platform: 'Horizon Services Consulting, Goma',
      logoType: 'horizon',
      note: 'Formation certifiante sur site (Goma, RDC)',
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
