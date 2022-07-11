import { RouteRecordRaw } from 'vue-router';
import WindiCSSVue from '~/components/preset/WindiCSS/WindiCSS.vue';
import Readme from '../readme.md';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    component: Readme,
  },
  {
    path: 'test',
    name: 'Test',
    children: [
      {
        path: '/windicss',
        name: 'Windicss',
        component: WindiCSSVue,
      },
    ],
  },
];
