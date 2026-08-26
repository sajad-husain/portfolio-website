import Counter from "./Counter";

const STATS = [
    { value: 10, suffix: "+", label: "Projects Built" },
    { value: 15, suffix: "+", label: "Technologies" },
    { value: 500, suffix: "+", label: "Commits" },
    { value: 12, suffix: "", label: "Months Coding" },
];

export default function Stats() {
    return (
        <section className="border-y border-line/10 bg-surface-raised" aria-label="Quick facts">
            <div className="container mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 px-4 py-12 text-center">
                {STATS.map((stat) => (
                    <div key={stat.label}>
                        <Counter value={stat.value} suffix={stat.suffix} />
                        <p className="mt-1 text-sm text-ink-muted">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
