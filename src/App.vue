<template>
    <div id="app">
        <Navigation v-if="currentUser"></Navigation>
        <router-view />
    </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import { mapState } from 'vuex'
export default {
    components: {
        Navigation,
    },
    computed: {
        ...mapState(['currentUser']),
    },
}
</script>
<style lang="scss">
#app {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
