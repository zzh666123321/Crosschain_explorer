<script setup lang="ts">
import Logo from "@/components/Logo.vue";
import Nav from "@/components/header/Nav.vue";
import Vue from 'vue';
import { onSearch } from "@/composition/search";
import { CHAIN_INFO } from "@/common/constants";
import { ref } from "vue";

import { message } from 'ant-design-vue';
import { defineComponent, reactive } from 'vue';
import router from '@/router';
const searchKey = ref<string>("");
const placeholder = CHAIN_INFO;


</script>
<template>
  <div class="container">
    <div class="box"></div>
    <router-link to="/login" class="box red">
      <span>区块链A</span>
    </router-link>
  </div>
</template>



<style >


 .box {
   width: 200px;
   height: 100px;
   display: flex;
   align-items: center;
   justify-content: center;
   font-weight: bold;
   color: white;
 }
 .box + .box {
   margin-top: 30px;
 }
.red {
  background-color: red;
  margin-left: auto;
}

.green {
  background-color: green;
}

.blue {
  background-color: blue;
}
</style>


