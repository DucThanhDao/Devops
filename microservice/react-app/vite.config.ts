import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ mode }) =>{
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    server: {
      port: Number(env.VITE_APP_PORT) || 4000
    },
    preview: {
      port: Number(env.VITE_APP_PORT) || 4000
    }
  }
})
