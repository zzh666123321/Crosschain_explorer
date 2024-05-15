import { createRouter, createWebHistory } from "vue-router";

// 导入要跳转的页面组件
import BlockchainA from "@/views/BlockchainA.vue";
import BlockchainB from "@/views/BlockchainB.vue";
import BlockchainC from "@/views/BlockchainC.vue";

const routes = [
    {
        path: "/blockchain/A",
        component: BlockchainA,
    },
    {
        path: "/blockchain/B",
        component: BlockchainB,
    },
    {
        path: "/blockchain/C",
        component: BlockchainC,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;