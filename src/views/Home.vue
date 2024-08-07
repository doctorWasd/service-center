<template>
  <div>
    <img class="w-32 object-contain relative -left-4 -top-4" src="@/assets/images/common/LOGO.png" alt="" />

    <div class="px-14 pb-4">
      <img src="@/assets/images/Home/余姚市社会组织服务中心.png" alt="" />
      <div class="mt-6 grid grid-cols-2 gap-6">
        <div class="rounded" v-for="m in ModuleList" @click="$router.push({ name: m.routeName })">
          <img class="w-48 object-contain" :src="m.bg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ModuleList } from '@/config.js';
</script>
<style scoped></style>
