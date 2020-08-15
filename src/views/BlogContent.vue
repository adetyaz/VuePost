<template>
    <div>
        <header
            class="masthead"
            style="background-image: url('../assets/images/post-bg.jpg')"
        >
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        <div class="post-heading">
                            <h1>
                                {{ event.title }}
                            </h1>
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
                        <p>
                            {{ event.body }}
                        </p>
                    </div>
                    <hr />
                    <h2 class="section-heading">Comments</h2>

                    <div
                        class="col-lg-8 col-md-10 mx-auto"
                        v-for="comment in comments"
                        :key="comment.id"
                    >
                        <p>
                            {{ comment.name }}
                        </p>
                        <p>
                            {{ comment.email }}
                        </p>
                        <p>
                            {{ comment.body }}
                        </p>
                    </div>
                </div>
            </div>
        </article>
        <br />
        <br />
        <br />

        <div>
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
            event: {},
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
                this.event = result.data
            })
            .catch(err => {
                console.log(err)
            })
        axios
            .get('http://localhost:3000/comments')
            .then(result => {
                this.comments = result.data
            })
            .catch(err => {
                console.log(err)
            })
    },
    methods: {
        submitComment: function(e) {
            e.preventDefault()
            // let obj = this
            axios
                .post('http://localhost:3000/comments', {
                    name: this.name,
                    email: this.email,
                    body: this.body,
                })
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

<style lang="scss" scoped></style>
