function ProjectCard({ title, description, tech, link, gradient }) {
    return (
        <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className={`${gradient} h-2`} role="presentation"></div>

            <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                    {title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {description}
                </p>

                <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Tech Stack:
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {tech.map((technology) => (
                            <span
                                key={technology.id}
                                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full"
                            >
                                {technology.name}
                            </span>
                        ))}
                    </div>
                </div>

                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block btn-primary py-2 px-6"
                >
                    View Project →
                </a>
            </div>
        </article>
    );
}

export default ProjectCard;
