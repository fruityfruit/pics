import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID PHTvsNUxAp4T424rQJxpEZxNOkmd9JaXp7CJXuWmGA4'
    }
});