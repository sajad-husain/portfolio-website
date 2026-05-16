function Skills() {
    // Skills array - Frontend, Backend, Tools
    const skillCategories = [
        {
            name: "🎨 Frontend",
            skills: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"]
        },
        {
            name: "⚙️ Backend",
            skills: ["Node.js", "Express", "Python", "MongoDB", "SQL"]
        },
        {
            name: "🛠️ Tools & Others",
            skills: ["Git", "GitHub", "VS Code", "Vite", "Postman"]
        }
    ];
    
    return (
        <section className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto max-w-6xl">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
                    🛠️ My Skills
                </h2>
                
                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
                                {category.name}
                            </h3>
                            <div className="flex flex-wrap gap-3 justify-center">
                                {category.skills.map((skill, skillIdx) => (
                                    <span
                                        key={skillIdx}
                                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:scale-105 transition-transform duration-200"
                                    >
                                        {skill}
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