import $ from 'jquery';
import store from '../Store';
import LocalStorage from './LocalStorage';

class Http {
    static host = 'http://api.mobile.dev/v1';

    static getBaseUrl() {
        return 'http://api.mobile.dev/v1';
    }

    static getHeaders() {
        let headers = {
            'Content-Type': 'application/json',
        };
        if (Http.isGuest()) {
            return headers;
        }

        return Object.assign(headers, {Authorization: Http.getToken()});
    }

    static get(obj, self) {
        obj.method = "GET";

        return Http._ajax(obj, self);
    }

    static post(obj, self) {
        obj.method = "POST";

        return Http._ajax(obj, self);
    }

    static put(obj, self) {
        obj.method = "PUT";

        return Http._ajax(obj, self);
    }

    static _ajax(obj, self) {
        let headers = Http.getHeaders();
        headers = Object.assign(headers, obj.headers ? obj.headers : {});
        return $.ajax({
            url: Http.host + obj.url,
            method: obj.method,
            headers: headers,
            success: obj.success,
            data: obj.data,
            dataType: 'json',
            processData: obj.processData,
            contentType: obj.contentType,
            error: (err) => {
                console.log(err);
                if (err.status === 401) {
                    Http.logout();
                    Http.setBackUrl(self.props.location.pathname);
                    store.dispatch({
                        type: 'LOGOUT',
                    });
                    self.props.router.push('/login');
                    return;
                }
                return obj.error(err);
            }
        });
    }

    static login(token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
    }

    static logout() {
        localStorage.clear();
    }

    static isGuest() {

        return LocalStorage.isGuest();
    }

    static getCurrentUser() {

        return LocalStorage.getCurrentUser();
    }

    static getToken() {

        return LocalStorage.getToken();
    }

    static setBackUrl(url) {
        localStorage.setItem('backUrl', url);
    }

    static getBackUrl() {
        let url = localStorage.getItem('backUrl');
        localStorage.removeItem('backUrl');

        return url ? url : '/';
    }

    static catchUnauthorized(error) {
        if (error.response) {
            if (error.response.status === 401) {
                Http.logout();
                Http.setBackUrl(this.props.location.pathname);
                this.props.router.push('/login');
                return;
            }
        }

        throw error;
    }

    static catchNotFound(error) {
        if (error.response) {
            if (error.response.status === 404) {
                this.setState({
                    'pageNotFound': true,
                })
                return;
            }
        }

        throw error;
    }
}

export default Http;