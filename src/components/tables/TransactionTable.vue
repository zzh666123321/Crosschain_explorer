<template>
  <a-table
    :columns="columns"
    :data-source="data"
    size="middle"
    :pagination="{ position: ['bottomCenter'] }"
  >

  </a-table>
</template>

<script setup lang="ts">
import { ArrowRightOutlined } from "@ant-design/icons-vue";
import { columns } from "@/models/transaction";
import { PropType } from "vue";

defineProps({
  data: Array as PropType<any[] | null>,
});
</script>
