<template>
    <Title title="以太坊区块详情"></Title>
    <div>
        <Item title="区块高度">{{ height }}</Item>
        <Item title="difficulty">{{ data?.data.difficulty }}</Item>
        <Item title="minerAddress">{{ data?.data.minerAddress }}</Item>

      <Item title="gaslimit">{{ data?.data.gasLimit }}</Item>
        <Item title="totalDifficulty">{{ data?.data.totalDifficulty }}</Item>
        <Item title="previousBlockAddress">{{ data?.data.previousBlockAddress }}</Item>
        <Item title="gasUsed ">{{ data?.data.gasUsed }}</Item>
        <Item title="stateRoot">{{ data?.data.stateRoot }}</Item>
        <Item title="transactionCount">{{ data?.data.transactionCount }}</Item>
        <Item title="blockReward">{{ data?.data.blockReward }}</Item>
        <Item title="blockSize">{{ data?.data.blockSize }}</Item>
        <Item title="timestamp">{{ data?.data.timestamp }}</Item>
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
import { reactive } from "vue";
import Item from "@/components/Item.vue";
import Title from '@/components/Title.vue';
import { useFetchFactory } from '@/api/factory'
import shuffle from "@/utils/shuffle";
import { wrapResponse } from "@/api/request";
import txs from '@/mock/transactions.json'

const props = defineProps({
    height: String
})

const params = reactive({
    id: props.height || '123'
})

// const { data, error } = useBlockDetail(params)
const { data, error } = useBlockEthDetail(params)
console.log(data)
console.log(typeof data)

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