const timelineItems = [
    {
        period: "2024 — Present",
        title: "Full-Stack Development Training",
        place: "Self-directed + bootcamp coursework",
        detail: "Building MERN and PERN applications, REST APIs, and authentication flows.",
    },
    {
        period: "2023 — 2024",
        title: "Frontend Foundations",
        place: "Online courses & practice projects",
        detail: "HTML, CSS, JavaScript fundamentals, then React with hooks and routing.",
    },
    {
        period: "Ongoing",
        title: "Computer Science Studies",
        place: "University",
        detail: "Data structures, algorithms, and database systems alongside development work.",
    },
];

function Timeline() {
    return (
        <section
            id="timeline"
            className="section-container"
            aria-labelledby="timeline-title"
        >
            <div className="container mx-auto max-w-3xl">
                <h2 id="timeline-title" className="section-title">
                    Journey
                </h2>

                <ol className="relative border-l border-white/10 ml-3 space-y-10">
                    {timelineItems.map((item) => (
                        <li key={item.period} className="relative pl-8">
                            <span
                                className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-canvas border-2 border-accent"
                                aria-hidden="true"
                            ></span>
                            <p className="font-mono text-xs text-accent-soft mb-1">{item.period}</p>
                            <h3 className="text-lg font-semibold text-ink-primary">{item.title}</h3>
                            <p className="text-sm text-ink-muted mb-1">{item.place}</p>
                            <p className="text-sm text-ink-secondary leading-relaxed">{item.detail}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

export default Timeline;
