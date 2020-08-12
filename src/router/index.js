/* eslint-disable prettier/prettier */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import Login from '@/views/Login.vue'
import Registration from '@/views/Registration'
import Settings from '@/views/Settings.vue'
import Blog from '@/views/Blog.vue';
// import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [{
        path: '*',
        redirect: '/dashboard',
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/registration',
        name: 'Registration',
        component: Registration,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        // meta: {
        //     requiresAuth: true,
        // },
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog,
        // meta: {
        //     requiresAuth: true,
        // },
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings,
        meta: {
            requiresAuth: true,
        },
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router