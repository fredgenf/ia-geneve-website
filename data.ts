
import { BarChart, BrainCircuit, Bot, CodeXml, GanttChartSquare, Lightbulb, PieChart, Repeat, ServerCog, ShieldCheck, Target, Wrench, PackageCheck, MessageSquare, TrendingUp } from 'lucide-react';

export const services = [
  {
    title: "Développement de modèles d'IA",
    description: "Nous créons des modèles d'intelligence artificielle sur mesure, de la conception au déploiement, pour répondre précisément à vos défis métier.",
    icon: BrainCircuit,
    details: [
      "Analyse de vos données et définition des objectifs.",
      "Conception d'architectures de modèles (Deep Learning, Machine Learning).",
      "Entraînement, validation et optimisation des performances.",
      "Intégration du modèle dans vos systèmes existants."
    ],
  },
  {
    title: "Automatisation Intelligente des Processus",
    description: "Optimisez votre efficacité en automatisant les tâches répétitives et les flux de travail grâce à l'IA (RPA).",
    icon: Repeat,
    details: [
      "Analyse de vos processus actuels pour identifier les opportunités d'automatisation.",
      "Développement de robots logiciels pour la saisie de données, le traitement de factures, etc.",
      "Intégration de l'IA pour gérer des tâches plus complexes et non structurées.",
      "Suivi et optimisation des processus automatisés."
    ],
  },
    {
    title: "Analyse de Données et Business Intelligence",
    description: "Transformez vos données brutes en informations stratégiques pour prendre de meilleures décisions.",
    icon: PieChart,
    details: [
      "Création de tableaux de bord interactifs et de rapports personnalisés.",
      "Analyse prédictive pour anticiper les tendances du marché et les comportements clients.",
      "Segmentation de la clientèle et analyse de la valeur vie client (CLV).",
      "Mise en place d'une culture data-driven au sein de votre entreprise."
    ],
  },
  {
    title: "Chatbots et Agents Conversationnels",
    description: "Améliorez l'engagement client et réduisez la charge de votre support grâce à des assistants virtuels intelligents.",
    icon: Bot,
    details: [
      "Développement de chatbots pour le service client, la génération de leads ou le support interne.",
      "Intégration sur votre site web, vos applications mobiles ou vos réseaux sociaux.",
      "Configuration du traitement du langage naturel (NLP) pour des conversations fluides.",
      "Analyse des conversations pour améliorer continuellement l'expérience utilisateur."
    ],
  },
  {
    title: "Audit de solutions IA",
    description: "Évaluez l'efficacité, l'éthique et la sécurité de vos systèmes d'IA existants pour garantir leur conformité et leur performance optimale.",
    icon: ShieldCheck,
    details: [
      "Analyse des performances et de la précision des modèles.",
      "Évaluation des biais et de l'équité algorithmique.",
      "Audit de sécurité et de robustesse face aux attaques.",
      "Rapport de conformité (RGPD, AI Act) et plan d'action."
    ]
  },
  {
    title: "Maintenance",
    description: "Nous assurons la pérennité et l'évolution de vos modèles en production grâce à une maintenance proactive et des pratiques MLOps robustes.",
    icon: ServerCog,
    details: [
      "Monitoring continu des performances des modèles en production.",
      "Mise en place de pipelines de ré-entraînement automatique.",
      "Gestion du versionnage des données et des modèles.",
      "Optimisation des infrastructures pour l'inférence à grande échelle."
    ],
  }
];

export const caseStudies = [
  {
    slug: 'maintenance-predictive-industrie',
    title: "Maintenance prédictive pour le secteur industriel",
    client: "Industrie 4.0 SA",
    summary: "Réduction de 25% des pannes machines grâce à un modèle de prédiction des défaillances, diminuant les coûts et le temps d'arrêt.",
    image: {
      src: '/case-study-predictive-maintenance.png',
      hint: 'factory machine',
      width: 600,
      height: 400
    },
    challenge: {
      description: "Notre client, un leader de la machinerie industrielle, subissait des coûts élevés dus à des pannes imprévues et à une maintenance réactive. L'objectif était d'anticiper les défaillances pour planifier les interventions et économiser du temps et de l'argent.",
      icon: Target,
    },
    solution: {
      description: "Nous avons développé un modèle de Machine Learning basé sur les données des capteurs (température, vibration, etc.). Le modèle prédit la probabilité d'une panne dans les 7 prochains jours, permettant aux équipes de maintenance d'intervenir de manière proactive, optimisant l'allocation des ressources.",
      icon: Lightbulb,
    },
    results: {
      description: "Le déploiement de la solution a conduit à des améliorations significatives et des économies substantielles en seulement 6 mois.",
      icon: BarChart,
      metrics: [
        { label: "Baisse des coûts de maintenance", value: 20, unit: "%" },
        { label: "Réduction des temps d'arrêt", value: 30, unit: "%" },
        { label: "Économie annuelle estimée", value: 120, unit: " k€" },
      ],
      chartData: [
        { month: 'Jan', 'Coûts (k€)': 120 },
        { month: 'Fév', 'Coûts (k€)': 110 },
        { month: 'Mar', 'Coûts (k€)': 112 },
        { month: 'Avr', 'Coûts (k€)': 95 },
        { month: 'Mai', 'Coûts (k€)': 80 },
        { month: 'Juin', 'Coûts (k€)': 75 },
      ]
    }
  },
  {
    slug: 'prediction-churn-telecom',
    title: "Prédiction du churn pour un opérateur télécom",
    client: "ConnectPlus",
    summary: "Identification des clients à risque de résiliation, menant à une baisse de 10% du taux de churn et à une augmentation de la rétention client.",
    image: {
      src: 'https://images.unsplash.com/photo-1728044849277-9cb3cd94e729?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxyZXRhaWwlMjBhbmFseXRpY3N8ZW58MHx8fHwxNzYxMzgwMjgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      hint: 'retail analytics',
      width: 600,
      height: 400
    },
    challenge: {
      description: "Un opérateur télécom faisait face à une attrition (churn) de sa base client élevée et coûteuse. Il était difficile d'identifier en amont les clients susceptibles de partir pour leur proposer des offres de rétention ciblées et rentables.",
      icon: Target,
    },
    solution: {
      description: "Nous avons construit un modèle de classification qui calcule un score de churn pour chaque client, basé sur son historique d'utilisation et ses interactions. Les équipes marketing ont ainsi pu cibler les clients les plus à risque avec des campagnes de rétention automatisées et personnalisées.",
      icon: Lightbulb,
    },
    results: {
      description: "La campagne de rétention ciblée a permis de stabiliser la base client et d'augmenter le chiffre d'affaires.",
      icon: BarChart,
      metrics: [
        { label: "Baisse du taux de churn", value: 10, unit: "%" },
        { label: "ROI de la campagne de rétention", value: 300, unit: "%" },
        { label: "Augmentation de la valeur vie client", value: 15, unit: "%" },
      ],
      chartData: [
        { quarter: 'T1', 'Taux de Churn (%)': 4.5 },
        { quarter: 'T2', 'Taux de Churn (%)': 4.7 },
        { quarter: 'T3', 'Taux de Churn (%)': 4.2 },
        { quarter: 'T4', 'Taux de Churn (%)': 4.1 },
      ]
    }
  },
  {
    slug: 'optimisation-logistique-ecommerce',
    title: "Optimisation de la logistique pour une PME e-commerce",
    client: "SwissGourmet Express",
    summary: "Réduction des coûts de livraison de 15% et du temps de préparation de 20% grâce à l'optimisation des tournées et des stocks.",
    image: {
      src: '/case-study-logistics.png',
      hint: 'warehouse package',
      width: 600,
      height: 400
    },
    challenge: {
      description: "Une PME en forte croissance dans l'alimentaire faisait face à des coûts logistiques croissants et des retards de livraison. La gestion manuelle des tournées et des stocks devenait un goulet d'étranglement, impactant la rentabilité.",
      icon: Target,
    },
    solution: {
      description: "Nous avons mis en place un algorithme d'optimisation des tournées de livraison qui prend en compte le trafic en temps réel, les fenêtres de livraison et la capacité des véhicules. Un second modèle de prévision de la demande a permis d'optimiser les niveaux de stock.",
      icon: Lightbulb,
    },
    results: {
      description: "L'automatisation de la planification logistique a généré des gains immédiats de temps et d'argent.",
      icon: PackageCheck,
      metrics: [
        { label: "Réduction des coûts de livraison", value: 15, unit: "%" },
        { label: "Diminution du temps de préparation", value: 20, unit: "%" },
        { label: "Amélioration de la satisfaction client", value: 25, unit: "%" },
      ],
      chartData: [
        { month: 'Jan', 'Coût par livraison (€)': 8.5 },
        { month: 'Fév', 'Coût par livraison (€)': 8.2 },
        { month: 'Mar', 'Coût par livraison (€)': 7.8 },
        { month: 'Avr', 'Coût par livraison (€)': 7.4 },
        { month: 'Mai', 'Coût par livraison (€)': 7.2 },
        { month: 'Juin', 'Coût par livraison (€)': 7.1 },
      ]
    }
  },
  {
    slug: 'chatbot-support-client-assurance',
    title: "Automatisation du support pour une assurance",
    client: "AssurPME",
    summary: "Un chatbot a permis de traiter 40% des demandes de support client, libérant du temps pour les agents et augmentant la satisfaction.",
    image: {
      src: '/case-study-chatbot.png',
      hint: 'chatbot interface',
      width: 600,
      height: 400
    },
    challenge: {
      description: "L'équipe de support client était submergée par des questions récurrentes à faible valeur ajoutée (suivi de dossier, informations de base). Le temps d'attente augmentait, et le personnel qualifié passait trop de temps sur des tâches répétitives.",
      icon: Target,
    },
    solution: {
      description: "Nous avons développé et entraîné un agent conversationnel (chatbot) capable de répondre 24/7 aux questions fréquentes, de guider les utilisateurs dans leurs démarches simples et de transmettre les cas complexes à un agent humain avec tout le contexte nécessaire.",
      icon: Lightbulb,
    },
    results: {
      description: "Le chatbot a transformé le service client, offrant un meilleur service pour un coût inférieur.",
      icon: MessageSquare,
      metrics: [
        { label: "Taux de résolution automatique", value: 40, unit: "%" },
        { label: "Temps de réponse moyen divisé par", value: 10, unit: "" },
        { label: "Augmentation de la productivité des agents", value: 30, unit: "%" },
      ],
      chartData: [
        { month: 'Jan', 'Tickets traités par IA': 500 },
        { month: 'Fév', 'Tickets traités par IA': 800 },
        { month: 'Mar', 'Tickets traités par IA': 1200 },
        { month: 'Avr', 'Tickets traités par IA': 1800 },
        { month: 'Mai', 'Tickets traités par IA': 2500 },
        { month: 'Juin', 'Tickets traités par IA': 3200 },
      ]
    }
  },
  {
    slug: 'prevision-ventes-distributeur',
    title: "Prévision des ventes pour un distributeur B2B",
    client: "DistriPro",
    summary: "Mise en place d'un modèle de prévision des ventes réduisant les ruptures de stock de 30% et les surstocks de 25%.",
    image: {
      src: '/case-study-sales.png',
      hint: 'sales dashboard',
      width: 600,
      height: 400
    },
    challenge: {
      description: "Le client, un distributeur de matériel professionnel, peinait à anticiper la demande. Cela entraînait soit des ruptures de stock coûteuses (ventes manquées), soit des surstocks immobilisant la trésorerie.",
      icon: Target,
    },
    solution: {
      description: "En analysant l'historique des ventes, la saisonnalité et des facteurs externes (tendances du marché), nous avons créé un modèle de série temporelle pour prédire la demande de chaque catégorie de produit sur les 3 prochains mois. Le système génère des recommandations de commande automatiques.",
      icon: Lightbulb,
    },
    results: {
      description: "La prévision des ventes a permis une gestion des stocks beaucoup plus fine et rentable.",
      icon: TrendingUp,
      metrics: [
        { label: "Réduction des ruptures de stock", value: 30, unit: "%" },
        { label: "Baisse du surstock", value: 25, unit: "%" },
        { label: "Amélioration de la trésorerie", value: 15, unit: "%" },
      ],
      chartData: [
        { quarter: 'T1 2023', 'Précision du forecast (%)': 75 },
        { quarter: 'T2 2023', 'Précision du forecast (%)': 78 },
        { quarter: 'T3 2023 (Post-IA)', 'Précision du forecast (%)': 92 },
        { quarter: 'T4 2023', 'Précision du forecast (%)': 94 },
      ]
    }
  },
];

    