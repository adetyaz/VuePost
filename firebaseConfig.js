/* eslint-disable prettier/prettier */
import firebase from 'firebase'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
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
firebase.analytics()

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection,
}