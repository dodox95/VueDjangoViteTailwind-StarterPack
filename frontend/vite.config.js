// frontend/vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { join } from 'path';
import TailwindCSS from 'tailwindcss';
import Autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'backend/static',  // Wskazuje, że budowane pliki powinny być przenoszone do katalogu `static` w Django
  },
  css: {
    postcss: {
      plugins: [
        TailwindCSS(join(__dirname, 'tailwind.config.js')), // Wskazuje ścieżkę do pliku konfiguracyjnego TailwindCSS
        Autoprefixer() // Dodaje autoprefixer
      ]
    }
  }
});
