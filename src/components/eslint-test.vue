<template>
  <div>ESlint 的测试</div>
  {{ numberTest }}
</template>

<script setup lang="ts">
interface Test {
  x: number;
}

const props = defineProps<Test>();
console.log(props);

//
let numberTest = 123;

async function asyncFunc() {
  return 2;
}
// asyncFunc();
</script>

<style lang="less" scoped>
//
div {
  text-align: center;
}
</style>
