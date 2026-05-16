function ProjectCard({ title, description, tech, link, gradient }) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            {/* Card Header with Gradient */}
            <div className={`${gradient} h-2`}></div>
            
            <div className="p-6">
                {/* Project Title */}
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                    {title}
                </h3>
                
                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {description}
                </p>
                
                {/* Technologies Used */}
                <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        🛠️ Tech Stack:
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {tech.map((technology, index) => (
                            <span
                                key={index}
                                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
                
                {/* View Project Button */}
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:scale-105 transition-transform duration-200"
                >
                    🔗 View Project →
                </a>
            </div>
        </div>
    );
}