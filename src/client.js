// client.js

var axios = require('axios');

var axiosInstance = axios.create({
    baseURL: 'https://api.gorabbit.xyz',
    /* other custom settings */
});