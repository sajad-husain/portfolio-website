import Reveal from "./Reveal";

function TerminalCard() {
    return (
        <div className="glass-card overflow-hidden w-full max-w-sm mx-auto">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
                <span className="w-3 h-3 rounded-full bg-red-500/70" aria-hidden="true"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" aria-hidden="true"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/70" aria-hidden="true"></span>
                <span className="ml-2 font-mono text-xs text-ink-muted">sajjad@dev ~ zsh</span>
            </div>
            <div className="p-5 font-mono text-sm leading-7">
                <p><span className="text-emerald-400">$</span> <span className="text-ink-primary">whoami</span></p>
                <p className="text-ink-secondary">sajjad-hussain — full-stack developer</p>
                <p><span className="text-emerald-400">$</span> <span className="text-ink-primary">cat stack.txt</span></p>
                <p className="text-ink-secondary">mongodb · express · react · node</p>
                <p className="text-ink-secondary">postgresql · python · tailwind</p>
                <p><span className="text-emerald-400">$</span> <span className="text-ink-primary">status --now</span></p>
                <p className="text-accent-soft">building · learning · open to work</p>
            </div>
        </div>
    );
}

const CHIPS = [
    { label: "Currently learning", value: "Advanced Node.js & system design" },
    { label: "Open to", value: "Internships & junior full-stack roles" },
];

function About() {
    return (
        <section
            id="about"
            className="section-container surface-raised"
            aria-labelledby="about-title"
        >
            <div className="container mx-auto max-w-6xl">
                <h2 id="about-title" className="section-title">
                    About Me
                </h2>

                <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <TerminalCard />

                    <div>
                        <p className="text-lg text-ink-secondary mb-4 leading-relaxed">
                            I'm <span className="font-semibold text-accent-soft">Sajjad Hussain</span>,
                            a full-stack developer from Pakistan focused on shipping complete products —
                            not just tutorials.
                        </p>
                        <p className="text-ink-secondary mb-4 leading-relaxed">
                            My day-to-day is React on the front, Node.js and Express in the middle,
                            and MongoDB or PostgreSQL behind it. I care about clean APIs, sensible
                            data models, and interfaces that feel fast.
                        </p>
                        <p className="text-ink-secondary mb-8 leading-relaxed">
                            Right now I'm deepening my backend engineering skills and building
                            production-grade projects for my portfolio. Open source and code review
                            culture are where I sharpen my craft.
                        </p>

                        <div className="space-y-3">
                            {CHIPS.map((chip) => (
                                <div
                                    key={chip.label}
                                    className="flex flex-wrap items-center gap-2 text-sm"
                                >
                                    <span className="font-mono text-xs uppercase tracking-wider text-ink-muted w-40 shrink-0">
                                        {chip.label}
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent-soft">
                                        {chip.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export default About;
