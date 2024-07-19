<template>
  <div @click="toggleActiveMenu(false)" class="h-full">
    <nav class="sticky top-0 z-10 bg-white flex items-center justify-between py-4 px-6">
      <img class="w-12 object-contain" src="@/assets/images/common/LOGO.jpg" alt="" @click="$router.push('/')" />
      <div class="relative">
        <van-icon v-if="activeMenu" @click="toggleActiveMenu(false)" size="32" name="cross" />
        <van-icon v-else @click.stop="toggleActiveMenu(true)" size="32" name="wap-nav" />

        <TransitionList name="slide-r" class="absolute -right-4 top-14 z-50">
          <div v-show="activeMenu" class="bg-white divide-gray-300 divide-y rounded shadow-md">
            <div
              v-for="item in ModuleList"
              :key="item.name"
              class="pt-2 mx-6 pb-3 flex items-center text-nowrap"
              @click="$router.push({ name: item.routeName })"
            >
              {{ item.name }}
            </div>
          </div>
        </TransitionList>
      </div>
    </nav>
    <router-view v-slot="{ Component }">
      <div class="px-4">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </div>
    </router-view>
  </div>
</template>

<script setup>
import { useToggle } from '@vueuse/core';
import { ModuleList } from '@/config.js';
import TransitionList from '@/components/TransitionList.vue';

const [activeMenu, toggleActiveMenu] = useToggle(false);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
