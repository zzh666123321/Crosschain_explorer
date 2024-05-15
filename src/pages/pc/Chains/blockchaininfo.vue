<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import Background from '@/pages/pc/Home/background/Index.vue';
import SubTitle from "@/components/mobile/SubTitle.vue";

export default defineComponent({
  components: {
    SubTitle,
    Background,
  },
  setup() {
    const parameterValueFromQuery = ref('');

    const route = useRoute();
    const router = useRouter();

    const navigateToSearchPage = (parameter: string) => {
      router.push({ path: '/blocks', query: { parameterName: parameter } });
    };

    const navigateToSearchPageWithParam = (parameter: string) => {
      router.push({ path: '/transactions', query: { parameterName: parameter } });
    };

    const created = () => {
      const queryParameterValue = route.query.parameterName;
      if (queryParameterValue) {
        if (Array.isArray(queryParameterValue)) {
         // parameterValueFromQuery.value = queryParameterValue[0];
        } else {
          parameterValueFromQuery.value = queryParameterValue;
        }
        // 执行你的逻辑
      } else {
        // 处理参数不存在的情况
      }
    };

    return {
      parameterValueFromQuery,
      navigateToSearchPage,
      navigateToSearchPageWithParam,
    };
  },
});
</script>


<template>
  <div class="container">
    <div class="info">
      <h2>区块链ID: {{$route.query.parameterName}}</h2>
      <h2>区块链类型: {{ blockchainType }}</h2>
      <h2>区块高度: {{ blockHeight }}</h2>
      <el-button type="primary" @click="navigateToSearchPage">查看该区块链的区块</el-button>
     <!-- <el-button type="primary" @click="navigateToSearchPageWithParam(parameterValueFromQuery)">查看该区块链的跨链交易</el-button>-->
    </div>

    <div class="background">
      <Background :cols="5"></Background>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex; /* 使用 flex 布局 */
  align-items: center; /* 垂直居中对齐 */
}

.info {
  padding: 5px 0;
  width: 500px;
}

.background {
  position: relative;
  width:100%;
  height: 100%;
  flex: 1; /* 占据剩余空间 */
  height: 100vh; /* 使用视口高度作为高度 */
  overflow: visible;
  pointer-events: none;
  z-index: 10;
}

h2 {
  margin-right: 50px;
}
</style>