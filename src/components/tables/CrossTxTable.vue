<template>
  <a-table :columns="columns" :data-source="data" size="middle" :pagination="{ position: ['bottomCenter'] }">
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'tx_id'">
        <router-link :to="'/crosstest/' + text">{{ text }}</router-link>
      </template>
      </template>
  </a-table>
</template>
<script setup lang="ts">
import { columns } from "@/models/transaction";
import { PropType } from "vue";
import { ArrowRightOutlined } from "@ant-design/icons-vue";
defineProps({
  data: Array as PropType<any[] | null>
})
</script>