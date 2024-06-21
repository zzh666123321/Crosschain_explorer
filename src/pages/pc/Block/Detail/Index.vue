<template>
    <Title title="长安链区块详情"></Title>
    <div>
        <Item title="区块高度">{{ height }}</Item>
        <Item title="时间戳">{{ data?.data.timeStamp }}</Item>
        <Item title="区块哈希">{{ data?.data.blockHash }}</Item>
      <Item title="前块哈希">{{ data?.data.previousBlockHash }}</Item>
        <Item title="全局根">{{ data?.data.rwSetRoot }}</Item>
        <Item title="交易根">{{ data?.data.txRoot }}</Item>
        <Item title="签名">{{ data?.data.signature }}</Item>
        <Item title="dag哈希">{{ data?.data.dagHash }}</Item>
        <Item title="成员信息">{{ data?.data.proposerMemberInfo }}</Item>
        <Item title="交易数">{{ data?.data.transactionCount }}</Item>

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
import { useBlockChainMakerDetail } from "@/composition/useMock";
import { useBlockListChainMaker } from "@/composition/useMock";
import {getBlockDetail} from "@/api/block";
import {getBlocksDetail} from "@/api/block";
import { reactive,onMounted } from "vue";
import Item from "@/components/Item.vue";
import Title from '@/components/Title.vue';
import { useFetchFactory } from '@/api/factory'
import shuffle from "@/utils/shuffle";
import { ref } from 'vue';
import { wrapResponse } from "@/api/request";
import txs from '@/mock/transactions.json';
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

// const { data, error } = useBlockChainMakerDetail(params)
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


// const  datadata = await getBlocksDetail(String(props.height),"116.204.36.31:1000")
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