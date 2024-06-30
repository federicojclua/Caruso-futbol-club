import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
g

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
        target: 'https://caruso-prueba-back-1.onrender.com', 
        changeOrigin: true,
        
      },
    },
  },
});
