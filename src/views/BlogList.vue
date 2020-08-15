<template>
    <div>
        <header class="masthead">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        <img src="../assets/logo.png" alt="logo" class="logo" />
                        <div class="site-heading">
                            <h1>WeJapa Blog</h1>
                            <span class="subheading">Just Keep Going</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto" v-for="blog in blogs" :key="blog.id">
                    <div class="post-preview">
                        <router-link
                            :to="{
                                name: 'blog-content',
                                params: { id: blog.id },
                            }"
                        >
                            <h2 class="post-title">{{ blog.title }}</h2>
                            <h3 class="post-subtitle">{{ blog.body }}</h3>
                        </router-link>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EventService from '@/services/EventService.js'
export default {
    data() {
        return {
            blogs: [],
            backgroundImage: '@/assets/images/home-bg.jpg',
        }
    },
    created() {
        EventService.getBlogs()
            .then(result => {
                this.blogs = result.data
            })
            .catch(err => {
                console.log(
                    'there was an error loading this from the server' + err
                )
            })
    },
    // computed:{
    //     title(){
    //         return t
    //     }
    // }
}
</script>

<style lang="scss" scoped>
.post-title {
    font-size: 2rem;
    text-transform: capitalize;
    color: black;
}
.post-title:hover {
    color: rgba(40, 113, 247, 0.911);
}
.post-subtitle {
    font-size: 1.2rem;
    color: black;
}
.post-subtitle:hover {
    color: rgba(40, 113, 247, 0.911);
}
.post-preview {
    margin: 3rem;
}

.masthead {
    background: url('../assets/images/home-bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 23rem;
}
.site-heading {
    text-align: center;
    color: white;
    font-size: 2.5rem;
    font-weight: 700;
    padding-top: 5rem;
}
.logo {
    height: 6rem;
    margin: 1rem 0;
    padding: 0 18.5rem;
}
</style>
