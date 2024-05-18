<template>
    <Title title="跨链交易列表" />



  <div class="popup">
    <PopupPage></PopupPage>
</div>

    <Search :placeholder="placeholder"></Search>
  <div class="table-container">
    <CrossTxTable :data="data"></CrossTxTable>

  </div>

</template>

<script lang="ts" setup>

import Title from '@/components/Title.vue';
import { getTxList } from "@/utils/storage";
import {reactive, ref} from "vue";
import { detail } from "@/api/transaction";
import BlockTable from "@/components/tables/BlockTable.vue";
import { parallelWithLimit } from "@/utils/promises";
import Search from "@/pages/pc/Home/Search/Index.vue";
import {SEARCH_PLACE_HOLDER} from "@/common/constants";
import PopupPage from '@/pages/pc/crosschain/do/Index.vue';
import { usecrossTxList} from "@/composition/useMock";
import CrossTxTable from "@/components/tables/CrossTxTable.vue";
const placeholder=SEARCH_PLACE_HOLDER;

/**获取交易最新的状态 */

const params = reactive({
  s: "id(desc)",
  limit: 10,
  offset: 0,
});
const { data, error } = usecrossTxList(params);
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
</style>