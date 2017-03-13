import axios from 'axios';
import Http from './Http';

class NewAxios {

    static getInstance() {
        let headers = {}
        let auth = Http.getToken();
        if (auth) {
            headers.Authorization = auth;
        }

        return axios.create({
            baseURL: Http.getBaseUrl(),
            headers
        });
    }

    static get(url, config) {
        let instance = NewAxios.getInstance();

        return instance.get(url, config);
    }

    static post(url, data, config) {
        let instance = NewAxios.getInstance();

        return instance.post(url, data, config);
    }

    static put(url, data, config) {
        let instance = NewAxios.getInstance();

        return instance.put(url, data, config);
    }

    static delete(url, config) {
        let instance = NewAxios.getInstance();

        return instance.delete(url, config);
    }

}

export default NewAxios;
