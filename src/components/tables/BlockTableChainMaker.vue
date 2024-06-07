<template>
    <a-table :columns="columnsChainMaker" :data-source="data" size="middle" :pagination="{ position: ['bottomCenter'] }">
        <template #bodyCell="{ column, text }">
            <template v-if="column.dataIndex === 'blockHeight'">
                <router-link :to="`/${from}/${text}`">{{ text }}</router-link>
            </template>
        </template>
    </a-table>
</template>

<script setup lang="ts">
import { columnsChainMaker } from "@/models/block";
import { PropType, watch } from "vue";
defineProps({
    data: Array as PropType<any[] | null>,
    from: String,
})

</script>