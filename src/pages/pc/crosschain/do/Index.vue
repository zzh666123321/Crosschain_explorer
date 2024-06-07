

<script>
import { ElButton, ElSelect } from 'element-plus';
import router from "@/router";
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
export default {
  name: 'PopupPage',
  setup() {
    const isPopupVisible = ref(false);
    const selectedStartChainID = ref(null);
    const selectedTargetChainID = ref(null);
    const selectedOption = ref(null);
    const selectedContract = ref(null);

    const router = useRouter();
    const chainIDs = [1, 2, 3]; // 替换为实际的Chain ID列表

    const showPopup = () => {
      isPopupVisible.value = true;
    };

    const hidePopup = () => {
      isPopupVisible.value = false;
    };

    const execute = () => {
      // 执行操作并传递参数到后端
      const payload = {
        startChainID: selectedStartChainID.value,
        targetChainID: selectedTargetChainID.value,
        option: selectedOption.value,
        contract: selectedContract.value
      };
      const payload3 =selectedOption.value ;
      console.log('执行操作', payload3);

      router.push({ name: 'crossend', query:  { parameterName: payload3 } });

    };

    return {
      isPopupVisible,
      selectedStartChainID,
      selectedTargetChainID,
      selectedOption,
      selectedContract,
      chainIDs,
      showPopup,
      hidePopup,
      execute,
    };
  },
  methods: {
    gotbroken(){
      this.$router.push('/broken');
    }

  },
};



</script>


<template>
  <div>
    <el-button @click="gotbroken()"> <h3>发起跨链交易 </h3>></el-button>
  </div>
</template>

<style>
.primary:focus,
.el-select.el-select--focused {
  outline: none !important;
  box-shadow: none !important;
}
.popup{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
}



.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid black;
}

.popup-fade-enter-active,
.popup-fade-leave-active {
  transition: opacity 0.5s;
}
.popup-fade-enter,
.popup-fade-leave-to {
  opacity: 0;
}

.select-container {
  margin-bottom: 16px;
}

.select-container label {
  display: block;
  margin-bottom: 4px;
}
button.el-button:focus,
div.el-select.el-select--focused {
  outline: none !important;
  box-shadow: none !important;
}

h3 {
  font-size: 25px;
}

</style>