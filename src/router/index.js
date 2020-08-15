/* eslint-disable prettier/prettier */
import Vue from 'vue'
import VueRouter from 'vue-router'
import BlogList from '@/views/BlogList.vue'

import BlogContent from '@/views/BlogContent.vue';


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'blog-list',
        component: BlogList,

    },
    {
        path: '/blog/:id',
        name: 'blog-content',
        component: BlogContent,
        props: true
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router