
function App() {
    // Dark mode state
    const [darkMode, setDarkMode] = useState(false);
    
    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    
    return (
        <div className={darkMode ? 'dark' : ''}>
            {/* Dark Mode Toggle Button */}
            <button
                onClick={toggleDarkMode}
                className="fixed top-4 right-4 z-50 bg-gray-800 dark:bg-white text-white dark:text-gray-800 p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
                aria-label="Toggle Dark Mode"
            >
                {darkMode ? '☀️' : '🌙'}
            </button>
            
            {/* All Sections */}
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

// Export App
export default App;