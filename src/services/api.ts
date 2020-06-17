import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ecoleta-server.ngrok.io:3333'
});

export default api;