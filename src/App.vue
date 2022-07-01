<template>
  <Readme></Readme>
  <CodeTest></CodeTest>
  <TestExposeVue ref="test"></TestExposeVue>
</template>

<script setup lang="ts">
import 'github-markdown-css';
import Readme from '../README.md';
import CodeTest from '~/components/preset/md/code.md';
import TestExposeVue from '~/components/preset/TestExpose.vue';
import { onMounted, ref } from 'vue';

type T = InstanceType<typeof TestExposeVue>;

const test = ref<InstanceType<typeof TestExposeVue>>();

onMounted(() => {
  // t.value?.test();
  test.value?.test();
  test.value?.test();
  test.value?.test();
  test.value?.test();
});
</script>

<style lang="less">
// #region markdown style
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
// #endregion
</style>
