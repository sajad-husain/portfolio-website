function ProjectCard({ title, description, tech, link, gradient, featured }) {
    return (
        <article
            className={`glass-card card-hover overflow-hidden ${
                featured ? "gradient-border" : ""
            }`}
        >
            <div className={`${gradient} relative px-4 pt-3 pb-8`} role="presentation">
                <div className="flex gap-1.5 mb-3" aria-hidden="true">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/30"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-white/30"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-white/30"></span>
                </div>
                <div className="h-24 rounded-md bg-black/25 backdrop-blur-[1px] flex items-center justify-center">
                    <span className="font-mono text-xs text-white/60">{title.toLowerCase().replace(/\s+/g, "-")}.app</span>
                </div>
            </div>

            <div className="p-6">
                {featured && (
                    <span className="inline-block mb-2 font-mono text-xs text-accent-soft">★ Featured</span>
                )}
                <h3 className="text-xl font-bold text-ink-primary mb-3">{title}</h3>

                <p className="text-sm text-ink-secondary mb-4 leading-relaxed">{description}</p>

                <div className="mb-5 flex flex-wrap gap-2">
                    {tech.map((t) => (
                        <span
                            key={t.id}
                            className="bg-white/5 border border-white/10 text-xs text-ink-secondary px-2.5 py-1 rounded-full"
                        >
                            {t.name}
                        </span>
                    ))}
                </div>

                <div className="flex gap-3">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary py-2 px-4 text-sm inline-flex items-center gap-1.5"
                    >
                        Live Demo
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-4 text-sm rounded-lg border border-white/15 font-medium text-ink-primary hover:border-accent/50 transition-all active:scale-95"
                    >
                        GitHub Repo
                    </a>
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;
