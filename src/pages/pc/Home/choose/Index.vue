<template>
  <!--div独占一行-->
  <div>
    <span>请选择想要查看的区块链：</span>

<!--    写一个下拉框，用el-select 选项为options-->
<el-select v-model="selectedValue" placeholder="点击此处选择区块链" @change="handleSelection" popper-class="custom">
  <el-option
    v-for="item in options"
    :key="item.value"
    :label="item.label"
    :value="item.value">
  </el-option>
</el-select>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

import { useRoute} from 'vue-router';
  const selectedValue = ref(5);
  const options = [
    { label: '链A', value: 1 },
    { label: '链B', value: 2 },
    { label: '链C', value: 3 },
    { label: '链D', value: 4 },
    { label: '请选择', value: 5 }
  ];

  const router = useRouter();
const value = selectedValue.value;
watch(selectedValue, (newValue, oldValue) => {
  handleSelection();
});
  function handleSelection() {
    console.log("selectedValue = ", value);
    const parameterValue =selectedValue.value;
  const chainid =selectedValue.value;
  switch (chainid) {
    case 1:
      router.push({
         // 使用实际的值来替换动态参数
        name: 'chain',

        query: { parameterName: parameterValue },

      });
      break;
    case 2:
      router.push({
        // 使用实际的值来替换动态参数
        name: 'chain',

        query: { parameterName: parameterValue },

      });
      break;
    case 3:
      router.push({
        // 使用实际的值来替换动态参数
        name: 'chain',

        query: { parameterName: parameterValue },

      });
      break;
    case 4:
      router.push({
        // 使用实际的值来替换动态参数
        name: 'chain',

        query: { parameterName: parameterValue },

      });
      break;
    case 5:
      router.push({
        // 使用实际的值来替换动态参数
        name: 'chain',

        query: { parameterName: parameterValue },

      });
      break;
    default:
      break;
  }

    watch(selectedValue, (value) => {
      handleSelection();

    });
};
</script>


