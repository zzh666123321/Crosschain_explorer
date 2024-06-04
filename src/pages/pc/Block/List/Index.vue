<template>
  <Title title="长安链详情" />
   <Search :placeholder="placeholder1"></Search>
  <BlockTable :type="type" :from="from" :data="data"></BlockTable>
  <!-- <BlockTable :type="type" :from="from" :data="data1"></BlockTable> -->
</template>

<script lang="ts" setup>

import { reactive } from "vue";
import BlockTable from "@/components/tables/BlockTable.vue";
import Title from "@/components/Title.vue";
import Search from "@/pages/pc/Home/Search/Index.vue";
import {sendPostRequest} from "@/api/block";
import {useTransactionList} from "@/api/block";
import {getBlockDetail} from "@/api/block";
import {CHOOSE_PLACE_HOLDER} from "@/common/constants";
import {columns} from "@/models/block";
import { useBlockList } from "@/composition/useMock";
import { useBlockList1 } from "@/composition/useMock";
import { useRouter, useRoute} from 'vue-router'

const router = useRouter()
const route = useRoute()

const from = 'block'
const type = "columns"


const placeholder1=CHOOSE_PLACE_HOLDER;
const params = reactive({
  s: "id(desc)",
  limit: 10,
  offset: 0,
});

// const { data, error } = useBlockList(params);


const { data, error } = useBlockList1(params);


const data1 = route.query
console.log(data1)


console.log(data)
console.log(typeof data)

const datadata = getBlockDetail(String(data1))
console.log(datadata)


// const data = useTr ansactionList(chainIP)



</script>

<style scoped></style>
