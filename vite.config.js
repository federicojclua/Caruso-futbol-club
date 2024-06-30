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
  build: {
    manifest: false,
   
      rollupOptions: {
      // Asegúrate de externalizar las dependencias que no deberían estar empaquetadas
      // en tu librería
      external: ['vue'],
      output: {
        // Proporciona variables globales para usar en la compilación UMD
        // para dependencias externalizadas
        globals: {
        
          vue: 'Vue',
     
    }
  }}
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
