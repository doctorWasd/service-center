<template>
  <div>
    <div v-if="OrganizationMap[name]">
      <h1 class="h1">{{ OrganizationMap[name].name }}</h1>
      <div v-html="OrganizationMap[name].desc"></div>
    </div>

    <div v-if="OrganizationMap[name]" class="mt-4 space-y-4">
      <img v-for="image in OrganizationMap[name].images" class="w-full object-contain" :src="image" alt="" />
    </div>

    <div v-if="RescueTeam[name]">
      <h1 class="h1">{{ RescueTeam[name].name }}</h1>
      <div v-html="RescueTeam[name].desc"></div>
    </div>

    <div v-if="RescueTeam[name]" class="mt-4 space-y-4">
      <img v-for="image in RescueTeam[name].images" class="w-full object-contain" :src="image" alt="" />
    </div>
  </div>
</template>
<script setup>
import { OrganizationMap, RescueTeam } from './data.js';

defineProps({
  name: String,
});
</script>
<style scoped></style>
