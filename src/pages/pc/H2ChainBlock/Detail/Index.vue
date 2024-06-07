<template>
  <Title title="海河智链区块详情"></Title>
  <div>
    <Item title="区块高度">{{ height }}</Item>
    <Item title="时间戳">{{ data?.data.timeStamp }}</Item>
    <Item title="交易状态根">{{
      data?.data.merkleTreeRootOfTransactionState
    }}</Item>
    <Item title="块哈希">{{ data?.data.blockHash }}</Item>
    <Item title="前块哈希">{{ data?.data.previousBlockHash }}</Item>
    <Item title="公钥">{{ data?.data.signerPubkey }}</Item>
    <Item title="交易根">{{
      data?.data.merkleTreeRootOfTransactions
    }}</Item>
    <Item title="交易数">{{ data?.data.transactionCount }}</Item>
    <Item title="块大小">{{ data?.data.blockSize }}</Item>
    <Item title="全局根">{{
      data?.data.merkleTreeRootOfWorldState
    }}</Item>
  </div>
  <!-- <a-divider />
    <h2>交易列表</h2>
    <a-timeline>
        <a-timeline-item v-for="(tx, i) in data?.transactions">
            <TxsTimelineItem :tx="tx"></TxsTimelineItem>
        </a-timeline-item>
    </a-timeline> -->
</template>

<script setup lang="ts">
import TxsTimelineItem from "./TxsTimelineItem.vue";
import {useBlockEthDetail, useBlockH2ChainDetail} from "@/composition/useMock";
import { reactive, onMounted } from "vue";
import Item from "@/components/Item.vue";
import Title from "@/components/Title.vue";
import { useFetchFactory } from "@/api/factory";
import shuffle from "@/utils/shuffle";
import { wrapResponse } from "@/api/request";
import txs from "@/mock/transactions.json";
import { getBlocksDetail } from "@/api/block";
import { ref } from "vue";

const props = defineProps({
  height: String,
});

const params = reactive({
  id: props.height || "123",
});




// const { data, error } = useBlockH2ChainDetail(params)
// console.log(data)
// console.log(typeof data)

let data = reactive({
  data: {
  },
});
onMounted(() => {
  getBlocksDetail(String(props.height), "116.204.36.31:8000").then((res) => {
    console.log(data);

    data.data = res.data;
    console.log(data.data);
  });
});

// const  datadata = await getBlocksDetail(String(props.height),"116.204.36.31:8000")
// console.log("datadata======="+datadata)
// console.log(datadata)

// const data12 = datadata.data

// console.log("data12======="+data12)
// console.log(data12)
// console.log(typeof(data12))

// const useBlock = useFetchFactory<API.BlockDetailParams, typeof data12>(
//     () => {
//         const data = data12
//         return Promise.resolve(wrapResponse({
//             ...data,
//             transactions: txs.data
//         }))
//     }
// )
// const {data,error} = useBlock(params)
// console.log(data)
// console.log(typeof data)
</script>

<style scoped>
h2 {
  margin-bottom: 24px;
}
</style>