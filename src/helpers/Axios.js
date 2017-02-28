import axios from 'axios';
import Http from './Http';

let headers = {}
let auth = Http.getToken();
if (auth) {
    headers.Authorization = auth;
}

const instance = axios.create({
    baseURL: Http.getBaseUrl(),
    headers
})

export default instance;
