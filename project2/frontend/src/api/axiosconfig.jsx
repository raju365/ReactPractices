import axios from 'axios';

const instance = axios.create({
    baseURL: "https://shopx-backend-server1.onrender.com/",

});

export default instance;