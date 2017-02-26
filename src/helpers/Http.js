import $ from 'jquery';
import MyDispatcher from '../MyDispatcher';

class Http
{
    static host = 'http://api.mobile.dev/v1';

    static getHeaders() {
        let headers = {
            'Content-Type': 'application/json',
        };
        if (Http.isGuest()) {
            return headers;
        }

        return Object.assign(headers, {Authorization: Http.getToken()});
    }

    static get(obj, self)
    {
        obj.method = "GET";

        return Http._ajax(obj, self);
    }

    static post(obj, self)
    {
        obj.method = "POST";

        return Http._ajax(obj, self);
    }

    static _ajax(obj, self)
    {
        let headers = Http.getHeaders();
        headers = Object.assign(headers, obj.headers ? obj.headers : {});
        $.ajax({
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
                    MyDispatcher.dispatch({
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
        localStorage.setItem('token', token );
        localStorage.setItem('user', JSON.stringify(user));
    }

    static logout() {
        localStorage.clear();
    }

    static isGuest() {

        return !localStorage.getItem('token');
    }

    static getCurrentUser() {
        let user = null;
        if (!Http.isGuest()) {
            user = JSON.parse(localStorage.getItem('user'))
        }

        return user;
    }

    static getToken() {
        return localStorage.getItem('token');

    }
    static setBackUrl(url) {
        localStorage.setItem('backUrl', url);
    }

    static getBackUrl() {
        let url = localStorage.getItem('backUrl');
        localStorage.removeItem('backUrl');

        return url ? url : '/';
    }
}

export default Http;