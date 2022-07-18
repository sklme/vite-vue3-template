import { RouteRecordRaw } from 'vue-router';

const feature: RouteRecordRaw = {
  path: '/feature',
  name: 'Feature',
  component: {},
  children: [
    {
      path: '/windicss',
      name: 'Windicss',
      component: {},
    },
    {
      path: '/md',
      name: 'Markdown',
      component: {},
    },
    {
      path: '/pinia',
      name: 'Pinia',
      component: {},
    },
    {
      path: '/vitest',
      name: 'Vitest',
      component: {},
    },
    {
      path: '/vueuse',
      name: 'Vueuse',
      component: {},
    },
    {
      /*       
      "unplugin-auto-import": "^0.9.2",
      "unplugin-vue-components": "^0.21.0", 
      */
      path: '/unplugin',
      name: 'Unplugin',
      component: {},
    },
    {
      path: 'cz',
      name: 'Comitizen',
      component: {},
    },
  ],
};

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    component: {},
  },
  // 功能
  feature,
];
