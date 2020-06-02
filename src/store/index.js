import Vue from 'vue'
import Vuex from 'vuex'

const fb = require('../../firebaseConfig')
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentUser: null,
        userProfile: {},
    },
    mutations: {
        setCurrentUser(state, value) {
            state.currentUser = value
        },
        setUserProfile(state, value) {
            state.userProfile = value
        },
    },
    actions: {
        fetchUserProfile({ commit, state }) {
            fb.usersCollection
                .doc(state.currentUser.uid)
                .get()
                .then(response => commit('setUserProfile', response.data()))
                .catch(error => {
                    console.log(error)
                })
        },
    },
    modules: {},
})