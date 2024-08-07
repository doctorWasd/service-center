<template>
  <div>
    <div class="gap-y-4 gap-x-4 grid grid-cols-2">
      <div
        class="box-item flex flex-col justify-between items-center"
        v-for="item of OrganizationMap"
        :key="item.name"
        @click="$router.push({ name: 'SettleInDetail', params: { name: item.name } })"
      >
        <img v-if="item.logo" class="w-32 h-32 object-contain flex-1" :src="item.logo" />
        <van-empty v-else></van-empty>
        <div class="p-2 w-full flex items-center justify-center">
          <span class="line-clamp-2">{{ item.name }}</span>
        </div>
      </div>
    </div>

    <div class="mt-8">
      <h1 class="h1">救援队</h1>
      <div class="gap-y-4 gap-x-4 grid grid-cols-2">
        <div
          class="box-item flex flex-col items-center"
          v-for="item of RescueTeam"
          :key="item.name"
          @click="$router.push({ name: 'SettleInDetail', params: { name: item.name } })"
        >
          <img v-if="item.logo" class="w-32 h-32 object-contain" :src="item.logo" />
          <div class="p-2 flex-1 flex items-center justify-center">
            <span class="line-clamp-2">{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { OrganizationMap, RescueTeam } from './data.js';
</script>
<style scoped></style>
