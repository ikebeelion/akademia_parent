import axios from 'axios'

let Api = axios.create({
    baseURL: "https://akademia.powerfields.ng/api",
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('parenttoken') 
    },
})

Api.defaults.withCredentials = true

export default Api
