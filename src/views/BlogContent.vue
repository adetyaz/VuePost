<template>
    <div>
        <header class="mastheader">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        <div class="post-heading">
                            <h1>{{ blog.title }}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Post Content -->
        <article>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        <p class="body">{{ blog.body }}</p>
                    </div>
                    <hr />

                    <h2 class="section-comment">Comments</h2>
                    <div
                        class="col-lg-8 col-md-10 mx-auto"
                        v-for="comment in comments"
                        :key="comment.id"
                    >
                        <p>{{ comment.name }}</p>
                        <p>{{ comment.email }}</p>
                        <p>{{ comment.body }}</p>
                    </div>
                </div>
            </div>
        </article>
        <br />
        <br />
        <br />

        <div>
            <h3 class="comment">Add a Comment</h3>
            <form @submit.prevent="submitComment">
                <div class="control-group">
                    <div class="form-group floating-label-form-group controls">
                        <label>Name</label>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Name"
                            id="name"
                            v-model="name"
                        />
                        <p class="help-block text-danger"></p>
                    </div>
                </div>
                <div class="control-group">
                    <div class="form-group floating-label-form-group controls">
                        <label>Email Address</label>
                        <input
                            type="email"
                            class="form-control"
                            placeholder="Email Address"
                            id="email"
                            v-model="email"
                        />
                        <p class="help-block text-danger"></p>
                    </div>
                </div>

                <div class="control-group">
                    <div class="form-group floating-label-form-group controls">
                        <label>Message</label>
                        <textarea
                            rows="5"
                            class="form-control"
                            placeholder="Message"
                            id="message"
                            v-model="body"
                        ></textarea>
                        <p class="help-block text-danger"></p>
                    </div>
                </div>
                <br />
                <div id="success"></div>
                <button type="submit" class="btn btn-primary">Send</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import EventService from '@/services/EventService.js'
export default {
    props: ['id'],
    data() {
        return {
            blog: {},
            comments: [],
            name: '',
            body: '',
            email: '',
            // comment: '',
        }
    },
    created() {
        EventService.getBlog(this.id)
            .then(result => {
                this.blog = result.data
            })
            .catch(err => {
                console.log(err)
            })
        axios
            .get('https://my-json-server.typicode.com/adetyaz/VuePost/db')
            .then(result => {
                console.log(this.comments)
                this.comments = result.comments.data
            })
            .catch(err => {
                console.log(err)
            })
    },
    methods: {
        submitComment: function() {
            // let obj = this
            axios
                .post(
                    'https://my-json-server.typicode.com/adetyaz/VuePost/db',
                    {
                        name: this.name,
                        email: this.email,
                        body: this.body,
                    }
                )
                .then(function(response) {
                    this.comments = response.data
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
    },
}
</script>

<style lang="scss" scoped>
.mastheader {
    background: url('../assets/images/post-bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 25rem;
}
.post-heading {
    font-size: 2rem;
    padding-top: 4rem;
    text-transform: capitalize;
    color: rgb(226, 224, 241);
    font-weight: 600;
}
.form-control {
    width: 20rem;
}
form {
    padding-left: 31rem;
    padding-top: 5rem;
}
.body {
    font-size: 1.5rem;
    margin-top: 2rem;
    display: block;
}
.section-comment {
    font-size: 1.3rem;
    padding: 0 5rem;
}
.comment {
    text-align: center;
    font-size: 1.4rem;
    font-weight: 400;
}
</style>
