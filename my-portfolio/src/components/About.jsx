function About() {
    return (
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto max-w-4xl">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
                    📖 About Me
                </h2>
                
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* Avatar Placeholder */}
                    <div className="flex-shrink-0">
                        <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                            <span className="text-6xl">👨‍💻</span>
                        </div>
                    </div>
                    
                    {/* Bio Text */}
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
                        
                        {/* Fun Fact */}
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

