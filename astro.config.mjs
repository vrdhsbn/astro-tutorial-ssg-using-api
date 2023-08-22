import { defineConfig } from 'astro/config'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

import compress from 'astro-compress'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  build: {
    format: 'directory',
  },
  server: {
    open: true,
  },
  // compress()のオプションで圧縮対象外のファイルを指定できる
  integrations: [react(), compress({ html: false, img: false })],
  vite: {
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'assets/scripts/[name].js',
          chunkFileNames: 'assets/scripts/[name].js',
          assetFileNames: (asset) => {
            if (/\.css$/.test(asset.name ?? '')) {
              return 'assets/css/style[extname]'
            } else if (/\.(jpe?g|png|svg)$/.test(asset.name)) {
              return 'assets/images/[name].[ext]'
            }
            return 'assets/[name].[ext]'
          },
        },
      },
    },
  },
  // SPA mode を有効にする
  experimental: {
    viewTransitions: true,
  },
})
