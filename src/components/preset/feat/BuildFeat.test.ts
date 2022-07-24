import { test, describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import BuildFeatVue from '~/components/preset/feat/BuildFeat.vue';

describe('BuildFeat.vue', () => {
  const wrapper = mount(BuildFeatVue, {
    props: {
      features: [
        {
          title: 'Vite',
          desc: '使用Vite作为代码构建工具，提升开发体验',
        },
      ],
    },
  });

  console.log(1);
  console.log(wrapper.text());
  console.log(1);

  expect(wrapper.text()).toContain('编译、开发、测试与发布');
});
