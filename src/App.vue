<template>
  <div>
    <TSwitch size="large"></TSwitch>
    <div>{{ x }}</div>
    <Readme></Readme>
    <CodePreset></CodePreset>
  </div>
</template>

<script setup lang="ts">
import Readme from '../README.md';

const x = ref('23');

console.log(x.value);
console.log(x.value);
console.log(x.value);
</script>
