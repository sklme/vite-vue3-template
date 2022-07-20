<template>
  <h2 text="3xl center" mb="4">Vue 3 开发环境</h2>
  <div>
    <h4 text="2xl" mb="4">代码构建</h4>
    <div
      v-for="feat in features"
      :key="feat.title"
      pt="12px"
      first-of-type:pt="0"
    >
      <router-link :to="feat.src || ''" class="link">
        <div text="xl" hover:text="underline" class="title">
          {{ feat.title }}
        </div>
        <p text="base 14px gray-500" py="8px">{{ feat.desc }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Feat {
  title: string;
  desc: string;
  src?: string;
}

const buildFeats: Feat[] = [
  {
    title: 'Vite',
    desc: '使用Vite作为代码构建工具，提升开发体验',
  },
];

const features: Feat[] = [
  {
    title: 'Windi CSS',
    desc: '支持windi CSS，可以使用新的方式写样式。',
    src: 'feature/windicss',
  },
  {
    title: 'Markdown',
    desc: '支持markdown识别为vue组件，可以直接在vue sfc引用作为子组件',
  },
  {
    title: 'Pinia',
    desc: '使用pinia作为全局的状态管理',
  },
  {
    title: 'Vitest',
    desc: '使用vitest做组件测试和单元测试',
  },
  {
    title: 'Unplugin',
    desc: 'unplugin-auto-import自动按需引用vue的依赖，unplugin-vue-components自动按需引用vue组件',
  },
  {
    title: 'Comitizen',
    desc: 'Comitizen作为git提交的规范化工具',
  },
];
</script>

<style lang="less" scoped>
//
.link {
  &:hover {
    .title {
      @apply underline;
    }
  }
}
</style>
