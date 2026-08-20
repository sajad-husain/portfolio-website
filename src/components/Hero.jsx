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
            <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
                    <p className="text-lg font-semibold text-white">
                        Full-Stack Developer | MERN &amp; PERN Stack
                    </p>
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
