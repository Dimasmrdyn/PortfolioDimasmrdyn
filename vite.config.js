import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/PortfolioDimasmrdyn/', // <- tambahkan ini
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 3000,
  },
});
