import axios from "axios";

const api = axios.create({
    baseUrl: 'http://api.github.com/',
})

export default api;