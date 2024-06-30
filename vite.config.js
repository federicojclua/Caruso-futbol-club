import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Intentar cargar dotenv solo si está disponible
try {
  require('dotenv').config();
} catch (e) {
  console.log('dotenv no encontrado, continuando sin cargar variables de entorno.');
}

export default defineConfig({
  plugins: [react()],
  base: '/', // Ajusta esta ruta según sea necesario
  resolve: {
    alias: {
      moment: 'moment/min/moment.min.js' // Configuración de alias para moment
    }
  },
  build: {
    manifest: false,
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://caruso-prueba-back-1.onrender.com',
        changeOrigin: true,
      },
    },
  },
});
