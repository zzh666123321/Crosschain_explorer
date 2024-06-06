<template>
  <Title title="海河智链详情" />

  <div>
    IP和端口号是：{{ data1.chainIP}}
  </div>
   <Search :placeholder="placeholder1"></Search>
  <BlockTable :type="columnsH2Chain" :from = "from" :data="data"></BlockTable>
</template>

<script lang="ts" setup>
import BlockTable from "@/components/tables/BlockTableH2Chain.vue";
import { useBlockList } from "@/composition/useMock";
import Title from "@/components/Title.vue";
import { reactive } from "vue";
import Search from "@/pages/pc/Home/Search/Index.vue";
import {CHOOSE_PLACE_HOLDER} from "@/common/constants";
import {columnsH2Chain} from "@/models/block";
import {getBlockDetail} from "@/api/block";
import { useBlockListH2Chain } from "@/composition/useMock";
import { useRouter, useRoute} from 'vue-router'
import { ref } from 'vue';
import { useFetchFactory } from '@/api/factory'
import shuffle from "@/utils/shuffle";
import { wrapResponse } from "@/api/request";


const router = useRouter()
const route = useRoute()
const from= 'h2block'

const placeholder1=CHOOSE_PLACE_HOLDER;
const params = reactive({
  s: "id(desc)",
  limit: 10,
  offset: 0,
});


const data1 = route.query

const { data, error } = useBlockListH2Chain(params);
console.log(data)
console.log(typeof data)

// const  datadata = await getBlockDetail("116.204.36.31:8000")
// console.log("datadata======="+datadata)
// console.log(datadata)

// const data12 = datadata.data.tenBlocksInfo

// console.log("data12======="+data12)
// console.log(data12)
// console.log(typeof(data12))

// const useBlock = useFetchFactory<API.BlockListParams, typeof datadata.data.tenBlocksInfo>(
//     () => {
//         const data = shuffle<typeof datadata.data.tenBlocksInfo[0]>(datadata.data.tenBlocksInfo);
//         return Promise.resolve(wrapResponse(data));
//     }
// )

// const {data,error} = useBlock(params)
// console.log(data)
// console.log(typeof data)


</script>

<style scoped></style>
