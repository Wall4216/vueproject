
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.css'

window.Swal = Swal;
const toast = Swal.mixin({
    toast:true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
})
window.toast = toast;
import './bootstrap';
import {createApp} from 'vue'

import router from "./router";


import App from './components/App.vue'
import Index from './components/products/index.vue'

createApp(App).use(router).mount("#app")
