<template>
  <div>
    <div v-if="ITEMS[name]">
      <h1 class="h1">{{ ITEMS[name].name }}</h1>
      <div v-html="ITEMS[name].desc"></div>
    </div>

    <div v-if="ITEMS[name]" class="mt-4 space-y-4">
      <img v-for="image in ITEMS[name].images" class="w-full object-contain" :src="image.name" alt="" />
    </div>
  </div>
</template>
<script setup>
import { ITEMS } from './data.js';
defineProps({
  name: String,
});
</script>
<style scoped></style>
