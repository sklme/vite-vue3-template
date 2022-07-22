<template>
  <h2 text="2xl " mb="8">{{ title }}</h2>
  <div>
    <!-- <h4 text="2xl" mb="4">{{ title }}</h4> -->
    <div
      v-for="feat in props.features"
      :key="feat.title"
      pt="12px"
      first-of-type:pt="0"
    >
      <router-link :to="feat.src || ''" class="link">
        <div text="lg" hover:text="underline" class="title">
          {{ feat.title }}
        </div>
        <p text="base 14px gray-500" py="8px">{{ feat.desc }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface Feat {
  title: string;
  desc: string;
  src?: string;
}

interface Props {
  features: Feat[];
  title: string;
}

const props = defineProps<Props>();
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
