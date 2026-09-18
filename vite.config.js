import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  server: {
    allowedHosts: ['5173-ieqooy5wr1xskq5qfrb8w-026b20f7.us1.manus.computer'],
  },
})
