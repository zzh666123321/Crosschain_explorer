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
import { ref, reactive } from "vue";
import Title from "@/components/Title.vue";
import Item from "@/components/Item.vue";
import tx from "@/mock/singleTx.json";
const hasResult = ref(false);


const props = defineProps({
  hash: String,
});

const transaction = tx.data
// const transaction = ref<API.TransactionDetail>({});

const params = reactive({
  tx_hash: props.hash || "123",
});

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
