<template>
    <Title title="区块详情"></Title>
    <div>
        <Item title="txHash">{{ height }}</Item>
        <Item title="blockHash">{{ data?.header.hash }}</Item>
        <Item title="blockNumber">{{ data?.header.timestamp }}</Item>
      <Item title="from">{{ data?.header.miner }}</Item>
        <Item title="gas">{{ data?.header.blockReward }}</Item>
        <Item title="gasPrice">{{ data?.header.transactionCount }}</Item>
        <Item title="难度">{{ data?.header.difficulty }}</Item>
        <Item title="nonce">{{ data?.header.totalDifficulty }}</Item>
        <Item title="to">{{ data?.header.size }}</Item>
        <Item title="value">{{ data?.header.stateRoot }}</Item>
        <Item title="input">{{ data?.header.parentHash }}</Item>
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