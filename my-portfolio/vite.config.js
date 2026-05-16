import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // ← Important: Root path ke liye
  build: {
    outDir: "dist", // ← Confirm: dist folder mein build hoga
    emptyOutDir: true,
  },
});
