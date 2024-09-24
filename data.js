// To have each line animate individually, make each line a separate array 
// element and enable the row animation effect in index.html
export const bio = [
    "I study <b>intracluster light</b> (ICL), which is diffuse, low surface-brightness\
     light we can observe extending throughout galaxy clusters, which forms an\
     important fossil record of the interactions that have occurred within that\
     cluster, and therefore can teach us a lot about <b>galaxy evolution</b>.",
    "Currently, I am investigating the use of <b>machine learning</b> in this\
     field, and have created a model designed to measure the ICL fraction in\
     optical survey images."
];

export const experience = [
    {
        title: "LSST@Europe6 conference",
        duration: "September 16, 2024 - September 20, 2024",
        subtitle: "I presented a talk at the LSST@Europe conference in La Palma, Canary Islands. Check out my slides <a href=\"files/LSST@Europe.pdf\">here</a>.",
        icon: "plane",
    }
    {
        title: "ASA ECR Chapter Steering Committee",
        duration: "August 2024",
        subtitle: "I joined the ASA ECR Chapter Steering Committe as their student representative!",
        details: [
        ],
        tags: [],
        icon: "people-group",
    },{
        title: "ML4ASTRO2 conference",
        duration: "July 8, 2024 - July 12, 2024",
        subtitle: "I presented a talk at the second Machine Learning for Astrophysics conference in Catania, Italy.",
        details: [
        ],
        tags: [],
        icon: "plane",
    },
    {
        title: "EAS annual meeting",
        duration: "July 1, 2024 - July 5, 2024",
        subtitle: "I had a poster and presented a sparkler talk at the European Astronomical Society Annual Meeting in Padova, Italy. Check out my poster <a href=\"https://k-poster.kuoni-congress.info/eas-2024/gallery#/poster/EC96679B-EDA9-4BD7-9899-B2E1663481DC\">here</a>!",
        details: [
        ],
        tags: [],
        icon: "plane",
    },
    {
        title: "ASA ASM",
        duration: "June 24, 2024 - June 28, 2024",
        subtitle: "I was awarded best student presentation at the Astronomical Society of Australia's Annual Science Meeting! The recording is <a href=\"https://youtu.be/inj516PfFTU?t=3294\">here</a>.",
        details: [
        ],
        tags: [],
        icon: "person-chalkboard",
    },
    {
        title: "Astro 3D Science Legacy Meeting",
        duration: "June 3, 2024 - June 7, 2024",
        subtitle: "I presented a talk at the Astro 3D Science Legacy Meeting in Sydney, Australia.",
        details: [
        ],
        tags: [],
        icon: "person-chalkboard",
    },
];

export const publications = [
    {
        title: "Watch this space!",
        authors: "",
        status: "",
        date: "",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        thumbnail: "images/work_in_progress.png"
    },
    {
        title: "Visual question answering in the medical domain",
        authors: "<u>Louisa Canepa</u>, Sonit Singh, Arcot Sowmya",
        status: "arXiv e-prints",
        date: "September 2023",
        link: "https://arxiv.org/abs/2309.11080",
        thumbnail: "images/medvqa-thumbnail.png"
    }
];

export const repos = [
    {
        title: "ml_icl",
        last_updated: "September 2024",
        description: "Code for training, finetuning, and running a machine \
            learning model designed to predict the ICL fraction in HSC-SSP \
            cluster images for anyone interested in using it.",
        publication: "Coming soon!",
        link: "https://github.com/lpcan/ml_icl",
    },
    {
        title: "lpcan.github.io",
        last_updated: "September 2024",
        description: "This website! Feel free to use as a template. Adapted \
            from Vinay Somawat's template, linked in the README and in the \
            footer below.",
        publication: "",
        link: "https://github.com/lpcan/lpcan.github.io",
    },
    {
        title: "med_vqa",
        last_updated: "March 2023",
        description: "Code for training a visual question answering machine \
            learning model for answering various questions about medical images.",
        publication: "Visual question answering in the medical domain",
        link: "https://github.com/lpcan/med_vqa",
    },
    {
        title: "chad",
        last_updated: "February 2022",
        description: "Code for building and running CHAD, a database of \
            multi-wavelength observations of radio sources from RACS.",
        publication: "",
        link: "https://github.com/lpcan/chad",
    },
];