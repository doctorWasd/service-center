<template>
  <div>
    <div class="grid grid-cols-2 gap-4">
      <div class="border rounded shadow p-4" v-for="m in ModuleList" @click="$router.push({ name: m.routeName })">
        {{ m.name }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { ModuleList } from '@/config.js';
</script>
<style scoped></style>
