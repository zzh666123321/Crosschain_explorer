<template>
  <div class="mod-sys__menu">
    <el-steps :active="active" finish-status="success" align-center>
      <el-step v-for="(item, index) of stepTitle" :key="index" :title="item" :class="stepClassObj(index)" />
    </el-steps>
    <div v-show="active == 0">请您选择选择源链和目标链</div>
    <div v-show="active == 1">请您选择想要调用的合约</div>
    <div v-show="active == 2">请您选择想要调用的函数</div>
    <div v-show="active == 3">请您选择填写函数的参数</div>
    <div v-show="active == 4">请您耐心等待跨链交易</div>

  </div>
  <div v-show="active == 0"> 请您选择源链类型</div>


  <div class="btn">
    <el-button type="primary" @click="gobackHandle()" class="btn_s">上一步</el-button>
    <el-button type="primary" @click="stepSubmitHandle()" class="btn_s">下一步</el-button>
  </div>

</template>

<script setup>
import { ref, reactive, toRefs, computed } from "vue";
const active = ref(0);
const stepData = reactive({
  stepSuc: [0],
  stepTitle: ["第一步", "第二步","第三步","第四步"]
});
let stepClassObj = computed((val) => {
  return (val) => {
    return {
      stepSuc: stepData.stepSuc.includes(val),
      stepErr: !stepData.stepSuc.includes(val)
    };
  };
});
const { stepTitle, stepSuc } = toRefs(stepData);
const stepSubmitHandle = () => {
  if (++active.value > 4) active.value = 0;
  // ++active.value;
};
const gobackHandle = () => {
  if (--active.value <0) active.value = 0;
  // ++active.value;
};
</script>


<style>

.btn_s{
  font-size: 30px;
  height:50px;
}

.btn{
  position: fixed;
  bottom:50px;
  padding-left: 600px;
  font-size: 20px;
}
.stepSuc:hover {
  cursor: pointer;
}

.stepErr:hover {
  cursor: not-allowed;
}

.step_success {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
</style>