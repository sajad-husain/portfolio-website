function Hero() {
    return (
        <section
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 px-4"
            aria-label="Hero"
        >
            <div className="text-center text-white">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
                    Hi, I'm Sajjad Hussain 👋
                </h1>
                <p className="text-2xl md:text-3xl mb-8">
                    Full-Stack Developer in Training 🚀
                </p>
                <a
                    href="#projects"
                    className="inline-block bg-white text-purple-600 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                    🔍 Check My Work
                </a>
            </div>
        </section>
    );
}

export default Hero;
