<template>
  <div>
    <div class="gap-y-4 gap-x-4 grid grid-cols-2">
      <div class="box-item flex flex-col items-center" v-for="item of NewsList" :key="item.name" @click="go(item.link)">
        <!-- <img v-if="item.logo" class="w-32 h-32 object-contain" :src="" /> -->
        <div class="p-2 w-full flex-1 flex items-center">
          <span class="line-clamp-2">{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { NewsList } from './index';
import { go } from '@/utils/link';
</script>
<style scoped></style>
