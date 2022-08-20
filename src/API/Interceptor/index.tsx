import React from 'react';
import axios from 'axios';

const axiosInstance = axios.create({ baseURL: 'http://localhost:8000/' }); //Base url configuration


// Intereptor request
axiosInstance.interceptors.request.use(config => { 
    // const token = localStorage.getItem('auth_token');
    // if (token) {
    //     config.headers['Authorization'] = 'Bearer ' + token;
    // }
    if (!config) {
        config = {};
    }
    if (!config.headers) {
        config.headers = {};
    }
    config.headers['Content-Type'] = 'application/json'; // configured header part
    return config;
},error => {
    console.log(error, 'intercept error..');   
    Promise.reject(error)
});

// Intercept response
axiosInstance.interceptors.response.use((response) => { 
    console.log(response, 'res data..');
    
    return response
});

export default axiosInstance;