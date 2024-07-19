<template>
  <div>
    <div class="gap-y-4 gap-x-4 grid grid-cols-2">
      <div
        class="rounded shadow flex flex-col items-center"
        v-for="item of ITEMS"
        :key="item.name"
        @click="$router.push({ name: 'ItemDetail', params: { name: item.name } })"
      >
        <img v-if="item.logo" class="w-32 h-32 object-contain" :src="item.logo" />
        <div class="p-2 w-full flex-1 flex items-center">
          <span class="line-clamp-2">{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ITEMS } from './data.js';
</script>
<style scoped></style>
