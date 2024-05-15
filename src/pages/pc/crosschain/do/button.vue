<template>
  <div>
    <el-button type="primary" @click="showPopup">点击此处发起跨链操作</el-button>
    <transition name="popup-fade">
      <div v-if="isPopupVisible" class="popup" @keydown.esc="hidePopup" tabindex="0">
        <div class="popup-content">
          <h2>跨链操作页</h2>
          <p>请选择来源链，目的链与跨链方式</p>
          <div class="select-container">
            <label for="startChainID">起始链ID:</label>
            <el-select v-model="selectedStartChainID" id="startChainID" placeholder="选择起始链ID">
              <el-option
                  v-for="chainID in chainIDs"
                  :key="chainID"
                  :value="chainID"
                  :label="chainID"
              ></el-option>
            </el-select>
          </div>
          <div class="select-container">
            <label for="targetChainID">目标链ID:</label>
            <el-select v-model="selectedTargetChainID" id="targetChainID" placeholder="选择目标链ID">
              <el-option
                  v-for="chainID in chainIDs"
                  :key="chainID"
                  :value="chainID"
                  :label="chainID"
              ></el-option>
            </el-select>
          </div>
          <div class="select-container">
            <label for="selectedOption">跨链方式:</label>
            <el-select v-model="selectedOption" id="selectedOption" placeholder="选择选项">
              <el-option label="直连" value="A"></el-option>
              <el-option label="中继" value="B"></el-option>
            </el-select>
          </div>
          <div class="select-container">
            <label for="selectedContract">选择合约:</label>
            <el-select v-model="selectedContract" id="selectedContract" placeholder="选择合约">
              <el-option label="合约1" value="1"></el-option>
              <el-option label="合约2" value="2"></el-option>
            </el-select>
          </div>
          <el-button type="primary" @click="execute">执行</el-button>
          <button @click="hidePopup">关闭</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ElButton, ElSelect } from 'element-plus';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'PopupButton',
  components: {
    ElButton,
    ElSelect,
  },
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
        contract: selectedContract.value,
      };
      const payload3 = selectedOption.value;
      console.log('执行操作', payload3);

      router.push({ name: 'crossend', query: { parameterName: payload3 } });
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
};
</script>

<style>
.primary:focus,
.el-select.el-select--focused {
  outline: none !important;
  box-shadow: none !important;
}
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
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
</style>