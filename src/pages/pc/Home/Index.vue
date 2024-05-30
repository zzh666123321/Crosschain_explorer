<script lang="ts">
import { defineComponent, ref } from 'vue';
import Search from "./search/Index.vue";
import Header from "./header/Index.vue";
import Chains from "./chains/Index.vue";
import Background from "./background/Index.vue";
import Choose from "./choose/Index.vue";
import { KCHAIN, KCHAIN_INTRO, KCHAIN_TITLE, SEARCH_PLACE_HOLDER ,CHOOSE_PLACE_HOLDER } from "@/common/constants";
import SubTitle from "@/components/mobile/SubTitle.vue";

export default defineComponent({
  components: {
    SubTitle,
    Background,
    Choose,
    Search,
    Header,
    Chains
  },
  setup() {
    const en = ref(KCHAIN);
    const title = ref(KCHAIN_TITLE);
    const intro = ref(KCHAIN_INTRO);
    const placeholder = ref(SEARCH_PLACE_HOLDER);
    const placeholder1 = ref(CHOOSE_PLACE_HOLDER);

    const navigateToSearch = () => {
      // 在这里处理路由的导航
    };
    return {
      en: KCHAIN,
      title: KCHAIN_TITLE,
      intro: KCHAIN_INTRO,
      placeholder: SEARCH_PLACE_HOLDER,
      placeholder1: CHOOSE_PLACE_HOLDER
    };
  },
  methods: {
    gotocrosschain() {
      this.$router.push('/crosschain');
    },

    gotdasbchain() {
      this.$router.push('/AllChain');
    },
    gotbroken() {
      this.$router.push('/broken');
    }

  }
});
</script>

<template>

  <div class="background">
    <Background :cols="5"></Background>
  </div>
    <div class="page">

        <div class="left">
            <h1>{{ en }}</h1>
            <h2>{{ title }}</h2>
          <div>点击此处前往单链页面：
            <el-button @click="gotdasbchain">跳转</el-button>
            <!-- <Search :placeholder="placeholder1"></Search>-->
          </div>
          <div>点击此处前往跨链页面：
          <el-button @click="gotbroken">跳转</el-button>
           <!-- <Search :placeholder="placeholder1"></Search>-->
          </div>
        </div>
    </div>


</template>

<style scoped>
.page {
    padding: 0 var(--margin-lr, 92px);
  position: relative;
  z-index: 10; /* 设置较高的 z-index 值 */
}

.left {
    padding: 140px 0;
    width: 500px;
}

h1 {
    font-size: 64px;
}

h2 {
    font-size: 48px;

}

.background {
  position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
  z-index:1;
}

</style>
