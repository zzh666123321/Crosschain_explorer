<template>
    <Title title="长安链区块详情"></Title>
    <div>
        <Item title="区块高度">{{ height }}</Item>
        <Item title="timeStamp">{{ data?.data.timeStamp }}</Item>
        <Item title="blockHash">{{ data?.data.blockHash }}</Item>
      <Item title="previousBlockHash">{{ data?.data.previousBlockHash }}</Item>
        <Item title="grwSetRootas">{{ data?.data.rwSetRoot }}</Item>
        <Item title="txRoot">{{ data?.data.txRoot }}</Item>
        <Item title="signature">{{ data?.data.signature }}</Item>
        <Item title="dagHash">{{ data?.data.dagHash }}</Item>
        <Item title="proposerMemberInfo">{{ data?.data.proposerMemberInfo }}</Item>
        <Item title="transactionCount">{{ data?.data.transactionCount }}</Item>

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
import { reactive } from "vue";
import Item from "@/components/Item.vue";
import Title from '@/components/Title.vue';

const props = defineProps({
    height: String
})

const params = reactive({
    id: props.height || '123'
})

const { data, error } = useBlockChainMakerDetail(params)

// const { data, error } = useBlockListChainMaker(params);

//
// const data1 = route.query
// console.log(data1)


// console.log(data)
// console.log(typeof data)

// const datadata = getBlockDetail(String(data1))
// console.log(datadata)


// const data = useTr ansactionList(chainIP)

</script>

<style scoped>
h2 {
    margin-bottom: 24px;
}
</style>