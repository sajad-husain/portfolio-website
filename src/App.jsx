import useTheme from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import TechMarquee from "./components/TechMarquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    const [darkMode, toggleDarkMode] = useTheme();

    return (
        <>
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-gray-900 focus:px-4 focus:py-2 focus:rounded focus:shadow-lg"
            >
                Skip to main content
            </a>

            <div>
                <ScrollProgress />
                <Navbar darkMode={darkMode} toggleTheme={toggleDarkMode} />

                <main id="main-content">
                    <Hero />
                    <Stats />
                    <TechMarquee />
                    <About />
                    <Skills />
                    <Projects />
                    <Timeline />
                    <Contact />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
