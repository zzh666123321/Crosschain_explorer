<template>
    <Title title="跨链交易列表" />

  <div class="popup">
    <PopupPage></PopupPage>
</div>

    <Search :placeholder="placeholder"></Search>
  <div class="table-container">
    <TransactionTable :data="transactions"></TransactionTable>
  </div>>

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
import PopupPage from '@/pages/pc/crosschain/do/Index.vue';
import tx from  "@/mock/tx.json";
import {getCrossTx} from "@/api/block";


const placeholder=SEARCH_PLACE_HOLDER;



// const transactions = ref<tx>(getTxList());
//  const  transactions = tx.data.crossTransactions
// console.log(transactions)

let transactions = ref([]);
getCrossTx().then((res) => {
  const datadata = res;
  console.log("datadata=======" + datadata);
  console.log(datadata);

  const data12 = datadata.data.crossTransactions

  console.log("data12=======" + data12);
  console.log(data12);
  console.log(typeof data12);

  transactions.value = data12;
});
console.log(transactions)

/**获取交易最新的状态 */
// const tasks = transactions.value.map((txId) =>
//   detail({ tx_hash: txId.tx_hash || "" })
//  );
// parallelWithLimit(tasks, 3, (index, res) => {
//   transactions.value[index] = res.data.tx;
// });


</script>

<style scoped>
.popup {
  position: relative;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0);
}
.table-container {
  z-index: 10;
}

h3 {
  font-size: 25px;
}

</style>