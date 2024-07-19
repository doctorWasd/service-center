<template>
  <div>
    <div v-if="CharityOrganizationMap[name]">
      <h1 class="h1">{{ CharityOrganizationMap[name].name }}</h1>
      <div v-html="CharityOrganizationMap[name].desc"></div>
    </div>

    <div v-if="CharityOrganizationMap[name]" class="mt-4 space-y-4">
      <img v-for="image in CharityOrganizationMap[name].images" class="w-full object-contain" :src="image" alt="" />
    </div>
  </div>
</template>
<script setup>
import { CharityOrganizationMap } from './data.js';

defineProps({
  name: String,
});
</script>
<style scoped></style>
