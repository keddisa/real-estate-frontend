import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    params: { query: 'house' },
    headers: {
        Authorization: 'Client-ID 217ccca86cd0ce76a4f44bfbd11db44d2c8c4696db2068319790dedfb247d6e5'
    }
});