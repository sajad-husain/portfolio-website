const skillCategories = [
    {
        id: "frontend",
        name: "Frontend",
        skills: [
            { id: "react", name: "React" },
            { id: "js", name: "JavaScript" },
            { id: "tailwind", name: "Tailwind CSS" },
            { id: "html5", name: "HTML5" },
            { id: "css3", name: "CSS3" },
        ],
    },
    {
        id: "backend",
        name: "Backend",
        skills: [
            { id: "node", name: "Node.js" },
            { id: "express", name: "Express" },
            { id: "python", name: "Python" },
            { id: "mongodb", name: "MongoDB" },
            { id: "sql", name: "SQL" },
        ],
    },
    {
        id: "tools",
        name: "Tools & Others",
        skills: [
            { id: "git", name: "Git" },
            { id: "github", name: "GitHub" },
            { id: "vscode", name: "VS Code" },
            { id: "vite", name: "Vite" },
            { id: "postman", name: "Postman" },
        ],
    },
];

function Skills() {
    return (
        <section
            className="section-container bg-white dark:bg-gray-900"
            aria-labelledby="skills-title"
        >
            <div className="container mx-auto max-w-6xl">
                <h2 id="skills-title" className="section-title">
                    My Skills
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category) => (
                        <div
                            key={category.id}
                            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                        >
                            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
                                {category.name}
                            </h3>
                            <div className="flex flex-wrap gap-3 justify-center">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill.id}
                                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md btn-hover"
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
