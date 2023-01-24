import './bootstrap';
import {createApp} from 'vue'

import router from "./router";


import App from './components/App.vue'
import Index from './components/products/index.vue'

createApp(App).use(router).mount("#app")
