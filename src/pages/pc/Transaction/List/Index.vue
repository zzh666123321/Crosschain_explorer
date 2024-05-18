<template>
    <Title title="交易列表" />
  <Search :placeholder="placeholder"></Search>
    <TransactionTable :data="transactions"></TransactionTable>
</template>

<script lang="ts" setup>
import TransactionTable from '@/components/tables/TransactionTable.vue';
import Title from '@/components/Title.vue';
import { getTxList } from "@/utils/storage";
import { ref } from "vue";
import { detail } from "@/api/transaction";
import { parallelWithLimit } from "@/utils/promises";
import Search from "@/pages/pc/Home/Search/Index.vue";
import {SEARCH_PLACE_HOLDER} from "@/common/constants";
const placeholder=SEARCH_PLACE_HOLDER;
const transactions = ref<API.TransactionDetail[]>(getTxList());
/**获取交易最新的状态 */
const tasks = transactions.value.map((tx) =>
  detail({ tx_hash: tx.tx_hash || "" })
);
parallelWithLimit(tasks, 3, (index, res) => {
  transactions.value[index] = res.data.tx;
});
</script>

<style scoped>

</style>