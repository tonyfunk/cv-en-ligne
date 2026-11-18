// ─────────────────────────────────────────────────────────────
//  All CV content lives here. Edit this file to update the site.
//  Every user-facing string has a French (fr) and English (en) version.
// ─────────────────────────────────────────────────────────────

export type Lang = "fr" | "en";
export type T = Record<Lang, string>;

/** Pick the right language from a translated value (plain strings pass through). */
export const t = (v: string | T, lang: Lang): string => (typeof v === "string" ? v : v[lang]);

export const profile = {
  name: "Antoine Lebeau",
  photo: "/antoine.jpg",
  photoCredit: "Max Gozy",
  location: { fr: "Paris, France", en: "Paris, France" } as T,
  role: { fr: "Account Executive · SaaS B2B", en: "Account Executive · B2B SaaS" } as T,
  available: {
    fr: "Ouvert aux opportunités SaaS B2B",
    en: "Open to B2B SaaS opportunities",
  } as T,
  headline: {
    fr: "Je vends du SaaS de bout en bout — et je construis les playbooks qui aident les équipes à faire pareil.",
    en: "I sell SaaS end to end — and build the playbooks that help teams do the same.",
  } as T,
  summary: {
    fr: "Plus de 10 ans dans la vente, entre restauration, SaaS et entrepreneuriat. Premier Account Executive Full Cycle EMEA chez Lightspeed, n°1 en France sur FY26. Je combine une connaissance terrain du secteur hospitality avec un goût prononcé pour l'enablement : onboarding, process et outils qui font gagner les commerciaux.",
    en: "10+ years in sales across hospitality, SaaS and entrepreneurship. First EMEA Full Cycle Account Executive at Lightspeed and #1 in France for FY26. I pair hands-on hospitality expertise with a real taste for enablement: onboarding, processes and tooling that make reps win.",
  } as T,
};

// Leave a value empty ("") to hide that button.
export const contact = {
  email: "antoine.lebeau@gmail.com",
  linkedin: "https://www.linkedin.com/in/antoine-lebeau-34349153/",
  pdf: { fr: "/Antoine_Lebeau_CV_FR.pdf", en: "/Antoine_Lebeau_CV_EN.pdf" } as T,
};

export const stats: { value: string; label: T }[] = [
  { value: "#1", label: { fr: "AE Full Cycle France · FY26", en: "Full Cycle AE in France · FY26" } },
  { value: "Top 3", label: { fr: "AE Full Cycle EMEA · FY26", en: "Full Cycle AE in EMEA · FY26" } },
  { value: "10+", label: { fr: "années dans la vente", en: "years in sales" } },
  { value: "FR · EN", label: { fr: "bilingue", en: "bilingual" } },
];

export type Role = {
  title: T;
  dates: T;
  bullets?: { fr: string[]; en: string[] };
};

export type Job = {
  company: string | T;
  logo: string; // short monogram shown in the timeline
  location: T;
  tags?: string[];
  roles: Role[];
  current?: boolean;
};

const PARIS: T = { fr: "Paris, France", en: "Paris, France" };

export const experience: Job[] = [
  {
    company: "Lightspeed",
    logo: "LS",
    location: PARIS,
    current: true,
    tags: ["Inbound", "Full Cycle", "Hospitality", "Multi-site"],
    roles: [
      {
        title: { fr: "Account Executive · Inbound & Full Cycle", en: "Account Executive · Inbound & Full Cycle" },
        dates: { fr: "Mai 2025 — Aujourd'hui", en: "May 2025 — Present" },
        bullets: {
          fr: [
            "**N°1 AE Full Cycle en France et Top 3 EMEA sur FY26** — closing de deals multi-sites complexes, dont un restaurant 2 étoiles Michelin (1 K€ MRR) et un groupe de 4 établissements (4 K€ MRR).",
            "**Premier AE Full Cycle EMEA** : construction des process from scratch, qui ont servi de base au playbook adopté par toute l'équipe FC.",
            "Buddy de référence des nouveaux arrivants : coaching d'onboarding et feedback structuré pour améliorer les process admin du département.",
            "Early adopter et champion interne des nouveaux outils (Genesys, Nooks, FC Lists), reconnu par le management sur les équipes FC, AE, FSS et OB.",
          ],
          en: [
            "**#1 Full Cycle AE in France and Top 3 in EMEA for FY26** — closing complex multi-site deals, including a 2-Michelin-star restaurant (€1K MRR) and a 4-venue hospitality group (€4K MRR).",
            "**First Full Cycle AE in EMEA**: built the processes from the ground up, which became the playbook adopted across the FC team.",
            "Go-to buddy for new joiners: informal onboarding coaching and structured feedback that improved the department's admin processes.",
            "Early adopter and internal champion for new sales tools (Genesys, Nooks, FC Lists), recognised by management across FC, AE, FSS and OB teams.",
          ],
        },
      },
    ],
  },
  {
    company: "Dogours",
    logo: "DG",
    location: PARIS,
    current: true,
    tags: ["0 → 1", "Go-to-market", "Fundraising"],
    roles: [
      {
        title: { fr: "Co-fondateur", en: "Co-Founder" },
        dates: { fr: "Juin 2024 — Aujourd'hui", en: "Jun 2024 — Present" },
        bullets: {
          fr: [
            "Conception et exécution de la stratégie commerciale : opportunités de croissance, positionnement marché, partenariats.",
            "Rédaction des dossiers d'incubateur et de financement BPI France — soutien institutionnel obtenu grâce à un business case solide.",
            "Développement du produit de l'idée au lancement, dont une application web répondant à des besoins marché validés.",
          ],
          en: [
            "Designed and ran the commercial strategy: growth opportunities, market positioning and partnerships.",
            "Wrote the incubator and BPI France funding applications — secured institutional backing through a rigorous business case.",
            "Took the product from concept to launch, including a web app built around validated market needs.",
          ],
        },
      },
    ],
  },
  {
    company: { fr: "Bootcamp développement web", en: "Web development bootcamp" },
    logo: "</>",
    location: PARIS,
    tags: ["JavaScript", "Ruby on Rails", "HTML / CSS"],
    roles: [
      {
        title: { fr: "Formation intensive en développement web", en: "Intensive web development bootcamp" },
        dates: { fr: "Janv. 2024 — Mai 2024", en: "Jan 2024 — May 2024" },
        bullets: {
          fr: [
            "Pause volontaire pour apprendre à construire des produits : JavaScript, Ruby on Rails, HTML/CSS, sur des projets concrets en équipe.",
            "Résultat : je parle le même langage que les équipes produit et tech de mes clients.",
          ],
          en: [
            "Deliberate career break to learn how products are built: JavaScript, Ruby on Rails, HTML/CSS, through hands-on team projects.",
            "Outcome: I speak the same language as my customers' product and engineering teams.",
          ],
        },
      },
    ],
  },
  {
    company: "Masteos",
    logo: "MS",
    location: PARIS,
    tags: ["International", "Proptech", "Enablement"],
    roles: [
      {
        title: { fr: "International Account Executive", en: "International Account Executive" },
        dates: { fr: "Janv. 2022 — Déc. 2023", en: "Jan 2022 — Dec 2023" },
        bullets: {
          fr: [
            "Gestion d'un pipeline international de clients investisseurs immobiliers sur plusieurs territoires européens.",
            "Création de la base de connaissances Notion de l'équipe sales : hub d'onboarding centralisé (process, traitement des objections, frameworks de deal).",
            "Contribution à la formation des salariés sur les process et outils de vente.",
          ],
          en: [
            "Managed an international pipeline of real-estate investment clients across several European markets.",
            "Built the sales team's Notion knowledge base: a central onboarding hub with processes, objection-handling guides and deal frameworks.",
            "Contributed to formal employee training, upskilling peers on sales processes and tools.",
          ],
        },
      },
    ],
  },
  {
    company: "Apple",
    logo: "AP",
    location: { fr: "Irlande", en: "Ireland" },
    tags: ["EMEA", "Training", "Customer experience"],
    roles: [
      {
        title: { fr: "EMEA Management Representative", en: "EMEA Management Representative" },
        dates: { fr: "Janv. 2021 — Janv. 2022", en: "Jan 2021 — Jan 2022" },
        bullets: {
          fr: [
            "Support des opérations de management EMEA et des programmes de formation des salariés.",
            "Premier point de contact pour l'onboarding des nouvelles recrues — choisi systématiquement comme buddy.",
          ],
          en: [
            "Supported EMEA management operations and employee training programmes across the region.",
            "First point of contact for onboarding new hires — consistently picked as buddy.",
          ],
        },
      },
      {
        title: { fr: "Customer Service Specialist", en: "Customer Service Specialist" },
        dates: { fr: "Août 2020 — Janv. 2021", en: "Aug 2020 — Jan 2021" },
        bullets: {
          fr: ["Expérience client premium, expertise produit et conversations de vente consultative."],
          en: ["Delivered a premium customer experience, building product expertise and consultative sales skills."],
        },
      },
    ],
  },
  {
    company: "Le Petit Pois",
    logo: "PP",
    location: { fr: "Galway, Irlande", en: "Galway, Ireland" },
    tags: ["P&L", "Management", "Hospitality"],
    roles: [
      {
        title: { fr: "General Manager", en: "General Manager" },
        dates: { fr: "Juin 2015 — Août 2020", en: "Jun 2015 — Aug 2020" },
        bullets: {
          fr: [
            "Pilotage de toute l'activité commerciale et opérationnelle d'un établissement très fréquenté — exactement le quotidien des clients restaurateurs que j'accompagne aujourd'hui.",
            "Recrutement, onboarding et formation d'une équipe de 10–12 personnes ; création des programmes de formation et des standards de performance.",
            "Responsable des ventes, des partenariats fournisseurs et du P&L.",
          ],
          en: [
            "Ran all commercial and operational activity for a busy venue — the exact day-to-day of the restaurant owners I sell to today.",
            "Recruited, onboarded and trained a 10–12 person team; designed training programmes and performance standards.",
            "Owned sales, supplier partnerships and the P&L.",
          ],
        },
      },
    ],
  },
  {
    company: "Homeloc",
    logo: "HL",
    location: PARIS,
    tags: ["Web", "Project management"],
    roles: [
      {
        title: { fr: "Chef de projet web", en: "Web Project Manager" },
        dates: { fr: "Janv. 2013 — Sept. 2014", en: "Jan 2013 — Sep 2014" },
        bullets: {
          fr: ["Pilotage de projets web avec des équipes transverses et des clients, dans les délais et le périmètre."],
          en: ["Delivered web projects with cross-functional teams and client stakeholders, on time and in scope."],
        },
      },
    ],
  },
];

export const skills: { title: T; items: string[] }[] = [
  {
    title: { fr: "Vente", en: "Sales" },
    items: ["Full-cycle SaaS", "Inbound", "Discovery", "Multi-site deals", "Closing", "Pipeline management"],
  },
  {
    title: { fr: "Sales tech", en: "Sales tech" },
    items: ["Salesforce", "Outreach", "Nooks", "Genesys", "Notion"],
  },
  {
    title: { fr: "Enablement", en: "Enablement" },
    items: ["Onboarding & buddy", "Playbooks", "Knowledge base", "Training", "Process design"],
  },
  {
    title: { fr: "Tech & produit", en: "Tech & product" },
    items: ["JavaScript", "Ruby on Rails", "HTML / CSS", "Product launch"],
  },
];

export const education = [
  {
    school: "EDHEC Business School",
    degree: { fr: "Bachelor of Business Administration (BBA)", en: "Bachelor of Business Administration (BBA)" } as T,
  },
];

export const languages: { name: T; level: T }[] = [
  { name: { fr: "Français", en: "French" }, level: { fr: "Natif", en: "Native" } },
  { name: { fr: "Anglais", en: "English" }, level: { fr: "Bilingue", en: "Fluent" } },
];

// UI labels
export const ui = {
  nav: {
    experience: { fr: "Expérience", en: "Experience" },
    skills: { fr: "Compétences", en: "Skills" },
    contact: { fr: "Contact", en: "Contact" },
  },
  downloadCv: { fr: "Télécharger le CV", en: "Download CV" },
  contactMe: { fr: "Me contacter", en: "Get in touch" },
  experienceTitle: { fr: "Expérience", en: "Experience" },
  experienceKicker: { fr: "Parcours", en: "Track record" },
  skillsTitle: { fr: "Compétences", en: "Skills" },
  skillsKicker: { fr: "Boîte à outils", en: "Toolkit" },
  educationTitle: { fr: "Formation", en: "Education" },
  languagesTitle: { fr: "Langues", en: "Languages" },
  contactTitle: {
    fr: "Vous recrutez un AE qui fait aussi grandir l'équipe ?",
    en: "Hiring an AE who also levels up the team?",
  },
  contactText: {
    fr: "Je suis à l'écoute d'opportunités en SaaS B2B — AE, Senior AE ou Sales Enablement. Parlons-en.",
    en: "I'm open to B2B SaaS roles — AE, Senior AE or Sales Enablement. Let's talk.",
  },
  current: { fr: "En poste", en: "Current" },
  photoBy: { fr: "Photo", en: "Photo" },
  switchLang: { fr: "EN", en: "FR" },
  switchLangLabel: { fr: "View in English", en: "Voir en français" },
} satisfies Record<string, T | Record<string, T>>;
