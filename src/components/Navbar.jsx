import { useEffect, useMemo, useState } from "react";
import useScrollSpy from "../hooks/useScrollSpy";

const NAV_LINKS = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

function Navbar({ darkMode, toggleTheme }) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const sectionIds = useMemo(() => NAV_LINKS.map((l) => l.id), []);
    const activeId = useScrollSpy(sectionIds);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const close = () => setMenuOpen(false);
        window.addEventListener("resize", close);
        window.addEventListener("hashchange", close);
        return () => {
            window.removeEventListener("resize", close);
            window.removeEventListener("hashchange", close);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
                scrolled || menuOpen
                    ? "bg-canvas/80 backdrop-blur-md border-b border-white/10"
                    : "bg-transparent border-b border-transparent"
            }`}
            role="banner"
        >
            <nav
                aria-label="Primary"
                className="container mx-auto max-w-6xl flex items-center justify-between px-4 py-3 md:py-4"
            >
                <a href="#top" className="font-display text-lg font-bold text-ink-primary">
                    {"<sajjad />"}
                </a>

                <div className="hidden md:flex items-center gap-6">
                    <ul className="flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    aria-current={activeId === link.id ? "true" : undefined}
                                    className={`relative text-sm font-medium transition-colors ${
                                        activeId === link.id
                                            ? "text-ink-primary after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-accent"
                                            : "text-ink-secondary hover:text-ink-primary"
                                    }`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                        className="p-2 rounded-lg text-ink-secondary hover:text-ink-primary hover:bg-white/5 transition-colors"
                    >
                        {darkMode ? (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <circle cx="12" cy="12" r="4" />
                                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                            </svg>
                        ) : (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        )}
                    </button>
                </div>

                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                        className="md:hidden p-2 mr-1 rounded-lg text-ink-secondary hover:text-ink-primary hover:bg-white/5 transition-colors"
                    >
                        {darkMode ? (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <circle cx="12" cy="12" r="4" />
                                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                            </svg>
                        ) : (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        )}
                    </button>

                    <button
                        type="button"
                        className="md:hidden p-2 text-ink-primary"
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        {menuOpen ? (
                            <>
                                <line x1="5" y1="5" x2="19" y2="19" />
                                <line x1="19" y1="5" x2="5" y2="19" />
                            </>
                        ) : (
                            <>
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </>
                        )}
                    </svg>
                </button>
            </nav>

            <div
                id="mobile-menu"
                className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
                    menuOpen ? "max-h-96" : "max-h-0"
                }`}
            >
                <ul className="px-4 pb-6 space-y-1">
                    {NAV_LINKS.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                onClick={() => setMenuOpen(false)}
                                className="block px-4 py-3 min-h-[44px] rounded-lg text-base font-medium text-ink-secondary hover:text-ink-primary hover:bg-white/5 transition-colors"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

export default Navbar;
