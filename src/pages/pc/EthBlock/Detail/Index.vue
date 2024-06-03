<template>
    <Title title="以太坊区块详情"></Title>
    <div>
        <Item title="timestamp">{{ height }}</Item>
        <Item title="blockSize">{{ data?.header.hash }}</Item>
        <Item title="previousBlockAddress">{{ data?.header.timestamp }}</Item>

      <Item title="gaslimit">{{ data?.header.blockReward }}</Item>
        <Item title="gasUsed">{{ data?.header.blockReward }}</Item>
        <Item title="stateRoot">{{ data?.header.transactionCount }}</Item>
        <Item title="totalDifficulty ">{{ data?.header.difficulty }}</Item>
        <Item title="blockReward">{{ data?.header.totalDifficulty }}</Item>
        <Item title="minerAddress">{{ data?.header.size }}</Item>
        <Item title="transactionCount">{{ data?.header.stateRoot }}</Item>
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