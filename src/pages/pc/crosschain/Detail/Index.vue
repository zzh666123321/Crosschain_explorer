<template>
  <div>
    <Title title="交易详情"></Title>
    <div class="info">
      <Item title="源链IP">{{ transaction?.srcIp}}</Item>

      <Item title="源链端口">{{ transaction?.srcPort }}</Item>
      <Item title="源链Hash">
        <div>{{ transaction?.srcHash }}</div>
      </Item>
      <Item title="目的链IP">
        <div>{{ transaction?.dstIp }}</div>
      </Item>
      <Item title="目的链端口">
        <div>{{ transaction?.dstPort }}</div>
      </Item>
      <Item title="目的链Hash">
        <div>{{ transaction?.dstHash }}</div>

      </Item>

    </div>
  </div>

</template>

<script setup lang="ts">
import { detail } from "@/api/transaction";
import Title from "@/components/Title.vue";
import Item from "@/components/Item.vue";
import tx from "@/mock/singleTx.json";
import {ref, reactive,onMounted } from "vue";
import { useRoute } from "vue-router";
import {sendCrossTx} from "@/api/block";

const hasResult = ref(false);


const props = defineProps({
  hash: String,
});

const params = reactive({
  tx_hash: props.hash || "123",
});

const transaction = tx.data

const route = useRoute();
const data1 = route.query;
const srcChainType = data1.srcChainType
const dstChainType = data1.dstChainType
console.log(data1)

let data = reactive({});
onMounted(() => {
  sendCrossTx(String(srcChainType),String(dstChainType)).then((res) => {
    console.log(data);
    data = tx.data;
    console.log(data);
  });
});





// const transaction = ref<API.TransactionDetail>({});







// detail(params).then((res) => {
//   if (res && res.data.tx) {
//     transaction.value = res.data.tx;
//     hasResult.value = true;
//
//   } else {
//     console.log("查询结果为空");
//   }
// });
</script>

<style scoped>
.info {
  margin-bottom: 32px;
}

h3 {
  font-size: 25px;
}


.text-area {
  border-left: lightgray 2px solid;
  padding-left: 6px;
  color: gray;
}
</style>
