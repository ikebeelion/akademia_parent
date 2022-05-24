import axios from 'axios'

let Api = axios.create({
    baseURL: "https://akademiaapi.herokuapp.com/api",
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('parenttoken') 
    },
})

Api.defaults.withCredentials = true

export default Api