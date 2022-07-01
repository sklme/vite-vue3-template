<template>
  <div>{{ x }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const x = ref(123);

function test() {
  console.log('expose 测试成功');
  return 'expose 测试成功';
}

defineExpose({
  test,
});
</script>

<style lang="less" scoped>
//
</style>
