// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-bio",
          title: "bio",
          description: "Bio and research trajectory of Guido Uguzzoni — protein design, protein language models, fitness landscape inference, phage display and peptide design, machine learning for structural biology.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/bio/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications by Guido Uguzzoni on protein design, protein language models, fitness landscape inference, phage display, peptide design and machine learning for structural biology, grouped by year.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "news-new-manuscript-in-plos-computational-biology-inference-and-design-of-antibody-specificity-from-experiments-to-models-and-back",
          title: 'New manuscript in PLoS Computational Biology Inference and design of antibody specificity: From...',
          description: "",
          section: "News",},{id: "news-stage-m2-6-mois-mars-2025-laboratoire-biosciences-et-bioingénierie-pour-la-santé-irig-cea-grenoble-france",
          title: 'Stage M2 6 mois, mars 2025 Laboratoire Biosciences et bioingénierie pour la santé...',
          description: "",
          section: "News",},{id: "news-phd-offer-noise-modeling-and-machine-learning-for-protein-fitness-landscapes-application-to-multi-specific-antibody-design-etablissement-université-grenoble-alpes-école-doctorale-isce-ingénierie-pour-la-santé-la-cognition-et-l-environnement-spécialité-mbs-modèles-méthodes-et-algorithmes-en-biologie-santé-et-environnement-unité-de-recherche-bge-laboratoire-biosciences-et-bioingénierie-pour-la-santé-encadrement-de-la-thèse-christophe-battail-co-encadrant-guido-uguzzoni-jorge-fernandez-de-cossio-diaz-ipht-laboratoire-biosciences-et-bioingénierie-pour-la-santé-irig-cea-grenoble-france-début-de-la-thèse-le-1-octobre-2025-date-limite-de-candidature-à-23h59-23-mai-2025-mots-clés-biologie-computationnelle-intelligence-artificielle-modélisation-statistique-computational-biology-artificial-intelligence-statistical-modeling-noise-modeling-and-machine-learning-for-protein-fitness-landscapes-application-to-multi-specific-antibody-design",
          title: 'PhD offer Noise modeling and machine learning for protein fitness landscapes: application to...',
          description: "",
          section: "News",},{id: "news-stage-m2-sparkles-6-mois-jan-2026-laboratoire-biosciences-et-bioingénierie-pour-la-santé-irig-cea-grenoble-france-modèles-d-intelligence-artificielle-pour-la-génération-de-séquences-de-protéines-sfbi",
          title: 'Stage M2 :sparkles: 6 mois, jan 2026 Laboratoire Biosciences et bioingénierie pour la...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%75%69%64%6F.%75%67%75%7A%7A%6F%6E%69@%63%65%61.%66%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/uguzzoni", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/guido-uguzzoni-4642b425", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/TODO-fill-in-orcid-id", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=sULAlqQAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
