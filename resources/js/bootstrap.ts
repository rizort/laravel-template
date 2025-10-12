import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.axios.defaults.baseURL = 'http://localhost:8001';
window.axios.defaults.withCredentials = true;
window.axios.defaults.withXSRFToken = true;
