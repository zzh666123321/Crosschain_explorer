<template>

    <a-table  ustomHeaderRow='color:red' :columns="columnsFabric" :data-source="data" size="middle" :pagination="{ position: ['bottomCenter'] }" :data1="data1">

        <template #bodyCell="{ column, text }">

            <template v-if="column.dataIndex === 'blockHeight'">

                <router-link :to="{path:`/${from}/${text}`,query:{chainIP: data1}}">{{ text }}</router-link>

            </template>

        </template>


    </a-table>
</template>

<script setup lang="ts">
import { columnsFabric } from "@/models/block";
import { PropType, watch } from "vue";
defineProps({
    data: Array as PropType<any[] | null>,
    data1: String,
    from: String,

})

</script>

<style>

*{

  font-size: 25px !important;
}
</style>