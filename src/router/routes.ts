import { RouteRecordRaw } from 'vue-router';
import FeatIndexVue from '~/components/FeatIndex.vue';
import WindiCSSVue from '~/components/preset/WindiCSS/WindiCSS.vue';

const feature: RouteRecordRaw = {
  path: '/feature',
  name: 'Feature',
  redirect: () => {
    return { name: 'Windicss' };
  },
  children: [
    {
      path: 'windicss',
      name: 'Windicss',
      component: WindiCSSVue,
    },
    {
      path: 'md',
      name: 'Markdown',
      component: {},
    },
    {
      path: 'pinia',
      name: 'Pinia',
      component: {},
    },
    {
      path: 'vitest',
      name: 'Vitest',
      component: {},
    },
    {
      path: 'vueuse',
      name: 'Vueuse',
      component: {},
    },
    {
      /*       
      "unplugin-auto-import": "^0.9.2",
      "unplugin-vue-components": "^0.21.0", 
      */
      path: 'unplugin',
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
    component: FeatIndexVue,
  },
  // 功能
  feature,
];
