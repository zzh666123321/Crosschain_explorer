<template>
  <Title title="长安链详情" />

  <div>
    IP和端口号是：{{ data1.chainIP}}
  </div>
   <Search :placeholder="placeholder1"></Search>
  <BlockTable :type="columnsChainMaker" :from="from" :data="data"></BlockTable>
  <!-- <BlockTable :type="type" :from="from" :data="data1"></BlockTable> -->
</template>

<script lang="ts" setup>

import { reactive } from "vue";
import BlockTable from "@/components/tables/BlockTableChainMaker.vue";
import Title from "@/components/Title.vue";
import Search from "@/pages/pc/Home/Search/Index.vue";
import {sendPostRequest} from "@/api/block";
import {useTransactionList} from "@/api/block";
import {columnsChainMaker} from "@/models/block";
import {getBlockDetail} from "@/api/block";
import {CHOOSE_PLACE_HOLDER} from "@/common/constants";
import {columns} from "@/models/block";
import { useBlockList } from "@/composition/useMock";
import { useBlockListChainMaker } from "@/composition/useMock";
import { useRouter, useRoute} from 'vue-router'

const router = useRouter()
const route = useRoute()
const data1 = route.query

const from = 'block'


const placeholder1=CHOOSE_PLACE_HOLDER;
const params = reactive({
  s: "id(desc)",
  limit: 10,
  offset: 0,
});

// const { data, error } = useBlockList(params);


const { data, error } = useBlockListChainMaker(params);


// const data1 = route.query
// console.log(data1)


// console.log(data)
// console.log(typeof data)

// const datadata = getBlockDetail(String(data1))
// console.log(datadata)


// const data = useTr ansactionList(chainIP)



</script>

<style scoped></style>
