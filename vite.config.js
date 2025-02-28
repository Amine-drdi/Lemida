import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/", // S'assurer que les assets sont bien chargés
  resolve: {
    alias: {
      "@": "/src", // Optionnel, mais utile pour éviter les imports relatifs longs
    }
  },
  build: {
    outDir: "dist",
  }
});
