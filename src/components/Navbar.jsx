const NAV_LINKS = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

function Navbar() {
    return (
        <header className="z-40" role="banner">
            <nav
                aria-label="Primary"
                className="container mx-auto max-w-6xl flex items-center justify-between px-4 py-4"
            >
                <a href="#top" className="font-display text-lg font-bold text-ink-primary">
                    {"<sajjad />"}
                </a>

                <ul className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                className="text-sm font-medium text-ink-secondary hover:text-ink-primary transition-colors"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
