

class Http
{


    static host = 'http://api.mobile.dev/v1';

    static post(url, body, errorFunc)
    {
        return null;
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
}

export default Http;