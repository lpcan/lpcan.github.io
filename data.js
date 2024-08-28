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
        subtitle: "I presented a talk at the second <a href=\"https://indico.ict.inaf.it/event/2690/overview\">Machine Learning for Astrophysics conference</a> in Catania, Italy.",
        details: [
        ],
        tags: [],
        icon: "plane",
    },
    {
        title: "EAS annual meeting",
        duration: "July 1, 2024 - July 5, 2024",
        subtitle: "I had a poster and presented a sparkler talk at the <a href=\"https://eas.unige.ch/EAS2024/\">European Astronomical Society Annual Meeting</a> in Padova, Italy.",
        details: [
        ],
        tags: [],
        icon: "plane",
    },
    {
        title: "ASA ASM",
        duration: "June 24, 2024 - June 28, 2024",
        subtitle: "I was awarded best student presentation at the <a href=\"https://www.icrar.org/conferences/asa2024/\">Astronomical Society of Australia's Annual Science Meeting</a>!",
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
    // {
    //     title: "Another example paper",
    //     authors: "First author, second author, third author",
    //     status: "Submitted to a journal",
    //     date: "August 2024",
    //     link: "https://www.google.com",
    //     thumbnail: "images/telescope.png"
    // }
];


export const projects = {
    webProjects: [
        {
            projectName: "Programming Diaries",
            image: "images/telescope.png",
            summary:
                "Developed a full stack blog application to provide content on techical topics across the internet with admin interface.",
            preview: "https://programmingdiaries.herokuapp.com/",
            techStack: ["Django", "SQLite", "Bootstrap", "JavaScript", "Heroku"],
        },
        {
            projectName: "Find Your Bank",
            image: "images/telescope.png",
            summary:
                "Developed a React application to render a list of banks fetched from API. Filtered the banks based on queries from localstorage, marked favorites banks.",
            preview: "https://clever-fermi-0d5d76.netlify.app",
            techStack: ["Reactjs", "Bootstrap", "JavaScript", "Netlify"],
        },
        {
            projectName: "Web Portfolio",
            image: "images/telescope.png",
            summary:
                "Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.",
            preview: "https://github.com/vinaysomawat/Travographer-Portal",
            techStack: ["HTML", "Bootstrap", "JavaScript"],
        },
        {
            projectName: "Resume Builder",
            image: "images/telescope.png",
            summary:
                "Browser based editor to build and download Resumes in a customizable templates.",
            preview: "https://vinaysomawat.github.io/Resume-Builder",
            techStack: ["HTML", "Bootstrap", "JavaScript"],
        },
    ],
    softwareProjects: [
        {
            projectName: "Pizza Ordering ChatBot",
            image: "images/telescope.png",
            summary:
                "ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
            preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
            techStack: ["Dailogflow", "Firebase"],
        },
        {
            projectName: "WhatsApp-Bot",
            image: "images/telescope.png",
            summary:
                "Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
            preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
            techStack: ["Selenium", "Chrome Webdriver", "Python"],
        },
        {
            projectName: "Bill Generator",
            image: "images/telescope.png",
            summary:
                "GUI to transfer data to excel sheets and generate bills on the local shops.",
            preview: "https://github.com/vinaysomawat/Bill-Generator",
            techStack: ["Tkinter", "Openxlpy", "Python"],
        },
    ],
    androidProjects: [
        {
            projectName: "NITW-CSE",
            image: "images/telescope.png",
            summary:
                "The Application display details of Department courses, reference books, research, publication and faculty profile.",
            preview: "https://github.com/vinaysomawat/NITW-CSE",
            techStack: ["JAVA", "XML", "Android"],
        },
    ],
    freelanceProjects: [
    ],
};

export const education = [
    {
        title: "B.Tech. in Computer Science and Engineering",
        duration: "2016 - 2020",
        subtitle: "National Institute of Technology, Warangal",
        details: [],
        tags: [
            "Data Structures & Algorithms",
            "Operating Systems",
            "Database Management System",
            "Computer Networks",
            "Compiler Designing",
            "Cloud Computing",
        ],
        icon: "graduation-cap",
    },
    {
        title: "Class 12th in Science and Mathematics",
        duration: "",
        subtitle: "Board of Secondary Education, Rajasthan",
        details: [],
        tags: ["Physics", "Chemistry", "Mathematics"],
        icon: "book",
    },
];

export const footer = [
    {
        label: "Dev Profiles",
        data: [
            {
                text: "Stackoverflow",
                link: "https://stackoverflow.com/users/8461233/vinay-somawat",
            },
            {
                text: "GitHub",
                link: "https://github.com/vinaysomawat",
            },
            {
                text: "LeetCode",
                link: "https://leetcode.com/somawatvinay/",
            },
        ],
    },
    {
        label: "Resources",
        data: [
            {
                text: "Enable Dark/Light Mode",
                func: "enableDarkMode()",
            },
            {
                text: "Print this page",
                func: "window.print()",
            },
            {
                text: "Clone this page",
                link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
            },
        ],
    },
    {
        label: "Social Profiles",
        data: [
            {
                text: "Linkedin",
                link: "https://www.linkedin.com/in/vinaysomawat/",
            },
            {
                text: "Twitter",
                link: "https://twitter.com/thesigmakid",
            },
            {
                text: "Buy me a coffee",
                link: "https://www.buymeacoffee.com/r194dME8y",
            },
        ],
    },
    {
        label: "copyright-text",
        data: [
            "Made with &hearts; by Vinay Somawat.",
            "&copy; No Copyrights. Feel free to use this template.",
        ],
    },
];