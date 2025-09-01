import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // <- aqui você define a porta
    historyApiFallback: true, // <- Isso garante que todas as rotas (como /listar, /produtos, etc.) sejam redirecionadas para index.html — e então o React Router cuida da rota.
  },
})
