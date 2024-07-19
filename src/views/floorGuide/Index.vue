<template>
  <div>
    <h1 class="h1 text-center">余姚市社会组织服务中心入驻社会组织办公室分布图</h1>

    <h1 class="h1">一楼办公室安排：</h1>
    <van-image @click="showImage(1)" width="100%" height="10rem" fit="cover" position="left" :src="p1" />

    <h1 class="h1">二楼专业性社会组织办公室安排：</h1>
    <van-image @click="showImage(2)" width="100%" height="10rem" fit="cover" position="left" :src="p2" />

    <h1 class="h1">三楼公益慈善类社会组织办公室安排：</h1>
    <van-image @click="showImage(3)" width="100%" height="10rem" fit="cover" position="left" :src="p3" />

    <h1 class="h1">四楼枢纽型社会组织办公室安排：</h1>
    <van-image @click="showImage(4)" width="100%" height="10rem" fit="cover" position="left" :src="p4" />
  </div>
</template>
<script setup lang="ts">
import p1 from '@/assets/images/楼层指引/1.png';
import p2 from '@/assets/images/楼层指引/2.png';
import p3 from '@/assets/images/楼层指引/3.png';
import p4 from '@/assets/images/楼层指引/4.png';
import { showImagePreview } from 'vant';

const showImage = (index: number) => {
  showImagePreview({
    images: [p1, p2, p3, p4],
    startPosition: index,
  });
};
</script>
<style scoped></style>
