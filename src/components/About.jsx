function About() {
    return (
        <section
            id="about"
            className="section-container surface-raised"
            aria-labelledby="about-title"
        >
            <div className="container mx-auto max-w-4xl">
                <h2 id="about-title" className="section-title">
                    About Me
                </h2>

                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-shrink-0">
                        <div className="w-48 h-48 bg-surface-raised rounded-full flex items-center justify-center shadow-xl">
                            <span className="text-6xl" role="img" aria-label="Developer emoji">👨‍💻</span>
                        </div>
                    </div>

                    <div className="flex-1 text-center md:text-left">
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
                        <p className="text-ink-secondary leading-relaxed">
                            Right now I'm deepening my backend engineering skills and building
                            production-grade projects for my portfolio. Open source and code review
                            culture are where I sharpen my craft.
                        </p>

                        <div className="mt-6 p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
                            <p className="text-sm text-blue-800 dark:text-blue-200">
                                💡 Fun Fact: I started coding with HTML and CSS, and now I'm building React apps!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
