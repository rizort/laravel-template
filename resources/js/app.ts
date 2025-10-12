import './bootstrap.ts';
import { createApp } from 'vue';
import i18n from './i18n/i18n.ts';
import router from './router/router.ts';
import store from './store/store.ts';
import App from './components/App.vue';

createApp(App)
    .use(router)
    .use(store)
    .use(i18n)
    .mount('#app');
