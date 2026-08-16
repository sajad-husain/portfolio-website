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
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}
