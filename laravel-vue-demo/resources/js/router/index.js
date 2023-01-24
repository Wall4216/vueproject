var BASE_URL = '{!! url().'/' !!}';

import {createRouter, createWebHistory} from 'vue-router'

import productIndex from '../components/products/index.vue'

import notFound from "../components/NotFound.vue";

const routes = [
    {
        path: '/',
        component: productIndex
    },
    {
        path: '/:pathMatch(.*)*',
        component: notFound
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
