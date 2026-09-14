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
          description: "",
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
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "projects-anti-influenza-peptides",
          title: 'Anti-influenza peptides',
          description: "Designing peptide inhibitors of the PA-PB1 interface of the influenza polymerase",
          section: "Projects",handler: () => {
              window.location.href = "/projects/antiinfluenza_peptides.html";
            },},{id: "projects-context-aware-bioinformatic-ai-agents",
          title: 'Context-aware bioinformatic AI agents',
          description: "Inverting differential expression analysis by building context-specific knowledge graphs that generate directional predictions",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bioinformatic_agents.html";
            },},{id: "projects-inference-of-experimental-protein-fitness-landscapes",
          title: 'Inference of experimental protein fitness landscapes',
          description: "Probabilistic models that infer sequence-function relationships directly from high-throughput selection experiments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fitness_landscapes.html";
            },},{id: "projects-anti-tumor-peptides-for-kras-mutant-lung-cancer",
          title: 'Anti-tumor peptides for KRAS-mutant lung cancer',
          description: "Whole-cell phage display and probabilistic modelling to identify peptide binders associated with KRAS-mutant contexts",
          section: "Projects",handler: () => {
              window.location.href = "/projects/kras_peptides.html";
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
