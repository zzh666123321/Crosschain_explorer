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
import {getBlocksDetail} from "@/api/block";
import { reactive,onMounted } from "vue";
import Item from "@/components/Item.vue";
import Title from '@/components/Title.vue';
import { useFetchFactory } from '@/api/factory'
import shuffle from "@/utils/shuffle";
import { ref } from 'vue';
import { wrapResponse } from "@/api/request";
import txs from '@/mock/transactions.json';

const props = defineProps({
    height: String
})

const params = reactive({
    id: props.height || '123'
})

// const { data, error } = useBlockChainMakerDetail(params)
// console.log(data)
// console.log(typeof data)

let data = reactive({
  data: {
  },
});
onMounted(() => {
  getBlocksDetail(String(props.height), "116.204.36.31:1000").then((res) => {
    console.log(data);

    data.data = res.data;
    //   console.log("datadata=======" + datadata);
    //   console.log(datadata);

    //   const data12 = datadata;

    //   console.log("data12=======" + data12);
    //   console.log(data12);
    //   console.log(typeof data12);

    // const useBlock = useFetchFactory<
    //   API.BlockListParams,
    //   typeof datadata.data.tenBlocksInfo
    // >(() => {
    //   const data = shuffle<(typeof datadata.data.tenBlocksInfo)[0]>(
    //     datadata.data.tenBlocksInfo
    //   );
    //   return Promise.resolve(wrapResponse(data));
    // });
    // const { data, error } = useBlock(params);
    //   data= data12;
    //   console.log(data12)
    console.log(data.data);
  });
});


// const  datadata = await getBlocksDetail(String(props.height),"116.204.36.31:1000")
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