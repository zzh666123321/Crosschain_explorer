<script setup lang="ts">
import Logo from "@/components/Logo.vue";
import Nav from "@/components/header/Nav.vue";
import { onSearch } from "@/composition/search";
import { SEARCH_PLACE_HOLDER } from "@/common/constants";
import { ref } from "vue";  

const searchKey = ref<string>("");
const placeholder = SEARCH_PLACE_HOLDER;
</script>

<template>
  <div class="header">
    <div class="global-pc-container header-content">
      <div class="logo">
        <Logo></Logo>
      </div>
      <div>
        <!--<div class="group">
          <a-input
            v-model:value="searchKey"
            :bordered="false"
            :placeholder="placeholder"
            @pressEnter="onSearch(searchKey)"
          />
          <span class="bar"></span>
        </div>-->
      </div>
      <Nav></Nav>
    </div>
  </div>
</template>

<style scoped>
.header-content {
  padding: 0 var(--margin-lr, 92px);
  align-items: center;
  line-height: 64px;
  display: flex;
}

.header-content > :nth-child(1) {
  flex-basis: 200px;
}

.header-content > :nth-child(2) {
  flex: 1;
}

.header-content > :nth-child(3) {
  flex-shrink: 0;
}

.group {
  line-height: 48px;
  max-width: 500px;
  position: relative;
}

.group input {
  padding-left: 0;
}

.bar {
  width: 100%;
  display: block;
  position: relative;
}

.bar:before {
  left: 0%;
  width: 0;
  bottom: 1px;
  content: "";
  height: 2px;
  position: absolute;
  background: #646464;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/* active state */
input:focus ~ .bar:before {
  width: 100%;
}
</style>
