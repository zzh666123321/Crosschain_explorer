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
const placeholder1=CHOOSE_PLACE_HOLDER;
const params = reactive({
  s: "id(desc)",
  limit: 10,
  offset: 0,
});

const { data, error } = useBlockList(params);
const from = "h2block"
</script>

<style scoped></style>
