import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// "base" deve ser exatamente o nome do repositório no GitHub
export default defineConfig({
  base: "/projetinho-react/",
  plugins: [react()],
});
