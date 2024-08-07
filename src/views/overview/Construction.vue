<template>
  <div>
    <van-cell-group inset class="flex flex-col gap-y-4">
      <van-cell
        class="box-item"
        v-for="article in WechatArticles"
        :key="article.title"
        :title="article.title"
        is-link
        :url="article.link"
      />
    </van-cell-group>
  </div>
</template>
<script setup>
import { WechatArticles } from './data.js';
</script>
<style scoped></style>
