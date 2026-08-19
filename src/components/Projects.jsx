import ProjectCard from "./ProjectCard";

const projects = [
    {
        id: "portfolio",
        title: "Portfolio Website",
        description: "A modern personal portfolio website built with React and Tailwind CSS. Features dark mode, responsive design, and dynamic components.",
        tech: [
            { id: "react", name: "React" },
            { id: "tailwind", name: "Tailwind CSS" },
            { id: "js", name: "JavaScript" },
            { id: "vite", name: "Vite" },
        ],
        link: "https://github.com/yourusername/portfolio",
        gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
        id: "js-exercises",
        title: "JavaScript Exercises",
        description: "Collection of 50+ JavaScript practice exercises including array methods, DOM manipulation, and async programming examples.",
        tech: [
            { id: "js", name: "JavaScript" },
            { id: "html", name: "HTML" },
            { id: "css", name: "CSS" },
            { id: "localstorage", name: "LocalStorage" },
        ],
        link: "https://github.com/yourusername/js-exercises",
        gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
        id: "task-manager",
        title: "Task Manager App",
        description: "Full-stack task management application with user authentication, CRUD operations, and real-time updates.",
        tech: [
            { id: "react", name: "React" },
            { id: "node", name: "Node.js" },
            { id: "mongodb", name: "MongoDB" },
            { id: "express", name: "Express" },
        ],
        link: "https://github.com/yourusername/task-manager",
        gradient: "bg-gradient-to-r from-green-500 to-teal-500",
    },
];

function Projects() {
    return (
        <section
            id="projects"
            className="section-container surface-raised"
            aria-labelledby="projects-title"
        >
            <div className="container mx-auto max-w-6xl">
                <h2 id="projects-title" className="section-title">
                    My Projects
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
                    Here are some of my recent works
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            tech={project.tech}
                            link={project.link}
                            gradient={project.gradient}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
