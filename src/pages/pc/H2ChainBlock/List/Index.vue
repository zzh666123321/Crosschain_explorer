<template>
  <Title title="海河智链详情" />
   <Search :placeholder="placeholder1"></Search>
  <BlockTable :type="columns" :from = "from" :data="data"></BlockTable>
</template>

<script lang="ts" setup>
import BlockTable from "@/components/tables/BlockTable.vue";
import { useBlockList } from "@/composition/useMock";
import Title from "@/components/Title.vue";
import { reactive } from "vue";
import Search from "@/pages/pc/Home/Search/Index.vue";
import {CHOOSE_PLACE_HOLDER} from "@/common/constants";
import {columns} from "@/models/block";
import {getBlockDetail} from "@/api/block";
import { useBlockList1 } from "@/composition/useMock";
import { useRouter, useRoute} from 'vue-router'

const router = useRouter()
const route = useRoute()


const placeholder1=CHOOSE_PLACE_HOLDER;
const params = reactive({
  s: "id(desc)",
  limit: 10,
  offset: 0,
});

// const { data, error } = useBlockList(params);
const { data, error } = useBlockList1(params);

const from = "h2block"


const data1 = route.query
console.log(data1)


console.log(data)
console.log(typeof data)

const datadata = getBlockDetail(String(data1))
console.log(datadata)





</script>

<style scoped></style>
