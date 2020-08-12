<template>
    <div>
        <form @submit.prevent="signup">
            <input
                type="text"
                v-model="credentials.username"
                name="name"
                placeholder="username"
            />
            <input
                type="email"
                v-model="credentials.email"
                name="email"
                placeholder="email"
            />
            <input
                type="password"
                v-model="credentials.password"
                name="password"
                placeholder="password"
            />
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    data() {
        return {
            credentials: {
                username: '',
                email: '',
                password: '',
            },
        }
    },
    methods: {
        signup() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(
                    this.credentials.email,
                    this.credentials.password
                )
                .then(res => {
                    res.user
                        .updateProfile({
                            displayName: this.credentials.username,
                        })
                        .then(() => {
                            this.$router.push('/login')
                        })
                })
                .catch(error => {
                    alert(error.message)
                })
        },
    },
}
</script>

<style lang="scss" scoped></style>
