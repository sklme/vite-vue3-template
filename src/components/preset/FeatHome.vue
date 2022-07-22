<template>
  <h2 text="2xl center" mb="4">Vue 3 开发环境</h2>
  <t-row :gutter="16">
    <t-col :span="4">
      <router-link :to="{ name: 'BuildFeat' }">
        <t-card hover-shadow cursor="pointer">
          <div text="lg">编译、开发与发布</div>
          <t-list text="gray-600">
            <t-list-item v-for="feat in buildFeatures" :key="feat.title">
              {{ feat.title }}
            </t-list-item>
          </t-list>
        </t-card>
      </router-link>
    </t-col>
    <t-col :span="4">
      <router-link :to="{ name: 'Creteria' }">
        <t-card hover-shadow cursor="pointer">
          <div text="lg">规范化</div>
          <t-list text="gray-600">
            <t-list-item v-for="feat in criteriaFeatures" :key="feat.title">
              {{ feat.title }}
            </t-list-item>
          </t-list>
        </t-card>
      </router-link>
    </t-col>
    <t-col :span="4">
      <router-link :to="{ name: 'Logic' }">
        <t-card hover-shadow cursor="pointer">
          <div text="lg">功能</div>
          <t-list text="gray-600">
            <t-list-item v-for="feat in logicFeatures" :key="feat.title">
              {{ feat.title }}
            </t-list-item>
          </t-list>
        </t-card>
      </router-link>
    </t-col>
  </t-row>
</template>

<script setup lang="ts">
import {
  buildFeatures,
  criteriaFeatures,
  logicFeatures,
} from '~/components/preset/features';
</script>
