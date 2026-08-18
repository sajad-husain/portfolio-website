import { useState } from "react";

const THEME_KEY = "theme";

function getInitialTheme() {
    if (typeof window === "undefined") return true;
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "dark") return true;
    if (stored === "light") return false;
    return true;
}

export default function useTheme() {
    const [isDark, setIsDark] = useState(getInitialTheme);
    return [isDark, setIsDark];
}
