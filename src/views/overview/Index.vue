<template>
  <div>
    <van-tabs shrink v-model:active="active" @click-tab="handleTabClick">
      <van-tab v-for="d in data" :key="d.routeName" :title="d.name">
        <div class="py-4">
          <router-view></router-view>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const props = defineProps({
  type: String,
});
const route = useRoute();
const active = ref(route.meta.tabName);

const data = [
  {
    name: '中心介绍',
    routeName: 'CenterIntroduction',
    value: 0,
  },
  {
    name: '入驻组织',
    routeName: 'SettleIn',
    value: 1,
  },
  {
    name: '慈善组织',
    routeName: 'WelfareOrganization',
    value: 2,
  },
  {
    name: '清廉社会组织建设',
    routeName: 'Construction',
    value: 3,
  },
];

const router = useRouter();
const handleTabClick = (params) => {
  const { name } = params;

  const found = data.find((item) => item.value === name);
  if (found) {
    router.replace({ name: found.routeName });
  }
};
</script>
<style scoped></style>
