import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import path from 'path';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

export default defineConfig({
  plugins: [react()],
  base: '/', // Ajusta esta ruta según sea necesario
  build: {
    manifest: false,
  },
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_APP_API_URL, // Cambia import.meta.env a process.env
        changeOrigin: true,
      },
    },
  },
});