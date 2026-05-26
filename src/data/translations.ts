export type Language = 'fr' | 'en';

type Bilingual = Record<Language, string>;

export interface ExperienceItem {
  title: Bilingual;
  company: string;
  period: Bilingual;
  location: Bilingual;
  description: Bilingual;
  projects: Array<{
    name: Bilingual;
    achievements: Bilingual[];
  }>;
}

export interface ProjectItem {
  title: string;
  subtitle: Bilingual;
  description: Bilingual;
  image: string;
  technologies: string[];
  features: Bilingual[];
  link: string;
  category: Bilingual;
  status: Bilingual;
  year: string;
  team: Bilingual;
}

export interface EducationItem {
  degree: Bilingual;
  institution: string;
  period: string;
}

export const translations = {
  fr: {
    // Header
    home: 'Accueil',
    skills: 'Compétences',
    experience: 'Expérience',
    projects: 'Projets',
    education: 'Formation',
    contact: 'Contact',

    // Hero
    heroEyebrow: 'Portfolio — 2025',
    heroIntro: 'Ingénieur Informatique & Analyste Programmeur',
    heroLead:
      'Je conçois et développe des plateformes web sur mesure pour des institutions, des entreprises et des organisations en Afrique de l’Ouest.',
    heroSpecialization: 'Spécialisé en gestion de projet IT, génie logiciel et développement web.',
    heroAvailability: 'Disponible pour de nouveaux projets',
    heroLocation: 'Lomé, Togo',
    seeWork: 'Voir les projets',
    getInTouch: 'Me contacter',

    // Sections — eyebrows
    eyebrowSkills: 'Chap. 01 — Compétences',
    eyebrowExperience: 'Chap. 02 — Parcours',
    eyebrowProjects: 'Chap. 03 — Réalisations',
    eyebrowEducation: 'Chap. 04 — Formation',
    eyebrowContact: 'Chap. 05 — Contact',

    // Skills
    skillsTitle: 'Ce que je sais faire',
    skillsLead:
      'Trois domaines de pratique qui s’articulent autour d’une même exigence : livrer des produits utilisables, maintenables et sobres.',
    projectManagementIT: 'Gestion de projet IT',
    softwareEngineeringTitle: 'Génie logiciel',
    webDevelopmentTitle: 'Développement web',
    statsProjects: 'Projets livrés',
    statsTech: 'Technologies',
    statsClients: 'Clients & partenaires',
    statsYears: 'Années de pratique',

    // Experience
    experienceTitle: 'Expérience professionnelle',
    experienceLead:
      'Trois années de pratique entre freelance, agence et stage — toujours sur des projets à fort enjeu institutionnel.',
    keyDeliverables: 'Livrables clés',

    // Projects
    projectsTitle: 'Quelques projets publics',
    projectsLead:
      'Une sélection de plateformes en production, conçues en équipe ou en autonomie, pour des structures togolaises et burkinabées.',
    visitSite: 'Visiter le site',
    techStack: 'Stack technique',
    features: 'Fonctionnalités',
    role: 'Rôle',

    // Education
    educationTitle: 'Formation & langues',
    languagesTitle: 'Langues',
    french: 'Français',
    english: 'Anglais',
    languageNative: 'Langue officielle',
    languageIntermediate: 'Niveau intermédiaire',

    // Contact
    contactTitle: 'Parlons de votre projet',
    contactLead:
      'Pour une mission, une collaboration ou un simple échange — écrivez-moi, je réponds sous 48 h.',
    contactQualities: 'Qualités professionnelles',
    qPrecision: 'Rigueur',
    qAdaptable: 'Adaptabilité',
    qInnovative: 'Innovation',
    qLeadership: 'Leadership',
    qProblemSolving: 'Résolution',
    qExcellence: 'Excellence',

    formName: 'Nom',
    formNamePlaceholder: 'Votre nom complet',
    formEmail: 'Email',
    formEmailPlaceholder: 'votre@email.com',
    formSubject: 'Sujet',
    formSubjectPlaceholder: 'L’objet de votre message',
    formMessage: 'Message',
    formMessagePlaceholder: 'Décrivez votre projet, votre demande ou votre idée…',
    formSend: 'Envoyer le message',
    formSending: 'Envoi en cours…',

    toastSuccess: 'Message envoyé. Je vous réponds très vite.',
    toastErrorFields: 'Merci de remplir tous les champs.',
    toastErrorEmail: 'L’adresse email n’est pas valide.',
    toastErrorSend: 'L’envoi a échoué. Réessayez ou écrivez-moi directement par email.',
    toastNotConfigured: 'L’envoi n’est pas encore configuré. Écrivez-moi directement par email.',

    contactPhoneLabel: 'Téléphone',
    contactEmailLabel: 'Email',
    contactLocationLabel: 'Localisation',
    contactLocationValue: 'Lomé, Togo',

    // Footer
    backToTop: 'Haut de page',
    allRightsReserved: 'Tous droits réservés',
    designed: 'Conçu et développé à Lomé',
  },
  en: {
    home: 'Home',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    education: 'Education',
    contact: 'Contact',

    heroEyebrow: 'Portfolio — 2025',
    heroIntro: 'Software Engineer & Programmer Analyst',
    heroLead:
      'I design and build custom web platforms for institutions, companies and organisations across West Africa.',
    heroSpecialization: 'Specialised in IT project management, software engineering and web development.',
    heroAvailability: 'Available for new projects',
    heroLocation: 'Lomé, Togo',
    seeWork: 'See selected work',
    getInTouch: 'Get in touch',

    eyebrowSkills: 'Ch. 01 — Skills',
    eyebrowExperience: 'Ch. 02 — Career',
    eyebrowProjects: 'Ch. 03 — Selected work',
    eyebrowEducation: 'Ch. 04 — Education',
    eyebrowContact: 'Ch. 05 — Contact',

    skillsTitle: 'What I do',
    skillsLead:
      'Three areas of practice that share the same requirement: ship usable, maintainable, sober products.',
    projectManagementIT: 'IT project management',
    softwareEngineeringTitle: 'Software engineering',
    webDevelopmentTitle: 'Web development',
    statsProjects: 'Shipped projects',
    statsTech: 'Technologies',
    statsClients: 'Clients & partners',
    statsYears: 'Years of practice',

    experienceTitle: 'Professional experience',
    experienceLead:
      'Three years of practice spanning freelance, agency and internship — always on projects with high institutional stakes.',
    keyDeliverables: 'Key deliverables',

    projectsTitle: 'Selected public work',
    projectsLead:
      'A selection of production platforms, built either in a team or solo, for organisations in Togo and Burkina Faso.',
    visitSite: 'Visit the site',
    techStack: 'Tech stack',
    features: 'Features',
    role: 'Role',

    educationTitle: 'Education & languages',
    languagesTitle: 'Languages',
    french: 'French',
    english: 'English',
    languageNative: 'Official language',
    languageIntermediate: 'Intermediate level',

    contactTitle: 'Let’s talk about your project',
    contactLead:
      'For a contract, a collaboration or a simple chat — drop me a line, I reply within 48 hours.',
    contactQualities: 'Professional qualities',
    qPrecision: 'Precision',
    qAdaptable: 'Adaptability',
    qInnovative: 'Innovation',
    qLeadership: 'Leadership',
    qProblemSolving: 'Problem solving',
    qExcellence: 'Excellence',

    formName: 'Name',
    formNamePlaceholder: 'Your full name',
    formEmail: 'Email',
    formEmailPlaceholder: 'your@email.com',
    formSubject: 'Subject',
    formSubjectPlaceholder: 'What is this about?',
    formMessage: 'Message',
    formMessagePlaceholder: 'Tell me about your project, request or idea…',
    formSend: 'Send message',
    formSending: 'Sending…',

    toastSuccess: 'Message sent. I’ll get back to you shortly.',
    toastErrorFields: 'Please fill in every field.',
    toastErrorEmail: 'This email address looks invalid.',
    toastErrorSend: 'Sending failed. Try again or email me directly.',
    toastNotConfigured: 'Email sending is not configured yet. Please email me directly.',

    contactPhoneLabel: 'Phone',
    contactEmailLabel: 'Email',
    contactLocationLabel: 'Location',
    contactLocationValue: 'Lomé, Togo',

    backToTop: 'Back to top',
    allRightsReserved: 'All rights reserved',
    designed: 'Designed and built in Lomé',
  },
} as const;

export type TranslationKey = keyof (typeof translations)['fr'];

// — Données bilingues —

export const skillCategories: Array<{
  titleKey: 'projectManagementIT' | 'softwareEngineeringTitle' | 'webDevelopmentTitle';
  skills: Bilingual[];
}> = [
  {
    titleKey: 'projectManagementIT',
    skills: [
      { fr: 'Méthodologies agiles', en: 'Agile methodologies' },
      { fr: 'Planification de projets', en: 'Project planning' },
      { fr: 'Suivi & évaluation', en: 'Monitoring & evaluation' },
      { fr: 'Cartographie des échéances', en: 'Milestone mapping' },
      { fr: 'Évaluation des risques', en: 'Risk assessment' },
      { fr: 'Gestion du budget', en: 'Budget management' },
      { fr: 'Communication parties prenantes', en: 'Stakeholder communication' },
    ],
  },
  {
    titleKey: 'softwareEngineeringTitle',
    skills: [
      { fr: 'PHP', en: 'PHP' },
      { fr: 'React', en: 'React' },
      { fr: 'Nuxt.js', en: 'Nuxt.js' },
      { fr: 'Architecture logicielle', en: 'Software architecture' },
      { fr: 'Développement d’API', en: 'API development' },
      { fr: 'Test & débogage', en: 'Testing & debugging' },
      { fr: 'Intégration continue', en: 'Continuous integration' },
    ],
  },
  {
    titleKey: 'webDevelopmentTitle',
    skills: [
      { fr: 'Laravel', en: 'Laravel' },
      { fr: 'JavaScript', en: 'JavaScript' },
      { fr: 'Tailwind CSS', en: 'Tailwind CSS' },
      { fr: 'Nuxt.js', en: 'Nuxt.js' },
      { fr: 'Hébergement web', en: 'Web hosting' },
      { fr: 'Maintenance de sites', en: 'Site maintenance' },
      { fr: 'Responsive design', en: 'Responsive design' },
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    title: {
      fr: 'Développeur Full Stack Web',
      en: 'Full Stack Web Developer',
    },
    company: 'Maleek-Gold (Freelance)',
    period: { fr: 'Mai 2025', en: 'May 2025' },
    location: { fr: 'Burkina Faso', en: 'Burkina Faso' },
    description: {
      fr: 'Conception et développement du site institutionnel de Maleek-Gold, agence burkinabée d’achat et d’investissement dans l’or.',
      en: 'Design and development of the institutional site for Maleek-Gold, a Burkinabé gold purchase and investment agency.',
    },
    projects: [
      {
        name: {
          fr: 'Plateforme d’intermédiation pour l’achat d’or au Burkina Faso',
          en: 'Gold purchase intermediation platform in Burkina Faso',
        },
        achievements: [
          { fr: 'Architecture de navigation claire et structurée', en: 'Clear and structured navigation' },
          { fr: 'Présentation détaillée des services', en: 'Detailed service presentation' },
          { fr: 'Mise en avant des preuves de légitimité', en: 'Legitimacy and trust signals' },
          { fr: 'Appels à l’action calibrés (CTA)', en: 'Calibrated calls to action' },
          { fr: 'Optimisation du contenu pour le SEO', en: 'SEO-optimised content' },
          { fr: 'Suivi du cours de l’or en temps réel', en: 'Real-time gold price tracking' },
        ],
      },
    ],
  },
  {
    title: {
      fr: 'Développeur Full Stack & Responsable du pilotage de projets',
      en: 'Full Stack Developer & Project Lead',
    },
    company: 'NEO START TECHNOLOGY',
    period: { fr: '2023 — aujourd’hui', en: '2023 — present' },
    location: {
      fr: 'Programme Schéma Directeur Départemental',
      en: 'Departmental Master Plan Programme',
    },
    description: {
      fr: 'Pilotage et développement de projets stratégiques pour des institutions togolaises et des organisations confessionnelles.',
      en: 'Leading and developing strategic projects for Togolese institutions and faith-based organisations.',
    },
    projects: [
      {
        name: {
          fr: 'Système informatisé de gestion du covoiturage — Impact Centre Chrétien (ICC)',
          en: 'Carpool management platform — Impact Centre Chrétien (ICC)',
        },
        achievements: [
          {
            fr: 'Gestion des événements et activités avec notifications Firebase',
            en: 'Event and activity management with Firebase notifications',
          },
          {
            fr: 'Gestion des familles d’impact et des départements',
            en: 'Management of impact families and departments',
          },
          {
            fr: 'Système de demande et validation des inscriptions',
            en: 'Registration request and validation system',
          },
          {
            fr: 'Gestion des STARS (Serviteurs Travaillant Activement pour le Royaume)',
            en: 'STARS management (active church servants)',
          },
          { fr: 'Tableaux de bord et reporting analytique', en: 'Dashboards and analytical reporting' },
        ],
      },
      {
        name: {
          fr: 'Système informatisé de ressources humaines — PHARMACOL',
          en: 'HR information system — PHARMACOL',
        },
        achievements: [
          {
            fr: 'Gestion du personnel avec historique depuis l’embauche',
            en: 'Staff management with full history from hire',
          },
          { fr: 'Calcul automatique des salaires et IRPP', en: 'Automatic payroll and income-tax calculation' },
          { fr: 'Bulletins de paie avec QR code d’authentification', en: 'Payslips with authentication QR code' },
          { fr: 'Système de demande et validation de congés', en: 'Leave request and approval system' },
          { fr: 'Tableaux de bord et reporting analytique', en: 'Dashboards and analytical reporting' },
        ],
      },
      {
        name: {
          fr: 'Site web ANGE-TOGO',
          en: 'ANGE-TOGO website',
        },
        achievements: [
          {
            fr: 'Développement du site de l’Agence Nationale de Gestion de l’Environnement',
            en: 'Development of the National Environment Management Agency website',
          },
          {
            fr: 'Participation au colloque de digitalisation des certificats de conformité',
            en: 'Participation in the compliance-certificate digitalisation symposium',
          },
          { fr: 'Collaboration avec ATD TOGO et SWITCH Maker', en: 'Collaboration with ATD TOGO and SWITCH Maker' },
          { fr: 'Tableaux de bord et reporting analytique', en: 'Dashboards and analytical reporting' },
        ],
      },
      {
        name: {
          fr: 'Plateforme académique IAI-TOGO',
          en: 'IAI-TOGO academic platform',
        },
        achievements: [
          { fr: 'Portail de gestion académique complet', en: 'Full academic management portal' },
          { fr: 'Gestion des candidatures en ligne', en: 'Online application management' },
          { fr: 'Système d’emploi du temps et gestion des notes', en: 'Timetable system and grade management' },
          { fr: 'Gestion de l’anonymat des évaluations', en: 'Anonymous grading workflow' },
          { fr: 'Tableaux de bord et reporting analytique', en: 'Dashboards and analytical reporting' },
        ],
      },
    ],
  },
  {
    title: {
      fr: 'Stagiaire — Génie Logiciel',
      en: 'Software Engineering Intern',
    },
    company: 'Port Autonome de Lomé',
    period: { fr: '2022', en: '2022' },
    location: { fr: 'Centre médico-social', en: 'Medical centre' },
    description: {
      fr: 'Digitalisation des activités médicales du centre médico-social du Port Autonome de Lomé.',
      en: 'Digitalisation of the medical activities at the Lomé Port medical centre.',
    },
    projects: [
      {
        name: {
          fr: 'Système de gestion médicale',
          en: 'Medical management system',
        },
        achievements: [
          { fr: 'Gestion complète des données patients', en: 'Complete patient-data management' },
          { fr: 'Système de rendez-vous avec notifications', en: 'Appointment system with notifications' },
          { fr: 'Traçabilité des diagnostics et traitements', en: 'Diagnosis and treatment traceability' },
          { fr: 'Génération de rapports médicaux complets', en: 'Generation of complete medical reports' },
          { fr: 'Gestion des analyses médicales', en: 'Lab-test management' },
        ],
      },
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: 'Maleek-Gold',
    subtitle: {
      fr: 'Intermédiation pour l’achat d’or — Burkina Faso',
      en: 'Gold purchase intermediation — Burkina Faso',
    },
    description: {
      fr: 'Site institutionnel de l’agence burkinabée Maleek-Gold, spécialisée dans l’achat et l’investissement dans l’or.',
      en: 'Institutional site for the Burkinabé agency Maleek-Gold, specialised in gold purchasing and investment.',
    },
    image: '/img/maleek-gold.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    features: [
      { fr: 'Navigation claire et structurée', en: 'Clear and structured navigation' },
      { fr: 'Présentation des services', en: 'Service presentation' },
      { fr: 'Preuves de légitimité et confiance', en: 'Legitimacy and trust signals' },
      { fr: 'Appels à l’action calibrés', en: 'Calibrated calls to action' },
      { fr: 'Contenu optimisé pour le SEO', en: 'SEO-optimised content' },
    ],
    link: 'https://maleekgold.com/',
    category: { fr: 'Site institutionnel', en: 'Institutional site' },
    status: { fr: 'En production', en: 'Live' },
    year: '2025',
    team: { fr: 'Freelance — full stack', en: 'Freelance — full stack' },
  },
  {
    title: 'ANGE-TOGO',
    subtitle: {
      fr: 'Agence Nationale de Gestion de l’Environnement',
      en: 'National Environment Management Agency',
    },
    description: {
      fr: 'Site officiel développé dans le cadre du colloque de digitalisation des certificats de conformité environnementale.',
      en: 'Official site built around the symposium on the digitalisation of environmental compliance certificates.',
    },
    image: '/img/ange.png',
    technologies: ['Nuxt.js', 'TypeScript', 'Tailwind CSS', 'Laravel'],
    features: [
      { fr: 'Certificats numériques', en: 'Digital certificates' },
      { fr: 'Interface d’administration', en: 'Admin back-office' },
      { fr: 'Authentification sécurisée', en: 'Secure authentication' },
      { fr: 'Tableau de bord analytique', en: 'Analytical dashboard' },
    ],
    link: 'https://ange.tg/',
    category: { fr: 'Site institutionnel', en: 'Institutional site' },
    status: { fr: 'En production', en: 'Live' },
    year: '2024 — 2025',
    team: { fr: 'Équipe NEO START TECHNOLOGY', en: 'NEO START TECHNOLOGY team' },
  },
  {
    title: 'ICC — Covoiturage',
    subtitle: {
      fr: 'Plateforme communautaire — Impact Centre Chrétien',
      en: 'Community platform — Impact Centre Chrétien',
    },
    description: {
      fr: 'Mise en relation entre les membres de l’église ICC pour faciliter le transport lors des activités et événements.',
      en: 'A platform connecting ICC church members to ease transport for activities and events.',
    },
    image: '/img/icc.png',
    technologies: ['Nuxt.js', 'Flutter', 'Dart', 'PHP', 'Laravel', 'MySQL', 'Tailwind', 'TypeScript'],
    features: [
      { fr: 'Covoiturage simplifié', en: 'Simplified carpooling' },
      { fr: 'Gestion des activités de l’église', en: 'Church-activity management' },
      { fr: 'Notes et évaluations', en: 'Ratings and reviews' },
      { fr: 'Tableau de bord administrateur', en: 'Admin dashboard' },
      { fr: 'Consultation et validation des demandes', en: 'Request review and approval' },
    ],
    link: 'https://covoiturageicctogo.org/',
    category: { fr: 'Plateforme communautaire', en: 'Community platform' },
    status: { fr: 'En production', en: 'Live' },
    year: '2024 — 2025',
    team: { fr: 'Équipe NEO START TECHNOLOGY', en: 'NEO START TECHNOLOGY team' },
  },
  {
    title: 'IAI-TOGO',
    subtitle: {
      fr: 'Institut Africain d’Informatique — Togo',
      en: 'African Institute of Computer Science — Togo',
    },
    description: {
      fr: 'Portail académique complet pour la gestion des étudiants, des candidatures, des emplois du temps et des évaluations.',
      en: 'Comprehensive academic portal for managing students, applications, timetables and assessments.',
    },
    image: '/img/iai.png',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'JavaScript'],
    features: [
      { fr: 'Candidatures en ligne', en: 'Online applications' },
      { fr: 'Emploi du temps dynamique', en: 'Dynamic timetable' },
      { fr: 'Gestion des notes et évaluations', en: 'Grade management' },
      { fr: 'Portail étudiant personnalisé', en: 'Personalised student portal' },
      { fr: 'Anonymat des évaluations', en: 'Anonymous grading' },
    ],
    link: 'https://new.iai-togo.tg/officiel',
    category: { fr: 'Plateforme éducative', en: 'Educational platform' },
    status: { fr: 'En production', en: 'Live' },
    year: '2023 — 2024',
    team: { fr: 'Équipe NEO START TECHNOLOGY', en: 'NEO START TECHNOLOGY team' },
  },
];

export const education: EducationItem[] = [
  {
    degree: { fr: 'Licence en Génie Logiciel', en: 'BSc in Software Engineering' },
    institution: 'Institut Africain d’Informatique — Togo',
    period: '2019 — 2022',
  },
  {
    degree: { fr: 'Baccalauréat', en: 'High school diploma' },
    institution: 'Lycée René Martine (RM)',
    period: '2016 — 2019',
  },
];
