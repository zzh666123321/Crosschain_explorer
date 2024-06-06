<template>
    <Title title="海河智链区块详情"></Title>
    <div>
        <Item title="区块高度">{{ height }}</Item>
        <Item title="timeStamp">{{ data?.data.timeStamp }}</Item>
        <Item title="merkleTreeRootOfTransactionState">{{ data?.data.merkleTreeRootOfTransactionState }}</Item>
        <Item title="blockHash">{{ data?.data.blockHash }}</Item>
        <Item title="previousBlockHash">{{ data?.data.previousBlockHash }}</Item>
        <Item title="signerPubkey">{{ data?.data.signerPubkey }}</Item>
        <Item title="merkleTreeRootOfTransactions">{{ data?.data.merkleTreeRootOfTransactions }}</Item>
        <Item title="transactionCount">{{ data?.data.transactionCount }}</Item>
        <Item title="blockSize">{{ data?.data.blockSize }}</Item>
        <Item title="merkleTreeRootOfWorldState">{{ data?.data.merkleTreeRootOfWorldState }}</Item>

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
import { useBlockH2ChainDetail } from "@/composition/useMock";
import { reactive } from "vue";
import Item from "@/components/Item.vue";
import Title from '@/components/Title.vue';

const props = defineProps({
    height: String
})

const params = reactive({
    id: props.height || '123'
})

// const { data, error } = useBlockDetail(params)
const { data, error } = useBlockH2ChainDetail(params)
</script>

<style scoped>
h2 {
    margin-bottom: 24px;
}
</style>