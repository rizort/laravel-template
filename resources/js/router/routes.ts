const routes = [
    {
        path: '/',
        component: () => import('@/components/Home.vue')
    },
    {
        path: '/demo/storage',
        component: () => import('@/components/demo/Storage.vue')
    },
    {
        path: '/demo/locale',
        component: () => import('@/components/demo/Locale.vue')
    },
    {
        path: "/:notFound",
        component: () => import('@/components/NotFound.vue')
    },
];

export default routes;
