import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

try {
  require('dotenv').config();
} catch (e) {
  console.log('dotenv no encontrado, continuando sin cargar variables de entorno.');
}

export default defineConfig({
  plugins: [react()],
  base: '/', // Ajusta esta ruta según sea necesario
  build: {
    manifest: false,
    rollupOptions: {
       // Agrega CSS como externo si es necesario
    }
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
