<template>
  <Readme></Readme>
  <CodeTest></CodeTest>
  <TestExposeVue></TestExposeVue>
</template>

<script setup lang="ts">
import 'github-markdown-css';
import Readme from '../README.md';
import CodeTest from '~/components/preset/md/code.md';
import TestExposeVue from '~/components/preset/TestExpose.vue';

console.log(TestExposeVue);
console.log(TestExposeVue.test);
console.log(TestExposeVue.test);
console.log(TestExposeVue.test);
console.log(TestExposeVue.test);
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
