function About() {
    return (
        <section
            className="section-container bg-gray-50 dark:bg-gray-800"
            aria-labelledby="about-title"
        >
            <div className="container mx-auto max-w-4xl">
                <h2 id="about-title" className="section-title">
                    About Me
                </h2>

                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-shrink-0">
                        <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                            <span className="text-6xl" role="img" aria-label="Developer emoji">👨‍💻</span>
                        </div>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                            Hey there! I'm <span className="font-bold text-blue-600 dark:text-blue-400">Sajjad Hussain</span>,
                            a passionate full-stack developer from Pakistan 🇵🇰
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                            I love building web applications that solve real problems. Currently, I'm mastering
                            <span className="font-semibold text-purple-600 dark:text-purple-400"> React, Node.js, and Modern JavaScript</span>.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            When I'm not coding, you'll find me learning new technologies, contributing to open source,
                            or enjoying a good cup of chai ☕
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
