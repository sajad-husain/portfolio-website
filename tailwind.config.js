/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      fontSize: {
        "hero-clamp": ["clamp(2.5rem, 6vw, 4.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "section-title": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.2" }],
        "lead": ["1.125rem", { lineHeight: "1.75" }],
      },
      colors: {
        canvas: "#0a0a0f",
        surface: {
          DEFAULT: "#12121a",
          raised: "#1a1a24",
        },
        accent: {
          DEFAULT: "#8b5cf6",
          soft: "#a78bfa",
          muted: "#7c3aed",
        },
        ink: {
          primary: "#f4f4f6",
          secondary: "#b8b8c4",
          muted: "#8a8a99",
        },
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out",
        "cursor-blink": "cursorBlink 1s step-end infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        cursorBlink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
}
