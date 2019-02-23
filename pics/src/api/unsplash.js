import axios from 'axios';

// create a customized instance of axios
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 7a064555714ddfbc8677df6971c9b13b373e54bb3c0b9d44b3d800b9a02ff433'
    }
});
