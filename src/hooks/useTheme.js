import { useEffect, useState } from "react";

const THEME_KEY = "theme";

function getInitialTheme() {
    if (typeof window === "undefined") return true;
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "dark") return true;
    if (stored === "light") return false;
    return !window.matchMedia("(prefers-color-scheme: light)").matches;
}

export default function useTheme() {
    const [isDark, setIsDark] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark((prev) => {
            localStorage.setItem(THEME_KEY, prev ? "light" : "dark");
            return !prev;
        });
    };

    return [isDark, toggleTheme];
}
