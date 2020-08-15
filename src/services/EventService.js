import axios from 'axios'

const apiClient = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com`,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

export default {
    getBlogs() {
        return apiClient.get('/posts')
    },
    getBlog(id) {
        return apiClient.get('/posts/' + id)
    },
}