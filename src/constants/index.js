import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";
import reppin from "../assets/icons/reppin.svg"
import dnic from "../assets/icons/dnic.svg"
import wizrdom from "../assets/icons/wizrdom.svg"
import fourthsea from "../assets/icons/fourthsea.svg"

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Reppin",
        icon: reppin,
        iconBg: "#accbe1",
        date: "June 2020 - feb 2021",
        points: [
            "Developed and maintained a dynamic website using jQuery, HTML, and JavaScript to create an engaging user experience.",
            "Collaborated with cross-functional teams, including designers and product managers, to ensure the seamless integration of design elements and functionalities into the website.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Managed the website's lifecycle, overseeing updates, enhancements, and maintenance tasks, and played a key role in optimizing website performance and user satisfaction.",
        ],
    },
    {
        title: "Ghost Technical Writer",
        company_name: "Diginyc",
        icon: dnic,
        iconBg: "#fff",
        date: "June 2021 - Feb 2023",
        points: [
            "Authored informative articles on various aspects of Linux, showcasing expertise in system administration, command-line utilities, and Linux-based technologies.",
            "Created engaging articles exploring C++ programming concepts, best practices, and real-world applications, catering to both beginners and experienced developers.",
            "Actively engaged with the Linux and C++ communities, fostering discussions, answering queries, and contributing valuable insights through well-researched and well-written articles.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Wizrdom",
        icon: wizrdom,
        iconBg: "#000",
        date: "June 2022 - September 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Fourth Sea",
        icon: fourthsea,
        iconBg: "#dedede",
        date: "September 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Designed and implemented responsive and scalable architectures, ensuring optimal performance and user experience across various devices. Utilized technologies such as React.js for frontend and Node.js/Express for backend development.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: snapgram,
        theme: 'btn-back-red',
        name: 'Harmilap Boutique Website',
        description: 'Developed a website for a Harmilap Boutique. The brand stands with every "WOMAN" who loves to keep up with the trendiest styles, not ready to compromise on quality..',
        link: 'https://www.harmilapboutique.com/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Architex Website',
        description: 'Created a website for a firm associated with construction projects.',
        link: 'https://architexindia.editorx.io/home',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Shree Ji Global services Website',
        description: 'Built a website for a startup that is dedicated towards providing the advertisement solutions.',
        link: 'https://shreejigs.com/',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-pink',
        name: 'Admetrics Website',
        description: 'Built a website for another advertising agency.',
        link: 'https://www.admetrics.in/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Netflix Clone',
        description: 'Developed a clone of Netflix, importing the data from TMDB. It was an impactful project of my career',
        link: 'https://netflix-clone-sigma-coral.vercel.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'NLightN website',
        description: 'Made a website for a social startup focused on Vocational education for the Youth from relatively underprivileged backgrounds..',
        link: 'https://www.nlightn.in/',
    }
];