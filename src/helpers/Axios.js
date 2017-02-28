import axios from 'axios';
import Http from './Http';

const instance = axios.create({
    baseURL: Http.host,
    headers: {
        Authorization: Http.getToken()
    }
})

export default instance;
