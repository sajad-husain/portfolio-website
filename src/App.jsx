import { useState, useCallback } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    const [darkMode, setDarkMode] = useState(false);
 
    const toggleDarkMode = useCallback(() => {
        setDarkMode((prev) => !prev);
    }, []);

    return (
        <>
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-gray-900 focus:px-4 focus:py-2 focus:rounded focus:shadow-lg"
            >
                Skip to main content
            </a>

            <div className={darkMode ? "dark" : ""}>
                <button
                    onClick={toggleDarkMode}
                    className="fixed top-4 right-4 z-50 bg-gray-800 dark:bg-white text-white dark:text-gray-800 p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
                    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                    {darkMode ? "☀️" : "🌙"}
                </button>

                <main id="main-content">
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
