

export const routes = [
    {
        path: '/',
        component: () => import("@/pages/pc/Login/Index.vue")
    },
    {
        path: '/main',name:'main',
        component: () => import("@/pages/pc/Home/Index.vue")
    },
    {
        path: '/allchain',name:'allchain',
        component: () => import("@/pages/pc/AllChain/Index.vue")
    },
    {
        path: '/transactions',name:'transactions',
        component: () => import("@/pages/pc/Transaction/List/Index.vue")
    },
    {
        path: '/ChainMakerblocks',name:'ChainMakerblocks',
        component: () => import("@/pages/pc/Block/List/Index.vue")
    },
    {
        path: '/Ethblocks',name:'Ethblocks',
        component: () => import("@/pages/pc/EthBlock/List/Index.vue")
    },
    {
        path: '/H2Chainblocks',name:'H2Chainblocks',
        component: () => import("@/pages/pc/H2ChainBlock/List/Index.vue")
    },
    {
        path: '/transaction/:hash',
        component: () => import("@/pages/pc/Transaction/Detail/Index.vue"),
        props: true
    },
    {
        path: '/block/:height',
        component: () => import("@/pages/pc/Block/Detail/Index.vue"),
        props: true
    },
    {
        path: '/address/:address',
        component: () => import("@/pages/pc/Address/Index.vue"),
        props: true
    },
    {
        path: '/user',
        component: () => import("@/pages/pc/User/Index.vue"),
        props: true
    },
    {
        path: '/login',
        component: () => import("@/pages/pc/Login/Index.vue"),
        props: true
    },
    {
        path: '/chain',name:'chain',
        component: () => import("@/pages/pc/Chains/blockchaininfo.vue"),
        props: true
    },
    {
        path: '/search',name:'search',
        component: () => import("@/pages/pc/Search111/Index.vue"),
        props: true
    },
    {
        path: '/crosschain',name:'crosschain',
        component: () => import("@/pages/pc/crosschain/List/Index.vue"),
        props: true
    },
    {
        path: '/crossTX',name:'crossTX',
        component: () => import("@/pages/pc/crosschain/Detail/Index.vue"),
        props: true
    },
    {
        path: '/crossend',name:'crossend',
        component: () => import("@/pages/pc/crosschain/result/Index.vue"),
        props: true
    },

]