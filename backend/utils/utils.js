const express = require('express');
const axios = require('axios');

const app = express()

const axiosInstance = axios.create({
    baseURL: `https://trefle.io/api/v1/plants/search?token=ygxSP6ZBnAfDFaBTRKTtVkg7G56ajDSjvz5LkVnjHfw&q=${search}`,
    headers: { 'X-Auth-Token' : '<some-token>'}
});

app.get('/data', async(req, res, next) => {
    try {
        const response = await axiosInstance.get('/<path>');
        // process your data and send back to the user
    } catch (error) {
        // handle if you got an error
    }
})