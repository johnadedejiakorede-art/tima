import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Set base path for GitHub Pages - change 'your-repo-name' to your actual repository name
  // If deploying to https://username.github.io (root), use '/'
  // If deploying to https://username.github.io/repo-name/, use '/repo-name/'
  base: mode === "production" ? "/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
