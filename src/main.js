/* eslint-disable prettier/prettier */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/index.css'

import firebase from 'firebase'
import 'firebase/firestore'

Vue.config.productionTip = false

const firebaseConfig = {
        apiKey: 'AIzaSyCrXVbu4dBAsJQQmb9CjnAZ3UO2ho59Obw',
        authDomain: 'vue-blog-420.firebaseapp.com',
        databaseURL: 'https://vue-blog-420.firebaseio.com',
        projectId: 'vue-blog-420',
        storageBucket: 'vue-blog-420.appspot.com',
        messagingSenderId: '518553957349',
        appId: '1:518553957349:web:49a68470ad6eb97d98f50c',
        measurementId: 'G-ZP3VE9JTXZ',
    }
    // Initialize Firebase
firebase.initializeApp(firebaseConfig)


export const db = firebase.firestore();
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')