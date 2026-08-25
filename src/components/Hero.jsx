import TypingEffect from "./TypingEffect";
import heroImg from "../assets/hero.png";

const ROLES = ["MERN Developer", "PERN Developer", "React Developer", "Full-Stack Developer"];

function Hero() {
    return (
        <section
            id="top"
            className="relative min-h-screen flex items-center surface-base px-4 pt-24 pb-16 overflow-hidden"
            aria-label="Hero"
        >
            <div className="absolute inset-0 bg-grid" aria-hidden="true"></div>
            <div
                className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-accent/15 blur-3xl animate-float"
                aria-hidden="true"
            ></div>
            <div
                className="absolute -bottom-24 right-0 w-80 h-80 rounded-full bg-accent-muted/10 blur-3xl"
                aria-hidden="true"
            ></div>
            <div
                className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent to-canvas"
                aria-hidden="true"
            ></div>

            <div className="relative container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-accent/40 bg-accent/10 text-sm font-mono text-accent-soft">
                        <span className="relative flex h-2 w-2" aria-hidden="true">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                        </span>
                        Open to work
                    </span>

                    <h1 className="text-hero-clamp font-bold text-ink-primary mb-4 animate-fade-in">
                        Hi, I'm Sajjad Hussain
                    </h1>
                    <p className="text-xl md:text-2xl text-ink-secondary mb-8">
                        <TypingEffect words={ROLES} />
                    </p>
                    <p className="text-lg font-semibold text-white mb-8">
                        Full-Stack Developer | MERN &amp; PERN Stack
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                        <a
                            href="#projects"
                            className="btn-primary glow-hover py-3 px-8 text-base group inline-flex items-center gap-2"
                        >
                            View Projects
                            <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
                        </a>
                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex items-center py-3 px-8 rounded-lg border border-white/15 text-base font-semibold text-ink-primary hover:border-accent/60 hover:bg-accent/10 transition-all duration-200 active:scale-95"
                        >
                            Download CV
                        </a>
                    </div>

                    <div className="flex justify-center md:justify-start gap-5">
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub profile"
                            className="text-ink-muted hover:text-ink-primary transition-colors"
                        >
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.14c0 .31.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
                            </svg>
                        </a>
                        <a
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn profile"
                            className="text-ink-muted hover:text-ink-primary transition-colors"
                        >
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="relative hidden md:flex justify-center">
                    <div
                        className="absolute inset-0 -m-6 rounded-full bg-accent/25 blur-3xl"
                        aria-hidden="true"
                    ></div>
                    <img
                        src={heroImg}
                        alt="Sajjad Hussain"
                        className="relative max-w-sm w-full rounded-2xl animate-float"
                        fetchpriority="high"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
