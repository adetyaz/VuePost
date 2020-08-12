// import Vue from 'vue'
// import Vuex from 'vuex'

// const fb = require('../../firebaseConfig.js')
// Vue.use(Vuex)

// export default new Vuex.Store({
//     state: {
//         currentUser: null,
//         userProfile: {},
//     },
//     mutations: {
//         setCurrentUser(state, value) {
//             state.currentUser = value
//         },
//         setUserProfile(state, value) {
//             state.userProfile = value
//         },
//     },
//     actions: {
//         fetchUserProfile({ commit, state }) {
//             fb.usersCollection
//                 .doc(state.auth.currentUser.uid)
//                 .get()
//                 .then(response => {
//                     commit('setUserProfile', response.data())
//                 })
//                 .catch(error => {
//                     console.log(error)
//                     console.log(error.message)
//                 })
//         },
//         clearData({ commit }) {
//             commit('setCurrentUser', null)
//             commit('setUserProfile', {})
//         },
//     },
//     modules: {},
//     // eslint-disable-next-line prettier/prettier
// })