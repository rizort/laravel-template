<script setup>

</script>

<template>
    <div class="justify-center flex h-20 mt-0 mb-0 items-center gap-20 text-lg text-primary font-bold">
        <span>Laravel 12</span>
        <span>Tailwind CSS 4</span>
        <span>Vue.js 3</span>
    </div>

    <div class="h-20 flex mt-10 mb-20 items-center justify-center gap-20">
        <img src="/images/laravel-logo.svg" alt="" class="w-32 h-32 object-contain">
        <img src="/images/tailwindcss-logo.svg" alt="" class="w-32 h-32 object-contain">
        <img src="/images/vuejs-logo.svg" alt="" class="w-32 h-32 object-contain">
    </div>

    <div class="flex justify-center items-center">
        <nav class="flex space-x-10">
            <RouterLink to="/" class="rounded-md px-3 py-2 hover:bg-gray-500 hover:text-gray-100">Home</RouterLink>
            <RouterLink to="/demo/storage" class="rounded-md px-3 py-2 hover:bg-gray-500 hover:text-gray-100">Storage</RouterLink>
            <RouterLink to="/demo/locale" class="rounded-md px-3 py-2 hover:bg-gray-500 hover:text-gray-100">Locale</RouterLink>
        </nav>
    </div>

    <router-view></router-view>
</template>

<style scoped>

</style>
