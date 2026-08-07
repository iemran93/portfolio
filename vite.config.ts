import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import ui from '@nuxt/ui/vite'
import VueRouter from 'vue-router/vite'
import Markdown from 'unplugin-vue-markdown/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({}),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vueJsx(),
    vueDevTools(),
    Markdown({
      /* options */
    }),
    ui({
      components: {
        include: [/\.vue$/, /\.md$/],
      },
      ui: {
        colors: {
          primary: 'ayu',
          secondary: 'purple',
          neutral: 'slate',
        },
        container: {},
      },
      icon: {
        clientBundle: {
          icons: [
            'simple-icons:github',
            'simple-icons:x',
            'simple-icons:youtube',
            'simple-icons:gmail',
          ],
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
