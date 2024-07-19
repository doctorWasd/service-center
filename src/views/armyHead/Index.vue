<template>
  <div class="space-y-8 py-4">
    <div v-for="armyHead in Army_Head_List" :key="armyHead.name" class="flex flex-col space-y-2">
      <img class="w-full object-contain" :src="armyHead.image" alt="" />

      <div class="underline">{{ armyHead.organization }} - {{ armyHead.name }}</div>
      <van-text-ellipsis :content="armyHead.content" expand-text="展开" collapse-text="收起" :rows="3" />
    </div>
  </div>
</template>
<script setup lang="ts">
import p1 from '@/assets/images/4、领军人物/余姚市乐善公益基金会杨海林.jpg';
import p2 from '@/assets/images/4、领军人物/余姚市心理援助协会 励娜.jpg';
import p3 from '@/assets/images/4、领军人物/余姚市精武体育会 张宝勇.jpg';

const Army_Head_List = [
  {
    image: p1,
    organization: '余姚农村商业银行慈善基金会',
    name: '杨海林',
    content:
      '杨海林自2016年3月担任余姚农村商业银行慈善基金会秘书长以来，围绕社会需求和基金会定位精准开展50余个公益项目，实施项目金额达1305.93万元，受益困难儿童、贫困母亲、残障人士、孤寡老人等超过2万人次。2023年10月获评浙江省社会组织领军人物。',
  },
  {
    image: p2,
    organization: '余姚市心理援助协会',
    name: '励娜',
    content:
      '2017年4月，励娜发起成立余姚市心理援助协会。协会以“不忘初心，助人自助”为宗旨，协同170余名会员积极推动大众心理健康知识的普及，开展心理健康讲座和培训600多场，受众50000余人次；为4000多户家庭提供婚姻咨询，调解1000多对夫妻关系。',
  },
  {
    image: p3,
    organization: '余姚市精武体育会',
    name: '张宝勇',
    content:
      '2015年3月张宝勇担任余姚精武会第七届会长持续至今，以传承“精武拳技”为己任，弘扬精武精神，拓展精武事业，协会会员从600多名发展到2000多名，成为余姚市大型体育社团组织，成为传承省非遗“精武拳技”和发展全民健身运动的主力军。',
  },
];
</script>
<style scoped></style>
