import { Feat } from '~/components/preset/type';

export const buildFeatures: Feat[] = [
  {
    title: 'Vite',
    desc: '使用Vite作为代码构建工具，提升开发体验',
  },
  {
    title: 'typescript',
    desc: 'typescript增加类型校验',
  },
  {
    title: 'Windi CSS',
    desc: '使用另一种方式写样式',
  },
  {
    title: 'vite-plugin-md',
    desc: '让md文件可以作为vue组件引用',
  },
  {
    title: 'markdown-it-prism',
    desc: 'markdown的代码关键字抽取，与css可以达到高亮的目的',
  },
  {
    title: 'unplugin-auto-import和unplugin-vue-components',
    desc: '自动引用vue api和组件',
  },
  {
    title: '* icon增强',
    desc: '收到',
  },
  { title: '*vitest', desc: '单元测试与组件测试' },
  {
    title: '*cypress',
    desc: 'E2E测试',
  },
  {
    title: '*vite-plugin-pages',
    desc: '基于文件的路由增强插件',
  },
  {
    title: '*vite-plugin-vue-layouts',
    desc: '和vite-plugin-pages结合使用，支持抽象的布局系统',
  },
  {
    title: '*ci and cd',
    desc: 'To be complete',
  },
  {
    title: '*changelog 生成 ',
    desc: 'To be complete',
  },
];

export const criteriaFeatures: Feat[] = [
  {
    title: 'ESLint',
    desc: '代码的检查',
  },
  {
    title: 'Prettier',
    desc: '代码的美化和风格的统一',
  },
  {
    title: '*Commitizen',
    desc: 'git提交规范化',
    src: 'https://github.com/commitizen/cz-cli',
  },
  {
    title: '*conventional-changelog',
    desc: '从Commitizen规范化的git提交信息中，自动提取changlog',
    src: 'https://github.com/conventional-changelog/conventional-changelog',
  },
];

export const logicFeatures: Feat[] = [
  {
    title: 'vueRouter',
    desc: '路由',
  },
  {
    title: '*Pinia',
    desc: '全局转台与储存管理',
  },
  {
    title: '*vueuse',
    desc: 'coposition api风格的功能增强',
  },
];
