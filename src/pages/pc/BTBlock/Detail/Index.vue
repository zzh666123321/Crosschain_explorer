<template>
  <Title title="布比链区块详情"></Title>
  <div>
    <Item title="高度">{{ height }}</Item>
    <Item title="区块哈希">{{ data?.data.hash }}</Item>
    <Item title="时间戳">{{ data?.data.closeTime }}</Item>
    <Item title="前块哈希">{{ data?.data.previousHash }}</Item>
    <Item title="验证哈希">{{ data?.data.validatorsHash}}</Item>
    <Item title="账户状态树哈希">{{ data?.data.accountTreeHash}}</Item>
    <Item title="共识哈希">{{ data?.data.consensusValueHash}}</Item>
    <Item title="版本号">{{ data?.data.version}}</Item>

    <!-- <Item title="难度">{{ data?.data.difficulty }}</Item>
    <Item title="矿工">{{ data?.data.minerAddress }}</Item>

    <Item title="gas上限">{{ data?.data.gasLimit }}</Item>
    <Item title="总难度">{{ data?.data.totalDifficulty }}</Item>
    <Item title="前块地址">{{ data?.data.previousBlockAddress }}</Item>
    <Item title="消耗gas">{{ data?.data.gasUsed }}</Item>
    <Item title="交易根">{{ data?.data.stateRoot }}</Item>
    <Item title="交易数">{{ data?.data.transactionCount }}</Item>
    <Item title="区块奖励">{{ data?.data.blockReward }}</Item>
    <Item title="区块大小">{{ data?.data.blockSize }}</Item>
    <Item title="时间戳">{{ data?.data.timestamp }}</Item> -->
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
import { useBlockEthDetail } from "@/composition/useMock";
import { reactive,onMounted } from "vue";
import Item from "@/components/Item.vue";
import Title from '@/components/Title.vue';
import { useFetchFactory } from '@/api/factory'
import shuffle from "@/utils/shuffle";
import { wrapResponse } from "@/api/request";
import txs from '@/mock/transactions.json'
import { getBlocksDetail } from "@/api/block";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const data1 = route.query;
const query = String(data1.chainIP)
console.log("query============")
console.log(query)

const props = defineProps({
  height: String
})

const params = reactive({
  id: props.height || '123'
})

// const { data, error } = useBlockDetail(params)

// const { data, error } = useBlockEthDetail(params)
// console.log(data)
// console.log(typeof data)
//


let data = reactive({
  data: {
  },
});
onMounted(() => {
  getBlocksDetail(String(props.height), String(query)).then((res) => {
    console.log(data);

    data.data = res.data;
    console.log(data.data);
  });
});


// const  datadata = await getBlocksDetail(String(props.height),"116.204.36.31:10012")
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