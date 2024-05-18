<template>
  <div class="modal" v-show="showModal">
    <div class="modal-content bigger-modal"> <!-- 添加 bigger-modal 类 -->
      <div v-if="!success">{{ phases[currentPhaseIndex] }}</div>
      <div v-else>
        <h2>操作成功</h2>
        <div class="buttons">

          <el-button type="primary" @click="redirectTo('crosschain')">跳转到交易页面</el-button>
          <el-button type="primary" @click="redirectTo('crossTX')">返回跨链主页</el-button>

        </div>
      </div>
      <div class="progress-bar">
        <div class="progress" :style="{ width: progress + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {computed, onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";

export default {
  name: 'Result',
  setup() {
    const phasesA = ['跨链通信协议建立', '跨链地址生成', '锁定资产','生成跨链证明',' '];
    const phasesB = ['注册中继链', '跨链资产锁定', '中继链验证','目标链接收和验证',' '];
    const currentPhaseIndex = ref(0);
    const success = ref(false);
    const showModal = ref(true);

    const startPhaseRotation = () => {
      const interval = setInterval(() => {
        currentPhaseIndex.value = (currentPhaseIndex.value + 1) % (parameterValueFromQuery.value === 'A' ? phasesA.length : phasesB.length);
        if (currentPhaseIndex.value === (parameterValueFromQuery.value === 'A' ? phasesA.length : phasesB.length) - 1) {
          success.value = true;
          clearInterval(interval); // 停止计时器
        }
      }, 3000);
    };

    onMounted(() => {
      startPhaseRotation();
    });

    const router = useRouter();

    const redirectTo = (routeName) => {
      if (routeName === 'crossTX') {
        router.push({ name: 'crosschain' });
      } else if (routeName === 'crosschain') {
        router.push({ name: 'crossTX' });
      }
    };

    const route = useRoute();

    const payload2 = route.query.parameterName;
    const parameterValueFromQuery = ref('');
    parameterValueFromQuery.value = payload2;
    console.log('记录', payload2);
    console.log('记录', parameterValueFromQuery.value);

    const progress = computed(() => {
      if (success.value) {
        return 100;
      } else {
        return ((currentPhaseIndex.value + 1) / phases.value.length) * 100;
      }
    });

    const phases = computed(() => {
      return parameterValueFromQuery.value === 'A' ? phasesA : phasesB;
    });

    return {
      phasesA,
      phasesB,
      currentPhaseIndex,
      success,
      showModal,
      startPhaseRotation,
      redirectTo,
      progress,
      phases
    };
  }
};
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}

.bigger-modal { /* 添加 bigger-modal 样式 */
  width: 500px; /* 根据您想要的更大尺寸调整宽度 */
  height: 300px; /* 根据您想要的更大尺寸调整高度 */
}

.progress-bar {
  width: 100%;
  height: 20px;
  border: 1px solid #ccc;
}

.progress {
  height: 100%;
  background-color: #00aaff;
  transition: width 0.5s;
}


 .buttons {
   display: flex;
   justify-content: space-between;
 }

</style>