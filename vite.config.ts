import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves this repo under /Portfolio/.
export default defineConfig({
  base: "/Portfolio/",
  plugins: [react(), tailwindcss()],
});
