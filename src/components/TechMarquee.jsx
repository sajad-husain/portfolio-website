import { techIcon } from "../utils/techIcons";

const TECHS = [
    { id: "react", name: "React" },
    { id: "js", name: "JavaScript" },
    { id: "node", name: "Node.js" },
    { id: "express", name: "Express" },
    { id: "mongodb", name: "MongoDB" },
    { id: "python", name: "Python" },
    { id: "tailwind", name: "Tailwind" },
    { id: "git", name: "Git" },
    { id: "vite", name: "Vite" },
];

function MarqueeTrack() {
    return (
        <div className="flex shrink-0 items-center gap-12 pr-12 animate-marquee">
            {TECHS.map((tech) => (
                <div key={tech.id} className="flex items-center gap-2.5 opacity-50 hover:opacity-100 transition-opacity">
                    <img
                        src={techIcon(tech.id)}
                        alt=""
                        width="26"
                        height="26"
                        loading="lazy"
                        decoding="async"
                        className={tech.id === "express" ? "dark:invert" : ""}
                    />
                    <span className="font-mono text-sm text-ink-secondary whitespace-nowrap">{tech.name}</span>
                </div>
            ))}
        </div>
    );
}

export default function TechMarquee() {
    return (
        <section
            className="py-8 border-b border-line/10 overflow-hidden group"
            aria-hidden="true"
        >
            <div className="flex w-max group-hover:[animation-play-state:paused]">
                <MarqueeTrack />
                <MarqueeTrack />
            </div>
        </section>
    );
}
