<template>
  <div>
    <div class="gap-y-4 gap-x-4 grid grid-cols-2">
      <div
        class="box-item flex flex-col items-center"
        v-for="item of CharityOrganizationMap"
        :key="item.name"
        @click="$router.push({ name: 'WelfareOrganizationDetail', params: { name: item.name } })"
      >
        <img v-if="item.logo" class="w-32 h-32 object-contain" :src="item.logo" />
        <div class="p-2 flex items-center justify-center">
          <span class="line-clamp-2">{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { CharityOrganizationMap } from './data.js';
</script>
<style scoped></style>
