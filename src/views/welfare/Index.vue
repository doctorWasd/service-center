<template>
  <div>
    <van-tabs shrink v-model:active="active" @click-tab="handleTabClick">
      <van-tab v-for="(welfareItems, year) in WelfareList" :title="year">
        <div class="py-4">
          <div class="gap-y-4 gap-x-4 grid grid-cols-2">
            <div
              class="box-item flex flex-col items-center"
              v-for="item of welfareItems"
              :key="item.name"
              @click="go(item.link)"
            >
              <div class="p-2 w-full flex-1 flex items-center">
                <span class="line-clamp-2">{{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script setup lang="ts">
import { WelfareList } from './index.js';
import { go } from '@/utils/link';
import { ref } from 'vue';

const active = ref(0);

const handleTabClick = () => {};
</script>
<style scoped></style>
