import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import ui from '@nuxt/ui/vite'
import VueRouter from 'vue-router/vite'
import Markdown from 'unplugin-vue-markdown/vite'
import MarkdownItAnchor from 'markdown-it-anchor'
import MarkdownItPrism from 'markdown-it-prism'
import MarkdownIt from 'markdown-it'
import { applyMarkdownRules } from './src/util/markdown-it-rules'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({}),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    ui({
      // You can also directly target the input component if needed
      components: {
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.md\?vue/],
      },
      ui: {
        formField: {
          slots: {
            container: 'mt-1 relative w-full',
          },
        },
        input: {
          slots: {
            root: 'w-full',
          },
        },
        textarea: {
          slots: {
            root: 'w-full',
          },
        },
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
            'simple-icons:youtube',
            'simple-icons:minutemailer',
          ],
        },
      },
    }),
    vueJsx(),
    vueDevTools(),
    Markdown({
      // default options passed to markdown-exit
      markdownOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
      // A function providing the markdown-exit instance gets the ability to apply custom settings/plugins
      markdownItSetup(md) {
        const mdInstance = md as unknown as MarkdownIt

        mdInstance.use(MarkdownItAnchor, {
          permalink: MarkdownItAnchor.permalink.linkInsideHeader({
            symbol:
              '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
            placement: 'before',
          }),
        })
        mdInstance.use(MarkdownItPrism)
        applyMarkdownRules(mdInstance)
      },
      // Class names for the wrapper div
      wrapperClasses: 'markdown-body',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
