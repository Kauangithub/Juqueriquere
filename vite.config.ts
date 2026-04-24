import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType: 'autoUpdate',

      devOptions: {
        enabled: true, // só pra testar em dev (opcional)
      },

      manifest: {
        name: 'Juqueriquere - App de Trilhas',
        short_name: 'Juqueriquere - Trilhas',
        start_url: '/',
        display: 'standalone',
        background_color: '#008A66',
        theme_color: '#008A66',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },

      workbox: {
        navigateFallback: '/index.html',
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.mode === 'navigate',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'pages-cache'
            }
          }
        ]
      }
    })
  ],
  server: {
    allowedHosts: ['wimp-thus-remnant.ngrok-free.dev'] 
  }
})
