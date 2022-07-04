import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';

// 支持md
import Markdown from 'vite-plugin-md';
import Prism from 'markdown-it-prism';
import LinkAttributes from 'markdown-it-link-attributes';
// 代码的
const markdownWrapperClasses = 'markdown-body';

// 自动引入
// 组件
import Components from 'unplugin-vue-components/vite';
import { TDesignResolver } from 'unplugin-vue-components/resolvers';
// api
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
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
});
