<template>
    <Title title="海河智链区块详情"></Title>
    <div>
        <Item title="blockHeight">{{ height }}</Item>
        <Item title="blockHash">{{ data?.header.hash }}</Item>
        <Item title="timeStamp">{{ data?.header.timestamp }}</Item>


        <Item title="blockSize">{{ data?.header.blockReward }}</Item>
        <Item title="transactionCount">{{ data?.header.transactionCount }}</Item>
        <Item title="previousBlockHash">{{ data?.header.difficulty }}</Item>
        <Item title="merkleTreeRootOfWorldState">{{ data?.header.totalDifficulty }}</Item>
        <Item title="merkleTreeRootOfTransactions">{{ data?.header.size }}</Item>
        <Item title="merkleTreeRootOfTransactionState">{{ data?.header.stateRoot }}</Item>
        <Item title="signerPubkey">{{ data?.header.parentHash }}</Item>

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
import { useBlockDetail } from "@/composition/useMock";
import { reactive } from "vue";
import Item from "@/components/Item.vue";
import Title from '@/components/Title.vue';

const props = defineProps({
    height: String
})

const params = reactive({
    id: props.height || '123'
})

const { data, error } = useBlockDetail(params)
</script>

<style scoped>
h2 {
    margin-bottom: 24px;
}
</style>