import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ecoleta-server.ngrok.io'
});

export default api;