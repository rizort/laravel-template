import './bootstrap.ts';
import { createApp } from 'vue';
import i18n from './i18n/i18n.ts';
import router from './router/router.ts';
import store from './store/store.ts';
import App from './components/App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import ToastService from 'primevue/toastservice';

createApp(App)
    .use(router)
    .use(store)
    .use(i18n)
    .use(PrimeVue, {
        theme: {
            preset: Aura
        }
    })
    .use(ToastService)
    .mount('#app');
