<template>
  <h1>
    <Title title="布比链详情"/>
  </h1>
  <div>
    <h3>IP和端口号是：{{ data1.chainIP}}</h3>
  </div>  <Search :placeholder="placeholder1"></Search>
  <BlockTable :type="columnsBTChain" :from="from" :data="data" :data1="query"></BlockTable>
</template>

<script lang="ts" setup>
import BlockTable from "@/components/tables/BlockTableBTChain.vue";
import Search from "@/pages/pc/Home/Search/Index.vue";
import { useBlockList } from "@/composition/useMock";
import Title from "@/components/Title.vue";
import { reactive } from "vue";
import {CHOOSE_PLACE_HOLDER} from "@/common/constants";
import {columns} from "@/models/block";
import {columnsBTChain} from "@/models/block";
import {getBlockDetail} from "@/api/block";
import { useBlockListEth } from "@/composition/useMock";
import { useRouter, useRoute} from 'vue-router'
import { ref } from 'vue';
import { useFetchFactory } from '@/api/factory'
import shuffle from "@/utils/shuffle";
import { wrapResponse } from "@/api/request";

const router = useRouter()
const route = useRoute()

const placeholder1=CHOOSE_PLACE_HOLDER;
const params = reactive({
  s: "id(desc)",
  limit: 10,
  offset: 0,
});


const from = 'btblock'
// const { data, error } = useBlockList(params);



const data1 = route.query
const query = String(data1.chainIP)

// const { data, error } = useBlockListEth(params);
// console.log(data)
// console.log(typeof data)

let data = ref([]);
getBlockDetail(String(data1.chainIP)).then((res) => {
  const datadata = res;
  console.log("datadata=======" + datadata);
  console.log(datadata);

  const data12 = datadata.data.tenBlocksInfo;

  console.log("data12=======" + data12);
  console.log(data12);
  console.log(typeof data12);

  data.value = data12;
});




</script>

<style scoped>
h1 {
  font-size: 50px;
}
h3 {
  font-size: 25px;
}

</style>
