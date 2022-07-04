<template>
  <Readme></Readme>
  <Code></Code>
</template>

<script setup lang="ts">
import Readme from '../README.md';
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
