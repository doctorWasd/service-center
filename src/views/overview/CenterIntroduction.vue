<template>
  <div>
    <van-swipe autoplay="3000" lazy-render>
      <van-swipe-item v-for="swipe in swipes" :key="swipe">
        <div class="flex justify-center">
          <img class="h-32 object-cover object-center" :src="swipe" alt="" />
        </div>
      </van-swipe-item>
    </van-swipe>

    <div class="text-justify mt-4">
      <div>
        余姚市社会组织（党群）服务中心是余姚市首个市级枢纽型社会组织综合服务平台。中心的前身是余姚市社会组织促进会，实体化运作民办非企业单位注册登记工作。为推动社会组织参与社会治理，中心秉持党建引领社会组织发展，遵循王阳明先生"知行合一、崇德向善”的理念，坚持以"社会组织党建的促进中心、社会组织成长的培育中心、
        社会组织能力建设的支持中心"为发展目标，并采取"政府引导、专业运作、部门联动、跨界合作"模式的综合性社会组织服务平台。
      </div>
      <br />
      <div>
        中心整合社会资源，发展创新社会服务，为各类社会组织提供党建服务、政策咨询、信息交流、培育孵化、创新展示、资源对接、评估指导等全方位服务和专业化支持，培育一批有影响、有规模、有能力、有信誉的社会组织，全面提升余姚市社会组织的公信力、竞争力、凝聚力，打造专业化的余姚市社会组织孵化基地、公益社会组织资源交流平台和能力建设集训基地。
      </div>

      <h1 class="h1">荣誉展示</h1>

      <div class="mt-4 space-y-4">
        <img class="w-full object-contain" v-for="honor in honors" :key="honor" :src="honor" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import pic1 from '@/assets/images/1、中心介绍/1.jpg';
import pic2 from '@/assets/images/1、中心介绍/6D2A5173-1.jpg';
import pic3 from '@/assets/images/1、中心介绍/_MG_8006.jpg';
import pic4 from '@/assets/images/1、中心介绍/_MG_8245.jpg';
import pic5 from '@/assets/images/1、中心介绍/IMG_20210707_132743.jpg';
import pic6 from '@/assets/images/1、中心介绍/IMG_20210707_140620.jpg';
import pic7 from '@/assets/images/1、中心介绍/mmexport1630907541380.jpg';
import pic8 from '@/assets/images/荣誉展示/5A级党群服务中心.jpg';
import pic9 from '@/assets/images/荣誉展示/党群服务中心.jpg';

const swipes = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];

const honors = [pic8, pic9];
</script>
<style scoped></style>
