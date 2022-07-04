import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';

// 支持md
import LinkAttributes from 'markdown-it-link-attributes';
import Prism from 'markdown-it-prism';
import Markdown from 'vite-plugin-md';
// marddown 的容器的类
const markdownWrapperClasses = 'markdown-body';

// 自动引入
// 组件
import { TDesignResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
// api
import AutoImport from 'unplugin-auto-import/vite';

// windicss
import WindiCSS from 'vite-plugin-windicss';

// 编译输出的配置
const ASSETS_DIR = 'res';
const OUT_DIR = 'dist';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),
    WindiCSS(),
    Markdown({
      // markdown 容器的类
      wrapperClasses: markdownWrapperClasses,
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism);
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        });
      },
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'vue/macros'],
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
      },
      resolvers: [
        TDesignResolver({
          library: 'vue-next',
        }),
      ],
    }),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
      resolvers: [
        TDesignResolver({
          library: 'vue-next',
        }),
      ],
    }),
  ],
  server: {
    port: 8061,
  },
  resolve: {
    alias: {
      '~': `${path.resolve(__dirname, 'src')}`,
    },
  },
  // 编译配置
  build: {
    outDir: OUT_DIR,
    assetsDir: ASSETS_DIR,
    rollupOptions: {
      output: {
        chunkFileNames: `${ASSETS_DIR}/js/[name]-[hash].js`,
        entryFileNames: `${ASSETS_DIR}/js/[name]-[hash].js`,

        assetFileNames: ({ name }) => {
          const namePattern = '[name]-[hash][extname]';
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return `${ASSETS_DIR}/images/${namePattern}`;
          }

          if (/\.css$/.test(name ?? '')) {
            return `${ASSETS_DIR}/css/${namePattern}`;
          }

          // default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return `${ASSETS_DIR}/${namePattern}`;
        },
      },
    },
  },
});
