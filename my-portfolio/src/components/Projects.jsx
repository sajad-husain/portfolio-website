import ProjectCard from "./ProjectCard";

function Projects() {
    // Projects data array
    const projects = [
        {
            title: "Portfolio Website",
            description: "A modern personal portfolio website built with React and Tailwind CSS. Features dark mode, responsive design, and dynamic components.",
            tech: ["React", "Tailwind CSS", "JavaScript", "Vite"],
            link: "https://github.com/yourusername/portfolio",
            gradient: "bg-gradient-to-r from-blue-500 to-cyan-500"
        },
        {
            title: "JavaScript Exercises",
            description: "Collection of 50+ JavaScript practice exercises including array methods, DOM manipulation, and async programming examples.",
            tech: ["JavaScript", "HTML", "CSS", "LocalStorage"],
            link: "https://github.com/yourusername/js-exercises",
            gradient: "bg-gradient-to-r from-purple-500 to-pink-500"
        },
        {
            title: "Task Manager App",
            description: "Full-stack task management application with user authentication, CRUD operations, and real-time updates.",
            tech: ["React", "Node.js", "MongoDB", "Express"],
            link: "https://github.com/yourusername/task-manager",
            gradient: "bg-gradient-to-r from-green-500 to-teal-500"
        }
    ];
    
    return (
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto max-w-6xl">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
                    📁 My Projects
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
                    Here are some of my recent works
                </p>
                
                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
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