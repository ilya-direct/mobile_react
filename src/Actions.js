
export function changeBreadcrumb(name, properties) {
    return {
        'type': 'CHANGE_BREADCRUMB',
        'payload': {
            'name': name,
            properties,
        },
    };
}

export function logout() {
    return {
        'type' : 'LOGOUT',
    }
}

export function login(user) {
    return {
        type: 'LOGIN',
        payload: {
            auth: true,
            user: user,
        }
    }
}
