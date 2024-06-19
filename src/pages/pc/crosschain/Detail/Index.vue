<template>
  <div>
    <Title title="交易详情"></Title>
    <div class="info">
      <Item title="源链IP">{{ transaction?.data.srcIp}}</Item>

      <Item title="源链端口">{{ transaction?.data.srcPort }}</Item>
      <Item title="源链发送Hash">
        <div>{{ transaction?.data.srcHash }}</div>
      </Item>
      <Item title="目的链IP">
        <div>{{ transaction?.data.dstIp }}</div>
      </Item>
      <Item title="目的链端口">
        <div>{{ transaction?.data.dstPort }}</div>
      </Item>
      <Item title="目的接收Hash">
        <div>{{ transaction?.data.dstHash }}</div>

      </Item>
      <Item title="源链确认Hash">
        <div>{{ transaction?.data.responseHash }}</div>

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

// let transaction = reactive({
//   data: {
//   },
// });
// transaction.data = tx.data


var srcChainType = "h2chain"
var dstChainType = "h2chain"
var src = "116.204.36.193:8000"
var dst = "116.204.36.193:8000"

const route = useRoute();
const data1 = route.query;

srcChainType = String(data1.srcChainType)
dstChainType = String(data1.dstChainType)

src = String(data1.src)
dst = String(data1.dst)


console.log(data1)

let transaction = reactive({
  data: {
  },
});
onMounted(() => {
  sendCrossTx(String(srcChainType),String(dstChainType),String(src),String(dst)).then((res) => {
    transaction.data = res.data;
    console.log(transaction);
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
