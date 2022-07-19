<template>
  <template v-for="feat in features" :key="feat.title">
    <router-link :to="feat.src || ''" children:text="hex-cccccc">
      <div text="xl" hover:text="underline">
        {{ feat.title }}
      </div>
      <p text="base 14px" py="8px">{{ feat.desc }}</p>
    </router-link>
  </template>
</template>

<script setup lang="ts">
interface Feat {
  title: string;
  desc: string;
  src?: string;
}

const features: Feat[] = [
  {
    title: 'Windi CSS',
    desc: '支持windi CSS，可以使用新的方式写样式。',
    src: 'feature/windicss',
  },
];
</script>

<style lang="less" scoped>
//
</style>
