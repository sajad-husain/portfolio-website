import { techIcon, STACKS } from "../utils/techIcons";
import SectionHeader from "./SectionHeader";

const skillCategories = [
    {
        id: "frontend",
        name: "Frontend",
        stacks: ["mern", "pern"],
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
        stacks: ["mern", "pern"],
        skills: [
            { id: "node", name: "Node.js" },
            { id: "express", name: "Express" },
            { id: "python", name: "Python" },
            { id: "mongodb", name: "MongoDB" },
            { id: "sql", name: "PostgreSQL / SQL" },
        ],
    },
    {
        id: "tools",
        name: "Tools",
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
            id="skills"
            className="section-container"
            aria-label="My skills"
        >
            <div className="container mx-auto max-w-6xl">
                <SectionHeader index="02" id="skills" title="My Skills" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category) => (
                        <div
                            key={category.id}
                            className="glass-card card-hover p-6"
                        >
                            <div className="flex flex-col items-center mb-6">
                                <h3 className="text-xl font-bold text-center text-ink-primary">
                                    {category.name}
                                </h3>
                                {category.stacks && (
                                    <div className="mt-2 flex gap-2">
                                        {category.stacks.map((s) => (
                                            <span
                                                key={s}
                                                className="font-mono text-[11px] uppercase tracking-wider text-accent-soft bg-accent/10 border border-accent/30 px-2 py-0.5 rounded"
                                            >
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.id}
                                        className="flex items-center gap-2.5 rounded-lg bg-line/5 border border-line/10 px-3 py-2.5 hover:border-accent/40 transition-colors"
                                    >
                                        <img
                                            src={techIcon(skill.id)}
                                            alt=""
                                            width="22"
                                            height="22"
                                            loading="lazy"
                                            decoding="async"
                                            className="shrink-0"
                                        />
                                        <span className="text-sm font-medium text-ink-secondary truncate">
                                            {skill.name}
                                        </span>
                                    </div>
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
