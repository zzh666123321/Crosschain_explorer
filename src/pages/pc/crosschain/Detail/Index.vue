<template>

    <Title title="交易详情"></Title>
    <div class="info">

      <Item title="交易ID">{{ data?.header.tx_id }}</Item>
      <Item title="状态">{{ data?.header.status }}</Item>

      <Item title="发起人">{{ data?.header.username }}</Item>
      <Item title="合约">{{data?.header.contract}}</Item>
      <Item title="起始链">{{ data?.header.from }}</Item>

      <Item title="目的链">{{ data?.header.to }}</Item>
      <Item title="跨链方式">{{data?.header.type}}</Item>
      <Item title="传递参数">{{data?.header.parameter}}</Item>
        <!-- <div>r : <a-tag> {{transaction?.r}} </a-tag></div>
            <div style="margin: 6px 0;">s : <a-tag> {{transaction?.s}} </a-tag></div>
            <div>v : <a-tag> {{transaction?.v}} </a-tag></div> -->



  </div>

</template>

<script setup lang="ts">
import { detail } from "@/api/transaction";
import { ref, reactive } from "vue";
import Title from "@/components/Title.vue";
import Item from "@/components/Item.vue";
import {useCrossDetail} from "@/composition/useMock";


const props = defineProps({
  txid: String
})

const params = reactive({
  id: props.txid || '123'
})

const { data, error } = useCrossDetail(params)
</script>

<style scoped>
.info {
  margin-bottom: 32px;
}

.text-area {
  border-left: lightgray 2px solid;
  padding-left: 6px;
  color: gray;
}
</style>
