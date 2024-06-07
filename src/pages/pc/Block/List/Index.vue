<template>

  <Title title="长安链详情" />

  <div><h3>IP和端口号是：{{ data1.chainIP }}</h3></div>
  <Search :placeholder="placeholder1"></Search>
  <BlockTable :type="columnsChainMaker" :from="from" :data="data"></BlockTable>
  <!-- <BlockTable :type="type" :from="from" :data="data1"></BlockTable> -->
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import BlockTable from "@/components/tables/BlockTableChainMaker.vue";
import Title from "@/components/Title.vue";
import Search from "@/pages/pc/Home/Search/Index.vue";
import { sendPostRequest } from "@/api/block";
import { useTransactionList } from "@/api/block";
import { columnsChainMaker } from "@/models/block";
import { getBlockDetail } from "@/api/block";
import { CHOOSE_PLACE_HOLDER } from "@/common/constants";
import { columns } from "@/models/block";
import { useBlockList } from "@/composition/useMock";
import { useBlockListChainMaker } from "@/composition/useMock";
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";
import { useFetchFactory } from "@/api/factory";
import shuffle from "@/utils/shuffle";
import { wrapResponse } from "@/api/request";

const router = useRouter();
const route = useRoute();
const data1 = route.query;

const from = "block";

const placeholder1 = CHOOSE_PLACE_HOLDER;
const params = reactive({
  s: "id(desc)",
  limit: 10,
  offset: 0,
});

// const { data, error } = useBlockListChainMaker(params);
// console.log(data)
// console.log(typeof data)

let data = ref([]);
getBlockDetail("116.204.36.31:1000").then((res) => {
  const datadata = res;
  console.log("datadata=======" + datadata);
  console.log(datadata);

  const data12 = datadata.data.tenBlocksInfo;

  console.log("data12=======" + data12);
  console.log(data12);
  console.log(typeof data12);

  data.value = data12;
});


// const datadata = await getBlockDetail("116.204.36.31:1000");
</script>

<style scoped>


h3 {
  font-size: 25px;
}

</style>
