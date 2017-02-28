export default class LocalStorage {

    static isGuest() {

        return !localStorage.getItem('token');
    }

    static getCurrentUser() {
        let user = null;
        if (!LocalStorage.isGuest()) {
            user = JSON.parse(localStorage.getItem('user'))
        }

        return user;
    }

    static getToken() {
        return localStorage.getItem('token')
    }
}
