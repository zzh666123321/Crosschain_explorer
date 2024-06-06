<template>
    <a-table :columns="columnsEth" :data-source="data" size="middle" :pagination="{ position: ['bottomCenter'] }">
        <template #bodyCell="{ column, text }">
            <template v-if="column.dataIndex === 'blockHeight'">
                <router-link :to="`/${from}/${text}`">{{ text }}</router-link>
            </template>

        </template>
    </a-table>
</template>

<script setup lang="ts">
import { columnsEth } from "@/models/block";
import { PropType } from "vue";
defineProps({
    data: Array as PropType<any[] | null>,
    from: String,
})

</script>