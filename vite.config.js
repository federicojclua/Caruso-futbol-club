import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env en desarrollo local
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

export default defineConfig({
  plugins: [react()],
  base: '/', // Ajusta esta ruta según sea necesario
  build: {
    manifest: false,
  },
  server: {
    proxy: {
      '/api': {
        target: process.env.REACT_APP_API_URL,
        changeOrigin: true,
      },
    },
  },
});
