<template>
  <Title title="长安链详情" />
   <Search :placeholder="placeholder1"></Search>
  <BlockTable :data="data"></BlockTable>
</template>

<script lang="ts" setup>
import BlockTable from "@/components/tables/BlockTable.vue";
import { useBlockList } from "@/composition/useMock";
import Title from "@/components/Title.vue";
import { reactive } from "vue";
import Search from "@/pages/pc/Home/Search/Index.vue";
import {CHOOSE_PLACE_HOLDER} from "@/common/constants";
import {useRouter, useRoute} from  'vue-router'
// const route = useRoute()
// router.push({
//   path: "/",
//   params: {
//     id:1,
//     name: 'zzz'
//   }
// })
// const params = route.params


const placeholder1=CHOOSE_PLACE_HOLDER;
const params = reactive({
  s: "id(desc)",
  limit: 10,
  offset: 0,
});

const { data, error } = useBlockList(params);

// getDetail(id).then(res=> {
//  const  data1 = res
// })
</script>

<style scoped></style>
