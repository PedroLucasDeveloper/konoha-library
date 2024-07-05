import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/konoha-library/',
  // Exemplo de configuração para excluir módulos problemáticos
  optimizeDeps: {
    exclude: ['@chakra-ui/*'],
  },
});